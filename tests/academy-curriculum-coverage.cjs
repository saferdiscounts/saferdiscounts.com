'use strict';
// Run from the repository root: node --test tests/academy-curriculum-coverage.cjs
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
function read(name){return fs.readFileSync(path.join(__dirname,'..',name),'utf8')}
function bracketed(source,marker){
 const position=source.indexOf(marker);
 assert.notEqual(position,-1,'Missing data marker: '+marker);
 const begin=source.indexOf('[',position+marker.length);
 let level=0,inString=false,escape=false;
 for(let i=begin;i<source.length;i++){
  const char=source[i];
  if(inString){if(escape)escape=false;else if(char==='\\')escape=true;else if(char==='"')inString=false;continue;}
  if(char==='"'){inString=true;continue}
  if(char==='[')level++;
  else if(char===']'&&!--level)return source.slice(begin,i+1);
 }
 throw Error('Unclosed data array: '+marker);
}
function lessons(file){return JSON.parse(bracketed(read(file),'const lessons='))}
const european=['italian','spanish','french','german','portuguese'];
const arNums=['صفر','واحد','اثنان','ثلاثة','أربعة','خمسة','ستة','سبعة','ثمانية','تسعة','عشرة','أحد عشر','اثنا عشر','ثلاثة عشر','أربعة عشر','خمسة عشر','ستة عشر','سبعة عشر','ثمانية عشر','تسعة عشر','عشرون'];
test('five European academy number lessons cover 0–20 and every decade to 100',()=>{
 for(const lang of european){
  const items=lessons(lang+'-academy.html');
  const lesson=items.find(x=>x.title.includes('الأرقام'));
  assert.ok(lesson,lang+': numbers lesson missing');
  assert.ok(lesson.words.length>=31,lang+': too few word entries');
  const found=new Map();
  for(const word of lesson.words){
   const match=/^(\d+) — /.exec(word[2]);
   if(match)found.set(+match[1],word);
  }
  for(let num=0;num<=20;num++){
   assert.ok(found.has(num),lang+': missing '+num);
   assert.ok(found.get(num)[2].includes(arNums[num]),lang+': wrong Arabic for '+num);
  }
  for(const num of [30,40,50,60,70,80,90,100])assert.ok(found.has(num),lang+': missing '+num);
  assert.ok(lesson.grammar.length>130,lang+': explain number formation');
  assert.equal(lesson.writing.keywords.length,2,lang+': numeric writing prompt');
  for(const key of lesson.writing.keywords)assert.ok(lesson.writing.model.includes(key),lang+': writing sample mismatch '+key);
 }
});
test('English foundation lists every number from zero through one hundred',()=>{
 const chapters=JSON.parse(bracketed(read('english-academy.html'),'const chapters='));
 const chapter=chapters.find(x=>x.title.includes('الأرقام من 0'));
 assert.ok(chapter,'Missing English numbers chapter');
 const numbers=new Map();
 for(const block of chapter.blocks.filter(x=>x.type==='table')){
  for(const row of block.rows){
   if(row[0].t!=='')numbers.set(+row[0].t,row[1].t);
   if(row[2].t!=='')numbers.set(+row[2].t,row[3].t);
  }
 }
 assert.equal(numbers.size,101,'Not every number appears exactly once');
 for(let n=0;n<=100;n++)assert.ok(numbers.has(n),'Missing English number '+n);
 for(const [num,spelling] of [[21,'twenty-one'],[40,'forty'],[47,'forty-seven'],[80,'eighty'],[99,'ninety-nine'],[100,'one hundred']])assert.equal(numbers.get(num),spelling);
});
test('Russian foundations contain all 33 letters and full numeric range',()=>{
 const array=bracketed(read('russian-academy.html'),'const lessonContent=');
 const content=vm.runInNewContext('('+array+')',{}, {timeout:4000});
 const alphabet=content[1].words.map(x=>x[0]);
 const cyrillic='А Б В Г Д Е Ё Ж З И Й К Л М Н О П Р С Т У Ф Х Ц Ч Ш Щ Ъ Ы Ь Э Ю Я'.split(' ');
 assert.equal(alphabet.length,33);
 assert.equal(new Set(alphabet).size,33);
 for(const letter of cyrillic)assert.ok(alphabet.includes(letter),'Russian letter missing: '+letter);
 const numbers=content[10].words.map(x=>x[0]);
 for(const value of ['ноль','один','два','три','четыре','пять','шесть','семь','восемь','девять','десять','одиннадцать','двенадцать','тринадцать','четырнадцать','пятнадцать','шестнадцать','семнадцать','восемнадцать','девятнадцать','двадцать','тридцать','сорок','пятьдесят','шестьдесят','семьдесят','восемьдесят','девяносто','сто'])assert.ok(numbers.includes(value),'Russian number missing: '+value);
 assert.match(content[10].grammar,/год|года|лет/);
});
test('European Portuguese A1 starts with meaningful dialogues, not filler',()=>{
 const items=lessons('portuguese-academy.html');
 for(let i=0;i<8;i++){
  const lesson=items[i],text=JSON.stringify(lesson.dialogue);
  assert.doesNotMatch(text,/العبارة الأولى من الدرس|رد مناسب في الموقف|تدرب على سماع العبارة/);
  assert.ok(lesson.dialogue.length>=3,'Missing conversation in lesson '+i);
  for(const turn of lesson.dialogue)assert.ok(turn[1]&&turn[2], 'Untranslated conversation turn in '+i);
 }
});
test('Arabic letter audio and Egyptian Arabic pilot are discoverable from catalog',()=>{
 const catalog=read('language-academy.html');
 assert.match(catalog,/href="arabic-letter-sounds.html"/);
 assert.match(catalog,/href="arabic-for-russian.html"/);
 const pilot=read('arabic-for-russian.html');
 assert.match(pilot,/T01_011/);
 assert.match(pilot,/speechSynthesis/);
});

