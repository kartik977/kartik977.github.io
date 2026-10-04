(() => {
  const catalog = {
    tokyo: {
      language: 'Japanese',
      tracks: [
        { title:'Rain', artist:'Hata Motohiro', preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/85/ce/64/85ce6424-0f8d-b1eb-3524-c21e352f9c7d/mzaf_17028835718644657456.plus.aac.ep.m4a' },
        { title:'Rainy Blue', artist:'Hideaki Tokunaga', preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/2b/44/06/2b4406e6-d541-1bfe-e3ea-bfe3a80eaa48/mzaf_8939945164144576854.plus.aac.ep.m4a' },
        { title:'Endless Rain', artist:'X JAPAN', preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c5/10/32/c51032bc-b0b7-37a0-bd1f-dae0a0223b40/mzaf_4274219543313634925.plus.aac.ep.m4a' }
      ]
    },
    mumbai: {
      language: 'Hindi',
      tracks: [
        { title:'Barso Re', artist:'A.R. Rahman, Shreya Ghoshal & Uday Majumdar', preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/64/c9/32/64c932f0-4109-6760-2002-130797769cff/mzaf_1950037304989864945.plus.aac.ep.m4a' },
        { title:'Rimjhim Gire Sawan', artist:'Kishore Kumar', preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e0/d3/73/e0d373ff-7eae-63f0-3fa1-7e079e5fec16/mzaf_3865286795455428981.plus.aac.ep.m4a' },
        { title:'Tip Tip Barsa Paani', artist:'Alka Yagnik & Udit Narayan', preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/7d/e0/52/7de052c6-aafd-357a-e2ff-6cc2b3b3dc6c/mzaf_14632981977655830883.plus.aac.ep.m4a' }
      ]
    },
    london: {
      language: 'English',
      tracks: [
        { title:'Set Fire to the Rain', artist:'Adele', preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/96/8b/3f/968b3f92-f082-c8c2-47ba-ab7add22dfdc/mzaf_13981153720371020318.plus.aac.ep.m4a' },
        { title:'Here Comes the Rain Again', artist:'Eurythmics', preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/72/fe/ce/72fece70-89a0-1b3a-fa4a-ad058dde3917/mzaf_3433349509748663983.plus.aac.ep.m4a' },
        { title:'Rain', artist:'The Beatles', preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/86/3c/dc/863cdcac-0d28-94a0-15d0-a01f167432fd/mzaf_9258319708601389636.plus.aac.ep.m4a' }
      ]
    },
    seattle: {
      language: 'English',
      tracks: [
        { title:'Have You Ever Seen the Rain?', artist:'Creedence Clearwater Revival', preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a7/55/f7/a755f7d7-d934-126d-a883-05e79eaa9444/mzaf_13855660925334657413.plus.aac.ep.m4a' },
        { title:'Rainy Days And Mondays', artist:'Carpenters', preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/fd/48/d9/fd48d97c-7f8e-1bc8-8224-614e7d44adce/mzaf_8327188197888161132.plus.aac.ep.m4a' },
        { title:'November Rain', artist:"Guns N' Roses", preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/67/6b/0c/676b0cc6-2f6e-555a-b4f1-a514ab21adb4/mzaf_1533663258923831215.plus.aac.ep.m4a' }
      ]
    },
    singapore: {
      language: 'Mandarin',
      tracks: [
        { title:'下雨天', artist:'Nan Quan Mama', preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/e2/f3/a3/e2f3a33f-fdaf-c21b-1314-ede2a3d5e2a8/mzaf_10057316662723848184.plus.aac.ep.m4a' },
        { title:'雨一直下', artist:'Phil Chang', preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/8e/4c/0a/8e4c0a4e-2f08-a7ce-a3fb-46684430afd6/mzaf_17092125316344372605.plus.aac.ep.m4a' },
        { title:'雨愛', artist:'Rainie Yang', preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f4/a8/2a/f4a82a28-5ffd-104c-cbca-078f4bafb731/mzaf_1730419277821962479.plus.aac.ep.m4a' }
      ]
    },
    saopaulo: {
      language: 'Portuguese',
      tracks: [
        { title:'Chove Chuva', artist:'Jorge Ben Jor', preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/5c/33/d4/5c33d404-1858-7b31-86b3-ae5309666870/mzaf_15401932118259935778.plus.aac.ep.m4a' },
        { title:'Águas de Março', artist:'Elis Regina & Antônio Carlos Jobim', preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/46/c9/83/46c98301-28e6-bc75-e495-55638bccca96/mzaf_9192636079966759712.plus.aac.ep.m4a' },
        { title:'Quando a Chuva Passar', artist:'Ivete Sangalo', preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/0f/65/9c/0f659ca3-41b6-0b6b-248a-f26440d5b7c6/mzaf_15501571249927745280.plus.aac.ep.m4a' }
      ]
    }
  };

  const style = document.createElement('style');
  style.textContent = `
    .pluvia-radio{position:fixed;z-index:16;right:24px;bottom:24px;width:min(360px,calc(100vw - 30px));border:1px solid rgba(255,255,255,.14);border-radius:22px;background:linear-gradient(145deg,rgba(6,16,25,.84),rgba(8,22,32,.68));backdrop-filter:blur(22px) saturate(125%);box-shadow:0 24px 60px rgba(0,0,0,.38);overflow:hidden;transition:transform .35s ease,opacity .35s ease,border-color .35s ease}.pluvia-radio:hover{border-color:color-mix(in srgb,var(--accent) 45%,transparent)}
    .pluvia-radio-head{display:flex;align-items:center;justify-content:space-between;padding:12px 14px;border-bottom:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.025)}
    .pluvia-radio-brand{display:flex;align-items:center;gap:8px;font:700 9px/1 "Manrope",sans-serif;letter-spacing:.17em;color:#dce8ef}.pluvia-radio-brand i{width:7px;height:7px;border-radius:50%;background:var(--accent);box-shadow:0 0 16px var(--accent);animation:radioPulse 1.8s infinite}
    .pluvia-radio-lang{font:600 8px/1 "Manrope",sans-serif;letter-spacing:.13em;color:#8097a6;text-transform:uppercase}
    .pluvia-radio-body{display:grid;grid-template-columns:52px 1fr auto;gap:12px;align-items:center;padding:14px}.pluvia-radio-disc{width:52px;height:52px;border-radius:50%;border:1px solid rgba(255,255,255,.13);background:radial-gradient(circle at 50% 50%,#0c1720 0 9%,rgba(255,255,255,.16) 10% 12%,#0c1720 13% 25%,rgba(255,255,255,.035) 26% 29%,#0d1a24 30% 100%);box-shadow:inset 0 0 20px rgba(0,0,0,.55),0 0 25px color-mix(in srgb,var(--accent) 8%,transparent)}.pluvia-radio.playing .pluvia-radio-disc{animation:spinDisc 4.4s linear infinite}
    .pluvia-radio-copy{min-width:0}.pluvia-radio-copy strong{display:block;font:600 13px/1.2 "Manrope",sans-serif;color:#f4f8fb;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pluvia-radio-copy span{display:block;margin-top:5px;font-size:10px;color:#8fa5b3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pluvia-radio-copy small{display:block;margin-top:6px;font:600 7px/1 "Manrope",sans-serif;letter-spacing:.12em;color:#6f8796;text-transform:uppercase}
    .pluvia-radio-controls{display:flex;gap:7px}.pluvia-radio-btn{width:36px;height:36px;border-radius:50%;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.045);display:grid;place-items:center;cursor:pointer;color:#e8f1f6;transition:.25s}.pluvia-radio-btn:hover{background:rgba(255,255,255,.1);transform:translateY(-1px)}.pluvia-radio-btn.primary{background:#edf4f7;color:#07131d;border-color:transparent}.pluvia-radio-btn svg{width:15px;height:15px;fill:currentColor}
    .pluvia-radio-progress{height:2px;background:rgba(255,255,255,.07)}.pluvia-radio-progress span{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--accent),var(--accent2));transition:width .15s linear}.pluvia-radio-note{padding:8px 14px 11px;font-size:8px;color:#607987;letter-spacing:.06em}.pluvia-radio-note b{color:#91a9b7;font-weight:500}
    @keyframes spinDisc{to{transform:rotate(360deg)}}@keyframes radioPulse{70%{box-shadow:0 0 0 9px transparent}}
    @media(max-width:700px){.pluvia-radio{left:15px;right:15px;bottom:15px;width:auto}.pluvia-radio-note{display:none}.pluvia-radio-body{padding:12px}.pluvia-radio-disc{width:44px;height:44px}}
    @media(prefers-reduced-motion:reduce){.pluvia-radio.playing .pluvia-radio-disc{animation:none!important}}
  `;
  document.head.appendChild(style);

  const panel = document.createElement('aside');
  panel.className = 'pluvia-radio';
  panel.setAttribute('aria-label','Pluvia Radio');
  panel.innerHTML = `
    <div class="pluvia-radio-head">
      <div class="pluvia-radio-brand"><i></i><span>PLUVIA RADIO</span></div>
      <span class="pluvia-radio-lang" id="radioLanguage">JAPANESE RAIN</span>
    </div>
    <div class="pluvia-radio-body">
      <div class="pluvia-radio-disc" aria-hidden="true"></div>
      <div class="pluvia-radio-copy">
        <strong id="radioTitle">Rain</strong>
        <span id="radioArtist">Hata Motohiro</span>
        <small id="radioCity">TOKYO · RANDOM RAIN SONG</small>
      </div>
      <div class="pluvia-radio-controls">
        <button class="pluvia-radio-btn" id="radioNext" type="button" aria-label="Next random song"><svg viewBox="0 0 24 24"><path d="M5 5v14l10-7L5 5zm11 0h3v14h-3V5z"/></svg></button>
        <button class="pluvia-radio-btn primary" id="radioToggle" type="button" aria-label="Play Pluvia Radio"><svg id="radioPlayIcon" viewBox="0 0 24 24"><path d="M8 5v14l11-7L8 5z"/></svg></button>
      </div>
    </div>
    <div class="pluvia-radio-progress"><span id="radioProgress"></span></div>
    <div class="pluvia-radio-note">30-second music previews · <b>city changes pick a new local-language rain song</b></div>
  `;
  document.body.appendChild(panel);

  const audio = new Audio();
  audio.preload = 'none';
  audio.crossOrigin = 'anonymous';

  const titleEl = panel.querySelector('#radioTitle');
  const artistEl = panel.querySelector('#radioArtist');
  const cityEl = panel.querySelector('#radioCity');
  const langEl = panel.querySelector('#radioLanguage');
  const toggle = panel.querySelector('#radioToggle');
  const next = panel.querySelector('#radioNext');
  const progress = panel.querySelector('#radioProgress');
  const playIcon = panel.querySelector('#radioPlayIcon');
  const selectedCity = document.querySelector('#selectedCity');

  let currentCity = 'tokyo';
  let currentTrack = -1;
  let enabled = false;

  const cityNameToId = {
    'tokyo':'tokyo','london':'london','mumbai':'mumbai','seattle':'seattle','singapore':'singapore','são paulo':'saopaulo','sao paulo':'saopaulo'
  };

  function icon(isPlaying){
    playIcon.innerHTML = isPlaying ? '<path d="M6 5h5v14H6V5zm7 0h5v14h-5V5z"/>' : '<path d="M8 5v14l11-7L8 5z"/>';
    toggle.setAttribute('aria-label', isPlaying ? 'Pause Pluvia Radio' : 'Play Pluvia Radio');
  }

  function randomIndex(len){
    if(len <= 1) return 0;
    let n = currentTrack;
    while(n === currentTrack) n = Math.floor(Math.random()*len);
    return n;
  }

  function loadRandom(cityId, autoPlay = false){
    const pack = catalog[cityId];
    if(!pack) return;
    currentCity = cityId;
    currentTrack = randomIndex(pack.tracks.length);
    const track = pack.tracks[currentTrack];
    audio.pause();
    audio.src = track.preview;
    audio.currentTime = 0;
    titleEl.textContent = track.title;
    artistEl.textContent = track.artist;
    langEl.textContent = `${pack.language.toUpperCase()} RAIN`;
    cityEl.textContent = `${cityId === 'saopaulo' ? 'SÃO PAULO' : cityId.toUpperCase()} · RANDOM RAIN SONG`;
    progress.style.width = '0%';
    panel.classList.remove('playing');
    icon(false);
    if(autoPlay && enabled){
      audio.play().then(()=>{ panel.classList.add('playing'); icon(true); }).catch(()=>{ enabled = false; });
    }
  }

  toggle.addEventListener('click', async () => {
    if(audio.paused){
      enabled = true;
      try{
        await audio.play();
        panel.classList.add('playing');
        icon(true);
      }catch{
        enabled = false;
      }
    }else{
      enabled = false;
      audio.pause();
      panel.classList.remove('playing');
      icon(false);
    }
  });

  next.addEventListener('click', () => loadRandom(currentCity, true));

  audio.addEventListener('timeupdate', () => {
    if(Number.isFinite(audio.duration) && audio.duration > 0){
      progress.style.width = `${Math.min(100,(audio.currentTime/audio.duration)*100)}%`;
    }
  });
  audio.addEventListener('ended', () => loadRandom(currentCity, true));
  audio.addEventListener('play', () => { panel.classList.add('playing'); icon(true); });
  audio.addEventListener('pause', () => { panel.classList.remove('playing'); if(audio.currentTime < audio.duration) icon(false); });

  function syncFromSelected(){
    const name = selectedCity?.textContent?.trim().toLowerCase();
    const id = cityNameToId[name];
    if(id && id !== currentCity) loadRandom(id, true);
  }

  selectedCity && new MutationObserver(syncFromSelected).observe(selectedCity,{childList:true,subtree:true,characterData:true});

  document.addEventListener('click', e => {
    const cityTarget = e.target.closest('[data-city]');
    if(cityTarget && catalog[cityTarget.dataset.city]){
      const id = cityTarget.dataset.city;
      if(id === currentCity) loadRandom(id, enabled);
    }
  }, true);

  loadRandom('tokyo', false);
})();