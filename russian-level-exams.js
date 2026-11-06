(function(){
'use strict';
if(typeof lessons==='undefined'||typeof lessonContent==='undefined'||typeof lessonExtraWords==='undefined'||typeof lessonGrammarDrills==='undefined')return;
const anchor=document.getElementById('russian-review');
if(!anchor)return;
const section=document.createElement('section');
section.id='russian-level-exams';section.className='ru-review';section.dir='rtl';
section.innerHTML='<h2>🎓 امتحانات نهاية المستوى — الروسية</h2><p>20 سؤالًا لكل مستوى: 10 مفردات، 5 قواعد وتطبيق، و5 فهم مسموع باستخدام نطق المتصفح الروسي. درجة النجاح 70%. النتيجة تدريبية وليست شهادة رسمية.</p><label for="ru-exam-level">اختر المستوى: </label> <select id="ru-exam-level"><option>A1</option><option>A2</option><option>B1</option><option>B2</option></select> <button type="button" id="ru-exam-start">ابدأ امتحانًا جديدًا</button><div id="ru-exam-content" aria-live="polite"><p>اختر المستوى ثم ابدأ الامتحان.</p></div>';
anchor.insertAdjacentElement('afterend',section);
const css=document.createElement('style');css.textContent='#russian-level-exams{margin-top:16px}#russian-level-exams select{padding:8px;border:1px solid #ccd6e3;border-radius:8px}#russian-level-exams button{margin:5px;padding:9px 13px}#russian-level-exams .exam-options{display:grid;gap:8px;margin:12px 0}#russian-level-exams .exam-options button{text-align:right}#russian-level-exams .exam-question{border:1px solid #dfe7f1;border-radius:12px;padding:14px;margin:12px 0}#russian-level-exams .exam-foreign{direction:ltr;unicode-bidi:isolate;font-size:22px;font-weight:bold}#russian-level-exams button:focus-visible{outline:3px solid #0e8dd3}';document.head.appendChild(css);
const levelEl=document.getElementById('ru-exam-level'),area=document.getElementById('ru-exam-content'),start=document.getElementById('ru-exam-start');
const shuffle=a=>{const b=a.slice();for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b};
const node=(tag,value)=>{const e=document.createElement(tag);if(value!==undefined)e.textContent=value;return e};
function bank(level){
 const vocab=[],grammar=[],seen=new Set();
 lessons.forEach((lesson,i)=>{
  if(lesson.level!==level)return;
  for(const w of (lessonContent[i].words||[]).concat(lessonExtraWords[i]||[])){
   const word=String(w[0]||'').trim(),meaning=String(w[2]||'').trim(),key=word+'|'+meaning;
   if(word&&meaning&&!seen.has(key)){seen.add(key);vocab.push({word,meaning})}
  }
  const drill=lessonGrammarDrills[i];
  if(Array.isArray(drill)&&drill[0]&&drill[1])grammar.push({prompt:String(drill[0]),answer:String(drill[1])});
 });
 return {vocab,grammar};
}
function makeChoices(answer,pool){
 const other=shuffle([...new Set(pool.filter(v=>v&&v!==answer))]).slice(0,3);
 return other.length===3?shuffle([answer,...other]):null;
}
let exam=null;
function startExam(){
 const level=levelEl.value,{vocab,grammar}=bank(level);
 const v=shuffle(vocab),g=shuffle(grammar);
 if(v.length<15||g.length<5){area.replaceChildren(node('p','المحتوى غير كافٍ لإعداد امتحان متوازن لهذا المستوى.'));return}
 const questions=[];
 for(let i=0;i<10;i++){const item=v[i],choices=makeChoices(item.meaning,vocab.map(x=>x.meaning));if(choices)questions.push({type:'مفردات',prompt:'ما معنى الكلمة الروسية؟',foreign:item.word,answer:item.meaning,choices})}
 for(let i=0;i<5;i++){const item=g[i],choices=makeChoices(item.answer,grammar.map(x=>x.answer));if(choices)questions.push({type:'قواعد وتطبيق',prompt:item.prompt,answer:item.answer,choices})}
 for(let i=10;i<15;i++){const item=v[i],choices=makeChoices(item.meaning,vocab.map(x=>x.meaning));if(choices)questions.push({type:'فهم مسموع',prompt:'استمع للكلمة الروسية واختر معناها.',audio:item.word,answer:item.meaning,choices})}
 if(questions.length!==20){area.replaceChildren(node('p','تعذر إنشاء امتحان كامل من بنك الأسئلة المتاح.'));return}
 exam={level,questions:shuffle(questions),answers:new Array(20).fill(null),submitted:false};
 levelEl.disabled=true;start.disabled=true;render();
}
function render(){
 area.replaceChildren();if(!exam)return;
 const intro=node('p','المستوى '+exam.level+' · 20 سؤالًا · النجاح من 14 إجابة صحيحة');area.appendChild(intro);
 exam.questions.forEach((q,i)=>{
  const block=node('div');block.className='exam-question';
  block.appendChild(node('strong',(i+1)+'. '+q.type+' — '+q.prompt));
  if(q.foreign){const f=node('p',q.foreign);f.className='exam-foreign';f.lang='ru';block.appendChild(f)}
  if(q.audio){const b=node('button','🔊 استمع للكلمة');b.type='button';b.addEventListener('click',()=>{if(typeof speak==='function')speak(q.audio,.85)});block.appendChild(b)}
  const options=node('div');options.className='exam-options';
  q.choices.forEach((choice,j)=>{
   const label=node('label');const radio=node('input');radio.type='radio';radio.name='ru-exam-q-'+i;radio.value=String(j);radio.checked=exam.answers[i]===j;radio.disabled=exam.submitted;radio.addEventListener('change',()=>{exam.answers[i]=j;updateCount()});
   label.append(radio,document.createTextNode(' '));const span=node('span',choice);if(q.type==='قواعد وتطبيق'){span.dir='ltr';span.lang='ru'}label.appendChild(span);options.appendChild(label);
  });
  block.appendChild(options);
  if(exam.submitted){const selected=exam.answers[i]===null?null:q.choices[exam.answers[i]];const correct=selected===q.answer;block.appendChild(node('p',(correct?'✓ صحيح':'✗ الصحيح: '+q.answer)))}
  area.appendChild(block);
 });
 if(!exam.submitted){const count=node('p');count.id='ru-exam-count';area.appendChild(count);updateCount();const submit=node('button','تسليم الامتحان وعرض النتيجة');submit.type='button';submit.addEventListener('click',()=>{
  if(exam.answers.some(x=>x===null)){area.querySelector('#ru-exam-count').textContent='أجب عن جميع الأسئلة العشرين قبل التسليم.';return}
  exam.submitted=true;levelEl.disabled=false;start.disabled=false;render();area.scrollIntoView({block:'start',behavior:'smooth'});
 });area.appendChild(submit)}
 else{
  const correct=exam.questions.filter((q,i)=>q.choices[exam.answers[i]]===q.answer).length,pct=correct*5;
  const result=node('h3','النتيجة: '+correct+'/20 — '+pct+'% — '+(pct>=70?'ناجح ✓':'تحتاج مراجعة'));
  area.insertBefore(result,area.firstChild);
  const note=node('p','الاستماع يعتمد على الصوت المتاح في متصفحك، ولا يقيس النطق أو المحادثة. هذه نتيجة تدريبية وليست شهادة مستوى معتمدة.');area.insertBefore(note,result.nextSibling);
  try{const key='sd_ru_level_exam_'+exam.level;const prior=Number(localStorage.getItem(key)||0);if(pct>prior)localStorage.setItem(key,String(pct))}catch(e){}
 }
}
function updateCount(){const p=document.getElementById('ru-exam-count');if(p)p.textContent='تمت الإجابة عن '+exam.answers.filter(x=>x!==null).length+' من 20 سؤالًا.'}
start.addEventListener('click',startExam);
})();