test('European lessons have valid assessable teaching and practice content at every level',()=>{
 for(const lang of european){
  const items=lessons(lang+'-academy.html');
  const counts={};
  for(const [index,l] of items.entries()){
   counts[l.level]=(counts[l.level]||0)+1;
   for(const field of ['title','goal','intro','grammar'])assert.ok(typeof l[field]==='string'&&l[field].trim(),lang+' lesson '+index+' missing '+field);
   assert.ok(Array.isArray(l.words)&&l.words.length>=3,lang+' lesson '+index+' insufficient vocabulary');
   for(const [n,w] of l.words.entries())assert.ok(Array.isArray(w)&&w.length>=3&&w.every(v=>typeof v==='string'&&v.trim()),lang+' lesson '+index+' invalid word '+n);
   assert.ok(Array.isArray(l.answers)&&Number.isInteger(l.correct)&&l.correct>=0&&l.correct<l.answers.length,lang+' lesson '+index+' invalid quiz');
   assert.ok(l.scenario&&Array.isArray(l.scenario.options)&&l.scenario.options.length>=3&&Number.isInteger(l.scenario.correct)&&l.scenario.correct>=0&&l.scenario.correct<l.scenario.options.length,lang+' lesson '+index+' invalid scenario');
   assert.ok(Array.isArray(l.scenario.turns)&&l.scenario.turns.length>=2,lang+' lesson '+index+' missing scenario conversation');
   assert.ok(l.writing&&typeof l.writing.prompt==='string'&&l.writing.prompt.trim()&&typeof l.writing.model==='string'&&l.writing.model.trim()&&Array.isArray(l.writing.keywords)&&l.writing.keywords.length,lang+' lesson '+index+' missing writing practice');
  }
  assert.equal(counts.A1,12,lang+' A1 lesson count');
  assert.equal(counts.A2,12,lang+' A2 lesson count');
  assert.equal(counts.B1,12,lang+' B1 lesson count');
  if(['french','german','portuguese'].includes(lang))assert.equal(counts.B2,12,lang+' B2 lesson count');
 }
});

