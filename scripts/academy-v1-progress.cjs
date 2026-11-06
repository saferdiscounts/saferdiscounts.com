'use strict';
// Run: node scripts/academy-v1-progress.cjs
// Stable minimum-scope count: 12 pedagogical units per CEFR level A1-B2 in each of 8 academies.
// Foundation, travel and supplementary labs are not silently counted toward CEFR-specific targets.
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const read=file=>fs.readFileSync(path.join(root,file),'utf8');
const levels=['A1','A2','B1','B2'];
const targets=Object.fromEntries(levels.map(l=>[l,12]));
const sources={ptbr:'ptbr-academy.html',en:'english-academy.html',it:'italian-academy.html',es:'spanish-academy.html',fr:'french-academy.html',de:'german-academy.html',ru:'russian-academy.html',pt:'portuguese-academy.html'};
function array(src,marker){
 const at=src.indexOf(marker);if(at<0)throw Error('Missing data marker '+marker);
 const begin=src.indexOf('[',at+marker.length);if(begin<0)throw Error('Missing JSON array');
 let depth=0,quoted=false,escaped=false;
 for(let i=begin;i<src.length;i++){
  const c=src[i];
  if(quoted){if(escaped)escaped=false;else if(c==='\\')escaped=true;else if(c==='"')quoted=false;continue}
  if(c==='"')quoted=true;else if(c==='[')depth++;
  else if(c===']'&&!--depth)return JSON.parse(src.slice(begin,i+1));
 }
 throw Error('Unclosed JSON array');
}
function englishCounts(html){
 const start=html.indexOf('const groups='),end=html.indexOf(';',start);
 if(start<0||end<start)throw Error('English level groups not found');
 const content=html.slice(start,end);
 const matches=[...content.matchAll(/name:'([^']+)',start:(\d+),end:(\d+)/g)];
 if(matches.length<4)throw Error('Expected four English level groups');
 const counts={A1:0,A2:0,B1:0,B2:0};
 for(const [,name,a,b] of matches){const level=name.match(/^A1|^A2|^B1|^B2/)?.[0];if(!level)throw Error('Unrecognized level group '+name);counts[level]+=Number(b)-Number(a)+1}
 return counts;
}
function countFor(key,html){
 const counts={A1:0,A2:0,B1:0,B2:0};
 if(key==='en')return {counts:englishCounts(html),lessons:array(html,'const chapters=').length};
 const arr=array(html,'const lessons=');
 for(const l of arr){const level=l.level||String(l.track||'').toUpperCase();if(Object.prototype.hasOwnProperty.call(counts,level))counts[level]++}
 return {counts,lessons:arr.length};
}
function report(){
 const perLanguage={},audio=JSON.parse(read('academy-audio-audit.json'));
 let covered=0,grandTotal=0,lessons=0,missing=0;
 for(const [key,file] of Object.entries(sources)){
  const {counts,lessons:n}=countFor(key,read(file));lessons+=n;
  const valid={},gap={},extra={};
  for(const level of levels){valid[level]=Math.min(targets[level],counts[level]);gap[level]=targets[level]-valid[level];extra[level]=Math.max(0,counts[level]-targets[level]);covered+=valid[level];missing+=gap[level];grandTotal+=targets[level]}
  perLanguage[key]={source:file,existingLessons:n,cefrCounts:counts,covered:valid,missing:gap,aboveMinimum:extra,completionPercent:Number((100*Object.values(valid).reduce((a,b)=>a+b,0)/48).toFixed(1))};
 }
 const paired=Object.values(audio.storageAudit.languages).reduce((a,x)=>a+x.paired,0);
 const result={name:'Safer Discounts Academy V1 structural baseline',scope:'8 languages x A1-B2 x 12 lessons; separate foundation/travel/context labs excluded',targetLessons:grandTotal,coveredSlots:covered,missingSlots:missing,structuralCoveragePct:Number((100*covered/grandTotal).toFixed(1)),existingMainLessons:lessons,supplementaryFoundationUnits:48,supplementaryContextScenarios:36,pairedR2AudioObjects:paired,audioPairsNotEqualVerifiedCoursePlayback:true,byLanguage:perLanguage,needsHumanAudioValidation:true,needsWholeCatalogImageAudit:true};
 return result;
}
if(require.main===module)console.log(JSON.stringify(report(),null,2));
module.exports={report};
