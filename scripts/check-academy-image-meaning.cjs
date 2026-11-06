'use strict';
// Run from repository root: node scripts/check-academy-image-meaning.cjs
// No dependencies, no network. Protects the Arabic-speaking learner from misleading images.
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const source=fs.readFileSync(path.join(__dirname,'..','academy-vocabulary-images.js'),'utf8');
const marker='window.SDAcademyImages={resolve:find,card:card};';
assert.ok(source.includes(marker),'Image mapper public API changed; update the test deliberately');
const instrumented=source.replace(marker,'window.SDAcademyImages={resolve:find,card:card,photos:photos};');
const sandbox={window:{},document:{createElement(){return {}},head:{appendChild(){}}}};
vm.runInNewContext(instrumented,sandbox,{filename:'academy-vocabulary-images.js',timeout:5000});
const api=sandbox.window.SDAcademyImages;
assert.ok(api&&typeof api.resolve==='function','Mapper failed to initialize');
const reverse=new Map(Object.entries(api.photos).map(([key,photo])=>[photo.url,key]));
function photo(word,meaning,language){return reverse.get(api.resolve(meaning,word,language)?.url)||null}
// Truth set: exact examples from the existing curricula; null means do not pretend a photo illustrates an abstract word.
const checks=[
 ['de','Hilfe!','النجدة!','ambulance'],
 ['de','Gestern','أمس',null],
 ['de','die Möglichkeit','احتمال',null],
 ['de','die Zugehörigkeit','الانتماء',null],
 ['de','präzisieren','يدقق',null],
 ['ru','руководить','يدير',null],
 ['ru','хорошо́','جيد',null],
 ['de','Ich habe gestern Deutsch gelernt.','تعلمت الألمانية أمس.',null],
 ['ru','вода без газа','ماء بدون غاز','water'],
 ['de','die Mutter','الأم','family'],
 ['de','das Wasser','الماء','water'],
 ['es','la casa','المنزل','house'],
 ['es','Hola','مرحبًا','greeting'],
 ['de','ein Ei','بيضة','egg'],
 ['ru','книга','كتاب','books'],
 ['de','die Polizei','الشرطة','police'],
 ['en','Good morning','صباح الخير (رسمي)','greeting'],
 ['it',"l'esperienza",'الخبرة',null],
 ['es','una posibilidad','احتمال',null],
 ['it','la competenza','مهارة',null],
 ['it','un piano','خطة',null],
 ['pt-PT','a vírgula','فاصلة','writing'],
 ['de','Punkt','نقطة','writing'],
 ['it','segno di punteggiatura','علامة الترقيم','writing'],
 ['en','you','أنت',null],
 ['en','tomato','طماطم','tomato'],
 ['en','banana','موز','banana'],
 ['en','orange','برتقال','orange'],
 ['en','orange','اللون البرتقالي','colors'],
 ['it','pomodoro','طماطم','tomato'],
 ['es','pollo','دجاج','chicken'],
 ['ru','банан','موز','banana'],
 ['en','carrot','جزر','carrot'],
 ['en','grapes','عنب','grapes']
];
let failures=0;
for(const [lang,word,meaning,expected] of checks){
 const actual=photo(word,meaning,lang);
 if(actual!==expected){console.error('FAIL',lang,word,'expected:',expected,'actual:',actual);failures++}
}
if(failures){console.error(failures+' checks failed');process.exitCode=1}
else console.log('PASS: '+checks.length+' vocabulary-to-image regressions checked across eight academies');