test('Brazilian Portuguese lessons provide complete assessed learning tasks',()=>{
 const items=lessons('ptbr-academy.html');
 assert.equal(items.length,90,'Brazilian Portuguese lesson count');
 const tracks=new Set(items.map(x=>x.track));
 for(const track of ['a1','foundation','travel','a2','b1','b2','c1','c2'])assert.ok(tracks.has(track),'Missing track '+track);
 for(const [i,l] of items.entries()){
  for(const field of ['title','goal','intro','grammar'])assert.ok(typeof l[field]==='string'&&l[field].trim(),'Brazilian lesson '+i+' missing '+field);
  assert.ok(Array.isArray(l.words)&&l.words.length>=3,'Brazilian lesson '+i+' missing vocabulary');
  assert.ok(l.words.every(w=>Array.isArray(w)&&w.length>=3&&w.every(v=>typeof v==='string'&&v.trim())),'Brazilian lesson '+i+' invalid translation');
  assert.ok(Array.isArray(l.dialogue)&&l.dialogue.length>=2,'Brazilian lesson '+i+' missing dialogue');
  assert.ok(Array.isArray(l.answers)&&Number.isInteger(l.correct)&&l.correct>=0&&l.correct<l.answers.length,'Brazilian lesson '+i+' invalid quiz');
  assert.ok(l.writing&&l.writing.prompt&&l.writing.model&&Array.isArray(l.writing.keywords)&&l.writing.keywords.length,'Brazilian lesson '+i+' missing writing task');
 }
});
test('English chapters include practice, dialogue and model writing',()=>{
 const chapters=JSON.parse(bracketed(read('english-academy.html'),'const chapters='));
 assert.equal(chapters.length,40,'English chapter count');
 for(const [i,ch] of chapters.entries()){
  assert.ok(typeof ch.title==='string'&&ch.title.trim(),'English chapter '+i+' missing title');
  assert.ok(Array.isArray(ch.blocks)&&ch.blocks.length>=2,'English chapter '+i+' missing teaching blocks');
  const dialogue=ch.blocks.filter(b=>b.type==='dialogue');
  const writing=ch.blocks.filter(b=>b.type==='writing');
  assert.ok(dialogue.length&&dialogue.every(b=>Array.isArray(b.lines)&&b.lines.length>=2&&b.lines.every(line=>line.orig&&line.trans)),'English chapter '+i+' missing translated dialogue');
  assert.ok(writing.length&&writing.every(b=>b.prompt&&b.model&&Array.isArray(b.keywords)&&b.keywords.length),'English chapter '+i+' missing model writing');
 }
});

test('English pronunciation notes accurately compare th and w with Arabic sounds',()=>{
 const html=read('english-academy.html');
 assert.doesNotMatch(html,/صوت الـth مش موجود في العربي/);
 assert.doesNotMatch(html,/صوت الـw بالشفايف، مش موجود في العربي/);
 assert.match(html,/في كلمة thank يُنطق th مثل «ث» العربية/);
 assert.match(html,/صوت w قريب من «و» العربية/);
});

test('Brazilian greeting lesson teaches regional and nasal pronunciation without overclaiming transliteration',()=>{
 const greeting=lessons('ptbr-academy.html')[0];
 assert.equal(greeting.title,'التحية والتوديع');
 assert.match(greeting.grammar,/لهجات برازيلية كثيرة/);
 assert.match(greeting.grammar,/صوتًا أنفيًا/);
 assert.match(greeting.grammar,/لا تعتمد على كتابة الحروف العربية وحدها/);
});

