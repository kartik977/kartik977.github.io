(() => {
  const cityMeta = {
    tokyo: {name:'Tokyo', tz:'Asia/Tokyo'},
    london: {name:'London', tz:'Europe/London'},
    mumbai: {name:'Mumbai', tz:'Asia/Kolkata'},
    seattle: {name:'Seattle', tz:'America/Los_Angeles'},
    singapore: {name:'Singapore', tz:'Asia/Singapore'},
    saopaulo: {name:'São Paulo', tz:'America/Sao_Paulo'}
  };

  const css = `
    /* PLUVIA 5.0 — Living Window */
    .pluvia-window{
      --parallax-x:0px;
      --parallax-y:0px;
      --glass-light:1;
    }
    .window-picture{
      transform:scale(1.075) translate3d(var(--parallax-x),var(--parallax-y),0)!important;
      transition:opacity .82s ease,object-position 1.15s ease,filter 1.2s ease!important;
      will-change:transform,filter,opacity;
    }
    .pluvia-window.switching .window-picture.next{
      transform:scale(1.105) translate3d(var(--parallax-x),var(--parallax-y),0)!important;
    }

    body[data-day-phase="dawn"] .window-picture{
      filter:brightness(.58) saturate(.9) contrast(1.04) sepia(.08) hue-rotate(-8deg)!important;
    }
    body[data-day-phase="day"] .window-picture{
      filter:brightness(.72) saturate(.86) contrast(1.02)!important;
    }
    body[data-day-phase="dusk"] .window-picture{
      filter:brightness(.54) saturate(1.02) contrast(1.08) sepia(.08) hue-rotate(-5deg)!important;
    }
    body[data-day-phase="night"] .window-picture{
      filter:brightness(.43) saturate(1.03) contrast(1.12) hue-rotate(2deg)!important;
    }
    body.pluvia-city-immersive[data-day-phase="dawn"] .window-picture{filter:brightness(.65) saturate(.95) contrast(1.05) sepia(.06)!important}
    body.pluvia-city-immersive[data-day-phase="day"] .window-picture{filter:brightness(.76) saturate(.9) contrast(1.03)!important}
    body.pluvia-city-immersive[data-day-phase="dusk"] .window-picture{filter:brightness(.62) saturate(1.06) contrast(1.09) sepia(.08)!important}
    body.pluvia-city-immersive[data-day-phase="night"] .window-picture{filter:brightness(.52) saturate(1.08) contrast(1.13)!important}

    .window-reflection{
      transform:translate3d(calc(var(--parallax-x) * -.35),calc(var(--parallax-y) * -.2),0);
      transition:transform .38s ease-out,opacity .25s ease;
      will-change:transform;
    }

    .window-drop{
      animation:livingDrop var(--fall-duration,11s) linear var(--fall-delay,0s) infinite;
      will-change:transform,opacity;
    }
    .window-drop:nth-child(3n){animation-timing-function:cubic-bezier(.42,0,.58,1)}
    .window-drop:nth-child(5n){opacity:.46}
    .living-streak{
      position:absolute;
      top:var(--sy);
      left:var(--sx);
      width:1px;
      height:var(--sl);
      opacity:.18;
      border-radius:999px;
      background:linear-gradient(to bottom,rgba(230,245,252,.04),rgba(218,239,249,.32),rgba(218,239,249,0));
      box-shadow:0 0 6px rgba(185,223,241,.08);
      transform:rotate(var(--sr));
      animation:livingStreak var(--sd) linear var(--sdelay) infinite;
      will-change:transform,opacity;
    }

    .living-glass-bloom{
      position:absolute;
      inset:0;
      pointer-events:none;
      opacity:.2;
      background:
        radial-gradient(ellipse at 18% 18%,rgba(225,241,249,.12),transparent 30%),
        radial-gradient(ellipse at 82% 30%,rgba(195,224,240,.07),transparent 28%),
        linear-gradient(115deg,transparent 8%,rgba(226,243,250,.055) 17%,transparent 28% 68%,rgba(219,238,247,.045) 75%,transparent 83%);
      mix-blend-mode:screen;
      filter:blur(.6px);
      transition:opacity .4s ease;
    }

    .living-light-flash{
      position:fixed;
      inset:0;
      z-index:7;
      pointer-events:none;
      opacity:0;
      background:radial-gradient(circle at 55% 18%,rgba(228,246,255,.84),rgba(150,211,244,.2) 26%,transparent 62%);
      mix-blend-mode:screen;
    }
    body.living-lightning .living-light-flash{animation:livingLightning .48s ease-out}
    body.living-lightning .window-picture{filter:brightness(.82) saturate(.86) contrast(1.02)!important}
    body.living-lightning .window-reflection{opacity:.56!important}

    .city-transition-v5{
      position:fixed;
      inset:0;
      z-index:220;
      pointer-events:none;
      display:grid;
      place-items:center;
      overflow:hidden;
      opacity:0;
      visibility:hidden;
      background:#02070b;
      transition:opacity .24s ease,visibility 0s linear .28s;
    }
    .city-transition-v5:before,
    .city-transition-v5:after{
      content:"";
      position:absolute;
      inset:-15%;
      background:
        linear-gradient(108deg,transparent 0 28%,rgba(180,220,241,.12) 31%,transparent 34% 57%,rgba(188,227,246,.09) 60%,transparent 63%),
        repeating-linear-gradient(108deg,transparent 0 12px,rgba(180,221,242,.035) 13px 14px,transparent 15px 27px);
      transform:translate3d(-14%,0,0);
      filter:blur(.3px);
    }
    .city-transition-v5:after{opacity:.44;transform:translate3d(8%,0,0) scale(1.08)}
    .city-transition-v5-inner{
      position:relative;
      z-index:2;
      text-align:center;
      color:#eef7fb;
      text-shadow:0 8px 40px #000;
      transform:translateY(12px) scale(.98);
      opacity:0;
    }
    .city-transition-v5 small{display:block;font:700 8px/1 "Manrope",sans-serif;letter-spacing:.24em;color:#8eacbc;margin-bottom:12px}
    .city-transition-v5 strong{display:block;font:600 clamp(28px,6vw,58px)/1 "Playfair Display",serif;letter-spacing:-.03em}
    .city-transition-v5 span{display:block;margin-top:10px;font:600 9px/1 "Manrope",sans-serif;letter-spacing:.18em;color:#9bb5c4}
    body.pluvia-transitioning .city-transition-v5{opacity:1;visibility:visible;transition:opacity .2s ease}
    body.pluvia-transitioning .city-transition-v5:before{animation:stormTransitA 1.05s ease-out both}
    body.pluvia-transitioning .city-transition-v5:after{animation:stormTransitB 1.05s ease-out both}
    body.pluvia-transitioning .city-transition-v5-inner{animation:transitCopy .8s .08s ease both}
    body.pluvia-transitioning .immersive-music-btn{opacity:0!important;pointer-events:none!important}

    .local-time-chip{
      display:inline-flex;
      align-items:center;
      gap:7px;
      margin-top:3px;
      font:600 8px/1 "Manrope",sans-serif;
      letter-spacing:.12em;
      color:#8ca4b2;
      text-transform:uppercase;
    }
    .local-time-chip:before{content:"";width:5px;height:5px;border-radius:50%;background:var(--accent);box-shadow:0 0 10px var(--accent)}
    body.pluvia-city-immersive .local-time-chip{display:none!important}

    @keyframes livingDrop{
      0%{transform:translate3d(0,-12px,0) rotate(var(--r));opacity:.08}
      12%{opacity:.74}
      48%{transform:translate3d(var(--drop-drift,4px),24px,0) rotate(var(--r));opacity:.72}
      66%{transform:translate3d(calc(var(--drop-drift,4px)*1.5),70px,0) rotate(var(--r));opacity:.54}
      100%{transform:translate3d(calc(var(--drop-drift,4px)*2.3),160px,0) rotate(var(--r));opacity:0}
    }
    @keyframes livingStreak{
      0%{transform:translate3d(0,-80px,0) rotate(var(--sr));opacity:0}
      10%{opacity:.18}
      72%{opacity:.12}
      100%{transform:translate3d(var(--drift),110vh,0) rotate(var(--sr));opacity:0}
    }
    @keyframes livingLightning{
      0%{opacity:0} 9%{opacity:.85} 16%{opacity:.12} 24%{opacity:.55} 42%{opacity:.08} 100%{opacity:0}
    }
    @keyframes stormTransitA{0%{transform:translate3d(-34%,0,0) scale(1.08);opacity:.2}45%{opacity:.9}100%{transform:translate3d(26%,0,0) scale(1.02);opacity:.25}}
    @keyframes stormTransitB{0%{transform:translate3d(26%,0,0) scale(1.14);opacity:.1}55%{opacity:.6}100%{transform:translate3d(-18%,0,0) scale(1.04);opacity:.1}}
    @keyframes transitCopy{0%{opacity:0;transform:translateY(13px) scale(.98)}35%{opacity:1;transform:translateY(0) scale(1)}78%{opacity:1}100%{opacity:0;transform:translateY(-8px) scale(1.01)}}

    @media(max-width:700px){
      .city-transition-v5 strong{font-size:38px}
      .living-streak{opacity:.12}
    }
    @media(prefers-reduced-motion:reduce){
      .window-drop,.living-streak,.city-transition-v5:before,.city-transition-v5:after,.city-transition-v5-inner{animation:none!important}
      .window-picture,.window-reflection{transform:none!important}
    }
  `;

  const style=document.createElement('style');
  style.id='pluvia-v5-style';
  style.textContent=css;
  document.head.appendChild(style);

  const windowLayer=document.querySelector('.pluvia-window');
  const dropletLayer=document.querySelector('.window-droplets');
  if(windowLayer){
    const bloom=document.createElement('div');
    bloom.className='living-glass-bloom';
    windowLayer.insertBefore(bloom,windowLayer.querySelector('.window-room-shadow'));
  }

  if(dropletLayer){
    [...dropletLayer.querySelectorAll('.window-drop')].forEach((drop,i)=>{
      drop.style.setProperty('--fall-duration',`${7.5 + (i%9)*.7 + Math.random()*5}s`);
      drop.style.setProperty('--fall-delay',`${-(Math.random()*13).toFixed(2)}s`);
      drop.style.setProperty('--drop-drift',`${(-5+Math.random()*14).toFixed(1)}px`);
    });
    for(let i=0;i<20;i++){
      const streak=document.createElement('i');
      streak.className='living-streak';
      streak.style.setProperty('--sx',`${Math.random()*100}%`);
      streak.style.setProperty('--sy',`${-10+Math.random()*35}%`);
      streak.style.setProperty('--sl',`${45+Math.random()*120}px`);
      streak.style.setProperty('--sr',`${-4+Math.random()*8}deg`);
      streak.style.setProperty('--sd',`${3.6+Math.random()*6}s`);
      streak.style.setProperty('--sdelay',`${-Math.random()*8}s`);
      streak.style.setProperty('--drift',`${-25+Math.random()*50}px`);
      dropletLayer.appendChild(streak);
    }
  }

  const flash=document.createElement('div');
  flash.className='living-light-flash';
  flash.setAttribute('aria-hidden','true');
  document.body.appendChild(flash);

  const transition=document.createElement('div');
  transition.className='city-transition-v5';
  transition.setAttribute('aria-hidden','true');
  transition.innerHTML='<div class="city-transition-v5-inner"><small>PLUVIA / CROSSING THE STORM</small><strong id="transitionCity">Tokyo</strong><span>ENTERING LOCAL RAIN</span></div>';
  document.body.appendChild(transition);
  const transitionCity=transition.querySelector('#transitionCity');

  const nameToId={tokyo:'tokyo',london:'london',mumbai:'mumbai',seattle:'seattle',singapore:'singapore','são paulo':'saopaulo','sao paulo':'saopaulo'};
  const selectedCity=document.querySelector('#selectedCity');
  const windowCity=document.querySelector('#windowCity');
  const hudMain=document.querySelector('.window-hud-main');
  let activeCity='tokyo';
  let transitionTimer=null;

  const timeChip=document.createElement('span');
  timeChip.className='local-time-chip';
  timeChip.id='pluviaLocalTime';
  if(hudMain) hudMain.appendChild(timeChip);

  function activeFromDom(){
    const name=(selectedCity?.textContent||'Tokyo').trim().toLowerCase();
    return nameToId[name] || window.PluviaCityExperience?.getActiveCity?.() || 'tokyo';
  }

  function localParts(id){
    const meta=cityMeta[id]||cityMeta.tokyo;
    const parts=new Intl.DateTimeFormat('en-US',{timeZone:meta.tz,hour:'2-digit',minute:'2-digit',hour12:false}).formatToParts(new Date());
    const map=Object.fromEntries(parts.map(p=>[p.type,p.value]));
    let hour=Number(map.hour||0); if(hour===24) hour=0;
    const phase=hour>=5&&hour<7?'dawn':hour>=7&&hour<17?'day':hour>=17&&hour<20?'dusk':'night';
    const label=new Intl.DateTimeFormat('en-US',{timeZone:meta.tz,hour:'numeric',minute:'2-digit',hour12:true}).format(new Date());
    return {phase,label,hour};
  }

  function updateLocalMood(id=activeFromDom()){
    if(!cityMeta[id]) return;
    activeCity=id;
    const {phase,label}=localParts(id);
    document.body.dataset.dayPhase=phase;
    timeChip.textContent=`${label} · ${phase}`;
    if(windowCity){
      const base=windowCity.textContent.split(' · ')[0] || cityMeta[id].name;
      windowCity.dataset.localTime=label;
      windowCity.title=`${cityMeta[id].name} local time: ${label}`;
    }
  }

  function startTransition(id){
    if(!cityMeta[id]) return;
    activeCity=id;
    transitionCity.textContent=cityMeta[id].name;
    document.body.classList.remove('pluvia-transitioning');
    void transition.offsetWidth;
    document.body.classList.add('pluvia-transitioning');
    clearTimeout(transitionTimer);
    transitionTimer=setTimeout(()=>document.body.classList.remove('pluvia-transitioning'),1080);
    setTimeout(()=>updateLocalMood(id),180);
  }

  document.addEventListener('click',event=>{
    const hit=event.target.closest('[data-city]');
    if(hit?.dataset.city && cityMeta[hit.dataset.city]) startTransition(hit.dataset.city);
  },true);

  if(selectedCity){
    new MutationObserver(()=>{
      const id=activeFromDom();
      if(id!==activeCity) updateLocalMood(id);
    }).observe(selectedCity,{childList:true,subtree:true,characterData:true});
  }

  // Parallax: mouse/pointer, with device orientation where the browser already permits it.
  let targetX=0,targetY=0,currentX=0,currentY=0;
  function setParallax(nx,ny){
    targetX=Math.max(-1,Math.min(1,nx))*7;
    targetY=Math.max(-1,Math.min(1,ny))*5;
  }
  window.addEventListener('pointermove',e=>{
    if(matchMedia('(pointer:fine)').matches) setParallax((e.clientX/innerWidth-.5)*2,(e.clientY/innerHeight-.5)*2);
  },{passive:true});
  window.addEventListener('deviceorientation',e=>{
    if(typeof e.gamma==='number'&&typeof e.beta==='number') setParallax(e.gamma/22,(e.beta-45)/28);
  },{passive:true});
  let parallaxLast=0;
  function animateParallax(ts=0){
    requestAnimationFrame(animateParallax);
    if(document.hidden||ts-parallaxLast<33)return;
    parallaxLast=ts;
    currentX+=(targetX-currentX)*.055;
    currentY+=(targetY-currentY)*.055;
    if(windowLayer){
      windowLayer.style.setProperty('--parallax-x',`${currentX.toFixed(2)}px`);
      windowLayer.style.setProperty('--parallax-y',`${currentY.toFixed(2)}px`);
    }
  }
  requestAnimationFrame(animateParallax);

  // Lightning now illuminates the landmark/window rather than only flashing the page.
  let flashTimer=null;
  function livingFlash(){
    document.body.classList.remove('living-lightning');
    void flash.offsetWidth;
    document.body.classList.add('living-lightning');
    clearTimeout(flashTimer);
    flashTimer=setTimeout(()=>document.body.classList.remove('living-lightning'),520);
  }
  const legacyLightning=document.querySelector('#lightning');
  if(legacyLightning){
    new MutationObserver(()=>{
      const style=getComputedStyle(legacyLightning);
      if(Number(style.opacity)>.15) livingFlash();
    }).observe(legacyLightning,{attributes:true,attributeFilter:['class','style']});
  }
  function ambientLightningLoop(){
    const rain=Number(document.querySelector('#rainRange')?.value||0);
    const condition=(document.querySelector('#selectedCondition')?.textContent||'').toLowerCase();
    if(document.body.classList.contains('pluvia-city-immersive') && (condition.includes('thunder') || rain>78) && Math.random()>.5) livingFlash();
    setTimeout(ambientLightningLoop,12000+Math.random()*17000);
  }
  setTimeout(ambientLightningLoop,9000);

  // Keep time phase current without any API/key.
  updateLocalMood('tokyo');
  setInterval(()=>updateLocalMood(activeFromDom()),60000);

  const version=document.querySelector('.closing .kicker');
  if(version) version.textContent='PLUVIA / 05';
})();