(function(){
  'use strict';
  var photos={
    conversation:{url:'https://images.unsplash.com/photo-1523582407565-efee5cf4a353?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/group-of-people-having-a-conversation-in-a-circle-E0ylfF52C6M'},
    numbers:{url:'https://images.unsplash.com/photo-1772663042999-f2d61d02b7be?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/scattered-black-numbers-on-white-paper-background-OBgh6h_2yL0'},
    colors:{url:'https://images.unsplash.com/photo-1777537953461-744f35dcb1de?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/watercolor-paint-palettes-and-brushes-with-colorful-swatches-oIcwk0nS0bs'},
    fish:{url:'https://images.unsplash.com/photo-1763867641066-cd26a5f11105?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/fish-fillet-with-greens-and-sauce-on-a-white-plate-hc1TswjkUJo'},
    wine:{url:'https://images.unsplash.com/photo-1606767351797-1664b860ae5a?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/clear-wine-glass-with-red-wine-X9YIV04Nmdc'},
    fruit:{url:'https://images.unsplash.com/photo-1773823307113-2dcc3609aa79?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/a-woven-basket-filled-with-assorted-fresh-fruits-bNRTKQBwk5c'},
    vegetables:{url:'https://images.unsplash.com/photo-1721197709758-ab885b8a434f?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/a-wicker-basket-filled-with-fresh-fruit-and-vegetables-sLK0nwNaCAw'},
    cheese:{url:'https://images.unsplash.com/photo-1773431178270-7ec0483cb288?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/a-wheel-of-brie-cheese-with-a-slice-cut-out-Ju0amhFx2g0'},
    tennis:{url:'https://images.unsplash.com/photo-1746505396536-ba845e89a09e?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/a-tennis-racket-and-ball-on-the-court-pPJtHB1zoIE'},
    alphabet:{url:'https://images.unsplash.com/photo-1724073526844-217028c98078?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/the-word-hello-spelled-with-letters-made-out-of-wood-blocks-nQIWh1BCDx8'},
    police:{url:'https://images.unsplash.com/photo-1642888100704-70cb1c4ea203?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/a-police-car-and-a-police-car-parked-in-front-of-a-building-yd2Iuvic68g'},
    hotelReception:{url:'https://images.unsplash.com/photo-1757840600384-2a384321fa6d?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/hotel-lobby-entrance-with-staff-at-reception-desk-N0Th5bW7v3c'},
    luggageTag:{url:'https://images.unsplash.com/photo-1645200593922-d75d2fd04f1c?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/a-close-up-of-a-luggage-tag-on-a-bag-tTKyqAUVU6w'},
    boardingGate:{url:'https://images.unsplash.com/photo-1765305975975-8ba04ecbc473?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/airplane-at-airport-gate-on-a-cloudy-day-CAnyyoosQjk'},
    passport:{url:'https://images.unsplash.com/photo-1654163601023-88f6ba22b2c7?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/a-hand-holding-a-passport-over-a-white-background-q0vfoRmGIRA'},
    paymentCard:{url:'https://images.unsplash.com/photo-1750262701487-4ca222c89ef4?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/payment-is-being-made-with-a-credit-card-AAYpF9Vx7Ek'},
    medicine:{url:'https://images.unsplash.com/photo-1631980838902-e1eea9c12c67?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/a-pack-of-pills-sitting-on-top-of-a-white-table-uCNJs9v6lKE'},
    weather:{url:'https://images.unsplash.com/photo-1599806112354-67f8b5425a06?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/dark-grey-storm-clouds-Wk63a3_NMf0'},
    greeting:{url:'https://images.unsplash.com/photo-1758600435233-258658d68648?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/young-woman-waving-hello-with-a-smile-FR8X8-xenL0'},
    bathroom:{url:'https://images.unsplash.com/photo-1722186382699-8a6aecee6c65?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/a-bathroom-with-a-toilet-a-sink-and-a-mirror-ktemGiRcR_s'},
    table:{url:'https://images.unsplash.com/photo-1721989516850-a02c70e2fce3?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/a-dining-room-with-a-wooden-table-and-chairs-QAQQv0x8i0c'},
    baggageCarousel:{url:'https://images.unsplash.com/photo-1702411739431-0b6874405792?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/a-luggage-carousel-in-an-airport-with-a-large-screen-nTHnC5-z334'},
    hotelKeyCard:{url:'https://images.unsplash.com/photo-1761023717432-572bd8f780e1?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/hand-holding-a-sho-hotel-key-card-cHB4nr-vPC8'},
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
    [/جواز سفر|جواز|باسبور|وثيقة سفر|وثائق السفر/,'passport'],[/شرطة|الشرطة|قسم الشرطة|مركز الشرطة|شرطي|ضابط شرطة/,'police'],[/تسجيل الدخول|تسجيل المغادرة|تسجيل الوصول|تسجيل الخروج|حجز|حجزي|الاستقبال|موظف الاستقبال|سأقيم في فندق|فندق|فنادق|الفنادق/,'hotelReception'],[/ملصق الأمتعة|ملصق الحقيبة|بطاقة الأمتعة|بطاقة الحقيبة/,'luggageTag'],[/بوابة الصعود|بوابة الطائرة|بوابة المغادرة/,'boardingGate'],[/مرحاض|حمام|الحمّام|الحمام|دورة المياه|الحمّامات|الحمامات|حمّام/,'bathroom'],[/مرحبًا|مرحبا|أهلًا|اهلا|صباح الخير|مساء الخير|مع السلامة|إلى اللقاء|تشرفت بمعرفتك|تحية/,'greeting'],[/اسم الحرف|الحروف الأبجدية|الأبجدية/,'alphabet'],[/علامة الترقيم|علامة على|علامة acute|علامة circumflex|النبر|فاصلة|نقطة|علامة تعجب|علامة استفهام|الترقيم|اليد|يد|خبرة|مهارة|خطة|حل/,'writing'],[/اسمي|ما اسمك|أنا من مصر|من فضلك|شكرًا|شكرا|آسف|معلش|بعد إذنك|هل تتكلم|تتكلم الإنجليزية|تتكلم ببطء|لم أفهم|كل شيء تمام|وأنت|سعيد بمعرفتك|مزحة|نكتة|دعابة/,'conversation'],[/^(?:صفر|واحد|اثنان|ثلاثة|أربعة|خمسة|عشرة|عشرون)$|كم عمرك|عمري \d+/,'numbers'],[/سير استلام الأمتعة|سير الحقائب|سير الحقائب بالمطار|استلام الأمتعة|استلام الحقائب/,'baggageCarousel'],[/بطاقة الغرفة|مفتاح الغرفة|كارت الغرفة|كارت مفتاح الفندق/,'hotelKeyCard'],[/بطاقة صعود الطائرة|بطاقة الصعود|بطاقة الركوب|كارت صعود الطائرة/,'airplane'],[/بطاقة ائتمان|بطاقة ائتمانية|بطاقة بنكية|بطاقة مصرفية|كارت بنكي|كارت ائتمان|بطاقة الدفع/,'paymentCard'],[/دواء|أدوية|علاج|أقراص|حبوب دواء|دواء الصيدلية|صيدلية/,'medicine'],[/طقس|الطقس|توقعات الطقس|غائم|مطر|ممطر|عاصفة|سحب|غيوم|بارد|برد|برودة|الجو بارد/,'weather'],[/طاولة|ترابيزة/,'table'],
    [/قهوة|كافيه|مقهى|إسبريسو|لاتيه/,'coffee'],[/شاي|كوب شاي|فنجان شاي/,'tea'],[/ماء|ميه|مياه|عطش|زجاجة ماء|ازازة مياه/,'water'],[/عصير|ليمونادة|مشروب فاكهة/,'juice'],[/سمك|سمكة|أسماك/,'fish'],[/نبيذ|خمر|خمور/,'wine'],[/فاكهة|فواكه|موز|عنب|كمثرى|كيوي|مانجو|برتقال/,'fruit'],[/خضار|خضروات|بروكلي|جزر|طماطم|فلفل|خيار|خس/,'vegetables'],[/جبن|جبنة|أجبان/,'cheese'],[/ألوان|لون|أصفر|بنفسجي|وردي|رمادي|بني|برتقالي|أزرق|أسود|أحمر|أبيض|أخضر/,'colors'],
    [/نقود|فلوس|مال|نقود كاش|كاش|نقد|محفظة|سعر|ثمن|بكام|رخيص|غالي|دفع|يدفع|شراء|بيع|الحساب|إيصال|فاتورة|باقي الحساب/,'money'],[/هاتف|تليفون|موبايل|جوال|اتصال|مكالمة|رسالة نصية/,'phone'],
    [/خبز|عيش|مخبز|رغيف|توست/,'bread'],[/بيض|بيضة|بيضه/,'egg'],[/حذاء|جزمة|أحذية|كوتشي|حذاء رياضي|حذاء رسمي/,'shoes'],[/قلم|كتابة|يكتب|دفتر|كراسة|ورقة|مذكرات/,'writing'],[/تفاح|تفاحة/,'apple'],
    [/بيت|منزل|سكن|غرفة|باب|مفتاح|فندق|شقة|مطبخ|حمام|مرحاض|دورة المياه|غرفتك|غرفتي/,'house'],[/طائرة|طيران|مطار|رحلة|طيارة|إقلاع|هبوط/,'airplane'],
    [/سيارة|عربية|تاكسي|كاب|سائق|أوبر/,'taxi'],[/سير استلام الأمتعة|سير الحقائب|استلام الأمتعة|استلام الحقائب/,'baggageCarousel'],[/حقيبة سفر|شنطة|أمتعة|حقائب|أمتعة السفر/,'luggage'],[/قطار|مترو|محطة قطار|محطة المترو|سكة حديد/,'train'],[/حافلة|أتوبيس|باص|محطة حافلات/,'bus'],[/بحر|محيط|شاطئ|شاطىء|جزيرة|ساحل/,'beach'],
    [/طعام|أكل|وجبة|مطعم|غداء|عشاء|لحم|فطور|إفطار|غذاء|طبق|وجبات|كيلو/,'meal'],[/مدينة|شارع|طريق|مباني|وسط المدينة|الحي|الجوار|الحديقة|متحف/,'city'],[/طبيب|دكتور|صحة|مرض|مستشفى|عيادة|صيدلية|دواء|ممرضة|صداع|نزلة برد|الألم|دوخة|الكشف/,'doctor'],
    [/قطة|قط|قطه|قطط/,'cat'],[/كلب|جرو|كلاب/,'dog'],[/فول سوداني|الفول السوداني|فستق سوداني|مكسرات/,'peanuts'],[/لبن|حليب|لبن كامل|كوب لبن/,'milk'],[/ليمون|ليمونة|ليمونادة/,'lemon'],[/قلب|قلبي|القلب|قلوب/,'heart'],[/أم|الأم|أبي|الأب|أب|عائلة|عائلتي|أخي|أختي|أسرة|أسرتي|أمي|أمك|أبوك|والدان|والدي|عائلتك|صديق|صديقة|أصدقاء|صديقات|ابن|ابنة|ولد|بنت|جد|جدة|زوج|زوجة|عم|خال|عمة|خالة/,'family'],[/ساعة|الساعة|وقت|الآن|اليوم|غدًا|بكرة|صباحًا|مساءً|بعد الظهر|موعد|مواعيد|تاريخ|توقيت|دقيقة|دقائق/,'clock'],[/يمين|يسار|انعطف|اتجه|اتجاه|ناصية|تقاطع|مدخل|مخرج|قريب من هنا|بعيد|خريطة|لافتة|إشارة مرور/,'directions'],[/إسعاف|إسعافًا|طوارئ|نجدة|حادث|مساعدة عاجلة/,'ambulance'],[/ملابس|قميص|بنطلون|فستان|تنورة|جاكيت|سترة|جوارب|ملابس|مقاس|مقاسي|لون آخر|تجربة الملابس|أجرّب|أقيس/,'clothing'],[/كتاب|كتب|قراءة|مدرسة|جامعة|مكتبة/,'books']
  ];
  function esc(v){return String(v==null?'':v).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
  var italianRules=[
    [/(?:caffè|espresso|latte macchiato)/i,'coffee'],[/(?:tè|the)/i,'tea'],[/(?:acqua)/i,'water'],[/(?:succo|aranciata)/i,'juice'],
    [/(?:soldi|denaro|prezzo|conto|pagare|pagamento|comprare|vendere)/i,'money'],[/(?:telefono|cellulare|chiamata|messaggio)/i,'phone'],
    [/(?:pane|panino)/i,'bread'],[/(?:uovo|uova)/i,'egg'],[/(?:scarpa|scarpe)/i,'shoes'],[/(?:penna|scrivere|quaderno|carta)/i,'writing'],
    [/(?:mela|mele)/i,'apple'],[/(?:casa|appartamento|camera|stanza|cucina|bagno|albergo|hotel|porta|chiave)/i,'house'],
    [/(?:aereo|aeroplano|aeroporto|volo)/i,'airplane'],[/(?:taxi|auto|macchina|automobile|autista)/i,'taxi'],[/(?:valigia|bagaglio|bagagli)/i,'luggage'],
    [/(?:treno|metro|metropolitana|stazione)/i,'train'],[/(?:autobus|bus|fermata)/i,'bus'],[/(?:spiaggia|mare|oceano|isola|costa)/i,'beach'],
    [/(?:cibo|pasto|colazione|pranzo|cena|ristorante|carne|piatto)/i,'meal'],[/(?:città|strada|via|quartiere|parco|museo)/i,'city'],
    [/(?:medico|dottore|infermiera|ospedale|clinica|farmacia|medicina|dolore)/i,'doctor'],[/(?:gatto|gatti)/i,'cat'],[/(?:cane|cani|cucciolo)/i,'dog'],
    [/(?:arachidi|noccioline)/i,'peanuts'],[/(?:latte)/i,'milk'],[/(?:limone|limoni|limonata)/i,'lemon'],[/(?:cuore)/i,'heart'],
    [/(?:famiglia|madre|mamma|padre|papà|genitori|sorella|fratello)/i,'family'],[/(?:orologio|ora|minuto|minuti)/i,'clock'],
    [/(?:destra|sinistra|svoltare|direzione|mappa|incrocio|ingresso|uscita)/i,'directions'],[/(?:ambulanza|emergenza|incidente)/i,'ambulance'],
    [/(?:vestiti|abbigliamento|camicia|pantaloni|vestito|gonna|giacca|calzini|taglia)/i,'clothing'],[/(?:libro|libri|lettura|scuola|università|biblioteca|studiare)/i,'books']
  ];
  var spanishRules=[
    [/(?:café|cafetería)/i,'coffee'],[/(?:té)/i,'tea'],[/(?:agua)/i,'water'],[/(?:zumo|jugo)/i,'juice'],
    [/(?:dinero|efectivo|precio|cuenta|pagar|pago|comprar|vender|euros?)/i,'money'],[/(?:teléfono|móvil|celular|llamada|mensaje)/i,'phone'],
    [/(?:pan|bocadillo)/i,'bread'],[/(?:huevo|huevos)/i,'egg'],[/(?:zapato|zapatos|zapatillas)/i,'shoes'],[/(?:escribir|bolígrafo|cuaderno|papel)/i,'writing'],
    [/(?:manzana|manzanas)/i,'apple'],[/(?:casa|hogar|habitación|cuarto|cocina|baño|hotel|puerta|llave)/i,'house'],
    [/(?:avión|aeropuerto|vuelo)/i,'airplane'],[/(?:taxi|coche|carro|conductor)/i,'taxi'],[/(?:maleta|equipaje)/i,'luggage'],
    [/(?:tren|metro|metropolitano|estación)/i,'train'],[/(?:autobús|bus|parada)/i,'bus'],[/(?:playa|mar|océano|isla|costa)/i,'beach'],
    [/(?:comida|almuerzo|desayuno|cena|restaurante|carne|plato)/i,'meal'],[/(?:ciudad|calle|carretera|barrio|parque|museo)/i,'city'],
    [/(?:médico|doctor|enfermera|hospital|clínica|farmacia|medicina|dolor)/i,'doctor'],[/(?:gato|gata|gatos)/i,'cat'],[/(?:perro|perra|perros|cachorro)/i,'dog'],
    [/(?:cacahuetes|maní|cacahuate|frutos secos)/i,'peanuts'],[/(?:leche)/i,'milk'],[/(?:limón|limones|limonada)/i,'lemon'],[/(?:corazón)/i,'heart'],
    [/(?:familia|madre|mamá|padre|papá|padres|hermana|hermano)/i,'family'],[/(?:reloj|hora|minuto|minutos)/i,'clock'],
    [/(?:derecha|izquierda|girar|dirección|mapa|cruce|entrada|salida)/i,'directions'],[/(?:ambulancia|emergencia|accidente)/i,'ambulance'],
    [/(?:ropa|camisa|pantalones|vestido|falda|chaqueta|calcetines|talla)/i,'clothing'],[/(?:libro|libros|lectura|escuela|universidad|biblioteca|estudiar)/i,'books']
  ];
  var frenchRules=[
    [/(?:café|espresso)/i,'coffee'],[/(?:thé)/i,'tea'],[/(?:eau)/i,'water'],[/(?:jus|jus d'orange)/i,'juice'],
    [/(?:argent|espèces|prix|addition|payer|paiement|acheter|vendre|euros?)/i,'money'],[/(?:téléphone|portable|appel|message)/i,'phone'],
    [/(?:pain|baguette)/i,'bread'],[/(?:œuf|oeuf|œufs|oeufs)/i,'egg'],[/(?:chaussure|chaussures)/i,'shoes'],[/(?:écrire|stylo|cahier|papier)/i,'writing'],
    [/(?:pomme|pommes)/i,'apple'],[/(?:maison|appartement|chambre|cuisine|salle de bain|hôtel|porte|clé)/i,'house'],
    [/(?:avion|aéroport|vol)/i,'airplane'],[/(?:taxi|voiture|chauffeur)/i,'taxi'],[/(?:valise|bagage)/i,'luggage'],
    [/(?:train|métro|gare)/i,'train'],[/(?:bus|autobus|arrêt)/i,'bus'],[/(?:plage|mer|océan|île|côte)/i,'beach'],
    [/(?:nourriture|repas|petit-déjeuner|déjeuner|dîner|restaurant|viande|plat)/i,'meal'],[/(?:ville|rue|route|quartier|parc|musée)/i,'city'],
    [/(?:médecin|docteur|infirmier|infirmière|hôpital|clinique|pharmacie|médicament|douleur)/i,'doctor'],[/(?:chat|chats)/i,'cat'],[/(?:chien|chiens|chiot)/i,'dog'],
    [/(?:cacahuètes|arachides|cacahuète)/i,'peanuts'],[/(?:lait)/i,'milk'],[/(?:citron|citrons|limonade)/i,'lemon'],[/(?:cœur|coeur)/i,'heart'],
    [/(?:famille|mère|maman|père|papa|parents|sœur|soeur|frère)/i,'family'],[/(?:horloge|heure|minute|minutes|montre)/i,'clock'],
    [/(?:droite|gauche|tourner|direction|carte|carrefour|entrée|sortie)/i,'directions'],[/(?:ambulance|urgence|accident)/i,'ambulance'],
    [/(?:vêtements|habit|chemise|pantalon|robe|jupe|veste|chaussettes|taille)/i,'clothing'],[/(?:livre|livres|lecture|école|université|bibliothèque|étudier)/i,'books']
  ];
  var germanRules=[
    [/(?:Kaffee|Espresso)/i,'coffee'],[/(?:Tee)/i,'tea'],[/(?:Wasser)/i,'water'],[/(?:Saft|Orangensaft)/i,'juice'],
    [/(?:Geld|Bargeld|Preis|Rechnung|bezahlen|Zahlung|kaufen|verkaufen|Euro)/i,'money'],[/(?:Telefon|Handy|Anruf|Nachricht)/i,'phone'],
    [/(?:Brot|Brötchen)/i,'bread'],[/(?:Ei|Eier)/i,'egg'],[/(?:Schuh|Schuhe|Turnschuhe)/i,'shoes'],[/(?:schreiben|Stift|Kugelschreiber|Heft|Papier)/i,'writing'],
    [/(?:Apfel|Äpfel)/i,'apple'],[/(?:Haus|Zuhause|Wohnung|Zimmer|Küche|Bad|Hotel|Tür|Schlüssel)/i,'house'],
    [/(?:Flugzeug|Flughafen|Flug)/i,'airplane'],[/(?:Taxi|Auto|Wagen|Fahrer)/i,'taxi'],[/(?:Koffer|Gepäck)/i,'luggage'],
    [/(?:Zug|Bahn|U-Bahn|Bahnhof)/i,'train'],[/(?:Bus|Autobus|Haltestelle)/i,'bus'],[/(?:Strand|Meer|Ozean|Insel|Küste)/i,'beach'],
    [/(?:Essen|Mahlzeit|Frühstück|Mittagessen|Abendessen|Restaurant|Fleisch|Gericht)/i,'meal'],[/(?:Stadt|Straße|Weg|Viertel|Park|Museum)/i,'city'],
    [/(?:Arzt|Ärztin|Doktor|Krankenhaus|Klinik|Apotheke|Medizin|Schmerz)/i,'doctor'],[/(?:Katze|Katzen)/i,'cat'],[/(?:Hund|Hunde|Welpe)/i,'dog'],
    [/(?:Erdnuss|Erdnüsse|Nüsse)/i,'peanuts'],[/(?:Milch)/i,'milk'],[/(?:Zitrone|Zitronen|Limonade)/i,'lemon'],[/(?:Herz)/i,'heart'],
    [/(?:Familie|Mutter|Mama|Vater|Papa|Eltern|Schwester|Bruder)/i,'family'],[/(?:Uhr|Stunde|Minute|Minuten|Zeit)/i,'clock'],
    [/(?:rechts|links|abbiegen|Richtung|Karte|Kreuzung|Eingang|Ausgang)/i,'directions'],[/(?:Krankenwagen|Notfall|Unfall)/i,'ambulance'],
    [/(?:Kleidung|Kleider|Hemd|Hose|Kleid|Rock|Jacke|Socken|Größe)/i,'clothing'],[/(?:Buch|Bücher|Lesen|Schule|Universität|Bibliothek|lernen)/i,'books']
  ];
  var russianRules=[
    [/(?:кофе|эспрессо)/i,'coffee'],[/(?:чай)/i,'tea'],[/(?:вода|воды)/i,'water'],[/(?:сок)/i,'juice'],
    [/(?:деньги|цена|счёт|счет|платить|оплата|купить|продать|рубль|евро)/i,'money'],[/(?:телефон|мобильный|звонок|сообщение)/i,'phone'],
    [/(?:хлеб|булка)/i,'bread'],[/(?:яйцо|яйца)/i,'egg'],[/(?:обувь|туфли|ботинки)/i,'shoes'],[/(?:писать|ручка|тетрадь|бумага)/i,'writing'],
    [/(?:яблоко|яблоки)/i,'apple'],[/(?:дом|квартира|комната|кухня|ванная|отель|дверь|ключ)/i,'house'],
    [/(?:самолёт|самолет|аэропорт|рейс)/i,'airplane'],[/(?:такси|машина|автомобиль|водитель)/i,'taxi'],[/(?:чемодан|багаж)/i,'luggage'],
    [/(?:поезд|метро|станция)/i,'train'],[/(?:автобус|остановка)/i,'bus'],[/(?:пляж|море|океан|остров|побережье)/i,'beach'],
    [/(?:еда|пища|завтрак|обед|ужин|ресторан|мясо|блюдо)/i,'meal'],[/(?:город|улица|дорога|район|парк|музей)/i,'city'],
    [/(?:врач|доктор|медсестра|больница|клиника|аптека|лекарство|боль)/i,'doctor'],[/(?:кошка|кошки|кот|коты)/i,'cat'],[/(?:собака|собаки|щенок)/i,'dog'],
    [/(?:арахис|орехи)/i,'peanuts'],[/(?:молоко)/i,'milk'],[/(?:лимон|лимоны|лимонад)/i,'lemon'],[/(?:сердце)/i,'heart'],
    [/(?:семья|мать|мама|отец|папа|родители|сестра|брат)/i,'family'],[/(?:часы|час|минута|минуты|время)/i,'clock'],
    [/(?:направо|налево|повернуть|направление|карта|перекрёсток|перекресток|вход|выход)/i,'directions'],[/(?:скорая|чрезвычайная ситуация|авария)/i,'ambulance'],
    [/(?:одежда|рубашка|брюки|платье|юбка|куртка|носки|размер)/i,'clothing'],[/(?:книга|книги|чтение|школа|университет|библиотека|учиться)/i,'books']
  ];
  var europeanPortugueseRules=[
    [/(?:café|cafeteria|expresso)/i,'coffee'],[/(?:chá)/i,'tea'],[/(?:água)/i,'water'],[/(?:sumo|néctar)/i,'juice'],
    [/(?:dinheiro|preço|conta|pagar|pagamento|comprar|vender|euros?)/i,'money'],[/(?:telefone|telemóvel|chamada|mensagem)/i,'phone'],
    [/(?:pão|carcaça)/i,'bread'],[/(?:ovo|ovos)/i,'egg'],[/(?:sapato|sapatos|ténis)/i,'shoes'],[/(?:escrever|caneta|caderno|papel)/i,'writing'],
    [/(?:maçã|maçãs)/i,'apple'],[/(?:casa|apartamento|quarto|cozinha|casa de banho|hotel|porta|chave)/i,'house'],
    [/(?:avião|aeroporto|voo)/i,'airplane'],[/(?:táxi|carro|automóvel|condutor)/i,'taxi'],[/(?:mala|bagagem)/i,'luggage'],
    [/(?:comboio|metro|estação)/i,'train'],[/(?:autocarro|ônibus|paragem)/i,'bus'],[/(?:praia|mar|oceano|ilha|costa)/i,'beach'],
    [/(?:comida|refeição|pequeno-almoço|almoço|jantar|restaurante|carne|prato)/i,'meal'],[/(?:cidade|rua|estrada|bairro|parque|museu|trânsito)/i,'city'],
    [/(?:médico|médica|enfermeiro|enfermeira|hospital|clínica|farmácia|medicamento|dor)/i,'doctor'],[/(?:gato|gatos)/i,'cat'],[/(?:cão|cães|cachorro)/i,'dog'],
    [/(?:amendoim|amendoins)/i,'peanuts'],[/(?:leite)/i,'milk'],[/(?:limão|limões|limonada)/i,'lemon'],[/(?:coração)/i,'heart'],
    [/(?:família|mãe|mamã|pai|papá|pais|irmã|irmão|avó|avô|menino|menina|amigo|amiga|amigos|amigas)/i,'family'],[/(?:relógio|hora|minuto|minutos)/i,'clock'],
    [/(?:direita|esquerda|virar|direção|mapa|cruzamento|entrada|saída|endereço)/i,'directions'],[/(?:ambulância|emergência|acidente)/i,'ambulance'],
    [/(?:roupa|camisa|calças|vestido|saia|casaco|meias|tamanho)/i,'clothing'],[/(?:livro|livros|leitura|escola|universidade|biblioteca|estudar)/i,'books']
  ];
  var brazilianPortugueseRules=[
    [/(?:café|cafezinho|expresso)/i,'coffee'],[/(?:chá)/i,'tea'],[/(?:água)/i,'water'],[/(?:suco|suco de laranja)/i,'juice'],
    [/(?:dinheiro|grana|preço|conta|pagar|pagamento|comprar|vender|reais|gorjeta)/i,'money'],[/(?:telefone|celular|ligação|mensagem)/i,'phone'],
    [/(?:pão|pão francês)/i,'bread'],[/(?:ovo|ovos)/i,'egg'],[/(?:sapato|sapatos|tênis)/i,'shoes'],[/(?:escrever|caneta|caderno|papel)/i,'writing'],
    [/(?:maçã|maçãs)/i,'apple'],[/(?:casa|apartamento|quarto|cozinha|banheiro|hotel|porta|chave)/i,'house'],
    [/(?:avião|aeroporto|voo)/i,'airplane'],[/(?:táxi|carro|motorista)/i,'taxi'],[/(?:mala|bagagem)/i,'luggage'],
    [/(?:trem|metrô|estação|linha)/i,'train'],[/(?:ônibus|onibus|ponto de ônibus)/i,'bus'],[/(?:praia|mar|oceano|ilha|litoral)/i,'beach'],
    [/(?:comida|refeição|café da manhã|almoço|jantar|restaurante|carne|prato)/i,'meal'],[/(?:cidade|rua|estrada|bairro|parque|museu|trânsito)/i,'city'],
    [/(?:médico|médica|enfermeiro|enfermeira|hospital|clínica|farmácia|remédio|dor)/i,'doctor'],[/(?:gato|gata|gatos)/i,'cat'],[/(?:cachorro|cão|cães|filhote)/i,'dog'],
    [/(?:amendoim|amendoins)/i,'peanuts'],[/(?:leite)/i,'milk'],[/(?:limão|limões|limonada)/i,'lemon'],[/(?:coração)/i,'heart'],
    [/(?:família|mãe|mamãe|pai|papai|pais|irmã|irmão|avó|avô|menino|menina)/i,'family'],[/(?:relógio|hora|minuto|minutos)/i,'clock'],
    [/(?:direita|esquerda|virar|direção|mapa|cruzamento|entrada|saída|endereço)/i,'directions'],[/(?:ambulância|emergência|acidente)/i,'ambulance'],
    [/(?:roupa|camisa|calça|vestido|saia|jaqueta|meias|tamanho)/i,'clothing'],[/(?:livro|livros|leitura|escola|universidade|biblioteca|estudar)/i,'books']
  ];
  var italianPassportRules=[/passaporto|documento di viaggio/i];
  var spanishPassportRules=[/pasaporte|documento de viaje/i];
  var frenchPassportRules=[/passeport|document de voyage/i];
  var germanPassportRules=[/reisepass|pass\b|reisedokument/i];
  var russianPassportRules=[/паспорт|проездной документ/i];
  var europeanPassportRules=[/passaporte|documento de viagem/i];
  var brazilianPassportRules=[/passaporte|documento de viagem/i];
  function find(meaning,word,lang){
    var s=String(meaning||'');
    for(var i=0;i<rules.length;i++)if(rules[i][0].test(s))return photos[rules[i][1]];
    var target=String(word||'');
    if(/^\d+$/.test(target))return photos.numbers;
    if(/(?:january|february|march|april|may|june|july|august|september|october|november|december|gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre|enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre|januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember|январь|февраль|март|апрель|май|июнь|июль|август|сентябрь|октябрь|ноябрь|декабрь|janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i.test(target))return photos.clock;
    if(/(?:\b(?:red|blue|green|yellow|purple|pink|grey|gray|brown|orange|black|white)\b|rosso|blu|verde|giallo|viola|rosa|grigio|marrone|arancione|nero|bianco|rojo|azul|amarillo|morado|gris|marrón|naranja|negro|blanco|rouge|bleu|jaune|violet|marron|noir|blanc|rot|grün|gelb|lila|grau|braun|schwarz|weiß|красный|синий|зелёный|желтый|фиолетовый|розовый|серый|коричневый|оранжевый|чёрный|белый|vermelho|amarelo|roxo|cinza|marrom|laranja|preto)/i.test(target))return photos.colors;
    if(/(?:\b(?:fish|salmon|seafood)\b|pesce|pescado|poisson|fisch|рыба|peixe)/i.test(target))return photos.fish;
    if(/(?:\b(?:wine|red wine)\b|vino|vin|wein|vinho|вино)/i.test(target))return photos.wine;
    if(/(?:\b(?:fruit|fruits|banana|grapes?|pear|kiwi|mango)\b|frutta|frutto|frutas|fruta|fruité|obst|фрукты|фрукт|fruta)/i.test(target))return photos.fruit;
    if(/(?:\b(?:vegetables?|broccoli|carrot|lettuce|tomato|cucumber)\b|verdure|verdura|vegetales|légumes|gemüse|овощи|legumes)/i.test(target))return photos.vegetables;
    if(/(?:\b(?:cheese|cheddar|brie)\b|formaggio|queso|fromage|käse|сыр|queijo)/i.test(target))return photos.cheese;
    if(/(?:\b(?:tennis|tennis racket)\b|tennis|raqueta de tenis|raquette de tennis|tennisschläger|ракетка)/i.test(target))return photos.tennis;
    if(lang==='en'&&/^(?:I|you|he|she|we|they|yes|no|okay|sure)$/i.test(target)||lang==='en'&&/(?:see you soon|you're welcome|you are welcome|i need help|could you help me|sure|awesome|honestly|no biggie|whatever)/i.test(target))return photos.conversation;
    if(lang==='en'&&/^(?:work|works|has|goes|does|can|wants|knows)$/i.test(target))return photos.writing;
    if(lang==='en'&&/(?:where is|where's)/i.test(target))return photos.directions;
    if(lang==='en'&&/(?:can i see the menu|menu)/i.test(target))return photos.meal;
    if(lang==='en'&&/(?:i'm flying|flying to|flight)/i.test(target))return photos.airplane;
    if(lang==='en'&&/(?:i can swim|swim)/i.test(target))return photos.beach;
    if(lang==='en'&&/(?:seatbelt|seat belt)/i.test(target))return photos.taxi;
    if(lang==='en'&&/(?:played tennis)/i.test(target))return photos.tennis;
    if(/\b(?:my name is|what is your name|please|thank you|sorry|excuse me|do you speak|speak slowly|i don't understand|how are you|and you|nice to meet you|preciso de ajuda)\b|(?:meu nome é|como você se chama|eu sou do egito|por favor|obrigado|obrigada|desculpa|com licença|você fala|pode falar devagar|não entendi|tudo bem|e você|muito prazer|você se chama|bater papo|pode reformular|deixa eu reformular|como é mesmo|em outras palavras|do meu ponto de vista|por outro lado|eu te aviso)/i.test(target))return photos.conversation;
    if(/^[A-Z]\s*[—-]/.test(target))return photos.alphabet;
    if(lang==='pt-BR'&&/(?:ca-fé|mé-di-co|lâm-pa-da|também|sim, obrigado)/i.test(target))return photos.writing;
    if(/^(?:zero|um|dois|três|quatro|cinco|dez|vinte)$/i.test(target)||/(?:quantos anos|30 anos)/i.test(target))return photos.numbers;
    if(/\b(?:police|policeman|police officer|police station)\b|(?:polícia|policial|delegacia|policía|policía|policier|polizei|полиция)/i.test(target))return photos.police;
    if(/\b(?:hotel|check-in|check-out|reception|reservation|booking)\b|(?:recepção|reserva|hospedagem|hospedar|hotel|albergo|prenotazione|recepción|reserva|hotel|hôtel|réservation|rezeption|buchung|отель|регистрация|бронирование)/i.test(target))return photos.hotelReception;
    if(/\b(?:luggage tag|baggage tag|bag tag)\b|(?:etiqueta de bagagem|tag de bagagem|etichetta bagaglio|etiqueta de equipaje|étiquette bagage|Gepäckanhänger|багажная бирка)/i.test(target))return photos.luggageTag;
    if(/\b(?:boarding gate|departure gate|gate number)\b|(?:portão de embarque|portão|gate de embarque|puerta de embarque|porte d'embarquement|Abfluggate|выход на посадку)/i.test(target))return photos.boardingGate;
    if(/\b(?:hello|hi|good morning|good afternoon|good evening|goodbye|bye|nice to meet you)\b/i.test(target))return photos.greeting;
    if(/\b(?:bathroom|restroom|toilet|washroom|wc)\b/i.test(target))return photos.bathroom;
    if(lang==='it'&&/(?:ciao|buongiorno|buonasera|arrivederci|piacere)/i.test(target))return photos.greeting;
    if(lang==='it'&&/(?:bagno|toilette)/i.test(target))return photos.bathroom;
    if(lang==='es'&&/(?:hola|buenos días|buenas tardes|buenas noches|adiós|encantado)/i.test(target))return photos.greeting;
    if(lang==='es'&&/(?:baño|aseo|servicio)/i.test(target))return photos.bathroom;
    if(lang==='fr'&&/(?:bonjour|salut|bonsoir|au revoir|enchanté)/i.test(target))return photos.greeting;
    if(lang==='fr'&&/(?:salle de bain|toilettes|toilette)/i.test(target))return photos.bathroom;
    if(lang==='de'&&/(?:hallo|guten morgen|guten tag|guten abend|auf wiedersehen|tschüss)/i.test(target))return photos.greeting;
    if(lang==='de'&&/(?:Badezimmer|Toilette|WC)/i.test(target))return photos.bathroom;
    if(lang==='ru'&&/(?:привет|здравствуйте|доброе утро|до свидания)/i.test(target))return photos.greeting;
    if(lang==='ru'&&/(?:ванная|туалет)/i.test(target))return photos.bathroom;
    if(lang==='pt-BR'&&/(?:olá|oi|bom dia|boa tarde|boa noite|tchau|prazer)/i.test(target))return photos.greeting;
    if(lang==='pt-BR'&&/(?:banheiro|toalete|sanitário)/i.test(target))return photos.bathroom;
    if(lang==='pt-PT'&&/(?:olá|bom dia|boa tarde|boa noite|adeus|até logo|prazer)/i.test(target))return photos.greeting;
    if(lang==='pt-PT'&&/(?:casa de banho|sanita|casa de banho pública)/i.test(target))return photos.bathroom;
    if(/\bpassport\b|\btravel document\b/i.test(target))return photos.passport;
    if(/\b(?:boarding pass|boarding card|flight ticket|airline ticket)\b/i.test(target))return photos.airplane;
    if(lang==='pt-BR'&&/(?:cartão de embarque|passagem aérea|bilhete aéreo)/i.test(target))return photos.airplane;
    if(lang==='pt-PT'&&/(?:cartão de embarque|bilhete de avião|passagem aérea)/i.test(target))return photos.airplane;
    if(lang==='it'&&/(?:carta d'imbarco|biglietto aereo)/i.test(target))return photos.airplane;
    if(lang==='es'&&/(?:tarjeta de embarque|billete de avión|boleto de avión)/i.test(target))return photos.airplane;
    if(lang==='fr'&&/(?:carte d'embarquement|billet d'avion)/i.test(target))return photos.airplane;
    if(lang==='de'&&/(?:Bordkarte|Flugticket)/i.test(target))return photos.airplane;
    if(lang==='ru'&&/(?:посадочный талон|авиабилет)/i.test(target))return photos.airplane;
    if(/\b(?:medicine|medication|pills?|pharmacy)\b/i.test(target)||/(?:remédio|medicamento|farmácia|medicina|medikament|apotheke|лекарство|аптека)/i.test(target))return photos.medicine;
    if(/\b(?:weather|cloudy|rain|rainy|storm|forecast)\b/i.test(target)||/(?:previsão do tempo|nublado|chuva|tempo chuvoso|meteo|nuvoloso|pioggia|clima|lluvia|nublado|météo|pluie|nuageux|Wetter|Regen|bewölkt|погода|дождь|облачно)/i.test(target))return photos.weather;
    if(lang==='it'&&italianPassportRules[0].test(target))return photos.passport;
    if(/\b(?:table|dining table)\b/i.test(target))return photos.table;
    if(/\b(?:baggage claim|baggage carousel|luggage carousel)\b/i.test(target))return photos.baggageCarousel;
    if(/\b(?:hotel key card|room key card|room key)\b/i.test(target))return photos.hotelKeyCard;
    if(lang==='it'&&/(?:tavolo)/i.test(target))return photos.table;
    if(lang==='it'&&/(?:nastro bagagli|ritiro bagagli|nastro trasportatore bagagli)/i.test(target))return photos.baggageCarousel;
    if(lang==='it'&&/(?:chiave della camera|tessera della camera|chiave dell'hotel)/i.test(target))return photos.hotelKeyCard;
    if(lang==='es'&&/(?:mesa|mesa de comedor)/i.test(target))return photos.table;
    if(lang==='es'&&/(?:recogida de equipaje|cinta de equipaje|carrusel de equipaje)/i.test(target))return photos.baggageCarousel;
    if(lang==='es'&&/(?:tarjeta de habitación|llave de la habitación|tarjeta de hotel)/i.test(target))return photos.hotelKeyCard;
    if(lang==='fr'&&/(?:table|table à manger)/i.test(target))return photos.table;
    if(lang==='fr'&&/(?:tapis à bagages|carrousel à bagages|récupération des bagages)/i.test(target))return photos.baggageCarousel;
    if(lang==='fr'&&/(?:carte de chambre|carte de chambre d'hôtel|clé de chambre)/i.test(target))return photos.hotelKeyCard;
    if(lang==='de'&&/(?:Tisch|Esstisch)/i.test(target))return photos.table;
    if(lang==='de'&&/(?:Gepäckausgabe|Gepäckband|Gepäckkarussell)/i.test(target))return photos.baggageCarousel;
    if(lang==='de'&&/(?:Zimmerkarte|Hotelkarte|Zimmerschlüssel)/i.test(target))return photos.hotelKeyCard;
    if(lang==='ru'&&/(?:стол|обеденный стол)/i.test(target))return photos.table;
    if(lang==='ru'&&/(?:выдача багажа|багажная лента|лента выдачи багажа)/i.test(target))return photos.baggageCarousel;
    if(lang==='ru'&&/(?:ключ от номера|карта номера|ключ-карта отеля)/i.test(target))return photos.hotelKeyCard;
    if(lang==='pt-BR'&&/(?:mesa|mesa de jantar)/i.test(target))return photos.table;
    if(lang==='pt-BR'&&/(?:esteira de bagagem|retirada de bagagem|esteira de malas)/i.test(target))return photos.baggageCarousel;
    if(lang==='pt-BR'&&/(?:cartão do quarto|cartão-chave do hotel|chave do quarto)/i.test(target))return photos.hotelKeyCard;
    if(lang==='pt-BR'&&/(?:cartão|aceita cartão)/i.test(target))return photos.paymentCard;
    if(lang==='pt-BR'&&/(?:estou procurando|maior|menor|estou só olhando)/i.test(target))return photos.clothing;
    if(lang==='pt-BR'&&/(?:eu queria|para viagem|eu gosto de|eu não gosto de|eu prefiro|sem açúcar|sem cebola|^sem$|^com$|está delicioso|o que você recomenda)/i.test(target))return photos.meal;
    if(lang==='pt-BR'&&/(?:alergia|não estou me sentindo bem|dor de cabeça|febre)/i.test(target))return photos.doctor;
    if(lang==='pt-BR'&&/(?:qual é o motivo da sua viagem|turismo|quanto tempo vai ficar)/i.test(target))return photos.passport;
    if(lang==='pt-BR'&&/(?:passagem de volta)/i.test(target))return photos.airplane;
    if(lang==='pt-BR'&&/(?:eu comprei uma passagem)/i.test(target))return photos.airplane;
    if(lang==='pt-BR'&&/(?:pode me levar|pode parar aqui)/i.test(target))return photos.taxi;
    if(lang==='pt-BR'&&/(?:passeio|eu visitei o rio|movimentado)/i.test(target))return photos.city;
    if(lang==='pt-BR'&&/(?:viajar|viajava|vou viajar|viagem)/i.test(target))return photos.airplane;
    if(lang==='pt-BR'&&/(?:todos os verões|verão|praia)/i.test(target))return photos.beach;
    if(lang==='pt-BR'&&/(?:na próxima semana|mais tarde|cedo|fim de semana)/i.test(target))return photos.clock;
    if(lang==='pt-BR'&&/(?:trocar|troca)/i.test(target))return photos.clothing;
    if(lang==='pt-BR'&&/(?:o mais barato|barato)/i.test(target))return photos.money;
    if(lang==='pt-BR'&&/(?:poderia repetir|poderia me ajudar|teria como|seria possível|sem problema|que tal|trabalhar em equipe|reformular)/i.test(target))return photos.conversation;
    if(lang==='pt-BR'&&/(?:você deve descansar|eu me sinto bem)/i.test(target))return photos.doctor;
    if(lang==='pt-BR'&&/(?:se acordar|eu me levanto cedo)/i.test(target))return photos.clock;
    if(lang==='pt-BR'&&/(?:ar-condicionado)/i.test(target))return photos.house;
    if(lang==='pt-BR'&&/(?:confortável)/i.test(target))return photos.hotelReception;
    if(lang==='pt-BR'&&/(?:atrasado|atrasada)/i.test(target))return photos.clock;
    if(lang==='pt-BR'&&/(?:quando eu era criança)/i.test(target))return photos.family;
    if(lang==='pt-BR'&&/(?:poderia enviar por e-mail)/i.test(target))return photos.phone;
    if(lang==='pt-BR'&&/(?:acordar|geralmente|durante a semana|na semana passada|antigamente|sempre|quando|de repente|enquanto|primeiro|em seguida|no fim|duas vezes por dia|fim de semana)/i.test(target))return photos.clock;
    if(lang==='pt-BR'&&/(?:encontrei|convite|gostaria|eu tive um problema|fale mais devagar|você me entende|ela nos chamou|disse que|perguntou se|pediu para|recomendou|segundo ele|pelo que entendi|ela explicou que|como assim|você quer dizer|na verdade|na minha opinião|por um lado|no entanto|beleza|né\?)/i.test(target))return photos.conversation;
    if(lang==='pt-BR'&&/(?:disponibilidade|cancelamento|trocar de quarto|você vai ficar aqui)/i.test(target))return photos.hotelReception;
    if(lang==='pt-BR'&&/(?:perto de|^onde$|espere aqui)/i.test(target))return photos.directions;
    if(lang==='pt-BR'&&/(?:a gente viajava|eu vou viajar|tenho viajado|quando você chegar|quando eu for)/i.test(target))return photos.airplane;
    if(lang==='pt-BR'&&/(?:nós nos preparamos)/i.test(target))return photos.luggage;
    if(lang==='pt-BR'&&/(?:se divertir)/i.test(target))return photos.beach;
    if(lang==='pt-BR'&&/(?:eu preferiria)/i.test(target))return photos.meal;
    if(lang==='pt-BR'&&/(?:sotaque|pronúncia|vocabulário)/i.test(target))return photos.writing;
    if(lang==='pt-BR'&&/(?:regional|dependendo da região|no sul)/i.test(target))return photos.city;
    if(lang==='pt-BR'&&/(?:funcionando)/i.test(target))return photos.house;
    if(lang==='pt-BR'&&/(?:não se preocupe|num sei)/i.test(target))return photos.conversation;
    if(lang==='pt-BR'&&/(?:^os amigos$|^as amigas$|somos amigos|amigos|amigas)/i.test(target))return photos.family;
    if(lang==='pt-BR'&&/(?:hotéis|hoteis)/i.test(target))return photos.hotelReception;
    if(lang==='pt-BR'&&/(?:^a mão$|mão)/i.test(target))return photos.writing;
    if(lang==='pt-BR'&&/(?:experiência|habilidade|plano|solução|solicitar|solicito|experiência profissional|colocar a mão na massa)/i.test(target))return photos.writing;
    if(lang==='pt-BR'&&/(?:brincadeira)/i.test(target))return photos.conversation;
    if(lang==='pt-BR'&&/(?:se fizer frio)/i.test(target))return photos.weather;
    if(lang==='pt-BR'&&/(?:onde fica|^aqui$|^ali$|^perto$)/i.test(target))return photos.directions;
    if(lang==='pt-BR'&&/(?:onde compro o bilhete|baldeação|^uma passagem$)/i.test(target))return photos.train;
    if(lang==='pt-PT'&&/(?:mesa|mesa de jantar)/i.test(target))return photos.table;
    if(lang==='pt-PT'&&/(?:tapete de bagagem|recolha de bagagem|passadeira de bagagem)/i.test(target))return photos.baggageCarousel;
    if(lang==='pt-PT'&&/(?:cartão do quarto|cartão-chave do hotel|chave do quarto)/i.test(target))return photos.hotelKeyCard;
    if(lang==='es'&&spanishPassportRules[0].test(target))return photos.passport;
    if(lang==='fr'&&frenchPassportRules[0].test(target))return photos.passport;
    if(lang==='de'&&germanPassportRules[0].test(target))return photos.passport;
    if(lang==='ru'&&russianPassportRules[0].test(target))return photos.passport;
    if((lang==='pt-BR'&&brazilianPassportRules[0].test(target))||(lang==='pt-PT'&&europeanPassportRules[0].test(target)))return photos.passport;

    if(lang==='it')for(var k=0;k<italianRules.length;k++)if(italianRules[k][0].test(target))return photos[italianRules[k][1]];
    if(lang==='es')for(var q=0;q<spanishRules.length;q++)if(spanishRules[q][0].test(target))return photos[spanishRules[q][1]];
    if(lang==='fr')for(var f=0;f<frenchRules.length;f++)if(frenchRules[f][0].test(target))return photos[frenchRules[f][1]];
    if(lang==='de')for(var d=0;d<germanRules.length;d++)if(germanRules[d][0].test(target))return photos[germanRules[d][1]];
    if(lang==='ru')for(var r=0;r<russianRules.length;r++)if(russianRules[r][0].test(target))return photos[russianRules[r][1]];
    if(lang==='pt-BR')for(var b=0;b<brazilianPortugueseRules.length;b++)if(brazilianPortugueseRules[b][0].test(target))return photos[brazilianPortugueseRules[b][1]];
    if(lang==='pt-PT')for(var p=0;p<europeanPortugueseRules.length;p++)if(europeanPortugueseRules[p][0].test(target))return photos[europeanPortugueseRules[p][1]];
    var englishRules=[
      [/\b(?:coffee|espresso|latte)\b/i,'coffee'],[/\btea\b/i,'tea'],[/\b(?:water|drink)\b/i,'water'],[/\b(?:juice|orange juice)\b/i,'juice'],
      [/\b(?:money|cash|price|cost|bill|pay|payment|buy|sell)\b/i,'money'],[/\b(?:phone|mobile|telephone|call|message)\b/i,'phone'],
      [/\b(?:bread|loaf|toast)\b/i,'bread'],[/\beggs?\b/i,'egg'],[/\b(?:shoe|shoes|sneaker|sneakers)\b/i,'shoes'],[/\b(?:write|writing|pen|notebook|paper)\b/i,'writing'],
      [/\bapples?\b/i,'apple'],[/\b(?:house|home|room|bedroom|kitchen|bathroom|hotel|apartment|door|key)\b/i,'house'],
      [/\b(?:airplane|aircraft|plane|airport|flight)\b/i,'airplane'],[/\b(?:taxi|cab|uber|car|driver)\b/i,'taxi'],[/\b(?:luggage|suitcase|baggage)\b/i,'luggage'],
      [/\b(?:train|metro|subway)\b/i,'train'],[/\b(?:bus|coach)\b/i,'bus'],[/\b(?:beach|sea|ocean|island|coast)\b/i,'beach'],
      [/\b(?:food|meal|breakfast|lunch|dinner|restaurant|meat|dish)\b/i,'meal'],[/\b(?:city|street|road|neighborhood|park|museum)\b/i,'city'],
      [/\b(?:doctor|nurse|hospital|clinic|pharmacy|medicine|pain|headache)\b/i,'doctor'],[/\bcats?\b/i,'cat'],[/\b(?:dogs?|puppies)\b/i,'dog'],
      [/\b(?:peanuts?|nuts)\b/i,'peanuts'],[/\b(?:milk)\b/i,'milk'],[/\b(?:lemon|lemons|lemonade)\b/i,'lemon'],[/\bheart\b/i,'heart'],
      [/\b(?:family|mother|father|parents|sister|brother)\b/i,'family'],[/\b(?:clock|time|watch|minute|minutes)\b/i,'clock'],
      [/\b(?:right|left|turn|direction|map|intersection|entrance|exit)\b/i,'directions'],[/\b(?:ambulance|emergency|accident)\b/i,'ambulance'],
      [/\b(?:clothes|clothing|shirt|trousers|pants|dress|skirt|jacket|socks|size)\b/i,'clothing'],[/\b(?:book|books|reading|school|university|library|study)\b/i,'books']
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