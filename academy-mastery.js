/* Spaced-review state machine shared across Safer Discounts language foundations.
   This is practice progress, never a CEFR certification or human-reviewed language grading. */
(function(root){
 'use strict';
 function dayKey(d){
  const x=d instanceof Date?d:new Date();
  const y=x.getFullYear(),m=String(x.getMonth()+1).padStart(2,'0'),day=String(x.getDate()).padStart(2,'0');
  return y+'-'+m+'-'+day;
 }
 function validDay(s){return typeof s==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(s)&&!Number.isNaN(Date.parse(s+'T00:00:00Z'))}
 function addDays(day,n){
  if(!validDay(day)||!Number.isInteger(n))throw new TypeError('Invalid calendar date');
  const [y,m,d]=day.split('-').map(Number);
  return new Date(Date.UTC(y,m-1,d+n)).toISOString().slice(0,10);
 }
 function clean(v){
  if(!v||typeof v!=='object'||Array.isArray(v))return {attempts:0,streak:0,score:null,due:null,lastPerfect:null,lastDay:null,missed:[]};
  return {
   attempts:Number.isInteger(v.attempts)&&v.attempts>=0?Math.min(v.attempts,100000):0,
   streak:Number.isInteger(v.streak)&&v.streak>=0?Math.min(v.streak,3):0,
   score:Number.isInteger(v.score)&&v.score>=0&&v.score<=3?v.score:null,
   due:validDay(v.due)?v.due:null,
   lastPerfect:validDay(v.lastPerfect)?v.lastPerfect:null,
   lastDay:validDay(v.lastDay)?v.lastDay:null,
   missed:Array.isArray(v.missed)?[...new Set(v.missed.filter(x=>Number.isInteger(x)&&x>=0&&x<3))]:[]
  };
 }
 function record(old,score,missed,today){
  const date=today||dayKey();
  if(!validDay(date)||!Number.isInteger(score)||score<0||score>3)throw new TypeError('Invalid assessment');
  const next=clean(old),errors=Array.isArray(missed)?missed:[];
  next.attempts++;next.score=score;next.lastDay=date;next.missed=[...new Set(errors.filter(x=>Number.isInteger(x)&&x>=0&&x<3))];
  if(score<3){
   next.streak=0;next.due=addDays(date,1);next.lastPerfect=null;
   return next;
  }
  // Repeating a quiz within the same day cannot manufacture spaced retention.
  if(next.lastPerfect===date)return next;
  // Early extra practice before the scheduled day does not accelerate the review ladder.
  if(next.streak>0&&next.due&&date<next.due)return next;
  next.streak=Math.min(3,next.streak+1);
  next.lastPerfect=date;
  next.due=addDays(date,next.streak===1?1:next.streak===2?7:30);
  return next;
 }
 function state(raw,today){
  const x=clean(raw),date=today||dayKey(),due=Boolean(x.due&&x.due<=date);
  if(!x.attempts)return {label:'ابدأ التدريب',due:false,retained:false,streak:0};
  if(!x.streak)return {label:due?'حان موعد إعادة التدريب':'راجع الأخطاء ثم أعد المحاولة',due,retained:false,streak:0};
  if(x.streak===1)return {label:due?'مراجعة اليوم (بعد يوم)':'المراجعة الأولى مكتملة · التالية '+x.due,due,retained:false,streak:1};
  if(x.streak===2)return {label:due?'مراجعة الثبات بعد أسبوع':'مراجعتان ناجحتان · التالية '+x.due,due,retained:false,streak:2};
  return {label:due?'مراجعة شهرية للحفاظ على التذكر':'اجتاز ثلاث مراجعات متباعدة · التالية '+x.due,due,retained:true,streak:3};
 }
 const api=Object.freeze({dayKey,addDays,clean,record,state});
 root.SDAcademyMastery=api;
 if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
