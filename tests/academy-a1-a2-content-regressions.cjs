'use strict';
// Run from repo root: node --test tests/academy-a1-a2-content-regressions.cjs
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.join(__dirname,'..');
const files=['italian','spanish','french','german','portuguese'];
function course(file){return fs.readFileSync(path.join(root,file+'-academy.html'),'utf8')}
function extractLessons(html) {
 const marker='const lessons=';
 const at=html.indexOf(marker);
 assert.notEqual(at,-1,'Lesson data must exist');
 const start=html.indexOf('[',at+marker.length);
 let depth=0,quoted=false,escaped=false;
 for(let i=start;i<html.length;i++){
  const c=html[i];
  if(quoted){if(escaped)escaped=false;else if(c==='\\')escaped=true;else if(c==='"')quoted=false;continue}
  if(c==='"'){quoted=true;continue}
  if(c==='[')depth++;
  else if(c===']'&&!--depth)return JSON.parse(html.slice(start,i+1));
 }
 throw Error('Incomplete lesson data');
}
test('All five academies cover everyday A1 and practical A2 with seven or more useful language entries',()=>{
 for(const lang of files){
  const lessons=extractLessons(course(lang));
  for(let i=6;i<=15;i++){
   const lesson=lessons[i];
   assert.ok(['A1','A2'].includes(lesson.level),lang+' '+i+': expected A1/A2');
   assert.ok(lesson.words.length>=7,lang+' '+i+': incomplete vocabulary');
   assert.ok(lesson.grammar&&lesson.grammar.length>=25,lang+' '+i+': missing grammar');
   assert.ok(Array.isArray(lesson.scenario.turns)&&lesson.scenario.turns.length>=2,lang+' '+i+': dialogue');
   const seen=new Set();
   for(const word of lesson.words){
    assert.equal(word.length,3,lang+' '+i+': each phrase needs term, help, meaning');
    for(const value of word)assert.ok(String(value||'').trim(),lang+' '+i+': blank word field');
    assert.ok(!seen.has(word[0].toLowerCase()),lang+' '+i+': duplicate phrase '+word[0]);
    seen.add(word[0].toLowerCase());
   }
  }
 }
});
test('A1/A2 writing practice assesses keywords actually present in its model answer',()=>{
 for(const lang of files){
  const lessons=extractLessons(course(lang));
  for(let i=6;i<=15;i++){
   const writing=lessons[i].writing;
   assert.ok(writing&&writing.model&&writing.prompt,lang+' '+i+': writing task');
   assert.ok(Array.isArray(writing.keywords)&&writing.keywords.length>=2,lang+' '+i+': not enough criteria');
   for(const key of writing.keywords)assert.ok(writing.model.toLocaleLowerCase().includes(key.toLocaleLowerCase()),lang+' '+i+': key not in model: '+key);
  }
 }
});
test('Lesson quiz samples fresh words while limiting learner fatigue and matches displayed question count',()=>{
 for(const lang of files){
  const html=course(lang);
  assert.ok(html.includes('shuffle(l.words.slice()).slice(0,7).map'),lang+': quiz must randomize and sample up to 7 new words');
  assert.ok(html.includes('Math.min(8,l.words.length+1)'),lang+': displayed question count must match quiz');
  const scripts=[...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)]
   .map(match=>match[1]).filter(Boolean);
  for(const script of scripts)assert.doesNotThrow(()=>new vm.Script(script),lang+': JS syntax');
 }
});
