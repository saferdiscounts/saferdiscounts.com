'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const read=p=>fs.readFileSync(path.join(__dirname,'..',p),'utf8');
function lessons(){
 const html=read('ptbr-academy.html'),token='const lessons=',from=html.indexOf(token),start=html.indexOf('[',from+token.length);
 assert.ok(from>=0&&start>=0);
 let depth=0,quoted=false,escaped=false;
 for(let i=start;i<html.length;i++){
  const c=html[i];
  if(quoted){if(escaped)escaped=false;else if(c==='\\')escaped=true;else if(c==='"')quoted=false;continue}
  if(c==='"'){quoted=true;continue}
  if(c==='[')depth++;
  else if(c===']'&&!--depth)return JSON.parse(html.slice(start,i+1));
 }
 throw Error('Unclosed Brazilian course data');
}
function globalData(path,field){const sandbox={window:{}};new vm.Script(read(path),{filename:path}).runInNewContext(sandbox);return sandbox.window[field]}
function confirm(rows,ptField,arField,name){
 for(const [n,row] of rows.entries()){
  assert.ok(typeof row[ptField]==='string'&&row[ptField].trim(),name+' '+n+' missing exact foreign text');
  assert.ok(typeof row[arField]==='string'&&row[arField].trim(),name+' '+n+' missing Arabic meaning');
 }
}
test('Every Brazilian source audio has a written Portuguese transcript and Arabic explanation',()=>{
 const index=JSON.parse(read('audio-text-index-ptbr.json'));
 assert.equal(index.records.length,511);
 confirm(index.records,'pt','gl','audio');
 assert.equal(index.arabicGlossCoverage.withArabic,511);
 assert.equal(index.arabicGlossCoverage.addedBySaferDiscountsDraft,234);
 assert.equal(index.arabicGlossCoverage.arabicLinguisticVerified,false);
});
test('Every Brazilian learning block has original text and Arabic meaning, regardless of audio coverage',()=>{
 const course=lessons(),vocabulary=course.flatMap(l=>l.words),dialogues=course.flatMap(l=>l.dialogue||[]);
 assert.equal(course.length,97);assert.equal(vocabulary.length,857);assert.equal(dialogues.length,384);
 confirm(vocabulary,0,2,'academy vocabulary');
 confirm(dialogues,1,2,'academy dialogue');
 const pract=globalData('ptbr-practical-data.js','SD_PTBR_PRACTICE');
 const phrases=pract.themes.flatMap(t=>t.phrases);
 assert.equal(pract.themes.length,10);assert.equal(phrases.length,80);
 confirm(phrases,0,1,'practice phrase');
 const ctx=globalData('ptbr-practical-dialogues.js','SD_PTBR_DIALOGUES');
 const lines=ctx.dialogues.flatMap(t=>t.turns);
 assert.equal(ctx.dialogues.length,10);assert.equal(lines.length,40);
 confirm(lines,1,2,'practice dialogue');
});
test('One audio key never points at two different Portuguese written scripts',()=>{
 const index=JSON.parse(read('audio-text-index-ptbr.json'));
 const used=new Map();
 for(const row of index.records){
  assert.ok(/^(basic|advanced)\/[a-z0-9_/-]+\.mp3$/.test(row.normal));
  assert.equal(row.slow,row.normal.replace(/\.mp3$/,'_slow.mp3'));
  if(used.has(row.normal))assert.equal(used.get(row.normal),row.pt);
  else used.set(row.normal,row.pt);
 }
 assert.equal(used.size,511);
});
