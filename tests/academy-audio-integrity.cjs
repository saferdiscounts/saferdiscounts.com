'use strict';
// node --test tests/academy-audio-integrity.cjs
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const read=file=>fs.readFileSync(path.join(__dirname,'..',file),'utf8');
const normalise=value=>String(value||'').normalize('NFC').toLocaleLowerCase().replace(/\s+/g,' ').trim();
function readLessonArray(src){
 const marker='const lessons=',at=src.indexOf(marker);
 assert.notEqual(at,-1,'Missing academy lesson source');
 const start=src.indexOf('[',at+marker.length);
 let depth=0,quoted=false,escaped=false;
 for(let i=start;i<src.length;i++){
  const c=src[i];
  if(quoted){if(escaped)escaped=false;else if(c==='\\')escaped=true;else if(c==='"')quoted=false;continue;}
  if(c==='"'){quoted=true;continue;}
  if(c==='[')depth++;
  if(c===']'&&!--depth)return JSON.parse(src.slice(start,i+1));
 }
 throw Error('Academy lesson array did not close');
}
test('All eight academy statuses are present and unknown is not counted as zero',()=>{
 const data=JSON.parse(read('academy-audio-audit.json'));
 assert.equal(data.schemaVersion,1);
 assert.deepEqual(Object.keys(data.languages).sort(),['de','en','es','fr','it','pt','ptbr','ru'].sort());
 for(const lang of ['ptbr','en','es','it','pt','ru']){
  const entry=data.languages[lang];
  assert.ok(entry.lessons>0,lang+' should have lessons');
  assert.equal(entry.words,null,lang+' no verified words denominator');
  assert.equal(entry.exactMatches,null,lang+' no verified mapped count');
  assert.notEqual(entry.mapping,'exact-index');
 }
});
test('French and German counts reproduce from exact unique source mappings, not guessed translations',()=>{
 const audit=JSON.parse(read('academy-audio-audit.json'));
 const safe=/^(basic|advanced)\/[a-z0-9_]+\.mp3$/;
 for(const [lang,academy] of [['fr','french-academy.html'],['de','german-academy.html']]){
  const source=JSON.parse(read('audio-text-index-'+lang+'.json'));
  const lessons=readLessonArray(read(academy));
  const groups=new Map();
  for(const r of source.records){
   assert.ok(safe.test(r.normal),lang+': unexpected normal path');
   assert.ok(safe.test(r.slow),lang+': unexpected slow path');
   const key=normalise(r.text);
   if(!groups.has(key))groups.set(key,[]);
   groups.get(key).push(r);
  }
  const expected=audit.languages[lang];
  assert.equal(expected.sourceRecords,source.records.length);
  assert.equal(expected.sourceUnique,groups.size);
  assert.equal(expected.sourceAmbiguousTexts,[...groups.values()].filter(v=>v.length>1).length);
  assert.equal(expected.lessons,lessons.length);
  let wordCount=0,matchCount=0,ambiguous=0;
  for(let i=0;i<lessons.length;i++){
   const words=lessons[i].words;
   let matches=0,uncertain=0;
   for(const word of words){
    const records=groups.get(normalise(word[0]))||[];
    wordCount++;
    if(records.length===1&&safe.test(records[0].normal)&&safe.test(records[0].slow)){matchCount++;matches++;}
    if(records.length>1){ambiguous++;uncertain++;}
   }
   assert.equal(expected.levels[i].words,words.length,lang+' lesson '+(i+1)+' count stale');
   assert.equal(expected.levels[i].matched,matches,lang+' lesson '+(i+1)+' match count stale');
   assert.equal(expected.levels[i].ambiguous,uncertain,lang+' lesson '+(i+1)+' ambiguity stale');
  }
  assert.equal(expected.words,wordCount,lang+' lesson word denominator stale');
  assert.equal(expected.exactMatches,matchCount,lang+' mapped word count stale');
  assert.equal(expected.ambiguousMatches,ambiguous,lang+' ambiguous mapping count stale');
  assert.ok(matchCount<wordCount,'No unsupported full-coverage claim');
 }
});
test('Playback remains restricted to valid relative MP3 paths and reviewed text mappings',()=>{
 const verified=read('verified-academy-audio.js');
 assert.match(verified,/entries\.get\(normalize\(word\.textContent\)\)/);
 assert.match(verified,/speechSynthesis\.cancel\(\)/);
 assert.match(verified,/row\.slow!==row\.normal\.replace/);
 assert.match(verified,/card\.dataset\.sdVerifiedAudio===key/);
 assert.match(verified,/control\.dataset\.sdVerifiedAudio===key/);
 assert.match(verified,/items\.length===1/);
 assert.match(verified,/record\.normal/);
 assert.match(verified,/record\.slow/);
 assert.match(verified,/academy-audio-status\.html\?lang=/);
 assert.doesNotThrow(()=>new vm.Script(verified));
 const html=read('pronunciation-audio-library.html');
 const js=html.match(/<script>([\s\S]*?)<\/script>/);
 assert.ok(js);
 assert.doesNotThrow(()=>new vm.Script(js[1]));
 assert.match(js[1],/safeRemote\.test\(path\)/);
 assert.match(js[1],/safePart\.test\(rec\.normal/);
 assert.match(js[1],/audio-text-index-/);
 assert.match(js[1],/entries\.length!==1/);
});
test('The catalog and audio library link users to the provenance report',()=>{
 assert.match(read('language-academy.html'),/href="academy-audio-status\.html"/);
 assert.match(read('pronunciation-audio-library.html'),/href="academy-audio-status\.html"/);
 const html=read('academy-audio-status.html');
 assert.match(html,/fetch\('academy-audio-audit\.json'/);
 assert.match(html,/item\.mapping!=='exact-index'/);
 assert.doesNotThrow(()=>new vm.Script(html.match(/<script>([\s\S]*?)<\/script>/)[1]));
});

test('Brazilian audio bridge excludes ambiguous or malformed sound paths and updates coverage on lesson switches',()=>{
 const html=read('ptbr-academy.html');
 const embedded=[...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)]
  .map(m=>m[1]).filter(Boolean);
 assert.ok(embedded.length,'No academy code');
 for(const script of embedded)assert.doesNotThrow(()=>new vm.Script(script));
 assert.match(html,/ptbrAudioIndex=new Map/);
 assert.match(html,/safePtbrAudioPath\.test\(item\.normal/);
 assert.match(html,/safePtbrAudioPath\.test\(item\.slow/);
 assert.match(html,/rows\.length===1/);
 assert.match(html,/updatePtbrAudioConnection\(l\)/);
 assert.match(html,/ptbrAudioFailed/);
});

test('Russian lesson quiz randomizes answer positions and checks the actual correct choice',()=>{
 const html=read('russian-academy.html');
 assert.match(html,/const quizChoices=/);
 assert.match(html,/const quizCorrect=quizChoices\.indexOf\(quizWord\[2\]\)/);
 assert.match(html,/quizChoices\.map\(\(a,i\)=>/);
 assert.match(html,/Number\(b\.dataset\.answer\)===quizCorrect/);
});

test('Five European academies balance vocabulary and practical scenario checks',()=>{
 for(const lang of ['italian','spanish','french','german','portuguese']){
  const html=read(lang+'-academy.html');
  assert.match(html,/const scenarioBank=lessons\.filter/,lang+' scenario bank');
  assert.match(html,/x\.options\.map\(\(text,i\)=>\(\{text,correct:i===x\.correct\}\)\)/,lang+' answer mapping');
  assert.match(html,/shuffle\(bank\)\.slice\(0,6\)/,lang+' vocabulary count');
  assert.match(html,/shuffle\(scenarioBank\)\.slice\(0,6\)/,lang+' scenario count');
 }
});