test('Brazilian lessons offer interactive five-question active recall practice',()=>{
 const html=read('ptbr-academy.html');
 assert.match(html,/تحدي التذكر السريع/);
 assert.match(html,/begin\(shuffled\(vocab\)\.slice\(0,Math\.min\(5,vocab\.length\)\),false\)/);
 assert.match(html,/w===target/);
 assert.match(html,/تحدي جديد/);
 assert.match(html,/aria-live','polite/);
});

test('Brazilian recall challenge provides audio with explicit TTS fallback and a missed-word review round',()=>{
 const html=read('ptbr-academy.html');
 assert.match(html,/findPtbrAudio\(target\[0\]\)/,'uses indexed audio when available');
 assert.match(html,/playPtbrHostedPath\(clip\.normal,target\[0\]\)/,'plays mapped audio');
 assert.match(html,/speakPortuguese\(source\)/,'synthetic fallback');
 assert.match(html,/نطق صناعي من المتصفح، وليس تسجيلًا صوتيًا بشريًا موثقًا/,'does not mislabel TTS');
 assert.match(html,/else if\(!missed\.includes\(target\)\)missed\.push\(target\)/,'collects missed questions');
 assert.match(html,/retryMissed\.addEventListener\('click',\(\)=>begin\(missed,true\)\)/,'retries missed questions only');
 assert.match(html,/button\.classList\.add\('wrong'\)/,'marks incorrect selection');
 assert.match(html,/b\.classList\.add\('correct'\)/,'reveals the correct answer');
});

test('Brazilian academy inline lesson scripts parse as valid JavaScript',()=>{
 const html=read('ptbr-academy.html');
 const scripts=[...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)].map(match=>match[1]).filter(source=>source.trim());
 assert.ok(scripts.length,'Missing inline lesson script');
 scripts.forEach((source,index)=>assert.doesNotThrow(()=>new vm.Script(source,{filename:'ptbr-academy-inline-'+index+'.js'})));
});

test('Brazilian writing keyword checks normalize accents and require full phrases',()=>{
 const html=read('ptbr-academy.html');
 const found=html.match(/const normalizeWritingText=value=>([^;]+);const normalizedAnswer=/);
 assert.ok(found,'Brazilian writing normalizer missing');
 const normalize=vm.runInNewContext('(value)=>'+found[1]);
 const includes=(answer,term)=>(' '+normalize(answer)+' ').includes(' '+normalize(term)+' ');
 assert.equal(normalize('Olá,   você!'),'ola voce');
 assert.ok(includes('Oi! Bom dia.','Oi'));
 assert.ok(includes('Meu nome é Ana.','Meu nome é'));
 assert.ok(!includes('Dois livros.','Oi'),'partial words must not count as target vocabulary');
 assert.ok(!includes('Eu sou do Egito.','sou doze'),'unrelated phrases must not match');
 assert.match(html,/const marker=' '\+stem\+' '/,'keyword matching must use phrase boundaries');
});

test('Brazilian consonant writing exercise asks for exactly eight words',()=>{
 const lesson=lessons('ptbr-academy.html').find(l=>l.title.includes('الحروف الساكنة والتركيبات'));
 assert.ok(lesson,'Consonant lesson missing');
 assert.match(lesson.writing.prompt,/اكتب 8 كلمات/);
 assert.match(lesson.writing.prompt,/وكلمة واحدة لـ R/);
 assert.equal(lesson.writing.model.split(',').length,8,'Consonant model answer must have eight examples');
});

test('Brazilian number and conjugation writing targets match their model responses',()=>{
 const items=lessons('ptbr-academy.html');
 for(const title of ['الأرقام من الصفر إلى الألف والعمر','تصريف الأفعال المنتظمة في المضارع: -ar و-er و-ir']){
  const lesson=items.find(l=>l.title===title);
  assert.ok(lesson,'Missing writing lesson '+title);
  const model=lesson.writing.model.toLocaleLowerCase('pt-BR');
  for(const keyword of lesson.writing.keywords){
   assert.ok(model.includes(keyword.toLocaleLowerCase('pt-BR')),'Writing target absent from model: '+title+' / '+keyword);
  }
 }
});

