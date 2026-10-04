(() => {
  const style=document.createElement('style');
  style.id='pluvia-v41-fix';
  style.textContent=`
    html,body{min-height:100%;background:#03080c}
    body{position:relative!important;isolation:isolate!important}

    /* Hard layer contract: scenery below, interface above. */
    .pluvia-window{z-index:0!important;pointer-events:none!important}
    body:before,body:after{z-index:1!important;pointer-events:none!important}
    .ambient,.cloud,.skyline{z-index:2!important;pointer-events:none!important}
    #stormCanvas{z-index:3!important;pointer-events:none!important}
    #rainCanvas{z-index:4!important;pointer-events:none!important}
    #fogCanvas{z-index:5!important;pointer-events:none!important}
    .lightning{z-index:6!important;pointer-events:none!important}
    .window-hud{z-index:12!important}

    main{position:relative!important;z-index:30!important;isolation:isolate!important;visibility:visible!important;opacity:1!important}
    .topbar{position:relative!important;z-index:70!important;visibility:visible!important;opacity:1!important}
    footer{position:relative!important;z-index:30!important;visibility:visible!important;opacity:1!important}
    .hero,.section,.closing{position:relative!important;z-index:31!important}
    .hero-copy,.hero-stack,.section-heading,.city-grid,.world-copy,.globe-wrap,.mixer,.closing-inner{position:relative!important;z-index:32!important}
    .weather-card,.scene-card,.city-card,.mixer,.globe-3d-shell{position:relative;z-index:33}
    .pluvia-radio{z-index:90!important}
    .toast{z-index:100!important}

    /* Safari/WebKit can lose reveal layers after fixed composited backgrounds switch. */
    body.pluvia-interface-locked .reveal{opacity:1!important;transform:none!important;visibility:visible!important}
    body.pluvia-interface-locked .hero-copy,
    body.pluvia-interface-locked .hero-stack,
    body.pluvia-interface-locked .section-heading,
    body.pluvia-interface-locked .city-grid,
    body.pluvia-interface-locked .world-copy,
    body.pluvia-interface-locked .globe-wrap,
    body.pluvia-interface-locked .mixer,
    body.pluvia-interface-locked .closing-inner{opacity:1!important;visibility:visible!important}

    /* Music-reactive room light: stays behind all interface content. */
    .radio-room-light{position:fixed;inset:0;z-index:7;pointer-events:none;opacity:0;background:
      radial-gradient(circle at 18% 26%,color-mix(in srgb,var(--accent) 18%,transparent),transparent 28%),
      radial-gradient(circle at 82% 34%,color-mix(in srgb,var(--accent2) 13%,transparent),transparent 31%),
      linear-gradient(180deg,rgba(190,225,245,.025),transparent 44%);mix-blend-mode:screen;transition:opacity .6s ease}
    body.pluvia-radio-playing .radio-room-light{opacity:.75;animation:roomMusicPulse 4.8s ease-in-out infinite}
    body.pluvia-radio-playing .window-reflection{animation:reflectionMusicPulse 5.8s ease-in-out infinite}
    body.pluvia-radio-playing .window-picture.current{animation:windowMusicBreath 7s ease-in-out infinite}
    body.pluvia-radio-playing #rainCanvas{filter:drop-shadow(0 0 8px color-mix(in srgb,var(--accent) 12%,transparent))}

    @keyframes roomMusicPulse{0%,100%{transform:scale(1);filter:brightness(.9)}50%{transform:scale(1.025);filter:brightness(1.16)}}
    @keyframes reflectionMusicPulse{0%,100%{opacity:.2}50%{opacity:.38}}
    @keyframes windowMusicBreath{0%,100%{filter:brightness(.45) saturate(.82) contrast(1.08) blur(.35px);transform:scale(1.035)}50%{filter:brightness(.52) saturate(.9) contrast(1.06) blur(.2px);transform:scale(1.048)}}

    @media(max-width:700px){
      .window-hud{z-index:11!important}
      .pluvia-radio{z-index:95!important}
    }
    @media(prefers-reduced-motion:reduce){
      body.pluvia-radio-playing .radio-room-light,
      body.pluvia-radio-playing .window-reflection,
      body.pluvia-radio-playing .window-picture.current{animation:none!important}
    }
  `;
  document.head.appendChild(style);

  const light=document.createElement('div');
  light.className='radio-room-light';
  light.setAttribute('aria-hidden','true');
  document.body.appendChild(light);

  function restoreInterface(){
    document.body.classList.add('pluvia-interface-locked');
    document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));
    const main=document.querySelector('main');
    if(main){main.style.visibility='visible';main.style.opacity='1'}
    const top=document.querySelector('.topbar');
    if(top){top.style.visibility='visible';top.style.opacity='1'}
  }

  // Lock the interface once the initial reveal animations have had time to run.
  setTimeout(restoreInterface,1200);

  // City switching can trigger new browser compositing layers; immediately restore UI.
  document.addEventListener('click',e=>{
    if(e.target.closest('[data-city]')){
      restoreInterface();
      requestAnimationFrame(restoreInterface);
      setTimeout(restoreInterface,180);
      setTimeout(restoreInterface,900);
    }
  },true);

  const selected=document.querySelector('#selectedCity');
  if(selected){
    new MutationObserver(()=>{
      restoreInterface();
      setTimeout(restoreInterface,120);
      setTimeout(restoreInterface,850);
    }).observe(selected,{childList:true,subtree:true,characterData:true});
  }

  // Mirror radio playback state into the room atmosphere without touching audio internals.
  function wireRadio(){
    const radio=document.querySelector('.pluvia-radio');
    if(!radio)return false;
    const sync=()=>document.body.classList.toggle('pluvia-radio-playing',radio.classList.contains('playing'));
    new MutationObserver(sync).observe(radio,{attributes:true,attributeFilter:['class']});
    sync();
    return true;
  }
  if(!wireRadio()){
    const watch=new MutationObserver(()=>{if(wireRadio())watch.disconnect()});
    watch.observe(document.body,{childList:true});
  }

  // Bump the visible version marker for this stability + music-reactive pass.
  const version=document.querySelector('.closing .kicker');
  if(version)version.textContent='PLUVIA / 04.1';
})();