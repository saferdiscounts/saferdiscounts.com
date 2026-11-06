'use strict';
// Rebuild this audit snapshot from the Cloudflare R2 list-objects API when recordings change.
// Run: node --test tests/academy-r2-object-inventory.cjs
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const read=name=>fs.readFileSync(path.join(__dirname,'..',name),'utf8');
const byLang={en:'english/',it:'italian/',es:'spanish/',ru:'russian/',pt:'portuguese/'};
const audit=JSON.parse(read('academy-audio-audit.json'));
test('R2 object snapshot covers all eight languages without assuming every clip has a transcript',()=>{
 assert.equal(audit.storageAudit.source.includes('Cloudflare R2'),true);
 const storage=audit.storageAudit.languages;
 const languages=Object.keys(storage).sort();
 assert.deepEqual(languages,['de','en','es','fr','it','pt','ptbr','ru'].sort());
 let mp3=0,pairs=0,unpaired=0,other=0;
 for(const key of languages){
  const e=storage[key];
  assert.equal(e.mp3,e.paired*2+e.solo,key+' inconsistent normal+slow count');
  assert.equal(e.files,e.mp3+e.other,key+' inconsistent object count');
  mp3+=e.mp3;pairs+=e.paired;unpaired+=e.solo;other+=e.other;
 }
 assert.equal(mp3,7044);
 assert.equal(pairs,3506);
 assert.equal(unpaired,32);
 assert.equal(other,2);
 for(const key of Object.keys(byLang)){
  assert.equal(audit.languages[key].exactMatches,null,key+' has no reviewed audio-to-word coverage yet');
  assert.equal(audit.languages[key].mapping,'no-local-text-index');
 }
});
test('Every unidentified audio clip has a safe R2 key and a matching slow file only when actually present',()=>{
 for(const [lang,prefix] of Object.entries(byLang)){
  const inv=JSON.parse(read('audio-review-inventory-'+lang+'.json'));
  assert.equal(inv.lang,lang);
  assert.equal(inv.schemaVersion,1);
  assert.equal(inv.bucket,'saferdiscounts-audio');
  assert.equal(inv.prefix,prefix);
  assert.equal(inv.items.length,inv.normalFiles);
  assert.equal(inv.paired,audit.storageAudit.languages[lang].paired);
  assert.equal(inv.unpairedNormal,audit.storageAudit.languages[lang].solo);
  const seen=new Set();let paired=0;
  for(const row of inv.items){
   assert.ok(Array.isArray(row)&&row.length===2,lang+' expected normal and optional slow key');
   const [normal,slow]=row;
   assert.ok(normal.startsWith(prefix)&&/^[a-z0-9/_-]+\.mp3$/.test(normal),lang+' unsafe normal MP3 path');
   assert.ok(!normal.endsWith('_slow.mp3'),lang+' normal file mislabeled');
   assert.ok(!seen.has(normal),lang+' duplicate recording key');
   seen.add(normal);
   if(slow!==null){
    assert.equal(slow,normal.replace(/\.mp3$/,'_slow.mp3'),lang+' slow file not the normal file pair');
    paired++;
   }
  }
  assert.equal(paired,inv.paired,lang+' paired count mismatch');
  assert.equal(inv.normalFiles-paired,inv.unpairedNormal,lang+' solo count mismatch');
  assert.ok(!inv.items.some(x=>x.length>2),lang+' source file inventory should not claim any word transcription');
 }
});
test('English academy uses its 31 existing R2 lesson recordings and labels slowed playback honestly',()=>{
 const inv=JSON.parse(read('audio-review-inventory-en.json'));
 const lessonKeys=inv.items.map(row=>row[0]).filter(path=>/^english\/lessons\/lesson-\d{2}\.mp3$/.test(path)).sort();
 assert.deepEqual(lessonKeys,Array.from({length:31},(_,i)=>'english/lessons/lesson-'+String(i+1).padStart(2,'0')+'.mp3'));
 const english=read('english-academy.html');
 assert.match(english,/if\(i<31\)/);
 assert.match(english,/const mp3='https:\/\/audio\.saferdiscounts\.com\/english\/lessons\/lesson-'/);
 assert.match(english,/leaAlphabet=i===1/);
 assert.match(english,/نفس الملف/);
 assert.ok(!english.includes('i+1===32?'),'unreachable external MP3/WAV conditional must not return');
 const inline=[...english.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].map(m=>m[1]).filter(Boolean);
 for(const script of inline)assert.doesNotThrow(()=>new vm.Script(script));
});
test('Review workbench only labels files after manual acknowledgement and exports without auto-publishing',()=>{
 const html=read('audio-review-workbench.html');
 const scripts=[...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].map(m=>m[1]).filter(Boolean);
 assert.ok(scripts.length>=1);
 for(const script of scripts)assert.doesNotThrow(()=>new vm.Script(script));
 assert.match(html,/safePath\(path,code\)/);
 assert.match(html,/checked\.checked/);
 assert.match(html,/localStorage\.setItem/);
 assert.match(html,/audio-review-inventory-/);
 assert.match(html,/exportedAt/);
 assert.ok(!html.includes('PUT /r2'),'Review UI should not mutate R2');
});
test('Audio reporting keeps object existence and exact word-to-file matches separate',()=>{
 const report=read('academy-audio-status.html');
 assert.match(report,/storageAudit/);
 assert.match(report,/record\.mapping==='exact-index'/);
 assert.match(report,/storage\.paired/);
 assert.match(read('language-academy.html'),/href="audio-review-workbench\.html"/);
 assert.match(read('pronunciation-audio-library.html'),/href="audio-review-workbench\.html"/);
 const scripts=[...report.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].map(m=>m[1]).filter(Boolean);
 for(const script of scripts)assert.doesNotThrow(()=>new vm.Script(script));
});
