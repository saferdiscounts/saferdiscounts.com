'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..');
function lessons(file){
 const src=fs.readFileSync(path.join(root,file),'utf8'),at=src.indexOf('const lessons='),start=src.indexOf('[',at+14);
 let depth=0,q=false,esc=false;
 for(let i=start;i<src.length;i++){const c=src[i];if(q){if(esc)esc=false;else if(c==='\\')esc=true;else if(c==='"')q=false;continue}if(c==='"')q=true;else if(c==='[')depth++;else if(c===']'&&!--depth)return JSON.parse(src.slice(start,i+1))}
 throw Error('B2 source data not found');
}
test('Italian and Spanish B2 each contain twelve substantial teachable lessons',()=>{
 for(const lang of ['italian','spanish']){
  const items=lessons(lang+'-academy.html');const b2=items.filter(l=>l.level==='B2');
  assert.equal(items.length,48,lang+' missing full four-level curriculum');
  assert.equal(b2.length,12,lang+' missing twelve B2 lessons');
  assert.equal(new Set(b2.map(x=>x.title)).size,12,lang+' duplicate titles');
  for(const [i,l] of b2.entries()){
   assert.ok(l.goal.length>=50&&l.grammar.length>=250,lang+' '+i+' goal/grammar too thin');
   assert.ok(l.words.length>=8&&l.words.every(w=>w.length>=3&&w.every(t=>t.trim())),lang+' '+i+' missing target vocabulary or Arabic meaning');
   assert.ok(l.dialogue.length>=4&&l.dialogue.every(r=>r.length===3&&r[1]&&r[2]),lang+' '+i+' dialogue not translated');
   assert.ok(l.q&&l.answers.length>=3&&new Set(l.answers).size===l.answers.length,lang+' '+i+' quiz incomplete');
   assert.ok(l.scenario.turns.length>=4&&l.scenario.question&&l.scenario.options.length>=3,lang+' '+i+' applied scenario missing');
   assert.ok(l.writing.prompt.length>=85&&l.writing.model.length>=65,lang+' '+i+' B2 writing task too short');
   assert.ok(l.writing.keywords.length>=2&&l.writing.keywords.every(k=>l.writing.model.toLowerCase().includes(k.toLowerCase())),lang+' '+i+' rubric missing from example');
   assert.match(l.grammar,/تدريب الفهم التطبيقي/,lang+' '+i+' lacks comprehension practice');
  }
 }
});
