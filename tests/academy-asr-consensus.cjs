'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const read=p=>fs.readFileSync(path.join(__dirname,'..',p),'utf8');
const norm=s=>String(s||'').normalize('NFC').toLocaleLowerCase().replace(/[.!?¿¡,;:…“”"'«»()]/g,'').replace(/\s+/g,' ').trim();
const entries={en:'english',it:'italian',es:'spanish',ru:'russian',pt:'portuguese'};
function extract(s,marker){
 const p=s.indexOf(marker);assert.ok(p>=0,'Expected '+marker);
 const start=s.indexOf('[',p+marker.length);let depth=0,str=false,escape=false;
 for(let i=start;i<s.length;i++){
  const c=s[i];if(str){if(escape)escape=false;else if(c==='\\')escape=true;else if(c==='"')str=false;continue;}
  if(c==='"'){str=true;continue;}
  if(c==='[')depth++;else if(c===']'&&!--depth)return JSON.parse(s.slice(start,i+1));
 }throw Error('Incomplete '+marker);
}
function academyWords(lang){
 const file=read(entries[lang]+'-academy.html');
 const result=[];
 if(lang==='en'){
  const chapters=extract(file,'const chapters=');
  for(let i=0;i<chapters.length;i++)for(const b of chapters[i].blocks||[]){
   if(b.type==='dialogue')for(const z of b.lines||[])result.push({text:z.orig,lesson:i});
   if(b.type==='table')for(const row of b.rows||[])for(const cell of row){
    if(cell&&typeof cell.t==='string'&&/^[a-z][a-z .!?/()-]+$/i.test(cell.t)&&cell.t.length<80)result.push({text:cell.t,lesson:i});
   }
  }
 }else if(lang==='ru'){
  const vocab=extract(file,'const vocab=');
  for(let i=0;i<vocab.length;i++)for(const word of vocab[i])result.push({text:word[0],lesson:i});
 }else {
  const lessons=extract(file,'const lessons=');
  for(let i=0;i<lessons.length;i++)for(const word of lessons[i].words)result.push({text:word[0],lesson:i});
 }
 return result;
}
const atlas=JSON.parse(read('audio-asr-provisional-links.json'));
const audit=JSON.parse(read('academy-audio-audit.json'));
test('All candidate source transcripts are grounded in two distinct R2 recordings with clear review limitations',()=>{
 assert.equal(atlas.schemaVersion,1);
 assert.equal(atlas.status,'provisional-automated');
 assert.match(atlas.confidencePolicy,/no human listener/i);
 let analyzed=0,agreed=0,total=0;
 for(const lang of Object.keys(entries)){
  const file=JSON.parse(read('audio-asr-candidates-'+lang+'.json'));
  const a=audit.asrProvisionalAudit.languages[lang];
  assert.equal(file.reviewStatus,'automated-unverified');
  assert.equal(file.requested,file.records.length);
  assert.equal(file.agreed,file.records.filter(r=>r.agreed).length);
  assert.equal(file.exactLessonCandidates,file.records.filter(r=>r.exactLesson).length);
  assert.equal(a.analyzedPairs,file.records.length);
  assert.equal(a.agreeingTranscripts,file.agreed);
  assert.equal(a.exactCourseProposals,file.exactLessonCandidates);
  assert.equal(a.reviewedByHuman,0);
  const names=new Set();
  for(const record of file.records){
   assert.ok(!names.has(record.normal),lang+' duplicate R2 normal key');
   names.add(record.normal);
   assert.match(record.normal,new RegExp('^'+entries[lang]+'/pronunciation/(basic|advanced)/[a-z0-9_]+\\.mp3$'));
   assert.equal(record.slow,record.normal.replace(/\.mp3$/,'_slow.mp3'));
   if(record.agreed)assert.equal(norm(record.original?.text),norm(record.slowRecognition?.text),lang+' false ASR agreement');
  }
  analyzed+=file.records.length;agreed+=file.agreed;total+=file.exactLessonCandidates;
 }
 assert.ok(analyzed>=200,'At least first 40 pairs per language audited');
 assert.ok(agreed>=70,'Reasonable number of two-speed machine agreements');
 assert.ok(total>=24,'Expected source-aware provisional matches');
});
test('Every proposed phrase matches one unambiguous word within the correct original academy lesson',()=>{
 let verifiedPaths=0;
 for(const [lang,prefix] of Object.entries(entries)){
  const published=atlas.languages[lang],file=JSON.parse(read('audio-asr-candidates-'+lang+'.json'));
  const inv=JSON.parse(read('audio-review-inventory-'+lang+'.json'));
  const objects=new Set(inv.items.flatMap(row=>row.filter(Boolean)));
  const byPhrase=new Map();
  for(const w of academyWords(lang)){
   const key=norm(w.text);if(!byPhrase.has(key))byPhrase.set(key,[]);
   byPhrase.get(key).push(w);
  }
  const possible=new Map(file.records.filter(row=>row.agreed&&row.exactLesson).map(row=>[row.normal,row]));
  assert.equal(published.count,published.records.length);
  assert.equal(published.count,file.exactLessonCandidates);
  const names=new Set();
  for(const entry of published.records){
   const key=norm(entry.text),original=possible.get(entry.normal),matches=byPhrase.get(key)||[];
   assert.equal(entry.source,'two-speed-whisper-exact-transcript-consensus');
   assert.equal(entry.reviewedByHuman,false);
   assert.ok(original,'Audio clip must be in source ASR audit');
   assert.equal(key,norm(original.original.text));
   assert.equal(key,norm(original.slowRecognition.text));
   assert.equal(matches.length,1,lang+' ambiguous lesson term '+key);
   assert.equal(entry.lessonIndex,matches[0].lesson);
   assert.ok(objects.has(entry.normal)&&objects.has(entry.slow),lang+' R2 object not enumerated');
   assert.ok(entry.normal.startsWith(prefix+'/pronunciation/'));
   assert.ok(!names.has(key),lang+' phrase linked twice');
   names.add(key);verifiedPaths++;
  }
 }
 assert.ok(verifiedPaths>=24);
});
test('Five academy UI scripts advertise provisional status, restrict R2 paths and preserve text-to-speech controls',()=>{
 const code=read('academy-asr-provisional-audio.js');
 assert.doesNotThrow(()=>new vm.Script(code));
 assert.match(code,/provisional-automated/);
 assert.match(code,/reviewedByHuman!==false/);
 assert.match(code,/data-say/);
 assert.match(code,/academy-photo-card/);
 assert.match(code,/audio-asr-provisional-links\.json/);
 assert.match(code,/لم تُراجع جودة النطق بشريًا/);
 for(const [lang,file] of Object.entries(entries)){
  const html=read(file+'-academy.html');
  assert.match(html,new RegExp('src="academy-asr-provisional-audio\\.js" data-language="'+lang+'"'));
  assert.match(html,/speechSynthesis|function speak\(/,'Existing synthesized voice fallback should remain');
  const inlines=[...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].map(m=>m[1]).filter(Boolean);
  for(const inline of inlines)assert.doesNotThrow(()=>new vm.Script(inline));
 }
});
test('Manual review workbench does not turn machine proposals into human approval automatically',()=>{
 const html=read('audio-review-workbench.html');
 assert.match(html,/audio-asr-candidates-/);
 assert.match(html,/machine\.slowRecognition/);
 assert.match(html,/checked\.checked/);
 assert.match(html,/reviewed:true/);
 assert.match(html,/بعد الاستماع/);
 const match=html.match(/<script>([\s\S]*?)<\/script>/);
 assert.ok(match);
 assert.doesNotThrow(()=>new vm.Script(match[1]));
 const reporting=read('academy-audio-status.html');
 assert.match(reporting,/asrProvisionalAudit/);
 assert.match(reporting,/لم يُعتمد أي منها باستماع بشري بعد/);
});

test('Original offline source importer supports local ZIP/HTML while rejecting unverified file-to-word links',()=>{
 const importer=read('academy-original-audio-import.html');
 assert.match(importer,/name="robots" content="noindex,follow"/);
 assert.match(importer,/JSZip\.loadAsync/);
 assert.match(importer,/DOMParser\(\)\.parseFromString\(raw,'text\/html'\)/);
 assert.match(importer,/row\.querySelector\('\.en'\)/);
 assert.match(importer,/row\.querySelectorAll\('button\[onclick\]'\)/);
 assert.match(importer,/inventory\.get\(absolute\)/);
 assert.match(importer,/rows\.length!==1/);
 assert.match(importer,/humanAudioReviewed:false/);
 assert.match(importer,/application\/json/);
 assert.ok(!importer.includes('fetch("https://api.github.com/'),'Source import must not publish or upload any HTML');
 const scripts=[...importer.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].map(m=>m[1]).filter(Boolean);
 assert.ok(scripts.length>0);
 for(const script of scripts)assert.doesNotThrow(()=>new vm.Script(script));
 assert.match(read('audio-review-workbench.html'),/href="academy-original-audio-import\.html"/);
 assert.match(read('academy-audio-status.html'),/academy-original-audio-import\.html/);
});
