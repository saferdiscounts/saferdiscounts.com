'use strict';
// Run from repository root with: node --test tests/academy-image-regressions.cjs
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const code=fs.readFileSync(path.join(__dirname,'..','academy-vocabulary-images.js'),'utf8');
const expose='window.SDAcademyImages={resolve:find,card:card};';
assert.ok(code.includes(expose),'Image resolver export changed; update the test fixture intentionally');
const sandbox={window:{},document:{createElement:()=>({}),head:{appendChild:()=>{}}}};
vm.runInNewContext(code.replace(expose,'window.SDAcademyImages={resolve:find,card:card,photos:photos};'),sandbox,{filename:'academy-vocabulary-images.js'});
const imageApi=sandbox.window.SDAcademyImages;
assert.ok(imageApi&&typeof imageApi.resolve==='function');
const photoLookup=new Map(Object.entries(imageApi.photos).map(([name,obj])=>[obj.url,name]));
function imageFor(lang,word,meaning){
 const resolved=imageApi.resolve(meaning,word,lang);
 return resolved?photoLookup.get(resolved.url)||null:null;
}
const cases=[["pt-BR","Olá","مرحبًا","greeting"],["pt-BR","eu","أنا",null],["pt-BR","ovo","بيضة","egg"],["pt-BR","casa","بيت","house"],["en","hello","مرحبًا","greeting"],["en","Good morning","صباح الخير (رسمي)","greeting"],["en","you","أنت",null],["en","egg","بيضة","egg"],["en","the house","المنزل","house"],["it","Grazie","شكرًا","conversation"],["it","Aiuto!","النجدة!","ambulance"],["it","l'esperienza","الخبرة",null],["it","la madre","الأم","family"],["es","Hola","مرحبًا","greeting"],["es","¡Socorro!","النجدة!","ambulance"],["es","la experiencia","الخبرة",null],["es","el padre","الأب","family"],["fr","Bonjour","مرحبًا","greeting"],["fr","Au secours !","النجدة!","ambulance"],["fr","la mère","الأم","family"],["fr","la possibilité","احتمال",null],["de","Hilfe!","النجدة!","ambulance"],["de","Gestern","أمس",null],["de","die Möglichkeit","احتمال",null],["de","die Zugehörigkeit","الانتماء",null],["de","der Mann","رجل",null],["de","die Mutter","الأم","family"],["de","das Wasser","الماء","water"],["ru","книга","كتاب","books"],["ru","руководить","يدير",null],["ru","занятие","حصة / نشاط","classroom"],["ru","вода без газа","ماء بدون غاز","water"],["ru","Я","أنا",null],["pt-PT","Socorro!","النجدة!","ambulance"],["pt-PT","Tenho uma reserva.","لدي حجز","hotelReception"],["pt-PT","a experiência","الخبرة",null],["pt-PT","o livro","كتاب","books"]];
test('academy photo rules: intentional examples in all eight languages',()=>{
 for(const [lang,word,meaning,expected] of cases){
  assert.strictEqual(imageFor(lang,word,meaning),expected,lang+': '+word+' ('+meaning+')');
 }
});
test('do not create misleading matches from abstract Arabic meanings',()=>{
 for(const [lang,word,meaning] of [
  ['de','die Zugehörigkeit','الانتماء'],
  ['de','die Möglichkeit','احتمال'],
  ['es','la experiencia','الخبرة'],
  ['pt-PT','a experiência','الخبرة'],
  ['it',"l'esperienza",'الخبرة'],
  ['ru','руководить','يدير']
 ])assert.equal(imageFor(lang,word,meaning),null);
});
test('Arabic grammar notes may not turn greeting photos into paintings',()=>{
 assert.equal(imageFor('en','Good morning','صباح الخير (رسمي)'),'greeting');
 assert.equal(imageFor('de','Hilfe!','النجدة!'),'ambulance');
});
