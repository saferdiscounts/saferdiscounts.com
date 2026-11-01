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
    doctor:{url:'https://images.unsplash.com/photo-1631558554184-319c88f4f8a4?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/a-doctor-listening-to-a-patient-with-a-stethoscope-0brH8nlXv0M'},
    cat:{url:'https://images.unsplash.com/photo-1745363562836-8331bedbe542?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/a-gray-tabby-cat-sits-and-stares--XlriOSKgGk'},
    dog:{url:'https://images.unsplash.com/photo-1739391262319-f3659f52bdfa?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/id/foto/close-up-anjing-dengan-latar-belakang-hitam-DSzxLK8RapU'},
    books:{url:'https://images.unsplash.com/photo-1629470937900-f9ef0f2a8086?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    water:{url:'https://images.unsplash.com/photo-1669139470813-827cbcf54b20?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/a-hand-holding-a-glass-of-water-MUOhSYEqbHo'},
    tea:{url:'https://images.unsplash.com/photo-1564729867715-9b78b10a790e?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/white-teacup-wOcezLBGwXU'},
    juice:{url:'https://images.unsplash.com/photo-1689066117649-0ca9762fc92c?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/a-glass-of-orange-juice-on-a-wooden-table-tGrudeNNGSE'},
    money:{url:'https://images.unsplash.com/photo-1733897898092-de56f2aad91f?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/a-person-is-holding-a-wallet-with-money-in-it-w6tt6bFpKMA'},
    phone:{url:'https://images.unsplash.com/photo-1712002641088-9d76f9080889?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/a-person-holding-a-cell-phone-in-their-hand-hWSNT_Pp4x4'},
    taxi:{url:'https://images.unsplash.com/photo-1762059982652-e24181bf556f?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/yellow-and-black-taxi-on-a-city-street-cXyamRFf650'},
    luggage:{url:'https://images.unsplash.com/photo-1770010314050-c88979e98e1c?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/people-with-luggage-in-a-modern-airport-terminal-YxuI5Gax5JU'},
    train:{url:'https://images.unsplash.com/photo-1667459564328-97ff35486540?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/a-train-at-a-train-station-SIHSpP9j5sk'},
    egg:{url:'https://images.unsplash.com/photo-1708769467671-39a739d24f8f?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/a-bowl-filled-with-eggs-sitting-on-top-of-a-table-eSS0GDqJhsw'},
    shoes:{url:'https://images.unsplash.com/photo-1557461761-c7c2b7a5fa97?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/unpaired-black-and-white-nike-sneaker-on-road-EpmJBf-kQRE'},
    writing:{url:'https://images.unsplash.com/photo-1583162692081-64c75353a270?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/person-holding-black-pen-writing-on-white-notebook-N2ToUbKBsUw'},
    family:{url:'https://images.unsplash.com/photo-1577897113176-6888367369bf?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/portrait-photograph-of-family-of-three-_P6JdN3eNE0'},
    peanuts:{url:'https://images.unsplash.com/photo-1575759474091-bab3c631c632?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/close-up-photography-of-peanuts-in-clear-glass-bowl-0YmDKymiRv8'},
    milk:{url:'https://images.unsplash.com/photo-1567011345445-fd175f248019?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/a-glass-of-milk-sitting-on-top-of-a-white-table-KsIfRQkR5vM'},
    lemon:{url:'https://images.unsplash.com/photo-1534531173927-aeb928d54385?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/closeup-photo-of-yellow-lemon-s05XKB6jK2c'},
    heart:{url:'https://images.unsplash.com/photo-1743767587687-9ebaac2b55e3?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/three-anatomical-models-of-human-hearts-are-shown-guINnH1Jwl8'},
    clock:{url:'https://images.unsplash.com/photo-1624969862293-b749659ccc4e?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/white-and-pink-analog-alarm-clock-jOeh3Lv88xA'},
    directions:{url:'https://images.unsplash.com/photo-1625859199540-35df63b224f3?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/white-and-black-street-sign-p3FHp5mqW5o'},
    ambulance:{url:'https://images.unsplash.com/photo-1742016102687-46ee5f824f49?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/an-ambulance-drives-down-a-busy-city-street-Vdp9VNnwzZs'},
    clothing:{url:'https://images.unsplash.com/photo-1767968037382-8eb9c564339f?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/clothes-hanging-on-a-rack-in-a-boutique-pt3EBzQcxP0'}
  };
  var rules=[
    [/قهوة|كافيه|مقهى|إسبريسو|لاتيه/,'coffee'],[/شاي|كوب شاي|فنجان شاي/,'tea'],[/ماء|ميه|مياه|عطش|زجاجة ماء|ازازة مياه/,'water'],[/عصير|برتقال|ليمونادة|مشروب فاكهة/,'juice'],
    [/نقود|فلوس|مال|نقود كاش|كاش|نقد|محفظة|سعر|ثمن|بكام|رخيص|غالي|دفع|يدفع|شراء|بيع|الحساب|إيصال|فاتورة|باقي الحساب/,'money'],[/هاتف|تليفون|موبايل|جوال|اتصال|مكالمة|رسالة نصية/,'phone'],
    [/خبز|عيش|مخبز|رغيف|توست/,'bread'],[/بيض|بيضة|بيضه/,'egg'],[/حذاء|جزمة|أحذية|كوتشي|حذاء رياضي|حذاء رسمي/,'shoes'],[/قلم|كتابة|يكتب|دفتر|كراسة|ورقة|مذكرات/,'writing'],[/تفاح|تفاحة/,'apple'],
    [/بيت|منزل|سكن|غرفة|باب|مفتاح|فندق|شقة|مطبخ|حمام|مرحاض|دورة المياه|غرفتك|غرفتي|يستيقظ|أستيقظ/,'house'],[/طائرة|طيران|مطار|رحلة|طيارة|إقلاع|هبوط/,'airplane'],
    [/سيارة|عربية|تاكسي|كاب|سائق|أوبر/,'taxi'],[/حقيبة سفر|شنطة|أمتعة|حقائب|أمتعة السفر|مسافر|مسافرة/,'luggage'],[/قطار|مترو|محطة|سكة حديد|مواصلات|نقل عام/,'train'],[/حافلة|أتوبيس|باص|محطة حافلات|نقل عام/,'bus'],[/بحر|محيط|شاطئ|شاطىء|جزيرة|ساحل/,'beach'],
    [/طعام|أكل|وجبة|مطعم|غداء|عشاء|لحم|فطور|إفطار|غذاء|طبق|وجبات|كيلو/,'meal'],[/مدينة|شارع|طريق|مباني|وسط المدينة|الحي|الجوار|الحديقة|متحف|بيئة|المواصلات/,'city'],[/طبيب|دكتور|صحة|مرض|مستشفى|عيادة|صيدلية|دواء|ممرضة|صداع|نزلة برد|الألم|دوخة|الكشف/,'doctor'],
    [/قطة|قط|قطه|قطط/,'cat'],[/كلب|جرو|كلاب/,'dog'],[/فول سوداني|الفول السوداني|فول|سوداني|فستق سوداني|مكسرات|فول سوداني/,'peanuts'],[/لبن|حليب|لبن كامل|كوب لبن/,'milk'],[/ليمون|ليمونة|ليمونادة/,'lemon'],[/قلب|قلبي|القلب|قلوب/,'heart'],[/أم|الأم|أبي|الأب|أب|عائلة|عائلتي|أخي|أختي|أسرة|أسرتي|أمي|أمك|أبوك|والدان|والدي|عائلتك/,'family'],[/ساعة|الساعة|وقت|الآن|اليوم|غدًا|بكرة|صباحًا|مساءً|بعد الظهر|موعد|مواعيد|تاريخ|توقيت|دقيقة|دقائق/,'clock'],[/يمين|يسار|انعطف|اتجه|اتجاه|ناصية|تقاطع|مدخل|مخرج|قريب من هنا|بعيد|خريطة|لافتة|إشارة مرور/,'directions'],[/إسعاف|إسعافًا|إسعاف|طوارئ|نجدة|شرطة|حادث|مساعدة عاجلة/,'ambulance'],[/ملابس|قميص|بنطلون|فستان|تنورة|جاكيت|سترة|جوارب|ملابس|مقاس|مقاسي|لون آخر|أزرق|أسود|أحمر|أبيض|أخضر|تجربة الملابس|أجرّب|أقيس/,'clothing'],[/كتاب|كتب|قراءة|دراسة|تعليم|مدرسة|جامعة|مكتبة/,'books']
  ];
  function esc(v){return String(v==null?'':v).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
  var italianRules=[
    [/(?:caffè|espresso|latte macchiato)/i,'coffee'],[/(?:tè|the)/i,'tea'],[/(?:acqua)/i,'water'],[/(?:succo|aranciata)/i,'juice'],
    [/(?:soldi|denaro|prezzo|conto|pagare|pagamento|comprare|vendere)/i,'money'],[/(?:telefono|cellulare|chiamata|messaggio)/i,'phone'],
    [/(?:pane|panino)/i,'bread'],[/(?:uovo|uova)/i,'egg'],[/(?:scarpa|scarpe)/i,'shoes'],[/(?:penna|scrivere|quaderno|carta)/i,'writing'],
    [/(?:mela|mele)/i,'apple'],[/(?:casa|appartamento|camera|stanza|cucina|bagno|albergo|hotel|porta|chiave)/i,'house'],
    [/(?:aereo|aeroplano|aeroporto|volo)/i,'airplane'],[/(?:taxi|auto|macchina|automobile|autista)/i,'taxi'],[/(?:valigia|bagaglio|bagagli)/i,'luggage'],
    [/(?:treno|metro|metropolitana)/i,'train'],[/(?:autobus|bus)/i,'bus'],[/(?:spiaggia|mare|oceano|isola|costa)/i,'beach'],
    [/(?:cibo|pasto|colazione|pranzo|cena|ristorante|carne|piatto)/i,'meal'],[/(?:città|strada|via|quartiere|parco|museo)/i,'city'],
    [/(?:medico|dottore|infermiera|ospedale|clinica|farmacia|medicina|dolore)/i,'doctor'],[/(?:gatto|gatti)/i,'cat'],[/(?:cane|cani|cucciolo)/i,'dog'],
    [/(?:arachidi|noccioline)/i,'peanuts'],[/(?:latte)/i,'milk'],[/(?:limone|limoni|limonata)/i,'lemon'],[/(?:cuore)/i,'heart'],
    [/(?:famiglia|madre|mamma|padre|papà|genitori|sorella|fratello)/i,'family'],[/(?:orologio|ora|minuto|minuti)/i,'clock'],
    [/(?:destra|sinistra|svoltare|direzione|mappa|incrocio|ingresso|uscita)/i,'directions'],[/(?:ambulanza|emergenza|polizia|incidente)/i,'ambulance'],
    [/(?:vestiti|abbigliamento|camicia|pantaloni|vestito|gonna|giacca|calzini|taglia)/i,'clothing'],[/(?:libro|libri|lettura|scuola|università|biblioteca|studiare)/i,'books']
  ];
  var spanishRules=[
    [/(?:café|cafetería)/i,'coffee'],[/(?:té)/i,'tea'],[/(?:agua)/i,'water'],[/(?:zumo|jugo)/i,'juice'],
    [/(?:dinero|efectivo|precio|cuenta|pagar|pago|comprar|vender|euros?)/i,'money'],[/(?:teléfono|móvil|celular|llamada|mensaje)/i,'phone'],
    [/(?:pan|bocadillo)/i,'bread'],[/(?:huevo|huevos)/i,'egg'],[/(?:zapato|zapatos|zapatillas)/i,'shoes'],[/(?:escribir|bolígrafo|cuaderno|papel)/i,'writing'],
    [/(?:manzana|manzanas)/i,'apple'],[/(?:casa|hogar|habitación|cuarto|cocina|baño|hotel|puerta|llave)/i,'house'],
    [/(?:avión|aeropuerto|vuelo)/i,'airplane'],[/(?:taxi|coche|carro|conductor)/i,'taxi'],[/(?:maleta|equipaje)/i,'luggage'],
    [/(?:tren|metro|metropolitano)/i,'train'],[/(?:autobús|bus)/i,'bus'],[/(?:playa|mar|océano|isla|costa)/i,'beach'],
    [/(?:comida|almuerzo|desayuno|cena|restaurante|carne|plato)/i,'meal'],[/(?:ciudad|calle|carretera|barrio|parque|museo)/i,'city'],
    [/(?:médico|doctor|enfermera|hospital|clínica|farmacia|medicina|dolor)/i,'doctor'],[/(?:gato|gata|gatos)/i,'cat'],[/(?:perro|perra|perros|cachorro)/i,'dog'],
    [/(?:cacahuetes|maní|cacahuate|frutos secos)/i,'peanuts'],[/(?:leche)/i,'milk'],[/(?:limón|limones|limonada)/i,'lemon'],[/(?:corazón)/i,'heart'],
    [/(?:familia|madre|mamá|padre|papá|padres|hermana|hermano)/i,'family'],[/(?:reloj|hora|minuto|minutos)/i,'clock'],
    [/(?:derecha|izquierda|girar|dirección|mapa|cruce|entrada|salida)/i,'directions'],[/(?:ambulancia|emergencia|policía|accidente)/i,'ambulance'],
    [/(?:ropa|camisa|pantalones|vestido|falda|chaqueta|calcetines|talla)/i,'clothing'],[/(?:libro|libros|lectura|escuela|universidad|biblioteca|estudiar)/i,'books']
  ];
  var frenchRules=[
    [/(?:café|espresso)/i,'coffee'],[/(?:thé)/i,'tea'],[/(?:eau)/i,'water'],[/(?:jus|jus d'orange)/i,'juice'],
    [/(?:argent|espèces|prix|addition|payer|paiement|acheter|vendre|euros?)/i,'money'],[/(?:téléphone|portable|appel|message)/i,'phone'],
    [/(?:pain|baguette)/i,'bread'],[/(?:œuf|oeuf|œufs|oeufs)/i,'egg'],[/(?:chaussure|chaussures)/i,'shoes'],[/(?:écrire|stylo|cahier|papier)/i,'writing'],
    [/(?:pomme|pommes)/i,'apple'],[/(?:maison|appartement|chambre|cuisine|salle de bain|hôtel|porte|clé)/i,'house'],
    [/(?:avion|aéroport|vol)/i,'airplane'],[/(?:taxi|voiture|chauffeur)/i,'taxi'],[/(?:valise|bagage)/i,'luggage'],
    [/(?:train|métro)/i,'train'],[/(?:bus|autobus)/i,'bus'],[/(?:plage|mer|océan|île|côte)/i,'beach'],
    [/(?:nourriture|repas|petit-déjeuner|déjeuner|dîner|restaurant|viande|plat)/i,'meal'],[/(?:ville|rue|route|quartier|parc|musée)/i,'city'],
    [/(?:médecin|docteur|infirmier|infirmière|hôpital|clinique|pharmacie|médicament|douleur)/i,'doctor'],[/(?:chat|chats)/i,'cat'],[/(?:chien|chiens|chiot)/i,'dog'],
    [/(?:cacahuètes|arachides|cacahuète)/i,'peanuts'],[/(?:lait)/i,'milk'],[/(?:citron|citrons|limonade)/i,'lemon'],[/(?:cœur|coeur)/i,'heart'],
    [/(?:famille|mère|maman|père|papa|parents|sœur|soeur|frère)/i,'family'],[/(?:horloge|heure|minute|minutes|montre)/i,'clock'],
    [/(?:droite|gauche|tourner|direction|carte|carrefour|entrée|sortie)/i,'directions'],[/(?:ambulance|urgence|police|accident)/i,'ambulance'],
    [/(?:vêtements|habit|chemise|pantalon|robe|jupe|veste|chaussettes|taille)/i,'clothing'],[/(?:livre|livres|lecture|école|université|bibliothèque|étudier)/i,'books']
  ];
  var germanRules=[
    [/(?:Kaffee|Espresso)/i,'coffee'],[/(?:Tee)/i,'tea'],[/(?:Wasser)/i,'water'],[/(?:Saft|Orangensaft)/i,'juice'],
    [/(?:Geld|Bargeld|Preis|Rechnung|bezahlen|Zahlung|kaufen|verkaufen|Euro)/i,'money'],[/(?:Telefon|Handy|Anruf|Nachricht)/i,'phone'],
    [/(?:Brot|Brötchen)/i,'bread'],[/(?:Ei|Eier)/i,'egg'],[/(?:Schuh|Schuhe|Turnschuhe)/i,'shoes'],[/(?:schreiben|Stift|Kugelschreiber|Heft|Papier)/i,'writing'],
    [/(?:Apfel|Äpfel)/i,'apple'],[/(?:Haus|Zuhause|Wohnung|Zimmer|Küche|Bad|Hotel|Tür|Schlüssel)/i,'house'],
    [/(?:Flugzeug|Flughafen|Flug)/i,'airplane'],[/(?:Taxi|Auto|Wagen|Fahrer)/i,'taxi'],[/(?:Koffer|Gepäck)/i,'luggage'],
    [/(?:Zug|Bahn|U-Bahn)/i,'train'],[/(?:Bus|Autobus)/i,'bus'],[/(?:Strand|Meer|Ozean|Insel|Küste)/i,'beach'],
    [/(?:Essen|Mahlzeit|Frühstück|Mittagessen|Abendessen|Restaurant|Fleisch|Gericht)/i,'meal'],[/(?:Stadt|Straße|Weg|Viertel|Park|Museum)/i,'city'],
    [/(?:Arzt|Ärztin|Doktor|Krankenhaus|Klinik|Apotheke|Medizin|Schmerz)/i,'doctor'],[/(?:Katze|Katzen)/i,'cat'],[/(?:Hund|Hunde|Welpe)/i,'dog'],
    [/(?:Erdnuss|Erdnüsse|Nüsse)/i,'peanuts'],[/(?:Milch)/i,'milk'],[/(?:Zitrone|Zitronen|Limonade)/i,'lemon'],[/(?:Herz)/i,'heart'],
    [/(?:Familie|Mutter|Mama|Vater|Papa|Eltern|Schwester|Bruder)/i,'family'],[/(?:Uhr|Stunde|Minute|Minuten|Zeit)/i,'clock'],
    [/(?:rechts|links|abbiegen|Richtung|Karte|Kreuzung|Eingang|Ausgang)/i,'directions'],[/(?:Krankenwagen|Notfall|Polizei|Unfall)/i,'ambulance'],
    [/(?:Kleidung|Kleider|Hemd|Hose|Kleid|Rock|Jacke|Socken|Größe)/i,'clothing'],[/(?:Buch|Bücher|Lesen|Schule|Universität|Bibliothek|lernen)/i,'books']
  ];
  function find(meaning,word,lang){
    var s=String(meaning||'');
    for(var i=0;i<rules.length;i++)if(rules[i][0].test(s))return photos[rules[i][1]];
    var target=String(word||'');
    if(lang==='it')for(var k=0;k<italianRules.length;k++)if(italianRules[k][0].test(target))return photos[italianRules[k][1]];
    if(lang==='es')for(var q=0;q<spanishRules.length;q++)if(spanishRules[q][0].test(target))return photos[spanishRules[q][1]];
    if(lang==='fr')for(var f=0;f<frenchRules.length;f++)if(frenchRules[f][0].test(target))return photos[frenchRules[f][1]];
    if(lang==='de')for(var d=0;d<germanRules.length;d++)if(germanRules[d][0].test(target))return photos[germanRules[d][1]];
    var englishRules=[
      [/\\b(?:coffee|espresso|latte)\\b/i,'coffee'],[/\\btea\\b/i,'tea'],[/\\b(?:water|drink)\\b/i,'water'],[/\\b(?:juice|orange juice)\\b/i,'juice'],
      [/\\b(?:money|cash|price|cost|bill|pay|payment|buy|sell)\\b/i,'money'],[/\\b(?:phone|mobile|telephone|call|message)\\b/i,'phone'],
      [/\\b(?:bread|loaf|toast)\\b/i,'bread'],[/\\beggs?\\b/i,'egg'],[/\\b(?:shoe|shoes|sneaker|sneakers)\\b/i,'shoes'],[/\\b(?:write|writing|pen|notebook|paper)\\b/i,'writing'],
      [/\\bapples?\\b/i,'apple'],[/\\b(?:house|home|room|bedroom|kitchen|bathroom|hotel|apartment|door|key)\\b/i,'house'],
      [/\\b(?:airplane|aircraft|plane|airport|flight)\\b/i,'airplane'],[/\\b(?:taxi|cab|uber|car|driver)\\b/i,'taxi'],[/\\b(?:luggage|suitcase|baggage)\\b/i,'luggage'],
      [/\\b(?:train|metro|subway)\\b/i,'train'],[/\\b(?:bus|coach)\\b/i,'bus'],[/\\b(?:beach|sea|ocean|island|coast)\\b/i,'beach'],
      [/\\b(?:food|meal|breakfast|lunch|dinner|restaurant|meat|dish)\\b/i,'meal'],[/\\b(?:city|street|road|neighborhood|park|museum)\\b/i,'city'],
      [/\\b(?:doctor|nurse|hospital|clinic|pharmacy|medicine|pain|headache)\\b/i,'doctor'],[/\\bcats?\\b/i,'cat'],[/\\b(?:dogs?|puppies)\\b/i,'dog'],
      [/\\b(?:peanuts?|nuts)\\b/i,'peanuts'],[/\\b(?:milk)\\b/i,'milk'],[/\\b(?:lemon|lemons|lemonade)\\b/i,'lemon'],[/\\bheart\\b/i,'heart'],
      [/\\b(?:family|mother|father|parents|sister|brother)\\b/i,'family'],[/\\b(?:clock|time|watch|minute|minutes)\\b/i,'clock'],
      [/\\b(?:right|left|turn|direction|map|intersection|entrance|exit)\\b/i,'directions'],[/\\b(?:ambulance|emergency|police|accident)\\b/i,'ambulance'],
      [/\\b(?:clothes|clothing|shirt|trousers|pants|dress|skirt|jacket|socks|size)\\b/i,'clothing'],[/\\b(?:book|books|reading|school|university|library|study)\\b/i,'books']
    ];
    for(var j=0;j<englishRules.length;j++)if(englishRules[j][0].test(target))return photos[englishRules[j][1]];
    return null;
  }
  function card(word,meaning,lang,kind){
    var safeWord=esc(word),safeMeaning=esc(meaning),safeLang=esc(lang||'');
    var p=find(meaning,word,lang),photo=p?'<img class="academy-photo-image" src="'+esc(p.url)+'" alt="'+safeMeaning+'" loading="lazy" decoding="async">':'';
    var speech=kind==='ptbr'?'<span class="academy-photo-word pt-speak" role="button" tabindex="0" lang="'+safeLang+'" data-say="'+safeWord+'">'+safeWord+'</span>':'<button type="button" class="academy-photo-word target" lang="'+safeLang+'" data-say="'+safeWord+'">'+safeWord+'</button>';
    var credit=p?'<a class="academy-photo-credit" href="'+esc(p.source)+'" target="_blank" rel="noopener" aria-label="مصدر الصورة Unsplash">Unsplash</a>':'<span class="academy-photo-fallback">مفردة تعليمية</span>';
    return '<span class="academy-photo-card '+(p?'has-photo':'no-photo')+'" role="group" aria-label="'+safeWord+' — '+safeMeaning+'">'+photo+speech+'<small>'+safeMeaning+'</small>'+credit+'</span>';
  }
  var css='.academy-photo-card{position:relative;display:flex;min-height:148px;width:100%;max-width:290px;overflow:hidden;flex-direction:column;justify-content:flex-end;align-items:flex-start;gap:5px;padding:13px;border-radius:14px;background:#e8f0f5;background-size:cover;background-position:center;border:1px solid rgba(4,49,82,.14);isolation:isolate;box-sizing:border-box}.academy-photo-image{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;z-index:0;display:block}.academy-photo-card:before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(4,20,34,.04) 5%,rgba(4,20,34,.82) 100%);z-index:1;pointer-events:none}.academy-photo-word{position:relative;z-index:2;max-width:100%;padding:0;border:0;background:transparent;color:#fff;text-align:start;text-shadow:0 1px 5px #000;font-family:inherit;font-size:17px;font-weight:850;line-height:1.35;cursor:pointer}.academy-photo-card small{position:relative;z-index:2;color:#fff;font-weight:750;text-shadow:0 1px 4px #000;font-size:13px;line-height:1.4}.academy-photo-credit{position:absolute;z-index:3;top:7px;inset-inline-end:8px;color:#fff;background:#102b3dcc;border-radius:6px;padding:3px 6px;font-size:10px;text-decoration:none}.academy-photo-card.no-photo{justify-content:center;background:linear-gradient(135deg,#edf3f8,#fff3e7)}.academy-photo-card.no-photo:before{display:none}.academy-photo-card.no-photo .academy-photo-word,.academy-photo-card.no-photo small{color:#17364d;text-shadow:none}.academy-photo-fallback{position:relative;z-index:2;color:#526b7c;font-size:11px;font-weight:700}.pt .academy-photo-card{max-width:100%}.words .academy-photo-card{max-width:100%;min-height:144px}.words .academy-photo-word{font-size:20px}@media(max-width:600px){.academy-photo-card{min-height:132px;max-width:100%;padding:11px}.academy-photo-word{font-size:16px}.academy-photo-card small{font-size:12px}}';if(typeof document!=='undefined'){var st=document.createElement('style');st.id='sd-academy-photo-styles';st.textContent=css;document.head.appendChild(st)}
  window.SDAcademyImages={resolve:find,card:card};
})();