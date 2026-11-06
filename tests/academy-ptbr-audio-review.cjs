'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const read=p=>fs.readFileSync(path.join(__dirname,'..',p),'utf8');
test('Brazilian human audio reviewer is an independent local/manual QA tool, not an automatic quality certificate',()=>{
 const page=read('ptbr-audio-review.html'),src=read('ptbr-audio-review.js');
 assert.match(page,/name="robots" content="noindex,follow"/);
 assert.ok(page.includes('src="ptbr-audio-config.js"'));
 assert.ok(page.includes('src="ptbr-audio-review.js"'));
 assert.match(page,/التسجيل العادي أو البطيء/);
 assert.match(page,/لا تُنشر أي موافقة إلى المستودع تلقائيًا/);
 assert.ok(read('academy-audio-status.html').includes("link('ptbr-audio-review.html'"));
 assert.doesNotThrow(()=>new vm.Script(src,{filename:'ptbr-audio-review.js'}));
 assert.match(src,/audio\.addEventListener\('ended'/);
 assert.match(src,/!checkbox\.checked\|\|!recorded\(item,'normal'\)\|\|!recorded\(item,'slow'\)/);
 assert.match(src,/localStorage\.setItem\(storageKey/);
 assert.match(src,/notPublished:true/);
 assert.match(src,/notIndependentlyValidated:true/);
 assert.doesNotMatch(src,/fetch\([^)]*,\{method:'POST'/);
});
test('Human reviewer requires safe R2 paired paths and preserves exact Portuguese transcripts',()=>{
 const j=JSON.parse(read('audio-text-index-ptbr.json')),src=read('ptbr-audio-review.js');
 assert.equal(j.records.length,511);
 const safe=/^(basic|advanced)\/[a-z0-9_/-]+\.mp3$/;
 assert.equal(new Set(j.records.map(r=>r.normal)).size,511);
 for(const row of j.records){
  assert.ok(row.pt.trim());
  assert.ok(safe.test(row.normal)&&safe.test(row.slow));
  assert.equal(row.normal.replace(/\.mp3$/,'_slow.mp3'),row.slow);
  assert.equal(row.normal.split('/')[0],row.level);
 }
 assert.match(src,/new URL\(base\)\.protocol!=='https:'/);
 assert.match(src,/if\(!check\(item\)\)return/);
 assert.match(src,/const selected=allFiltered\(\)/);
});
