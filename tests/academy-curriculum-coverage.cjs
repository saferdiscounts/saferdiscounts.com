'use strict';
// Run from the repository root: node --test tests/academy-curriculum-coverage.cjs
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
function read(name){return fs.readFileSync(path.join(__dirname,'..',name),'utf8')}
function bracketed(source,marker){
 const position=source.indexOf(marker);
 assert.notEqual(position,-1,'Missing data marker: '+marker);
 const begin=source.indexOf('[',position+marker.length);
 let level=0,inString=false,escape=false;
 for(let i=begin;i<source.length;i++){
  const char=source[i];
  if(inString){if(escape)escape=false;else if(char==='\\')escape=true;else if(char==='"')inString=false;continue;}
  if(char==='"'){inString=true;continue}
  if(char==='[')level++;
  else if(char===']'&&!--level)return source.slice(begin,i+1);
 }
 throw Error('Unclosed data array: '+marker);
}
function lessons(file){return JSON.parse(bracketed(read(file),'const lessons='))}
const european=['italian','spanish','french','german','portuguese'];
const arNums=['صفر','واحد','اثنان','ثلاثة','أربعة','خمسة','ستة','سبعة','ثمانية','تسعة','عشرة','أحد عشر','اثنا عشر','ثلاثة عشر','أربعة عشر','خمسة عشر','ستة عشر','سبعة عشر','ثمانية عشر','تسعة عشر','عشرون'];
test('five European academy number lessons cover 0–20 and every decade to 100',()=>{
 for(const lang of european){
  const items=lessons(lang+'-academy.html');
  const lesson=items.find(x=>x.title.includes('الأرقام'));
  assert.ok(lesson,lang+': numbers lesson missing');
  assert.ok(lesson.words.length>=31,lang+': too few word entries');
  const found=new Map();
  for(const word of lesson.words){
   const match=/^(\\d+) — /.exec(word[2]);
   if(match)found.set(+match[1],word);
  }
  for(let num=0;num<=20;num++){
   assert.ok(found.has(num),lang+': missing '+num);
   assert.ok(found.get(num)[2].includes(arNums[num]),lang+': wrong Arabic for '+num);
  }
  for(const num of [30,40,50,60,70,80,90,100])assert.ok(found.has(num),lang+': missing '+num);
  assert.ok(lesson.grammar.length>130,lang+': explain number formation');
  assert.equal(lesson.writing.keywords.length,2,lang+': numeric writing prompt');
  for(const key of lesson.writing.keywords)assert.ok(lesson.writing.model.includes(key),lang+': writing sample mismatch '+key);
 }
});
test('Russian foundations contain all 33 letters and full numeric range',()=>{
 const array=bracketed(read('russian-academy.html'),'const lessonContent=');
 const content=vm.runInNewContext('('+array+')',{}, {timeout:4000});
 const alphabet=content[1].words.map(x=>x[0]);
 const cyrillic='А Б В Г Д Е Ё Ж З И Й К Л М Н О П Р С Т У Ф Х Ц Ч Ш Щ Ъ Ы Ь Э Ю Я'.split(' ');
 assert.equal(alphabet.length,33);
 assert.equal(new Set(alphabet).size,33);
 for(const letter of cyrillic)assert.ok(alphabet.includes(letter),'Russian letter missing: '+letter);
 const numbers=content[10].words.map(x=>x[0]);
 for(const value of ['ноль','один','два','три','четыре','пять','шесть','семь','восемь','девять','десять','одиннадцать','двенадцать','тринадцать','четырнадцать','пятнадцать','шестнадцать','семнадцать','восемнадцать','девятнадцать','двадцать','тридцать','сорок','пятьдесят','шестьдесят','семьдесят','восемьдесят','девяносто','сто'])assert.ok(numbers.includes(value),'Russian number missing: '+value);
 assert.match(content[10].grammar,/год|года|лет/);
});
test('European Portuguese A1 starts with meaningful dialogues, not filler',()=>{
 const items=lessons('portuguese-academy.html');
 for(let i=0;i<8;i++){
  const lesson=items[i],text=JSON.stringify(lesson.dialogue);
  assert.doesNotMatch(text,/العبارة الأولى من الدرس|رد مناسب في الموقف|تدرب على سماع العبارة/);
  assert.ok(lesson.dialogue.length>=3,'Missing conversation in lesson '+i);
  for(const turn of lesson.dialogue)assert.ok(turn[1]&&turn[2], 'Untranslated conversation turn in '+i);
 }
});
test('Arabic letter audio and Egyptian Arabic pilot are discoverable from catalog',()=>{
 const catalog=read('language-academy.html');
 assert.match(catalog,/href="arabic-letter-sounds.html"/);
 assert.match(catalog,/href="arabic-for-russian.html"/);
 const pilot=read('arabic-for-russian.html');
 assert.match(pilot,/T01_011/);
 assert.match(pilot,/speechSynthesis/);
});
