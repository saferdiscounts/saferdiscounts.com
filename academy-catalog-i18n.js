(function(){
'use strict';
var COPY={"ar":{"tag":"الأكاديميات الثماني · شرح عربي","title":"اختار اللغة اللي عايز تتعلمها","intro":"كورسات متدرجة للناطقين بالعربية: حروف ونطق وقواعد ومفردات وحوارات واختبارات. دليل السياحة مستقل عن الدراسة الكاملة.","level":"درس","arabic":"📚 كورسات كاملة بشرح عربي — متاحة دائمًا","arabicInfo":"حتى لو غيّرت لغة عرض الموقع، المسار التعليمي للناطقين بالعربية موجود هنا لكل لغة.","cta":"ابدأ الكورس بالعربية","note":"الشرح التفصيلي حاليًا بالعربية","br":"75 درس أكاديمية + 15 درس سفر مستقل"},"en":{"tag":"EIGHT LANGUAGE ACADEMIES","title":"Choose a language to learn","intro":"Explore structured lessons, pronunciation, grammar and practice. Full course explanations are currently in Arabic; multilingual starter phrases are available separately.","level":"lessons","arabic":"📚 Learn all eight languages in Arabic — always available","arabicInfo":"The complete Arabic-guided learning routes stay visible even when you change the website language.","cta":"Arabic-guided course","note":"Full lessons are taught in Arabic","br":"75 academy lessons + 15 separate travel lessons"},"de":{"tag":"ACHT SPRACHAKADEMIEN","title":"Wähle deine Lernsprache","intro":"Entdecke Lektionen, Aussprache, Grammatik und Übungen. Vollständige Kurse werden derzeit auf Arabisch erklärt. Ein mehrsprachiger Einstieg ist separat verfügbar.","level":"Lektionen","arabic":"📚 Alle acht Kurse auf Arabisch — immer verfügbar","arabicInfo":"Die vollständigen, arabischsprachigen Lernwege bleiben unabhängig von der Website-Sprache sichtbar.","cta":"Arabischsprachiger Kurs","note":"Die vollständigen Lektionen sind auf Arabisch","br":"75 Akademie-Lektionen + 15 separate Reise-Lektionen"},"ru":{"tag":"ВОСЕМЬ ЯЗЫКОВЫХ АКАДЕМИЙ","title":"Выберите язык для изучения","intro":"Уроки с произношением, грамматикой и практикой. Полные курсы пока объясняются по-арабски; отдельно доступен многоязычный вводный курс.","level":"уроков","arabic":"📚 Все восемь курсов с объяснениями на арабском","arabicInfo":"Полные учебные маршруты на арабском всегда доступны, даже если язык сайта другой.","cta":"Курс на арабском","note":"Полные уроки преподаются на арабском","br":"75 уроков академии + 15 отдельных уроков для поездки"},"it":{"tag":"OTTO ACCADEMIE LINGUISTICHE","title":"Scegli la lingua che vuoi imparare","intro":"Lezioni graduate, pronuncia, grammatica e pratica. I corsi completi sono spiegati in arabo; è disponibile un percorso introduttivo multilingue.","level":"lezioni","arabic":"📚 Otto corsi spiegati in arabo, sempre accessibili","arabicInfo":"I percorsi completi per chi parla arabo restano disponibili in qualunque lingua del sito.","cta":"Corso in arabo","note":"Lezioni complete spiegate in arabo","br":"75 lezioni accademiche + 15 di viaggio separate"},"fr":{"tag":"HUIT ACADÉMIES DE LANGUES","title":"Choisissez la langue à apprendre","intro":"Leçons progressives, prononciation, grammaire et exercices. Les cours complets sont expliqués en arabe ; une initiation multilingue est proposée séparément.","level":"leçons","arabic":"📚 Huit cours expliqués en arabe, toujours accessibles","arabicInfo":"Les parcours complets pour arabophones restent accessibles quelle que soit la langue d'affichage.","cta":"Cours en arabe","note":"Les cours complets sont expliqués en arabe","br":"75 leçons de cours + 15 leçons de voyage distinctes"},"pt":{"tag":"OITO ACADEMIAS DE LÍNGUAS","title":"Escolha a língua que quer aprender","intro":"Aulas progressivas, pronúncia, gramática e exercícios. Os cursos completos têm explicações em árabe; há também uma introdução multilingue.","level":"aulas","arabic":"📚 Oito cursos com explicações em árabe, sempre disponíveis","arabicInfo":"Os percursos completos para falantes de árabe permanecem disponíveis em qualquer idioma do site.","cta":"Curso em árabe","note":"Aulas completas explicadas em árabe","br":"75 aulas académicas + 15 de viagem em separado"},"ptbr":{"tag":"OITO ACADEMIAS DE IDIOMAS","title":"Escolha o idioma que quer aprender","intro":"Aulas progressivas, pronúncia, gramática e prática. Os cursos completos são explicados em árabe; há uma introdução multilíngue separada.","level":"aulas","arabic":"📚 Oito cursos explicados em árabe, sempre disponíveis","arabicInfo":"Os percursos completos para falantes de árabe continuam disponíveis em qualquer idioma do site.","cta":"Curso em árabe","note":"Aulas completas explicadas em árabe","br":"75 aulas na academia + 15 aulas de viagem separadas"},"es":{"tag":"OCHO ACADEMIAS DE IDIOMAS","title":"Elige el idioma que quieres aprender","intro":"Cursos progresivos, pronunciación, gramática y práctica. Los cursos completos se explican en árabe; existe una introducción multilingüe aparte.","level":"lecciones","arabic":"📚 Ocho cursos explicados en árabe, siempre disponibles","arabicInfo":"Los recorridos completos para arabófonos siguen accesibles con cualquier idioma del sitio.","cta":"Curso en árabe","note":"Cursos completos explicados en árabe","br":"75 lecciones de academia + 15 de viaje independientes"}};
var NAMES={"ar":["البرتغالية البرازيلية","الإنجليزية","الإيطالية","الإسبانية","الفرنسية","الألمانية","الروسية","البرتغالية الأوروبية"],"en":["Brazilian Portuguese","English","Italian","Spanish","French","German","Russian","European Portuguese"],"de":["Brasilianisches Portugiesisch","Englisch","Italienisch","Spanisch","Französisch","Deutsch","Russisch","Europäisches Portugiesisch"],"ru":["Бразильский португальский","Английский","Итальянский","Испанский","Французский","Немецкий","Русский","Европейский португальский"],"it":["Portoghese brasiliano","Inglese","Italiano","Spagnolo","Francese","Tedesco","Russo","Portoghese europeo"],"fr":["Portugais brésilien","Anglais","Italien","Espagnol","Français","Allemand","Russe","Portugais européen"],"pt":["Português brasileiro","Inglês","Italiano","Espanhol","Francês","Alemão","Russo","Português europeu"],"ptbr":["Português brasileiro","Inglês","Italiano","Espanhol","Francês","Alemão","Russo","Português europeu"],"es":["Portugués brasileño","Inglés","Italiano","Español","Francés","Alemán","Ruso","Portugués europeo"]};
var IDS=["ptbr","en","it","es","fr","de","ru","pt"];
var PATHS=["ptbr-academy.html","english-academy.html","italian-academy.html","spanish-academy.html","french-academy.html","german-academy.html","russian-academy.html","portuguese-academy.html"];
var LESSONS=[75,40,36,36,48,48,48,48];
function getLocale(lang){return COPY[lang]?lang:'en'}
function byIdHref(h){return PATHS.indexOf(h)}
var GUIDE_PATHS=['guide-portuguese-brazilian.html','guide-english.html','guide-italian.html','guide-spanish.html','guide-french.html','guide-german.html','russian-academy.html#russian-review','guide-portuguese.html'];
var LEVELS_AR=['من الصفر إلى C2 · دليل سفر منفصل','من الصفر · أربع مراحل تعليمية','A1 إلى B1','A1 إلى B1','A1 إلى B2','A1 إلى B2','A1 إلى B2','A1 إلى B2'];
function makeArabicLinks(){
  return '<nav class="sd-arabic-course-links" aria-label="مسارات تعليم اللغات بالعربية">'+PATHS.map(function(path,i){
    var guide=GUIDE_PATHS[i]?'<a class="sd-arabic-guide-link" href="'+GUIDE_PATHS[i]+'">📖 مرجع ومراجعة</a>':'';
    return '<div class="sd-arabic-course"><strong>'+NAMES.ar[i]+'</strong><small>'+LEVELS_AR[i]+' · '+(i===0?'75 درسًا أكاديميًا':LESSONS[i]+' درسًا')+'</small><div><a href="'+path+'">ابدأ الدروس ←</a>'+guide+'</div></div>';
  }).join('')+'</nav>';
}
function ensureArabicAccess(parent){
  if(!parent)return;
  var marker=parent.parentNode&&parent.parentNode.querySelector('.sd-always-arabic');
  if(marker)return;
  var node=document.createElement('aside');
  node.className='sd-always-arabic';node.id='arabic-academies';node.lang='ar';node.dir='rtl';
  node.innerHTML='<h3>🇪🇬 مسار التعلم الكامل للناطقين بالعربية — متاح دائمًا</h3><p>ابدأ بالدروس من الصفر، تعلّم الحروف والنطق والقواعد، ثم استعمل المفردات في حوارات واختبارات. المراجع الإضافية اختيارية وليست شرطًا لبدء الكورس. المسار العربي يظل موجودًا عند تغيير لغة الموقع.</p>'+makeArabicLinks();
  parent.insertAdjacentElement('afterend',node);
  if(window.location&&window.location.hash==='#arabic-academies'&&window.requestAnimationFrame){window.requestAnimationFrame(function(){node.scrollIntoView({block:'start'})})}
}
function render(lang){
  var l=getLocale(lang),t=COPY[l],labels=NAMES[l];
  var home=document.getElementById('academy-all-languages');
  if(home){
    var head=home.querySelector('.academy-all-languages-head');
    if(head){
      var tag=head.querySelector('.tag'),h=head.querySelector('h3'),p=head.querySelector('p');
      if(tag)tag.textContent=t.tag;
      if(h)h.textContent=t.title;
      if(p)p.textContent=t.intro;
    }
    home.querySelectorAll('.academy-language-card').forEach(function(card){
      var href=card.getAttribute('href'),i=byIdHref(href);if(i<0)return;
      var title=card.querySelector('.academy-language-copy strong'),desc=card.querySelector('.academy-language-copy small'),overlay=card.querySelector('.academy-language-photo>span');
      if(title)title.textContent=labels[i];
      if(desc)desc.textContent=(i===0?t.br:LESSONS[i]+' '+t.level)+' · '+t.note;
      if(overlay)overlay.textContent=labels[i];
      card.setAttribute('aria-label',labels[i]+' — '+t.cta);
    });
    ensureArabicAccess(home);
  }
  var acad=document.querySelector('section.academy-grid');
  if(acad){
    var heading=acad.querySelector('.pathways-head');
    if(heading){
      var label=heading.querySelector('.tag'),title=heading.querySelector('h2'),p=heading.querySelector('p');
      if(label)label.textContent=t.tag;
      if(title)title.textContent=t.title;
      if(p)p.textContent=t.intro;
    }
    acad.querySelectorAll('article.pathway-card').forEach(function(card){
      var link=card.querySelector('a.path-btn'),i=link?byIdHref(link.getAttribute('href')):-1;
      if(i<0)return;
      var name=card.querySelector('h3'),desc=card.querySelector('p'),imageLabel=card.querySelector('.academy-culture-photo span');
      if(name)name.textContent=labels[i];
      if(desc)desc.textContent=(i===0?t.br:LESSONS[i]+' '+t.level)+' · '+t.note;
      if(imageLabel)imageLabel.textContent=labels[i];
      if(link)link.textContent=t.cta+' ←';
    });
    ensureArabicAccess(acad);
  }
}
var css=".sd-always-arabic{max-width:1120px;width:calc(100% - 32px);margin:20px auto 32px;padding:18px;border-radius:18px;border:1px solid #b9d8e9;background:#edf7fd;color:#153951;box-shadow:0 8px 20px #0b35540c;text-align:right;scroll-margin-top:100px}.sd-always-arabic h3{font-size:19px;margin:0 0 7px;font-weight:900;color:#06365b}.sd-always-arabic p{font-size:13px;margin:0 0 12px;line-height:1.8}.sd-arabic-course-links{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:11px}.sd-arabic-course{min-width:0;padding:14px;border:1px solid #bfd9e8;background:#fff;border-radius:13px}.sd-arabic-course strong,.sd-arabic-course small{display:block}.sd-arabic-course strong{font-size:14px;color:#0b3554}.sd-arabic-course small{font-size:11px;color:#5b7380;margin:4px 0 8px}.sd-arabic-course>div{display:flex;flex-wrap:wrap;gap:7px}.sd-arabic-course a{display:inline-block;padding:7px 9px;background:#edf7fd;border:1px solid #b7d3e4;border-radius:8px;color:#075b9a;font-weight:800;font-size:12px;text-decoration:none}.sd-arabic-course a:hover,.sd-arabic-course a:focus-visible{background:#075b9a;color:white}.sd-arabic-course .sd-arabic-guide-link{background:#fff8ef;color:#96500d;border-color:#edcda9}@media(max-width:850px){.sd-arabic-course-links{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:450px){.sd-arabic-course-links{grid-template-columns:1fr}}";
if(typeof document!=='undefined'&&!document.getElementById('sd-catalog-style')){var style=document.createElement('style');style.id='sd-catalog-style';style.textContent=css;document.head.appendChild(style)}
window.SDAcademyCatalog={render:render,locales:Object.keys(COPY),courseCount:PATHS.length};
})();