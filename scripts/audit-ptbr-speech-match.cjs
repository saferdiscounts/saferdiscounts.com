#!/usr/bin/env node
/**
 * Stage 1: evidence-based pt-BR R2 speech/text alignment.
 * Usage: node scripts/audit-ptbr-speech-match.cjs [asr-results.json] [report.json]
 * ASR input: [{path:"basic/bas_01_001.mp3", transcript:"...", engine:"...", confidence:0.9}]
 * No transcript is never considered a pass. Recognition alone never certifies pronunciation.
 */
'use strict';
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const index=JSON.parse(fs.readFileSync(path.join(root,'audio-text-index-ptbr.json'),'utf8'));
const input=process.argv[2] ? JSON.parse(fs.readFileSync(process.argv[2],'utf8')) : [];
const samples=Array.isArray(input)?input:input.results;
if(!Array.isArray(samples))throw Error('ASR evidence must be an array or {results:[]}');
const valid=/^(basic|advanced)\/[a-z0-9_/-]+\.mp3$/;
const normalized=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('pt-BR').replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim();
const distance=(a,b)=>{const x=a.split(' ').filter(Boolean),y=b.split(' ').filter(Boolean);let prev=Array.from({length:y.length+1},(_,i)=>i);for(let i=1;i<=x.length;i++){const next=[i];for(let j=1;j<=y.length;j++)next[j]=Math.min(next[j-1]+1,prev[j]+1,prev[j-1]+(x[i-1]===y[j-1]?0:1));prev=next}return {edits:prev[y.length],denominator:Math.max(x.length,y.length,1)}};
const evidence=new Map(),duplicates=[];
for(const entry of samples){if(!entry||!valid.test(entry.path||''))throw Error('Invalid evidence path: '+String(entry&&entry.path));if(evidence.has(entry.path)){duplicates.push(entry.path);continue}evidence.set(entry.path,entry)}
const expected=new Set(),results=[];
for(const item of index.records){for(const speed of ['normal','slow']){const key=item[speed];if(!valid.test(key))throw Error('Invalid index path: '+key);if(expected.has(key))throw Error('Duplicate index path: '+key);expected.add(key);const e=evidence.get(key),spoken=typeof e?.transcript==='string'?e.transcript.trim():'',target=normalized(item.pt),heard=normalized(spoken);const comparison=spoken?distance(target,heard):null;const similarity=comparison?Math.max(0,1-comparison.edits/comparison.denominator):null;const status=!spoken?'unverified':similarity===1?'asr-exact-match':similarity>=0.8?'review-minor-difference':'review-mismatch';results.push({path:key,speed,section:item.section,expectedText:item.pt,arabicGloss:item.gl,glProvenance:item.glProvenance,asrTranscript:spoken||null,asrEngine:e?.engine||null,asrConfidence:Number.isFinite(e?.confidence)?e.confidence:null,similarity,status,pronunciationVerified:false,humanVerified:false})}}
const unknown=[...evidence.keys()].filter(k=>!expected.has(k));
const counts=Object.fromEntries(['unverified','asr-exact-match','review-minor-difference','review-mismatch'].map(s=>[s,results.filter(x=>x.status===s).length]));
const report={schemaVersion:1,stage:'ptbr-r2-speech-text-alignment',method:'Conservative normalized word-edit similarity on independently supplied ASR evidence. Exact ASR matches are NOT linguistic or pronunciation approval.',expectedFiles:expected.size,asrProvided:evidence.size,counts,duplicateEvidencePaths:duplicates,unknownEvidencePaths:unknown,results};
const output=process.argv[3];if(output)fs.writeFileSync(output,JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({expectedFiles:report.expectedFiles,asrProvided:report.asrProvided,counts,duplicateEvidencePaths:duplicates.length,unknownEvidencePaths:unknown.length,report:output||'not written'},null,2));
if(duplicates.length||unknown.length)process.exitCode=1;
