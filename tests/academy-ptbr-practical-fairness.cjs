'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');

const root=path.resolve(__dirname,'..');
const lab=fs.readFileSync(path.join(root,'ptbr-practical-lab.js'),'utf8');
const data=fs.readFileSync(path.join(root,'ptbr-practical-data.js'),'utf8');
const sandbox={window:{}};
vm.runInNewContext(data,sandbox);
const themes=sandbox.window.SD_PTBR_PRACTICE.themes;

test('every Brazilian practical theme supports four distinct choices in both directions',()=>{
  assert.equal(themes.length,10);
  for(const theme of themes){
    assert.equal(theme.phrases.length,8,theme.id);
    for(const column of [0,1]){
      const normalized=theme.phrases.map(p=>p[column].trim().normalize('NFC').toLocaleLowerCase());
      for(const correct of normalized){
        assert.ok(normalized.filter(label=>label!==correct).filter((v,i,a)=>a.indexOf(v)===i).length>=3,
          theme.id+' has insufficient unique distractors in column '+column);
      }
    }
  }
});

test('quiz deduplicates visible labels and preserves the correct answer',()=>{
  assert.match(lab,/const answerColumn=reverse\?1:0/);
  assert.match(lab,/if\(seen\.has\(label\)\)return false/);
  assert.match(lab,/const alternatives=shuffle\(\[id,\.\.\.distractors\]\)/);
});

test('sentence ordering gives feedback and waits for learner before writing',()=>{
  assert.match(lab,/message\.textContent=correct\?/);
  assert.match(lab,/next\.addEventListener\('click',startWriting/);
  assert.doesNotMatch(lab,/if\(correct\)\{score\+\+;markKnown\(orderIndex\)\}else\{mistakes\.push\(orderIndex\);rememberError\(orderIndex\)\}\s*startWriting\(\)/);
});

test('learner flashcards offer normal and slow Brazilian speech separately',()=>{
  assert.match(lab,/data-play="'\+cardIndex\+'" data-slow="no"/);
  assert.match(lab,/data-play="'\+cardIndex\+'" data-slow="yes"/);
  assert.match(lab,/x\.rate=slow\?\.62:\.90/);
});

test('practical lab links to original R2-backed listening library and distinguishes synthetic speech',()=>{
  const html=fs.readFileSync(path.join(root,'ptbr-practical-lab.html'),'utf8');
  assert.match(html,/href="ptbr-pronunciation\.html"/);
  assert.match(html,/href="academy-audio-status\.html\?lang=ptbr"/);
  assert.match(html,/أزرارها تستخدم صوت المتصفح الآلي/);
});
