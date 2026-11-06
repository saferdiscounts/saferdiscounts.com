(function(){
'use strict';
const catalog=window.SD_PTBR_PRACTICE,mastery=window.SDAcademyMastery;
if(!catalog||!mastery||!Array.isArray(catalog.themes))throw Error('Practical lab dependencies are missing');
const $=id=>document.getElementById(id);
const topicList=$('topicList'),panel=$('lessonPanel'),progress=$('progress'),voiceStatus=$('voiceStatus');
const storeKey='sd_ptbr_practical_mastery_v1',errKey='sd_ptbr_practical_errors_v1';
let saved={},wrong={};
try{const j=JSON.parse(localStorage.getItem(storeKey)||'{}');if(j&&typeof j==='object'&&!Array.isArray(j))saved=j}catch(e){}
try{const j=JSON.parse(localStorage.getItem(errKey)||'{}');if(j&&typeof j==='object'&&!Array.isArray(j))wrong=j}catch(e){}
let active=0,stage='cards',cardIndex=0,flipped=false,round=[],question=0,score=0,mistakes=[],locked=false,orderIndex=-1,tokenOptions=[],picked=[],orderScored=false;
const esc=x=>String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const shuffle=x=>{const a=x.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const unit=()=>catalog.themes[active],key=()=>unit().id;
function getVoice(){
 if(!('speechSynthesis'in window)||typeof window.SpeechSynthesisUtterance!=='function')return null;
 return window.speechSynthesis.getVoices().find(v=>/^pt[-_]BR$/i.test(v.lang))||null;
}
function audioNotice(){
 const voice=getVoice();
 voiceStatus.textContent=voice?'الصوت المتاح هنا من متصفحك بصوت برتغالي برازيلي آلي ('+voice.name+'). ليس تسجيلًا بشريًا موثقًا.':'لا يوجد حاليًا صوت برازيلي (pt-BR) متاح في هذا المتصفح؛ استخدم التدريبات النصية دون اختبار استماع.';
 panel.querySelectorAll('[data-play]').forEach(b=>{b.disabled=!voice;b.title=voice?'استمع بصوت المتصفح':'لا يتوفر صوت pt-BR'});
}
function speak(value,slow){
 const voice=getVoice();if(!voice){audioNotice();return false}
 const x=new SpeechSynthesisUtterance(value);x.voice=voice;x.lang='pt-BR';x.rate=slow?.62:.90;
 window.speechSynthesis.cancel();window.speechSynthesis.speak(x);return true;
}
function linkAudio(){
 panel.querySelectorAll('[data-play]').forEach(b=>b.addEventListener('click',()=>{const id=Number(b.dataset.play);speak(unit().phrases[id][0],b.dataset.slow==='yes')}));
 audioNotice();
}
function rememberError(id){
 const k=key(),list=Array.isArray(wrong[k])?wrong[k]:[];
 wrong[k]=[...new Set([...list,id])].filter(n=>Number.isInteger(n)&&n>=0&&n<unit().phrases.length);
 try{localStorage.setItem(errKey,JSON.stringify(wrong))}catch(e){}
}
function markKnown(id){
 const k=key(),list=Array.isArray(wrong[k])?wrong[k]:[];
 wrong[k]=list.filter(x=>x!==id);
 try{localStorage.setItem(errKey,JSON.stringify(wrong))}catch(e){}
}
function chooseTheme(i){
 active=i;stage='cards';cardIndex=0;flipped=false;score=0;mistakes=[];draw();panel.scrollIntoView({behavior:'smooth',block:'start'});
}
function navbar(){
 const statuses=catalog.themes.map(t=>mastery.state(saved[t.id])),full=statuses.filter(s=>s.retained).length,due=statuses.filter(s=>s.due).length;
 progress.textContent='موضوعات راجعتها ثلاث مرات متباعدة: '+full+' من '+catalog.themes.length+' · مراجعات مستحقة: '+due+'. النجاح الكتابي لا يمثل إتقان النطق أو شهادة CEFR.';
 $('progressFill').style.width=(100*full/catalog.themes.length)+'%';
 topicList.innerHTML=catalog.themes.map((t,i)=>'<button type="button" data-topic="'+i+'" aria-pressed="'+(i===active)+'"><b>'+(i+1)+'. '+esc(t.title)+'</b><small>'+esc(t.level)+' · 8 عبارات · '+esc(statuses[i].label)+'</small></button>').join('');
 topicList.querySelectorAll('[data-topic]').forEach(b=>b.onclick=()=>chooseTheme(+b.dataset.topic));
}
function panelHeader(t){return '<span class="level">'+t.level+'</span><h2>'+esc(t.title)+'</h2><p>'+esc(t.goal)+'</p><p class="hint">'+esc(t.note)+'</p>'}
function draw(){
 navbar();const t=unit();
 if(stage==='cards')return cards();
 if(stage==='quiz')return quiz();
 if(stage==='order')return ordering();
 if(stage==='result')return result();
}
function cards(){
 const t=unit(),p=t.phrases[cardIndex];
 panel.innerHTML=panelHeader(t)+'<div class="mini"><span>الخطوة 1 من 3 · البطاقات</span><span>بطاقة '+(cardIndex+1)+' / 8</span></div>'+
 '<div class="flipcard"><p>اقرأ المعنى وحاول تذكر العبارة قبل كشفها.</p><div class="arabic">'+esc(p[1])+'</div>'+
 (flipped?'<div class="translation" lang="pt-BR" dir="ltr">'+esc(p[0])+'</div>':'<button type="button" class="primary" id="reveal">اكشف العبارة بعد المحاولة</button>')+
 '</div><div class="row">'+(flipped?'<button type="button" class="outline" id="hard">مش فاكرها — أضفها للمراجعة</button><button type="button" class="primary" id="known">عرفتها — البطاقة التالية</button><button type="button" class="audio" data-play="'+cardIndex+'" data-slow="yes">🐢 اسمع ببطء</button>':'')+'</div>'+
 '<p class="small">المفردات التي تختار مراجعتها تظهر مجددًا بعد الاختبار. النطق الصوتي، إن توفر، آلي من المتصفح.</p>';
 if(!flipped)panel.querySelector('#reveal').onclick=()=>{flipped=true;cards()};
 else{
  panel.querySelector('#hard').onclick=()=>{rememberError(cardIndex);nextCard()};
  panel.querySelector('#known').onclick=()=>{markKnown(cardIndex);nextCard()};
  linkAudio();
 }
}
function nextCard(){if(cardIndex<7){cardIndex++;flipped=false;cards()}else startQuiz()}
function startQuiz(){stage='quiz';question=0;score=0;mistakes=[];round=shuffle([0,1,2,3,4,5,6,7]).slice(0,5);quiz()}
function quiz(){
 const t=unit();if(question>=round.length){startOrdering();return}
 const id=round[question],pair=t.phrases[id],reverse=question%2===1;
 const alternatives=shuffle([id,...shuffle(t.phrases.map((_,i)=>i).filter(i=>i!==id)).slice(0,3)]);
 locked=false;
 panel.innerHTML='<span class="level">'+esc(t.level)+'</span><h2>اختبار الفهم · '+(question+1)+' من 5</h2>'+
 '<p class="small">الخطوة 2 من 3. لا تظهر البطاقة أو ترجمتها كاملة قبل الإجابة.</p><div class="exam"><p><b>'+(reverse?'اختر المعنى العربي الصحيح:':'اختر العبارة البرازيلية المناسبة:')+'</b></p>'+
 (reverse?'<p class="translation" lang="pt-BR" dir="ltr">'+esc(pair[0])+'</p>':'<p class="arabic">'+esc(pair[1])+'</p>')+
 '<div class="answers">'+alternatives.map(i=>'<button type="button" data-pick="'+i+'" '+(reverse?'dir="rtl"':'dir="ltr" lang="pt-BR"')+'>'+esc(t.phrases[i][reverse?1:0])+'</button>').join('')+'</div>'+
 '<p id="feedback" role="status" aria-live="polite"></p><button type="button" class="primary" id="next" hidden>السؤال التالي</button></div>';
 panel.querySelectorAll('[data-pick]').forEach(btn=>btn.onclick=()=>{
  if(locked)return;locked=true;
  const isCorrect=+btn.dataset.pick===id;
  if(isCorrect)score++;else{mistakes.push(id);rememberError(id)}
  panel.querySelectorAll('[data-pick]').forEach(b=>{b.disabled=true;if(+b.dataset.pick===id)b.classList.add('yes');else if(b===btn)b.classList.add('no')});
  panel.querySelector('#feedback').textContent=isCorrect?'إجابة صحيحة.':'راجع: '+pair[0]+' = '+pair[1];
  panel.querySelector('#next').hidden=false;
 });
 panel.querySelector('#next').onclick=()=>{question++;quiz()};
}
function startOrdering(){
 stage='order';const t=unit();
 const candidates=t.phrases.map((p,i)=>({i,size:p[0].trim().split(/\s+/).length})).filter(x=>x.size>=4&&x.size<=12);
 orderIndex=shuffle(candidates)[0].i;
 const tokens=t.phrases[orderIndex][0].trim().split(/\s+/);
 tokenOptions=shuffle(tokens.map((word,index)=>({word,index})));
 // Avoid displaying words already in their original order.
 if(tokenOptions.every((x,i)=>x.index===i))tokenOptions.push(tokenOptions.shift());
 picked=[];orderScored=false;ordering();
}
function ordering(){
 const t=unit(),pair=t.phrases[orderIndex],tokens=pair[0].trim().split(/\s+/);
 panel.innerHTML='<span class="level">'+esc(t.level)+'</span><h2>رتّب الجملة بنفسك</h2><p class="small">الخطوة 3 من 3. كوّن الجملة البرتغالية من الكلمات، بدون عرضها كاملة.</p>'+
 '<div class="exam"><p><b>المعنى المطلوب:</b> '+esc(pair[1])+'</p><div id="selected" class="selected" dir="ltr" aria-live="polite">'+(picked.length?picked.map(i=>'<span>'+esc(tokens[i])+'</span>').join(''):'اضغط على الكلمات بالترتيب الصحيح')+'</div>'+
 '<div class="tokens" dir="ltr">'+tokenOptions.map(x=>'<button type="button" data-token="'+x.index+'" '+(picked.includes(x.index)?'disabled':'')+'>'+esc(x.word)+'</button>').join('')+'</div>'+
 '<div class="row"><button type="button" class="outline" id="undo" '+(!picked.length?'disabled':'')+'>تراجع</button><button type="button" class="primary" id="check" '+(picked.length!==tokens.length?'disabled':'')+'>تحقق من ترتيب الجملة</button></div><p id="orderMessage" role="status" aria-live="polite"></p></div>';
 panel.querySelectorAll('[data-token]').forEach(b=>b.onclick=()=>{picked.push(+b.dataset.token);ordering()});
 panel.querySelector('#undo').onclick=()=>{picked.pop();ordering()};
 panel.querySelector('#check').onclick=()=>{
  if(orderScored)return;
  orderScored=true;
  const correct=picked.every((token,i)=>token===i);
  if(correct)score++;else{mistakes.push(orderIndex);rememberError(orderIndex)}
  stage='result';result();
 };
}
function result(){
 const t=unit(),full=score===6,k=key();
 saved[k]=mastery.record(saved[k],full?3:Math.min(2,Math.floor(score/2)),[...new Set(mistakes)].slice(0,3));
 try{localStorage.setItem(storeKey,JSON.stringify(saved))}catch(e){}
 navbar();
 const status=mastery.state(saved[k]),failed=[...new Set([...(wrong[k]||[]),...mistakes])];
 panel.innerHTML='<h2>نتيجة التدريب: '+score+' / 6</h2><p class="hint">'+(full?'نجحت في جولة الاسترجاع؛ عد في موعد المراجعة التالي لتثبيت الحفظ.':'لم تكتمل الجولة. راجع العبارات الصعبة وأعد الاختبار.')+'</p>'+
 '<p><strong>'+esc(status.label)+'</strong></p>'+
 '<p class="small">الدرجة مكوّنة من 5 اختيارات فهم + ترتيب جملة. لا تشمل تقييم جودة الصوت أو إنتاج كلام حر.</p>'+
 '<h3>بنك مراجعة العبارات الصعبة</h3>'+(failed.length?'<div class="review">'+failed.map(i=>'<div><span lang="pt-BR" dir="ltr">'+esc(t.phrases[i][0])+'</span><span>'+esc(t.phrases[i][1])+'</span><button type="button" class="audio" data-play="'+i+'" data-slow="yes">🐢 صوت المتصفح</button></div>').join('')+'</div>':'<p>لا توجد أخطاء محفوظة لهذا الموضوع.</p>')+
 '<div class="row"><button type="button" class="outline" id="again">أعد مراجعة البطاقات</button><button type="button" class="primary" id="retry">اختبار جديد</button>'+(active<catalog.themes.length-1?'<button type="button" class="outline" id="onward">الموضوع التالي</button>':'')+'</div>';
 panel.querySelector('#again').onclick=()=>{stage='cards';cardIndex=0;flipped=false;cards()};
 panel.querySelector('#retry').onclick=startQuiz;
 if(active<catalog.themes.length-1)panel.querySelector('#onward').onclick=()=>chooseTheme(active+1);
 linkAudio();
}
if('speechSynthesis'in window&&window.speechSynthesis.addEventListener)window.speechSynthesis.addEventListener('voiceschanged',audioNotice);
const requested=new URLSearchParams(location.search).get('topic');
const pos=catalog.themes.findIndex(x=>x.id===requested);
if(pos>=0)active=pos;
draw();
audioNotice();
})();
