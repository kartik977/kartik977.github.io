(() => {
  const musicButton = document.querySelector('.immersive-music-btn');
  const selectedCity = document.querySelector('#selectedCity');
  if (!musicButton || !selectedCity) return;

  const cities = {
    tokyo:     {name:'Tokyo',      mood:'station glow',       cutoff:1280, tone:740, tone2:1110, eventMin:8,  eventMax:15},
    london:    {name:'London',     mood:'wet streets',        cutoff:720,  tone:196, tone2:294,  eventMin:11, eventMax:20},
    mumbai:    {name:'Mumbai',     mood:'monsoon streets',    cutoff:980,  tone:350, tone2:440,  eventMin:7,  eventMax:13},
    seattle:   {name:'Seattle',    mood:'distant road hush',  cutoff:560,  tone:146, tone2:220,  eventMin:13, eventMax:22},
    singapore: {name:'Singapore',  mood:'tropical city hum',  cutoff:1160, tone:620, tone2:930,  eventMin:9,  eventMax:16},
    saopaulo:  {name:'São Paulo',  mood:'night traffic pulse',cutoff:840,  tone:245, tone2:367,  eventMin:8,  eventMax:15}
  };
  const nameToId = Object.fromEntries(Object.entries(cities).map(([id,v]) => [v.name.toLowerCase(),id]));

  const defaults = {rain:62, thunder:24, city:22, music:72};
  let prefs = {...defaults};
  try {
    const saved = JSON.parse(localStorage.getItem('pluviaSoundscape52') || '{}');
    for (const key of Object.keys(defaults)) if (Number.isFinite(Number(saved[key]))) prefs[key] = Math.max(0,Math.min(100,Number(saved[key])));
  } catch (_) {}

  const style = document.createElement('style');
  style.id = 'pluvia-v52-style';
  style.textContent = `
    .soundscape-panel{
      position:fixed;
      z-index:170;
      top:calc(env(safe-area-inset-top,0px) + 92px);
      right:20px;
      width:min(340px,calc(100vw - 32px));
      color:#edf6fa;
      border:1px solid rgba(225,242,250,.15);
      border-radius:24px;
      background:linear-gradient(145deg,rgba(5,15,22,.88),rgba(4,11,17,.74));
      backdrop-filter:blur(26px) saturate(135%);
      -webkit-backdrop-filter:blur(26px) saturate(135%);
      box-shadow:0 34px 100px rgba(0,0,0,.52),inset 0 1px rgba(255,255,255,.065);
      overflow:hidden;
      opacity:0;
      visibility:hidden;
      transform:translateY(-9px) scale(.97);
      transform-origin:top right;
      pointer-events:none;
      transition:opacity .24s ease,transform .24s ease,visibility 0s linear .25s;
    }
    body.pluvia-city-immersive.soundscape-open .soundscape-panel{
      opacity:1;
      visibility:visible;
      transform:translateY(0) scale(1);
      pointer-events:auto;
      transition:opacity .24s ease,transform .24s ease;
    }
    .soundscape-head{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;padding:18px 18px 15px;border-bottom:1px solid rgba(255,255,255,.075)}
    .soundscape-kicker{font:700 8px/1 "Manrope",sans-serif;letter-spacing:.19em;color:#88a5b5;text-transform:uppercase;margin-bottom:8px}
    .soundscape-head strong{display:block;font:600 22px/1 "Playfair Display",serif}
    .soundscape-head span{display:block;margin-top:6px;font:500 10px/1.2 "Manrope",sans-serif;color:#8199a7;text-transform:capitalize}
    .soundscape-close{width:32px;height:32px;border-radius:50%;border:1px solid rgba(255,255,255,.11);background:rgba(255,255,255,.035);color:#dbe9ef;display:grid;place-items:center;cursor:pointer;font-size:18px;line-height:1}
    .soundscape-close:hover{background:rgba(255,255,255,.075)}
    .soundscape-rows{padding:8px 16px 10px}
    .soundscape-row{display:grid;grid-template-columns:78px 1fr 37px;align-items:center;gap:11px;padding:12px 2px;border-bottom:1px solid rgba(255,255,255,.055)}
    .soundscape-row:last-child{border-bottom:0}
    .soundscape-label b{display:block;font:600 11px/1.05 "Manrope",sans-serif;color:#e2edf2}
    .soundscape-label small{display:block;margin-top:4px;font:600 7px/1 "Manrope",sans-serif;letter-spacing:.12em;color:#688391;text-transform:uppercase}
    .soundscape-row input[type="range"]{width:100%;height:3px;accent-color:var(--accent);cursor:pointer}
    .soundscape-row output{font:600 9px/1 "Manrope",sans-serif;color:#8ea6b3;text-align:right;font-variant-numeric:tabular-nums}
    .soundscape-foot{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 17px 14px;border-top:1px solid rgba(255,255,255,.065);font:700 7px/1.3 "Manrope",sans-serif;letter-spacing:.13em;color:#67818f;text-transform:uppercase}
    .soundscape-live{display:inline-flex;align-items:center;gap:7px;color:#89a4b2}
    .soundscape-live:before{content:"";width:6px;height:6px;border-radius:50%;background:var(--accent);box-shadow:0 0 11px var(--accent)}
    .soundscape-hold-ring{position:fixed;z-index:169;top:calc(env(safe-area-inset-top,0px) + 17px);right:15px;width:68px;height:68px;border-radius:50%;pointer-events:none;opacity:0;border:1px solid color-mix(in srgb,var(--accent) 38%,transparent);transform:scale(.78);transition:opacity .16s ease,transform .16s ease}
    body.soundscape-holding .soundscape-hold-ring{opacity:.7;transform:scale(1);animation:soundscapeHold .58s linear forwards}
    body.soundscape-open .immersive-music-btn{box-shadow:0 18px 46px rgba(0,0,0,.34),0 0 34px color-mix(in srgb,var(--accent) 22%,transparent),inset 0 1px rgba(255,255,255,.08)!important}
    @keyframes soundscapeHold{0%{clip-path:polygon(50% 50%,50% 0,50% 0)}100%{clip-path:polygon(50% 50%,50% 0,100% 0,100% 100%,0 100%,0 0,50% 0)}}
    @media(max-width:700px){
      .soundscape-panel{top:calc(env(safe-area-inset-top,0px) + 82px);right:16px;width:calc(100vw - 32px);border-radius:22px}
      .soundscape-row{grid-template-columns:72px 1fr 35px}
      .soundscape-hold-ring{top:13px;right:11px;width:64px;height:64px}
    }
    @media(prefers-reduced-motion:reduce){.soundscape-panel,.soundscape-hold-ring{transition:none!important;animation:none!important}}
  `;
  document.head.appendChild(style);

  const panel = document.createElement('section');
  panel.className = 'soundscape-panel';
  panel.setAttribute('role','dialog');
  panel.setAttribute('aria-label','Pluvia soundscape mixer');
  panel.innerHTML = `
    <div class="soundscape-head">
      <div><div class="soundscape-kicker">PLUVIA / SOUNDSCAPE</div><strong id="soundscapeCity">Tokyo</strong><span id="soundscapeMood">station glow</span></div>
      <button class="soundscape-close" type="button" aria-label="Close soundscape mixer">×</button>
    </div>
    <div class="soundscape-rows">
      <label class="soundscape-row"><span class="soundscape-label"><b>Rain</b><small>glass + roof</small></span><input data-sound="rain" type="range" min="0" max="100" value="${prefs.rain}"><output>${prefs.rain}%</output></label>
      <label class="soundscape-row"><span class="soundscape-label"><b>Thunder</b><small>distant rumble</small></span><input data-sound="thunder" type="range" min="0" max="100" value="${prefs.thunder}"><output>${prefs.thunder}%</output></label>
      <label class="soundscape-row"><span class="soundscape-label"><b>City</b><small>outside ambience</small></span><input data-sound="city" type="range" min="0" max="100" value="${prefs.city}"><output>${prefs.city}%</output></label>
      <label class="soundscape-row"><span class="soundscape-label"><b>Music</b><small>local rain song</small></span><input data-sound="music" type="range" min="0" max="100" value="${prefs.music}"><output>${prefs.music}%</output></label>
    </div>
    <div class="soundscape-foot"><span class="soundscape-live">Generated live</span><span>Hold ♪ to close</span></div>`;
  document.body.appendChild(panel);

  const holdRing = document.createElement('div');
  holdRing.className = 'soundscape-hold-ring';
  holdRing.setAttribute('aria-hidden','true');
  document.body.appendChild(holdRing);

  const cityEl = panel.querySelector('#soundscapeCity');
  const moodEl = panel.querySelector('#soundscapeMood');
  const closeBtn = panel.querySelector('.soundscape-close');
  const inputs = Object.fromEntries([...panel.querySelectorAll('input[data-sound]')].map(input => [input.dataset.sound,input]));

  let ctx = null;
  let masterGain = null;
  let rainGain = null;
  let cityGain = null;
  let cityFilter = null;
  let rainSource = null;
  let citySource = null;
  let enabled = false;
  let cityTimer = null;
  let thunderTimer = null;
  let holdTimer = null;
  let holding = false;
  let suppressMusicClick = false;
  let activeId = 'tokyo';

  function isImmersive(){ return document.body.classList.contains('pluvia-city-immersive'); }
  function selectedId(){
    const name = (selectedCity.textContent || 'Tokyo').trim().toLowerCase();
    return nameToId[name] || window.PluviaCityExperience?.getActiveCity?.() || 'tokyo';
  }
  function savePrefs(){
    try { localStorage.setItem('pluviaSoundscape52',JSON.stringify(prefs)); } catch (_) {}
  }

  function makeNoiseBuffer(seconds=5){
    const buffer = ctx.createBuffer(2,Math.floor(ctx.sampleRate*seconds),ctx.sampleRate);
    for(let ch=0;ch<2;ch++){
      const data = buffer.getChannelData(ch);
      let last = 0;
      for(let i=0;i<data.length;i++){
        const white = Math.random()*2-1;
        last = last*.84 + white*.16;
        data[i] = white*.48 + last*.52;
      }
    }
    return buffer;
  }

  function ensureAudioFromGesture(){
    if (!ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return false;
      ctx = new AudioContext();
      masterGain = ctx.createGain();
      masterGain.gain.value = 0;
      masterGain.connect(ctx.destination);

      const rainHigh = ctx.createBiquadFilter();
      rainHigh.type='highpass'; rainHigh.frequency.value=620;
      const rainLow = ctx.createBiquadFilter();
      rainLow.type='lowpass'; rainLow.frequency.value=7200;
      rainGain = ctx.createGain(); rainGain.gain.value=0;
      rainSource = ctx.createBufferSource(); rainSource.buffer=makeNoiseBuffer(6); rainSource.loop=true;
      rainSource.connect(rainHigh).connect(rainLow).connect(rainGain).connect(masterGain);
      rainSource.start();

      cityFilter = ctx.createBiquadFilter();
      cityFilter.type='lowpass'; cityFilter.frequency.value=cities.tokyo.cutoff;
      cityGain = ctx.createGain(); cityGain.gain.value=0;
      citySource = ctx.createBufferSource(); citySource.buffer=makeNoiseBuffer(7); citySource.loop=true;
      citySource.connect(cityFilter).connect(cityGain).connect(masterGain);
      citySource.start();

      scheduleCityEvent();
      scheduleThunder();
    }
    if (ctx.state === 'suspended') ctx.resume().catch(()=>{});
    return true;
  }

  function targetGain(node,value,time=.12){
    if (!ctx || !node) return;
    node.gain.cancelScheduledValues(ctx.currentTime);
    node.gain.setTargetAtTime(value,ctx.currentTime,time);
  }

  function applyLevels(){
    if (window.PluviaImmersiveMusic) window.PluviaImmersiveMusic.setVolume(prefs.music/100);
    if (!ctx) return;
    const active = enabled && isImmersive();
    targetGain(masterGain,active ? .92 : 0,.16);
    targetGain(rainGain,(prefs.rain/100)*.055,.16);
    targetGain(cityGain,(prefs.city/100)*.022,.18);
  }

  function cityEvent(){
    if (!ctx || !enabled || !isImmersive() || prefs.city < 3) return;
    const profile = cities[activeId] || cities.tokyo;
    const now = ctx.currentTime;
    const g = ctx.createGain();
    const osc = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    osc.type = activeId === 'mumbai' ? 'triangle' : 'sine';
    osc2.type = 'sine';
    osc.frequency.value = profile.tone * (.96 + Math.random()*.08);
    osc2.frequency.value = profile.tone2 * (.97 + Math.random()*.06);
    const peak = (prefs.city/100) * (activeId === 'mumbai' ? .012 : .0065);
    g.gain.setValueAtTime(.0001,now);
    g.gain.exponentialRampToValueAtTime(Math.max(.0002,peak),now+.055);
    g.gain.exponentialRampToValueAtTime(.0001,now+.42+Math.random()*.32);
    osc.connect(g); osc2.connect(g); g.connect(masterGain);
    osc.start(now); osc2.start(now+.025);
    osc.stop(now+.9); osc2.stop(now+.9);
  }

  function scheduleCityEvent(){
    clearTimeout(cityTimer);
    const profile = cities[activeId] || cities.tokyo;
    const wait = (profile.eventMin + Math.random()*(profile.eventMax-profile.eventMin))*1000;
    cityTimer = setTimeout(()=>{ cityEvent(); scheduleCityEvent(); },wait);
  }

  function thunderRumble(preview=false){
    if (!ctx || !enabled || !isImmersive() || prefs.thunder < 2) return;
    const now = ctx.currentTime;
    const duration = preview ? 1.7 : 2.8 + Math.random()*1.4;
    const source = ctx.createBufferSource();
    const buffer = ctx.createBuffer(1,Math.floor(ctx.sampleRate*duration),ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for(let i=0;i<data.length;i++){
      const t=i/data.length;
      data[i]=(Math.random()*2-1)*Math.pow(1-t,2.2);
    }
    source.buffer=buffer;
    const low = ctx.createBiquadFilter(); low.type='lowpass'; low.frequency.value=115+Math.random()*55; low.Q.value=.7;
    const g = ctx.createGain();
    const peak=(prefs.thunder/100)*(preview?.11:.15);
    g.gain.setValueAtTime(.0001,now);
    g.gain.exponentialRampToValueAtTime(Math.max(.0002,peak),now+.08);
    g.gain.exponentialRampToValueAtTime(.0001,now+duration);
    source.connect(low).connect(g).connect(masterGain);
    source.start(now);

    const sub = ctx.createOscillator(); const subGain = ctx.createGain();
    sub.type='sine'; sub.frequency.setValueAtTime(46+Math.random()*10,now);
    sub.frequency.exponentialRampToValueAtTime(31,now+duration);
    subGain.gain.setValueAtTime(.0001,now);
    subGain.gain.exponentialRampToValueAtTime(Math.max(.0002,peak*.22),now+.12);
    subGain.gain.exponentialRampToValueAtTime(.0001,now+duration);
    sub.connect(subGain).connect(masterGain); sub.start(now); sub.stop(now+duration);

    document.body.classList.remove('living-lightning');
    void document.body.offsetWidth;
    document.body.classList.add('living-lightning');
    setTimeout(()=>document.body.classList.remove('living-lightning'),520);
  }

  function scheduleThunder(){
    clearTimeout(thunderTimer);
    thunderTimer = setTimeout(()=>{
      const condition=(document.querySelector('#selectedCondition')?.textContent||'').toLowerCase();
      const stormBoost=condition.includes('thunder')?.42:0;
      const chance=(prefs.thunder/100)*.32+stormBoost;
      if (enabled && isImmersive() && Math.random()<chance) thunderRumble(false);
      scheduleThunder();
    },9000+Math.random()*12000);
  }

  function updateCity(){
    activeId=selectedId();
    const profile=cities[activeId]||cities.tokyo;
    cityEl.textContent=profile.name;
    moodEl.textContent=profile.mood;
    if(ctx && cityFilter) cityFilter.frequency.setTargetAtTime(profile.cutoff,ctx.currentTime,.25);
    scheduleCityEvent();
  }

  function openPanel(){
    enabled=true;
    document.body.classList.add('soundscape-open');
    updateCity();
    applyLevels();
  }
  function closePanel(){ document.body.classList.remove('soundscape-open'); }
  function togglePanel(){ document.body.classList.contains('soundscape-open') ? closePanel() : openPanel(); }

  for (const [key,input] of Object.entries(inputs)) {
    const output=input.parentElement.querySelector('output');
    input.addEventListener('input',()=>{
      prefs[key]=Number(input.value);
      output.textContent=`${input.value}%`;
      savePrefs();
      applyLevels();
    });
    if(key==='thunder') input.addEventListener('change',()=>{ if(Number(input.value)>35) thunderRumble(true); });
  }

  closeBtn.addEventListener('click',event=>{
    event.preventDefault(); event.stopPropagation(); closePanel();
  });

  // Long-press the existing music button to open/close the mixer. AudioContext is resumed
  // immediately on pointerdown so iOS/Safari keeps the action inside a real user gesture.
  musicButton.addEventListener('pointerdown',()=>{
    if(!isImmersive()) return;
    ensureAudioFromGesture();
    holding=true;
    document.body.classList.add('soundscape-holding');
    clearTimeout(holdTimer);
    holdTimer=setTimeout(()=>{
      if(!holding) return;
      suppressMusicClick=true;
      document.body.classList.remove('soundscape-holding');
      togglePanel();
    },580);
  });
  musicButton.addEventListener('pointerup',()=>{
    holding=false; clearTimeout(holdTimer); document.body.classList.remove('soundscape-holding');
  });
  musicButton.addEventListener('pointercancel',()=>{
    holding=false; clearTimeout(holdTimer); document.body.classList.remove('soundscape-holding');
  });

  // Window capture runs before the older immersive click handlers. It protects mixer controls,
  // swallows the click generated by a successful long-press, and makes outside-tap close the mixer
  // instead of exiting the city scene.
  window.addEventListener('click',event=>{
    if(!isImmersive()) return;
    if(suppressMusicClick && event.target.closest?.('.immersive-music-btn')){
      event.preventDefault(); event.stopPropagation(); event.stopImmediatePropagation();
      suppressMusicClick=false; return;
    }
    if(event.target.closest?.('.soundscape-panel')){
      event.stopPropagation(); return;
    }
    if(document.body.classList.contains('soundscape-open') && !event.target.closest?.('.immersive-music-btn')){
      event.preventDefault(); event.stopPropagation(); event.stopImmediatePropagation(); closePanel();
    }
  },true);

  window.addEventListener('pointerdown',event=>{
    if(event.target.closest?.('.soundscape-panel')) event.stopPropagation();
  },true);
  window.addEventListener('pointerup',event=>{
    if(event.target.closest?.('.soundscape-panel')) event.stopPropagation();
  },true);

  window.addEventListener('keydown',event=>{
    if(event.key==='Escape' && document.body.classList.contains('soundscape-open')){
      event.preventDefault(); event.stopPropagation(); closePanel();
    }
  },true);

  new MutationObserver(updateCity).observe(selectedCity,{childList:true,subtree:true,characterData:true});
  new MutationObserver(()=>{
    if(!isImmersive()) closePanel();
    applyLevels();
  }).observe(document.body,{attributes:true,attributeFilter:['class']});

  if(window.PluviaImmersiveMusic) window.PluviaImmersiveMusic.setVolume(prefs.music/100);
  updateCity();

  const version=document.querySelector('.closing .kicker');
  if(version) version.textContent='PLUVIA / 05.2';
})();