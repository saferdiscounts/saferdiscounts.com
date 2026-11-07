'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const html=fs.readFileSync(path.join(root,'pronunciation-audio-library.html'),'utf8');
const index=JSON.parse(fs.readFileSync(path.join(root,'audio-text-index-ptbr.json'),'utf8'));
const norm=x=>String(x||'').normalize('NFC').toLocaleLowerCase().replace(/\s+/g,' ').trim();

test('Brazilian local R2 index has valid normal and slow object paths and Arabic glosses',()=>{
 assert.equal(index.locale,'pt-BR');
 assert.equal(index.records.length,511);
 for(const row of index.records){
  assert.ok(norm(row.pt),'Portuguese text missing');
  assert.ok(norm(row.gl),'Arabic gloss missing');
  assert.match(row.normal,/^(basic|advanced)\/[a-z0-9_]+\.mp3$/);
  assert.match(row.slow,/^(basic|advanced)\/[a-z0-9_]+\.mp3$/);
  assert.notEqual(row.normal,row.slow);
 }
});

test('shared pronunciation library can load the Brazilian bilingual local index',()=>{
 assert.match(html,/ptbr:'ptbr\/'/);
 assert.match(html,/code==='ptbr'\?index\.locale!=='pt-BR'/);
 assert.match(html,/code==='ptbr'\?rec\.pt:rec\.text/);
 assert.match(html,/code==='ptbr'\?entry\.gl\|\|''/);
 assert.match(html,/entries\.length!==1/);
 assert.match(html,/prefixes\[code\]\+entry\.normal/);
});
