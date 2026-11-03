(function(){
  'use strict';
  var photos={
    pharmacy:{url:'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/pharmacy'},
    hospitalBuilding:{url:'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/hospital-building'},
    veterinarian:{url:'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/veterinarian'},
    postbox:{url:'https://images.unsplash.com/photo-1563207153-f403bf289096?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/postbox'},
    trainStation:{url:'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/train-station'},
    ferry:{url:'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/ferry-boat'},
    ship:{url:'https://images.unsplash.com/photo-1498623116890-37e912163d5d?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/ship'},
    bridge:{url:'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/bridge'},
    tunnel:{url:'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/tunnel'},
    gasStation:{url:'https://images.unsplash.com/photo-1545262810-77515befe149?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/gas-station'},
    mechanic:{url:'https://images.unsplash.com/photo-1487754180451-c456f0d4b3c2?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/car-mechanic'},
    parkingGarage:{url:'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/parking-garage'},
    wallet:{url:'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/wallet'},
    receipt:{url:'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/receipt'},
    ticket:{url:'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/event-ticket'},
    calendar:{url:'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/calendar'},
    notebook:{url:'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/notebook'},
    scissors:{url:'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/scissors'},
    screwdriver:{url:'https://images.unsplash.com/photo-1581147036324-c1c4f8b8f5a1?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/screwdriver'},
    hammer:{url:'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/hammer'},
    suitcaseLock:{url:'https://images.unsplash.com/photo-1512412046876-f386342eddb3?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/luggage-lock'},
    laundry:{url:'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/laundry'},
    shower:{url:'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/shower'},
    bathtub:{url:'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/bathtub'},

    bakery:{url:'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/bakery-bread'},
    butcher:{url:'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/butcher-shop'},
    fishMarket:{url:'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/fish-market'},
    hotelRoom:{url:'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/hotel-room'},
    airportSecurity:{url:'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/airport-security'},
    passportControl:{url:'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/passport-control'},
    customs:{url:'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/customs-airport'},
    suitcaseOpen:{url:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/open-suitcase'},
    pedestrianCrossing:{url:'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/pedestrian-crossing'},
    trafficLight:{url:'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/traffic-light'},
    bicycleHelmet:{url:'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/bicycle-helmet'},
    schoolBus:{url:'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/school-bus'},
    breakfast:{url:'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/breakfast'},
    sandwich:{url:'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/sandwich'},
    salad:{url:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/salad'},
    chicken:{url:'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/roast-chicken'},
    tomato:{url:'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/tomato'},
    onion:{url:'https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/onion'},
    potato:{url:'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/potato'},
    strawberry:{url:'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/strawberry'},
    grapes:{url:'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/grapes'},
    orange:{url:'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/orange-fruit'},
    camel:{url:'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/camel'},
    mosque:{url:'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/mosque'},

    airportCheckin:{url:'https://images.unsplash.com/photo-1760581190058-b492570add9d?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/modern-airport-terminal-with-large-windows-and-check-in-counters-_HL8emdJztQ'},
    dentist:{url:'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/dentist'},
    supermarket:{url:'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/supermarket'},
    elevator:{url:'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/elevator'},
    stairs:{url:'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/stairs'},
    computer:{url:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/laptop-computer'},
    headphones:{url:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/headphones'},
    dessert:{url:'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/dessert'},
    soup:{url:'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/soup'},
    rice:{url:'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/rice'},
    pasta:{url:'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/pasta'},
    salt:{url:'https://images.unsplash.com/photo-1518110925495-5fe2fda0442b?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/salt'},
    sugar:{url:'https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/sugar'},
    key:{url:'https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/keys'},
    map:{url:'https://images.unsplash.com/photo-1524666041070-9b876833eab3?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/map'},
    birthday:{url:'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/birthday-cake'},

    conversation:{url:'https://images.unsplash.com/photo-1523582407565-efee5cf4a353?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/group-of-people-having-a-conversation-in-a-circle-E0ylfF52C6M'},
    friends:{url:'https://images.unsplash.com/photo-1670272506160-bdf0c7a45d2b?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/a-group-of-people-sitting-outside-d9jiWu7Q90Q'},
    hand:{url:'https://images.pexels.com/photos/8058739/pexels-photo-8058739.jpeg?auto=compress&cs=tinysrgb&w=1200',credit:'Pexels',source:'https://www.pexels.com/photo/close-up-shot-of-a-palm-8058739/'},
    brokenItem:{url:'https://images.unsplash.com/photo-1712600096579-afb75d1b72ab?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/a-close-up-of-a-broken-cell-phone-kpZuxqH0tvM'},
    fork:{url:'https://images.pexels.com/photos/12021475/pexels-photo-12021475.jpeg?auto=compress&cs=tinysrgb&w=1200',credit:'Pexels',source:'https://www.pexels.com/photo/fork-on-white-surface-12021475/'},
    spoon:{url:'https://images.pexels.com/photos/12021477/pexels-photo-12021477.jpeg?auto=compress&cs=tinysrgb&w=1200',credit:'Pexels',source:'https://www.pexels.com/photo/close-up-shot-of-a-metal-spoon-12021477/'},
    flour:{url:'https://images.pexels.com/photos/5441099/pexels-photo-5441099.jpeg?auto=compress&cs=tinysrgb&w=1200',credit:'Pexels',source:'https://www.pexels.com/photo/white-flour-in-a-clear-glass-bowl-5441099/'},
    document:{url:'https://images.pexels.com/photos/7054757/pexels-photo-7054757.jpeg?auto=compress&cs=tinysrgb&w=1200',credit:'Pexels',source:'https://www.pexels.com/photo/a-close-up-shot-of-paper-clipped-documents-7054757/'},
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
    roundabout:{url:'https://images.unsplash.com/photo-1643264235256-000363093382?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/an-aerial-view-of-an-intersection-in-a-city-g-t6a81IfJw'},
    ambulance:{url:'https://images.unsplash.com/photo-1742016102687-46ee5f824f49?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/an-ambulance-drives-down-a-busy-city-street-Vdp9VNnwzZs'},
    clothing:{url:'https://images.unsplash.com/photo-1767968037382-8eb9c564339f?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/photos/clothes-hanging-on-a-rack-in-a-boutique-pt3EBzQcxP0'},
    classroom:{url:'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    school:{url:'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    laptop:{url:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    office:{url:'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    market:{url:'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    restaurant:{url:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    library:{url:'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    park:{url:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    mountain:{url:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    bicycle:{url:'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    soccer:{url:'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    music:{url:'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    kitchen:{url:'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    flowers:{url:'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    bird:{url:'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    farm:{url:'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    river:{url:'https://images.unsplash.com/photo-1437482078695-3a786fb9af68?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    forest:{url:'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    museum:{url:'https://images.unsplash.com/photo-1565060169194-19fabf63012c?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    hairdresser:{url:'https://images.unsplash.com/photo-1560066984-138dadb4c8a5?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    clothesStore:{url:'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    gym:{url:'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    swimming:{url:'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    basketball:{url:'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    car:{url:'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    motorcycle:{url:'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    bed:{url:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    sofa:{url:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    window:{url:'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    door:{url:'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    toothbrush:{url:'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    soap:{url:'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    towel:{url:'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    plate:{url:'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    cup:{url:'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    fridge:{url:'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    washingMachine:{url:'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    iron:{url:'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    hat:{url:'https://images.unsplash.com/photo-1521369909029-2f2f8b6b3d3d?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    glasses:{url:'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    camera:{url:'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    guitar:{url:'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    piano:{url:'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    microphone:{url:'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    painting:{url:'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    sculpture:{url:'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    fire:{url:'https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    firefighter:{url:'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    construction:{url:'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    tools:{url:'https://images.unsplash.com/photo-1581147036324-c1c6a2f9f6b1?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    bank:{url:'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    postOffice:{url:'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    wedding:{url:'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    baby:{url:'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    sunrise:{url:'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    rain:{url:'https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    snow:{url:'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    umbrella:{url:'https://images.unsplash.com/photo-1534274988757-a28bf1a57d672?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    desert:{url:'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    waterfall:{url:'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    island:{url:'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    camping:{url:'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    tent:{url:'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    garden:{url:'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/'},
    toothpaste:{url:'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/toothpaste'},
    bedroom:{url:'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/bedroom'},
    pillow:{url:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/pillow'},
    lamp:{url:'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/table-lamp'},
    refrigerator:{url:'https://images.unsplash.com/photo-1571175443880-49e1d58579?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/refrigerator'},
    stove:{url:'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/kitchen-stove'},
    chair:{url:'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/chair'},
    bookshelf:{url:'https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/bookshelf'},
    book:{url:'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/open-book'},
    newspaper:{url:'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/newspaper'},
    oceanWave:{url:'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/ocean-waves'},

    football:{url:'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/football'},
    gloves:{url:'https://images.unsplash.com/photo-1548883354-94bcfe321cbb?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/winter-gloves'},

    watch:{url:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/wristwatch'},
    shirt:{url:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/t-shirt'},
    pizza:{url:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/pizza'},
    burger:{url:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/hamburger'},
    iceCream:{url:'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/ice-cream'},
    cake:{url:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=760&q=82',credit:'Unsplash',source:'https://unsplash.com/s/photos/cake'},

  };
  var rules=[
    [/سيارة|سيارات|مركبة|عربة/,'car'],
    [/دراجة نارية|موتوسيكل|سكوتر/,'motorcycle'],
    [/سرير|فراش|مرتبة|وسادة/,'bed'],
    [/أريكة|كنبة|مقعد|صالون/,'sofa'],
    [/نافذة|شباك|نوافذ|شبابيك/,'window'],
    [/باب|أبواب|مدخل المنزل/,'door'],
    [/فرشاة أسنان|تنظيف الأسنان/,'toothbrush'],
    [/صابون|صابونة|غسل اليدين/,'soap'],
    [/منشفة|فوطة|مناشف|فوط/,'towel'],
    [/طبق|أطباق|صحن|صحون|أواني الطعام/,'plate'],
    [/كوب|أكواب|فنجان|فناجين|قدح/,'cup'],
    [/ثلاجة|براد|مبرد الطعام/,'fridge'],
    [/غسالة|غسالة ملابس|غسيل الملابس/,'washingMachine'],
    [/مكواة|كي الملابس|مكواة ملابس/,'iron'],
    [/قبعة|طاقية|قبعات|كاب/,'hat'],
    [/نظارة|نظارات|نظارة شمسية|نظارة طبية/,'glasses'],
    [/كاميرا|آلة تصوير|تصوير فوتوغرافي/,'camera'],
    [/جيتار|غيتار|قيثارة/,'guitar'],
    [/بيانو|آلة البيانو/,'piano'],
    [/ميكروفون|مكبر صوت يدوي/,'microphone'],
    [/لوحة فنية|رسم|لوحات|فن تشكيلي/,'painting'],
    [/تمثال|منحوتة|نحت|منحوتات/,'sculpture'],
    [/نار|حريق|لهب|اشتعال/,'fire'],
    [/رجل إطفاء|إطفائي|رجال الإطفاء|مطافئ/,'firefighter'],
    [/موقع بناء|ورشة بناء|عامل بناء|إنشاءات/,'construction'],
    [/أدوات|عدة|مطرقة|مفك|معدات يدوية/,'tools'],
    [/بنك|مصرف|مصرفي|حساب بنكي|صراف/,'bank'],
    [/بريد|مكتب بريد|طرد بريدي|رسالة بريدية/,'postOffice'],
    [/زفاف|عرس|حفل زواج|عروس|عريس/,'wedding'],
    [/طفل رضيع|رضيع|مولود|طفلة رضيعة/,'baby'],
    [/شروق الشمس|شروق|الفجر|طلوع الشمس/,'sunrise'],
    [/مطر|أمطار|ممطر|قطرات المطر/,'rain'],
    [/ثلج|تساقط الثلوج|ثلوج|جليد/,'snow'],
    [/مظلة|شمسية|شمسية المطر/,'umbrella'],
    [/صحراء|رمال|كثبان رملية/,'desert'],
    [/شلال|شلالات/,'waterfall'],
    [/جزيرة|جزر|شاطئ جزيرة/,'island'],
    [/تخييم|مخيم|معسكر|رحلة تخييم/,'camping'],
    [/خيمة|خيام/,'tent'],
    [/حديقة منزلية|بستان|حديقة زهور|بستنة|زراعة منزلية/,'garden'],
    [/مدرسة|مدرسة|مدارس|تلميذ|طالب|طلاب|تعليم|تعلم|تعليمية/,'school'],
    [/فصل|فصل دراسي|قاعة درس|سبورة|مدرس|معلم|معلمة|درس|دروس/,'classroom'],
    [/حاسوب|كمبيوتر|حاسب|لابتوب|حاسوب محمول|شاشة|لوحة مفاتيح/,'laptop'],
    [/مكتب|مكتب عمل|شركة|موظف|اجتماع|زميل عمل|وظيفة|عمل مكتبي/,'office'],
    [/سوق|أسواق|بقالة|سوبر ماركت|متجر|تسوق|خضار وفاكهة|بائع/,'market'],
    [/مطعم|مطاعم|نادل|قائمة الطعام|منيو|حجز طاولة/,'restaurant'],
    [/مكتبة|مكتبات|استعارة كتاب|رف كتب|أمين مكتبة/,'library'],
    [/حديقة|منتزه|متنزه|حدائق|عشب|نزهة/,'park'],
    [/جبل|جبال|قمة|تسلق الجبال/,'mountain'],
    [/دراجة|دراجة هوائية|عجلة|ركوب الدراجة/,'bicycle'],
    [/كرة قدم|كرة القدم|ملعب كرة|لاعب كرة/,'soccer'],
    [/موسيقى|موسيقي|أغنية|أغاني|آلة موسيقية|عزف/,'music'],
    [/مطبخ|طهي|طبخ|يطبخ|طباخ|موقد|فرن/,'kitchen'],
    [/زهرة|زهور|وردة|ورود|باقة زهور/,'flowers'],
    [/طائر|طيور|عصفور|عصافير/,'bird'],
    [/مزرعة|مزارع|حقل|حقول|محصول|جرار زراعي/,'farm'],
    [/نهر|أنهار|ضفة النهر|مجرى مائي/,'river'],
    [/غابة|غابات|أشجار|شجرة|أشجار كثيفة/,'forest'],
    [/متحف|متاحف|معرض فني|آثار|قطعة أثرية/,'museum'],
    [/حلاق|حلاقة|صالون|مصفف شعر|تصفيف الشعر/,'hairdresser'],
    [/متجر ملابس|محل ملابس|بوتيك|ملابس معروضة/,'clothesStore'],
    [/صالة رياضة|جيم|نادي رياضي|تمارين|رفع الأثقال|لياقة بدنية/,'gym'],
    [/سباحة|مسبح|حمام سباحة|سباح|سباحون/,'swimming'],
    [/كرة سلة|كرة السلة|ملعب كرة السلة/,'basketball'],
    [/جواز سفر|جواز|باسبور|وثيقة سفر|وثائق السفر/,'passport'],[/شرطة|الشرطة|قسم الشرطة|مركز الشرطة|شرطي|ضابط شرطة/,'police'],[/تسجيل الدخول|تسجيل المغادرة|تسجيل الوصول|تسجيل الخروج|حجز|حجزي|الاستقبال|موظف الاستقبال|سأقيم في فندق|فندق|فنادق|الفنادق/,'hotelReception'],[/ملصق الأمتعة|ملصق الحقيبة|بطاقة الأمتعة|بطاقة الحقيبة/,'luggageTag'],[/بوابة الصعود|بوابة الطائرة|بوابة المغادرة/,'boardingGate'],[/مرحاض|حمام|الحمّام|الحمام|دورة المياه|الحمّامات|الحمامات|حمّام/,'bathroom'],[/مرحبًا|مرحبا|أهلًا|اهلا|صباح الخير|مساء الخير|مع السلامة|إلى اللقاء|تشرفت بمعرفتك|تحية/,'greeting'],[/اسم الحرف|الحروف الأبجدية|الأبجدية/,'alphabet'],[/علامة الترقيم|علامة على|علامة acute|علامة circumflex|النبر|فاصلة|نقطة|علامة تعجب|علامة استفهام|الترقيم|خبرة|مهارة|خطة|حل|حدث بدأ في الماضي|الماضي ولسه مستمر/,'writing'],[/اسمي|ما اسمك|أنا من مصر|من فضلك|شكرًا|شكرا|آسف|معلش|بعد إذنك|هل تتكلم|تتكلم الإنجليزية|تتكلم ببطء|لم أفهم|كل شيء تمام|وأنت|سعيد بمعرفتك|مزحة|نكتة|دعابة/,'conversation'],[/^(?:صفر|واحد|اثنان|ثلاثة|أربعة|خمسة|عشرة|عشرون)$|كم عمرك|عمري \d+/,'numbers'],[/سير استلام الأمتعة|سير الحقائب|سير الحقائب بالمطار|استلام الأمتعة|استلام الحقائب/,'baggageCarousel'],[/بطاقة الغرفة|مفتاح الغرفة|كارت الغرفة|كارت مفتاح الفندق/,'hotelKeyCard'],[/بطاقة صعود الطائرة|بطاقة الصعود|بطاقة الركوب|كارت صعود الطائرة/,'airplane'],[/بطاقة ائتمان|بطاقة ائتمانية|بطاقة بنكية|بطاقة مصرفية|كارت بنكي|كارت ائتمان|بطاقة الدفع/,'paymentCard'],[/صيدلية|صيدليات|صيدلي|صيدلانية/,'pharmacy'],[/مستشفى|مستشفيات/,'hospitalBuilding'],[/طبيب|دكتور|ممرضة|ممرض/,'doctor'],[/دواء|أدوية|علاج|أقراص|حبوب دواء|دواء الصيدلية/,'medicine'],[/طقس|الطقس|توقعات الطقس|غائم|مطر|ممطر|عاصفة|سحب|غيوم|بارد|برد|برودة|الجو بارد/,'weather'],[/طاولة|ترابيزة/,'table'],
    [/قهوة|كافيه|مقهى|إسبريسو|لاتيه/,'coffee'],[/شاي|كوب شاي|فنجان شاي/,'tea'],[/ماء|ميه|مياه|عطش|زجاجة ماء|ازازة مياه/,'water'],[/عصير|ليمونادة|مشروب فاكهة/,'juice'],[/سمك|سمكة|أسماك/,'fish'],[/نبيذ|خمر|خمور/,'wine'],[/فاكهة|فواكه|موز|عنب|كمثرى|كيوي|مانجو|برتقال/,'fruit'],[/خضار|خضروات|بروكلي|جزر|طماطم|فلفل|خيار|خس/,'vegetables'],[/جبن|جبنة|أجبان/,'cheese'],[/ألوان|لون|أصفر|بنفسجي|وردي|رمادي|بني|برتقالي|أزرق|أسود|أحمر|أبيض|أخضر/,'colors'],
    [/نقود|فلوس|مال|نقود كاش|كاش|نقد|محفظة|سعر|ثمن|بكام|رخيص|غالي|دفع|يدفع|شراء|بيع|الحساب|إيصال|فاتورة|باقي الحساب/,'money'],[/هاتف|تليفون|موبايل|جوال|اتصال|مكالمة|رسالة نصية/,'phone'],
    [/خبز|عيش|مخبز|رغيف|توست/,'bread'],[/بيض|بيضة|بيضه/,'egg'],[/حذاء|جزمة|أحذية|كوتشي|حذاء رياضي|حذاء رسمي/,'shoes'],[/قلم|كتابة|يكتب|دفتر|كراسة|ورقة|مذكرات/,'writing'],[/تفاح|تفاحة/,'apple'],
    [/بيت|منزل|سكن|غرفة|باب|مفتاح|فندق|شقة|مطبخ|حمام|مرحاض|دورة المياه|غرفتك|غرفتي/,'house'],[/طائرة|طيران|مطار|رحلة|طيارة|إقلاع|هبوط/,'airplane'],
    [/سيارة|عربية|تاكسي|كاب|سائق|أوبر/,'taxi'],[/سير استلام الأمتعة|سير الحقائب|استلام الأمتعة|استلام الحقائب/,'baggageCarousel'],[/حقيبة سفر|شنطة|أمتعة|حقائب|أمتعة السفر/,'luggage'],[/قطار|مترو|محطة قطار|محطة المترو|سكة حديد/,'train'],[/حافلة|أتوبيس|باص|محطة حافلات/,'bus'],[/بحر|محيط|شاطئ|شاطىء|جزيرة|ساحل/,'beach'],
    [/طعام|أكل|وجبة|مطعم|غداء|عشاء|لحم|فطور|إفطار|غذاء|طبق|وجبات|كيلو|فراخ|دجاج|دجاجة/,'meal'],[/مدينة|شارع|طريق|مباني|وسط المدينة|الحي|الجوار|الحديقة|متحف/,'city'],[/طبيب|دكتور|صحة|مرض|مستشفى|عيادة|صيدلية|دواء|ممرضة|صداع|نزلة برد|الألم|دوخة|الكشف/,'doctor'],
    [/قطة|قط|قطه|قطط/,'cat'],[/كلب|جرو|كلاب/,'dog'],[/فول سوداني|الفول السوداني|فستق سوداني|مكسرات/,'peanuts'],[/لبن|حليب|لبن كامل|كوب لبن/,'milk'],[/ليمون|ليمونة|ليمونادة/,'lemon'],[/قلب|قلبي|القلب|قلوب/,'heart'],[/أم|الأم|أبي|الأب|أب|عائلة|عائلتي|أخي|أختي|أسرة|أسرتي|أمي|أمك|أبوك|والدان|والدي|عائلتك|ابن|ابنة|ولد|بنت|جد|جدة|زوج|زوجة|جوز|مراتي|زوجي|زوجتي|عم|خال|عمة|خالة/,'family'],[/صديق|صديقة|أصدقاء|صديقات|أصحاب|صاحبي|أصحابي/,'friends'],[/يد|اليد|أيدي|يدين|كف اليد|كف/,'hand'],[/ساعة|الساعة|وقت|الآن|اليوم|غدًا|بكرة|صباحًا|مساءً|بعد الظهر|موعد|مواعيد|تاريخ|توقيت|دقيقة|دقائق|يناير|فبراير|مارس|أبريل|ابريل|مايو|يونيو|يوليو|أغسطس|اغسطس|سبتمبر|أكتوبر|اكتوبر|نوفمبر|ديسمبر/,'clock'],[/يمين|يسار|انعطف|اتجه|اتجاه|ناصية|تقاطع|مدخل|مخرج|قريب من هنا|بعيد|خريطة|لافتة|إشارة مرور/,'directions'],[/إسعاف|إسعافًا|طوارئ|نجدة|حادث|مساعدة عاجلة/,'ambulance'],[/ملابس|قميص|بنطلون|فستان|تنورة|جاكيت|سترة|جوارب|ملابس|مقاس|مقاسي|لون آخر|تجربة الملابس|أجرّب|أقيس/,'clothing'],[/كتاب|كتب|قراءة|مدرسة|جامعة|مكتبة/,'books']
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
    [/(?:família|mãe|mamã|pai|papá|pais|irmã|irmão|avó|avô|menino|menina)/i,'family'],[/(?:amigo|amiga|amigos|amigas)/i,'friends'],[/(?:relógio|hora|minuto|minutos)/i,'clock'],
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
    var rawMeaning=String(meaning||'').trim(),rawWord=String(word||'').trim();
    // Pronouns are abstract concepts: never assign an unrelated animal or object photo.
    var meaningPlain=rawMeaning.replace(/[()؟?!،,:؛]/g,' ').replace(/\s+/g,' ').trim();
    var pronounMeaning=/(?:^|\s)(?:أنت|أنتَ|أنتِ|انت|انتا|إنت|إنتَ|إنتِ)(?:\s|$)/i.test(meaningPlain);
    var pronounWord=/^(?:you|your|yours|yourself|você|vocês|tu|te|ti|usted|ustedes|tú|vosotros|vosotras|vous|toi|du|dich|ihr|sie|ты|вы|тебя|тебе|вас|lei|voi)$/i.test(rawWord);
    if(pronounMeaning||pronounWord)return null;
    // Brazilian Portuguese: avoid reusing a stationery photo for the literal word “mão”.
    if(lang==='pt-BR'&&/^(?:irmão|irmã|irmãos|irmãs)$/i.test(rawWord))return photos.family;
    var s=String(meaning||'');
    for(var i=0;i<rules.length;i++)if(rules[i][0].test(s))return photos[rules[i][1]];
    // Shared semantic vocabulary: one concept uses one existing photo across every academy.
    // Match the source-language word only after the Arabic meaning has had priority.
    var target=String(word||'');
    var targetTrimmed=target.trim();
    if((lang==='en'&&/^(?:broken|damaged|out of order)$/i.test(targetTrimmed))||
       (lang==='it'&&/^(?:rotto|guasto)$/i.test(targetTrimmed))||
       (lang==='es'&&/^(?:estropeado|averiado)$/i.test(targetTrimmed))||
       (lang==='fr'&&/^(?:en panne|cassé|cassée)$/i.test(targetTrimmed))||
       (lang==='de'&&/^(?:kaputt|defekt)$/i.test(targetTrimmed))||
       (lang==='ru'&&/^(?:сломанный|сломалась|сломался|не работает)$/i.test(targetTrimmed))||
       (lang==='pt-BR'&&/^(?:quebrado|quebrada|estragado|estragada)$/i.test(targetTrimmed))||
       (lang==='pt-PT'&&/^(?:avariado|avariada|estragado|estragada)$/i.test(targetTrimmed)))return photos.brokenItem;
    var sharedMeaningRules=[
      [/^(?:car|coche|voiture|auto|машина|macchina|carro)$/i,'car'],
      [/^(?:motorcycle|motorbike|moto|motocicleta|motorrad|мотоцикл|motocicletta|motociclo)$/i,'motorcycle'],
      [/^(?:bed|cama|lit|bett|кровать|letto)$/i,'bed'],
      [/^(?:sofa|couch|sofá|canapé|диван|divano)$/i,'sofa'],
      [/^(?:window|ventana|fenêtre|fenster|окно|finestra|janela)$/i,'window'],
      [/^(?:door|puerta|porte|tür|дверь|porta)$/i,'door'],
      [/^(?:toothbrush|cepillo de dientes|brosse à dents|zahnbürste|зубная щётка|spazzolino|escova de dentes)$/i,'toothbrush'],
      [/^(?:soap|jabón|savon|seife|мыло|sapone|sabão)$/i,'soap'],
      [/^(?:towel|toalla|serviette|handtuch|полотенце|asciugamano|toalha)$/i,'towel'],
      [/^(?:plate|plato|assiette|teller|тарелка|piatto|prato)$/i,'plate'],
      [/^(?:cup|mug|taza|tasse|чашка|tazza|chávena)$/i,'cup'],
      [/^(?:fridge|refrigerator|nevera|réfrigérateur|kühlschrank|холодильник|frigorifero|frigorífico)$/i,'fridge'],
      [/^(?:washing machine|lavadora|machine à laver|waschmaschine|стиральная машина|lavatrice|máquina de lavar)$/i,'washingMachine'],
      [/^(?:iron|ironing|plancha|fer à repasser|bügeleisen|утюг|ferro de engomar)$/i,'iron'],
      [/^(?:hat|cap|sombrero|chapeau|hut|шляпа|cappello|chapéu)$/i,'hat'],
      [/^(?:glasses|eyeglasses|gafas|lunettes|brille|очки|occhiali|óculos)$/i,'glasses'],
      [/^(?:camera|cámara|appareil photo|kamera|камера|macchina fotografica|câmara)$/i,'camera'],
      [/^(?:guitar|guitarra|guitare|gitarre|гитара|chitarra)$/i,'guitar'],
      [/^(?:piano|klavier|пианино|pianoforte)$/i,'piano'],
      [/^(?:microphone|micrófono|micro|mikrofon|микрофон|microfono|microfone)$/i,'microphone'],
      [/^(?:painting|cuadro|peinture|gemälde|картина|dipinto|pintura)$/i,'painting'],
      [/^(?:sculpture|escultura|skulptur|скульптура|scultura)$/i,'sculpture'],
      [/^(?:fire|fuego|feu|feuer|огонь|fuoco|fogo)$/i,'fire'],
      [/^(?:firefighter|bombero|pompier|feuerwehrmann|пожарный|pompiere|bombeiro)$/i,'firefighter'],
      [/^(?:construction|building site|obra|chantier|baustelle|стройка|cantiere|construção)$/i,'construction'],
      [/^(?:tools|herramientas|outils|werkzeuge|инструменты|attrezzi|ferramentas)$/i,'tools'],
      [/^(?:bank|banco|banque|bank|банк|banca)$/i,'bank'],
      [/^(?:post office|correo|oficina de correos|poste|postamt|почта|ufficio postale|correios)$/i,'postOffice'],
      [/^(?:wedding|boda|mariage|hochzeit|свадьба|matrimonio|casamento)$/i,'wedding'],
      [/^(?:baby|infant|bebé|bébé|младенец|neonato)$/i,'baby'],
      [/^(?:sunrise|amanecer|lever du soleil|sonnenaufgang|рассвет|alba|nascer do sol)$/i,'sunrise'],
      [/^(?:rain|lluvia|pluie|regen|дождь|pioggia|chuva)$/i,'rain'],
      [/^(?:snow|nieve|neige|schnee|снег|neve)$/i,'snow'],
      [/^(?:umbrella|paraguas|parapluie|regenschirm|зонт|ombrello|guarda-chuva)$/i,'umbrella'],
      [/^(?:desert|desierto|désert|wüste|пустыня|deserto)$/i,'desert'],
      [/^(?:waterfall|cascada|cascade|wasserfall|водопад|cascata)$/i,'waterfall'],
      [/^(?:island|isla|île|insel|остров|isola|ilha)$/i,'island'],
      [/^(?:camping|campamento|camping|кемпинг|campeggio)$/i,'camping'],
      [/^(?:tent|tienda de campaña|tente|zelt|палатка|tenda)$/i,'tent'],
      [/^(?:garden|jardín|jardin|garten|сад|giardino|jardim)$/i,'garden'],
      [/^(?:school|escuela|école|schule|школа|scuola|escola)$/i,'school'],
      [/^(?:classroom|class|aula|salle de classe|Klassenzimmer|класс|aula|sala de aula)$/i,'classroom'],
      [/^(?:computer|laptop|ordenador|computadora|ordinateur|Computer|компьютер|computer|computador)$/i,'laptop'],
      [/^(?:office|oficina|bureau|Büro|офис|ufficio|escritório)$/i,'office'],
      [/^(?:market|mercado|marché|Markt|рынок|mercato)$/i,'market'],
      [/^(?:restaurant|restaurante|restaurant|Restaurant|ресторан|ristorante)$/i,'restaurant'],
      [/^(?:library|biblioteca|bibliothèque|Bibliothek|библиотека|biblioteca)$/i,'library'],
      [/^(?:park|parque|parc|Park|парк|parco)$/i,'park'],
      [/^(?:mountain|montaña|montagne|Berg|гора|montagna|montanha)$/i,'mountain'],
      [/^(?:bicycle|bike|bicicleta|vélo|Fahrrad|велосипед|bicicletta)$/i,'bicycle'],
      [/^(?:soccer|football|fútbol|football|Fußball|футбол|calcio|futebol)$/i,'soccer'],
      [/^(?:music|música|musique|Musik|музыка|musica)$/i,'music'],
      [/^(?:kitchen|cocina|cuisine|Küche|кухня|cucina)$/i,'kitchen'],
      [/^(?:flower|flowers|flor|flores|fleur|fleurs|Blume|Blumen|цветок|цветы|fiore|fiori)$/i,'flowers'],
      [/^(?:bird|birds|pájaro|pájaro|oiseau|Vogel|птица|птицы|uccello|pássaro)$/i,'bird'],
      [/^(?:farm|granja|ferme|Bauernhof|ферма|fattoria|quinta)$/i,'farm'],
      [/^(?:river|río|fleuve|Fluss|река|fiume|rio)$/i,'river'],
      [/^(?:forest|bosque|forêt|Wald|лес|foresta|floresta)$/i,'forest'],
      [/^(?:museum|museo|musée|Museum|музей|museo)$/i,'museum'],
      [/^(?:hairdresser|barber|peluquería|coiffeur|Friseur|парикмахер|parrucchiere|cabeleireiro)$/i,'hairdresser'],
      [/^(?:clothing store|clothes shop|tienda de ropa|magasin de vêtements|Kleidungsgeschäft|магазин одежды|negozio di abbigliamento|loja de roupa)$/i,'clothesStore'],
      [/^(?:gym|fitness|gimnasio|salle de sport|Fitnessstudio|спортзал|palestra|academia)$/i,'gym'],
      [/^(?:swimming|pool|natación|natation|Schwimmen|плавание|nuoto|natação)$/i,'swimming'],
      [/^(?:basketball|baloncesto|basket|basket-ball|Basketball|баскетбол|pallacanestro|basquetebol)$/i,'basketball'],
      [/^(?:house|home|casa|hogar|maison|haus|дом|lar|moradia|appartamento|wohnung)$/i,'house'],
      [/^(?:water|agua|eau|wasser|вода|acqua|água)$/i,'water'],
      [/^(?:cat|gato|chat|katze|кошка|кошка|gatto|gata)$/i,'cat'],
      [/^(?:dog|perro|chien|hund|собака|cane|cão|cao)$/i,'dog'],
      [/^(?:coffee|café|cafe|kaffee|кофе|caffè)$/i,'coffee'],
      [/^(?:tea|thé|tee|чай|tè)$/i,'tea'],
      [/^(?:bread|pan|pain|brot|хлеб|pane|pão|pao)$/i,'bread'],
      [/^(?:apple|manzana|pomme|apfel|яблоко|mela|maçã|maca)$/i,'apple'],
      [/^(?:taxi|taxi|taxi|taxi|такси|taxi|táxi|taxi)$/i,'taxi'],
      [/^(?:bus|autobús|autobus|autocar|автобус|autobus|ônibus|onibus)$/i,'bus'],
      [/^(?:train|tren|train|zug|поезд|treno|comboio)$/i,'train'],
      [/^(?:beach|playa|plage|strand|пляж|spiaggia|praia)$/i,'beach'],
      [/^(?:book|libro|livre|buch|книга|libro|livro)$/i,'books'],
      [/^(?:phone|teléfono|téléphone|telefon|телефон|telefono|telemóvel|telemovel)$/i,'phone'],
      [/^(?:money|dinero|argent|geld|деньги|soldi|dinheiro)$/i,'money'],
      [/^(?:family|familia|famille|familie|семья|famiglia)$/i,'family'],
      [/^(?:son|daughter|filho|filha|figlio|figlia|hijo|hija|fils|fille|sohn|tochter|сын|дочь)$/i,'family'],
      [/^(?:friend|friends|amigo|amiga|amigos|amigas|ami|amis|freund|freunde|друг|друзья|amico|amica|amici|amiche)$/i,'friends'],
      [/^(?:hand|hands|mano|manos|main|mains|hände|рука|руки|mão|mãos)$/i,'hand'],
      [/^(?:lamp|lamps|lâmpada|lâmpadas|lámpara|lampe|лампа)$/i,'lamp'],
      [/^(?:morning|mañana|matin|morgen|утро|mattina|manhã)$/i,'sunrise'],
      [/^(?:doctor|médico|medico|médecin|arzt|врач|medico)$/i,'doctor'],
      [/^(?:book|libro|livre|buch|книга|livro)$/i,'books'],
      [/^(?:apartment|flat|appartamento|wohnung|apartamento)$/i,'house'],
      [/^(?:orange|banana|grape|pear|mango|naranja|plátano|uva|pera|mangue|oranje|banane|traube|birne|апельсин|банан|виноград|груша|arancia|banana|uva|pera|laranja|banana|uva|pera)$/i,'fruit'],
      [/^(?:tomato|carrot|potato|onion|lettuce|cucumber|tomate|zanahoria|patata|cebolla|tomate|carotte|pomme de terre|oignon|tomate|karotte|kartoffel|zwiebel|помидор|морковь|картофель|лук|pomodoro|carota|patata|cipolla|tomate|cenoura|batata|cebola)$/i,'vegetables'],
      [/^(?:chicken|meat|poultry|poulet|viande|pollo|carne|huhn|fleisch|курица|мясо|frango)$/i,'meal'],
      [/^(?:airport|airplane|plane|flight|aéroport|avión|aeropuerto|flughafen|flugzeug|самолёт|аэропорт|aeroporto|aereo)$/i,'airplane'],
      [/^(?:suitcase|luggage|bag|valise|equipaje|koffer|багаж|чемодан|valigia|mala|bagagem)$/i,'luggage'],
      [/^(?:shirt|trousers|pants|dress|jacket|clothes|chemise|pantalon|robe|vêtements|hemd|hose|kleid|kleidung|рубашка|брюки|платье|одежда|camicia|pantaloni|vestito|roupa)$/i,'clothing'],
      [/^(?:city|ville|ciudad|stadt|город|città|cidade)$/i,'city'],
      [/^(?:clock|watch|horloge|uhr|часы|orologio|relógio)$/i,'clock'],
      [/^(?:direction|map|carte|dirección|mapa|richtung|karte|направление|direzione|mappa|direção)$/i,'directions'],
      [/^(?:table|desk|mesa|table|tisch|стол|tavolo|mesa)$/i,'table'],
      [/^(?:egg|eggs|œuf|huevo|ei|яйцо|uovo|ovo)$/i,'egg'],
      [/^(?:shoe|shoes|sneaker|chaussure|zapato|schuh|обувь|scarpa|sapato)$/i,'shoes'],
      [/^(?:lemon|citron|limón|zitrone|лимон|limone|limão)$/i,'lemon'],
      [/^(?:milk|lait|leche|milch|молоко|latte|leite)$/i,'milk'],
      [/^(?:juice|jus|zumo|saft|сок|succo|sumo)$/i,'juice'],
      [/^(?:heart|cœur|corazón|herz|сердце|cuore|coração)$/i,'heart']
    ];
    for(var sm=0;sm<sharedMeaningRules.length;sm++)if(sharedMeaningRules[sm][0].test(target.trim()))return photos[sharedMeaningRules[sm][1]];
    if(/^\d+$/.test(target))return photos.numbers;
    if(/(?:january|february|march|april|may|june|july|august|september|october|november|december|gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre|enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre|januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember|январь|февраль|март|апрель|май|июнь|июль|август|сентябрь|октябрь|ноябрь|декабрь|janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i.test(target))return photos.clock;
    if(/(?:\b(?:red|blue|green|yellow|purple|pink|grey|gray|brown|orange|black|white)\b|rosso|blu|verde|giallo|viola|rosa|grigio|marrone|arancione|nero|bianco|rojo|azul|amarillo|morado|gris|marrón|naranja|negro|blanco|rouge|bleu|jaune|violet|marron|noir|blanc|rot|grün|gelb|lila|grau|braun|schwarz|weiß|красный|синий|зелёный|желтый|фиолетовый|розовый|серый|коричневый|оранжевый|чёрный|белый|vermelho|amarelo|roxo|cinza|marrom|laranja|preto)/i.test(target))return photos.colors;
    if(/(?:\b(?:fish|salmon|seafood)\b|pesce|pescado|poisson|fisch|рыба|peixe)/i.test(target))return photos.fish;
    if(/(?:\b(?:wine|red wine)\b|vino|vin|wein|vinho|вино)/i.test(target))return photos.wine;
    if(/(?:\b(?:fruit|fruits|banana|grapes?|pear|kiwi|mango)\b|frutta|frutto|frutas|fruta|fruité|obst|фрукты|фрукт|fruta)/i.test(target))return photos.fruit;
    if(/(?:\b(?:vegetables?|broccoli|carrot|lettuce|tomato|cucumber)\b|verdure|verdura|vegetales|légumes|gemüse|овощи|legumes)/i.test(target))return photos.vegetables;
    if(/(?:\b(?:cheese|cheddar|brie)\b|formaggio|queso|fromage|käse|сыр|queijo)/i.test(target))return photos.cheese;
    if(/(?:\b(?:tennis|tennis racket)\b|tennis|raqueta de tenis|raquette de tennis|tennisschläger|ракетка)/i.test(target))return photos.tennis;
    if(lang==='en'&&/(?:boy|girl|son|daughter|grandfather|grandmother|husband|wife|uncle|aunt)/i.test(target))return photos.family;
    if(lang==='en'&&/(?:chicken)/i.test(target))return photos.meal;
    if(lang==='en'&&/^(?:I|you|he|she|we|they|yes|no|okay|sure)$/i.test(target)||lang==='en'&&/(?:see you soon|you're welcome|you are welcome|i need help|could you help me|sure|awesome|honestly|no biggie|whatever)/i.test(target))return photos.conversation;
    if(lang==='en'&&/(?:can i see the menu|menu)/i.test(target))return photos.meal;
    if(lang==='en'&&/(?:i'm flying|flying to|flight)/i.test(target))return photos.airplane;
    if(lang==='en'&&/(?:i can swim|swim)/i.test(target))return photos.beach;
    if(lang==='en'&&/(?:seatbelt|seat belt)/i.test(target))return photos.taxi;
    if(lang==='en'&&/(?:played tennis)/i.test(target))return photos.tennis;
    if(/\b(?:my name is|what is your name|please|thank you|sorry|excuse me|do you speak|speak slowly|i don't understand|how are you|and you|nice to meet you|preciso de ajuda)\b|(?:meu nome é|como você se chama|eu sou do egito|por favor|obrigado|obrigada|desculpa|com licença|você fala|pode falar devagar|não entendi|tudo bem|e você|muito prazer|você se chama|bater papo|pode reformular|deixa eu reformular|como é mesmo|em outras palavras|do meu ponto de vista|por outro lado|eu te aviso)/i.test(target))return photos.conversation;
    if(/^[A-Z]\s*[—-]/.test(target))return photos.alphabet;
    if(lang==='pt-BR'&&/^(?:hoje|vida)$/i.test(target))return photos.alphabet;
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
    if(lang==='it'&&/(?:svegliarsi|la prossima settimana|prima|dopo|all'improvviso|infine|in anticipo|innanzitutto|la settimana prossima)/i.test(target))return photos.clock;
    if(lang==='it'&&/(?:il compito|lo stage|la candidatura|la fonte|la domanda|il documento|un'affermazione|una richiesta|riferire|secondo|riguardo a|inoltre|in conclusione|un vantaggio|affidabile|un'esperienza)/i.test(target))return photos.writing;
    if(lang==='it'&&/(?:socievole|un malinteso|scusarsi|chiarire|condividere|vorrei)/i.test(target))return photos.conversation;
    if(lang==='es'&&/(?:despertarse|la semana que viene|primero|después|de repente|por fin|de antemano|en primer lugar)/i.test(target))return photos.clock;
    if(lang==='es'&&/(?:la experiencia|la tarea|las prácticas|la candidatura|la fuente|la solicitud|el justificante|una declaración|una consulta|contar|según|con respecto a|además|en conclusión|una ventaja|fiable)/i.test(target))return photos.writing;
    if(lang==='es'&&/(?:quisiera|amable|compartir|un malentendido|disculparse|aclarar)/i.test(target))return photos.conversation;
    if(lang==='fr'&&/(?:se lever|la semaine prochaine|d'abord|ensuite|soudain|finalement|à l'avance|tout d'abord)/i.test(target))return photos.clock;
    if(lang==='fr'&&/(?:la tâche|le stage|l'examen|une candidature|une source|un dossier|une déclaration|une demande|raconter|selon|concernant|en outre|en conclusion|un avantage|fiable|une expérience)/i.test(target))return photos.writing;
    if(lang==='fr'&&/(?:je voudrais|accueillant|un malentendu|s'excuser|clarifier|partager)/i.test(target))return photos.conversation;
    if(lang==='de'&&/(?:aufstehen|zuerst|danach|nächste Woche|plötzlich|schließlich|im Voraus|zunächst)/i.test(target))return photos.clock;
    if(lang==='de'&&/(?:die Aufgabe|zuständig|die Bewerbung|die Quelle|die Aussage|die Unterlage|der Antrag|beantragen|berichten|bezüglich|zusammenfassen|Erfahrung|der Zusammenhang|zuverlässig)/i.test(target))return photos.writing;
    if(lang==='de'&&/(?:ich möchte|freundlich|Missverständnis|sich entschuldigen|klären)/i.test(target))return photos.conversation;
    if(lang==='pt-PT'&&/(?:acordar|primeiro|depois|na próxima semana|de repente|por fim|antecipadamente|em primeiro lugar)/i.test(target))return photos.clock;
    if(lang==='pt-PT'&&/(?:a experiência|a tarefa|o estágio|a candidatura|a fonte|o pedido|o comprovativo|uma declaração|relatar|segundo|relativamente a|além disso|em conclusão|uma vantagem|fiável)/i.test(target))return photos.writing;
    if(lang==='pt-PT'&&/(?:queria|simpático|mal-entendido|esclarecer)/i.test(target))return photos.conversation;
    if(/^[А-ЯЁ]$/.test(target))return photos.alphabet;
    if(lang==='ru'&&/(?:словарь|читать)/i.test(target))return photos.books;
    if(lang==='ru'&&/(?:спасибо|хорошо|как дела|помогите|извините)/i.test(target))return photos.conversation;
    if(lang==='ru'&&/(?:алло|слушаю|перезвоню|линия занята)/i.test(target))return photos.phone;
    if(lang==='ru'&&/(?:плавать)/i.test(target))return photos.swimming;
    if(lang==='ru'&&/(?:солнце)/i.test(target))return photos.sunrise;
    if(lang==='ru'&&/(?:ветер)/i.test(target))return photos.weather;
    if(lang==='ru'&&/(?:экзамен)/i.test(target))return photos.classroom;
    if(lang==='ru'&&/(?:болит|кашель)/i.test(target))return photos.doctor;
    if(lang==='ru'&&/(?:дешевле)/i.test(target))return photos.money;
    if(lang==='ru'&&/(?:днём|неделя)/i.test(target))return photos.clock;
    if(lang==='ru'&&/(?:путешествовать|лететь)/i.test(target))return photos.airplane;
    if(lang==='ru'&&/(?:ехать)/i.test(target))return photos.bus;
    if(lang==='ru'&&/(?:умываться)/i.test(target))return photos.shower;
    if(lang==='ru'&&/(?:ложиться)/i.test(target))return photos.bed;
    if(lang==='ru'&&/(?:открыть|закрыть)/i.test(target))return photos.door;
    if(lang==='ru'&&/(?:спорт)/i.test(target))return photos.gym;
    if(lang==='ru'&&/(?:коммунальные услуги)/i.test(target))return photos.house;
    if(lang==='ru'&&/(?:понедельник|вторник|среда|четверг|пятница|суббота|воскресенье|обычно|просыпаться|однажды|сначала|потом)/i.test(target))return photos.clock;
    if(lang==='ru'&&/(?:этаж|аренда|ремонт|сломался)/i.test(target))return photos.house;
    if(lang==='ru'&&/(?:вкусный|без сахара|я буду)/i.test(target))return photos.meal;
    if(lang==='ru'&&/(?:сколько стоит|скидка|зарплата)/i.test(target))return photos.money;
    if(lang==='ru'&&/(?:прямо)/i.test(target))return photos.directions;
    if(lang==='ru'&&/(?:площадь|гулять|ходить)/i.test(target))return photos.city;
    if(lang==='ru'&&/(?:жарко|температура|весна|лето|осень|зима)/i.test(target))return photos.weather;
    if(lang==='ru'&&/(?:билет)/i.test(target))return photos.train;
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
    if(lang==='pt-BR'&&/(?:você deve descansar|eu me sinto bem)/i.test(target))return null;
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
    if(lang==='pt-BR'&&/(?:^os amigos$|^as amigas$|somos amigos|amigos|amigas)/i.test(target))return photos.friends;
    if(lang==='pt-BR'&&/(?:hotéis|hoteis)/i.test(target))return photos.hotelReception;
    if(lang==='pt-BR'&&/(?:se fizer frio)/i.test(target))return photos.weather;
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
    if(lang==='ru'&&/^учёба$/i.test(target.trim()))return photos.school;
    if(lang==='ru')for(var r=0;r<russianRules.length;r++)if(russianRules[r][0].test(target))return photos[russianRules[r][1]];
    if(lang==='pt-BR'&&/(?:reembolso|cobrança indevida|dinheiro|pagamento|cobrança)/i.test(target))return photos.money;
    if(lang==='pt-BR'&&/(?:na sua situação|não era bem isso|puxar assunto|falar pelos cotovelos|na ponta da língua|me manda)/i.test(target))return photos.conversation;
    if(lang==='pt-BR'&&/^(?:aqui|ali|perto)$/i.test(target.trim()))return photos.directions;
    if(lang==='pt-BR'&&/^(?:manhã)$/i.test(target.trim()))return photos.sunrise;
    if(lang==='pt-BR'&&/^(?:filho|filha)$/i.test(target.trim()))return photos.family;
    if(lang==='pt-BR'&&/^(?:lâm-pa-da|lâmpada)$/i.test(target.trim()))return photos.lamp;
    if(lang==='pt-BR'&&/^(?:falar|eu falo|falar com ele|pode me ajudar\?|não entendo\.)$/i.test(target.trim()))return photos.conversation;
    if(lang==='pt-BR'&&/^(?:eu como)$/i.test(target.trim()))return photos.meal;
    if(lang==='pt-BR'&&/^(?:abrir|eu abro|vocês abrem)$/i.test(target.trim()))return photos.door;
    if(lang==='pt-BR'&&/^(?:os amigos|as amigas|somos amigos|amigos|amigas)$/i.test(target.trim()))return photos.friends;
    
    if(lang==='pt-BR')for(var b=0;b<brazilianPortugueseRules.length;b++)if(brazilianPortugueseRules[b][0].test(target))return photos[brazilianPortugueseRules[b][1]];
    if(lang==='pt-PT')for(var p=0;p<europeanPortugueseRules.length;p++)if(europeanPortugueseRules[p][0].test(target))return photos[europeanPortugueseRules[p][1]];

    var newPhotoRules=[
      [/(?:bakery|padaria|panetteria|panadería|boulangerie|Bäckerei|пекарня)/i,'bakery'],
      [/(?:butcher|açougue|macelleria|carnicería|boucherie|Metzgerei|мясная лавка)/i,'butcher'],
      [/(?:fish market|peixaria|pescheria|pescadería|poissonnerie|Fischmarkt|рыбный рынок)/i,'fishMarket'],
      [/(?:hotel room|quarto de hotel|camera d'albergo|habitación de hotel|chambre d'hôtel|Hotelzimmer|номер отеля)/i,'hotelRoom'],
      [/(?:airport security|security checkpoint|controle de segurança|controllo sicurezza|control de seguridad|contrôle de sécurité|Sicherheitskontrolle|досмотр в аэропорту)/i,'airportSecurity'],
      [/(?:passport control|controle de passaporte|controllo passaporti|control de pasaportes|contrôle des passeports|Passkontrolle|паспортный контроль)/i,'passportControl'],
      [/(?:customs|alfândega|dogana|aduana|douane|Zoll|таможня)/i,'customs'],
      [/(?:open suitcase|packed suitcase|mala aberta|valigia aperta|maleta abierta|valise ouverte|offener Koffer|открытый чемодан)/i,'suitcaseOpen'],
      [/(?:pedestrian crossing|crosswalk|faixa de pedestres|strisce pedonali|paso de peatones|passage piéton|Zebrastreifen|пешеходный переход)/i,'pedestrianCrossing'],
      [/(?:traffic light|semaphore|semáforo|semaforo|feu de circulation|Ampel|светофор)/i,'trafficLight'],
      [/(?:bicycle helmet|bike helmet|capacete de bicicleta|casco da bici|casco de bicicleta|casque de vélo|Fahrradhelm|велошлем)/i,'bicycleHelmet'],
      [/(?:school bus|ônibus escolar|autobus scolastico|autobús escolar|bus scolaire|Schulbus|школьный автобус)/i,'schoolBus'],
      [/(?:breakfast|café da manhã|colazione|desayuno|petit déjeuner|Frühstück|завтрак)/i,'breakfast'],
      [/(?:sandwich|sanduíche|panino|bocadillo|belegte[s]? Brot|сэндвич)/i,'sandwich'],
      [/(?:salad|salada|insalata|ensalada|salade|Salat|салат)/i,'salad'],
      [/(?:chicken|frango|pollo|poulet|Hähnchen|курица)/i,'chicken'],
      [/(?:tomato|tomate|pomodoro|Tomate|помидор)/i,'tomato'],
      [/(?:onion|cebola|cipolla|cebolla|oignon|Zwiebel|лук)/i,'onion'],
      [/(?:potato|batata|patata|pomme de terre|Kartoffel|картофель)/i,'potato'],
      [/(?:strawberry|morango|fragola|fresa|fraise|Erdbeere|клубника)/i,'strawberry'],
      [/(?:grapes|uva|uvas|raisin|Trauben|виноград)/i,'grapes'],
      [/(?:orange fruit|orange|laranja|arancia|naranja|Orange|апельсин)/i,'orange'],
      [/(?:camel|camelo|cammello|camello|chameau|Kamel|верблюд)/i,'camel'],
      [/(?:mosque|mesquita|moschea|mezquita|mosquée|Moschee|мечеть)/i,'mosque'],
      [/(?:\\bfork\\b|garfo|forchetta|tenedor|fourchette|Gabel|вилка)/i,'fork'],
      [/(?:\\bspoon\\b|colher|cucchiaio|cuchara|cuillère|Löffel|ложка)/i,'spoon'],
      [/(?:\\bflour\\b|farinha|farina|harina|farine|Mehl|мука)/i,'flour'],
      [/(?:\\bdocument(?:s)?\\b|documento|documenti|documentos|pièce complémentaire|pièce jointe|Anlage|anexo|anexa|вложение|документ(?:ы)?)/i,'document']
    ];
    for(var nr=0;nr<newPhotoRules.length;nr++)if(newPhotoRules[nr][0].test(target))return photos[newPhotoRules[nr][1]];
    var distinctPhotoRules=[
      [/(?:pharmacy|farmácia|farmacia|pharmacie|Apotheke|аптека)/i,'pharmacy'],
      [/(?:hospital building|hospital|hôpital|Krankenhaus|больница)/i,'hospitalBuilding'],
      [/(?:veterinarian|vet clinic|veterinário|veterinario|vétérinaire|Tierarzt|ветеринар)/i,'veterinarian'],
      [/(?:postbox|mailbox|caixa de correio|cassetta postale|buzón|boîte aux lettres|Briefkasten|почтовый ящик)/i,'postbox'],
      [/(?:train station|railway station|estação de trem|stazione ferroviaria|estación de tren|gare|Bahnhof|вокзал)/i,'trainStation'],
      [/(?:ferry|ferry boat|balsa|traghetto|transbordador|Fähre|паром)/i,'ferry'],
      [/(?:ship|navio|nave|barco|bateau|Schiff|корабль)/i,'ship'],
      [/(?:bridge|ponte|puente|pont|Brücke|мост)/i,'bridge'],
      [/(?:tunnel|túnel|galleria|Tunnel|тоннель)/i,'tunnel'],
      [/(?:gas station|petrol station|posto de gasolina|benzinaio|gasolinera|station-service|Tankstelle|заправка)/i,'gasStation'],
      [/(?:mechanic|car mechanic|mecânico|meccanico|mecánico|mécanicien|Mechaniker|автомеханик)/i,'mechanic'],
      [/(?:parking garage|car park|estacionamento|parcheggio|aparcamiento|Parkhaus|парковка)/i,'parkingGarage'],
      [/(?:wallet|carteira|portafoglio|cartera|portefeuille|Geldbörse|кошелёк)/i,'wallet'],
      [/(?:receipt|recibo|scontrino|ticket de caisse|Kassenbon|чек)/i,'receipt'],
      [/(?:ticket|bilhete|biglietto|entrada|billet|Fahrkarte|билет)/i,'ticket'],
      [/(?:calendar|calendário|calendario|calendrier|Kalender|календарь)/i,'calendar'],
      [/(?:notebook|caderno|quaderno|cuaderno|cahier|Notizbuch|тетрадь)/i,'notebook'],
      [/(?:scissors|tesoura|forbici|tijeras|ciseaux|Schere|ножницы)/i,'scissors'],
      [/(?:screwdriver|chave de fenda|cacciavite|destornillador|tournevis|Schraubenzieher|отвёртка)/i,'screwdriver'],
      [/(?:hammer|martelo|martello|martillo|marteau|Hammer|молоток)/i,'hammer'],
      [/(?:luggage lock|suitcase lock|cadeado de mala|lucchetto per valigia|candado de maleta|cadenas de valise|Kofferschloss|замок чемодана)/i,'suitcaseLock'],
      [/(?:laundry|laundromat|lavanderia|lavandería|laverie|Wäscherei)/i,'laundry'],
      [/(?:shower|chuveiro|doccia|ducha|douche|Dusche|душ)/i,'shower'],
      [/(?:bathtub|bath tub|banheira|vasca da bagno|bañera|baignoire|Badewanne|ванна)/i,'bathtub']
    ];
    for(var dx=0;dx<distinctPhotoRules.length;dx++)if(distinctPhotoRules[dx][0].test(target))return photos[distinctPhotoRules[dx][1]];
    var multilingualExtraRules=[
      [/(?:check.?in|boarding pass|check-in counter|embarque|cartão de embarque|facturación|mostrador de facturación|enregistrement|comptoir d'enregistrement|Einchecken|Check-in-Schalter|регистрация на рейс|стойка регистрации)/i,'airportCheckin'],
      [/(?:dentist|dental|toothache|dentista|dente doendo|diente|dentiste|mal aux dents|Zahnarzt|Zahnärztin|стоматолог|зуб болит)/i,'dentist'],
      [/(?:bank|banco|banca|banque|Bank|банк|caixa eletrônico|atm|cash machine|bancomat|cajero automático|guichet)/i,'bank'],
      [/(?:post office|correios|correio|posta|oficina de correos|bureau de poste|Postamt|почта|почтовое отделение)/i,'postOffice'],
      [/(?:supermarket|grocery store|supermercado|supermercati|supermarché|Supermarkt|супермаркет|mercado)/i,'supermarket'],
      [/(?:umbrella|guarda-chuva|ombrello|paraguas|parapluie|Regenschirm|зонт)/i,'umbrella'],
      [/(?:rain|raining|chuva|pioggia|lluvia|pluie|Regen|дождь)/i,'rain'],
      [/(?:elevator|lift|elevador|ascensore|ascensor|ascenseur|Aufzug|лифт)/i,'elevator'],
      [/(?:stairs|staircase|escadas|escada|scale|escaleras|escalier|Treppe|лестница)/i,'stairs'],
      [/(?:computer|laptop|computador|ordenador|ordinateur|Computer|компьютер)/i,'computer'],
      [/(?:headphones|earphones|fones de ouvido|cuffie|auriculares|écouteurs|Kopfhörer|наушники)/i,'headphones'],
      [/(?:dessert|sobremesa|dolce|postre|dessert|Nachtisch|десерт)/i,'dessert'],
      [/(?:soup|sopa|zuppa|soupe|Suppe|суп)/i,'soup'],
      [/(?:rice|arroz|riso|riz|Reis|рис)/i,'rice'],
      [/(?:pasta|macarrão|massa|pâtes|Nudeln|макароны)/i,'pasta'],
      [/(?:salt|sal|sale|sel|Salz|соль)/i,'salt'],
      [/(?:sugar|açúcar|zucchero|azúcar|sucre|Zucker|сахар)/i,'sugar'],
      [/(?:key|keys|chave|chiave|llave|clé|Schlüssel|ключ)/i,'key'],
      [/(?:map|mapa|mappa|carte|Karte|карта)/i,'map'],
      [/(?:firefighter|fireman|bombeiro|vigile del fuoco|bombero|pompier|Feuerwehrmann|пожарный)/i,'firefighter'],
      [/(?:baby|bebê|bambino|bebé|bébé|Baby|младенец)/i,'baby'],
      [/(?:birthday|birthday cake|aniversário|compleanno|cumpleaños|anniversaire|Geburtstag|день рождения)/i,'birthday'],
      [/(?:wedding|casamento|matrimonio|boda|mariage|Hochzeit|свадьба)/i,'wedding'],
      [/(?:garden|jardim|giardino|jardín|jardin|Garten|сад)/i,'garden']
    ];
    for(var mx=0;mx<multilingualExtraRules.length;mx++)if(multilingualExtraRules[mx][0].test(target))return photos[multilingualExtraRules[mx][1]];

    var householdNatureRules=[
      [/(?:toothbrush|escova de dentes|spazzolino|cepillo de dientes|brosse à dents|Zahnbürste|зубная щётка)/i,'toothbrush'],
      [/(?:toothpaste|pasta de dentes|dentifricio|pasta de dientes|dentifrice|Zahnpasta|зубная паста)/i,'toothpaste'],
      [/(?:soap|sabonete|sapone|jabón|savon|Seife|мыло)/i,'soap'],
      [/(?:towel|toalha|asciugamano|toalla|serviette|Handtuch|полотенце)/i,'towel'],
      [/(?:bedroom|quarto|camera da letto|dormitorio|chambre à coucher|Schlafzimmer|спальня)/i,'bedroom'],
      [/(?:pillow|travesseiro|cuscino|almohada|oreiller|Kissen|подушка)/i,'pillow'],
      [/(?:lamp|abajur|lâmpada|lampada|lámpara|lampe|Lampe|лампа)/i,'lamp'],
      [/(?:sofa|couch|sofá|divano|sofá|canapé|Sofa|диван)/i,'sofa'],
      [/(?:kitchen|cozinha|cucina|cocina|cuisine|Küche|кухня)/i,'kitchen'],
      [/(?:refrigerator|fridge|geladeira|frigorifero|nevera|réfrigérateur|Kühlschrank|холодильник)/i,'refrigerator'],
      [/(?:stove|fogão|fornello|estufa|cuisinière|Herd|плита)/i,'stove'],
      [/(?:washing machine|máquina de lavar|lavatrice|lavadora|machine à laver|Waschmaschine|стиральная машина)/i,'washingMachine'],
      [/(?:chair|cadeira|sedia|silla|chaise|Stuhl|стул)/i,'chair'],
      [/(?:bookshelf|estante de livros|libreria|estantería|bibliothèque|Bücherregal|книжная полка)/i,'bookshelf'],
      [/(?:book|livro|libro|libro|livre|Buch|книга)/i,'book'],
      [/(?:newspaper|jornal|giornale|periódico|journal|Zeitung|газета)/i,'newspaper'],
      [/(?:mountain|montanha|montagna|montaña|montagne|Berg|гора)/i,'mountain'],
      [/(?:waterfall|cachoeira|cascata|cascada|cascade|Wasserfall|водопад)/i,'waterfall'],
      [/(?:forest|floresta|foresta|bosque|forêt|Wald|лес)/i,'forest'],
      [/(?:sunrise|nascer do sol|alba|amanecer|lever du soleil|Sonnenaufgang|восход)/i,'sunrise'],
      [/(?:ocean wave|wave|onda do mar|onda|vague|Meereswelle|морская волна)/i,'oceanWave'],
    ];
    for(var hn=0;hn<householdNatureRules.length;hn++)if(householdNatureRules[hn][0].test(target))return photos[householdNatureRules[hn][1]];

    var activityPhotoRules=[
      [/(?:camera|câmera|macchina fotografica|cámara|appareil photo|Kamera|фотоаппарат)/i,'camera'],
      [/(?:guitar|violão|chitarra|guitarra|guitare|Gitarre|гитара)/i,'guitar'],
      [/(?:basketball|basquete|pallacanestro|baloncesto|basket|Basketball|баскетбол)/i,'basketball'],
      [/(?:football|soccer|futebol|calcio|fútbol|football|Fußball|футбол)/i,'football'],
      [/(?:gloves|luvas|guanti|guantes|gants|Handschuhe|перчатки)/i,'gloves'],
      [/(?:bicycle|bike|bicicleta|bicicletta|bicicleta|vélo|Fahrrad|велосипед)/i,'bicycle']
    ];
    for(var ap=0;ap<activityPhotoRules.length;ap++)if(activityPhotoRules[ap][0].test(target))return photos[activityPhotoRules[ap][1]];

    var freshFoodStyleRules=[
      [/(?:shoes|shoe|sapatos|sapato|scarpe|scarpa|zapatos|chaussures|Schuhe|обувь)/i,'shoes'],
      [/(?:watch|wristwatch|relógio|orologio|reloj|montre|Uhr|наручные часы)/i,'watch'],
      [/(?:hat|cap|chapéu|cappello|sombrero|chapeau|Hut|шляпа)/i,'hat'],
      [/(?:shirt|t-shirt|camisa|maglietta|camiseta|chemise|Hemd|рубашка)/i,'shirt'],
      [/(?:pizza|pizza|pizza|pizza|pizza|Pizza|пицца)/i,'pizza'],
      [/(?:burger|hambúrguer|hamburger|hamburguesa|hamburger|Burger|бургер)/i,'burger'],
      [/(?:ice cream|sorvete|gelato|helado|glace|Eiscreme|мороженое)/i,'iceCream'],
      [/(?:cake|bolo|torta|pastel|gâteau|Kuchen|торт)/i,'cake'],
      [/(?:lemon|limão|limone|limón|citron|Zitrone|лимон)/i,'lemon'],
      [/(?:egg|ovo|uovo|huevo|œuf|Ei|яйцо)/i,'egg'],
    ];
    for(var fs=0;fs<freshFoodStyleRules.length;fs++)if(freshFoodStyleRules[fs][0].test(target))return photos[freshFoodStyleRules[fs][1]];
    var englishRules=[
      [/\b(?:coffee|espresso|latte)\b/i,'coffee'],[/\btea\b/i,'tea'],[/\b(?:water|drink)\b/i,'water'],[/\b(?:juice|orange juice)\b/i,'juice'],
      [/\b(?:money|cash|price|cost|bill|pay|payment|buy|sell)\b/i,'money'],[/\b(?:phone|mobile|telephone|call|message)\b/i,'phone'],
      [/\b(?:bread|loaf|toast)\b/i,'bread'],[/\beggs?\b/i,'egg'],[/\b(?:shoe|shoes|sneaker|sneakers)\b/i,'shoes'],[/\b(?:write|writing|pen|notebook|paper)\b/i,'writing'],
      [/\bapples?\b/i,'apple'],[/\b(?:house|home|apartment|flat)\b/i,'house'],
      [/\b(?:airplane|aircraft|plane|airport|flight)\b/i,'airplane'],[/\b(?:taxi|cab|uber|driver)\b/i,'taxi'],[/\b(?:luggage|suitcase|baggage)\b/i,'luggage'],
      [/\b(?:train|metro|subway)\b/i,'train'],[/\b(?:bus|coach)\b/i,'bus'],[/\b(?:beach|sea|ocean|island|coast)\b/i,'beach'],
      [/\b(?:food|meal|breakfast|lunch|dinner|restaurant|meat|dish)\b/i,'meal'],[/\bcity\b/i,'city'],
      [/\b(?:doctor|nurse|hospital|clinic|pharmacy|medicine|pain|headache)\b/i,'doctor'],[/\bcats?\b/i,'cat'],[/\b(?:dogs?|puppies)\b/i,'dog'],
      [/\b(?:peanuts?|nuts)\b/i,'peanuts'],[/\b(?:milk)\b/i,'milk'],[/\b(?:lemon|lemons|lemonade)\b/i,'lemon'],[/\bheart\b/i,'heart'],
      [/\b(?:family|mother|father|parents|sister|brother)\b/i,'family'],[/\b(?:clock|time|watch|minute|minutes)\b/i,'clock'],
      [/\b(?:right|left|turn|direction|map|intersection|entrance|exit)\b/i,'directions'],[/\b(?:ambulance|emergency|accident)\b/i,'ambulance'],
      [/\b(?:clothes|clothing|shirt|trousers|pants|dress|skirt|jacket|socks|size)\b/i,'clothing'],[/\b(?:book|books|reading|library|study)\b/i,'books']
    ];
    if(lang==='en'&&/^(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday)$/i.test(target.trim()))return photos.clock;
    if(lang==='en'&&/^where is\.\.\.$/i.test(target.trim()))return photos.directions;
    if(lang==='en'&&/^nothing to declare$/i.test(target.trim()))return photos.customs;
    if(lang==='en'&&/^(?:the room isn't ready|i would like to change rooms)$/i.test(target.trim()))return photos.hotelRoom;
    if(lang==='en'&&/^(?:it hurts here|symptoms)$/i.test(target.trim()))return photos.doctor;
    if(lang==='en'&&/^current account$/i.test(target.trim()))return photos.bank;
    if(lang==='en'&&/^residence permit$/i.test(target.trim()))return photos.passportControl;
    if(lang==='en'&&/^(?:go straight ahead)$/i.test(target.trim()))return photos.directions;
    if(lang==='en'&&/^roundabout$/i.test(target.trim()))return photos.roundabout;
    if(lang==='en'&&/^platform$/i.test(target.trim()))return photos.trainStation;
    if(lang==='en'&&/^job application$/i.test(target.trim()))return photos.writing;
    if(lang==='en'&&/^job interview$/i.test(target.trim()))return photos.office;
    if(lang==='en'&&/^public transport$/i.test(target.trim()))return photos.bus;
    if(lang==='en'&&/^leak$/i.test(target.trim()))return photos.water;
    if(lang==='en'&&/^arrange a repair$/i.test(target.trim()))return photos.tools;
    if(lang==='en'&&/^(?:zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|one hundred)$/i.test(target.trim()))return photos.numbers;
    for(var j=0;j<englishRules.length;j++)if(englishRules[j][0].test(target))return photos[englishRules[j][1]];
    return null;
  }
  function card(word,meaning,lang,kind){
    var safeWord=esc(word),safeMeaning=esc(meaning),safeLang=esc(lang||'');
    var p=find(meaning,word,lang),photo=p?'<img class="academy-photo-image" src="'+esc(p.url)+'" alt="'+safeWord+' — '+safeMeaning+'" loading="lazy" decoding="async" onerror="this.closest(\'.academy-photo-card\').classList.add(\'no-photo\');var c=this.parentNode.querySelector(\'.academy-photo-credit\');if(c)c.remove();this.remove()">':'';
    var speech=kind==='ptbr'?'<span class="academy-photo-word pt-speak" role="button" tabindex="0" lang="'+safeLang+'" data-say="'+safeWord+'">'+safeWord+'</span>':'<button type="button" class="academy-photo-word target" lang="'+safeLang+'" data-say="'+safeWord+'">'+safeWord+'</button>';
    var credit=p?'<a class="academy-photo-credit" href="'+esc(p.source)+'" target="_blank" rel="noopener" aria-label="مصدر الصورة '+esc(p.credit||'')+'">'+esc(p.credit||'مصدر الصورة')+'</a>':'';
    return '<span class="academy-photo-card '+(p?'has-photo':'no-photo')+'" role="group" aria-label="'+safeWord+' — '+safeMeaning+'">'+photo+speech+'<small>'+safeMeaning+'</small>'+credit+'<span class="academy-photo-fallback">الصورة غير متاحة حاليًا</span></span>';
  }
  var css='.academy-photo-card{position:relative;display:flex;min-height:148px;width:100%;max-width:290px;overflow:hidden;flex-direction:column;justify-content:flex-end;align-items:flex-start;gap:5px;padding:13px;border-radius:14px;background:#e8f0f5;background-size:cover;background-position:center;border:1px solid rgba(4,49,82,.14);isolation:isolate;box-sizing:border-box}.academy-photo-image{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;z-index:0;display:block}.academy-photo-card:before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(4,20,34,.04) 5%,rgba(4,20,34,.82) 100%);z-index:1;pointer-events:none}.academy-photo-word{position:relative;z-index:2;max-width:100%;padding:0;border:0;background:transparent;color:#fff;text-align:start;text-shadow:0 1px 5px #000;font-family:inherit;font-size:17px;font-weight:850;line-height:1.35;cursor:pointer}.academy-photo-card small{position:relative;z-index:2;color:#fff;font-weight:750;text-shadow:0 1px 4px #000;font-size:13px;line-height:1.4}.academy-photo-credit{position:absolute;z-index:3;top:7px;inset-inline-end:8px;color:#fff;background:#102b3dcc;border-radius:6px;padding:3px 6px;font-size:10px;text-decoration:none}.academy-photo-card.no-photo{justify-content:center;background:linear-gradient(135deg,#edf3f8,#fff3e7)}.academy-photo-card.no-photo:before{display:none}.academy-photo-card.no-photo .academy-photo-word,.academy-photo-card.no-photo small{color:#17364d;text-shadow:none}.academy-photo-fallback{display:none;position:relative;z-index:2;color:#526b7c;font-size:11px;font-weight:700}.academy-photo-card.no-photo .academy-photo-fallback{display:block}.pt .academy-photo-card{max-width:100%}.words .academy-photo-card{max-width:100%;min-height:144px}.words .academy-photo-word{font-size:20px}@media(max-width:600px){.academy-photo-card{min-height:132px;max-width:100%;padding:11px}.academy-photo-word{font-size:16px}.academy-photo-card small{font-size:12px}}.academy-photo-image{transition:transform .35s ease}.academy-photo-word:focus-visible{outline:3px solid #ffd166;outline-offset:4px;border-radius:4px}.academy-photo-card:focus-within{outline:3px solid #2879a7;outline-offset:3px}@media(hover:hover) and (prefers-reduced-motion:no-preference){.academy-photo-card.has-photo{transition:transform .25s ease,box-shadow .25s ease}.academy-photo-card.has-photo:hover{transform:translateY(-4px);box-shadow:0 12px 28px rgba(12,42,62,.2)}.academy-photo-card.has-photo:hover .academy-photo-image{transform:scale(1.055)}}@media(prefers-reduced-motion:reduce){.academy-photo-image,.academy-photo-card{transition:none!important}}';if(typeof document!=='undefined'){var st=document.createElement('style');st.id='sd-academy-photo-styles';st.textContent=css;document.head.appendChild(st)}
  window.SDAcademyImages={resolve:find,card:card};
})();