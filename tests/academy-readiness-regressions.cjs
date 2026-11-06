'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const read=x=>fs.readFileSync(path.join(root,x),'utf8');
function parseArray(html,marker){const at=html.indexOf(marker);assert.ok(at>=0,marker);const begin=html.indexOf('[',at+marker.length);let depth=0,quoted=false,escape=false;for(let i=begin;i<html.length;i++){const c=html[i];if(quoted){if(escape)escape=false;else if(c==='\\')escape=true;else if(c==='"')quoted=false;continue}if(c==='"')quoted=true;else if(c==='[')depth++;else if(c===']'&&!--depth)return JSON.parse(html.slice(begin,i+1))}throw Error('Unclosed array '+marker)}
const page=read('academy-readiness.html'),script=page.match(/<script>([\s\S]*?)<\/script>/)?.[1];
test('Readiness page and catalog are linked and executable',()=>{assert.ok(read('language-academy.html').includes('href="academy-readiness.html"'));assert.ok(script);assert.doesNotThrow(()=>new vm.Script(script))});
test('Readiness snapshot never invents a holistic quality percentage',()=>{assert.match(page,/لا توجد الآن نسبة اعتماد إجمالية مثبتة/);assert.match(page,/غير معتمدة بشريًا/);assert.match(page,/الصوتيات المستخدمة/);assert.match(page,/2026-11-06/);assert.match(page,/snapshot\.audio\.pairs/)});
test('Stable readiness baseline preserves exact level coverage and does not count supplements as core',()=>{
 const start=script.indexOf('const snapshot=')+'const snapshot='.length,end=script.indexOf(';\nconst total=',start);
 assert.ok(start>10&&end>start);
 const snapshot=JSON.parse(script.slice(start,end));
 assert.equal(snapshot.target,384);
 assert.equal(snapshot.langs.length,8);
 assert.deepEqual(snapshot.langs.map(x=>x[0]).sort(),['de','en','es','fr','it','pt','ptbr','ru'].sort());
 const count=snapshot.langs.reduce((n,l)=>n+Object.values(l[3]).reduce((m,v)=>m+Math.min(12,v),0),0);
 assert.equal(count,snapshot.covered);
 assert.equal(snapshot.audio.pairs,3506);
 assert.equal(snapshot.langs.reduce((n,l)=>n+l[2],0),437);
 assert.equal(snapshot.langs.find(l=>l[0]==='en')[3].B1,8);
});
test('Snapshot matches current basic course lesson counts, preventing stale publication',()=>{
 const m={ptbr:'ptbr-academy.html',en:'english-academy.html',it:'italian-academy.html',es:'spanish-academy.html',fr:'french-academy.html',de:'german-academy.html',ru:'russian-academy.html',pt:'portuguese-academy.html'};
 const start=script.indexOf('const snapshot=')+'const snapshot='.length,end=script.indexOf(';\nconst total=',start);
 const snap=JSON.parse(script.slice(start,end));
 for(const [key,file] of Object.entries(m)){
  const html=read(file),row=snap.langs.find(x=>x[0]===key);
  const lessons=parseArray(html,key==='en'?'const chapters=':'const lessons=');
  assert.equal(row[2],lessons.length,key+' snapshot is stale');
 }
});
