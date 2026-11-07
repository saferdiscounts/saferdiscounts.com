#!/usr/bin/env node
/**
 * Stage 1: fetch each R2 recording and transcribe with a configured ASR HTTP service.
 * This tool never assumes an ASR transcript is a verified pronunciation.
 * Required environment: PTBR_ASR_URL (POST accepts multipart audio file),
 * optional PTBR_ASR_TOKEN, PTBR_AUDIO_BASE_URL, PTBR_ASR_MODEL.
 * Compatible with OpenAI-style /v1/audio/transcriptions services returning {text}.
 * Usage: node scripts/transcribe-ptbr-r2.cjs [--limit N] [--resume results.json] [--output results.json]
 */
'use strict';
const fs=require('node:fs'),path=require('node:path');
const index=JSON.parse(fs.readFileSync(path.join(__dirname,'..','audio-text-index-ptbr.json'),'utf8'));
const args=process.argv.slice(2);
const opt=(flag,defaultValue)=>{const i=args.indexOf(flag);return i<0?defaultValue:args[i+1]};
const output=opt('--output','ptbr-asr-evidence.json');
const limit=Number(opt('--limit',String(index.records.length*2)));
if(!Number.isInteger(limit)||limit<1)throw Error('--limit must be a positive integer');
const endpoint=process.env.PTBR_ASR_URL;
if(!endpoint||!/^https:\/\//.test(endpoint))throw Error('Set PTBR_ASR_URL to an HTTPS audio transcription endpoint');
const base=process.env.PTBR_AUDIO_BASE_URL||'https://audio.saferdiscounts.com/ptbr/';
if(!/^https:\/\//.test(base))throw Error('Audio base URL must use HTTPS');
const valid=/^(basic|advanced)\/[a-z0-9_/-]+\.mp3$/;
const queue=index.records.flatMap(item=>['normal','slow'].map(speed=>({path:item[speed],speed,expectedText:item.pt}))).slice(0,limit);
const existing=opt('--resume',null);
const results=existing&&fs.existsSync(existing)?JSON.parse(fs.readFileSync(existing,'utf8')):[];
if(!Array.isArray(results))throw Error('Resume evidence must be an array');
const completed=new Set(results.filter(x=>x.transcript).map(x=>x.path));
const sleep=ms=>new Promise(resolve=>setTimeout(resolve,ms));
async function run(){
 for(const [i,item] of queue.entries()){
  if(!valid.test(item.path))throw Error('Unsafe audio key: '+item.path);
  if(completed.has(item.path))continue;
  const url=new URL(item.path,base.endsWith('/')?base:base+'/');
  let outcome={path:item.path,engine:process.env.PTBR_ASR_MODEL||'configured-asr',transcript:null,error:null};
  for(let attempt=1;attempt<=3;attempt++){
   try{
    const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),30000);
    let audio;
    try{audio=await fetch(url,{signal:controller.signal})}finally{clearTimeout(timer)}
    if(!audio.ok)throw Error('audio HTTP '+audio.status);
    const bytes=await audio.arrayBuffer();
    if(bytes.byteLength<128)throw Error('Audio response too small');
    const form=new FormData();
    form.append('file',new Blob([bytes],{type:'audio/mpeg'}),path.basename(item.path));
    form.append('model',process.env.PTBR_ASR_MODEL||'whisper-1');
    form.append('language','pt');
    form.append('response_format','json');
    const headers={};if(process.env.PTBR_ASR_TOKEN)headers.Authorization='Bearer '+process.env.PTBR_ASR_TOKEN;
    const ctrl=new AbortController(),timeout=setTimeout(()=>ctrl.abort(),90000);
    let response;
    try{response=await fetch(endpoint,{method:'POST',headers,body:form,signal:ctrl.signal})}finally{clearTimeout(timeout)}
    if(!response.ok)throw Error('ASR HTTP '+response.status+': '+(await response.text()).slice(0,200));
    const json=await response.json();
    const transcript=typeof json.text==='string'?json.text.trim():typeof json.transcript==='string'?json.transcript.trim():'';
    if(!transcript)throw Error('ASR returned no transcript');
    outcome={...outcome,transcript,error:null,attempts:attempt,confidence:Number.isFinite(json.confidence)?json.confidence:null};
    break;
   }catch(e){outcome.error=String(e.message||e);outcome.attempts=attempt;if(attempt<3)await sleep(800*attempt)}
  }
  const old=results.findIndex(x=>x.path===item.path);
  if(old>=0)results[old]=outcome;else results.push(outcome);
  fs.writeFileSync(output,JSON.stringify(results,null,2)+'\n');
  console.log((i+1)+'/'+queue.length+' '+item.path+' '+(outcome.transcript?'transcribed':'UNVERIFIED '+outcome.error));
 }
 const count=results.filter(x=>x.transcript).length;
 console.log('Evidence saved: '+output+'; transcribed='+count+'; expected='+queue.length);
 if(count<queue.length)process.exitCode=1;
}
run().catch(e=>{console.error(e);process.exitCode=1});