test('Brazilian beginner writing feedback uses phrases demonstrated by its model dialogues',()=>{
 const items=lessons('ptbr-academy.html');
 for(const title of ['التحية والتوديع','كلمات الأدب الأساسية','تسأل عن اللغة']){
  const lesson=items.find(l=>l.title===title);
  assert.ok(lesson,'Missing beginner lesson '+title);
  const model=lesson.writing.model.toLocaleLowerCase('pt-BR');
  for(const keyword of lesson.writing.keywords)assert.ok(model.includes(keyword.toLocaleLowerCase('pt-BR')),'Model does not demonstrate feedback phrase '+keyword+' in '+title);
 }
});

test('Brazilian writing feedback supports fill-in phrase templates and slash alternatives',()=>{
 const html=read('ptbr-academy.html');
 assert.match(html,/const writingPhraseMatches=/);
 assert.match(html,/const placeholder=/);
 assert.match(html,/const matched=l\.writing\.keywords\.filter\(k=>writingPhraseMatches/);
});

test('All 90 Brazilian lesson quizzes have valid distinct choices and explanations',()=>{
 const items=lessons('ptbr-academy.html');
 assert.equal(items.length,90);
 for(const [index,lesson] of items.entries()){
  const where='Brazilian lesson '+(index+1)+' '+lesson.title;
  assert.ok(typeof lesson.q==='string'&&lesson.q.trim().length>=10,where+' missing meaningful question');
  assert.ok(Array.isArray(lesson.answers)&&lesson.answers.length>=3,where+' missing choices');
  assert.ok(lesson.answers.every(x=>typeof x==='string'&&x.trim()),where+' blank choice');
  assert.equal(new Set(lesson.answers.map(x=>x.trim().toLocaleLowerCase('pt-BR'))).size,lesson.answers.length,where+' duplicate choices');
  assert.ok(Number.isInteger(lesson.correct)&&lesson.correct>=0&&lesson.correct<lesson.answers.length,where+' invalid correct index');
  assert.ok(typeof lesson.explain==='string'&&lesson.explain.trim().length>=15,where+' missing explanation');
 }
});

test('All 216 European academy lesson quizzes and scenarios have distinct usable answers',()=>{
 let checked=0;
 for(const lang of european){
  const items=lessons(lang+'-academy.html');
  for(const [i,l] of items.entries()){
   const where=lang+' lesson '+(i+1);
   for(const [label,question,options,correct] of [
    ['quiz',l.q,l.answers,l.correct],
    ['scenario',l.scenario.question,l.scenario.options,l.scenario.correct]
   ]){
    assert.ok(typeof question==='string'&&question.trim().length>=5,where+' '+label+' missing question');
    assert.ok(Array.isArray(options)&&options.length>=3,where+' '+label+' missing options');
    assert.ok(options.every(x=>typeof x==='string'&&x.trim()),where+' '+label+' blank option');
    assert.equal(new Set(options.map(x=>x.trim().toLocaleLowerCase())).size,options.length,where+' '+label+' duplicate options');
    assert.ok(Number.isInteger(correct)&&correct>=0&&correct<options.length,where+' '+label+' invalid answer');
    checked++;
   }
  }
 }
 assert.equal(checked,432,'Expected quiz and scenario for each of 216 lessons');
});

test('All 216 European lessons have usable translated conversations and writing models',()=>{
 let count=0;
 for(const lang of european){
  for(const [i,l] of lessons(lang+'-academy.html').entries()){
   const where=lang+' lesson '+(i+1);
   assert.ok(Array.isArray(l.dialogue)&&l.dialogue.length>=2,where+' missing conversation');
   for(const [n,turn] of l.dialogue.entries()){
    assert.ok(Array.isArray(turn)&&turn.length>=3,where+' malformed dialogue turn '+n);
    assert.ok(turn.slice(0,3).every(v=>typeof v==='string'&&v.trim()),where+' missing speaker, phrase or Arabic meaning at turn '+n);
   }
   assert.ok(l.writing.prompt.trim().length>=12,where+' writing task too short');
   assert.ok(l.writing.model.trim().length>=12,where+' writing model too short');
   assert.ok(l.writing.keywords.every(x=>typeof x==='string'&&x.trim()),where+' invalid writing targets');
   count++;
  }
 }
 assert.equal(count,216);
});

test('Brazilian travel writing rubrics use phrases shown in lesson models',()=>{
 const items=lessons('ptbr-academy.html');
 for(const title of ['تسأل عن مكان شيء','الاتجاهات وفهم الطريق','الأيام والوقت والمواعيد','الأسعار والدفع','تطلب أكلًا ومشروبًا']){
  const lesson=items.find(x=>x.title===title);
  assert.ok(lesson,'Missing travel lesson '+title);
  const normalize=value=>String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^\p{L}\p{N}\s]/gu,' ').replace(/\s+/g,' ').trim().toLocaleLowerCase();
  const model=normalize(lesson.writing.model);
  for(const key of lesson.writing.keywords){
   const stems=key.split(/\s+\/\s+/).map(part=>normalize(part.replace(/\.{3}|…/g,'')));
   assert.ok(stems.some(stem=>stem&&model.includes(stem)),'Writing model lacks target '+key+' in '+title);
  }
 }
});


