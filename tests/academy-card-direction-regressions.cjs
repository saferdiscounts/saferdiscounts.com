'use strict';
// Run: node --test tests/academy-card-direction-regressions.cjs
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const script=fs.readFileSync(path.join(__dirname,'..','academy-vocabulary-images.js'),'utf8');
const sandbox={window:{},document:{createElement:()=>({}),head:{appendChild:()=>{}}}};
vm.runInNewContext(script,sandbox,{filename:'academy-vocabulary-images.js',timeout:5000});
const makeCard=sandbox.window.SDAcademyImages.card;
test('eight academies keep foreign words LTR and Arabic translation RTL',()=>{
  for(const [language,word,meaning,kind] of [
    ['pt-BR','Olá','مرحبًا','ptbr'],['en','Hello','مرحبًا'],['it','Ciao','مرحبًا'],
    ['es','Hola','مرحبًا'],['fr','Bonjour','مرحبًا'],['de','Hallo','مرحبًا'],
    ['ru','Привет','مرحبًا'],['pt-PT','Olá','مرحبًا']
  ]){
    const html=makeCard(word,meaning,language,kind);
    assert.match(html,/class="academy-photo-word[^"]*"[^>]*dir="ltr"/,language);
    assert.match(html,/<small dir="rtl" lang="ar">مرحبًا<\/small>/,language);
    assert.ok(html.includes('data-say="'+word+'"'),language);
  }
});
test('unillustrated abstract vocabulary has an accurate neutral fallback',()=>{
  const html=makeCard('you','أنت','en');
  assert.match(html,/academy-photo-card no-photo/);
  assert.doesNotMatch(html,/academy-photo-image/);
  assert.match(html,/اضغط على الكلمة لسماع نطقها/);
});
test('photo failure removes has-photo state and hides stale photo credit',()=>{
  const html=makeCard('egg','بيضة','en');
  assert.match(html,/alt=""/);
  assert.match(html,/classList.remove\(&#39;has-photo&#39;\)/);
  assert.match(html,/classList.add\(&#39;no-photo&#39;,&#39;image-error&#39;\)/);
  assert.match(html,/الصورة غير متاحة حاليًا/);
});
test('user-supplied lesson text is escaped in the card',()=>{
  const html=makeCard('<word>','<معنى>','en');
  assert.ok(html.includes('&lt;word&gt;'));
  assert.ok(html.includes('&lt;معنى&gt;'));
  assert.ok(!html.includes('<word>'));
});