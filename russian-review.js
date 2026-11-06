(function(){
'use strict';
if(typeof lessons==='undefined'||typeof lessonContent==='undefined'||typeof lessonExtraWords==='undefined'||!Array.isArray(lessons)||!Array.isArray(lessonContent)||!Array.isArray(lessonExtraWords))return;
const progress=document.querySelector('section.progress');if(!progress||document.getElementById('russian-review'))return;
const panel=document.createElement('section');panel.id='russian-review';panel.className='ru-review';panel.lang='ar';panel.dir='rtl';
panel.innerHTML='<h2>📚 مراجعة الروسية — اتعلم وافتكر</h2><p>بطاقات ومراجعة متباعدة واختبار من دروس الأكاديمية الـ48، مع النطق الصناعي العادي والبطيء. التسجيلات المرفوعة لا تُربط إلا إذا ثبت تطابق النص مع الملف.</p><div class="ru-tools"><label for="ru-review-level">المستوى</label><select id="ru-review-level"><option value="all">كل المستويات</option><option>A1</option><option>A2</option><option>B1</option><option>B2</option></select><button type="button" id="ru-review-flash">🗂️ بطاقة جديدة</button><button type="button" id="ru-review-due">🕐 مراجعة المستحقة</button><button type="button" id="ru-review-test" class="primary">🧠 اختبار 10 أسئلة</button></div><p id="ru-review-summary" class="muted" role="status"></p><div id="ru-review-box" aria-live="polite"></div><p class="ru-review-note">المراجعة المحفوظة تخص جهازك الحالي. كلمة تعرفها تُراجع لاحقًا؛ والكلمة الصعبة ترجع للمراجعة فورًا. هذا تدريب، وليس اختبار نطق آلي.</p>';
progress.insertAdjacentElement('afterend',panel);
if(window.location.hash==='#russian-review'&&typeof requestAnimationFrame==='function')requestAnimationFrame(()=>panel.scrollIntoView({block:'start'}));
const css=document.createElement('style');css.textContent='.ru-review{background:white;border:1px solid #dfe7f1;border-radius:16px;padding:18px;margin:14px 0 18px;scroll-margin-top:100px;line-height:1.85}.ru-review h2{margin:0 0 7px}.ru-review p{margin:7px 0}.ru-review .ru-tools{display:flex;flex-wrap:wrap;align-items:center;gap:9px;margin:13px 0}.ru-review .ru-tools select{font:inherit;padding:8px 11px;border:1px solid #ccd6e3;border-radius:9px}.ru-review .ru-foreign{font-size:26px;font-weight:900;direction:ltr;unicode-bidi:isolate;text-align:center;margin:16px auto}.ru-review .ru-options{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px;margin:12px 0}.ru-review .ru-options button{text-align:right;min-height:45px}.ru-review .ru-flashcard{padding:16px;border:1px solid #bdd9ec;border-radius:12px;background:#f3faff}.ru-review .ru-meaning{font-size:20px;font-weight:800;color:#103b5c}.ru-review .ru-feedback{font-weight:800;margin:9px 0}.ru-review .ru-review-note{font-size:12px;color:#587184;margin-top:15px}.ru-review button:focus-visible,.ru-review select:focus-visible{outline:3px solid #0e8dd3;outline-offset:2px}@media(max-width:560px){.ru-review .ru-options{grid-template-columns:1fr}}';document.head.appendChild(css);
const el=id=>document.getElementById(id);const box=el('ru-review-box');const STATE_KEY='sd_ru_review_srs_v2',SCORE_KEY='sd_ru_revision_scores';
function getStored(key){try{const data=JSON.parse(localStorage.getItem(key)||'{}');return data&&typeof data==='object'&&!Array.isArray(data)?data:{}}catch(e){return {}}}
function save(key,value){try{localStorage.setItem(key,JSON.stringify(value));return true}catch(e){return false}}
function randomize(arr){const a=arr.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function allWords(){
 const level=el('ru-review-level').value,found=new Set(),rows=[];
 lessons.forEach((lesson,i)=>{
  if(level!=='all'&&lesson.level!==level)return;
  (lessonContent[i]?.words||[]).concat(lessonExtraWords[i]||[]).forEach(w=>{
   const word=String(w?.[0]||'').trim(),meaning=String(w?.[2]||'').trim();const key=word+'\u001f'+meaning;
   if(word&&meaning&&!found.has(key)){found.add(key);rows.push({word,meaning,key,unit:i+1})}
  });
 });return rows
}
function dueRows(){const now=Date.now(),store=getStored(STATE_KEY);return allWords().filter(w=>!store[w.key]||!Number.isFinite(store[w.key].due)||store[w.key].due<=now)}
function updateSummary(){const all=allWords(),due=dueRows(),level=el('ru-review-level').value,score=getStored(SCORE_KEY)[level];el('ru-review-summary').textContent='مفردات في هذا المستوى: '+all.length+' · مستحقة للمراجعة: '+due.length+(Number.isFinite(score)?' · أفضل نتيجة اختبار: '+score+'%':' · لا توجد نتيجة اختبار محفوظة')}
function create(tag,text,cls){const node=document.createElement(tag);if(text!==undefined)node.textContent=text;if(cls)node.className=cls;return node}
function button(parent,label,callback){const b=create('button',label);b.type='button';b.addEventListener('click',callback);parent.appendChild(b);return b}
function pronunciation(parent,item){const controls=create('div',undefined,'ru-tools');button(controls,'🔊 صوت المتصفح',()=>speak(item.word,.9));button(controls,'🐢 بطيء',()=>speak(item.word,.6));parent.appendChild(controls)}
function updateCard(item,known){
 const store=getStored(STATE_KEY),prior=store[item.key]||{},step=known?Math.min(4,(Number(prior.step)||0)+1):0;
 // Immediate retry for difficult terms; known terms return after 1, 3, 7 or 14 days.
 const intervals=[0,1,3,7,14],delay=known?intervals[step]*86400000:0;
 store[item.key]={step,due:Date.now()+delay,lastResult:known?'known':'retry',updated:Date.now()};
 save(STATE_KEY,store);updateSummary()
}
let currentFlash=null,flashMode='all';
function flash(mode){
 flashMode=mode;const source=mode==='due'?dueRows():allWords();box.replaceChildren();
 if(!source.length){box.appendChild(create('p',mode==='due'?'ممتاز! لا توجد كلمات مستحقة حاليًا. يمكنك مراجعة كل الكلمات أو إجراء اختبار.':'لا توجد مفردات في هذا المستوى.'));return}
 const previous=currentFlash?.key;const candidates=source.length>1?source.filter(x=>x.key!==previous):source;
 const item=randomize(candidates)[0];currentFlash=item;
 const card=create('article',undefined,'ru-flashcard');card.appendChild(create('p','الدرس '+item.unit+' · افتكر معنى الكلمة ثم اكشف الإجابة.'));const foreign=create('p',item.word,'ru-foreign');foreign.lang='ru';foreign.dir='ltr';card.appendChild(foreign);
 pronunciation(card,item);
 const meaning=create('p',item.meaning,'ru-meaning');meaning.hidden=true;card.appendChild(meaning);
 const reveal=button(card,'👁️ اكشف المعنى',()=>{meaning.hidden=false;reveal.disabled=true;knownBtn.hidden=false;retryBtn.hidden=false});const knownBtn=button(card,'✅ عرفتها',()=>{updateCard(item,true);flash(flashMode)});const retryBtn=button(card,'🔁 محتاج أراجعها',()=>{updateCard(item,false);flash(flashMode)});knownBtn.hidden=true;retryBtn.hidden=true;box.appendChild(card)
}
let quiz=null;
function beginQuiz(){const source=randomize(allWords()).slice(0,10);quiz={items:source,step:0,correct:0,level:el('ru-review-level').value};showQuiz()}
function showQuiz(){
 box.replaceChildren();if(!quiz||!quiz.items.length){box.appendChild(create('p','لا توجد أسئلة لهذا المستوى.'));return}
 if(quiz.step===quiz.items.length){const pct=Math.round(100*quiz.correct/quiz.items.length),scores=getStored(SCORE_KEY);scores[quiz.level]=Math.max(scores[quiz.level]||0,pct);save(SCORE_KEY,scores);box.appendChild(create('p','النتيجة: '+quiz.correct+' من '+quiz.items.length+' ('+pct+'%)','ru-feedback'));button(box,'أعد الاختبار',beginQuiz);updateSummary();return}
 const item=quiz.items[quiz.step];box.appendChild(create('p','سؤال '+(quiz.step+1)+' من '+quiz.items.length+': ما معنى الكلمة؟'));const foreign=create('p',item.word,'ru-foreign');foreign.lang='ru';foreign.dir='ltr';box.appendChild(foreign);pronunciation(box,item);
 const alternate=randomize([...new Set(allWords().map(x=>x.meaning).filter(x=>x!==item.meaning))]).slice(0,3);const choices=randomize([item.meaning,...alternate]);const options=create('div',undefined,'ru-options');box.appendChild(options);let answered=false;
 choices.forEach(choice=>button(options,choice,()=>{
  if(answered)return;answered=true;const correct=choice===item.meaning;if(correct)quiz.correct++;updateCard(item,correct);
  options.querySelectorAll('button').forEach(b=>{b.disabled=true;if(b.textContent===item.meaning)b.style.background='#dcfce7';else if(b.textContent===choice)b.style.background='#fee2e2'});
  box.appendChild(create('p',correct?'✓ إجابة صحيحة':'الإجابة الصحيحة: '+item.meaning,'ru-feedback'));
  button(box,quiz.step+1===quiz.items.length?'اعرض النتيجة':'السؤال التالي',()=>{quiz.step++;showQuiz()});
 }));
}
el('ru-review-flash').addEventListener('click',()=>flash('all'));
el('ru-review-due').addEventListener('click',()=>flash('due'));
el('ru-review-test').addEventListener('click',beginQuiz);
el('ru-review-level').addEventListener('change',()=>{quiz=null;currentFlash=null;box.replaceChildren();box.appendChild(create('p','اختر بطاقة أو مراجعة أو اختبارًا للمستوى.'));updateSummary()});
updateSummary();
})();