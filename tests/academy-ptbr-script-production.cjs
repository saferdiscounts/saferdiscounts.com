'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const read=p=>fs.readFileSync(path.join(__dirname,'..',p),'utf8');
const normal=s=>String(s||'').normalize('NFC').toLocaleLowerCase('pt-BR').replace(/\s+/g,' ').trim();
test('Portuguese recording scripts have precisely 160 authored target texts and 164 speakable takes',()=>{
 const originals=JSON.parse(read('ptbr-audio-recording-priority.json')),scripts=JSON.parse(read('ptbr-voice-scripts-v1.json')),index=JSON.parse(read('audio-text-index-ptbr.json'));
 assert.equal(scripts.schemaVersion,1);assert.equal(scripts.language,'pt-BR');assert.equal(scripts.sourceCount,160);
 assert.equal(scripts.voiceTakeCount,164);assert.equal(scripts.items.length,160);
 assert.equal(scripts.isHumanReviewed,false);assert.equal(scripts.hasAudio,false);assert.equal(scripts.readyForLearnerAudio,false);
 const existing=new Set(index.records.map(r=>normal(r.pt))), ids=new Set(),takeIds=new Set();
 let takes=0,alternatives=0;
 for(const [i,item] of scripts.items.entries()){
  const target=originals.items[i];
  assert.equal(item.id,'BR-'+String(i+1).padStart(3,'0'));
  assert.ok(!ids.has(item.id));ids.add(item.id);
  assert.equal(item.displayText,target.text);assert.equal(item.arabic,target.arabic);
  assert.equal(item.sourceGroup,target.source);assert.equal(item.level,target.level);
  assert.equal(item.lesson,target.lesson);
  assert.equal(item.reviewStatus,'draft-unreviewed');
  assert.ok(!existing.has(normal(item.displayText)),'old index has this source phrase');
  assert.ok(item.recordingTakes.length>=1&&item.recordingTakes.length<=2);
  if(item.recordingTakes.length===2)alternatives++;
  for(const take of item.recordingTakes){
   assert.ok(!takeIds.has(take.id));takeIds.add(take.id);takes++;
   assert.ok(take.text.length>1);
   assert.doesNotMatch(take.text,/\s\/\s|…/,'A slash-separated option or blank template is not a natural spoken phrase');
   assert.equal(take.normal,'TO_RECORD');assert.equal(take.slow,'TO_RECORD');
  }
 }
 assert.equal(alternatives,4);assert.equal(takes,164);
 const count=scripts.items.reduce((o,row)=>(o[row.sourceGroup]=(o[row.sourceGroup]||0)+1,o),{});
 assert.deepEqual(count,{'practical-trainer':80,'a1-vocabulary':20,'foundation-vocabulary':20,'a1-dialogues':20,'travel-dialogues':20});
 const doc=read('PTBR_RECORDING_SCRIPTS_V1.md');
 for(const row of scripts.items)assert.ok(doc.includes('**'+row.id+' · '+row.level+'**'),row.id+' missing from readable narrator sheet');
 assert.match(doc,/غير معتمدة|لم تُعتمد/);
});
test('Portuguese template and grammatical alternatives are explicitly read, not recorded with slash tokens or ellipsis',()=>{
 const scripts=JSON.parse(read('ptbr-voice-scripts-v1.json'));
 const examples=Object.fromEntries(scripts.items.filter(r=>r.recordingTakes.length>1||r.displayText.includes('…')).map(r=>[r.displayText,r.recordingTakes.map(x=>x.text)]));
 assert.deepEqual(examples,{
  'Meu nome é…':['Meu nome é Ahmed.'],
  'um / uma':['um','uma'],
  'dois / duas':['dois','duas'],
  'quatorze / catorze':['quatorze','catorze'],
  'duzentos / duzentas':['duzentos','duzentas']
 });
 assert.ok(scripts.items.every(x=>x.recordingTakes.every(v=>v.text.trim())));
 assert.ok(scripts.items.every(x=>!x.editorialNote||x.reviewStatus==='draft-unreviewed'));
});

test('Recording manuscript browse page gives reviewers Arabic context, separate speaking variants and honest draft status',()=>{
 const page=read('ptbr-recording-scripts.html'),audio=read('academy-audio-status.html');
 const script=page.match(/<script>([\s\S]*?)<\/script>/);
 assert.ok(script&&script[1],'Script browser JS missing');
 const vm=require('node:vm');
 assert.doesNotThrow(()=>new vm.Script(script[1],{filename:'ptbr-recording-scripts.html'}));
 assert.match(page,/fetch\('ptbr-voice-scripts-v1\.json'/);
 assert.match(page,/navigator\.clipboard\.writeText\(t\.text\)/);
 assert.match(page,/isHumanReviewed/);
 assert.match(page,/164 قراءة مستقلة/);
 assert.match(page,/328 ملف صوت مخطط/);
 assert.ok(audio.includes("link('ptbr-recording-scripts.html'"));
});
