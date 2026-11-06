/* Conservative audio links from independent normal/slow ASR agreement.
 * Not a human transcription or proof of accurate voice/audio content.
 * Never infer a recording from filename or translation.
 */
(function(){
'use strict';
const tag=document.currentScript;
const lang=tag&&tag.dataset&&tag.dataset.language;
const prefixes={en:'english/',it:'italian/',es:'spanish/',ru:'russian/',pt:'portuguese/'};
if(!Object.prototype.hasOwnProperty.call(prefixes,lang))return;
const panel=document.getElementById('lessonContent')||document.getElementById('lessonPanel');
if(!panel)return;
const normalize=value=>String(value||'').normalize('NFC').toLocaleLowerCase().replace(/[.!?¿¡,;:…“”"'«»()]/g,'').replace(/\s+/g,' ').trim();
const allowed=path=>typeof path==='string'&&path.startsWith(prefixes[lang]+'pronunciation/')&&/\/(?:basic|advanced)\/[a-z0-9_]+(?:_slow)?\.mp3$/.test(path);
const base='https://audio.saferdiscounts.com/';
let index=new Map(),ready=false,player=null;
const style=document.createElement('style');
style.textContent='.sd-asr-status{margin:11px 0;padding:9px 12px;border:1px solid #ecd4ad;border-radius:11px;background:#fff9eb;color:#624c28;font-size:12px;line-height:1.8}.sd-asr-status a{font-weight:800;color:#055d86}.sd-asr-row{display:flex;gap:5px;flex-wrap:wrap;align-items:center;margin:7px 0 2px}.sd-asr-row button{font:700 12px/1.5 Tahoma,Arial,sans-serif!important;padding:6px 9px;border:1px solid #a8bdd5;background:#eef5fd;color:#1d5380;border-radius:9px;cursor:pointer}.sd-asr-row button:focus-visible{outline:3px solid #ce9334}.sd-asr-row small{font:11px/1.6 Tahoma,Arial,sans-serif;color:#704f1e;display:block;width:100%}';
document.head.appendChild(style);
const status=document.createElement('p');
status.className='sd-asr-status';
status.setAttribute('role','status');
status.setAttribute('aria-live','polite');
panel.insertAdjacentElement('beforebegin',status);
function statusMessage(text){
 status.replaceChildren(document.createTextNode(text+' '));
 const link=document.createElement('a');
 link.href='audio-review-workbench.html?lang='+lang;
 link.textContent='افتح معمل المراجعة الصوتية';
 status.appendChild(link);
}
statusMessage('🧪 نفحص وجود مطابقات آلية بين التسجيل العادي والبطيء؛ لم تُعتمد جودة هذه التسجيلات بالاستماع البشري.');
function play(path){
 if(!allowed(path)){statusMessage('رفضنا تشغيل مسار تسجيل غير صالح.');return;}
 if(!player)player=new Audio();
 player.pause();
 try{
  if('speechSynthesis' in window)window.speechSynthesis.cancel();
  player.currentTime=0;
  player.src=base+path;
  player.play().catch(()=>statusMessage('تعذر تشغيل التسجيل من R2؛ استعمل زر نطق المتصفح الموجود في الدرس.'));
 }catch(e){statusMessage('تعذر تشغيل التسجيل؛ استعمل نطق المتصفح الموجود في الدرس.');}
}
function buttons(record){
 const row=document.createElement('span');
 row.className='sd-asr-row';row.dir='rtl';
 for(const option of [{key:'normal',label:'🔊 تجربة التسجيل الأصلي'},{key:'slow',label:'🐢 تجربة التسجيل البطيء'}]){
  const btn=document.createElement('button');
  btn.type='button';btn.textContent=option.label;
  btn.setAttribute('aria-label',option.label+' لعبارة '+record.text+'، ربط مقترح آليًا');
  btn.addEventListener('click',event=>{
   event.preventDefault();event.stopPropagation();
   play(record[option.key]);
  });
  row.append(btn);
 }
 const label=document.createElement('small');
 label.textContent='🧪 تطابق نصّي مقترح آليًا بعد تحليل التسجيلين؛ لم تُراجع جودة النطق بشريًا.';
 row.append(label);
 return row;
}
function sync(){
 if(!ready)return;
 let found=0,seen=0;
 for(const card of panel.querySelectorAll('.academy-photo-card')){
  const word=card.querySelector('.academy-photo-word');
  if(!word)continue;
  seen++;
  const record=index.get(normalize(word.dataset.say||word.textContent));
  if(!record)continue;
  found++;
  if(card.dataset.sdAsrAdded)continue;
  card.dataset.sdAsrAdded='yes';
  card.append(buttons(record));
 }
 for(const target of panel.querySelectorAll('[data-say]:not(.academy-photo-word)')){
  if(target.closest('.academy-photo-card'))continue;
  const record=index.get(normalize(target.dataset.say));
  if(!record)continue;
  if(target.dataset.sdAsrAdded)continue;
  target.dataset.sdAsrAdded='yes';
  target.insertAdjacentElement('afterend',buttons(record));
 }
 statusMessage('🧪 هذا الدرس: '+found+' من '+seen+' بطاقات كلمات لها تسجيلان بمطابقة آلية دقيقة (غير مراجعة بشريًا). استخدم أزرار التسجيل للتجربة أو نطق المتصفح كبديل.');
}
fetch('audio-asr-provisional-links.json',{cache:'no-cache'}).then(res=>{
 if(!res.ok)throw Error('Index unavailable: '+res.status);
 return res.json();
}).then(data=>{
 if(!data||data.schemaVersion!==1||data.status!=='provisional-automated'||!data.languages||!data.languages[lang])throw Error('Unexpected source index');
 const grouped=new Map();
 for(const record of data.languages[lang].records||[]){
  if(!record||typeof record.text!=='string'||!allowed(record.normal)||!allowed(record.slow))continue;
  if(record.slow!==record.normal.replace(/\.mp3$/,'_slow.mp3'))continue;
  if(record.reviewedByHuman!==false)continue;
  const key=normalize(record.text);
  if(!key)continue;
  if(!grouped.has(key))grouped.set(key,[]);
  grouped.get(key).push(record);
 }
 index=new Map([...grouped].filter(([key,rows])=>key&&rows.length===1).map(([key,rows])=>[key,rows[0]]));
 ready=true;
 sync();
 new MutationObserver(sync).observe(panel,{subtree:true,childList:true});
}).catch(()=>statusMessage('فهرس المطابقات الصوتية المقترحة غير متاح الآن؛ احتفظنا بأزرار نطق المتصفح المعتادة.'));
})();
