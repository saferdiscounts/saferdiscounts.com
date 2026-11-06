'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),read=file=>fs.readFileSync(path.join(root,file),'utf8');
function data(){
 const script=read('ptbr-practical-data.js'),sandbox={window:{}};
 new vm.Script(script,{filename:'ptbr-practical-data.js'}).runInNewContext(sandbox);
 return JSON.parse(JSON.stringify(sandbox.window.SD_PTBR_PRACTICE));
}
test('Brazilian daily training contains 80 unique original bilingual phrases in ten 8-phrase thematic lessons',()=>{
 const c=data();assert.equal(c.language,'pt-BR');assert.equal(c.version,1);assert.equal(c.themes.length,10);
 const ids=new Set,seen=new Set;
 for(const [i,t] of c.themes.entries()){
  assert.ok(t.id&&t.title&&t.goal&&t.note,'missing thematic introduction '+i);
  assert.ok(!ids.has(t.id),'repeated theme id');ids.add(t.id);
  assert.ok(['A1','A2','B1'].includes(t.level));
  assert.equal(t.phrases.length,8,'must be a genuinely teachable eight-card session');
  assert.ok(t.phrases.some(p=>p[0].trim().split(/\s+/).length>=4),'must have sentence ordering candidates');
  for(const pair of t.phrases){assert.equal(pair.length,2);assert.ok(pair[0].length>=9&&pair[1].length>=8);
   assert.ok(!seen.has(pair[0]),'duplicate Portuguese expression '+pair[0]);seen.add(pair[0]);
  }
 }
 assert.equal(seen.size,80);
});
test('Practical lab has navigation from home, catalog, Brazilian academy and tourist guide',()=>{
 for(const file of ['index.html','language-academy.html','ptbr-academy.html','ptbr-travel-guide.html']){
  assert.ok(read(file).includes('href="ptbr-practical-lab.html"'),file+' missing trainer route');
 }
 const page=read('ptbr-practical-lab.html');
 for(const script of ['ptbr-practical-data.js','ptbr-practical-lab.js','academy-mastery.js','ptbr-writing-check.js'])assert.ok(page.includes('src="'+script+'"'),script+' not loaded');
 assert.match(page,/80 عبارة/);assert.match(page,/لا نحتسبه تسجيلًا بشريًا/);
});
test('Drills do not show correct answers before response; speech remains optional and cannot count as human audio',()=>{
 const src=read('ptbr-practical-lab.js');assert.doesNotThrow(()=>new vm.Script(src));
 assert.match(src,/function quiz\(\)/);
 assert.match(src,/locked=false/);
 assert.match(src,/if\(locked\)return/);
 assert.match(src,/mistakes\.push\(id\)/);
 assert.match(src,/orderIndex/);
 assert.match(src,/if\(correct\)\{score\+\+;markKnown\(orderIndex\)\}/);
 assert.match(src,/score===7/);
 assert.match(src,/stage='write'/);
 assert.match(src,/writingCheck\.compare\(/);
 assert.match(src,/!round\.includes\(x\.i\)/);
 assert.match(src,/!round\.includes\(i\)&&i!==orderIndex/);
 assert.match(src,/sd_ptbr_practical_mastery_v2/);
 assert.match(src,/mastery\.record/);
 assert.match(src,/\^pt\[-_\]BR\$/i);
 assert.match(src,/window\.speechSynthesis\.getVoices\(\)/);
 assert.match(src,/\.disabled=!voice/);
 assert.doesNotMatch(src,/fetch\('https:\/\/50languages/);
});
test('Spaced review requires 3 perfect sessions on different scheduled dates',()=>{
 const m=require('../academy-mastery.js');
 let x=m.record(null,3,[],'2026-11-06');
 assert.equal(x.streak,1);assert.equal(x.due,'2026-11-07');
 x=m.record(x,3,[],'2026-11-06');assert.equal(x.streak,1,'same-day repetition cannot create retention');
 x=m.record(x,3,[],'2026-11-07');assert.equal(x.streak,2);assert.equal(x.due,'2026-11-14');
 x=m.record(x,3,[],'2026-11-09');assert.equal(x.streak,2,'review before due must not advance');
 x=m.record(x,3,[],'2026-11-14');assert.equal(x.streak,3);assert.equal(x.due,'2026-12-14');
 assert.equal(m.state(x,'2026-11-14').retained,true);
 x=m.record(x,2,[1],'2026-11-15');assert.equal(x.streak,0);assert.equal(x.due,'2026-11-16');
 assert.equal(m.state(x,'2026-11-16').retained,false);
});

test('Writing recall compares target text without erasing meaningful Portuguese accents',()=>{
 const check=require('../ptbr-writing-check.js');
 assert.equal(check.compare('OI, EU ME CHAMO LAILA!', 'Oi! Eu me chamo Laila.').exact,true);
 assert.equal(check.compare('  Oi!   Eu me chamo Laila. ', 'Oi! Eu me chamo Laila.').exact,true);
 assert.equal(check.compare('Nao consigo entender', 'Não consigo entender').issue,'accents');
 assert.equal(check.compare('voce', 'você').exact,false);
 assert.equal(check.compare('Eu sou do Egito', 'do Egito Eu sou').issue,'order');
 assert.equal(check.compare('Tenho um bilhete', 'Tenho uma reserva').issue,'different');
 assert.equal(check.compare('', 'Tenho uma reserva').issue,'empty');
 assert.throws(()=>check.compare('a', ''),TypeError);
});
test('All ten topics have enough distinct phrases for 5 comprehension prompts, separate ordering and separate unprompted writing',()=>{
 for(const t of data().themes){
  const phrases=t.phrases;
  for(let i=0;i<phrases.length;i++){
   for(let j=i+1;j<phrases.length;j++){
    const available=phrases.map((p,k)=>k).filter(k=>k!==i&&k!==j);
    assert.equal(available.length,6);
   }
  }
  assert.ok(phrases.every(p=>p[0].trim().split(/\\s+/).length>=4),t.id+' cannot support distinct sentence ordering');
 }
 const script=read('ptbr-practical-lab.js');
 assert.match(script,/writingFinished=true/);
 assert.match(script,/if\(writingFinished\)return/);
 assert.match(script,/if\(checked\.exact\)\{score\+\+;markKnown\(writingIndex\)\}/);
 assert.match(script,/وليست حكمًا على جميع الصياغات الصحيحة/);
});
