'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const html=fs.readFileSync(path.resolve(__dirname,'../ptbr-academy.html'),'utf8');
const index=JSON.parse(fs.readFileSync(path.resolve(__dirname,'../audio-text-index-ptbr.json'),'utf8'));

test('R2 phrases become real selectable academy lessons with source audio and retrieval practice',()=>{
 for(const symbol of ['function buildR2LessonGroups()','function addR2LessonsToList()','function renderR2Lesson(i)'])assert.ok(html.includes(symbol),symbol);
 assert.match(html,/addR2LessonsToList\(\)}/);
 assert.match(html,/buildR2LessonGroups\(\);\s*ptbrAudioReady=true/);
 assert.match(html,/data-ptbr-human-audio/);
 assert.match(html,/data-r2-hide/);
 assert.match(html,/meaning\.hidden=!meaning\.hidden/);
});

test('all 511 Brazilian recordings have lesson section, text, gloss and safe normal/slow paths',()=>{
 assert.equal(index.records.length,511);
 for(const row of index.records){
  assert.ok(row.section&&row.pt&&row.gl);
  assert.match(row.normal,/^(basic|advanced)\/[a-z0-9_]+\.mp3$/);
  assert.match(row.slow,/^(basic|advanced)\/[a-z0-9_]+\.mp3$/);
 }
});
