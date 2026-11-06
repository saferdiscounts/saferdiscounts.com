'use strict';
// Run from repository root: node --test tests/academy-foundation-regressions.cjs
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const read=(name)=>fs.readFileSync(path.join(root,name),'utf8');
const specs=[
 ['it','italian-academy.html',36,26],
 ['es','spanish-academy.html',36,27],
 ['fr','french-academy.html',48,26],
 ['de','german-academy.html',48,30],
 ['pt','portuguese-academy.html',48,26]
];
function firstArray(source,marker){
 const pos=source.indexOf(marker);
 assert.ok(pos>=0,'Cannot find '+marker);
 const start=source.indexOf('[',pos+marker.length);
 let nested=0,inQuote=false,escaped=false;
 for(let i=start;i<source.length;i++){
  const c=source[i];
  if(inQuote){if(escaped)escaped=false;else if(c==='\\')escaped=true;else if(c==='"')inQuote=false;continue;}
  if(c==='"'){inQuote=true;continue}
  if(c==='[')nested++;
  else if(c===']'&&!--nested)return JSON.parse(source.slice(start,i+1));
 }
 throw Error('Unclosed lesson array for '+marker);
}
function courseData(){
 const html=read('alphabet-foundations.html');
 const start=html.indexOf('const COURSES='),end=html.indexOf(';\nconst select=',start);
 assert.ok(start>0&&end>start,'Alphabet data should be embedded in the course HTML');
 return JSON.parse(html.slice(start+'const COURSES='.length,end));
}
test('Level-zero alphabet lessons cover all five languages without duplicated letter cards',()=>{
 const courses=courseData();
 for(const [key,,,_count] of specs){
  const c=courses[key];
  assert.ok(c,'Missing course '+key);
  assert.equal(c.letters.length,_count,'Unexpected alphabet size '+key);
  assert.equal(new Set(c.letters.map(x=>x[0])).size,_count,'Duplicate letters '+key);
  assert.ok(c.rules.length>=5,'Missing pronunciation rules '+key);
  for(const row of c.letters)assert.ok(row.every(x=>typeof x==='string'&&x.trim()),'Empty alphabet example '+key);
 }
});
test('The first five key A1 lessons have practical vocabulary and open their own foundation track',()=>{
 for(const [lang,file,total] of specs){
  const text=read(file),ls=firstArray(text,'const lessons=');
  assert.equal(ls.length,total,'Incorrect curriculum length '+lang);
  for(const id of [0,1,3,4,5])assert.ok(ls[id].words.length>=8,lang+' lesson '+id+' remains too sparse');
  assert.ok(text.includes('href="alphabet-foundations.html?lang='+lang+'"'),lang+' has no entry to alphabet');
  assert.ok(text.includes('0 من '+total+' درسًا مكتملًا'),lang+' shows outdated initial progress');
 }
});
test('Pronunciation hints are never empty and learners can hear cards even without a human recording',()=>{
 for(const [lang,file] of specs){
  const ls=firstArray(read(file),'const lessons=');
  for(let i=0;i<ls.length;i++)for(const [word,hint,meaning] of ls[i].words){
   assert.ok(String(word||'').trim()&&String(meaning||'').trim(),lang+' word/meaning missing: '+i);
   assert.ok(String(hint||'').trim(),lang+' empty pronunciation column: '+i+' / '+word);
  }
 }
});
test('Writing practice keys in foundation units appear in its model answer',()=>{
 for(const [lang,file] of specs){
  const ls=firstArray(read(file),'const lessons=');
  for(let i=0;i<6;i++){
   const l=ls[i];
   if(!l.writing)continue;
   for(const keyword of (l.writing.keywords||[])){
    assert.ok(l.writing.model.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()),
      lang+' lesson '+i+' model missing its own key "'+keyword+'"');
   }
  }
 }
});
test('The new foundation script parses without executing browser-only APIs',()=>{
 const html=read('alphabet-foundations.html'),m=html.match(/<script>([\s\S]*?)<\/script>/);
 assert.ok(m,'Missing interactive alphabet script');
 assert.doesNotThrow(()=>new vm.Script(m[1]));
 assert.match(m[1],/speechSynthesis/);
 assert.match(m[1],/\\.rate=rate/);
});
