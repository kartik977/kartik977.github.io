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
  const order = Object.keys(cities);

  const $ = s => document.querySelector(s);
  const body = document.body;
  const img = $('#cityPhoto');
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

  function persistPassport(){
    try { localStorage.setItem('pluvia-v71-passport', JSON.stringify([...visited])); } catch (_) {}
  }

  function renderPassport(){
    const count = visited.size;
    passportButtonCount.textContent = count + ' / ' + order.length + ' skies';
    passportProgressText.textContent = count + ' / ' + order.length + ' skies experienced';
    passportProgressFill.style.width = ((count / order.length) * 100) + '%';
    passportComplete.classList.toggle('show', count === order.length);
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
      return weather;
    }catch(_){
      weather=null;
      selectedTemp.textContent='—°';
      selectedCondition.textContent='Live weather unavailable';
      selectedMeta.textContent='The rain experience is still available';
      return null;
    }
  }

  function selectCity(id,{enter=false}={}){
    if(!cities[id]) return;
    active=id;
    const c=cities[id];
    img.classList.add('is-switching');
    const preload=new Image();
    preload.onload=()=>{
      img.src=c.image;
      img.style.objectPosition=c.pos;
      setTimeout(()=>img.classList.remove('is-switching'),30);
    };
    preload.src=c.image;
    selectedCity.textContent=c.name;
    selectedTime.textContent=localTime(c.tz)+' local';
    body.dataset.phase=phaseFor(c.tz);
    chooseTrack();
    fetchWeather(id);
    if(enter){ earnStamp(id); enterImmersive(); }
    const next=order[(order.indexOf(id)+1)%order.length];
    const p=new Image(); p.src=cities[next].image;
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
    soundPanel.classList.remove('open');
    resizeRain();
  }
  function exitImmersive(){
    body.classList.remove('immersive');
    soundPanel.classList.remove('open');
    body.style.overflow = '';
    if (pendingStamp){
      const name = pendingStamp;
      pendingStamp = null;
      const allDone = visited.size === order.length;
      showPassportToast(allDone ? 'World of Rain complete · '+order.length+' / '+order.length+' skies' : name + ' stamped in your Rain Passport');
    }
  }

  const audio = new Audio();
  audio.preload='none';
  let trackIndex=-1;
  let currentTrack=null;

  function chooseTrack(){
    const list=cities[active].songs;
    let next=Math.floor(Math.random()*list.length);
    if(list.length>1&&next===trackIndex) next=(next+1)%list.length;
    trackIndex=next; currentTrack=list[next];
    const wasPlaying=!audio.paused && !!audio.src;
    audio.pause(); audio.src=currentTrack[2]; audio.currentTime=0;
    if(wasPlaying) audio.play().catch(()=>{});
    syncMusic();
  }
  function syncMusic(){
    musicBtn.classList.toggle('playing',!audio.paused);
    musicBtn.setAttribute('aria-label',audio.paused?'Play city music':'Pause city music');
  }
  audio.addEventListener('play',syncMusic);
  audio.addEventListener('pause',syncMusic);
  audio.addEventListener('ended',()=>{chooseTrack();audio.play().catch(()=>{})});

  let musicHold=null, heldMusic=false;
  musicBtn.addEventListener('pointerdown',e=>{
    e.stopPropagation(); heldMusic=false;
    musicHold=setTimeout(()=>{heldMusic=true;soundPanel.classList.add('open');initSound();},550);
  });
  ['pointerup','pointercancel','pointerleave'].forEach(ev=>musicBtn.addEventListener(ev,()=>clearTimeout(musicHold)));
  musicBtn.addEventListener('click',async e=>{
    e.stopPropagation();
    if(heldMusic){heldMusic=false;return}
    try{audio.paused?await audio.play():audio.pause()}catch(_){}
  });

  soundPanel.addEventListener('click',e=>e.stopPropagation());

  const mix = {
    rain:$('#mixRain'), thunder:$('#mixThunder'), city:$('#mixCity'), music:$('#mixMusic')
  };
  const outs = {
    rain:$('#outRain'), thunder:$('#outThunder'), city:$('#outCity'), music:$('#outMusic')
  };

  let ac=null, rainGain=null, cityGain=null, thunderGain=null, rainSource=null, cityOsc=null;
  function initSound(){
    if(ac) return;
    const AC=window.AudioContext||window.webkitAudioContext; if(!AC) return;
    ac=new AC();
    const master=ac.createGain(); master.gain.value=.18; master.connect(ac.destination);

    const buffer=ac.createBuffer(1,ac.sampleRate*2,ac.sampleRate);
    const arr=buffer.getChannelData(0); for(let i=0;i<arr.length;i++) arr[i]=Math.random()*2-1;
    rainSource=ac.createBufferSource(); rainSource.buffer=buffer; rainSource.loop=true;
    const filter=ac.createBiquadFilter(); filter.type='lowpass'; filter.frequency.value=1800;
    rainGain=ac.createGain(); rainGain.gain.value=.10;
    rainSource.connect(filter).connect(rainGain).connect(master); rainSource.start();

    cityOsc=ac.createOscillator(); cityOsc.type='sine'; cityOsc.frequency.value=92;
    cityGain=ac.createGain(); cityGain.gain.value=.02;
    cityOsc.connect(cityGain).connect(master); cityOsc.start();

    thunderGain=ac.createGain(); thunderGain.gain.value=0; thunderGain.connect(master);
    applyMix();
    scheduleThunder();
  }
  function applyMix(){
    audio.volume=Number(mix.music.value)/100;
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
    if(!body.classList.contains('immersive')) return;
    if(e.target.closest('#musicBtn,#soundPanel')) return;
    pointerStart={x:e.clientX,y:e.clientY,t:performance.now()};
    holdShown=false;
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
    if(Math.hypot(e.clientX-pointerStart.x,e.clientY-pointerStart.y)>18) clearTimeout(holdTimer);
  },true);
  body.addEventListener('pointerup',e=>{
    if(!body.classList.contains('immersive')||!pointerStart)return;
    clearTimeout(holdTimer);
    if(e.target.closest('#musicBtn,#soundPanel')){pointerStart=null;return}
    const dx=e.clientX-pointerStart.x,dy=e.clientY-pointerStart.y;
    const dist=Math.hypot(dx,dy);
    if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.3){
      const i=order.indexOf(active);
      const next=dx<0?order[(i+1)%order.length]:order[(i-1+order.length)%order.length];
      selectCity(next,{enter:true});
    }else if(dist<14&&!holdShown){
      exitImmersive();
    }
    pointerStart=null;
  },true);

  window.addEventListener('keydown',e=>{
    if (!body.classList.contains('immersive')) {
      if (e.key === 'Escape' && passportPanel.classList.contains('open')) closePassport();
      return;
    }
    if(e.key==='Escape') exitImmersive();
    if(e.key==='ArrowLeft'||e.key==='ArrowRight'){
      const i=order.indexOf(active);
      selectCity(e.key==='ArrowRight'?order[(i+1)%order.length]:order[(i-1+order.length)%order.length],{enter:true});
    }
  });

  document.addEventListener('click',e=>{
    if(body.classList.contains('immersive')&&!e.target.closest('#musicBtn,#soundPanel')) soundPanel.classList.remove('open');
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
    const boost=body.classList.contains('immersive')?1:0.65;
    for(const d of drops){
      d.y+=d.v*boost;d.x+=1.15*boost;
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