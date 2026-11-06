'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const html=fs.readFileSync(path.join(__dirname,'..','english-academy.html'),'utf8');
function chapters(){
 const at=html.indexOf('const chapters='),start=html.indexOf('[',at);let depth=0,quoted=false,escaped=false;
 for(let i=start;i<html.length;i++){const c=html[i];if(quoted){if(escaped)escaped=false;else if(c==='\\')escaped=true;else if(c==='"')quoted=false;continue}if(c==='"')quoted=true;else if(c==='[')depth++;else if(c===']'&&!--depth)return JSON.parse(html.slice(start,i+1))}
 throw Error('Unclosed English chapters');
}
test('English B2 is an actual fifth curriculum group with twelve lessons',()=>{
 const list=chapters();assert.equal(list.length,52);
 const m=html.match(/\{name:'B2 · [^']+',start:40,end:51\}/);
 assert.ok(m,'B2 group must be navigable independently');
 for(let i=40;i<=51;i++){
  const unit=list[i],table=unit.blocks.find(x=>x.type==='table'),writing=unit.blocks.find(x=>x.type==='writing'),dialogue=unit.blocks.find(x=>x.type==='dialogue'),grammar=unit.blocks.find(x=>x.type==='p');
  assert.ok(unit.title.startsWith('B2'),i+' incorrect level');
  assert.ok(table&&table.rows.length>=8,i+' lacks contextual vocabulary');
  for(const row of table.rows)assert.ok(row.length>=2&&row[0].t&&row[1].t,i+' invalid vocab');
  assert.ok(dialogue&&dialogue.lines.length>=4&&dialogue.lines.every(t=>t.orig&&t.trans),i+' incomplete translated dialogue');
  assert.ok(grammar&&grammar.html.length>=220,i+' missing grammar or objective');
  assert.ok(writing&&writing.prompt.length>=80&&writing.model.length>=100,i+' insufficient B2 writing practice');
  assert.ok(writing.keywords.length>=2&&writing.keywords.every(k=>writing.model.toLowerCase().includes(k.toLowerCase())),i+' writing rubric not demonstrated');
 }
});
test('Existing 40 English lesson IDs are preserved and advanced audio uses honest device TTS',()=>{
 assert.match(html,/if\(i<31\)/,'first 31 original audio IDs retained');
 assert.match(html,/if\(i===0\)/);
 assert.match(html,/AMERICAN ENGLISH · TTS/);
 const code=html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
 assert.ok(code,'embedded academy script missing');assert.doesNotThrow(()=>new vm.Script(code));
});
