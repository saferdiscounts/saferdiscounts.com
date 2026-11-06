(function(){
'use strict';
const tag=document.currentScript;
const lang=tag&&tag.dataset&&tag.dataset.language;
if(!['de','fr'].includes(lang))return;
const base='https://audio.saferdiscounts.com/'+(lang==='de'?'german':'french')+'/pronunciation/';
const indexFile='audio-text-index-'+lang+'.json';
const normalize=s=>String(s||'').normalize('NFC').toLocaleLowerCase().replace(/\s+/g,' ').trim();
let entries=new Map(),player=null,ready=false;
const style=document.createElement('style');
style.textContent='.sd-verified-audio{display:flex;gap:5px;flex-wrap:wrap;position:relative;z-index:4;margin-top:9px}.sd-verified-audio button{font-size:12px;font-weight:800;background:#d8f3e2;border:1px solid #5daa7c;border-radius:9px;color:#154e33;padding:5px 7px;cursor:pointer}.sd-verified-audio button:focus-visible{outline:3px solid #056087}.sd-verified-audio small{display:block;font-size:10px;color:#eafdeb;width:100%;text-shadow:0 1px 4px #111}.dialogue-line .sd-verified-audio small{color:#315747;text-shadow:none}';
document.head.appendChild(style);
const status=document.createElement('p');
status.className='muted';status.style.fontSize='12px';status.setAttribute('role','status');status.setAttribute('aria-live','polite');
status.textContent='🔎 جارٍ فحص فهرس التسجيلات المرتبطة بالنصوص؛ النطق الصناعي يظل متاحًا لباقي الكلمات.';
const panel=document.getElementById('lessonContent');
if(panel)panel.insertAdjacentElement('beforebegin',status);
function play(path,phrase){
 if(!/^(basic|advanced)\/[a-z0-9_]+\.mp3$/.test(path))return;
 if(!player)player=new Audio();
 player.pause();player.currentTime=0;player.src=base+path;
 player.play().catch(()=>{status.textContent='تعذر تشغيل التسجيل المطابق: '+phrase+'؛ يمكنك استخدام زر النطق الصناعي.'});
}
function makeButtons(parent,record){
 const row=document.createElement('span');row.className='sd-verified-audio';row.dir='rtl';
 for(const slow of [false,true]){
   const b=document.createElement('button');b.type='button';b.textContent=slow?'🐢 التسجيل البطيء':'🔊 التسجيل الأصلي';
   b.setAttribute('aria-label',(slow?'استمع ببطء إلى ':'استمع إلى ')+record.text);
   b.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();play(slow?record.slow:record.normal,record.text)});
   row.appendChild(b);
 }
 const note=document.createElement('small');note.textContent='مربوط بنص مطابق في الفهرس الأصلي';row.appendChild(note);parent.appendChild(row);
}
function sync(){
 if(!ready||!panel)return;
 const cards=panel.querySelectorAll('table.vocab .academy-photo-card');
 const controls=panel.querySelectorAll('.dialogue-line .target');
 let total=0,matched=0,dialogueMatched=0;
 for(const card of cards){
   const word=card.querySelector('.academy-photo-word');
   const record=word&&entries.get(normalize(word.textContent));
   if(word)total++;
   if(record)matched++;
   if(card.dataset.sdVerifiedAudio)continue;
   card.dataset.sdVerifiedAudio='checked';
   if(record)makeButtons(card,record);
 }
 for(const control of controls){
   const record=entries.get(normalize(control.dataset.say||control.textContent));
   if(record)dialogueMatched++;
   if(control.dataset.sdVerifiedAudio)continue;
   control.dataset.sdVerifiedAudio='checked';
   if(record)makeButtons(control.parentElement,record);
 }
 status.textContent='🎧 هذا الدرس: '+matched+' من '+total+' مفردات لها ربط نصي مباشر بالتسجيل العادي والبطيء'
   +(controls.length?' · الحوارات المطابقة: '+dialogueMatched+' من '+controls.length:'')
   +'. الكلمات الأخرى تستخدم نطق المتصفح. مطابقة النص لا تعني اختبار جودة الصوت أو ضمان تشغيل ملف R2.';
 const link=document.createElement('a');
 link.href='academy-audio-status.html?lang='+lang;
 link.textContent=' مشاهدة تقرير تغطية الصوتيات';
 link.style.marginInlineStart='9px';
 link.style.color='#075b9a';
 link.style.fontWeight='800';
 status.appendChild(link);
}
fetch(indexFile,{cache:'force-cache'}).then(response=>{if(!response.ok)throw new Error('Index HTTP '+response.status);return response.json()}).then(data=>{
 if(!data||data.language!==lang||!Array.isArray(data.records))throw new Error('Invalid index');
 const seen=new Map();for(const row of data.records){
   if(typeof row.text!=='string'||typeof row.normal!=='string'||typeof row.slow!=='string'||!/^(basic|advanced)\/[a-z0-9_]+\.mp3$/.test(row.normal)||!/^(basic|advanced)\/[a-z0-9_]+\.mp3$/.test(row.slow))continue;
   const key=normalize(row.text);
   if(!seen.has(key))seen.set(key,[]);
   seen.get(key).push(row);
 }
 entries=new Map([...seen].filter(([key,items])=>key&&items.length===1).map(([key,items])=>[key,items[0]]));
 ready=true;
 sync();if(panel)new MutationObserver(sync).observe(panel,{childList:true,subtree:true});
}).catch(()=>{status.textContent='لم يُحمّل فهرس الصوت الموثوق؛ جميع أزرار النطق الموجودة تستخدم صوت المتصفح. لن يتم الربط بالتخمين.'});
})();