'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const read=p=>fs.readFileSync(path.join(__dirname,'..',p),'utf8');
const norm=x=>String(x||'').normalize('NFC').toLocaleLowerCase('pt-BR').replace(/\s+/g,' ').trim();
test('Brazilian voice production remains a fixed 160-item evidence-based backlog rather than indefinite invented uploads',()=>{
 const p=JSON.parse(read('ptbr-audio-recording-priority.json')),idx=JSON.parse(read('audio-text-index-ptbr.json'));
 assert.equal(p.schemaVersion,1);assert.equal(p.locale,'pt-BR');
 assert.equal(p.readyForPublication,false);assert.equal(p.items.length,160);
 assert.deepEqual(p.counts,{total:160,trainer:80,lessonWords:40,lessonDialogues:40});
 const by=p.items.reduce((z,x)=>(z[x.source]=(z[x.source]||0)+1,z),{});
 assert.deepEqual(by,{'practical-trainer':80,'a1-vocabulary':20,'foundation-vocabulary':20,'a1-dialogues':20,'travel-dialogues':20});
 const existing=new Set(idx.records.map(x=>norm(x.pt))),seen=new Set();
 for(const row of p.items){
  const key=norm(row.text);assert.ok(key);assert.ok(!seen.has(key),'duplicate script: '+row.text);seen.add(key);
  assert.ok(!existing.has(key),'recording already has a literal R2 source: '+row.text);
  assert.ok(typeof row.arabic==='string'&&row.arabic.trim().length>1);
  assert.equal(row.humanValidated,false);
  assert.equal(row.recordingStatus,'missing-exact-source-text');
 }
});
