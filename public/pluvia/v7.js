(() => {
  const cities = {
    tokyo:{name:'Tokyo',country:'Japan',landmark:'Tokyo Tower',lat:35.6762,lon:139.6503,tz:'Asia/Tokyo',pos:'58% 48%',image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Tokyo%20Tower%20at%20night.jpg?width=1400',songs:[
      ['Rain','Hata Motohiro','https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/85/ce/64/85ce6424-0f8d-b1eb-3524-c21e352f9c7d/mzaf_17028835718644657456.plus.aac.ep.m4a'],
      ['Rainy Blue','Hideaki Tokunaga','https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/2b/44/06/2b4406e6-d541-1bfe-e3ea-bfe3a80eaa48/mzaf_8939945164144576854.plus.aac.ep.m4a']
    ]},
    london:{name:'London',country:'United Kingdom',landmark:'Big Ben',lat:51.5072,lon:-0.1276,tz:'Europe/London',pos:'54% 42%',image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Big%20Ben%20at%20night%202026-03-31.jpg?width=1400',songs:[
      ['Set Fire to the Rain','Adele','https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/96/8b/3f/968b3f92-f082-c8c2-47ba-ab7add22dfdc/mzaf_13981153720371020318.plus.aac.ep.m4a'],
      ['Here Comes the Rain Again','Eurythmics','https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/72/fe/ce/72fece70-89a0-1b3a-fa4a-ad058dde3917/mzaf_3433349509748663983.plus.aac.ep.m4a']
    ]},
    mumbai:{name:'Mumbai',country:'India',landmark:'Gateway of India',lat:19.076,lon:72.8777,tz:'Asia/Kolkata',pos:'50% 55%',image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Gateway%20of%20India%2C%20Mumbai%20%28Night%29.jpg?width=1400',songs:[
      ['Barso Re','A.R. Rahman & Shreya Ghoshal','https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/64/c9/32/64c932f0-4109-6760-2002-130797769cff/mzaf_1950037304989864945.plus.aac.ep.m4a'],
      ['Rimjhim Gire Sawan','Kishore Kumar','https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e0/d3/73/e0d373ff-7eae-63f0-3fa1-7e079e5fec16/mzaf_3865286795455428981.plus.aac.ep.m4a']
    ]},
    seattle:{name:'Seattle',country:'United States',landmark:'Space Needle',lat:47.6062,lon:-122.3321,tz:'America/Los_Angeles',pos:'50% 46%',image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Seattle%20Space%20Needle.jpg?width=1400',songs:[
      ['Have You Ever Seen the Rain?','Creedence Clearwater Revival','https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a7/55/f7/a755f7d7-d934-126d-a883-05e79eaa9444/mzaf_13855660925334657413.plus.aac.ep.m4a'],
      ['Rainy Days And Mondays','Carpenters','https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/fd/48/d9/fd48d97c-7f8e-1bc8-8224-614e7d44adce/mzaf_8327188197888161132.plus.aac.ep.m4a']
    ]},
    singapore:{name:'Singapore',country:'Singapore',landmark:'Marina Bay Sands',lat:1.3521,lon:103.8198,tz:'Asia/Singapore',pos:'50% 50%',image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Marina%20Bay%20Sands%20at%20night.jpg?width=1400',songs:[
      ['下雨天','Nan Quan Mama','https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/e2/f3/a3/e2f3a33f-fdaf-c21b-1314-ede2a3d5e2a8/mzaf_10057316662723848184.plus.aac.ep.m4a'],
      ['雨愛','Rainie Yang','https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f4/a8/2a/f4a82a28-5ffd-104c-cbca-078f4bafb731/mzaf_1730419277821962479.plus.aac.ep.m4a']
    ]},
    saopaulo:{name:'São Paulo',country:'Brazil',landmark:'São Paulo Skyline',lat:-23.5505,lon:-46.6333,tz:'America/Sao_Paulo',pos:'50% 48%',image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Sao%20Paulo%20Skyline%20at%20night.jpg?width=1400',songs:[
      ['Chove Chuva','Jorge Ben Jor','https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/5c/33/d4/5c33d404-1858-7b31-86b3-ae5309666870/mzaf_15401932118259935778.plus.aac.ep.m4a'],
      ['Águas de Março','Elis Regina & Antônio Carlos Jobim','https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/46/c9/83/46c98301-28e6-bc75-e495-55638bccca96/mzaf_9192636079966759712.plus.aac.ep.m4a']
    ]},
    paris:{name:'Paris',country:'France',landmark:'Eiffel Tower',lat:48.8566,lon:2.3522,tz:'Europe/Paris',pos:'50% 48%',image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Eiffel%20Tower%20%40%20night.JPG?width=1400',songs:[
      ['La pluie (feat. Stromae)','Orelsan','https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/cb/64/b5/cb64b5a5-f111-ea7c-4710-8d9cb6403291/mzaf_8064440749058682800.plus.aac.ep.m4a']
    ]},
    newyork:{name:'New York',country:'United States',landmark:'Empire State Building',lat:40.7128,lon:-74.006,tz:'America/New_York',pos:'50% 44%',image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Empire%20State%20Building%20At%20Night%20-%20April%2023%2C%202026.jpg?width=1400',songs:[
      ["Raindrops Keep Fallin' On My Head",'B.J. Thomas','https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d8/65/1f/d8651f1f-9727-fadf-66a8-927525341ff5/mzaf_10345859008706664501.plus.aac.ep.m4a']
    ]},
    seoul:{name:'Seoul',country:'South Korea',landmark:'N Seoul Tower',lat:37.5665,lon:126.978,tz:'Asia/Seoul',pos:'50% 45%',image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Namsan%20Tower%2C%20Seoul%20-%20Namsan2299.jpg?width=1400',songs:[
      ['Rain','BTS','https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/9f/f3/0d/9ff30d01-5859-5c48-d399-aa3cc83c7aad/mzaf_13367482002701672017.plus.aac.ep.m4a']
    ]},
    vancouver:{name:'Vancouver',country:'Canada',landmark:'Vancouver Skyline',lat:49.2827,lon:-123.1207,tz:'America/Vancouver',pos:'50% 52%',image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Night%20skyline%20-%20Vancouver%2C%20Canada%20-%20DSC00080.JPG?width=1400',songs:[
      ['Rainy Day','Coldplay','https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/3b/ba/2b/3bba2bea-0934-7e70-40c5-19e4b8a9cf0d/mzaf_4666180967380001516.plus.aac.ep.m4a']
    ]},
    amsterdam:{name:'Amsterdam',country:'Netherlands',landmark:'Amsterdam Canals',lat:52.3676,lon:4.9041,tz:'Europe/Amsterdam',pos:'50% 52%',image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Amsterdam%20Canal%20by%20Night.jpg?width=1400',songs:[
      ['Het Regent Zonnestralen','Acda en de Munnik','https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/75/4c/5e/754c5e7a-d777-cafb-ddcb-b0a18ee9b0fc/mzaf_4468387962725334816.plus.aac.ep.m4a']
    ]},
    kyoto:{name:'Kyoto',country:'Japan',landmark:'Tō-ji Pagoda',lat:35.0116,lon:135.7681,tz:'Asia/Tokyo',pos:'50% 46%',image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/T%C5%8D-ji%20wooden%20pagoda%20at%20night.%20Minami-ku%2C%20Kyoto.jpg?width=1400',songs:[
      ['Rain','Hata Motohiro','https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/85/ce/64/85ce6424-0f8d-b1eb-3524-c21e352f9c7d/mzaf_17028835718644657456.plus.aac.ep.m4a']
    ]}
  };

  // PLUVIA 7.9 — City Playlists (on-demand official store previews)
  const originalSongCounts = Object.fromEntries(Object.entries(cities).map(([id,city])=>[id,city.songs.length]));
  const citySongExtras = {
  "tokyo": [
    [
      "Kataomoi",
      "Aimer"
    ],
    [
      "First Love",
      "Hikaru Utada"
    ],
    [
      "Marigold",
      "Aimyon"
    ],
    [
      "Nandemonaiya",
      "RADWIMPS"
    ]
  ],
  "london": [
    [
      "Somewhere Only We Know",
      "Keane"
    ],
    [
      "Yellow",
      "Coldplay"
    ],
    [
      "The A Team",
      "Ed Sheeran"
    ],
    [
      "Chasing Cars",
      "Snow Patrol"
    ]
  ],
  "mumbai": [
    [
      "Kabhi Jo Baadal Barse",
      "Arijit Singh"
    ],
    [
      "Baarish",
      "Ash King"
    ],
    [
      "Baarishein",
      "Anuv Jain"
    ],
    [
      "Bheegi Bheegi",
      "James"
    ]
  ],
  "seattle": [
    [
      "Black",
      "Pearl Jam"
    ],
    [
      "Come As You Are",
      "Nirvana"
    ],
    [
      "Such Great Heights",
      "The Postal Service"
    ],
    [
      "The District Sleeps Alone Tonight",
      "The Postal Service"
    ]
  ],
  "singapore": [
    [
      "遇見",
      "Stefanie Sun"
    ],
    [
      "天黑黑",
      "Stefanie Sun"
    ],
    [
      "小幸運",
      "Hebe Tien"
    ],
    [
      "雨天",
      "Stefanie Sun"
    ]
  ],
  "saopaulo": [
    [
      "Chega de Saudade",
      "João Gilberto"
    ],
    [
      "Trem das Onze",
      "Adoniran Barbosa"
    ],
    [
      "Ainda Bem",
      "Marisa Monte"
    ],
    [
      "Velha Infância",
      "Tribalistas"
    ]
  ],
  "paris": [
    [
      "La vie en rose",
      "Édith Piaf"
    ],
    [
      "Sous le ciel de Paris",
      "Édith Piaf"
    ],
    [
      "La Seine",
      "Vanessa Paradis"
    ],
    [
      "Le vent nous portera",
      "Noir Désir"
    ],
    [
      "Je te laisserai des mots",
      "Patrick Watson"
    ]
  ],
  "newyork": [
    [
      "New York State of Mind",
      "Billy Joel"
    ],
    [
      "Empire State of Mind",
      "JAY-Z"
    ],
    [
      "Autumn in New York",
      "Billie Holiday"
    ],
    [
      "New York, I Love You but You're Bringing Me Down",
      "LCD Soundsystem"
    ]
  ],
  "seoul": [
    [
      "Rain",
      "TAEYEON"
    ],
    [
      "Through the Night",
      "IU"
    ],
    [
      "Love Poem",
      "IU"
    ],
    [
      "Spring Day",
      "BTS"
    ],
    [
      "Stay With Me",
      "CHANYEOL & PUNCH"
    ]
  ],
  "vancouver": [
    [
      "River",
      "Joni Mitchell"
    ],
    [
      "Angel",
      "Sarah McLachlan"
    ],
    [
      "Hallelujah",
      "Leonard Cohen"
    ],
    [
      "Home",
      "Michael Bublé"
    ]
  ],
  "amsterdam": [
    [
      "Zoutelande",
      "BLØF"
    ],
    [
      "Het Is Een Nacht",
      "Guus Meeuwis"
    ],
    [
      "Als Het Avond Is",
      "Suzan & Freek"
    ],
    [
      "Dat Ik Je Mis",
      "Maaike Ouboter"
    ]
  ],
  "kyoto": [
    [
      "春よ、来い",
      "松任谷由実"
    ],
    [
      "Lemon",
      "Kenshi Yonezu"
    ],
    [
      "One More Time, One More Chance",
      "Masayoshi Yamazaki"
    ],
    [
      "打上花火",
      "DAOKO"
    ]
  ]
};
  const cityMusicMarket = {"tokyo":"JP","london":"GB","mumbai":"IN","seattle":"US","singapore":"SG","saopaulo":"BR","paris":"FR","newyork":"US","seoul":"KR","vancouver":"CA","amsterdam":"NL","kyoto":"JP"};
  Object.keys(citySongExtras).forEach(id=>{
    cities[id].songs.push(...citySongExtras[id].map(([title,artist])=>[title,artist,null]));
  });


  // PLUVIA 8.0 — City Views
  const commonsView=(file,pos='50% 50%',label='City view')=>({
    src:'https://commons.wikimedia.org/wiki/Special:Redirect/file/'+encodeURIComponent(file)+'?width=1600',
    pos,label
  });
  const cityViews = {
    tokyo:[
      {src:cities.tokyo.image,pos:cities.tokyo.pos,label:'Tokyo Tower'},
      commonsView('Shibuya crossing at night, Tokyo, Japan.jpg','50% 52%','Shibuya Crossing'),
      commonsView('Shinjuku at night, August 2019.jpg','50% 50%','Shinjuku'),
      commonsView('Rainbow Bridge, Tokyo at Night.jpg','50% 54%','Rainbow Bridge')
    ],
    mumbai:[
      {src:cities.mumbai.image,pos:cities.mumbai.pos,label:'Gateway of India'},
      commonsView('Marine Drive of Mumbai.jpg','50% 56%','Marine Drive'),
      commonsView('Bandra Worli Sea Link at night.jpg','50% 50%','Bandra–Worli Sea Link'),
      commonsView('Chhatrapati Shivaji Maharaj Terminus at night, Mumbai, Maharashtra, India (2013) 1.jpg','50% 52%','CST')
    ],
    london:[
      {src:cities.london.image,pos:cities.london.pos,label:'Big Ben'},
      commonsView('TowerBridge at night.jpg','50% 52%','Tower Bridge'),
      commonsView('Piccadilly Circus at night.jpg','50% 50%','Piccadilly Circus'),
      commonsView('London Eye at night.jpg','50% 50%','London Eye')
    ],
    newyork:[
      {src:cities.newyork.image,pos:cities.newyork.pos,label:'Empire State Building'},
      commonsView('Brooklyn Bridge night view.jpg','50% 52%','Brooklyn Bridge'),
      commonsView('Times Square at night, NYC, USA.jpg','50% 50%','Times Square'),
      commonsView('Manhattan skyline at night.jpg','50% 52%','Manhattan Skyline')
    ],
    paris:[
      {src:cities.paris.image,pos:cities.paris.pos,label:'Eiffel Tower'},
      commonsView('La Seine a nuit.jpg','50% 54%','The Seine'),
      commonsView('Arc de Triomphe at night.jpg','50% 50%','Arc de Triomphe'),
      commonsView('Palais du Louvre nuit.JPG','50% 52%','Palais du Louvre')
    ]
  };
  Object.keys(cities).forEach(id=>{
    if(!cityViews[id])cityViews[id]=[{src:cities[id].image,pos:cities[id].pos,label:cities[id].landmark}];
  });

  const order = Object.keys(cities);

  const citySoul = {
    tokyo:{accent:'#78caff',accent2:'#e986a6',ambient:'station chime',story:'Neon reflections gather beneath Tokyo Tower.',wave:'sine',gain:.032,notes:[[784,0,.14],[988,.18,.16],[1175,.38,.22]]},
    london:{accent:'#91b5d2',accent2:'#c9ab7d',ambient:'distant clock bells',story:'Stone, wet streets and the clock tower settle into the same grey-blue hush.',wave:'sine',gain:.038,notes:[[196,0,.48],[247,.62,.42],[196,1.18,.58]]},
    mumbai:{accent:'#efb46f',accent2:'#e5776d',ambient:'monsoon street horn',story:'Warm city light pools around the Gateway of India.',wave:'triangle',gain:.026,notes:[[294,0,.18],[349,.28,.17]]},
    seattle:{accent:'#75c2bd',accent2:'#8fb5d2',ambient:'distant waterfront horn',story:'The Space Needle hangs above a cool, softened skyline.',wave:'sine',gain:.032,notes:[[110,0,.9],[92,1.0,.75]]},
    singapore:{accent:'#ba91df',accent2:'#67d3c5',ambient:'metro glass chime',story:'Marina Bay turns the wet air into violet and teal reflections.',wave:'sine',gain:.028,notes:[[659,0,.13],[831,.18,.13],[988,.36,.2]]},
    saopaulo:{accent:'#79bf87',accent2:'#e6a15f',ambient:'night traffic pulse',story:'The skyline keeps moving behind a veil of wet city light.',wave:'triangle',gain:.024,notes:[[220,0,.12],[277,.22,.14],[330,.43,.12]]},
    paris:{accent:'#e3bf88',accent2:'#9ab9d7',ambient:'metro bell',story:'The Eiffel Tower glows softly through the damp Paris air.',wave:'sine',gain:.03,notes:[[523,0,.16],[659,.24,.2]]},
    newyork:{accent:'#9ebbe8',accent2:'#e7a069',ambient:'distant two-tone siren',story:'Rain light climbs the glass and the Empire State Building holds the horizon.',wave:'sine',gain:.023,notes:[[440,0,.3],[587,.34,.3],[440,.7,.3],[587,1.04,.34]]},
    seoul:{accent:'#dd91bd',accent2:'#8eafe5',ambient:'metro arrival chime',story:'N Seoul Tower sits above a city washed in pink-blue night light.',wave:'sine',gain:.028,notes:[[698,0,.14],[880,.18,.14],[1047,.38,.22]]},
    vancouver:{accent:'#72bfd0',accent2:'#7db49b',ambient:'harbour horn',story:'The waterfront skyline fades into cool Pacific mist.',wave:'sine',gain:.03,notes:[[98,0,.95],[123,.95,.55]]},
    amsterdam:{accent:'#eda36f',accent2:'#80b8d4',ambient:'bicycle bell',story:'Canal lights stretch into long amber lines across the wet night.',wave:'sine',gain:.025,notes:[[1175,0,.09],[1568,.12,.15]]},
    kyoto:{accent:'#cf8f84',accent2:'#d6b783',ambient:'temple bell',story:'The pagoda stands quietly while the wet city softens around it.',wave:'sine',gain:.04,notes:[[164,0,1.2],[123,1.05,1.0]]}
  };

  const regionByCity = {
    tokyo:'Asia',mumbai:'Asia',singapore:'Asia',seoul:'Asia',kyoto:'Asia',
    london:'Europe',paris:'Europe',amsterdam:'Europe',
    seattle:'North America',newyork:'North America',vancouver:'North America',
    saopaulo:'South America'
  };

  const $ = s => document.querySelector(s);
  const body = document.body;
  const img = $('#cityPhoto');
  img.classList.add('active-view');
  const imgAlt=img.cloneNode(false);
  imgAlt.removeAttribute('id');
  imgAlt.classList.remove('active-view','is-switching');
  imgAlt.classList.add('city-photo-alt');
  img.insertAdjacentElement('afterend',imgAlt);
  const photoLayers=[img,imgAlt];
  let activePhotoLayer=0;
  let currentView=null;
  let currentViewIndex=0;
  let viewTimer=null;
  let viewSwapSeq=0;

  const selectedCity = $('#selectedCity');
  const selectedTemp = $('#selectedTemp');
  const selectedCondition = $('#selectedCondition');
  const selectedMeta = $('#selectedMeta');
  const selectedTime = $('#selectedTime');
  const cityGrid = $('#cityGrid');
  const takeMe = $('#takeMe');
  const musicBtn = $('#musicBtn');
  const soundPanel = $('#soundPanel');
  const infoCard = $('#infoCard');
  const envChoices = [...document.querySelectorAll('[data-env-choice]')];
  const rainCanvas = $('#rainCanvas');
  const ctx = rainCanvas.getContext('2d', {alpha:true});


  // PLUVIA 7.6 — Living Glass
  const livingGlass=document.createElement('div');
  livingGlass.className='living-glass-layer';
  livingGlass.setAttribute('aria-hidden','true');

  const glassDropCount=matchMedia('(max-width:700px)').matches?7:10;
  for(let i=0;i<glassDropCount;i++){
    const drop=document.createElement('i');
    drop.className='living-glass-drop'+(i%3===0?' merge-drop':'');
    const x=7+Math.random()*86;
    const size=7+Math.random()*8;
    const duration=12+Math.random()*15;
    const delay=-(Math.random()*duration);
    const drift=-7+Math.random()*14;
    const trail=20+Math.random()*48;
    drop.style.setProperty('--gx',x+'vw');
    drop.style.setProperty('--gs',size+'px');
    drop.style.setProperty('--gsh',(size*1.22)+'px');
    drop.style.setProperty('--gd',duration+'s');
    drop.style.setProperty('--gdelay',delay+'s');
    drop.style.setProperty('--gdrift',drift+'px');
    drop.style.setProperty('--gdrift1',(drift*.2)+'px');
    drop.style.setProperty('--gdrift2',(drift*.48)+'px');
    drop.style.setProperty('--gdrift3',(drift*.75)+'px');
    drop.style.setProperty('--gtrail',trail+'px');
    livingGlass.appendChild(drop);
  }

  const condensation=document.createElement('canvas');
  condensation.className='glass-condensation';
  condensation.setAttribute('aria-hidden','true');
  const fogCtx=condensation.getContext('2d',{alpha:true});

  document.body.append(livingGlass,condensation);

  let fogW=0,fogH=0,fogScale=1;
  let refogTimer=null,refogSteps=0;
  let lastWipePaint=0;
  let wipeTrail=[];

  function paintFogBase(alpha=.12){
    if(!fogW||!fogH) return;
    fogCtx.save();
    fogCtx.globalCompositeOperation='source-over';
    const g=fogCtx.createLinearGradient(0,0,fogW,fogH);
    g.addColorStop(0,'rgba(220,235,242,'+(alpha*.82)+')');
    g.addColorStop(.48,'rgba(185,206,216,'+(alpha*.42)+')');
    g.addColorStop(1,'rgba(225,239,245,'+(alpha*.72)+')');
    fogCtx.fillStyle=g;
    fogCtx.fillRect(0,0,fogW,fogH);

    fogCtx.fillStyle='rgba(235,245,249,'+(alpha*.28)+')';
    const blobs=7;
    for(let i=0;i<blobs;i++){
      const x=(i*83%97)/100*fogW;
      const y=(i*47%91)/100*fogH;
      const r=Math.max(fogW,fogH)*(.08+(i%3)*.025);
      const rg=fogCtx.createRadialGradient(x,y,0,x,y,r);
      rg.addColorStop(0,'rgba(238,247,250,'+(alpha*.42)+')');
      rg.addColorStop(1,'rgba(238,247,250,0)');
      fogCtx.fillStyle=rg;
      fogCtx.fillRect(x-r,y-r,r*2,r*2);
    }
    fogCtx.restore();
  }

  function resizeCondensation(){
    const targetW=Math.min(540,Math.max(280,Math.round(innerWidth*.52)));
    const ratio=Math.max(.55,innerHeight/Math.max(1,innerWidth));
    fogW=targetW;
    fogH=Math.max(260,Math.round(targetW*ratio));
    condensation.width=fogW;
    condensation.height=fogH;
    fogScale=fogW/Math.max(1,innerWidth);
    fogCtx.clearRect(0,0,fogW,fogH);
    paintFogBase(.26);
  }

  function paintFogSpot(x,y,radius,alpha=.02){
    fogCtx.save();
    fogCtx.globalCompositeOperation='source-over';
    const rg=fogCtx.createRadialGradient(x,y,0,x,y,radius*1.14);
    rg.addColorStop(0,'rgba(220,236,243,'+alpha+')');
    rg.addColorStop(.68,'rgba(205,225,234,'+(alpha*.74)+')');
    rg.addColorStop(1,'rgba(205,225,234,0)');
    fogCtx.fillStyle=rg;
    fogCtx.beginPath();
    fogCtx.arc(x,y,radius*1.14,0,Math.PI*2);
    fogCtx.fill();
    fogCtx.restore();
  }

  function wipeCondensation(clientX,clientY){
    if(!body.classList.contains('immersive')) return;
    if(body.classList.contains('memory-open')||focusPanel?.classList.contains('open')) return;
    const now=performance.now();
    if(now-lastWipePaint<42) return;
    lastWipePaint=now;

    const x=clientX*fogScale;
    const y=clientY*(fogH/Math.max(1,innerHeight));
    const radius=Math.max(24,Math.min(46,fogW*.07));

    fogCtx.save();
    fogCtx.globalCompositeOperation='destination-out';
    const rg=fogCtx.createRadialGradient(x,y,0,x,y,radius);
    rg.addColorStop(0,'rgba(0,0,0,.88)');
    rg.addColorStop(.58,'rgba(0,0,0,.56)');
    rg.addColorStop(1,'rgba(0,0,0,0)');
    fogCtx.fillStyle=rg;
    fogCtx.beginPath();
    fogCtx.arc(x,y,radius,0,Math.PI*2);
    fogCtx.fill();
    fogCtx.restore();

    wipeTrail.push({x,y,r:radius});
    if(wipeTrail.length>28) wipeTrail.shift();
    refogSteps=0;
    if(!refogTimer){
      refogTimer=setInterval(()=>{
        if(!body.classList.contains('immersive')){
          clearInterval(refogTimer);refogTimer=null;wipeTrail=[];return;
        }
        wipeTrail.forEach(point=>paintFogSpot(point.x,point.y,point.r,.018));
        refogSteps++;
        if(refogSteps>=22){
          clearInterval(refogTimer);refogTimer=null;wipeTrail=[];
        }
      },240);
    }
  }

  function resetGlassFog(){
    clearInterval(refogTimer);refogTimer=null;refogSteps=0;wipeTrail=[];
    fogCtx.clearRect(0,0,fogW,fogH);
    paintFogBase(.26);
  }

  window.addEventListener('resize',resizeCondensation,{passive:true});
  resizeCondensation();

  // PLUVIA 7.7 — Environment Behaviors
  let envBehaviorTimer=null;
  let envEffectTimers=[];

  function clearEnvEffectTimers(){
    envEffectTimers.forEach(clearTimeout);
    envEffectTimers=[];
  }

  function stopEnvironmentBehavior(){
    clearTimeout(envBehaviorTimer);
    envBehaviorTimer=null;
    clearEnvEffectTimers();
    body.classList.remove('env-car-wiping','env-train-pass','env-rooftop-lightning');
  }

  function scheduleEnvTimeout(fn,delay){
    const id=setTimeout(fn,delay);
    envEffectTimers.push(id);
    return id;
  }

  function triggerCarWipe(){
    if(!body.classList.contains('immersive')||env!=='car') return;
    body.classList.remove('env-car-wiping');
    void body.offsetWidth;
    body.classList.add('env-car-wiping');

    const path=[
      [.53,.84],[.59,.75],[.65,.65],[.70,.55],[.75,.47],[.80,.40],[.84,.36],
      [.80,.40],[.75,.47],[.70,.55],[.65,.65],[.59,.75],[.53,.84]
    ];
    path.forEach(([px,py],i)=>{
      scheduleEnvTimeout(()=>wipeCondensation(innerWidth*px,innerHeight*py),i*55);
    });
    scheduleEnvTimeout(()=>body.classList.remove('env-car-wiping'),1120);
  }

  function triggerTrainPass(){
    if(!body.classList.contains('immersive')||env!=='train') return;
    body.classList.remove('env-train-pass');
    void body.offsetWidth;
    body.classList.add('env-train-pass');
    scheduleEnvTimeout(()=>body.classList.remove('env-train-pass'),1150);
  }

  function triggerRooftopLightning(){
    if(!body.classList.contains('immersive')||env!=='rooftop') return;
    body.classList.remove('env-rooftop-lightning');
    void body.offsetWidth;
    body.classList.add('env-rooftop-lightning');
    scheduleEnvTimeout(()=>body.classList.remove('env-rooftop-lightning'),520);
  }

  function scheduleEnvironmentBehavior(first=false){
    stopEnvironmentBehavior();
    if(!body.classList.contains('immersive')) return;

    if(env==='car'){
      const delay=first?1800:7600+Math.random()*2600;
      envBehaviorTimer=setTimeout(()=>{
        triggerCarWipe();
        envBehaviorTimer=setTimeout(()=>scheduleEnvironmentBehavior(false),1350);
      },delay);
      return;
    }

    if(env==='train'){
      const delay=first?3200+Math.random()*2200:9200+Math.random()*6200;
      envBehaviorTimer=setTimeout(()=>{
        triggerTrainPass();
        envBehaviorTimer=setTimeout(()=>scheduleEnvironmentBehavior(false),1450);
      },delay);
      return;
    }

    if(env==='rooftop'){
      const thunder=[95,96,99].includes(Number(weather?.code));
      const delay=first?(5200+Math.random()*3200):(thunder?7600+Math.random()*7200:22000+Math.random()*17000);
      envBehaviorTimer=setTimeout(()=>{
        triggerRooftopLightning();
        envBehaviorTimer=setTimeout(()=>scheduleEnvironmentBehavior(false),900);
      },delay);
    }
  }



  function cityViewList(id=active){
    return cityViews[id]||[{src:cities[id].image,pos:cities[id].pos,label:cities[id].landmark}];
  }

  function pickEntryView(id){
    const list=cityViewList(id);
    return Math.floor(Math.random()*list.length);
  }

  function preloadView(view){
    return new Promise(resolve=>{
      const pre=new Image();
      pre.onload=()=>resolve(true);
      pre.onerror=()=>resolve(false);
      pre.src=view.src;
    });
  }

  function applyCityView(index,{immediate=false}={}){
    const list=cityViewList(active);
    if(!list.length)return;
    index=((index%list.length)+list.length)%list.length;
    const view=list[index];
    const seq=++viewSwapSeq;
    const targetIndex=immediate?activePhotoLayer:1-activePhotoLayer;
    const target=photoLayers[targetIndex];
    const previous=photoLayers[activePhotoLayer];

    const commit=()=>{
      if(seq!==viewSwapSeq)return;
      target.src=view.src;
      target.style.objectPosition=view.pos||'50% 50%';
      target.dataset.viewLabel=view.label||'City view';
      target.classList.add('active-view');

      if(immediate){
        const other=photoLayers[1-targetIndex];
        other.classList.remove('active-view');
        other.removeAttribute('src');
      }else{
        previous.classList.remove('active-view');
      }

      activePhotoLayer=targetIndex;
      currentViewIndex=index;
      currentView=view;

      const next=list[(index+1)%list.length];
      if(next&&next!==view){const p=new Image();p.src=next.src;}
    };

    if(immediate){
      commit();
    }else{
      preloadView(view).then(ok=>{
        if(seq!==viewSwapSeq)return;
        if(ok)commit();
        else scheduleViewRotation(false);
      });
    }
  }

  function rotateCityView(){
    if(!body.classList.contains('immersive')||document.hidden)return scheduleViewRotation(false);
    const list=cityViewList(active);
    if(list.length<2)return;
    let next=currentViewIndex;
    while(next===currentViewIndex)next=Math.floor(Math.random()*list.length);
    applyCityView(next);
    scheduleViewRotation(false);
  }

  function scheduleViewRotation(first=false){
    clearTimeout(viewTimer);
    viewTimer=null;
    if(!body.classList.contains('immersive')||cityViewList(active).length<2)return;
    const delay=first?11000+Math.random()*3000:13000+Math.random()*5000;
    viewTimer=setTimeout(rotateCityView,delay);
  }

  const weatherPanel = document.querySelector('.weather');
  const rainStoryBtn = document.createElement('button');
  rainStoryBtn.className = 'rain-story-btn';
  rainStoryBtn.type = 'button';
  rainStoryBtn.setAttribute('aria-expanded','false');
  rainStoryBtn.innerHTML = '<span>Tell me about this rain</span><b>↗</b>';

  const rainStory = document.createElement('div');
  rainStory.className = 'rain-story';
  rainStory.innerHTML = '<small>PLUVIA / RAIN STORY</small><p id="rainStoryText"></p>';
  weatherPanel?.append(rainStoryBtn,rainStory);
  const rainStoryText = rainStory.querySelector('#rainStoryText');
  let rainStoryVariant = 0;

  // PLUVIA 7.3 — Storm Passage
  const cityPassage = document.createElement('div');
  cityPassage.className = 'city-passage';
  cityPassage.setAttribute('aria-hidden','true');
  cityPassage.innerHTML = '<div class="passage-rain"></div><div class="passage-cloud passage-cloud-a"></div><div class="passage-cloud passage-cloud-b"></div><div class="passage-copy"><small>PLUVIA / CROSSING THE STORM</small><strong id="passageCity">TOKYO</strong><span id="passageMeta">Tokyo Tower · local time</span></div>';
  document.body.appendChild(cityPassage);
  const passageCity = cityPassage.querySelector('#passageCity');
  const passageMeta = cityPassage.querySelector('#passageMeta');
  let transitionSeq = 0;
  let transitioning = false;

  function beginPassage(id){
    const c=cities[id], soul=citySoul[id]||citySoul.tokyo;
    passageCity.textContent=c.name.toUpperCase();
    passageMeta.textContent=c.landmark+' · '+localTime(c.tz)+' local';
    cityPassage.style.setProperty('--passage-accent',soul.accent);
    cityPassage.style.setProperty('--passage-accent2',soul.accent2);
    cityPassage.classList.remove('reveal');
    cityPassage.classList.add('active');
    cityPassage.setAttribute('aria-hidden','false');
    transitioning=true;
  }

  function revealPassage(seq){
    if(seq!==transitionSeq) return;
    cityPassage.classList.add('reveal');
    setTimeout(()=>{
      if(seq!==transitionSeq) return;
      cityPassage.classList.remove('active','reveal');
      cityPassage.setAttribute('aria-hidden','true');
      transitioning=false;
    },620);
  }

  // PLUVIA 7.1 — Rain Passport
  const passportMeta = {
    tokyo:{code:'TYO · JP',mark:'東京'},
    london:{code:'LON · UK',mark:'LON'},
    mumbai:{code:'BOM · IN',mark:'मुं'},
    seattle:{code:'SEA · US',mark:'SEA'},
    singapore:{code:'SIN · SG',mark:'SG'},
    saopaulo:{code:'SAO · BR',mark:'SP'},
    paris:{code:'PAR · FR',mark:'PAR'},
    newyork:{code:'NYC · US',mark:'NY'},
    seoul:{code:'SEL · KR',mark:'서울'},
    vancouver:{code:'YVR · CA',mark:'YVR'},
    amsterdam:{code:'AMS · NL',mark:'AMS'},
    kyoto:{code:'KYO · JP',mark:'京'}
  };

  let visited = new Set();
  try {
    const saved = JSON.parse(localStorage.getItem('pluvia-v71-passport') || '[]');
    if (Array.isArray(saved)) visited = new Set(saved.filter(id => cities[id]));
  } catch (_) {}

  let pendingStamp = null;
  let passportToastTimer = null;

  const passportBtn = document.createElement('button');
  passportBtn.className = 'pill passport-pill';
  passportBtn.type = 'button';
  passportBtn.innerHTML = '<span>Rain Passport</span><span class="passport-count" id="passportButtonCount">0 / '+order.length+' skies</span>';
  document.querySelector('.actions')?.appendChild(passportBtn);

  const passportScrim = document.createElement('div');
  passportScrim.className = 'passport-scrim';

  const passportPanel = document.createElement('section');
  passportPanel.className = 'passport-panel';
  passportPanel.setAttribute('role','dialog');
  passportPanel.setAttribute('aria-modal','true');
  passportPanel.setAttribute('aria-label','Pluvia Rain Passport');
  passportPanel.innerHTML = '<div class="passport-head">'+
    '<div><span class="micro">PLUVIA / 07.1 · RAIN PASSPORT</span><h3>Skies you\'ve experienced.</h3><p>Every city you enter leaves a rain stamp behind. Complete the 12-city collection to earn the World of Rain mark.</p></div>'+
    '<button class="passport-close" type="button" aria-label="Close passport">×</button></div>'+
    '<div class="passport-progress"><div class="passport-progress-track"><i id="passportProgressFill"></i></div><strong id="passportProgressText">0 / '+order.length+' skies experienced</strong></div>'+
    '<div class="passport-grid" id="passportGrid"></div>'+
    '<div class="passport-complete" id="passportComplete"><div><span>COLLECTION COMPLETE</span><strong>World of Rain</strong></div><span>'+String(order.length).padStart(2,'0')+' / '+String(order.length).padStart(2,'0')+' · ALL SKIES STAMPED</span></div>';
  document.body.append(passportScrim, passportPanel);

  const passportToast = document.createElement('div');
  passportToast.className = 'passport-toast';
  document.body.appendChild(passportToast);

  const passportGrid = passportPanel.querySelector('#passportGrid');
  const passportProgressFill = passportPanel.querySelector('#passportProgressFill');
  const passportProgressText = passportPanel.querySelector('#passportProgressText');
  const passportComplete = passportPanel.querySelector('#passportComplete');
  const passportButtonCount = passportBtn.querySelector('#passportButtonCount');

  const achievementSection = document.createElement('div');
  achievementSection.className = 'achievement-section';
  achievementSection.innerHTML = '<div class="achievement-head"><div><span class="micro">PASSPORT ACHIEVEMENTS</span><h4>Moments worth chasing.</h4></div><strong id="achievementCount">0 / 5 unlocked</strong></div><div class="achievement-grid" id="achievementGrid"></div>';
  passportPanel.appendChild(achievementSection);
  const achievementGrid = achievementSection.querySelector('#achievementGrid');
  const achievementCount = achievementSection.querySelector('#achievementCount');

  let achievementStats = {nightCities:[],rainCities:[],environments:[],unlocked:[]};
  try {
    const saved = JSON.parse(localStorage.getItem('pluvia-v72-achievements') || '{}');
    achievementStats = {
      nightCities:Array.isArray(saved.nightCities)?saved.nightCities.filter(id=>cities[id]):[],
      rainCities:Array.isArray(saved.rainCities)?saved.rainCities.filter(id=>cities[id]):[],
      environments:Array.isArray(saved.environments)?saved.environments.filter(x=>['cafe','apartment','hotel','train','car','rooftop'].includes(x)):[],
      unlocked:Array.isArray(saved.unlocked)?saved.unlocked:[]
    };
  } catch (_) {}

  const achievementDefs = [
    {id:'nightowl',icon:'☾',name:'Night Owl',desc:'Experience 5 different cities between midnight and 5 AM local time.',test:()=>achievementStats.nightCities.length>=5},
    {id:'monsoon',icon:'☂',name:'Monsoon Chaser',desc:'Enter 3 different cities while live rain is being reported.',test:()=>achievementStats.rainCities.length>=3},
    {id:'world',icon:'◎',name:'Around the World',desc:'Experience rain across Asia, Europe, North America and South America.',test:()=>new Set([...visited].map(id=>regionByCity[id]).filter(Boolean)).size>=4},
    {id:'windows',icon:'▦',name:'Window Seat',desc:'Experience the rain through all 6 Pluvia environments.',test:()=>achievementStats.environments.length>=6},
    {id:'allskies',icon:'✦',name:'World of Rain',desc:'Stamp every city currently in the Rain Passport.',test:()=>visited.size===order.length}
  ];
  let pendingAchievementToasts = [];

  function saveAchievementStats(){
    try { localStorage.setItem('pluvia-v72-achievements',JSON.stringify(achievementStats)); } catch (_) {}
  }

  function renderAchievements(){
    const unlocked = new Set(achievementStats.unlocked);
    achievementCount.textContent = unlocked.size + ' / ' + achievementDefs.length + ' unlocked';
    achievementGrid.innerHTML = achievementDefs.map(a =>
      '<div class="achievement-card '+(unlocked.has(a.id)?'unlocked':'locked')+'"><span class="achievement-icon">'+a.icon+'</span><div><strong>'+a.name+'</strong><small>'+a.desc+'</small></div><b>'+(unlocked.has(a.id)?'UNLOCKED':'LOCKED')+'</b></div>'
    ).join('');
  }

  function evaluateAchievements(notify=false){
    const unlocked = new Set(achievementStats.unlocked);
    const newly = [];
    achievementDefs.forEach(a=>{ if(a.test()&&!unlocked.has(a.id)){ unlocked.add(a.id); newly.push(a); } });
    achievementStats.unlocked = [...unlocked];
    saveAchievementStats();
    renderAchievements();
    if(notify&&newly.length){
      if(body.classList.contains('immersive')) pendingAchievementToasts.push(...newly.map(a=>'Achievement unlocked · '+a.name));
      else newly.forEach((a,i)=>setTimeout(()=>showPassportToast('Achievement unlocked · '+a.name),i*3200));
    }
  }

  function localHour(tz){
    const parts = new Intl.DateTimeFormat('en-US',{timeZone:tz,hour:'2-digit',hour12:false}).formatToParts(new Date());
    let h=Number(parts.find(p=>p.type==='hour')?.value||0); if(h===24)h=0; return h;
  }

  function recordExperience(id){
    const h=localHour(cities[id].tz);
    if(h>=0&&h<5&&!achievementStats.nightCities.includes(id)) achievementStats.nightCities.push(id);
    if(!achievementStats.environments.includes(env)) achievementStats.environments.push(env);
    saveAchievementStats();
    evaluateAchievements(true);
  }

  function recordRainExperience(id,currentWeather){
    if(Number(currentWeather?.rain||0)>0&&!achievementStats.rainCities.includes(id)){
      achievementStats.rainCities.push(id);
      saveAchievementStats();
      evaluateAchievements(true);
    }
  }

  evaluateAchievements(false);

  function persistPassport(){
    try { localStorage.setItem('pluvia-v71-passport', JSON.stringify([...visited])); } catch (_) {}
  }

  function renderPassport(){
    const count = visited.size;
    passportButtonCount.textContent = count + ' / ' + order.length + ' skies';
    passportProgressText.textContent = count + ' / ' + order.length + ' skies experienced';
    passportProgressFill.style.width = ((count / order.length) * 100) + '%';
    passportComplete.classList.toggle('show', count === order.length);
    renderAchievements();
    passportGrid.innerHTML = order.map(id => {
      const c = cities[id];
      const meta = passportMeta[id];
      const unlocked = visited.has(id);
      return '<button class="passport-stamp '+(unlocked?'visited':'locked')+'" data-passport-city="'+id+'" type="button" '+(unlocked?'':'disabled')+'>'+
        '<div class="stamp-top"><span class="stamp-code">'+meta.code+'</span><span class="stamp-mark">'+meta.mark+'</span></div>'+
        '<strong>'+c.name+'</strong><small>'+c.landmark+' · '+c.country+'</small>'+
        '<span class="stamp-status">'+(unlocked?'Stamped · enter again':'Locked · visit to unlock')+'</span></button>';
    }).join('');
  }

  function openPassport(){
    if (body.classList.contains('immersive')) return;
    renderPassport();
    passportScrim.classList.add('open');
    passportPanel.classList.add('open');
    body.style.overflow = 'hidden';
  }

  function closePassport(){
    passportScrim.classList.remove('open');
    passportPanel.classList.remove('open');
    if (!body.classList.contains('immersive')) body.style.overflow = '';
  }

  function showPassportToast(message){
    if (body.classList.contains('immersive')) return;
    passportToast.textContent = message;
    passportToast.classList.remove('show');
    void passportToast.offsetWidth;
    passportToast.classList.add('show');
    clearTimeout(passportToastTimer);
    passportToastTimer = setTimeout(() => passportToast.classList.remove('show'), 3000);
  }

  function earnStamp(id){
    if (!cities[id] || visited.has(id)) return;
    visited.add(id);
    persistPassport();
    renderPassport();
    pendingStamp = cities[id].name;
    evaluateAchievements(true);
  }

  passportBtn.addEventListener('click', openPassport);
  passportScrim.addEventListener('click', closePassport);
  passportPanel.querySelector('.passport-close').addEventListener('click', closePassport);
  passportGrid.addEventListener('click', event => {
    const stamp = event.target.closest('[data-passport-city]');
    if (!stamp || !visited.has(stamp.dataset.passportCity)) return;
    const id = stamp.dataset.passportCity;
    closePassport();
    selectCity(id,{enter:true});
  });

  renderPassport();

  let active = 'tokyo';
  let weather = null;
  let env = localStorage.getItem('pluvia-v7-env') || 'cafe';
  if (!['cafe','apartment','hotel','train','car','rooftop'].includes(env)) env='cafe';
  body.dataset.env = env;

  envChoices.forEach(b=>{
    b.classList.toggle('active', b.dataset.envChoice===env);
    b.addEventListener('click',()=>{
      env=b.dataset.envChoice;
      body.dataset.env=env;
      localStorage.setItem('pluvia-v7-env',env);
      envChoices.forEach(x=>x.classList.toggle('active',x===b));
      scheduleEnvironmentBehavior(true);
    });
  });

  cityGrid.innerHTML = order.map(id => {
    const c = cities[id];
    return '<button class="city-card" data-city="'+id+'"><strong>'+c.name+'</strong><span>'+c.landmark+'</span><small>'+c.country+' · enter rain</small></button>';
  }).join('');

  const phaseFor = tz => {
    const parts = new Intl.DateTimeFormat('en-US',{timeZone:tz,hour:'2-digit',hour12:false}).formatToParts(new Date());
    let h = Number(parts.find(p=>p.type==='hour')?.value || 0); if(h===24) h=0;
    return h>=5&&h<7?'dawn':h>=7&&h<17?'day':h>=17&&h<20?'dusk':'night';
  };
  const localTime = tz => new Intl.DateTimeFormat('en-US',{timeZone:tz,hour:'numeric',minute:'2-digit',hour12:true}).format(new Date());


  // PLUVIA 7.4 — Atmosphere Memories
  const environmentLabels = {
    cafe:'Café Window',
    apartment:'Apartment Window',
    hotel:'Hotel Room',
    train:'Train Window',
    car:'Car Windshield',
    rooftop:'Rooftop'
  };

  let memories = [];
  try {
    const saved = JSON.parse(localStorage.getItem('pluvia-v74-memories') || '[]');
    if (Array.isArray(saved)) memories = saved.filter(m => m && cities[m.cityId]).slice(0,24);
  } catch (_) {}

  let memoryDraft = null;
  let previewFromGallery = false;

  const captureMemoryBtn = document.createElement('button');
  captureMemoryBtn.id = 'captureMemoryBtn';
  captureMemoryBtn.className = 'capture-memory-btn';
  captureMemoryBtn.type = 'button';
  captureMemoryBtn.setAttribute('aria-label','Capture this moment');
  captureMemoryBtn.innerHTML = '<span class="capture-icon">◉</span><span>Capture this moment</span>';
  document.body.appendChild(captureMemoryBtn);

  const memoriesBtn = document.createElement('button');
  memoriesBtn.className = 'pill memories-pill';
  memoriesBtn.type = 'button';
  memoriesBtn.innerHTML = '<span>Atmosphere Memories</span><span class="memory-count" id="memoryCount">0 saved</span>';
  document.querySelector('.actions')?.appendChild(memoriesBtn);
  const memoryCount = memoriesBtn.querySelector('#memoryCount');

  const memoryScrim = document.createElement('div');
  memoryScrim.className = 'memory-scrim';

  const memoryPreview = document.createElement('section');
  memoryPreview.className = 'memory-preview';
  memoryPreview.setAttribute('role','dialog');
  memoryPreview.setAttribute('aria-modal','true');
  memoryPreview.setAttribute('aria-label','Atmosphere memory preview');
  memoryPreview.innerHTML =
    '<button class="memory-close memory-preview-close" type="button" aria-label="Close memory">×</button>'+
    '<div class="memory-preview-kicker">PLUVIA / ATMOSPHERE MEMORY</div>'+
    '<div id="memoryPreviewSlot"></div>'+
    '<div class="memory-preview-actions">'+
      '<button class="memory-action primary" id="saveMemoryBtn" type="button">Save memory</button>'+
      '<button class="memory-action export" id="exportMemoryBtn" type="button">Download PNG</button>'+
      '<button class="memory-action danger" id="deleteMemoryBtn" type="button">Remove memory</button>'+
      '<button class="memory-action" id="closeMemoryBtn" type="button">Close</button>'+
    '</div>';

  const memoryGallery = document.createElement('section');
  memoryGallery.className = 'memory-gallery';
  memoryGallery.setAttribute('role','dialog');
  memoryGallery.setAttribute('aria-modal','true');
  memoryGallery.setAttribute('aria-label','Atmosphere Memories');
  memoryGallery.innerHTML =
    '<div class="memory-gallery-head">'+
      '<div><span class="micro">PLUVIA / ATMOSPHERE MEMORIES</span><h3>Moments you kept.</h3><p>Small snapshots of weather, place and the window you were looking through.</p></div>'+
      '<button class="memory-close memory-gallery-close" type="button" aria-label="Close memories">×</button>'+
    '</div>'+
    '<div class="memory-gallery-grid" id="memoryGalleryGrid"></div>';

  const memoryToast = document.createElement('div');
  memoryToast.className = 'memory-toast';

  document.body.append(memoryScrim,memoryPreview,memoryGallery,memoryToast);

  const memoryPreviewSlot = memoryPreview.querySelector('#memoryPreviewSlot');
  const saveMemoryBtn = memoryPreview.querySelector('#saveMemoryBtn');
  const exportMemoryBtn = memoryPreview.querySelector('#exportMemoryBtn');
  const deleteMemoryBtn = memoryPreview.querySelector('#deleteMemoryBtn');
  const closeMemoryBtn = memoryPreview.querySelector('#closeMemoryBtn');
  const memoryGalleryGrid = memoryGallery.querySelector('#memoryGalleryGrid');

  function updateMemoryCount(){
    memoryCount.textContent = memories.length + (memories.length===1?' saved':' saved');
  }

  function persistMemories(){
    try { localStorage.setItem('pluvia-v74-memories',JSON.stringify(memories.slice(0,24))); } catch (_) {}
    updateMemoryCount();
  }

  // PLUVIA 7.5 — Focus / Sleep Mode
  const focusModes = {
    focus15:{label:'15 minute focus',minutes:15,fadeSeconds:60,kicker:'SHORT FOCUS'},
    focus30:{label:'30 minute focus',minutes:30,fadeSeconds:60,kicker:'DEEPER FOCUS'},
    focus60:{label:'1 hour focus',minutes:60,fadeSeconds:90,kicker:'LONG FOCUS'},
    sleep:{label:'Sleep mode',minutes:90,fadeSeconds:600,kicker:'SLEEP / 90 MIN'}
  };

  let focusSession=null;
  let focusTimer=null;
  let focusControlsTimer=null;
  let pendingFocusStart=null;
  let focusBaseMusicVolume=.72;
  let focusMusicWasPlaying=false;

  const focusMainBtn=document.createElement('button');
  focusMainBtn.className='pill focus-main-pill';
  focusMainBtn.type='button';
  focusMainBtn.innerHTML='<span>Focus / Sleep</span><span class="focus-pill-state">ambient timer</span>';
  document.querySelector('.actions')?.appendChild(focusMainBtn);

  const focusImmersiveBtn=document.createElement('button');
  focusImmersiveBtn.id='focusImmersiveBtn';
  focusImmersiveBtn.className='focus-immersive-btn';
  focusImmersiveBtn.type='button';
  focusImmersiveBtn.innerHTML='<span>◷</span><b>Focus</b>';
  document.body.appendChild(focusImmersiveBtn);

  const focusScrim=document.createElement('div');
  focusScrim.className='focus-scrim';

  const focusPanel=document.createElement('section');
  focusPanel.className='focus-panel';
  focusPanel.setAttribute('role','dialog');
  focusPanel.setAttribute('aria-modal','true');
  focusPanel.setAttribute('aria-label','Focus and Sleep Mode');
  focusPanel.innerHTML=
    '<div class="focus-panel-head"><div><span class="micro">PLUVIA / FOCUS & SLEEP</span><h3>Stay with the rain.</h3><p>Pluvia will hide the interface and leave you with the city, music and rain. Tap the scene anytime to reveal controls.</p></div><button class="focus-close" type="button" aria-label="Close focus menu">×</button></div>'+
    '<div class="focus-mode-grid">'+
      '<button class="focus-mode-card" type="button" data-focus-mode="focus15"><small>SHORT</small><strong>15 min</strong><span>Settle in</span></button>'+
      '<button class="focus-mode-card" type="button" data-focus-mode="focus30"><small>FOCUS</small><strong>30 min</strong><span>Quiet work</span></button>'+
      '<button class="focus-mode-card" type="button" data-focus-mode="focus60"><small>DEEP</small><strong>1 hour</strong><span>Long session</span></button>'+
      '<button class="focus-mode-card sleep" type="button" data-focus-mode="sleep"><small>SLEEP</small><strong>90 min</strong><span>10 min music fade</span></button>'+
    '</div>'+
    '<div class="focus-panel-note"><span>☂</span><p>Rain and city ambience stay subtle. Music fades gently near the end instead of stopping abruptly.</p></div>';

  const focusHud=document.createElement('div');
  focusHud.className='focus-hud';
  focusHud.innerHTML=
    '<div class="focus-hud-copy"><small id="focusHudKicker">FOCUS</small><strong id="focusHudTime">15:00</strong><span id="focusHudCity">Tokyo · Café Window</span></div>'+
    '<div class="focus-hud-actions"><button type="button" id="focusMusicToggle">Pause music</button><button type="button" id="focusEndBtn">End session</button></div>';

  const focusHint=document.createElement('div');
  focusHint.className='focus-hint';
  focusHint.textContent='Tap the scene to reveal focus controls';

  document.body.append(focusScrim,focusPanel,focusHud,focusHint);

  const focusHudKicker=focusHud.querySelector('#focusHudKicker');
  const focusHudTime=focusHud.querySelector('#focusHudTime');
  const focusHudCity=focusHud.querySelector('#focusHudCity');
  const focusMusicToggle=focusHud.querySelector('#focusMusicToggle');
  const focusEndBtn=focusHud.querySelector('#focusEndBtn');

  function formatFocusTime(seconds){
    const s=Math.max(0,Math.ceil(seconds));
    const m=Math.floor(s/60),r=s%60;
    return String(m).padStart(2,'0')+':'+String(r).padStart(2,'0');
  }

  function openFocusPanel(){
    focusScrim.classList.add('open');
    focusPanel.classList.add('open');
    if(!body.classList.contains('immersive')) body.style.overflow='hidden';
  }

  function closeFocusPanel(){
    focusScrim.classList.remove('open');
    focusPanel.classList.remove('open');
    if(!body.classList.contains('immersive')&&!body.classList.contains('memory-open')) body.style.overflow='';
  }

  function showFocusControls(duration=4800){
    if(!focusSession) return;
    body.classList.add('focus-controls-visible');
    clearTimeout(focusControlsTimer);
    focusControlsTimer=setTimeout(()=>body.classList.remove('focus-controls-visible'),duration);
  }

  function updateFocusHud(){
    if(!focusSession) return;
    const remaining=Math.max(0,(focusSession.endsAt-Date.now())/1000);
    focusHudTime.textContent=formatFocusTime(remaining);
    focusHudKicker.textContent=focusSession.mode.kicker;
    focusHudCity.textContent=cities[active].name+' · '+(environmentLabels[env]||env);
    focusMusicToggle.textContent=audio.paused?'Play music':'Pause music';
  }

  function applyFocusFade(){
    if(!focusSession) return;
    const remaining=Math.max(0,(focusSession.endsAt-Date.now())/1000);
    const fade=focusSession.mode.fadeSeconds;
    if(remaining<=fade){
      const factor=Math.max(0,Math.min(1,remaining/fade));
      audio.volume=focusBaseMusicVolume*factor;
    }else{
      audio.volume=focusBaseMusicVolume;
    }
  }

  function finishFocusSession({manual=false}={}){
    if(!focusSession) return;
    clearInterval(focusTimer);
    clearTimeout(focusControlsTimer);
    const label=focusSession.mode.label;
    focusSession=null;
    body.classList.remove('focus-active','focus-controls-visible');
    focusHud.classList.remove('active');
    focusHint.classList.remove('show');
    ++musicRequestId;
    audio.pause();
    audio.volume=Number(mix.music.value)/100;
    focusMainBtn.querySelector('.focus-pill-state').textContent='ambient timer';
    if(!manual) showMemoryToast(label+' complete · rain continues');
  }

  function focusTick(){
    if(!focusSession) return;
    const remaining=(focusSession.endsAt-Date.now())/1000;
    applyFocusFade();
    updateFocusHud();
    if(remaining<=0) finishFocusSession({manual:false});
  }

  function activateFocus(modeKey){
    const mode=focusModes[modeKey];
    if(!mode) return;
    if(focusSession) finishFocusSession({manual:true});

    try{
      initSound();
      if(ac?.state==='suspended') ac.resume().catch(()=>{});
    }catch(_){}

    focusBaseMusicVolume=Number(mix.music.value)/100;
    focusMusicWasPlaying=!audio.paused;
    audio.volume=focusBaseMusicVolume;
    void playSelectedTrack();

    focusSession={
      key:modeKey,
      mode,
      startedAt:Date.now(),
      endsAt:Date.now()+mode.minutes*60*1000
    };

    soundPanel.classList.remove('open');
    body.classList.add('focus-active','focus-controls-visible');
    focusHud.classList.add('active');
    focusHint.classList.add('show');
    focusMainBtn.querySelector('.focus-pill-state').textContent=mode.minutes+' min active';

    clearInterval(focusTimer);
    focusTimer=setInterval(focusTick,1000);
    updateFocusHud();
    clearTimeout(focusControlsTimer);
    focusControlsTimer=setTimeout(()=>{
      body.classList.remove('focus-controls-visible');
      focusHint.classList.remove('show');
    },5200);
  }

  function startFocus(modeKey){
    closeFocusPanel();
    try{
      initSound();
      if(ac?.state==='suspended') ac.resume().catch(()=>{});
    }catch(_){}

    if(body.classList.contains('immersive')){
      activateFocus(modeKey);
    }else{
      pendingFocusStart=modeKey;
      selectCity(active,{enter:true});
    }
  }

  focusMainBtn.addEventListener('click',openFocusPanel);
  focusImmersiveBtn.addEventListener('click',e=>{e.stopPropagation();openFocusPanel();});
  focusPanel.querySelector('.focus-close').addEventListener('click',closeFocusPanel);
  focusScrim.addEventListener('click',closeFocusPanel);
  focusPanel.addEventListener('click',e=>{
    const card=e.target.closest('[data-focus-mode]');
    if(card) startFocus(card.dataset.focusMode);
  });

  focusMusicToggle.addEventListener('click',e=>{
    e.stopPropagation();
    if(audio.paused)void playSelectedTrack();
    else audio.pause();
    updateFocusHud();
    showFocusControls();
  });

  focusEndBtn.addEventListener('click',e=>{
    e.stopPropagation();
    finishFocusSession({manual:true});
  });

  function cityLocalDate(tz,date=new Date()){
    return new Intl.DateTimeFormat('en-US',{timeZone:tz,month:'short',day:'numeric',year:'numeric'}).format(date);
  }

  function captureMemoryData(){
    const c=cities[active];
    const soul=citySoul[active]||citySoul.tokyo;
    const now=new Date();
    return {
      id:'m'+Date.now()+'-'+Math.random().toString(36).slice(2,7),
      cityId:active,
      city:c.name,
      country:c.country,
      landmark:c.landmark,
      time:localTime(c.tz),
      date:cityLocalDate(c.tz,now),
      temp:weather&&Number.isFinite(Number(weather.temp))?Math.round(Number(weather.temp)):null,
      rain:weather&&Number.isFinite(Number(weather.rain))?Number(weather.rain):null,
      condition:weather?weatherText(weather.code):'Live weather syncing',
      envKey:env,
      environment:environmentLabels[env]||env,
      image:currentView?.src||c.image,
      imagePos:currentView?.pos||c.pos||'50% 50%',
      viewLabel:currentView?.label||c.landmark,
      accent:soul.accent,
      accent2:soul.accent2,
      phase:phaseFor(c.tz),
      capturedAt:now.toISOString()
    };
  }

  function memoryWeatherLine(m){
    if(m.temp===null||m.rain===null) return m.time+' · Live weather syncing';
    return m.time+' · '+m.temp+'°C · '+Number(m.rain).toFixed(1)+' mm rain';
  }

  function memoryCardMarkup(m,compact=false){
    return '<article class="atmosphere-card '+(compact?'compact':'')+'" data-memory-card="'+m.id+'" style="--memory-accent:'+m.accent+';--memory-accent2:'+m.accent2+'">'+
      '<div class="memory-card-image" data-memory-image="'+m.id+'"></div>'+
      '<div class="memory-card-shade"></div>'+
      '<div class="memory-card-content">'+
        '<div class="memory-card-top"><span>PLUVIA</span><span>'+m.date.toUpperCase()+'</span></div>'+
        '<div class="memory-card-main"><small>'+m.country+'</small><h4>'+m.city+'</h4><em>'+m.landmark+'</em></div>'+
        '<div class="memory-card-data"><strong>'+memoryWeatherLine(m)+'</strong><span>'+m.environment+'</span></div>'+
        '<div class="memory-card-foot"><span>'+m.condition+'</span><span>ATMOSPHERE MEMORY</span></div>'+
      '</div>'+
    '</article>';
  }

  function applyMemoryImages(root,list){
    list.forEach(m=>{
      const el=root.querySelector('[data-memory-image="'+m.id+'"]');
      if(el) el.style.backgroundImage='url("'+m.image.replace(/"/g,'%22')+'")';
    });
  }


  // PLUVIA 7.8 — Memory Export
  function parseHexColor(hex,fallback='#86cfff'){
    const clean=String(hex||fallback).replace('#','');
    const val=/^[0-9a-f]{6}$/i.test(clean)?clean:fallback.replace('#','');
    return {
      r:parseInt(val.slice(0,2),16),
      g:parseInt(val.slice(2,4),16),
      b:parseInt(val.slice(4,6),16)
    };
  }

  function rgba(hex,alpha){
    const c=parseHexColor(hex);
    return 'rgba('+c.r+','+c.g+','+c.b+','+alpha+')';
  }

  function roundedRectPath(ctx,x,y,w,h,r){
    const rr=Math.min(r,w/2,h/2);
    ctx.beginPath();
    ctx.moveTo(x+rr,y);
    ctx.arcTo(x+w,y,x+w,y+h,rr);
    ctx.arcTo(x+w,y+h,x,y+h,rr);
    ctx.arcTo(x,y+h,x,y,rr);
    ctx.arcTo(x,y,x+w,y,rr);
    ctx.closePath();
  }

  function drawTextFit(ctx,text,x,y,maxWidth,startSize,minSize,fontFamily,weight='600'){
    let size=startSize;
    do{
      ctx.font=weight+' '+size+'px '+fontFamily;
      if(ctx.measureText(text).width<=maxWidth) break;
      size-=2;
    }while(size>minSize);
    ctx.fillText(text,x,y);
    return size;
  }

  function drawCoverImage(ctx,image,w,h,pos='50% 50%'){
    const parts=String(pos||'50% 50%').split(/\s+/);
    const px=Math.max(0,Math.min(100,parseFloat(parts[0])||50))/100;
    const py=Math.max(0,Math.min(100,parseFloat(parts[1])||50))/100;
    const scale=Math.max(w/image.width,h/image.height);
    const dw=image.width*scale,dh=image.height*scale;
    const overflowX=Math.max(0,dw-w),overflowY=Math.max(0,dh-h);
    const dx=-overflowX*px,dy=-overflowY*py;
    ctx.drawImage(image,dx,dy,dw,dh);
  }

  async function resolveWikimediaExportUrl(url){
    try{
      const parsed=new URL(url,location.href);
      if(parsed.hostname!=='commons.wikimedia.org'||!parsed.pathname.includes('/Special:Redirect/file/')) return url;
      const marker='/Special:Redirect/file/';
      const filename=decodeURIComponent(parsed.pathname.slice(parsed.pathname.indexOf(marker)+marker.length));
      if(!filename) return url;
      const api='https://commons.wikimedia.org/w/api.php?origin=*&action=query&format=json&prop=imageinfo&iiprop=url&iiurlwidth=1400&titles='+encodeURIComponent('File:'+filename);
      const res=await fetch(api,{mode:'cors',cache:'force-cache'});
      if(!res.ok) return url;
      const data=await res.json();
      const page=Object.values(data?.query?.pages||{})[0];
      return page?.imageinfo?.[0]?.thumburl||page?.imageinfo?.[0]?.url||url;
    }catch(_){
      return url;
    }
  }

  async function loadImageElement(url){
    return await new Promise((resolve,reject)=>{
      const im=new Image();
      im.crossOrigin='anonymous';
      im.onload=()=>resolve(im);
      im.onerror=reject;
      im.src=url;
    });
  }

  async function loadExportImage(url){
    const resolved=await resolveWikimediaExportUrl(url);

    try{
      const image=await loadImageElement(resolved);
      return {image,objectUrl:null};
    }catch(_){}

    try{
      const res=await fetch(resolved,{mode:'cors',cache:'force-cache'});
      if(!res.ok) throw new Error('image fetch failed');
      const blob=await res.blob();
      const objectUrl=URL.createObjectURL(blob);
      const image=await new Promise((resolve,reject)=>{
        const im=new Image();
        im.onload=()=>resolve(im);
        im.onerror=reject;
        im.src=objectUrl;
      });
      return {image,objectUrl};
    }catch(_){
      return null;
    }
  }

  function drawMemoryRain(ctx,w,h,accent){
    ctx.save();
    ctx.globalAlpha=.17;
    ctx.strokeStyle=rgba(accent,.72);
    ctx.lineWidth=2;
    for(let i=0;i<34;i++){
      const x=(i*83%101)/101*w;
      const y=(i*149%103)/103*h;
      const len=30+(i%7)*8;
      ctx.beginPath();
      ctx.moveTo(x,y);
      ctx.lineTo(x+9,y+len);
      ctx.stroke();
    }
    ctx.restore();
  }

  async function renderMemoryPng(memory){
    const W=1200,H=1500;
    const canvas=document.createElement('canvas');
    canvas.width=W;canvas.height=H;
    const c=canvas.getContext('2d');

    const accent=memory.accent||'#86cfff';
    const accent2=memory.accent2||'#e986a6';

    const bg=c.createLinearGradient(0,0,W,H);
    bg.addColorStop(0,'#07131a');
    bg.addColorStop(.58,'#071016');
    bg.addColorStop(1,'#020609');
    c.fillStyle=bg;
    c.fillRect(0,0,W,H);

    let loaded=null;
    if(memory.image) loaded=await loadExportImage(memory.image);

    if(loaded?.image){
      c.save();
      roundedRectPath(c,42,42,W-84,H-84,44);
      c.clip();
      drawCoverImage(c,loaded.image,W,H,memory.imagePos||'50% 50%');
      c.restore();
    }else{
      const fallback=c.createRadialGradient(W*.72,H*.18,0,W*.72,H*.18,W*.72);
      fallback.addColorStop(0,rgba(accent,.28));
      fallback.addColorStop(.46,rgba(accent2,.12));
      fallback.addColorStop(1,'rgba(3,8,12,0)');
      c.fillStyle=fallback;c.fillRect(0,0,W,H);
    }

    const shade=c.createLinearGradient(0,0,0,H);
    shade.addColorStop(0,'rgba(2,7,10,.10)');
    shade.addColorStop(.34,'rgba(2,7,10,.17)');
    shade.addColorStop(.66,'rgba(2,7,10,.50)');
    shade.addColorStop(1,'rgba(1,5,8,.94)');
    c.fillStyle=shade;c.fillRect(0,0,W,H);

    const glow=c.createRadialGradient(W*.76,H*.14,0,W*.76,H*.14,W*.58);
    glow.addColorStop(0,rgba(accent,.28));
    glow.addColorStop(1,rgba(accent,0));
    c.fillStyle=glow;c.fillRect(0,0,W,H);

    drawMemoryRain(c,W,H,accent);

    c.strokeStyle=rgba(accent,.38);
    c.lineWidth=2;
    roundedRectPath(c,42,42,W-84,H-84,44);
    c.stroke();

    c.fillStyle='rgba(224,239,246,.72)';
    c.font='700 22px Manrope, sans-serif';
    c.letterSpacing='4px';
    c.fillText('PLUVIA',82,104);
    c.textAlign='right';
    c.fillText(String(memory.date||'').toUpperCase(),W-82,104);
    c.textAlign='left';

    const baseY=890;
    c.fillStyle=rgba(accent,.88);
    c.font='700 22px Manrope, sans-serif';
    c.fillText(String(memory.country||'').toUpperCase(),82,baseY);

    c.fillStyle='#f1f7fa';
    drawTextFit(c,memory.city||'',82,baseY+125,W-164,112,66,'"Playfair Display", Georgia, serif','600');

    c.fillStyle='rgba(216,231,238,.86)';
    c.font='italic 500 38px "Playfair Display", Georgia, serif';
    c.fillText(memory.landmark||'',82,baseY+185);

    c.strokeStyle='rgba(255,255,255,.16)';
    c.lineWidth=2;
    c.beginPath();c.moveTo(82,baseY+246);c.lineTo(W-82,baseY+246);c.stroke();

    c.fillStyle='#f2f8fb';
    c.font='600 29px Manrope, sans-serif';
    c.fillText(memoryWeatherLine(memory),82,baseY+315);

    c.font='700 19px Manrope, sans-serif';
    const envText=String(memory.environment||'').toUpperCase();
    const envWidth=c.measureText(envText).width+42;
    c.fillStyle=rgba(accent,.13);
    roundedRectPath(c,82,baseY+352,envWidth,48,24);c.fill();
    c.strokeStyle=rgba(accent,.42);c.stroke();
    c.fillStyle='rgba(211,229,237,.88)';
    c.fillText(envText,103,baseY+384);

    c.strokeStyle='rgba(255,255,255,.11)';
    c.beginPath();c.moveTo(82,H-136);c.lineTo(W-82,H-136);c.stroke();

    c.font='700 17px Manrope, sans-serif';
    c.fillStyle='rgba(131,154,165,.9)';
    c.fillText(String(memory.condition||'').toUpperCase(),82,H-90);

    c.textAlign='right';
    c.fillStyle=rgba(accent2,.84);
    c.fillText('ATMOSPHERE MEMORY',W-82,H-90);
    c.textAlign='left';

    if(loaded?.objectUrl) URL.revokeObjectURL(loaded.objectUrl);

    return await new Promise((resolve,reject)=>{
      canvas.toBlob(blob=>blob?resolve(blob):reject(new Error('PNG render failed')),'image/png',.96);
    });
  }

  function safeMemoryFilename(memory){
    const city=String(memory.city||'pluvia').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
    const date=String(memory.date||'memory').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
    return 'pluvia-'+city+'-'+date+'.png';
  }

  async function downloadMemoryPng(memory){
    if(!memory||exportMemoryBtn.disabled) return;
    const original=exportMemoryBtn.textContent;
    exportMemoryBtn.disabled=true;
    exportMemoryBtn.textContent='Rendering…';

    try{
      if(document.fonts?.ready) await document.fonts.ready;
      const blob=await renderMemoryPng(memory);
      const url=URL.createObjectURL(blob);
      const link=document.createElement('a');
      link.href=url;
      link.download=safeMemoryFilename(memory);
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(()=>URL.revokeObjectURL(url),3000);
      exportMemoryBtn.textContent='Downloaded ✓';
      showMemoryToast('PNG exported · '+memory.city);
      setTimeout(()=>{
        exportMemoryBtn.disabled=false;
        exportMemoryBtn.textContent=original;
      },1800);
    }catch(_){
      exportMemoryBtn.disabled=false;
      exportMemoryBtn.textContent=original;
      showMemoryToast('Could not export this memory');
    }
  }

  function showMemoryToast(message){
    memoryToast.textContent=message;
    memoryToast.classList.remove('show');
    void memoryToast.offsetWidth;
    memoryToast.classList.add('show');
    setTimeout(()=>memoryToast.classList.remove('show'),2600);
  }

  function openMemoryLayer(){
    memoryScrim.classList.add('open');
    body.classList.add('memory-open');
    if(!body.classList.contains('immersive')) body.style.overflow='hidden';
  }

  function closeAllMemoryLayers(){
    memoryPreview.classList.remove('open');
    memoryGallery.classList.remove('open');
    memoryScrim.classList.remove('open');
    body.classList.remove('memory-open');
    if(!body.classList.contains('immersive')) body.style.overflow='';
    memoryDraft=null;
    previewFromGallery=false;
  }

  function renderMemoryPreview(m,{saved=false,fromGallery=false}={}){
    memoryDraft=m;
    previewFromGallery=fromGallery;
    memoryPreviewSlot.innerHTML=memoryCardMarkup(m,false);
    applyMemoryImages(memoryPreviewSlot,[m]);
    saveMemoryBtn.hidden=saved;
    deleteMemoryBtn.hidden=!saved;
    exportMemoryBtn.disabled=false;
    exportMemoryBtn.textContent='Download PNG';
    saveMemoryBtn.disabled=false;
    saveMemoryBtn.textContent='Save memory';
    memoryGallery.classList.remove('open');
    memoryPreview.classList.add('open');
    openMemoryLayer();
  }

  function renderMemoryGallery(){
    if(!memories.length){
      memoryGalleryGrid.innerHTML='<div class="memory-empty"><span>◌</span><strong>No memories yet.</strong><p>Enter a rainy city and use “Capture this moment” to keep your first atmosphere.</p></div>';
      return;
    }
    memoryGalleryGrid.innerHTML=memories.map(m=>'<button class="memory-gallery-item" type="button" data-memory-open="'+m.id+'">'+memoryCardMarkup(m,true)+'</button>').join('');
    applyMemoryImages(memoryGalleryGrid,memories);
  }

  function openMemoryGallery(){
    if(body.classList.contains('immersive')) return;
    renderMemoryGallery();
    memoryPreview.classList.remove('open');
    memoryGallery.classList.add('open');
    openMemoryLayer();
  }

  captureMemoryBtn.addEventListener('click',e=>{
    e.stopPropagation();
    if(!body.classList.contains('immersive')||transitioning) return;
    renderMemoryPreview(captureMemoryData(),{saved:false,fromGallery:false});
  });

  memoriesBtn.addEventListener('click',openMemoryGallery);

  exportMemoryBtn.addEventListener('click',()=>downloadMemoryPng(memoryDraft));

  saveMemoryBtn.addEventListener('click',()=>{
    if(!memoryDraft) return;
    if(memories.some(m=>m.id===memoryDraft.id)) return;
    memories.unshift(memoryDraft);
    memories=memories.slice(0,24);
    persistMemories();
    saveMemoryBtn.disabled=true;
    saveMemoryBtn.textContent='Saved ✓';
    showMemoryToast(memoryDraft.city+' atmosphere saved');
  });

  deleteMemoryBtn.addEventListener('click',()=>{
    if(!memoryDraft) return;
    const removed=memoryDraft;
    memories=memories.filter(m=>m.id!==removed.id);
    persistMemories();
    memoryPreview.classList.remove('open');
    renderMemoryGallery();
    memoryGallery.classList.add('open');
    previewFromGallery=false;
    memoryDraft=null;
    showMemoryToast('Memory removed');
  });

  memoryGalleryGrid.addEventListener('click',e=>{
    const item=e.target.closest('[data-memory-open]');
    if(!item) return;
    const m=memories.find(x=>x.id===item.dataset.memoryOpen);
    if(m) renderMemoryPreview(m,{saved:true,fromGallery:true});
  });

  function closeMemoryPreview(){
    memoryPreview.classList.remove('open');
    if(previewFromGallery&&!body.classList.contains('immersive')){
      renderMemoryGallery();
      memoryGallery.classList.add('open');
      previewFromGallery=false;
      memoryDraft=null;
      return;
    }
    closeAllMemoryLayers();
  }

  memoryPreview.querySelector('.memory-preview-close').addEventListener('click',closeMemoryPreview);
  closeMemoryBtn.addEventListener('click',closeMemoryPreview);
  memoryGallery.querySelector('.memory-gallery-close').addEventListener('click',closeAllMemoryLayers);
  memoryScrim.addEventListener('click',closeAllMemoryLayers);

  updateMemoryCount();

  function buildRainStory(){
    const c=cities[active], soul=citySoul[active];
    const time=localTime(c.tz);
    const h=localHour(c.tz);
    const timeMood=h<5?'deep night':h<8?'early morning':h<17?'daylight':h<21?'evening':'late night';
    const rain=Number(weather?.rain||0);
    let signal;
    if(!weather) signal='The live weather signal is quiet for a moment.';
    else if(rain>=2) signal=rain.toFixed(1)+' mm of rain is moving through the city right now.';
    else if(rain>0) signal='A light '+rain.toFixed(1)+' mm rain signal is being reported right now.';
    else signal='The live signal reads '+weatherText(weather.code).toLowerCase()+' right now, while Pluvia keeps the glass wet.';
    const endings=[
      soul.story,
      'From this window, '+c.landmark+' becomes the still point in the '+timeMood+'.',
      'Stay a little longer—the city feels different when you stop checking the weather and simply watch it.'
    ];
    return time+' in '+c.name+'. '+signal+' '+endings[rainStoryVariant%endings.length];
  }

  function refreshRainStory(){
    rainStoryText.textContent=buildRainStory();
  }

  rainStoryBtn.addEventListener('click',()=>{
    const opening=!rainStory.classList.contains('show');
    if(opening){ rainStoryVariant++; refreshRainStory(); }
    else { rainStoryVariant++; refreshRainStory(); }
    rainStory.classList.add('show');
    rainStoryBtn.classList.add('active');
    rainStoryBtn.setAttribute('aria-expanded','true');
    rainStoryBtn.querySelector('span').textContent='Another rain story';
  });

  function weatherText(code){
    if ([95,96,99].includes(code)) return 'Thunderstorm';
    if ([80,81,82].includes(code)) return 'Rain showers';
    if ([61,63,65].includes(code)) return 'Rain';
    if ([51,53,55,56,57].includes(code)) return 'Drizzle';
    if ([71,73,75,77,85,86].includes(code)) return 'Snow';
    if ([1,2,3].includes(code)) return 'Cloudy';
    if (code===0) return 'Clear';
    return 'Wet sky';
  }

  async function fetchWeather(id){
    const c=cities[id];
    selectedCondition.textContent='Reading the sky…';
    try{
      const url='https://api.open-meteo.com/v1/forecast?latitude='+c.lat+'&longitude='+c.lon+'&current=temperature_2m,precipitation,rain,weather_code,wind_speed_10m&timezone=auto';
      const res=await fetch(url,{cache:'no-store'});
      const data=await res.json();
      const x=data.current||{};
      weather={temp:x.temperature_2m,rain:x.rain??x.precipitation??0,wind:x.wind_speed_10m??0,code:x.weather_code};
      selectedTemp.textContent=Math.round(weather.temp)+'°';
      selectedCondition.textContent=weatherText(weather.code);
      selectedMeta.textContent=Number(weather.rain).toFixed(1)+' mm rain · '+Math.round(weather.wind)+' km/h wind';
      document.documentElement.style.setProperty('--glass-rain-opacity',String(Math.min(.9,.42+Number(weather.rain||0)*.08)));
      if(active===id&&body.classList.contains('immersive')&&env==='rooftop'&&[95,96,99].includes(Number(weather.code))) scheduleEnvironmentBehavior(false);
      if(active===id&&rainStory.classList.contains('show')) refreshRainStory();
      if(active===id&&body.classList.contains('immersive')) recordRainExperience(id,weather);
      return weather;
    }catch(_){
      weather=null;
      selectedTemp.textContent='—°';
      selectedCondition.textContent='Live weather unavailable';
      selectedMeta.textContent='The rain experience is still available';
      return null;
    }
  }

  function applyCityTheme(id){
    const soul=citySoul[id]||citySoul.tokyo;
    document.documentElement.style.setProperty('--accent',soul.accent);
    document.documentElement.style.setProperty('--accent2',soul.accent2);
    body.dataset.city=id;
    cityGrid.querySelectorAll('[data-city]').forEach(card=>card.classList.toggle('active',card.dataset.city===id));
    const hint=soundPanel.querySelector(':scope > span');
    if(hint) hint.textContent=cities[id].name+' · '+soul.ambient+' · hold the music button for the mixer';
  }

  function selectCity(id,{enter=false}={}){
    if(!cities[id]) return;
    if(enter&&transitioning) return;

    const c=cities[id];
    const cinematic=enter&&!matchMedia('(prefers-reduced-motion:reduce)').matches;
    const seq=++transitionSeq;
    const entryViewIndex=pickEntryView(id);
    const entryView=cityViews[id][entryViewIndex];

    if(cinematic) beginPassage(id);

    const preload=new Image();

    const commit=()=>{
      if(seq!==transitionSeq) return;

      clearTimeout(viewTimer);viewTimer=null;
      active=id;
      applyCityTheme(id);
      rainStory.classList.remove('show');
      rainStoryBtn.classList.remove('active');
      rainStoryBtn.setAttribute('aria-expanded','false');
      rainStoryBtn.querySelector('span').textContent='Tell me about this rain';
      weather=null;

      currentViewIndex=entryViewIndex;
      currentView=entryView;
      const layer=photoLayers[activePhotoLayer];
      layer.src=entryView.src;
      layer.style.objectPosition=entryView.pos||c.pos;
      layer.dataset.viewLabel=entryView.label||c.landmark;
      layer.classList.add('active-view');
      photoLayers[1-activePhotoLayer].classList.remove('active-view');

      selectedCity.textContent=c.name;
      selectedTime.textContent=localTime(c.tz)+' local';
      body.dataset.phase=phaseFor(c.tz);
      chooseTrack();
      fetchWeather(id);

      if(enter){
        enterImmersive();
        earnStamp(id);
      }

      const nextCity=order[(order.indexOf(id)+1)%order.length];
      const nextViews=cityViews[nextCity];
      if(nextViews?.length){const p=new Image();p.src=nextViews[0].src;}

      if(cinematic){
        setTimeout(()=>revealPassage(seq),260);
      }else{
        transitioning=false;
      }
    };

    preload.onload=commit;
    preload.onerror=()=>{
      if(seq!==transitionSeq)return;
      const fallback=cityViews[id][0];
      currentViewIndex=0;
      currentView=fallback;
      const layer=photoLayers[activePhotoLayer];
      layer.src=fallback.src;
      layer.style.objectPosition=fallback.pos||c.pos;
      layer.dataset.viewLabel=fallback.label||c.landmark;
      layer.classList.add('active-view');
      active=id;
      applyCityTheme(id);
      rainStory.classList.remove('show');
      rainStoryBtn.classList.remove('active');
      rainStoryBtn.setAttribute('aria-expanded','false');
      rainStoryBtn.querySelector('span').textContent='Tell me about this rain';
      weather=null;
      selectedCity.textContent=c.name;
      selectedTime.textContent=localTime(c.tz)+' local';
      body.dataset.phase=phaseFor(c.tz);
      chooseTrack();
      fetchWeather(id);
      if(enter){enterImmersive();earnStamp(id);}
      if(cinematic)setTimeout(()=>revealPassage(seq),260);else transitioning=false;
    };
    preload.src=entryView.src;
  }

  cityGrid.addEventListener('click',e=>{
    const b=e.target.closest('[data-city]');
    if(b) selectCity(b.dataset.city,{enter:true});
  });

  takeMe.addEventListener('click', async ()=>{
    takeMe.disabled=true; takeMe.textContent='Finding rain…';
    let candidates=[];
    await Promise.all(order.map(async id=>{
      const c=cities[id];
      try{
        const r=await fetch('https://api.open-meteo.com/v1/forecast?latitude='+c.lat+'&longitude='+c.lon+'&current=rain,precipitation&timezone=auto');
        const d=await r.json(); const x=d.current||{};
        if(Number(x.rain??x.precipitation??0)>0) candidates.push(id);
      }catch(_){}
    }));
    if(!candidates.length) candidates=order;
    const id=candidates[Math.floor(Math.random()*candidates.length)];
    selectCity(id,{enter:true});
    takeMe.disabled=false; takeMe.textContent="Take me somewhere it's raining";
  });

  function enterImmersive(){
    body.classList.add('immersive');
    resetGlassFog();
    recordExperience(active);
    if(pendingFocusStart){
      const modeKey=pendingFocusStart;
      pendingFocusStart=null;
      setTimeout(()=>activateFocus(modeKey),760);
    }
    soundPanel.classList.remove('open');
    resizeRain();
    scheduleEnvironmentBehavior(true);
    scheduleViewRotation(true);
  }
  function exitImmersive(){
    clearTimeout(viewTimer);viewTimer=null;
    stopEnvironmentBehavior();
    clearInterval(refogTimer);refogTimer=null;wipeTrail=[];
    if(focusSession) finishFocusSession({manual:true});
    body.classList.remove('immersive');
    soundPanel.classList.remove('open');
    body.style.overflow = '';
    const hadStamp=Boolean(pendingStamp);
    if (pendingStamp){
      const name = pendingStamp;
      pendingStamp = null;
      const allDone = visited.size === order.length;
      showPassportToast(allDone ? 'World of Rain complete · '+order.length+' / '+order.length+' skies' : name + ' stamped in your Rain Passport');
    }
    if(pendingAchievementToasts.length){
      const messages=[...pendingAchievementToasts]; pendingAchievementToasts=[];
      messages.forEach((message,i)=>setTimeout(()=>showPassportToast(message),(hadStamp?3200:900)+i*3200));
    }
  }

  const audio = new Audio();
  audio.preload='none';
  let trackIndex=-1;
  let currentTrack=null;
  let musicCity=null;
  let musicRequestId=0;
  let musicSearchId=0;
  let streamErrorCount=0;
  const musicRotation=Object.create(null);
  const missingClips=new Set();
  const previewLookups=new Map();

  const nowPlaying=document.createElement('div');
  nowPlaying.className='city-playlist';
  nowPlaying.innerHTML=
    '<div class="city-playlist-head"><span>NOW PLAYING / CITY RADIO</span><span id="playlistCount">1 / 6</span></div>'+
    '<strong id="playlistTitle">Choose a city</strong>'+
    '<span class="playlist-artist" id="playlistArtist">A city-specific soundtrack</span>'+
    '<div class="city-playlist-actions"><button id="nextCitySong" type="button">Next song →</button>'+
    '<button id="allCitySongs" type="button" aria-expanded="false">All songs ▾</button>'+
    '<a id="appleTrackLink" href="https://music.apple.com/" target="_blank" rel="noopener noreferrer">Listen on Apple Music ↗</a></div>'+
    '<div id="cityPlaylistTracks" hidden></div>'+
    '<small id="playlistNote">Apple Music previews · full songs require a music service</small>';
  soundPanel.insertBefore(nowPlaying,soundPanel.querySelector('.mix-row'));
  const playlistCount=nowPlaying.querySelector('#playlistCount');
  const playlistTitle=nowPlaying.querySelector('#playlistTitle');
  const playlistArtist=nowPlaying.querySelector('#playlistArtist');
  const playlistNote=nowPlaying.querySelector('#playlistNote');
  const appleTrackLink=nowPlaying.querySelector('#appleTrackLink');
  const nextCitySong=nowPlaying.querySelector('#nextCitySong');
  const allCitySongs=nowPlaying.querySelector('#allCitySongs');
  const cityPlaylistTracks=nowPlaying.querySelector('#cityPlaylistTracks');

  function renderPlaylistTracks(){
    cityPlaylistTracks.replaceChildren();
    cities[active].songs.forEach((song,index)=>{
      const button=document.createElement('button');
      button.type='button';
      button.className='playlist-track'+(index===trackIndex?' current':'');
      button.setAttribute('aria-label','Play '+song[0]+' by '+song[1]);
      const title=document.createElement('strong');
      title.textContent=song[0];
      const artist=document.createElement('span');
      artist.textContent=song[1];
      button.append(title,artist);
      button.addEventListener('click',e=>{
        e.stopPropagation();
        musicRotation[active]=(musicRotation[active]||[]).filter(i=>i!==index);
        setMusicTrack(index,true);
      });
      cityPlaylistTracks.append(button);
    });
  }

  const normalizeTrackText=s=>String(s||'').normalize('NFKD')
    .replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^\p{L}\p{N}]+/gu,' ').trim();

  function appleSearchUrl(track,id=active){
    const region=(cityMusicMarket[id]||'US').toLowerCase();
    return 'https://music.apple.com/'+region+'/search?term='+encodeURIComponent(track[0]+' '+track[1]);
  }

  function updatePlaylist(){
    if(!currentTrack)return;
    playlistTitle.textContent=currentTrack[0];
    playlistArtist.textContent=currentTrack[1]+' · '+cities[active].name;
    playlistCount.textContent=(trackIndex+1)+' / '+cities[active].songs.length;
    appleTrackLink.href=currentTrack[4]||appleSearchUrl(currentTrack);
    playlistNote.textContent=currentTrack[2]?'Apple Music preview · tap Next to explore':'Preview available on request';
    if(!cityPlaylistTracks.hidden)renderPlaylistTracks();
  }

  function shuffleIndices(id){
    const songList=cities[id].songs;
    const available=songList.map((_,i)=>i).filter(i=>!missingClips.has(id+':'+i));
    for(let i=available.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [available[i],available[j]]=[available[j],available[i]];
    }
    if(available.length>1&&available[0]===trackIndex&&musicCity===id){
      [available[0],available[1]]=[available[1],available[0]];
    }
    return available;
  }

  function chooseTrack(autoPlay=false,failedAttempts=0){
    const isNewCity=active!==musicCity;
    if(isNewCity){musicCity=active;musicRotation[active]=[];}
    const list=cities[active].songs;
    let index;
    if(isNewCity){
      index=Math.floor(Math.random()*Math.max(1,originalSongCounts[active]));
      musicRotation[active]=shuffleIndices(active).filter(i=>i!==index);
    }else{
      if(!musicRotation[active]?.length)musicRotation[active]=shuffleIndices(active);
      index=musicRotation[active].shift();
    }
    if(index==null)return;
    setMusicTrack(index,autoPlay,failedAttempts);
  }

  function setMusicTrack(index,autoPlay=false,failedAttempts=0){
    const wasPlaying=!audio.paused&&!!audio.currentSrc;
    ++musicRequestId;
    audio.pause();
    audio.removeAttribute('src');
    audio.load();
    trackIndex=index;
    currentTrack=cities[active].songs[index];
    updatePlaylist();
    syncMusic();
    if(autoPlay||wasPlaying)void playSelectedTrack(failedAttempts);
  }

  function searchApplePreviews(term,country){
    return new Promise(resolve=>{
      const callback='pluviaMusicLookup'+(++musicSearchId);
      const script=document.createElement('script');
      let finished=false;
      let timer;
      const finish=value=>{
        if(finished)return;
        finished=true;
        clearTimeout(timer);
        script.remove();
        try{delete window[callback]}catch(_){window[callback]=undefined}
        resolve(value);
      };
      window[callback]=result=>finish(Array.isArray(result?.results)?result.results:[]);
      script.onerror=()=>finish([]);
      const qs='term='+encodeURIComponent(term)+'&media=music&entity=musicTrack&limit=15&country='+
        encodeURIComponent(country)+'&explicit=No&callback='+callback;
      script.src='https://itunes.apple.com/search?'+qs;
      timer=setTimeout(()=>finish([]),8500);
      document.head.appendChild(script);
    });
  }

  function pickAppleResult(results,track){
    const title=normalizeTrackText(track[0]),artist=normalizeTrackText(track[1]);
    let best=null,high=0;
    for(const candidate of results){
      if(!candidate.previewUrl||!/^https:\/\//.test(candidate.previewUrl))continue;
      try{
        const host=new URL(candidate.previewUrl).hostname;
        if(!(host.endsWith('.itunes.apple.com')||host.endsWith('.mzstatic.com')))continue;
      }catch(_){continue}
      const t=normalizeTrackText(candidate.trackName);
      const a=normalizeTrackText(candidate.artistName);
      const titleMatch=t===title?5:t.includes(title)&&title.length>=3?3:title.includes(t)&&t.length>=4?2:0;
      const artistMatch=a===artist?5:a.includes(artist)&&artist.length>=3?4:artist.includes(a)&&a.length>=4?2:0;
      const score=titleMatch+artistMatch;
      if(titleMatch&&artistMatch&&score>high){best=candidate;high=score;}
    }
    return best;
  }

  function resolveTrackPreview(track,id){
    if(track[2])return Promise.resolve(track[2]);
    const key=id+'|'+track[0]+'|'+track[1];
    if(previewLookups.has(key))return previewLookups.get(key);
    const lookup=(async()=>{
      const market=cityMusicMarket[id]||'US';
      const term=track[0]+' '+track[1];
      const first=pickAppleResult(await searchApplePreviews(term,market),track);
      const best=first||(market==='US'?null:pickAppleResult(await searchApplePreviews(term,'US'),track));
      if(best){
        track[2]=best.previewUrl;
        track[4]=best.trackViewUrl||appleSearchUrl(track,id);
        return track[2];
      }
      return null;
    })();
    previewLookups.set(key,lookup);
    return lookup;
  }

  async function playSelectedTrack(failedAttempts=0){
    if(!currentTrack)return;
    const token=++musicRequestId;
    const city=active,track=currentTrack;
    const fail=()=>{
      if(token!==musicRequestId||city!==active)return;
      missingClips.add(city+':'+trackIndex);
      if(failedAttempts===1){
        const fallback=Array.from({length:originalSongCounts[city]},(_,i)=>i)
          .find(i=>!missingClips.has(city+':'+i));
        if(fallback!==undefined){
          musicRotation[city]=[fallback,...(musicRotation[city]||[]).filter(i=>i!==fallback)];
        }
      }
      if(failedAttempts<3){
        chooseTrack(true,failedAttempts+1);
      }else{
        playlistNote.textContent='Previews unavailable right now. Listen on Apple Music ↗';
        showMemoryToast('City music preview unavailable');
      }
    };
    if(audio.paused&&audio.currentSrc&&track[2]&&audio.currentSrc===track[2]){
      try{await audio.play()}catch(_){playlistNote.textContent='Tap the music icon to resume preview';}
      return;
    }
    if(!track[2])playlistNote.textContent='Finding a preview…';
    const url=await resolveTrackPreview(track,city);
    if(token!==musicRequestId||city!==active||track!==currentTrack)return;
    if(!url){fail();return}
    audio.src=url;
    playlistNote.textContent='Apple Music preview · short clip';
    appleTrackLink.href=track[4]||appleSearchUrl(track,city);
    try{await audio.play();}
    catch(_){
      if(token===musicRequestId)playlistNote.textContent='Tap the music icon to resume preview';
    }
  }

  function syncMusic(){
    musicBtn.classList.toggle('playing',!audio.paused);
    musicBtn.setAttribute('aria-label',audio.paused?'Play city music':'Pause city music');
    if(!audio.paused)playlistNote.textContent='Apple Music preview · short clip';
    if(typeof updateFocusHud==='function'&&body.classList.contains('focus-active'))updateFocusHud();
  }
  audio.addEventListener('play',()=>{streamErrorCount=0;syncMusic()});
  audio.addEventListener('pause',syncMusic);
  audio.addEventListener('ended',()=>chooseTrack(true));
  audio.addEventListener('error',()=>{
    if(!currentTrack||!audio.getAttribute('src'))return;
    const current=audio.getAttribute('src');
    if(current===currentTrack[2]){
      missingClips.add(active+':'+trackIndex);
      streamErrorCount++;
      if(streamErrorCount<=2){
        const fallback=Array.from({length:originalSongCounts[active]},(_,i)=>i)
          .find(i=>!missingClips.has(active+':'+i));
        if(fallback!==undefined)musicRotation[active]=[fallback,...(musicRotation[active]||[]).filter(i=>i!==fallback)];
        chooseTrack(true,streamErrorCount);
      }else{
        playlistNote.textContent='This preview could not load. Tap Next song.';
      }
    }
  });

  nextCitySong.addEventListener('click',e=>{
    e.stopPropagation();
    chooseTrack(true);
  });
  allCitySongs.addEventListener('click',e=>{
    e.stopPropagation();
    cityPlaylistTracks.hidden=!cityPlaylistTracks.hidden;
    allCitySongs.textContent=cityPlaylistTracks.hidden?'All songs ▾':'Hide songs ▴';
    allCitySongs.setAttribute('aria-expanded',String(!cityPlaylistTracks.hidden));
    if(!cityPlaylistTracks.hidden)renderPlaylistTracks();
  });

  let musicHold=null, heldMusic=false;
  musicBtn.addEventListener('pointerdown',e=>{
    e.stopPropagation(); heldMusic=false;
    musicHold=setTimeout(()=>{heldMusic=true;soundPanel.classList.add('open');initSound();},550);
  });
  ['pointerup','pointercancel','pointerleave'].forEach(ev=>musicBtn.addEventListener(ev,()=>clearTimeout(musicHold)));
  musicBtn.addEventListener('click',async e=>{
    e.stopPropagation();
    initSound();
    try{ if(ac?.state==='suspended') await ac.resume(); }catch(_){}
    if(heldMusic){heldMusic=false;return}
    if(audio.paused)void playSelectedTrack(); else audio.pause();
  });

  soundPanel.addEventListener('click',e=>e.stopPropagation());

  const mix = {
    rain:$('#mixRain'), thunder:$('#mixThunder'), city:$('#mixCity'), music:$('#mixMusic')
  };
  const outs = {
    rain:$('#outRain'), thunder:$('#outThunder'), city:$('#outCity'), music:$('#outMusic')
  };

  let ac=null, rainGain=null, cityGain=null, thunderGain=null, rainSource=null, cityOsc=null, soundMaster=null, cityMomentTimer=null;
  function initSound(){
    if(ac) return;
    const AC=window.AudioContext||window.webkitAudioContext; if(!AC) return;
    ac=new AC();
    soundMaster=ac.createGain(); soundMaster.gain.value=.18; soundMaster.connect(ac.destination);

    const buffer=ac.createBuffer(1,ac.sampleRate*2,ac.sampleRate);
    const arr=buffer.getChannelData(0); for(let i=0;i<arr.length;i++) arr[i]=Math.random()*2-1;
    rainSource=ac.createBufferSource(); rainSource.buffer=buffer; rainSource.loop=true;
    const filter=ac.createBiquadFilter(); filter.type='lowpass'; filter.frequency.value=1800;
    rainGain=ac.createGain(); rainGain.gain.value=.10;
    rainSource.connect(filter).connect(rainGain).connect(soundMaster); rainSource.start();

    cityOsc=ac.createOscillator(); cityOsc.type='sine'; cityOsc.frequency.value=92;
    cityGain=ac.createGain(); cityGain.gain.value=.02;
    cityOsc.connect(cityGain).connect(soundMaster); cityOsc.start();

    thunderGain=ac.createGain(); thunderGain.gain.value=0; thunderGain.connect(soundMaster);
    applyMix();
    scheduleThunder();
    scheduleCityMoment();
  }

  function playCityMoment(){
    if(!ac||!soundMaster||!body.classList.contains('immersive')||Number(mix.city.value)<=0) return;
    const soul=citySoul[active];
    const level=(Number(mix.city.value)/100)*(soul.gain||.025);
    soul.notes.forEach(([freq,delay,duration])=>{
      const osc=ac.createOscillator(), g=ac.createGain();
      osc.type=soul.wave||'sine';
      osc.frequency.setValueAtTime(freq,ac.currentTime+delay);
      g.gain.setValueAtTime(.0001,ac.currentTime+delay);
      g.gain.exponentialRampToValueAtTime(Math.max(.0002,level),ac.currentTime+delay+.025);
      g.gain.exponentialRampToValueAtTime(.0001,ac.currentTime+delay+duration);
      osc.connect(g).connect(soundMaster);
      osc.start(ac.currentTime+delay); osc.stop(ac.currentTime+delay+duration+.05);
    });
  }

  function scheduleCityMoment(){
    clearTimeout(cityMomentTimer);
    cityMomentTimer=setTimeout(()=>{
      playCityMoment();
      scheduleCityMoment();
    },26000+Math.random()*22000);
  }

  function applyMix(){
    if(body.classList.contains('focus-active')){
      focusBaseMusicVolume=Number(mix.music.value)/100;
      applyFocusFade();
    }else audio.volume=Number(mix.music.value)/100;
    if(rainGain) rainGain.gain.value=(Number(mix.rain.value)/100)*.16;
    if(cityGain) cityGain.gain.value=(Number(mix.city.value)/100)*.045;
    Object.keys(mix).forEach(k=>outs[k].value=mix[k].value+'%');
  }
  Object.keys(mix).forEach(k=>mix[k].addEventListener('input',()=>{initSound();applyMix()}));
  function scheduleThunder(){
    if(!ac) return;
    setTimeout(()=>{
      if(body.classList.contains('immersive')&&Number(mix.thunder.value)>0){
        const osc=ac.createOscillator(),g=ac.createGain();
        osc.type='sine';osc.frequency.setValueAtTime(55,ac.currentTime);osc.frequency.exponentialRampToValueAtTime(28,ac.currentTime+1.4);
        g.gain.setValueAtTime(0,ac.currentTime);g.gain.linearRampToValueAtTime((Number(mix.thunder.value)/100)*.15,ac.currentTime+.03);g.gain.exponentialRampToValueAtTime(.0001,ac.currentTime+1.4);
        osc.connect(g).connect(ac.destination);osc.start();osc.stop(ac.currentTime+1.5);
      }
      scheduleThunder();
    },12000+Math.random()*13000);
  }

  let pointerStart=null,holdTimer=null,holdShown=false;
  body.addEventListener('pointerdown',e=>{
    if(transitioning) return;
    if(!body.classList.contains('immersive')) return;
    if(e.target.closest('#musicBtn,#soundPanel,#captureMemoryBtn,.memory-preview,.memory-gallery,.memory-scrim,#focusImmersiveBtn,.focus-panel,.focus-scrim,.focus-hud')) return;
    pointerStart={x:e.clientX,y:e.clientY,t:performance.now()};
    holdShown=false;
    if(focusSession) return;
    holdTimer=setTimeout(()=>{
      holdShown=true;
      const c=cities[active];
      $('#infoTitle').textContent=c.name+' · '+c.landmark;
      $('#infoMeta').textContent=(weather?Math.round(weather.temp)+'° · '+weatherText(weather.code)+' · '+Number(weather.rain).toFixed(1)+' mm rain':'Live weather')+' · '+localTime(c.tz);
      $('#infoTrack').textContent=currentTrack?currentTrack[0]+' — '+currentTrack[1]:'City rain radio';
      infoCard.classList.add('show');
      setTimeout(()=>infoCard.classList.remove('show'),4200);
    },620);
  },true);
  body.addEventListener('pointermove',e=>{
    if(!pointerStart)return;
    const moved=Math.hypot(e.clientX-pointerStart.x,e.clientY-pointerStart.y);
    if(moved>18) clearTimeout(holdTimer);
    if(moved>7) wipeCondensation(e.clientX,e.clientY);
  },true);
  body.addEventListener('pointerup',e=>{
    if(!body.classList.contains('immersive')||!pointerStart)return;
    clearTimeout(holdTimer);
    if(e.target.closest('#musicBtn,#soundPanel,#captureMemoryBtn,.memory-preview,.memory-gallery,.memory-scrim,#focusImmersiveBtn,.focus-panel,.focus-scrim,.focus-hud')){pointerStart=null;return}
    const dx=e.clientX-pointerStart.x,dy=e.clientY-pointerStart.y;
    const dist=Math.hypot(dx,dy);
    if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.3){
      const i=order.indexOf(active);
      const next=dx<0?order[(i+1)%order.length]:order[(i-1+order.length)%order.length];
      selectCity(next,{enter:true});
    }else if(dist<14&&!holdShown){
      if(focusSession) showFocusControls();
      else exitImmersive();
    }
    pointerStart=null;
  },true);

  window.addEventListener('keydown',e=>{
    if(e.key==='Escape'&&focusPanel.classList.contains('open')){
      closeFocusPanel();
      return;
    }
    if(e.key==='Escape'&&(memoryPreview.classList.contains('open')||memoryGallery.classList.contains('open'))){
      if(memoryPreview.classList.contains('open')) closeMemoryPreview();
      else closeAllMemoryLayers();
      return;
    }
    if (!body.classList.contains('immersive')) {
      if (e.key === 'Escape' && passportPanel.classList.contains('open')) closePassport();
      return;
    }
    if(e.key==='Escape') exitImmersive();
    if(transitioning) return;
    if(e.key==='ArrowLeft'||e.key==='ArrowRight'){
      const i=order.indexOf(active);
      selectCity(e.key==='ArrowRight'?order[(i+1)%order.length]:order[(i-1+order.length)%order.length],{enter:true});
    }
  });

  document.addEventListener('click',e=>{
    if(body.classList.contains('immersive')&&!e.target.closest('#musicBtn,#soundPanel,.memory-preview,.memory-gallery,#captureMemoryBtn,#focusImmersiveBtn,.focus-panel,.focus-hud')) soundPanel.classList.remove('open');
  });

  // Lightweight rain: single 30 FPS canvas, ~40 drops on mobile / ~65 desktop.
  let rw=0,rh=0,rdpr=1,drops=[],last=0;
  function resizeRain(){
    rw=innerWidth;rh=innerHeight;rdpr=Math.min(devicePixelRatio||1,matchMedia('(max-width:700px)').matches?1:1.35);
    rainCanvas.width=Math.round(rw*rdpr);rainCanvas.height=Math.round(rh*rdpr);
    rainCanvas.style.width=rw+'px';rainCanvas.style.height=rh+'px';
    ctx.setTransform(rdpr,0,0,rdpr,0,0);
    const n=matchMedia('(max-width:700px)').matches?42:66;
    drops=Array.from({length:n},()=>({x:Math.random()*rw,y:Math.random()*rh,l:16+Math.random()*48,v:8+Math.random()*14,a:.10+Math.random()*.24,w:.7+Math.random()*1.3}));
  }
  function draw(ts){
    requestAnimationFrame(draw);
    if(document.hidden||ts-last<33)return;last=ts;
    ctx.clearRect(0,0,rw,rh);
    const immersive=body.classList.contains('immersive');
    const boost=immersive?(env==='rooftop'?1.3:env==='car'?1.06:1):0.65;
    const windPush=immersive&&env==='rooftop'?1.72:1.15;
    for(const d of drops){
      d.y+=d.v*boost;d.x+=windPush*boost;
      if(d.y>rh+70){d.y=-80-Math.random()*120;d.x=Math.random()*rw}
      ctx.beginPath();ctx.moveTo(d.x,d.y);ctx.lineTo(d.x+5,d.y+d.l);
      ctx.strokeStyle='rgba(205,232,246,'+(d.a*boost)+')';ctx.lineWidth=d.w;ctx.stroke();
    }
  }
  window.addEventListener('resize',resizeRain,{passive:true});
  resizeRain();requestAnimationFrame(draw);

  // Keep local time phase fresh without additional observers.
  setInterval(()=>{
    const c=cities[active];
    body.dataset.phase=phaseFor(c.tz);
    selectedTime.textContent=localTime(c.tz)+' local';
  },60000);

  selectCity('tokyo');
})();