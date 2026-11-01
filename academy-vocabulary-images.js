(function(){
  'use strict';
  var photos={
    coffee:{url:'https://images.unsplash.com/photo-1530632308350-e96d55f00e4a?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/white-ceramic-cup-on-saucer-on-top-of-wooden-table-UEIkj1N2LlE'},
    bread:{url:'https://images.unsplash.com/photo-1722606509001-6cdbc99bdf33?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/a-kitchen-counter-with-a-loaf-of-bread-on-it-7hVnFnt_u9U'},
    apple:{url:'https://images.unsplash.com/photo-1565794104797-bdabb8e04ba6?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/a-close-up-of-a-red-apple-with-water-drops-jfCQFqhHhEw'},
    house:{url:'https://images.unsplash.com/photo-1766603636700-e9d80473f40f?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/modern-house-with-large-windows-and-a-green-lawn-d2hYqpR0YS0'},
    airplane:{url:'https://images.unsplash.com/photo-1668397583449-d2950da0836c?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/a-large-white-airplane-at-an-airport-VfVPLOJhnCs'},
    bus:{url:'https://images.unsplash.com/photo-1677843728721-7737722cff34?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/a-yellow-bus-driving-down-a-street-next-to-a-tall-building-RaUSm-ByPek'},
    beach:{url:'https://images.unsplash.com/photo-1730944527343-74e3e09f088b?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/id/foto/pohon-kelapa-miring-di-pantai-pada-siang-hari-SooGPkdf8z0'},
    meal:{url:'https://images.unsplash.com/photo-1681821674991-03c40fba40e9?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/a-white-plate-topped-with-meat-and-vegetables-YN3uMADunyw'},
    city:{url:'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/city-background'},
    cat:{url:'https://images.unsplash.com/photo-1745363562836-8331bedbe542?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/a-gray-tabby-cat-sits-and-stares--XlriOSKgGk'},
    dog:{url:'https://images.unsplash.com/photo-1739391262319-f3659f52bdfa?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/id/foto/close-up-anjing-dengan-latar-belakang-hitam-DSzxLK8RapU'},
    books:{url:'https://images.unsplash.com/photo-1629470937900-f9ef0f2a8086?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'}
  };
  var rules=[
    [/قهوة|كافيه|مقهى/,'coffee'],[/خبز|عيش|مخبز/,'bread'],[/تفاح|تفاحة|فاكهة/,'apple'],
    [/بيت|منزل|سكن|غرفة|باب|مفتاح|منزل/,'house'],[/طائرة|طيران|مطار|رحلة|طيارة/,'airplane'],
    [/حافلة|أتوبيس|باص|محطة حافلات/,'bus'],[/بحر|محيط|شاطئ|شاطىء/,'beach'],
    [/طعام|أكل|وجبة|مطعم|غداء|عشاء|لحم/,'meal'],[/مدينة|شارع|طريق|مباني/,'city'],
    [/قطة|قط|قطه/,'cat'],[/كلب|جرو/,'dog'],[/كتاب|كتب|قراءة|دراسة|تعليم|مدرسة|جامعة/,'books']
  ];
  function esc(v){return String(v==null?'':v).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
  function find(meaning){
    var s=String(meaning||'');
    for(var i=0;i<rules.length;i++)if(rules[i][0].test(s))return photos[rules[i][1]];
    return null;
  }
  function card(word,meaning,lang,kind){
    var p=find(meaning),style=p?'background-image:linear-gradient(180deg,rgba(4,20,34,.03),rgba(4,20,34,.76)),url(&quot;'+p.url+'&quot;)':'';
    var safeWord=esc(word),safeMeaning=esc(meaning),safeLang=esc(lang||'');
    var speech=kind==='ptbr'?'<span class="academy-photo-word pt-speak" role="button" tabindex="0" lang="'+safeLang+'" data-say="'+safeWord+'">'+safeWord+'</span>':'<button type="button" class="academy-photo-word target" lang="'+safeLang+'" data-say="'+safeWord+'">'+safeWord+'</button>';
    var credit=p?'<a class="academy-photo-credit" href="'+esc(p.source)+'" target="_blank" rel="noopener" aria-label="مصدر الصورة Unsplash">Unsplash</a>':'<span class="academy-photo-fallback">مفردة تعليمية</span>';
    return '<span class="academy-photo-card '+(p?'has-photo':'no-photo')+'" '+(p?'style="'+style+'"':'')+'>'+speech+'<small>'+safeMeaning+'</small>'+credit+'</span>';
  }
  var css='.academy-photo-card{position:relative;display:flex;min-height:112px;width:100%;max-width:290px;overflow:hidden;flex-direction:column;justify-content:flex-end;align-items:flex-start;gap:4px;padding:12px;border-radius:13px;background-color:#e8f0f5;background-size:cover;background-position:center;border:1px solid rgba(4,49,82,.12);isolation:isolate}.academy-photo-card:before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(4,20,34,.02),rgba(4,20,34,.76));z-index:-1}.academy-photo-card.no-photo{justify-content:center;background:linear-gradient(135deg,#edf3f8,#fff3e7)}.academy-photo-word{max-width:100%;padding:0;border:0;background:transparent;color:#fff;text-align:start;text-shadow:0 1px 5px #000;font-family:inherit;font-size:16px;font-weight:800;line-height:1.35;cursor:pointer}.academy-photo-card small{color:#fff;font-weight:700;text-shadow:0 1px 4px #000;font-size:12px}.academy-photo-credit{position:absolute;top:6px;inset-inline-end:7px;color:#fff;background:#102b3db8;border-radius:5px;padding:2px 5px;font-size:9px;text-decoration:none}.academy-photo-card.no-photo:before{display:none}.academy-photo-card.no-photo .academy-photo-word,.academy-photo-card.no-photo small{color:#17364d;text-shadow:none}.academy-photo-fallback{color:#5d7180;font-size:10px}.pt .academy-photo-card{max-width:100%}.words .academy-photo-card{max-width:100%;min-height:132px}.words .academy-photo-word{font-size:20px}';
  if(typeof document!=='undefined'){var st=document.createElement('style');st.id='sd-academy-photo-styles';st.textContent=css;document.head.appendChild(st)}
  window.SDAcademyImages={resolve:find,card:card};
})();