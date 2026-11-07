/* Brazilian Portuguese audio quality review: local human confirmations, no automatic publishing. */
(function(){
'use strict';
const base=String(window.PTBR_AUDIO_BASE_URL||'').trim();
const el=id=>document.getElementById(id);
const status=el('loadStatus'),rows=el('rows'),counts=el('counts'),audio=el('player'),playing=el('playing');
const filter=el('filter'),search=el('search'),previous=el('previous'),next=el('next'),paging=el('paging');
const storageKey='sd_ptbr_audio_review_local_v1',allowed=/^(basic|advanced)\/[a-z0-9_/-]+\.mp3$/;
let catalogue=[],reviews={},played={},page=0,activePath=null,activeKind=null;
function element(tag,cls,content){
 const result=document.createElement(tag);if(cls)result.className=cls;
 if(content!==undefined&&content!==null)result.textContent=String(content);
 return result;
}
function check(item){
 return Boolean(item&&typeof item.pt==='string'&&item.pt.trim()&&typeof item.gl==='string'&&item.gl.trim()&&allowed.test(item.normal||'')&&allowed.test(item.slow||'')&&item.normal.replace(/\.mp3$/,'_slow.mp3')===item.slow);
}
function reviewFor(item){
 const value=reviews[item.normal];
 return value&&value.normal===item.normal&&value.slow===item.slow&&value.pt===item.pt&&['approved','flagged'].includes(value.status)?value:null;
}
function save(){
 try{localStorage.setItem(storageKey,JSON.stringify(reviews))}catch(e){status.textContent='تعذر حفظ المراجعة على هذا الجهاز. يمكن تصدير التقرير الحالي.'}
}
function recorded(item,kind){
 return Boolean(played[item.normal]&&played[item.normal][kind]);
}
function soundUrl(part){return base+part.split('/').map(encodeURIComponent).join('/')}
function play(item,kind){
 if(!check(item))return;
 const part=item[kind];
 activePath=item.normal;activeKind=kind;
 audio.pause();audio.src=soundUrl(part);audio.load();
 playing.textContent='جارٍ تشغيل النسخة '+(kind==='normal'?'العادية':'البطيئة')+' — '+item.pt;
 audio.play().catch(()=>{playing.textContent='فشل تشغيل '+part+'؛ سجّل السبب لإصلاحه بدل اعتماد التسجيل.'});
}
audio.addEventListener('ended',()=>{
 if(!activePath||!activeKind)return;
 const item=catalogue.find(r=>r.normal===activePath);if(!item)return;
 (played[activePath]??={})[activeKind]=true;
 playing.textContent='اكتمل استماع '+(activeKind==='normal'?'النسخة العادية':'النسخة البطيئة')+' — '+item.pt;
 render();
});
audio.addEventListener('error',()=>{if(audio.getAttribute('src'))playing.textContent='حدث خطأ أثناء تحميل الملف الصوتي. لا يمكن اعتماده قبل إصلاحه.'});
function allFiltered(){
 const q=search.value.trim().toLocaleLowerCase('pt-BR'),type=filter.value;
 return catalogue.filter(item=>{
  const r=reviewFor(item);
  if(type==='pending'&&r||type==='approved'&&r?.status!=='approved'||type==='flagged'&&r?.status!=='flagged'||type==='draftgloss'&&item.glProvenance!=='saferdiscounts-arabic-editorial-draft')return false;
  return !q||[item.pt,item.gl,item.section,item.normal].join(' ').toLocaleLowerCase('pt-BR').includes(q);
 });
}
function button(label,action,cls,disabled){
 const b=element('button',cls||'',label);b.type='button';b.disabled=Boolean(disabled);b.addEventListener('click',action);return b;
}
function makeRow(item){
 const row=element('section','entry'),head=element('div','entry-head');
 const title=element('div'),pt=element('strong','pt',item.pt);pt.lang='pt-BR';pt.dir='ltr';title.append(pt);
 title.append(element('div','gl',item.gl));
 if(item.glProvenance==='saferdiscounts-arabic-editorial-draft')title.append(element('small','gl-draft','✍ معنى عربي مستكمل من Safer Discounts — مسودة تحتاج تدقيقًا لغويًا'));
 title.append(element('small','',item.level+' · '+(item.section||'قسم غير مسمى')));
 head.append(title);
 const review=reviewFor(item),tag=element('span',review?.status==='approved'?'approved':review?.status==='flagged'?'flagged':'unreviewed',review?.status==='approved'?'مراجعة مقبولة محليًا':review?.status==='flagged'?'مشكلة موثقة':'غير مراجع');
 head.append(tag);row.append(head);
 const buttons=element('div','row-actions');
 buttons.append(button('▶ العادي',()=>play(item,'normal'),'listen'),button('🐢 البطيء',()=>play(item,'slow'),'listen'));
 buttons.append(element('small','playstate',(recorded(item,'normal')?'✓ عادي':'○ عادي')+' · '+(recorded(item,'slow')?'✓ بطيء':'○ بطيء')));
 row.append(buttons);
 const cert=element('label','confirm');
 const checkbox=document.createElement('input');checkbox.type='checkbox';checkbox.setAttribute('aria-label','أؤكد صحة النص والنطق بعد الاستماع');
 cert.append(checkbox,element('span','', 'أؤكد أنني استمعت للنسختين وتحققت من صحة الكلمات والنطق باللغة البرازيلية.'));
 row.append(cert);
 const options=element('div','row-actions');
 options.append(button('اعتماد بعد المراجعة',()=>{
  if(!checkbox.checked||!recorded(item,'normal')||!recorded(item,'slow'))return;
  reviews[item.normal]={normal:item.normal,slow:item.slow,pt:item.pt,status:'approved',reviewedAt:new Date().toISOString(),note:'Reviewed both normal and slow by local browser operator'};
  save();render();
 },'approve',!recorded(item,'normal')||!recorded(item,'slow')));
 const reason=document.createElement('select');
 for(const [value,name] of [['mismatch','التسجيل لا يطابق النص'],['accent','النطق أو اللكنة يحتاج مراجعة'],['playback','الملف لا يعمل'],['quality','جودة التسجيل ضعيفة'],['gloss','الترجمة العربية ناقصة']]){
  const opt=document.createElement('option');opt.value=value;opt.textContent=name;reason.append(opt);
 }
 reason.setAttribute('aria-label','سبب الحاجة لإصلاح التسجيل');options.append(reason);
 options.append(button('سجّل مشكلة',()=>{
  reviews[item.normal]={normal:item.normal,slow:item.slow,pt:item.pt,status:'flagged',reason:reason.value,reviewedAt:new Date().toISOString()};
  save();render();
 },'flag'));
 if(review)options.append(button('إلغاء الحكم المحلي',()=>{delete reviews[item.normal];save();render()},'undo'));
 row.append(options);
 if(review?.status==='flagged')row.append(element('small','flagged','سبب الإصلاح: '+review.reason));
 return row;
}
function render(){
 const valid=catalogue.filter(check),approved=valid.filter(x=>reviewFor(x)?.status==='approved').length,flagged=valid.filter(x=>reviewFor(x)?.status==='flagged').length;
 counts.textContent='المصدر: '+valid.length+' زوجًا صوتيًا · النص البرتغالي والمعنى العربي متاحان لكل زوج · 234 ترجمة مستكملة بانتظار تدقيق متخصص · مراجعات مقبولة محليًا: '+approved+' · مشكلات موثقة: '+flagged+' · لم يُراجع: '+(valid.length-approved-flagged)+'. هذه مراجعة محلية وليست اعتمادًا آليًا للمنهج.';
 const selected=allFiltered(),pages=Math.max(1,Math.ceil(selected.length/15));
 page=Math.max(0,Math.min(page,pages-1));
 paging.textContent='صفحة '+(page+1)+' من '+pages+' · '+selected.length+' نتيجة';
 previous.disabled=page===0;next.disabled=page>=pages-1;
 rows.replaceChildren();
 for(const item of selected.slice(page*15,page*15+15))rows.append(makeRow(item));
 if(!selected.length)rows.append(element('p','empty','لا توجد نتائج بهذا البحث أو الفلتر.'));
}
previous.addEventListener('click',()=>{page--;render();rows.scrollIntoView({block:'start',behavior:'smooth'})});
next.addEventListener('click',()=>{page++;render();rows.scrollIntoView({block:'start',behavior:'smooth'})});
filter.addEventListener('change',()=>{page=0;render()});
search.addEventListener('input',()=>{page=0;render()});
el('export').addEventListener('click',()=>{
 const records=catalogue.map(reviewFor).filter(Boolean);
 if(!records.length){status.textContent='لا توجد مراجعات محلية لتصديرها.';return}
 const report={schemaVersion:1,source:'Safer Discounts Brazilian R2 manifest index; locally reviewed',sourceFile:'audio-text-index-ptbr.json',exportedAt:new Date().toISOString(),language:'pt-BR',notPublished:true,notIndependentlyValidated:true,records};
 const blob=new Blob([JSON.stringify(report,null,2)+'\n'],{type:'application/json;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');
 a.href=url;a.download='ptbr-audio-human-review.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
 status.textContent='تم تجهيز ملف التصدير. لم يُرسل إلى GitHub أو R2؛ الاعتماد يتطلب تدقيق التقرير قبل نشره.';
});
try{const j=JSON.parse(localStorage.getItem(storageKey)||'{}');if(j&&typeof j==='object'&&!Array.isArray(j))reviews=j}catch(e){}
try{if(new URL(base).protocol!=='https:')throw Error('HTTPS expected')}catch(e){status.textContent='رابط R2 ليس HTTPS صالحًا. تم تعطيل الاستماع.';exitNoFetch();return}
function exitNoFetch(){previous.disabled=next.disabled=true;rows.replaceChildren(element('p','empty','تحقق من ptbr-audio-config.js'))}
fetch('audio-text-index-ptbr.json',{cache:'no-cache'}).then(r=>{if(!r.ok)throw Error('HTTP '+r.status);return r.json()}).then(data=>{
 if(data.schemaVersion!==1||data.locale!=='pt-BR'||!Array.isArray(data.records)||data.records.length!==511||data.records.some(x=>!check(x)))throw Error('Invalid source manifest');
 catalogue=data.records;
 if(new Set(catalogue.map(x=>x.normal)).size!==catalogue.length)throw Error('Duplicate object paths');
 status.textContent='الفهرس النصي مطابق لجرد R2 المحفوظ في GitHub. الاستماع للملفات والتحقق من صحة الأصوات ما زال عمل مراجعة مستقلًا.';
 render();
}).catch(e=>{status.textContent='تعذر فتح فهرس مصدر التسجيلات: '+e.message;exitNoFetch()});
})();