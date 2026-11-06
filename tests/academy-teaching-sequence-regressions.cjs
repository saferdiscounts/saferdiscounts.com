'use strict';
// Regression guard for the beginner pedagogy and comprehension additions.
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const languages=['italian','spanish','french','german','portuguese'];
function load(lang){
 const html=fs.readFileSync(path.join(root,lang+'-academy.html'),'utf8');
 const marker='const lessons=',index=html.indexOf(marker);
 assert.ok(index>=0,lang+': lesson data missing');
 const start=html.indexOf('[',index+marker.length);
 let depth=0,quoted=false,escaped=false;
 for(let i=start;i<html.length;i++){
  const c=html[i];
  if(quoted){if(escaped)escaped=false;else if(c==='\\')escaped=true;else if(c==='"')quoted=false;continue}
  if(c==='"')quoted=true;else if(c==='[')depth++;
  else if(c===']'&&!--depth)return JSON.parse(html.slice(start,i+1));
 }
 throw Error(lang+': unclosed lessons');
}
test('240 European lessons contain translated dialogue comprehension guidance',()=>{
 let total=0;
 for(const lang of languages){
  const lessons=load(lang);total+=lessons.length;
  for(const [index,lesson] of lessons.entries()){
   assert.match(lesson.grammar,/تدريب الفهم التطبيقي/,lang+' '+index);
   const pairs=lesson.dialogue.filter(x=>x[1]?.trim()&&x[2]?.trim()).slice(0,3);
   assert.ok(pairs.length>=2,lang+' '+index+' insufficient dialogue');
   for(const turn of pairs){
    assert.ok(lesson.grammar.includes('«'+turn[1]+'»'),lang+' '+index+' missing target phrase');
    assert.ok(lesson.grammar.includes('«'+turn[2]+'»'),lang+' '+index+' missing translation');
   }
  }
 }
 assert.equal(total,240);
});
test('Beginner lesson writing tasks do not require independent sentence creation',()=>{
 for(const lang of languages){
  const first=load(lang)[0];
  assert.match(first.writing.prompt,/لا يُطلب منك إنشاء جمل جديدة/,lang);
  assert.match(first.writing.prompt,/استمع/,lang);
  for(const keyword of first.writing.keywords)assert.ok(first.writing.model.includes(keyword),lang+' keyword mismatch');
 }
});
test('Personal pronouns, identity, ownership and questions precede numeric instruction',()=>{
 const expected={
  italian:['io sono','io ho','Come ti chiami'],
  spanish:['Soy de Egipto','Tengo veinte años','¿Cómo te llamas'],
  french:['je suis',"j'ai",'Où est la gare'],
  german:['ich bin','ich habe','Haben Sie Zeit'],
  portuguese:['eu sou','eu estou','Tenho vinte anos']
 };
 for(const lang of languages){
  const lessons=load(lang);
  const foundation=lessons[1].grammar;
  assert.match(foundation,/جسر تأسيسي/,lang);
  for(const sample of expected[lang])assert.ok(foundation.includes(sample),lang+' missing '+sample);
  assert.match(lessons[2].title,/الأرقام/,lang+' expected numbers at third lesson');
 }
});
