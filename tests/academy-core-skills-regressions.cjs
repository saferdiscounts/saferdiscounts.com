'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const read=file=>fs.readFileSync(path.join(root,file),'utf8');
const html=read('academy-core-skills.html');
const script=html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
assert.ok(script,'Core skills course must contain inline script');
const marker='const COURSES=',start=script.indexOf(marker)+marker.length,end=script.indexOf(';\nconst keys=',start);
assert.ok(start>=marker.length&&end>start,'Core skills data must be JSON and have stable boundary');
const course=JSON.parse(script.slice(start,end));
const routes={ptbr:'ptbr-academy.html',en:'english-academy.html',it:'italian-academy.html',es:'spanish-academy.html',fr:'french-academy.html',de:'german-academy.html',ru:'russian-academy.html',pt:'portuguese-academy.html'};
test('All eight academies have six scaffolded units and 144 correctable practice prompts',()=>{
 assert.deepEqual(Object.keys(course).sort(),Object.keys(routes).sort());
 let units=0,questions=0;
 for(const [key,[name,locale,lessons]] of Object.entries(course)){
  assert.ok(name&&locale, key+' missing language metadata');assert.equal(lessons.length,6,key+' needs six units');
  units+=lessons.length;
  for(const [index,unit] of lessons.entries()){
   assert.equal(unit.length,4,key+' unit '+index+' invalid fields');
   assert.ok(unit[0].length>3&&unit[1].length>60&&unit[3].length>=20,key+' unit '+index+' sparse explanation');
   assert.equal(unit[2].length,3,key+' unit '+index+' needs three different questions');
   for(const pair of unit[2]){assert.equal(pair.length,2);assert.ok(pair[0].trim()&&pair[1].trim())}
   assert.equal(new Set(unit[2].map(p=>p[0])).size,3,key+' unit '+index+' duplicated target expressions');
   assert.equal(new Set(unit[2].map(p=>p[1])).size,3,key+' unit '+index+' duplicated Arabic meanings');
   questions+=unit[2].length;
  }
 }
 assert.equal(units,48);assert.equal(questions,144);
});
test('All eight original academies and catalog link to core skills with matching language URLs',()=>{
 for(const [code,file] of Object.entries(routes)){const source=read(file);assert.ok(source.includes('href="academy-core-skills.html?lang='+code+'"'),file+' lacks the correct bridge link')}
 assert.ok(read('language-academy.html').includes('href="academy-core-skills.html"'));
});
test('Learning cards disappear during tests, options are randomized and progress persists only after answers',()=>{
 assert.match(script,/stage='quiz'/);
 assert.match(script,/paper\.innerHTML='<h2>اختبار الفهم/);
 assert.match(script,/shuffled=shuffle\(/);
 assert.match(script,/paper\.querySelectorAll\('\[data-choice\]'\)/);
 assert.match(script,/score===3/);
 assert.match(script,/mastery\.record\(/);
 assert.match(script,/mistakes\.push\(/);
 assert.ok(html.includes('src="academy-mastery.js"'));
 assert.match(script,/localStorage\.setItem\('safer_academy_core_v1'/);
 assert.match(script,/speechSynthesis/);
 assert.match(html,/الصوت المعروض صناعي من المتصفح/);
 assert.doesNotMatch(html,/تسجيلًا بشريًا موثقًا/);
});
test('Foundation page inline JavaScript passes syntax checks',()=>assert.doesNotThrow(()=>new vm.Script(script,{filename:'academy-core-skills-inline.js'})));
