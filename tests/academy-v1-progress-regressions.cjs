'use strict';
const test=require('node:test'),assert=require('node:assert/strict');
const {report}=require('../scripts/academy-v1-progress.cjs');
test('V1 progress has a stable 384-slot denominator and counts gaps without double counting',()=>{
 const r=report();
 assert.equal(r.targetLessons,384);
 assert.equal(r.coveredSlots+r.missingSlots,r.targetLessons);
 assert.ok(r.structuralCoveragePct>=0&&r.structuralCoveragePct<=100);
 assert.deepEqual(Object.keys(r.byLanguage).sort(),['de','en','es','fr','it','pt','ptbr','ru']);
 for(const [lang,data] of Object.entries(r.byLanguage)){
  assert.equal(Object.values(data.covered).reduce((a,b)=>a+b,0)+Object.values(data.missing).reduce((a,b)=>a+b,0),48,lang+' invalid denominator');
  assert.ok(Object.values(data.missing).every(n=>Number.isInteger(n)&&n>=0),lang+' invalid gap');
 }
 assert.ok(r.audioPairsNotEqualVerifiedCoursePlayback,'audio file existence must not be reported as verified playback');
});
test('Brazilian foundations and English B1+ are not miscounted as B2',()=>{
 const r=report();
 assert.equal(r.byLanguage.ptbr.cefrCounts.A1,5,'Separate foundational lessons are not A1 completion units');
 assert.equal(r.byLanguage.en.cefrCounts.B2,0,'Do not relabel English B1+ as B2');
});