test('Brazilian travel and foundation practice models explicitly demonstrate every writing target',()=>{
 const items=lessons('ptbr-academy.html');
 const priority=[12,13,14,15,16,17,18,19,20,21,25,26,28,31,33,34,35,38];
 const normalize=value=>String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^\p{L}\p{N}\s]/gu,' ').replace(/\s+/g,' ').trim().toLocaleLowerCase();
 for(const i of priority){
  const l=items[i],where='Brazilian lesson '+(i+1)+' '+l.title;
  assert.ok(l.writing.prompt.length>=75,where+' missing contextual writing assignment');
  assert.ok(l.writing.model.length>=45,where+' missing authentic example');
  const model=normalize(l.writing.model);
  for(const key of l.writing.keywords){
   const alternatives=key.split(/\s+\/\s+/).map(x=>normalize(x.replace(/\.{3}|…/g,'')));
   assert.ok(alternatives.some(stem=>stem&&model.includes(stem)),where+' target absent from example: '+key);
  }
 }
 assert.equal(priority.length,18);
});

test('Brazilian phrase matcher only accepts complete filled-in models and whole-word terms',()=>{
 const html=read('ptbr-academy.html');
 const start=html.indexOf('const normalizeWritingText=value=>');
 const middle=html.indexOf(';const normalizedAnswer=',start);
 const matcher=html.indexOf('const writingPhraseMatches=',middle);
 const end=html.indexOf(';const matched=',matcher);
 assert.ok(start>=0&&middle>start&&matcher>middle&&end>matcher,'Missing writing matcher functions');
 const source=html.slice(start,middle)+';'+html.slice(matcher,end)+';({check:(k,v)=>writingPhraseMatches(k," "+normalizeWritingText(v)+" ")})';
 const check=vm.runInNewContext(source,{}, {timeout:2000}).check;
 assert.equal(check('Meu nome é…','Meu nome é Ahmed'),true);
 assert.equal(check('Meu nome é…','Meu nome é'),false);
 assert.equal(check('Onde fica...?','Onde fica o banheiro?'),true);
 assert.equal(check('Onde fica...?','Onde fica?'),false);
 assert.equal(check('Oi','Oi! Bom dia!'),true);
 assert.equal(check('Oi','Dois livros.'),false);
 assert.equal(check('Bom dia / Boa tarde','Boa tarde!'),true);
 assert.equal(check('Bom dia / Boa tarde','Boa noite!'),false);
 assert.equal(check('à direita','A direita.'),true);
});
