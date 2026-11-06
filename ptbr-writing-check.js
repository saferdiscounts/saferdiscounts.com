/* Safer Discounts | deterministic recall check for an explicitly demonstrated Brazilian phrase.
   It grades reproduction of the taught target only, NOT language proficiency or valid paraphrases. */
(function(root){
 'use strict';
 function normalize(value){
  return String(value??'').normalize('NFC').toLocaleLowerCase('pt-BR')
   .replace(/[.,!?;:¡¿"“”«»()[\]]/g,' ')
   .replace(/\s+/g,' ').trim();
 }
 function withoutAccents(value){
  return normalize(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').normalize('NFC');
 }
 function compare(answer,model){
  const got=normalize(answer),want=normalize(model);
  if(!want)throw new TypeError('Expected lesson phrase is required');
  if(!got)return {exact:false,issue:'empty',message:'اكتب العبارة من ذاكرتك أولًا، أو اختر كشف النموذج مع احتسابها محاولة غير مكتملة.'};
  if(got===want)return {exact:true,issue:'exact',message:'ممتاز! كتبت عبارة الدرس بدقة؛ تجاهلنا اختلاف الحروف الكبيرة والترقيم فقط.'};
  if(withoutAccents(got)===withoutAccents(want))return {exact:false,issue:'accents',message:'الكلمات قريبة من نموذج الدرس، لكن علامات النطق أو الحروف ذات التشكيل البرتغالي مختلفة. راجع ã وç وé وغيرها.'};
  const sorted=s=>s.split(' ').sort().join(' ');
  if(sorted(got)===sorted(want))return {exact:false,issue:'order',message:'استخدمت كلمات النموذج، لكن ترتيبها مختلف. راجع ترتيب الجملة.'};
  return {exact:false,issue:'different',message:'إجابتك مختلفة عن العبارة المحددة في الدرس. قد توجد صياغات صحيحة أخرى، لكن هذا التمرين لا يصحح المعنى أو القواعد آليًا.'};
 }
 const api=Object.freeze({normalize,withoutAccents,compare});
 root.SDPTBRWritingCheck=api;
 if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
