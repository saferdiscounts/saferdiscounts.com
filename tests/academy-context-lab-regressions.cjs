'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),read=name=>fs.readFileSync(path.join(root,name),'utf8');
const languages={ptbr:'ptbr-academy.html',en:'english-academy.html',ru:'russian-academy.html'};
function parse(lang){const src=read('academy-context-'+lang+'.js'),obj={window:{SD_CONTEXT_LABS:{}}};new vm.Script(src,{filename:lang+'.js'}).runInNewContext(obj,{timeout:2000});return JSON.parse(JSON.stringify(obj.window.SD_CONTEXT_LABS[lang]));}
test('A1-C2 contextual lab covers six levels and 36 teachable scenarios',()=>{
 let scenarios=0,turns=0;
 for(const lang of Object.keys(languages)){
  const d=parse(lang);assert.ok(d.name&&d.locale);
  const levels=d.units.reduce((result,u)=>(result[u.level]=(result[u.level]||0)+1,result),{});
  for(const key of ['A1','A2','B1','B2','C1','C2'])assert.equal(levels[key],2,lang+' '+key);
  scenarios+=d.units.length;
  for(const [i,u] of d.units.entries()){
   assert.ok(u.title&&u.context&&u.focus&&u.question&&u.reason&&u.writing&&u.model,lang+' incomplete '+i);
   assert.equal(u.dialogue.length,4,lang+' incorrect dialogue '+i);
   turns+=u.dialogue.length;
   u.dialogue.forEach(row=>{assert.equal(row.length,3);assert.ok(row.every(v=>v.trim()))});
   assert.equal(u.options.length,3,lang+' invalid alternatives '+i);
   assert.equal(new Set(u.options).size,3,lang+' duplicate options '+i);
   assert.ok(Number.isInteger(u.correct)&&u.correct>=0&&u.correct<3,lang+' invalid key '+i);
   assert.ok(u.reason.length>20,lang+' missing reasoning '+i);
   assert.ok(u.targets.length>=2&&u.targets.every(t=>u.model.toLocaleLowerCase().includes(t.toLocaleLowerCase())),lang+' writing target missing from example '+i);
  }
 }
 assert.equal(scenarios,36);assert.equal(turns,144);
});
test('Dialogue lab is linked from its three academies and catalog',()=>{
 const page=read('academy-context-lab.html');
 for(const [lang,file] of Object.entries(languages)){
  assert.ok(read(file).includes('href="academy-context-lab.html?lang='+lang+'"'),file+' missing lab navigation');
  assert.ok(page.includes('src="academy-context-'+lang+'.js"'),lang+' missing source script');
 }
 assert.ok(read('language-academy.html').includes('href="academy-context-lab.html"'),'catalog missing dialogue lab');
});
test('Comprehension hides dialogue; writing model is shown only after draft',()=>{
 const html=read('academy-context-lab.html');
 const script=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(v=>v[1]);
 assert.equal(script.length,1,'expected one inline controller');
 assert.doesNotThrow(()=>new vm.Script(script[0],{filename:'context-lab-inline.js'}));
 assert.match(script[0],/phase='quiz'/);
 assert.match(script[0],/function quiz\(\)/);
 assert.match(script[0],/paper\.innerHTML='<span class="tag"'/);
 assert.match(script[0],/a\.length<8/);
 assert.match(script[0],/mdl\.classList\.remove\('hidden'\)/);
 assert.match(script[0],/لا يصحّح|لم يتم تقييم صحة قواعد جملتك تلقائيًا/);
 assert.match(html,/الصوت يُولده المتصفح/);
 assert.match(script[0],/shuffle\(u\.options\.map/);
});
