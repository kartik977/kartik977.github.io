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
    ],
    seattle:[
      {src:cities.seattle.image,pos:cities.seattle.pos,label:'Space Needle'},
      commonsView('Seattle skyline at night from Space Needle.jpg','50% 52%','Downtown Skyline'),
      commonsView('Seattlenighttimequeenanne.jpg','50% 50%','Kerry Park'),
      commonsView("Seattle's Space Needle at dusk.jpg",'50% 50%','Space Needle at Dusk')
    ],
    singapore:[
      {src:cities.singapore.image,pos:cities.singapore.pos,label:'Marina Bay Sands'},
      commonsView('Gardens by the Bay at night, Singapore, 20240205 1900 5942.jpg','50% 52%','Gardens by the Bay'),
      commonsView('Merlion & Marina Bay Sands, Singapore at Night.jpg','50% 50%','Merlion & Marina Bay'),
      commonsView('Singapore skyline viewed from Gardens by the Bay East - 20120426.jpg','50% 54%','Singapore Skyline')
    ],
    saopaulo:[
      {src:cities.saopaulo.image,pos:cities.saopaulo.pos,label:'São Paulo Skyline'},
      commonsView('Paulista Avenue at night, São Paulo, Brazil.jpg','50% 52%','Paulista Avenue'),
      commonsView('Skyline of Downtown São Paulo, Brazil at night (2021).jpg','50% 52%','Downtown São Paulo'),
      commonsView('Octavio Frias de Oliveira Bridge.jpg','50% 50%','Ponte Estaiada')
    ],
    seoul:[
      {src:cities.seoul.image,pos:cities.seoul.pos,label:'N Seoul Tower'},
      commonsView('Seoul city skyline at night from Namsan Mountain (49175035266).jpg','50% 52%','Namsan Skyline'),
      commonsView('Dongdaemun Design Plaza - DDP2369.jpg','50% 50%','Dongdaemun Design Plaza'),
      commonsView('Banpo Bridge Moonlight Rainbow Fountain at night - 2023-08-14.jpg','50% 52%','Banpo Bridge')
    ],
    vancouver:[
      {src:cities.vancouver.image,pos:cities.vancouver.pos,label:'Vancouver Skyline'},
      commonsView('Vancouver skyline stanley park.jpg','50% 52%','Stanley Park Skyline'),
      commonsView('Burrard Street at Night - Vancouver (2650812773).jpg','50% 50%','Burrard Street'),
      commonsView('Canada Place, Container Port, Vancouver 1.jpg','50% 52%','Canada Place')
    ],
    amsterdam:[
      {src:cities.amsterdam.image,pos:cities.amsterdam.pos,label:'Amsterdam Canals'},
      commonsView('Magere Brug at night.jpg','50% 52%','Magere Brug'),
      commonsView('Damrak night.jpg','50% 50%','Damrak'),
      commonsView('Amsterdam Canal at Night.JPG','50% 52%','Canal at Night')
    ],
    kyoto:[
      {src:cities.kyoto.image,pos:cities.kyoto.pos,label:'Tō-ji Pagoda'},
      commonsView('Kyoto Gion At Night (135528933).jpeg','50% 52%','Gion'),
      commonsView('Yasaka Shrine Kyoto.png','50% 50%','Yasaka Shrine'),
      commonsView('Kiyomizu-dera autumn night.jpg','50% 52%','Kiyomizu-dera')
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
      const thunder=weatherAtmosphere.kind==='storm'||[95,96,99].includes(Number(weather?.code));
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
    if (!cities[id] || !order.includes(id) || visited.has(id)) return;
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


  // PLUVIA 9.3 — Shareable Weather Experiences
  const shareExperienceBtn=document.createElement('button');
  shareExperienceBtn.id='shareExperienceBtn';
  shareExperienceBtn.className='share-experience-btn';
  shareExperienceBtn.type='button';
  shareExperienceBtn.setAttribute('aria-label','Share this weather experience');
  shareExperienceBtn.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 16V4"/><path d="m7 9 5-5 5 5"/><path d="M5 13v6h14v-6"/></svg><span>Share this sky</span>';
  document.body.appendChild(shareExperienceBtn);

  const shareExperienceToast=document.createElement('div');
  shareExperienceToast.className='share-experience-toast';
  shareExperienceToast.setAttribute('role','status');
  shareExperienceToast.setAttribute('aria-live','polite');
  document.body.appendChild(shareExperienceToast);
  let shareToastTimer=null;

  function showShareToast(message){
    clearTimeout(shareToastTimer);
    shareExperienceToast.textContent=message;
    shareExperienceToast.classList.add('show');
    shareToastTimer=setTimeout(()=>shareExperienceToast.classList.remove('show'),2600);
  }

  function applySharedEnvironment(value){
    if(!['cafe','apartment','hotel','train','car','rooftop'].includes(value))return;
    env=value;
    body.dataset.env=env;
    localStorage.setItem('pluvia-v7-env',env);
    envChoices.forEach(choice=>choice.classList.toggle('active',choice.dataset.envChoice===env));
  }

  function buildShareExperienceUrl(){
    const c=cities[active];
    const url=new URL(location.href);
    url.search='';
    url.hash='';
    url.searchParams.set('pluvia','1');
    url.searchParams.set('env',env);
    url.searchParams.set('mode',atmosphereMode);

    if(order.includes(active)){
      url.searchParams.set('city',active);
    }else if(c&&c.worldPlace){
      url.searchParams.set('lat',Number(c.lat).toFixed(4));
      url.searchParams.set('lon',Number(c.lon).toFixed(4));
      url.searchParams.set('name',c.name||'Shared sky');
      if(c.country)url.searchParams.set('country',c.country);
      url.searchParams.set('cc',(cityMusicMarket[active]||'US').toUpperCase());
      url.searchParams.set('tz',c.tz||'UTC');
      url.searchParams.set('region',regionByCity[active]||anywhereRegion(c.lat,c.lon));
    }else{
      url.searchParams.set('city','tokyo');
    }
    return url.toString();
  }

  async function copyShareExperienceUrl(url){
    try{
      if(navigator.clipboard&&window.isSecureContext){
        await navigator.clipboard.writeText(url);
        return true;
      }
    }catch(_){}
    const field=document.createElement('textarea');
    field.value=url;
    field.setAttribute('readonly','');
    field.style.position='fixed';
    field.style.opacity='0';
    document.body.appendChild(field);
    field.select();
    let ok=false;
    try{ok=document.execCommand('copy')}catch(_){}
    field.remove();
    return ok;
  }

  shareExperienceBtn.addEventListener('pointerdown',event=>event.stopPropagation());
  shareExperienceBtn.addEventListener('click',async event=>{
    event.stopPropagation();
    const c=cities[active];
    if(!c)return;
    const url=buildShareExperienceUrl();
    const liveDescription=atmosphereMode==='live'
      ?(weather?weatherText(Number(weather.code))+' · '+Math.round(Number(weather.temp))+'°':'live weather')
      :atmosphereLabels[atmosphereMode]+' atmosphere';
    const payload={
      title:'Pluvia · '+c.name,
      text:'Experience '+c.name+' through '+(environmentLabels[env]||'a window')+' · '+liveDescription+'.',
      url
    };

    if(navigator.share){
      try{
        await navigator.share(payload);
        showShareToast('Sky shared · '+c.name);
        return;
      }catch(error){
        if(error&&error.name==='AbortError')return;
      }
    }

    const copied=await copyShareExperienceUrl(url);
    showShareToast(copied?'Experience link copied · '+c.name:'Could not copy the link');
  });

  async function restoreSharedExperience(){
    const params=new URLSearchParams(location.search);
    if(params.get('pluvia')!=='1')return false;

    applySharedEnvironment(params.get('env'));

    const requestedMode=params.get('mode');
    if(requestedMode&&atmosphereModes.includes(requestedMode)){
      atmosphereMode=requestedMode;
      localStorage.setItem('pluvia-v83-atmosphere',atmosphereMode);
      refreshAtmosphereMode();
    }

    const curatedId=params.get('city');
    if(curatedId&&order.includes(curatedId)){
      selectCity(curatedId,{enter:true});
      setTimeout(()=>showShareToast('Shared sky opened · '+cities[curatedId].name),900);
      return true;
    }

    const lat=Number(params.get('lat'));
    const lon=Number(params.get('lon'));
    if(!Number.isFinite(lat)||!Number.isFinite(lon))return false;

    const name=(params.get('name')||'Shared sky').slice(0,90);
    const country=(params.get('country')||'').slice(0,90);
    const countryCode=(params.get('cc')||'US').slice(0,3).toUpperCase();
    const tz=(params.get('tz')||'UTC').slice(0,80);
    const region=(params.get('region')||anywhereRegion(lat,lon)).slice(0,40);
    const place={
      id:'shared-'+lat.toFixed(4)+'-'+lon.toFixed(4),
      name,country,countryCode,lat,lon,tz,region,imageName:name
    };

    try{
      const current=await fetchAnywhereWeather(place);
      const signal=rainSignal(place,current);
      const isLiveRain=atmosphereMode==='live'&&Boolean(signal);
      const dynamicId=await registerWorldPlace(place,{liveRainFlag:isLiveRain});
      selectCity(dynamicId,{
        enter:true,
        liveSignal:isLiveRain,
        liveWeather:anywhereWeatherObject(current)
      });
      setTimeout(()=>showShareToast('Shared sky opened · '+name),900);
      return true;
    }catch(_){
      try{
        const dynamicId=await registerWorldPlace(place,{liveRainFlag:false});
        selectCity(dynamicId,{enter:true,liveSignal:false});
        setTimeout(()=>showShareToast('Shared place opened · live weather unavailable'),900);
        return true;
      }catch(__){
        return false;
      }
    }
  }


  // PLUVIA 9.0 — Live Rain World
  const liveRainPlaces = [
    ['reykjavik','Reykjavík','Iceland',64.1466,-21.9426,'Atlantic/Reykjavik','Europe'],
    ['dublin','Dublin','Ireland',53.3498,-6.2603,'Europe/Dublin','Europe'],
    ['glasgow','Glasgow','United Kingdom',55.8642,-4.2518,'Europe/London','Europe'],
    ['brussels','Brussels','Belgium',50.8503,4.3517,'Europe/Brussels','Europe'],
    ['berlin','Berlin','Germany',52.52,13.405,'Europe/Berlin','Europe'],
    ['copenhagen','Copenhagen','Denmark',55.6761,12.5683,'Europe/Copenhagen','Europe'],
    ['oslo','Oslo','Norway',59.9139,10.7522,'Europe/Oslo','Europe'],
    ['stockholm','Stockholm','Sweden',59.3293,18.0686,'Europe/Stockholm','Europe'],
    ['helsinki','Helsinki','Finland',60.1699,24.9384,'Europe/Helsinki','Europe'],
    ['warsaw','Warsaw','Poland',52.2297,21.0122,'Europe/Warsaw','Europe'],
    ['prague','Prague','Czechia',50.0755,14.4378,'Europe/Prague','Europe'],
    ['vienna','Vienna','Austria',48.2082,16.3738,'Europe/Vienna','Europe'],
    ['zurich','Zürich','Switzerland',47.3769,8.5417,'Europe/Zurich','Europe'],
    ['milan','Milan','Italy',45.4642,9.19,'Europe/Rome','Europe'],
    ['rome','Rome','Italy',41.9028,12.4964,'Europe/Rome','Europe'],
    ['madrid','Madrid','Spain',40.4168,-3.7038,'Europe/Madrid','Europe'],
    ['barcelona','Barcelona','Spain',41.3874,2.1686,'Europe/Madrid','Europe'],
    ['lisbon','Lisbon','Portugal',38.7223,-9.1393,'Europe/Lisbon','Europe'],
    ['istanbul','Istanbul','Türkiye',41.0082,28.9784,'Europe/Istanbul','Europe'],
    ['athens','Athens','Greece',37.9838,23.7275,'Europe/Athens','Europe'],
    ['casablanca','Casablanca','Morocco',33.5731,-7.5898,'Africa/Casablanca','Africa'],
    ['lagos','Lagos','Nigeria',6.5244,3.3792,'Africa/Lagos','Africa'],
    ['nairobi','Nairobi','Kenya',-1.2921,36.8219,'Africa/Nairobi','Africa'],
    ['cape-town','Cape Town','South Africa',-33.9249,18.4241,'Africa/Johannesburg','Africa'],
    ['johannesburg','Johannesburg','South Africa',-26.2041,28.0473,'Africa/Johannesburg','Africa'],
    ['cairo','Cairo','Egypt',30.0444,31.2357,'Africa/Cairo','Africa'],
    ['dubai','Dubai','United Arab Emirates',25.2048,55.2708,'Asia/Dubai','Asia'],
    ['delhi','Delhi','India',28.6139,77.209,'Asia/Kolkata','Asia'],
    ['bengaluru','Bengaluru','India',12.9716,77.5946,'Asia/Kolkata','Asia'],
    ['kolkata','Kolkata','India',22.5726,88.3639,'Asia/Kolkata','Asia'],
    ['bangkok','Bangkok','Thailand',13.7563,100.5018,'Asia/Bangkok','Asia'],
    ['kuala-lumpur','Kuala Lumpur','Malaysia',3.139,101.6869,'Asia/Kuala_Lumpur','Asia'],
    ['jakarta','Jakarta','Indonesia',-6.2088,106.8456,'Asia/Jakarta','Asia'],
    ['manila','Manila','Philippines',14.5995,120.9842,'Asia/Manila','Asia'],
    ['ho-chi-minh','Ho Chi Minh City','Vietnam',10.8231,106.6297,'Asia/Ho_Chi_Minh','Asia'],
    ['hong-kong','Hong Kong','Hong Kong',22.3193,114.1694,'Asia/Hong_Kong','Asia'],
    ['taipei','Taipei','Taiwan',25.033,121.5654,'Asia/Taipei','Asia'],
    ['osaka','Osaka','Japan',34.6937,135.5023,'Asia/Tokyo','Asia'],
    ['auckland','Auckland','New Zealand',-36.8509,174.7645,'Pacific/Auckland','Oceania'],
    ['sydney','Sydney','Australia',-33.8688,151.2093,'Australia/Sydney','Oceania'],
    ['melbourne','Melbourne','Australia',-37.8136,144.9631,'Australia/Melbourne','Oceania'],
    ['san-francisco','San Francisco','United States',37.7749,-122.4194,'America/Los_Angeles','North America'],
    ['los-angeles','Los Angeles','United States',34.0522,-118.2437,'America/Los_Angeles','North America'],
    ['denver','Denver','United States',39.7392,-104.9903,'America/Denver','North America'],
    ['chicago','Chicago','United States',41.8781,-87.6298,'America/Chicago','North America'],
    ['toronto','Toronto','Canada',43.6532,-79.3832,'America/Toronto','North America'],
    ['montreal','Montréal','Canada',45.5017,-73.5673,'America/Toronto','North America'],
    ['washington','Washington, D.C.','United States',38.9072,-77.0369,'America/New_York','North America'],
    ['miami','Miami','United States',25.7617,-80.1918,'America/New_York','North America'],
    ['mexico-city','Mexico City','Mexico',19.4326,-99.1332,'America/Mexico_City','North America'],
    ['panama-city','Panama City','Panama',8.9824,-79.5199,'America/Panama','North America'],
    ['bogota','Bogotá','Colombia',4.711,-74.0721,'America/Bogota','South America'],
    ['lima','Lima','Peru',-12.0464,-77.0428,'America/Lima','South America'],
    ['rio','Rio de Janeiro','Brazil',-22.9068,-43.1729,'America/Sao_Paulo','South America'],
    ['buenos-aires','Buenos Aires','Argentina',-34.6037,-58.3816,'America/Argentina/Buenos_Aires','South America'],
    ['santiago','Santiago','Chile',-33.4489,-70.6693,'America/Santiago','South America']
  ].map(([id,name,country,lat,lon,tz,region])=>({id,name,country,lat,lon,tz,region}));

  // Add the existing twelve to the world scan without duplicating the UI catalogue.
  const liveRainScanPlaces=[
    ...liveRainPlaces,
    ...order.map(id=>{
      const c=cities[id];
      return {id:'curated-'+id,name:c.name,country:c.country,lat:c.lat,lon:c.lon,tz:c.tz,region:regionByCity[id]||'World',curatedId:id};
    })
  ];

  const liveSignalBadge=document.createElement('div');
  liveSignalBadge.className='live-signal-badge';
  liveSignalBadge.setAttribute('aria-live','polite');
  liveSignalBadge.innerHTML='<i></i><span>LIVE RAIN</span><b>Connecting…</b>';
  body.appendChild(liveSignalBadge);

  const liveRainSection=document.createElement('section');
  liveRainSection.className='section live-rain-section';
  liveRainSection.id='live-rain-world';
  liveRainSection.innerHTML=
    '<div class="section-head live-rain-head"><div><span class="micro">LIVE / GLOBAL RAIN RADAR</span><h2>Watch the rain moving.</h2></div>'+
    '<p>Observed radar shows where precipitation is moving now. Search any place on Earth, play the recent timeline, or click a rain cell and step into it through Pluvia.</p></div>'+
    '<div class="anywhere-search-shell" id="anywhereSearchShell">'+
      '<form class="anywhere-search" id="anywhereSearchForm" autocomplete="off">'+
        '<span class="anywhere-search-icon">⌕</span>'+
        '<input id="anywhereSearchInput" type="search" placeholder="Search any city or place on Earth…" aria-label="Search any city or place on Earth" spellcheck="false">'+
        '<button type="submit">Search</button>'+
      '</form>'+
      '<div class="anywhere-search-results" id="anywhereSearchResults" hidden></div>'+
      '<div class="anywhere-place-card" id="anywherePlaceCard" hidden></div>'+
    '</div>'+
    '<div class="live-rain-shell">'+
      '<div class="live-rain-map-wrap">'+
        '<div class="live-rain-map radar-enabled" id="liveRainMap" aria-label="Global rain radar. Click a rain cell to inspect it.">'+
          '<div class="radar-world" id="radarWorld" aria-hidden="true">'+
            '<div class="radar-tile-layer radar-base-layer" id="radarBaseLayer"></div>'+
            '<div class="radar-tile-layer radar-data-layer active" id="radarLayerA"></div>'+
            '<div class="radar-tile-layer radar-data-layer" id="radarLayerB"></div>'+
          '</div>'+
          '<div class="live-rain-grid" aria-hidden="true"></div>'+
          '<div class="live-rain-markers" id="liveRainMarkers"></div>'+
          '<div class="radar-click-hint">CLICK A RAIN CELL · OPEN NEAREST PLUVIA PLACE</div>'+
          '<div class="radar-inspect" id="radarInspect" hidden></div>'+
          '<div class="live-rain-map-empty" id="liveRainMapEmpty">Scanning the world for rain…</div>'+
        '</div>'+
        '<div class="radar-controls">'+
          '<button type="button" id="radarPlay" aria-label="Play recent radar">▶</button>'+
          '<input id="radarTimeline" type="range" min="0" max="0" value="0" step="1" aria-label="Radar timeline">'+
          '<span id="radarFrameTime">Radar connecting…</span>'+
          '<button type="button" id="radarLatest">Latest</button>'+
          '<button type="button" id="radarChase">Chase strongest ↗</button>'+
        '</div>'+
        '<div class="live-rain-map-foot"><span id="liveRainStatus">Connecting to live weather…</span>'+
          '<button type="button" id="refreshLiveRain">Refresh signal ↻</button></div>'+
      '</div>'+
      '<div class="live-rain-feed"><div class="live-rain-feed-head"><span>RAINING NOW</span><b id="liveRainCount">—</b></div>'+
        '<div class="live-rain-list" id="liveRainList"><div class="live-rain-loading">Finding rain around the world…</div></div>'+
      '</div>'+
    '</div>'+
    '<div class="live-rain-source">Live weather: <a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer">Open-Meteo</a> · Radar: <a href="https://www.rainviewer.com/" target="_blank" rel="noopener noreferrer">RainViewer</a> · City imagery: Wikimedia Commons · radar shows recent observed precipitation where coverage is available.</div>';

  document.querySelector('#cities')?.insertAdjacentElement('afterend',liveRainSection);

  const liveRainMap=$('#liveRainMap');
  const liveRainMarkers=$('#liveRainMarkers');
  const liveRainMapEmpty=$('#liveRainMapEmpty');
  const liveRainList=$('#liveRainList');
  const liveRainStatus=$('#liveRainStatus');
  const liveRainCount=$('#liveRainCount');
  const refreshLiveRain=$('#refreshLiveRain');
  const radarWorld=$('#radarWorld');
  const radarBaseLayer=$('#radarBaseLayer');
  const radarLayers=[$('#radarLayerA'),$('#radarLayerB')];
  const radarPlay=$('#radarPlay');
  const radarTimeline=$('#radarTimeline');
  const radarFrameTime=$('#radarFrameTime');
  const radarLatest=$('#radarLatest');
  const radarChase=$('#radarChase');
  const radarInspect=$('#radarInspect');
  const anywhereSearchShell=$('#anywhereSearchShell');
  const anywhereSearchForm=$('#anywhereSearchForm');
  const anywhereSearchInput=$('#anywhereSearchInput');
  const anywhereSearchResults=$('#anywhereSearchResults');
  const anywherePlaceCard=$('#anywherePlaceCard');
  let anywhereSearchTimer=null;
  let anywhereSearchSeq=0;
  let anywhereSelected=null;

  let radarFrames=[];
  let radarHost='';
  let radarFrameIndex=0;
  let radarActiveLayer=0;
  let radarPlaying=false;
  let radarPlaybackTimer=null;
  let radarLastUpdated=0;
  const radarZoom=1;

  let liveRainResults=[];
  let liveRainRefreshing=false;
  let liveRainLastUpdated=0;
  const liveImageCache=new Map();

  // PLUVIA 9.6 — Live Webcam Layer
  const liveCameraFeeds={
    newyork:{
      label:'Times Square',
      provider:'EarthCam',
      videoId:'z-jYdOIKcTQ',
      source:'https://www.youtube.com/watch?v=z-jYdOIKcTQ'
    },
    singapore:{
      label:'Singapore Marina Bay',
      provider:'Singapore City Live Cam',
      videoId:'mUjXE5M7wgE',
      source:'https://www.youtube.com/watch?v=mUjXE5M7wgE'
    },
    london:{
      label:'Abbey Road Crossing',
      provider:'EarthCam',
      videoId:'M3EYAY2MftI',
      source:'https://www.youtube.com/watch?v=M3EYAY2MftI'
    },
    'world-dublin':{
      label:'Temple Bar',
      provider:'EarthCam',
      videoId:'u4UZ4UvZXrg',
      source:'https://www.youtube.com/watch?v=u4UZ4UvZXrg'
    }
  };

  const liveCameraBtn=document.createElement('button');
  liveCameraBtn.id='liveCameraBtn';
  liveCameraBtn.className='live-camera-btn';
  liveCameraBtn.type='button';
  liveCameraBtn.setAttribute('aria-label','Open live camera');
  liveCameraBtn.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="6" width="12" height="12" rx="2"/><path d="m15.5 10 5-2.8v9.6l-5-2.8z"/></svg><span>Live camera</span>';
  document.body.appendChild(liveCameraBtn);

  const liveCameraPanel=document.createElement('aside');
  liveCameraPanel.className='live-camera-panel';
  liveCameraPanel.setAttribute('role','dialog');
  liveCameraPanel.setAttribute('aria-modal','false');
  liveCameraPanel.setAttribute('aria-label','Live city camera');
  liveCameraPanel.innerHTML=
    '<div class="live-camera-head">'+
      '<div><span class="live-camera-kicker"><i></i> LIVE CAMERA / REAL WORLD</span><strong id="liveCameraTitle">Live view</strong><small id="liveCameraProvider">Public source</small></div>'+
      '<button id="liveCameraClose" type="button" aria-label="Close live camera">×</button>'+
    '</div>'+
    '<div class="live-camera-frame-wrap">'+
      '<iframe id="liveCameraFrame" title="Live city camera" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>'+
      '<div class="live-camera-note">Feed availability and timing are controlled by the source provider.</div>'+
    '</div>'+
    '<div class="live-camera-foot">'+
      '<span>PLUVIA INTERPRETATION ↔ REAL CAMERA</span>'+
      '<a id="liveCameraSource" href="#" target="_blank" rel="noopener noreferrer">Open source ↗</a>'+
    '</div>';
  document.body.appendChild(liveCameraPanel);

  const liveCameraFrame=$('#liveCameraFrame');
  const liveCameraTitle=$('#liveCameraTitle');
  const liveCameraProvider=$('#liveCameraProvider');
  const liveCameraSource=$('#liveCameraSource');
  const liveCameraClose=$('#liveCameraClose');

  function liveCameraKeyForCity(id){
    if(liveCameraFeeds[id])return id;
    const c=cities[id];
    if(!c)return null;
    const name=String(c.name||'').toLowerCase();
    if(name.includes('new york'))return 'newyork';
    if(name==='singapore')return 'singapore';
    if(name==='london')return 'london';
    if(name==='dublin')return 'world-dublin';
    return null;
  }

  function activeLiveCameraFeed(){
    const key=liveCameraKeyForCity(active);
    return key?liveCameraFeeds[key]:null;
  }

  function updateLiveCameraAvailability(){
    const feed=activeLiveCameraFeed();
    liveCameraBtn.hidden=false;
    liveCameraBtn.removeAttribute('hidden');
    liveCameraBtn.classList.toggle('available',Boolean(feed));
    liveCameraBtn.classList.toggle('unavailable',!feed);
    liveCameraBtn.setAttribute('aria-disabled',String(!feed));
    liveCameraBtn.setAttribute('aria-label',feed?'Open live camera':'No verified live camera for this city yet');
    const label=liveCameraBtn.querySelector('span');
    if(label)label.textContent=feed?'Live camera':'Camera unavailable';
    if(!feed&&liveCameraPanel.classList.contains('open'))closeLiveCamera();
  }

  function openLiveCamera(){
    const feed=activeLiveCameraFeed();
    if(!feed){
      if(typeof showShareToast==='function')showShareToast('No verified live camera for '+(cities[active]?.name||'this place')+' yet');
      return;
    }
    liveCameraTitle.textContent=(cities[active]?.name||'Live city')+' · '+feed.label;
    liveCameraProvider.textContent='Public feed by '+feed.provider+' · shown alongside Pluvia';
    liveCameraSource.href=feed.source;
    liveCameraFrame.src='https://www.youtube.com/embed/'+encodeURIComponent(feed.videoId)+'?autoplay=1&mute=1&playsinline=1&rel=0';
    liveCameraPanel.classList.add('open');
    body.classList.add('live-camera-open');
    liveCameraBtn.classList.add('active');
  }

  function closeLiveCamera(){
    liveCameraPanel.classList.remove('open');
    body.classList.remove('live-camera-open');
    liveCameraBtn.classList.remove('active');
    liveCameraFrame.src='about:blank';
  }

  liveCameraBtn.addEventListener('pointerdown',event=>event.stopPropagation());
  liveCameraBtn.addEventListener('click',event=>{
    event.stopPropagation();
    liveCameraPanel.classList.contains('open')?closeLiveCamera():openLiveCamera();
  });
  liveCameraPanel.addEventListener('pointerdown',event=>event.stopPropagation());
  liveCameraPanel.addEventListener('click',event=>event.stopPropagation());
  liveCameraClose.addEventListener('click',closeLiveCamera);


  // PLUVIA 9.5 — Storm Chaser 2.0
  const stormChaserHud=document.createElement('aside');
  stormChaserHud.className='storm-chaser-hud';
  stormChaserHud.setAttribute('aria-live','polite');
  stormChaserHud.innerHTML=
    '<div class="storm-chaser-main">'+
      '<span class="storm-chaser-kicker"><i></i> STORM CHASER 2.0</span>'+
      '<strong id="stormChaserCity">Waiting for a storm…</strong>'+
      '<small id="stormChaserMeta">Pluvia will follow the strongest active rain systems.</small>'+
    '</div>'+
    '<div class="storm-chaser-countdown"><span>NEXT SKY</span><b id="stormChaserCountdown">—</b></div>'+
    '<button id="stormChaserNext" type="button">Next storm →</button>'+
    '<button id="stormChaserStop" type="button">Stop chase</button>';
  document.body.appendChild(stormChaserHud);

  const stormChaserCity=$('#stormChaserCity');
  const stormChaserMeta=$('#stormChaserMeta');
  const stormChaserCountdown=$('#stormChaserCountdown');
  const stormChaserNext=$('#stormChaserNext');
  const stormChaserStop=$('#stormChaserStop');

  let stormChaseActive=false;
  let stormChaseTimer=null;
  let stormChaseTick=null;
  let stormChaseEndsAt=0;
  let stormChaseCurrentKey='';
  let stormChaseRecent=[];
  const stormChaseDwellMs=18000;

  const stormChaseKey=result=>String(result?.name||'').toLowerCase()+'|'+String(result?.country||'').toLowerCase();

  function stormChasePool(){
    const strong=liveRainResults.filter(result=>result.level==='storm'||result.level==='heavy');
    const medium=liveRainResults.filter(result=>result.level==='steady');
    const light=liveRainResults.filter(result=>result.level==='light');
    return [...strong,...medium,...light].slice(0,10);
  }

  function stormChaseCandidate(){
    const pool=stormChasePool();
    if(!pool.length)return null;

    const fresh=pool.find(result=>{
      const key=stormChaseKey(result);
      return key!==stormChaseCurrentKey&&!stormChaseRecent.includes(key);
    });
    if(fresh)return fresh;

    const different=pool.find(result=>stormChaseKey(result)!==stormChaseCurrentKey);
    return different||pool[0];
  }

  function updateStormChaserHud(result){
    if(!result)return;
    const condition=liveRainCondition(result);
    stormChaserCity.textContent=result.name+' · '+condition;
    stormChaserMeta.textContent=
      result.country+' · '+result.amount.toFixed(1)+' mm · '+
      Math.round(Number(result.current?.wind_speed_10m)||0)+' km/h wind';
  }

  function updateStormChaserCountdown(){
    if(!stormChaseActive){
      stormChaserCountdown.textContent='—';
      return;
    }
    const seconds=Math.max(0,Math.ceil((stormChaseEndsAt-Date.now())/1000));
    stormChaserCountdown.textContent=seconds+'s';
  }

  function scheduleStormChaseAdvance(){
    clearTimeout(stormChaseTimer);
    clearInterval(stormChaseTick);
    stormChaseEndsAt=Date.now()+stormChaseDwellMs;
    updateStormChaserCountdown();
    stormChaseTick=setInterval(updateStormChaserCountdown,1000);
    stormChaseTimer=setTimeout(()=>void advanceStormChase(),stormChaseDwellMs);
  }

  async function advanceStormChase({manual=false}={}){
    if(!stormChaseActive)return;
    clearTimeout(stormChaseTimer);
    clearInterval(stormChaseTick);

    if(!liveRainResults.length||Date.now()-liveRainLastUpdated>4.5*60*1000){
      try{await refreshLiveRainWorld()}catch(_){}
    }

    const next=stormChaseCandidate();
    if(!next){
      stormChaserMeta.textContent='No active rain signal found. Waiting for the next scan…';
      stormChaseEndsAt=Date.now()+10000;
      stormChaseTick=setInterval(updateStormChaserCountdown,1000);
      stormChaseTimer=setTimeout(()=>void advanceStormChase(),10000);
      return;
    }

    const key=stormChaseKey(next);
    stormChaseCurrentKey=key;
    stormChaseRecent=[key,...stormChaseRecent.filter(item=>item!==key)].slice(0,4);

    radarChase.classList.add('active');
    radarChase.textContent='Stop auto chase';
    body.classList.add('storm-chaser-active');
    stormChaserHud.classList.add('show');
    updateStormChaserHud(next);

    try{
      await enterLiveRain(next);
      if(stormChaseActive)scheduleStormChaseAdvance();
    }catch(_){
      if(stormChaseActive){
        stormChaserMeta.textContent='That sky could not open. Finding another storm…';
        stormChaseEndsAt=Date.now()+3000;
        stormChaseTick=setInterval(updateStormChaserCountdown,1000);
        stormChaseTimer=setTimeout(()=>void advanceStormChase(),3000);
      }
    }
  }

  function startStormChase(){
    if(stormChaseActive)return;
    if(!liveRainResults.length){
      liveRainStatus.textContent='Finding a storm to chase…';
    }
    stormChaseActive=true;
    stormChaseRecent=[];
    stormChaseCurrentKey='';
    radarChase.classList.add('active');
    radarChase.textContent='Stop auto chase';
    stormChaserHud.classList.add('show');
    stormChaserCity.textContent='Finding the strongest rain…';
    stormChaserMeta.textContent='Scanning live rain signals around the world.';
    body.classList.add('storm-chaser-active');
    void advanceStormChase({manual:true});
  }

  function stopStormChase({keepScene=true}={}){
    if(!stormChaseActive&&!body.classList.contains('storm-chaser-active'))return;
    stormChaseActive=false;
    clearTimeout(stormChaseTimer);
    clearInterval(stormChaseTick);
    stormChaseTimer=null;
    stormChaseTick=null;
    stormChaseEndsAt=0;
    radarChase.classList.remove('active');
    radarChase.textContent='Auto chase strongest ↗';
    stormChaserHud.classList.remove('show');
    body.classList.remove('storm-chaser-active');
    if(!keepScene&&body.classList.contains('immersive'))exitImmersive();
  }

  stormChaserNext.addEventListener('click',event=>{
    event.stopPropagation();
    if(stormChaseActive)void advanceStormChase({manual:true});
  });
  stormChaserStop.addEventListener('click',event=>{
    event.stopPropagation();
    stopStormChase({keepScene:true});
  });




  // PLUVIA 9.4 — Rain Events
  const rainEventsPanel=document.createElement('section');
  rainEventsPanel.className='rain-events-panel';
  rainEventsPanel.innerHTML=
    '<div class="rain-events-head">'+
      '<div><span class="micro">09.4 / RAIN EVENTS</span><h3>The weather just changed.</h3></div>'+
      '<div class="rain-events-live"><i></i><span>LISTENING</span><b id="rainEventsCount">0 events</b></div>'+
    '</div>'+
    '<div class="rain-events-list" id="rainEventsList"></div>';
  liveRainSection.querySelector('.live-rain-shell')?.insertAdjacentElement('beforebegin',rainEventsPanel);

  const rainEventsList=$('#rainEventsList');
  const rainEventsCount=$('#rainEventsCount');

  const rainEventToast=document.createElement('aside');
  rainEventToast.className='rain-event-toast';
  rainEventToast.setAttribute('role','status');
  rainEventToast.setAttribute('aria-live','polite');
  document.body.appendChild(rainEventToast);

  const rainEventLevelRank={light:0,steady:1,heavy:2,storm:3};
  const rainEventStorageKey='pluvia-v94-rain-events';
  const rainSnapshotStorageKey='pluvia-v94-rain-snapshot';
  let rainEventToastTimer=null;
  let rainEvents=[];
  let rainEventSnapshot=null;

  const rainPlaceKey=place=>String(place?.name||'').trim().toLowerCase()+'|'+String(place?.country||'').trim().toLowerCase();

  try{
    const saved=JSON.parse(localStorage.getItem(rainEventStorageKey)||'[]');
    if(Array.isArray(saved)){
      const cutoff=Date.now()-90*60*1000;
      rainEvents=saved.filter(event=>event&&Number(event.time)>cutoff).slice(0,12);
    }
  }catch(_){}

  try{
    const saved=JSON.parse(localStorage.getItem(rainSnapshotStorageKey)||'null');
    if(saved&&Array.isArray(saved.items)&&Date.now()-Number(saved.time)<45*60*1000)rainEventSnapshot=saved;
  }catch(_){}

  function rainEventMeta(event){
    if(event.type==='storm')return {label:'STORM ARRIVAL',icon:'⚡'};
    if(event.type==='start')return {label:'RAIN STARTED',icon:'◉'};
    if(event.type==='heavier')return {label:'INTENSIFYING',icon:'↑'};
    if(event.type==='easing')return {label:'EASING',icon:'↓'};
    return {label:'RAIN ENDED',icon:'○'};
  }

  function rainEventTitle(event){
    if(event.type==='storm')return 'A storm is moving into '+event.name+'.';
    if(event.type==='start')return 'It started raining in '+event.name+'.';
    if(event.type==='heavier')return 'The rain is getting heavier in '+event.name+'.';
    if(event.type==='easing')return 'The rain is easing in '+event.name+'.';
    return 'The rain stopped in '+event.name+'.';
  }

  function rainEventDetail(event){
    if(event.type==='stop')return 'The live rain signal ended since the previous scan.';
    if(event.type==='start')return event.condition+' · '+event.amount.toFixed(1)+' mm · '+Math.round(event.wind||0)+' km/h wind';
    if(event.previousAmount!=null){
      return event.previousAmount.toFixed(1)+' → '+event.amount.toFixed(1)+' mm · '+event.condition;
    }
    return event.condition+' · '+event.amount.toFixed(1)+' mm';
  }

  function rainEventAgo(time){
    const minutes=Math.max(0,Math.round((Date.now()-Number(time))/60000));
    if(minutes<1)return 'now';
    if(minutes===1)return '1 min ago';
    return minutes+' min ago';
  }

  function renderRainEvents(){
    const activeEvents=rainEvents.filter(event=>Date.now()-Number(event.time)<90*60*1000).slice(0,8);
    rainEvents=activeEvents;
    rainEventsCount.textContent=activeEvents.length+(activeEvents.length===1?' event':' events');

    if(!activeEvents.length){
      rainEventsList.innerHTML=
        '<div class="rain-events-empty"><span>◌</span><div><strong>Listening for the next change.</strong>'+
        '<small>Pluvia compares each world-weather scan with the previous one. Rain starts, stops, storms and meaningful intensity changes will appear here.</small></div></div>';
      return;
    }

    rainEventsList.innerHTML=activeEvents.map(event=>{
      const meta=rainEventMeta(event);
      const action=event.type==='stop'?'OPEN SKY ↗':'WATCH THIS RAIN ↗';
      return '<button class="rain-event-card '+event.type+'" type="button" data-rain-event-id="'+event.id+'">'+
        '<span class="rain-event-icon">'+meta.icon+'</span>'+
        '<span class="rain-event-copy"><small>'+meta.label+' · '+rainEventAgo(event.time)+'</small><strong>'+rainEventTitle(event)+'</strong><em>'+rainEventDetail(event)+'</em></span>'+
        '<span class="rain-event-action">'+action+'</span>'+
      '</button>';
    }).join('');
  }

  function saveRainEvents(){
    try{localStorage.setItem(rainEventStorageKey,JSON.stringify(rainEvents.slice(0,12)))}catch(_){}
  }

  function snapshotRainSignals(results){
    return results.map(result=>({
      key:rainPlaceKey(result),
      id:result.id,
      name:result.name,
      country:result.country,
      amount:Number(result.amount)||0,
      level:result.level||'light',
      code:Number(result.code)||0,
      wind:Number(result.current?.wind_speed_10m)||0,
      condition:liveRainCondition(result)
    }));
  }

  function buildRainEvent(type,current,previous,time){
    const source=current||previous;
    return {
      id:time+'-'+type+'-'+String(source.key||rainPlaceKey(source)).replace(/[^a-z0-9]+/g,'-'),
      type,
      time,
      key:source.key||rainPlaceKey(source),
      placeId:current?.id||previous?.id||'',
      name:source.name,
      country:source.country,
      amount:Number(current?.amount)||0,
      previousAmount:previous?Number(previous.amount)||0:null,
      wind:Number(current?.wind)||0,
      condition:current?.condition||'Live weather'
    };
  }

  function detectRainEvents(previous,currentResults,now){
    if(!previous||!Array.isArray(previous.items))return [];
    const age=now-Number(previous.time||0);
    if(age<45*1000||age>45*60*1000)return [];

    const before=new Map(previous.items.map(item=>[item.key,item]));
    const afterItems=snapshotRainSignals(currentResults);
    const after=new Map(afterItems.map(item=>[item.key,item]));
    const detected=[];

    after.forEach((current,key)=>{
      const prior=before.get(key);
      if(!prior){
        detected.push(buildRainEvent(current.level==='storm'?'storm':'start',current,null,now));
        return;
      }

      const previousRank=rainEventLevelRank[prior.level]??0;
      const currentRank=rainEventLevelRank[current.level]??0;
      const increase=current.amount-Number(prior.amount||0);
      const decrease=Number(prior.amount||0)-current.amount;

      if(current.level==='storm'&&prior.level!=='storm'){
        detected.push(buildRainEvent('storm',current,prior,now));
      }else if(
        currentRank>previousRank||
        (increase>=.55&&current.amount>=Math.max(.45,Number(prior.amount||0)*1.55))
      ){
        detected.push(buildRainEvent('heavier',current,prior,now));
      }else if(
        currentRank<previousRank&&decrease>=.2||
        (decrease>=.35&&current.amount<=Number(prior.amount||0)*.55)
      ){
        detected.push(buildRainEvent('easing',current,prior,now));
      }
    });

    before.forEach((prior,key)=>{
      if(!after.has(key))detected.push(buildRainEvent('stop',null,prior,now));
    });

    const priority={storm:5,start:4,heavier:3,stop:2,easing:1};
    return detected.sort((a,b)=>(priority[b.type]||0)-(priority[a.type]||0)).slice(0,8);
  }

  function showRainEventToast(event){
    const meta=rainEventMeta(event);
    rainEventToast.innerHTML=
      '<button class="rain-event-toast-main" type="button" data-toast-rain-event="'+event.id+'">'+
        '<span class="rain-event-toast-icon">'+meta.icon+'</span>'+
        '<span><small>PLUVIA · '+meta.label+'</small><strong>'+rainEventTitle(event)+'</strong></span>'+
        '<b>'+(event.type==='stop'?'OPEN ↗':'WATCH ↗')+'</b>'+
      '</button>'+
      '<button class="rain-event-toast-close" type="button" aria-label="Dismiss rain event">×</button>';
    rainEventToast.classList.add('show');
    clearTimeout(rainEventToastTimer);
    rainEventToastTimer=setTimeout(()=>rainEventToast.classList.remove('show'),9000);
  }

  function processRainEvents(currentResults){
    const now=Date.now();
    const detected=detectRainEvents(rainEventSnapshot,currentResults,now);

    if(detected.length){
      const existing=new Set(rainEvents.map(event=>event.type+'|'+event.key+'|'+Math.floor(Number(event.time)/300000)));
      const fresh=detected.filter(event=>!existing.has(event.type+'|'+event.key+'|'+Math.floor(Number(event.time)/300000)));
      if(fresh.length){
        rainEvents=[...fresh,...rainEvents]
          .filter(event=>now-Number(event.time)<90*60*1000)
          .slice(0,12);
        saveRainEvents();
        renderRainEvents();
        showRainEventToast(fresh[0]);
      }
    }else{
      renderRainEvents();
    }

    rainEventSnapshot={time:now,items:snapshotRainSignals(currentResults)};
    try{localStorage.setItem(rainSnapshotStorageKey,JSON.stringify(rainEventSnapshot))}catch(_){}
  }

  async function openRainEvent(event){
    if(!event)return;
    rainEventToast.classList.remove('show');

    const current=liveRainResults.find(result=>rainPlaceKey(result)===event.key);
    if(current&&event.type!=='stop'){
      await enterLiveRain(current);
      return;
    }

    const place=liveRainScanPlaces.find(item=>rainPlaceKey(item)===event.key);
    if(!place)return;

    try{
      const currentWeather=await fetchAnywhereWeather(place);
      const signal=rainSignal(place,currentWeather);
      if(signal){
        await enterLiveRain(signal);
        return;
      }

      atmosphereMode='live';
      localStorage.setItem('pluvia-v83-atmosphere','live');
      refreshAtmosphereMode();
      const weatherObject=anywhereWeatherObject(currentWeather);

      if(place.curatedId){
        selectCity(place.curatedId,{enter:true,liveSignal:false,liveWeather:weatherObject});
      }else{
        const dynamicId=await registerWorldPlace(place,{liveRainFlag:false});
        selectCity(dynamicId,{enter:true,liveSignal:false,liveWeather:weatherObject});
      }
    }catch(_){}
  }

  rainEventsList.addEventListener('click',event=>{
    const card=event.target.closest('[data-rain-event-id]');
    if(!card)return;
    const item=rainEvents.find(entry=>entry.id===card.dataset.rainEventId);
    if(item)void openRainEvent(item);
  });

  rainEventToast.addEventListener('pointerdown',event=>event.stopPropagation());
  rainEventToast.addEventListener('click',event=>{
    event.stopPropagation();
    if(event.target.closest('.rain-event-toast-close')){
      rainEventToast.classList.remove('show');
      return;
    }
    const trigger=event.target.closest('[data-toast-rain-event]');
    if(!trigger)return;
    const item=rainEvents.find(entry=>entry.id===trigger.dataset.toastRainEvent);
    if(item)void openRainEvent(item);
  });

  renderRainEvents();

  const rainyCodes=new Set([51,53,55,56,57,61,63,65,80,81,82,95,96,99]);
  const snowCodes=new Set([71,73,75,77,85,86]);

  function rainSignal(entry,current){
    const rain=Math.max(0,Number(current?.rain)||0);
    const precipitation=Math.max(0,Number(current?.precipitation)||0);
    const code=Number(current?.weather_code);
    if(snowCodes.has(code))return null;
    if(!(rain>.01||precipitation>.01||rainyCodes.has(code)))return null;
    const amount=Math.max(rain,precipitation);
    const score=amount*12+([95,96,99].includes(code)?24:0)+([80,81,82].includes(code)?5:0);
    const level=[95,96,99].includes(code)||amount>=4?'storm':amount>=1.5?'heavy':amount>=.35?'steady':'light';
    return {...entry,current:{...current},rain,precipitation,amount,code,score,level};
  }

  function mercatorY(lat){
    const clamped=Math.max(-85.05112878,Math.min(85.05112878,Number(lat)||0));
    const rad=clamped*Math.PI/180;
    return (1-Math.asinh(Math.tan(rad))/Math.PI)/2;
  }

  function mapPoint(place){
    const w=Math.max(1,liveRainMap.clientWidth||1000);
    const h=Math.max(1,liveRainMap.clientHeight||540);
    const world=w;
    const offsetY=(h-world)/2;
    const x=((Number(place.lon)+180)/360)*world;
    const y=mercatorY(place.lat)*world+offsetY;
    return {
      x:(x/w)*100,
      y:(y/h)*100,
      visible:y>=-12&&y<=h+12
    };
  }

  function radarClickLatLon(event){
    const rect=liveRainMap.getBoundingClientRect();
    const world=rect.width;
    const offsetY=(rect.height-world)/2;
    const x=(event.clientX-rect.left)/world;
    const y=(event.clientY-rect.top-offsetY)/world;
    if(x<0||x>1||y<0||y>1)return null;
    const lon=x*360-180;
    const lat=Math.atan(Math.sinh(Math.PI*(1-2*y)))*180/Math.PI;
    return {lat,lon};
  }



  // PLUVIA 9.2 — Anywhere on Earth
  function anywhereRegion(lat,lon){
    lat=Number(lat);lon=Number(lon);
    if(lon<-30)return lat<12?'South America':'North America';
    if(lon<60)return lat<34?'Africa':'Europe';
    if(lat<-10&&lon>105)return 'Oceania';
    return 'Asia';
  }

  function normalizePlaceResult(place){
    return {
      id:'geo-'+place.id,
      geoId:place.id,
      name:place.name,
      country:place.country||place.country_code||'',
      countryCode:(place.country_code||'US').toUpperCase(),
      admin1:place.admin1||'',
      lat:Number(place.latitude),
      lon:Number(place.longitude),
      tz:place.timezone||'UTC',
      region:anywhereRegion(place.latitude,place.longitude),
      imageName:place.name
    };
  }

  function anywhereWeatherObject(current){
    return {
      temp:Number(current.temperature_2m),
      rain:Number(current.rain??current.precipitation??0),
      wind:Number(current.wind_speed_10m??0),
      direction:Number(current.wind_direction_10m??105),
      code:Number(current.weather_code)
    };
  }

  async function fetchAnywhereWeather(place){
    const current='temperature_2m,precipitation,rain,weather_code,wind_speed_10m,wind_direction_10m';
    const url='https://api.open-meteo.com/v1/forecast?latitude='+encodeURIComponent(place.lat)+'&longitude='+encodeURIComponent(place.lon)+'&current='+current+'&timezone=auto';
    const res=await fetch(url,{cache:'no-store'});
    if(!res.ok)throw new Error('Weather unavailable');
    const data=await res.json();
    return data.current||{};
  }

  function clearAnywhereResults(){
    anywhereSearchResults.hidden=true;
    anywhereSearchResults.replaceChildren();
  }

  function renderAnywhereResults(results){
    anywhereSearchResults.replaceChildren();
    if(!results.length){
      const empty=document.createElement('div');
      empty.className='anywhere-search-empty';
      empty.textContent='No matching place found.';
      anywhereSearchResults.appendChild(empty);
      anywhereSearchResults.hidden=false;
      return;
    }

    results.forEach(raw=>{
      const place=normalizePlaceResult(raw);
      const button=document.createElement('button');
      button.type='button';
      button.className='anywhere-result';
      button.dataset.geoId=String(raw.id);
      const main=document.createElement('span');
      main.className='anywhere-result-main';
      const strong=document.createElement('strong');
      strong.textContent=place.name;
      const small=document.createElement('small');
      small.textContent=[place.admin1,place.country].filter(Boolean).join(' · ');
      main.append(strong,small);
      const meta=document.createElement('span');
      meta.className='anywhere-result-meta';
      meta.textContent=place.tz.replaceAll('_',' ');
      button.append(main,meta);
      button.addEventListener('click',()=>void inspectAnywherePlace(place));
      anywhereSearchResults.appendChild(button);
    });
    anywhereSearchResults.hidden=false;
  }

  async function searchAnywhere(query){
    query=String(query||'').trim();
    if(query.length<2){clearAnywhereResults();return}
    const seq=++anywhereSearchSeq;
    anywhereSearchShell.classList.add('searching');
    try{
      const url='https://geocoding-api.open-meteo.com/v1/search?name='+encodeURIComponent(query)+'&count=7&language=en&format=json';
      const res=await fetch(url,{cache:'no-store'});
      if(!res.ok)throw new Error('Search unavailable');
      const data=await res.json();
      if(seq!==anywhereSearchSeq)return;
      renderAnywhereResults(Array.isArray(data.results)?data.results:[]);
    }catch(_){
      if(seq!==anywhereSearchSeq)return;
      anywhereSearchResults.innerHTML='<div class="anywhere-search-empty">Place search is temporarily unavailable.</div>';
      anywhereSearchResults.hidden=false;
    }finally{
      if(seq===anywhereSearchSeq)anywhereSearchShell.classList.remove('searching');
    }
  }

  function anywhereWeatherLabel(current){
    const code=Number(current.weather_code);
    const amount=Math.max(Number(current.rain)||0,Number(current.precipitation)||0);
    return {
      condition:weatherText(code),
      amount,
      temp:Number(current.temperature_2m),
      wind:Number(current.wind_speed_10m)||0
    };
  }

  async function inspectAnywherePlace(place){
    clearAnywhereResults();
    anywhereSelected=null;
    anywherePlaceCard.hidden=false;
    anywherePlaceCard.className='anywhere-place-card loading';
    anywherePlaceCard.innerHTML='<div class="anywhere-place-loading">Reading the sky over '+place.name+'…</div>';

    try{
      const current=await fetchAnywhereWeather(place);
      const signal=rainSignal(place,current);
      anywhereSelected={place,current,signal};
      const w=anywhereWeatherLabel(current);
      const local=localTime(place.tz);

      const top=document.createElement('div');
      top.className='anywhere-place-top';
      const identity=document.createElement('div');
      const micro=document.createElement('span');
      micro.className='micro';
      micro.textContent=signal?'LIVE RAIN CONFIRMED':'ANYWHERE ON EARTH';
      const title=document.createElement('h3');
      title.textContent=place.name;
      const sub=document.createElement('small');
      sub.textContent=[place.admin1,place.country,local+' local'].filter(Boolean).join(' · ');
      identity.append(micro,title,sub);

      const weatherBox=document.createElement('div');
      weatherBox.className='anywhere-place-weather';
      const temp=document.createElement('strong');
      temp.textContent=Number.isFinite(w.temp)?Math.round(w.temp)+'°':'—°';
      const cond=document.createElement('span');
      cond.textContent=w.condition;
      const met=document.createElement('small');
      met.textContent=w.amount.toFixed(1)+' mm · '+Math.round(w.wind)+' km/h wind';
      weatherBox.append(temp,cond,met);
      top.append(identity,weatherBox);

      const message=document.createElement('p');
      message.textContent=signal
        ?'Rain is being reported here right now. Enter with the real weather signal driving the Pluvia atmosphere.'
        :'It is not raining here right now. You can enter the real current weather, or deliberately switch on a simulated Pluvia rain atmosphere.';

      const actions=document.createElement('div');
      actions.className='anywhere-place-actions';

      const primary=document.createElement('button');
      primary.type='button';
      primary.className='anywhere-action primary';
      primary.textContent=signal?'Watch live rain ↗':'Enter live weather ↗';
      primary.addEventListener('click',()=>void enterAnywhereSelection({simulate:false}));

      actions.appendChild(primary);

      if(!signal){
        const rainBtn=document.createElement('button');
        rainBtn.type='button';
        rainBtn.className='anywhere-action';
        rainBtn.textContent='Make it rain';
        rainBtn.addEventListener('click',()=>void enterAnywhereSelection({simulate:true}));
        actions.appendChild(rainBtn);
      }

      const close=document.createElement('button');
      close.type='button';
      close.className='anywhere-place-close';
      close.setAttribute('aria-label','Close place details');
      close.textContent='×';
      close.addEventListener('click',()=>{
        anywherePlaceCard.hidden=true;
        anywhereSelected=null;
      });

      anywherePlaceCard.replaceChildren(top,message,actions,close);
      anywherePlaceCard.className='anywhere-place-card '+(signal?'wet':'dry');
    }catch(_){
      anywherePlaceCard.className='anywhere-place-card dry';
      anywherePlaceCard.innerHTML='<strong>Could not read this sky</strong><p>Live weather for this place is temporarily unavailable. Try again shortly.</p>';
    }
  }

  function populateRadarBase(){
    if(radarBaseLayer.childElementCount)return;
    for(let y=0;y<2;y++){
      for(let x=0;x<2;x++){
        const tile=document.createElement('img');
        tile.alt='';
        tile.decoding='async';
        tile.loading='eager';
        tile.src='https://maps.rainviewer.com/styles/m2_dark/512/'+radarZoom+'/'+x+'/'+y+'.png';
        radarBaseLayer.appendChild(tile);
      }
    }
  }

  function radarTileUrl(frame,x,y){
    return radarHost+frame.path+'/512/'+radarZoom+'/'+x+'/'+y+'/2/1_1.png';
  }

  function setRadarLayer(layer,frame){
    layer.replaceChildren();
    for(let y=0;y<2;y++){
      for(let x=0;x<2;x++){
        const tile=document.createElement('img');
        tile.alt='';
        tile.decoding='async';
        tile.loading='eager';
        tile.src=radarTileUrl(frame,x,y);
        layer.appendChild(tile);
      }
    }
  }

  function formatRadarTime(frame){
    if(!frame)return 'Radar unavailable';
    return new Intl.DateTimeFormat('en-US',{
      hour:'numeric',minute:'2-digit',timeZoneName:'short'
    }).format(new Date(frame.time*1000));
  }

  function showRadarFrame(index,{crossfade=true}={}){
    if(!radarFrames.length)return;
    radarFrameIndex=Math.max(0,Math.min(radarFrames.length-1,Number(index)||0));
    radarTimeline.value=String(radarFrameIndex);
    radarFrameTime.textContent=(radarFrameIndex===radarFrames.length-1?'LATEST · ':'')+formatRadarTime(radarFrames[radarFrameIndex]);

    const nextLayer=radarLayers[crossfade?1-radarActiveLayer:radarActiveLayer];
    setRadarLayer(nextLayer,radarFrames[radarFrameIndex]);
    if(crossfade){
      nextLayer.classList.add('active');
      radarLayers[radarActiveLayer].classList.remove('active');
      radarActiveLayer=1-radarActiveLayer;
    }else{
      nextLayer.classList.add('active');
    }
  }

  function stopRadarPlayback(){
    radarPlaying=false;
    clearInterval(radarPlaybackTimer);
    radarPlaybackTimer=null;
    radarPlay.textContent='▶';
    radarPlay.setAttribute('aria-label','Play recent radar');
  }

  function startRadarPlayback(){
    if(radarFrames.length<2)return;
    stopRadarPlayback();
    radarPlaying=true;
    radarPlay.textContent='Ⅱ';
    radarPlay.setAttribute('aria-label','Pause radar playback');
    if(radarFrameIndex>=radarFrames.length-1)radarFrameIndex=0;
    showRadarFrame(radarFrameIndex,{crossfade:true});
    radarPlaybackTimer=setInterval(()=>{
      const next=(radarFrameIndex+1)%radarFrames.length;
      showRadarFrame(next,{crossfade:true});
    },1200);
  }

  async function refreshRadarFrames(){
    try{
      const res=await fetch('https://api.rainviewer.com/public/weather-maps.json',{cache:'no-store'});
      if(!res.ok)throw new Error('radar metadata unavailable');
      const data=await res.json();
      const frames=(data?.radar?.past||[]).slice(-12);
      if(!frames.length)throw new Error('no radar frames');
      radarHost=data.host||'https://tilecache.rainviewer.com';
      radarFrames=frames;
      radarTimeline.max=String(frames.length-1);
      radarLastUpdated=Date.now();
      populateRadarBase();
      showRadarFrame(frames.length-1,{crossfade:false});
      liveRainMap.classList.add('radar-ready');
      liveRainMapEmpty.hidden=true;
    }catch(_){
      radarFrameTime.textContent='Radar temporarily unavailable';
      liveRainMap.classList.remove('radar-ready');
    }
  }

  function haversineKm(a,b){
    const R=6371,toRad=v=>v*Math.PI/180;
    const dLat=toRad(Number(b.lat)-Number(a.lat));
    const dLon=toRad(Number(b.lon)-Number(a.lon));
    const lat1=toRad(Number(a.lat)),lat2=toRad(Number(b.lat));
    const s=Math.sin(dLat/2)**2+Math.cos(lat1)*Math.cos(lat2)*Math.sin(dLon/2)**2;
    return 2*R*Math.asin(Math.min(1,Math.sqrt(s)));
  }

  function nearestRadarPlace(point){
    let best=null,bestKm=Infinity;
    liveRainScanPlaces.forEach(place=>{
      const km=haversineKm(point,place);
      if(km<bestKm){best=place;bestKm=km}
    });
    return best?{place:best,km:bestKm}:null;
  }

  async function inspectRadarPoint(point){
    if(!point)return;
    radarInspect.hidden=false;
    radarInspect.className='radar-inspect loading';
    radarInspect.textContent='Checking live weather at '+Math.abs(point.lat).toFixed(1)+'°'+(point.lat>=0?'N':'S')+' · '+Math.abs(point.lon).toFixed(1)+'°'+(point.lon>=0?'E':'W')+'…';
    try{
      const current='temperature_2m,precipitation,rain,weather_code,wind_speed_10m,wind_direction_10m';
      const url='https://api.open-meteo.com/v1/forecast?latitude='+point.lat.toFixed(4)+'&longitude='+point.lon.toFixed(4)+'&current='+current;
      const res=await fetch(url,{cache:'no-store'});
      if(!res.ok)throw new Error('point weather failed');
      const data=await res.json();
      const nearest=nearestRadarPlace(point);
      const signal=rainSignal({
        id:'radar-'+point.lat.toFixed(3)+'-'+point.lon.toFixed(3),
        name:nearest?'Near '+nearest.place.name:'Radar Point',
        country:nearest?.place.country||'',
        lat:point.lat,lon:point.lon,
        tz:nearest?.place.tz||'UTC',
        region:nearest?.place.region||'World',
        imageName:nearest?.place.name||''
      },data.current||{});

      if(!signal){
        radarInspect.className='radar-inspect dry';
        radarInspect.innerHTML='<strong>No current rain confirmation here</strong><span>The radar image may be a few minutes behind, or the precipitation may be nearby. Try another colored rain cell.</span>';
        return;
      }

      radarInspect.className='radar-inspect wet';
      radarInspect.innerHTML='<strong>'+liveRainCondition(signal)+' · '+signal.amount.toFixed(1)+' mm</strong>'+
        '<span>'+(nearest?'Nearest Pluvia place: '+nearest.place.name+' · '+Math.round(nearest.km)+' km away':'Live radar point')+'</span>'+
        '<button type="button" id="openRadarPoint">Watch this rain ↗</button>';
      radarInspect.querySelector('#openRadarPoint')?.addEventListener('click',e=>{
        e.stopPropagation();
        void enterLiveRain(signal);
      },{once:true});
    }catch(_){
      radarInspect.className='radar-inspect dry';
      radarInspect.innerHTML='<strong>Could not verify this point</strong><span>Try again or choose one of the confirmed raining cities.</span>';
    }
  }

  function liveRainCondition(result){
    if([95,96,99].includes(result.code))return 'Thunderstorm';
    if([80,81,82].includes(result.code))return 'Rain showers';
    if([51,53,55,56,57].includes(result.code))return 'Drizzle';
    return result.rain>=1.5?'Heavy rain':'Rain';
  }

  function renderLiveRainWorld(){
    const top=liveRainResults.slice(0,12);
    liveRainCount.textContent=String(liveRainResults.length);
    liveRainMapEmpty.hidden=liveRainResults.length>0;

    liveRainMarkers.replaceChildren();
    liveRainResults.forEach((r,index)=>{
      const p=mapPoint(r);
      if(!p.visible)return;
      const button=document.createElement('button');
      button.type='button';
      button.className='live-rain-marker '+r.level;
      button.style.left=p.x+'%';
      button.style.top=p.y+'%';
      button.style.setProperty('--rain-rank',String(Math.min(1,.25+r.score/35)));
      button.dataset.liveRainId=r.id;
      button.title=r.name+' · '+liveRainCondition(r)+' · '+r.amount.toFixed(1)+' mm';
      button.setAttribute('aria-label','Watch live rain in '+r.name+', '+r.country);
      button.innerHTML='<i></i><span>'+r.name+'</span>';
      if(index>25)button.classList.add('minor');
      liveRainMarkers.appendChild(button);
    });

    if(!top.length){
      liveRainList.innerHTML='<div class="live-rain-loading">No rain signal was found in the scanned cities on this refresh. Try again shortly.</div>';
      return;
    }

    liveRainList.innerHTML=top.map((r,index)=>
      '<button class="live-rain-card" type="button" data-live-rain-id="'+r.id+'">'+
        '<span class="live-rain-rank">'+String(index+1).padStart(2,'0')+'</span>'+
        '<span class="live-rain-card-main"><strong>'+r.name+'</strong><small>'+r.country+' · '+liveRainCondition(r)+'</small></span>'+
        '<span class="live-rain-card-weather"><b>'+r.amount.toFixed(1)+' mm</b><small>'+Math.round(Number(r.current.wind_speed_10m)||0)+' km/h</small></span>'+
        '<span class="live-rain-watch">WATCH ↗</span>'+
      '</button>'
    ).join('');
  }

  async function fetchLiveRainChunk(chunk){
    const latitude=chunk.map(x=>x.lat).join(',');
    const longitude=chunk.map(x=>x.lon).join(',');
    const current='temperature_2m,precipitation,rain,weather_code,wind_speed_10m,wind_direction_10m';
    const url='https://api.open-meteo.com/v1/forecast?latitude='+encodeURIComponent(latitude)+'&longitude='+encodeURIComponent(longitude)+'&current='+current;
    const res=await fetch(url,{cache:'no-store'});
    if(!res.ok)throw new Error('Live rain signal unavailable');
    const data=await res.json();
    const rows=Array.isArray(data)?data:[data];
    return chunk.map((place,index)=>rainSignal(place,rows[index]?.current||{})).filter(Boolean);
  }

  async function refreshLiveRainWorld(){
    if(liveRainRefreshing)return;
    liveRainRefreshing=true;
    refreshLiveRain.disabled=true;
    liveRainStatus.textContent='Scanning '+liveRainScanPlaces.length+' world cities…';
    liveRainMap.classList.add('refreshing');
    try{
      const chunks=[];
      for(let i=0;i<liveRainScanPlaces.length;i+=34)chunks.push(liveRainScanPlaces.slice(i,i+34));
      const groups=await Promise.all(chunks.map(fetchLiveRainChunk));
      const seen=new Set();
      liveRainResults=groups.flat()
        .sort((a,b)=>b.score-a.score)
        .filter(r=>{
          const key=r.name.toLowerCase()+'|'+r.country.toLowerCase();
          if(seen.has(key))return false;
          seen.add(key);return true;
        });
      liveRainLastUpdated=Date.now();
      renderLiveRainWorld();
      processRainEvents(liveRainResults);
      liveRainStatus.textContent=liveRainResults.length+' raining now · updated '+new Intl.DateTimeFormat('en-US',{hour:'numeric',minute:'2-digit'}).format(new Date());
    }catch(_){
      liveRainStatus.textContent=liveRainResults.length?'Live refresh failed · showing last signal':'Live rain signal unavailable · try refresh';
      if(!liveRainResults.length)liveRainMapEmpty.textContent='Could not reach the live rain signal.';
    }finally{
      liveRainRefreshing=false;
      refreshLiveRain.disabled=false;
      liveRainMap.classList.remove('refreshing');
    }
  }

  async function resolveLiveCityImage(place){
    if(place.curatedId)return {src:cities[place.curatedId].image,pos:cities[place.curatedId].pos,label:cities[place.curatedId].landmark};
    if(liveImageCache.has(place.id))return liveImageCache.get(place.id);

    const storageKey='pluvia-live-image-'+place.id;
    try{
      const saved=JSON.parse(sessionStorage.getItem(storageKey)||'null');
      if(saved?.src){liveImageCache.set(place.id,saved);return saved;}
    }catch(_){}

    const search=async term=>{
      const api='https://commons.wikimedia.org/w/api.php?origin=*&action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=12&gsrsearch='+
        encodeURIComponent(term)+'&prop=imageinfo&iiprop=url%7Cmime%7Csize&iiurlwidth=1600';
      const res=await fetch(api,{mode:'cors',cache:'force-cache'});
      if(!res.ok)return [];
      const data=await res.json();
      return Object.values(data?.query?.pages||{}).map(page=>{
        const info=page?.imageinfo?.[0];
        return info?{title:page.title,src:info.thumburl||info.url,mime:info.mime,width:info.thumbwidth||info.width,height:info.thumbheight||info.height}:null;
      }).filter(Boolean);
    };

    try{
      const imageName=place.imageName||place.name;
      let options=await search(imageName+' '+place.country+' skyline city');
      if(!options.length)options=await search(imageName+' '+place.country);
      const landscape=options.filter(x=>/^image\/(jpeg|png|webp)/.test(x.mime||'')&&Number(x.width)>900&&Number(x.width)>Number(x.height)*1.12);
      const pick=landscape[0]||options.find(x=>/^image\/(jpeg|png|webp)/.test(x.mime||''))||null;
      if(!pick)return null;
      const view={src:pick.src,pos:'50% 50%',label:place.name+' city view'};
      liveImageCache.set(place.id,view);
      try{sessionStorage.setItem(storageKey,JSON.stringify(view));}catch(_){}
      return view;
    }catch(_){return null}
  }

  function liveRainAnchor(place){
    if(place.region==='Europe')return 'london';
    if(place.region==='North America')return place.lon<-100?'seattle':'newyork';
    if(place.region==='South America')return 'saopaulo';
    if(place.region==='Asia'){
      if(place.lon<85)return 'mumbai';
      if(place.lon<112)return 'singapore';
      return place.lat>28?'tokyo':'singapore';
    }
    if(place.region==='Oceania')return 'vancouver';
    return 'london';
  }


  async function registerWorldPlace(result,{liveRainFlag=false}={}){
    const view=await resolveLiveCityImage(result);
    const anchorId=liveRainAnchor(result);
    const anchorCity=cities[anchorId];
    const anchorSoul=citySoul[anchorId]||citySoul.tokyo;
    const dynamicId='world-'+String(result.id).replace(/[^a-z0-9-]/gi,'-').toLowerCase();

    const genericLiveSvg='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000">'+
      '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#06131a"/><stop offset=".52" stop-color="#17303b"/><stop offset="1" stop-color="#071017"/></linearGradient>'+
      '<radialGradient id="r"><stop stop-color="#6baac4" stop-opacity=".28"/><stop offset="1" stop-color="#06131a" stop-opacity="0"/></radialGradient></defs>'+
      '<rect width="1600" height="1000" fill="url(#g)"/><ellipse cx="1090" cy="190" rx="620" ry="400" fill="url(#r)"/></svg>'
    );
    const worldView=view||{src:genericLiveSvg,pos:'50% 50%',label:result.name+' · world view'};

    cities[dynamicId]={
      name:result.name,country:result.country,landmark:worldView.label,
      lat:result.lat,lon:result.lon,tz:result.tz,pos:worldView.pos||'50% 50%',
      image:worldView.src,songs:(anchorCity.songs||[]).map(track=>[...track]),
      liveRain:Boolean(liveRainFlag),worldPlace:true,strictLiveDry:!liveRainFlag
    };
    cityViews[dynamicId]=[worldView];
    citySoul[dynamicId]={
      ...anchorSoul,
      ambient:liveRainFlag?'live world rain':'world ambience',
      story:liveRainFlag
        ?'Live rain is moving through '+result.name+' right now.'
        :result.name+' is open through a Pluvia window.'
    };
    regionByCity[dynamicId]=result.region;
    originalSongCounts[dynamicId]=cities[dynamicId].songs.length;
    cityMusicMarket[dynamicId]=(result.countryCode||cityMusicMarket[anchorId]||'US').toUpperCase();
    return dynamicId;
  }

  async function enterAnywhereSelection({simulate=false}={}){
    if(!anywhereSelected)return;
    const {place,current,signal}=anywhereSelected;

    if(signal&&!simulate){
      await enterLiveRain(signal);
      return;
    }

    anywherePlaceCard.classList.add('opening');
    const dynamicId=await registerWorldPlace(place,{liveRainFlag:false});
    const w=anywhereWeatherObject(current);

    atmosphereMode=simulate?'rain':'live';
    localStorage.setItem('pluvia-v83-atmosphere',atmosphereMode);
    refreshAtmosphereMode();

    selectCity(dynamicId,{enter:true,liveSignal:false,liveWeather:w});
    anywherePlaceCard.classList.remove('opening');
  }

  async function enterLiveRain(placeRef){
    const result=typeof placeRef==='string'?liveRainResults.find(x=>x.id===placeRef):placeRef;
    if(!result)return;
    liveRainStatus.textContent='Opening '+result.name+' rain…';
    liveSignalBadge.innerHTML='<i></i><span>LIVE RAIN</span><b>'+result.name+' · '+result.amount.toFixed(1)+' mm · '+Math.round(Number(result.current.wind_speed_10m)||0)+' km/h wind</b>';

    if(result.curatedId){
      atmosphereMode='live';
      localStorage.setItem('pluvia-v83-atmosphere','live');
      refreshAtmosphereMode();
      selectCity(result.curatedId,{enter:true,liveSignal:true,liveWeather:{
        temp:Number(result.current.temperature_2m),
        rain:Number(result.current.rain??result.current.precipitation??0),
        wind:Number(result.current.wind_speed_10m??0),
        direction:Number(result.current.wind_direction_10m??105),
        code:Number(result.current.weather_code)
      }});
      return;
    }

    const dynamicId=await registerWorldPlace(result,{liveRainFlag:true});

    atmosphereMode='live';
    localStorage.setItem('pluvia-v83-atmosphere','live');
    refreshAtmosphereMode();

    selectCity(dynamicId,{enter:true,liveSignal:true,liveWeather:{
        temp:Number(result.current.temperature_2m),
        rain:Number(result.current.rain??result.current.precipitation??0),
        wind:Number(result.current.wind_speed_10m??0),
        direction:Number(result.current.wind_direction_10m??105),
        code:Number(result.current.weather_code)
      }});
  }



  anywhereSearchForm.addEventListener('submit',e=>{
    e.preventDefault();
    clearTimeout(anywhereSearchTimer);
    void searchAnywhere(anywhereSearchInput.value);
  });
  anywhereSearchInput.addEventListener('input',()=>{
    clearTimeout(anywhereSearchTimer);
    anywherePlaceCard.hidden=true;
    anywhereSelected=null;
    const q=anywhereSearchInput.value.trim();
    if(q.length<2){clearAnywhereResults();return}
    anywhereSearchTimer=setTimeout(()=>void searchAnywhere(q),280);
  });
  anywhereSearchInput.addEventListener('keydown',e=>{
    if(e.key==='Escape'){
      clearAnywhereResults();
      anywherePlaceCard.hidden=true;
      anywhereSelected=null;
      anywhereSearchInput.blur();
    }
  });
  document.addEventListener('click',e=>{
    if(!e.target.closest('#anywhereSearchShell'))clearAnywhereResults();
  });

  document.addEventListener('visibilitychange',()=>{if(document.hidden)stopRadarPlayback()});

  radarPlay.addEventListener('click',e=>{
    e.stopPropagation();
    radarPlaying?stopRadarPlayback():startRadarPlayback();
  });
  radarLatest.addEventListener('click',e=>{
    e.stopPropagation();
    stopRadarPlayback();
    showRadarFrame(radarFrames.length-1,{crossfade:true});
  });
  radarTimeline.addEventListener('input',e=>{
    stopRadarPlayback();
    showRadarFrame(Number(e.target.value),{crossfade:true});
  });
  radarChase.addEventListener('click',e=>{
    e.stopPropagation();
    stormChaseActive?stopStormChase({keepScene:true}):startStormChase();
  });
  liveRainMap.addEventListener('click',e=>{
    if(e.target.closest('.live-rain-marker,.radar-inspect'))return;
    const point=radarClickLatLon(e);
    if(point)void inspectRadarPoint(point);
  });

  liveRainSection.addEventListener('click',e=>{
    const target=e.target.closest('[data-live-rain-id]');
    if(target)void enterLiveRain(target.dataset.liveRainId);
  });
  refreshLiveRain.addEventListener('click',refreshLiveRainWorld);

  setInterval(()=>{
    if(document.hidden)return;
    if(Date.now()-liveRainLastUpdated>4.5*60*1000)void refreshLiveRainWorld();
    if(Date.now()-radarLastUpdated>4.5*60*1000)void refreshRadarFrames();
  },60000);
  void refreshLiveRainWorld();
  void refreshRadarFrames();

  let liveRainResizeRaf=0;
  window.addEventListener('resize',()=>{
    cancelAnimationFrame(liveRainResizeRaf);
    liveRainResizeRaf=requestAnimationFrame(()=>{if(liveRainResults.length)renderLiveRainWorld()});
  },{passive:true});

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
    const c=cities[active], soul=citySoul[active]||citySoul.tokyo;
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


  // PLUVIA 8.2 — Weather-Reactive Atmosphere
  let weatherAtmosphere={
    kind:'drizzle',density:.52,speed:1,alpha:1,lean:5,windX:1.1,mist:.22,cloud:.28,wetness:.52
  };

  // PLUVIA 8.3 — Atmosphere Chooser
  const atmosphereModes=['live','drizzle','rain','storm','snow'];
  let atmosphereMode=localStorage.getItem('pluvia-v83-atmosphere')||'live';
  if(!atmosphereModes.includes(atmosphereMode))atmosphereMode='live';

  const atmosphereLabels={live:'Live',drizzle:'Drizzle',rain:'Rain',storm:'Storm',snow:'Snow'};
  const atmosphereMainBtn=document.createElement('button');
  atmosphereMainBtn.className='pill atmosphere-main-pill';
  atmosphereMainBtn.type='button';
  atmosphereMainBtn.innerHTML='<span>Atmosphere</span><span class="atmosphere-pill-state">'+atmosphereLabels[atmosphereMode]+'</span>';
  document.querySelector('.actions')?.appendChild(atmosphereMainBtn);

  const atmospherePicker=document.createElement('div');
  atmospherePicker.className='atmosphere-picker';
  atmospherePicker.innerHTML='<div class="atmosphere-picker-head"><span>ATMOSPHERE MODE</span><small>Live uses the city’s real weather</small></div><div class="atmosphere-picker-options">'+
    atmosphereModes.map(mode=>'<button type="button" data-atmosphere-mode="'+mode+'">'+atmosphereLabels[mode]+'</button>').join('')+
    '</div>';
  soundPanel.insertBefore(atmospherePicker,soundPanel.querySelector('.mix-row'));

  function presetWeatherProfile(mode){
    const liveWind=Math.max(0,Number(weather?.wind)||10);
    const direction=Number.isFinite(Number(weather?.direction))?Number(weather.direction):105;
    const radians=direction*Math.PI/180;
    const windForce=Math.min(1,liveWind/42);
    const windX=(-Math.sin(radians))*(.6+windForce*4.4);
    const lean=(-Math.sin(radians))*(5+windForce*21);

    if(mode==='drizzle')return {kind:'drizzle',density:.5,speed:.88,alpha:.88,mist:.22,cloud:.48,wetness:.58,windX,lean};
    if(mode==='rain')return {kind:'rain',density:.78,speed:1.14,alpha:1.08,mist:.27,cloud:.64,wetness:.78,windX,lean};
    if(mode==='storm')return {kind:'storm',density:1,speed:1.42,alpha:1.24,mist:.34,cloud:.94,wetness:.94,windX:windX*1.25,lean:lean*1.18};
    if(mode==='snow')return {kind:'snow',density:.7,speed:.42,alpha:.92,mist:.3,cloud:.76,wetness:.5,windX:windX*.48,lean:lean*.32};
    return weatherProfile(weather);
  }

  function refreshAtmosphereMode(){
    applyWeatherAtmosphere(weather);
    atmosphereMainBtn.querySelector('.atmosphere-pill-state').textContent=atmosphereLabels[atmosphereMode];
    atmospherePicker.querySelectorAll('[data-atmosphere-mode]').forEach(btn=>{
      btn.classList.toggle('active',btn.dataset.atmosphereMode===atmosphereMode);
      btn.setAttribute('aria-pressed',String(btn.dataset.atmosphereMode===atmosphereMode));
    });
  }

  atmospherePicker.addEventListener('click',e=>{
    const btn=e.target.closest('[data-atmosphere-mode]');
    if(!btn)return;
    atmosphereMode=btn.dataset.atmosphereMode;
    localStorage.setItem('pluvia-v83-atmosphere',atmosphereMode);
    refreshAtmosphereMode();
    if(atmosphereMode==='storm'&&body.classList.contains('immersive'))triggerWeatherLightning();
  });

  atmosphereMainBtn.addEventListener('click',()=>{
    soundPanel.classList.add('open');
    setTimeout(()=>atmospherePicker.scrollIntoView({block:'nearest',behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'}),0);
  });

  function weatherProfile(w){
    if(!w) return {kind:'drizzle',density:.52,speed:1,alpha:1,mist:.22,cloud:.28,wetness:.52};

    const code=Number(w.code);
    const rain=Math.max(0,Number(w.rain)||0);
    const wind=Math.max(0,Number(w.wind)||0);
    let p;

    if([95,96,99].includes(code)){
      p={kind:'storm',density:1,speed:1.38,alpha:1.22,mist:.32,cloud:.92,wetness:.9};
    }else if([80,81,82].includes(code)){
      p={kind:'showers',density:.88,speed:1.22,alpha:1.12,mist:.29,cloud:.72,wetness:.82};
    }else if([61,63,65].includes(code)){
      p={kind:'rain',density:.76,speed:1.12,alpha:1.06,mist:.27,cloud:.62,wetness:.76};
    }else if([51,53,55,56,57].includes(code)){
      p={kind:'drizzle',density:.5,speed:.88,alpha:.88,mist:.22,cloud:.48,wetness:.58};
    }else if([71,73,75,77,85,86].includes(code)){
      p={kind:'snow',density:.38,speed:.68,alpha:.68,mist:.28,cloud:.7,wetness:.46};
    }else if([1,2,3].includes(code)){
      p={kind:'cloudy',density:.32,speed:.78,alpha:.7,mist:.18,cloud:.5,wetness:.42};
    }else{
      p={kind:'clear',density:.22,speed:.72,alpha:.62,mist:.12,cloud:.15,wetness:.34};
    }

    const rainBoost=Math.min(.2,rain*.025);
    p.density=Math.min(1,p.density+rainBoost);
    p.speed=Math.min(1.52,p.speed+Math.min(.16,rain*.012));
    p.wetness=Math.min(.94,p.wetness+Math.min(.12,rain*.02));

    const direction=Number.isFinite(Number(w.direction))?Number(w.direction):105;
    const radians=direction*Math.PI/180;
    const windForce=Math.min(1,wind/42);
    p.windX=(-Math.sin(radians))*(.6+windForce*4.4);
    p.lean=(-Math.sin(radians))*(5+windForce*21);
    return p;
  }

  function applyWeatherAtmosphereProfile(profile){
    weatherAtmosphere=profile;
    body.dataset.weather=weatherAtmosphere.kind;
    body.dataset.atmosphereMode=atmosphereMode;
    const tone=weatherAtmosphere.kind==='clear'?.82:weatherAtmosphere.kind==='storm'?1:.94;
    document.documentElement.style.setProperty('--weather-mist-opacity',weatherAtmosphere.mist.toFixed(2));
    document.documentElement.style.setProperty('--weather-cloud-opacity',weatherAtmosphere.cloud.toFixed(2));
    document.documentElement.style.setProperty('--weather-tone-opacity',tone.toFixed(2));
    document.documentElement.style.setProperty('--glass-rain-opacity',weatherAtmosphere.wetness.toFixed(2));
  }

  function applyWeatherAtmosphere(w){
    if(atmosphereMode==='live'&&cities[active]?.strictLiveDry&&w){
      const code=Number(w.code);
      const actualRain=Math.max(0,Number(w.rain)||0);
      const reportingPrecip=actualRain>.01||[51,53,55,56,57,61,63,65,71,73,75,77,80,81,82,85,86,95,96,99].includes(code);
      if(!reportingPrecip){
        const base=weatherProfile(w);
        weatherAtmosphere={...base,density:0,alpha:0,wetness:.08};
        applyWeatherAtmosphereProfile(weatherAtmosphere);
        return;
      }
    }
    weatherAtmosphere=atmosphereMode==='live'?weatherProfile(w):presetWeatherProfile(atmosphereMode);
    applyWeatherAtmosphereProfile(weatherAtmosphere);
  }

  refreshAtmosphereMode();

  async function fetchWeather(id){
    const c=cities[id];
    selectedCondition.textContent='Reading the sky…';
    try{
      const url='https://api.open-meteo.com/v1/forecast?latitude='+c.lat+'&longitude='+c.lon+'&current=temperature_2m,precipitation,rain,weather_code,wind_speed_10m,wind_direction_10m&timezone=auto';
      const res=await fetch(url,{cache:'no-store'});
      const data=await res.json();
      const x=data.current||{};
      weather={temp:x.temperature_2m,rain:x.rain??x.precipitation??0,wind:x.wind_speed_10m??0,direction:x.wind_direction_10m??105,code:x.weather_code};
      selectedTemp.textContent=Math.round(weather.temp)+'°';
      selectedCondition.textContent=weatherText(weather.code);
      selectedMeta.textContent=Number(weather.rain).toFixed(1)+' mm rain · '+Math.round(weather.wind)+' km/h wind';
      if(active===id){
        applyWeatherAtmosphere(weather);
        if(body.classList.contains('live-rain-session')){
          const liveAmount=Math.max(Number(weather.rain)||0,Number(x.precipitation)||0);
          liveSignalBadge.innerHTML='<i></i><span>LIVE RAIN</span><b>'+c.name+' · '+liveAmount.toFixed(1)+' mm · '+Math.round(Number(weather.wind)||0)+' km/h wind</b>';
        }
      }
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

  function selectCity(id,{enter=false,liveSignal=false,liveWeather=null}={}){
    if(!cities[id]) return;
    if(enter&&transitioning) return;
    body.classList.toggle('live-rain-session',Boolean(liveSignal));

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
      updateLiveCameraAvailability();
      rainStory.classList.remove('show');
      rainStoryBtn.classList.remove('active');
      rainStoryBtn.setAttribute('aria-expanded','false');
      rainStoryBtn.querySelector('span').textContent='Tell me about this rain';
      weather=liveWeather?{...liveWeather}:null;
      applyWeatherAtmosphere(weather);

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
      if(weather){
        selectedTemp.textContent=Math.round(Number(weather.temp))+'°';
        selectedCondition.textContent=weatherText(Number(weather.code));
        selectedMeta.textContent=Number(weather.rain||0).toFixed(1)+' mm rain · '+Math.round(Number(weather.wind)||0)+' km/h wind';
      }
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

    if(!entryView?.src){commit();return;}

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
      updateLiveCameraAvailability();
      rainStory.classList.remove('show');
      rainStoryBtn.classList.remove('active');
      rainStoryBtn.setAttribute('aria-expanded','false');
      rainStoryBtn.querySelector('span').textContent='Tell me about this rain';
      weather=liveWeather?{...liveWeather}:null;
      applyWeatherAtmosphere(weather);
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
    takeMe.disabled=true; takeMe.textContent='Scanning the world…';
    try{
      if(!liveRainResults.length||Date.now()-liveRainLastUpdated>4.5*60*1000)await refreshLiveRainWorld();
      if(liveRainResults.length){
        const pool=liveRainResults.slice(0,Math.min(18,liveRainResults.length));
        const result=pool[Math.floor(Math.random()*pool.length)];
        await enterLiveRain(result.id);
      }else{
        const id=order[Math.floor(Math.random()*order.length)];
        selectCity(id,{enter:true});
      }
    }finally{
      takeMe.disabled=false; takeMe.textContent="Take me somewhere it's raining";
    }
  });

  function enterImmersive(){
    body.classList.add('immersive');
    updateLiveCameraAvailability();
    requestAnimationFrame(()=>updateLiveCameraAvailability());
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
    if(stormChaseActive)stopStormChase({keepScene:true});
    clearTimeout(viewTimer);viewTimer=null;
    stopEnvironmentBehavior();
    clearInterval(refogTimer);refogTimer=null;wipeTrail=[];
    if(focusSession) finishFocusSession({manual:true});
    body.classList.remove('immersive','live-rain-session');
    soundPanel.classList.remove('open');
    closeLiveCamera();
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
    playlistArtist.textContent=currentTrack[1]+' · '+((cities[active].liveRain||cities[active].worldPlace)?'Pluvia World Radio':cities[active].name);
    playlistCount.textContent=(trackIndex+1)+' / '+cities[active].songs.length;
    appleTrackLink.href=currentTrack[4]||appleSearchUrl(currentTrack);
    playlistNote.textContent=(cities[active].liveRain||cities[active].worldPlace)?'Regional Pluvia mix · Apple Music preview':(currentTrack[2]?'Apple Music preview · tap Next to explore':'Preview available on request');
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
    playlistNote.textContent=(cities[active].liveRain||cities[active].worldPlace)?'Regional Pluvia mix · short preview':'Apple Music preview · short clip';
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
    const soul=citySoul[active]||citySoul.tokyo;
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
  function triggerWeatherLightning(){
    if(!body.classList.contains('immersive')||weatherAtmosphere.kind!=='storm')return;
    body.classList.remove('weather-lightning');
    void body.offsetWidth;
    body.classList.add('weather-lightning');
    setTimeout(()=>body.classList.remove('weather-lightning'),520);
  }

  function scheduleThunder(){
    if(!ac) return;
    setTimeout(()=>{
      if(body.classList.contains('immersive')&&Number(mix.thunder.value)>0){
        if(weatherAtmosphere.kind==='storm')triggerWeatherLightning();
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
    if(e.target.closest('#musicBtn,#soundPanel,#captureMemoryBtn,#shareExperienceBtn,.share-experience-toast,.rain-event-toast,.storm-chaser-hud,#liveCameraBtn,.live-camera-panel,.memory-preview,.memory-gallery,.memory-scrim,#focusImmersiveBtn,.focus-panel,.focus-scrim,.focus-hud')) return;
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
    if(e.target.closest('#musicBtn,#soundPanel,#captureMemoryBtn,#shareExperienceBtn,.share-experience-toast,.rain-event-toast,.storm-chaser-hud,#liveCameraBtn,.live-camera-panel,.memory-preview,.memory-gallery,.memory-scrim,#focusImmersiveBtn,.focus-panel,.focus-scrim,.focus-hud')){pointerStart=null;return}
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
    if(e.key==='Escape'&&liveCameraPanel.classList.contains('open')){closeLiveCamera();return}
    if(e.key==='Escape'){if(stormChaseActive)stopStormChase({keepScene:true});exitImmersive();}
    if(transitioning) return;
    if(e.key==='ArrowLeft'||e.key==='ArrowRight'){
      const i=order.indexOf(active);
      selectCity(e.key==='ArrowRight'?order[(i+1)%order.length]:order[(i-1+order.length)%order.length],{enter:true});
    }
  });

  document.addEventListener('click',e=>{
    if(body.classList.contains('immersive')&&!e.target.closest('#musicBtn,#soundPanel,.memory-preview,.memory-gallery,#captureMemoryBtn,#shareExperienceBtn,.share-experience-toast,.rain-event-toast,.storm-chaser-hud,#liveCameraBtn,.live-camera-panel,#focusImmersiveBtn,.focus-panel,.focus-hud')) soundPanel.classList.remove('open');
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
    const envBoost=immersive?(env==='rooftop'?1.22:env==='car'?1.04:1):.68;
    const profile=weatherAtmosphere;
    const count=Math.max(14,Math.min(drops.length,Math.round(drops.length*profile.density)));
    const speed=envBoost*profile.speed;
    const wind=(profile.windX+(immersive&&env==='rooftop'?profile.windX*.32:0))*envBoost;
    const lean=profile.lean+(immersive&&env==='rooftop'?profile.lean*.22:0);

    for(let i=0;i<count;i++){
      const d=drops[i];
      d.y+=d.v*speed;
      d.x+=wind+(profile.kind==='snow'?Math.sin((ts*.001)+(i*.9))*.45:0);
      if(d.y>rh+90||d.x>rw+120||d.x<-120){
        d.y=-80-Math.random()*120;
        d.x=Math.random()*rw;
      }
      const opacity=Math.min(.48,d.a*envBoost*profile.alpha);
      if(profile.kind==='snow'){
        const radius=Math.max(1.2,Math.min(3.8,d.w*1.75));
        ctx.beginPath();
        ctx.arc(d.x,d.y,radius,0,Math.PI*2);
        ctx.fillStyle='rgba(236,246,251,'+Math.min(.68,opacity*1.45)+')';
        ctx.fill();
      }else{
        ctx.beginPath();
        ctx.moveTo(d.x,d.y);
        ctx.lineTo(d.x+lean,d.y+d.l*(.88+profile.speed*.12));
        ctx.strokeStyle='rgba(205,232,246,'+opacity+')';
        ctx.lineWidth=d.w*(profile.kind==='storm'?1.12:1);
        ctx.stroke();
      }
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

  restoreSharedExperience().then(restored=>{if(!restored)selectCity('tokyo');}).catch(()=>selectCity('tokyo'));
})();