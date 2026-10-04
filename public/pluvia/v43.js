(() => {
  const style = document.createElement('style');
  style.id = 'pluvia-v43-immersive';
  style.textContent = `
    .immersive-music-btn{
      position:fixed;
      top:calc(env(safe-area-inset-top, 0px) + 22px);
      right:20px;
      z-index:140;
      width:58px;
      height:58px;
      border-radius:50%;
      border:1px solid rgba(255,255,255,.18);
      background:linear-gradient(145deg,rgba(7,17,25,.72),rgba(6,12,18,.46));
      backdrop-filter:blur(20px) saturate(125%);
      -webkit-backdrop-filter:blur(20px) saturate(125%);
      box-shadow:0 18px 46px rgba(0,0,0,.34),inset 0 1px rgba(255,255,255,.07);
      display:none;
      place-items:center;
      color:#eef7fb;
      cursor:pointer;
      opacity:0;
      transform:scale(.88);
      transition:opacity .35s ease,transform .35s ease,background .25s ease,border-color .25s ease;
      -webkit-tap-highlight-color:transparent;
    }
    .immersive-music-btn svg{width:23px;height:23px;fill:currentColor;display:block}
    .immersive-music-btn:before{
      content:"";
      position:absolute;
      inset:-5px;
      border-radius:50%;
      border:1px solid color-mix(in srgb,var(--accent) 34%,transparent);
      opacity:.45;
      transition:.3s ease;
    }
    .immersive-music-btn.is-playing{
      background:linear-gradient(145deg,color-mix(in srgb,var(--accent) 18%,rgba(7,17,25,.78)),rgba(6,12,18,.5));
      border-color:color-mix(in srgb,var(--accent) 42%,rgba(255,255,255,.12));
      box-shadow:0 18px 46px rgba(0,0,0,.34),0 0 34px color-mix(in srgb,var(--accent) 18%,transparent),inset 0 1px rgba(255,255,255,.08);
    }
    .immersive-music-btn.is-playing:before{animation:immersiveMusicPulse 2s ease-out infinite;opacity:.75}

    body.pluvia-city-immersive{
      overflow:hidden!important;
      height:100dvh!important;
      min-height:100dvh!important;
      background:#020609!important;
    }
    body.pluvia-city-immersive .topbar,
    body.pluvia-city-immersive main,
    body.pluvia-city-immersive footer,
    body.pluvia-city-immersive .window-hud,
    body.pluvia-city-immersive .pluvia-radio,
    body.pluvia-city-immersive .toast,
    body.pluvia-city-immersive .radio-room-light{
      display:none!important;
    }
    body.pluvia-city-immersive .pluvia-window{
      z-index:0!important;
      opacity:1!important;
      transform:none!important;
    }
    body.pluvia-city-immersive .window-picture{
      filter:brightness(.58) saturate(.98) contrast(1.08) blur(.18px)!important;
      transform:scale(1.045)!important;
    }
    body.pluvia-city-immersive .window-weather-tone{
      background:radial-gradient(circle at 50% 45%,transparent 0 30%,rgba(1,7,11,.12) 56%,rgba(1,4,7,.56) 100%),linear-gradient(180deg,rgba(2,8,12,.05),rgba(2,8,12,.16) 58%,rgba(1,4,7,.48))!important;
    }
    body.pluvia-city-immersive .window-room-shadow{box-shadow:inset 0 0 120px 28px rgba(0,0,0,.54)!important}
    body.pluvia-city-immersive .window-frame{opacity:.74!important}
    body.pluvia-city-immersive .window-reflection{opacity:.25!important}
    body.pluvia-city-immersive #stormCanvas{z-index:3!important;opacity:.75!important}
    body.pluvia-city-immersive #rainCanvas{z-index:4!important;opacity:.96!important}
    body.pluvia-city-immersive #fogCanvas{z-index:5!important;opacity:.72!important}
    body.pluvia-city-immersive .lightning{z-index:6!important}
    body.pluvia-city-immersive .immersive-music-btn{
      display:grid;
      opacity:1;
      transform:scale(1);
    }

    @keyframes immersiveMusicPulse{
      0%{transform:scale(.95);opacity:.7}
      70%{transform:scale(1.32);opacity:0}
      100%{transform:scale(1.32);opacity:0}
    }

    @media(max-width:700px){
      .immersive-music-btn{
        width:54px;
        height:54px;
        top:18px;
        right:16px;
      }
      .immersive-music-btn svg{width:21px;height:21px}
      body.pluvia-city-immersive .window-topbar{top:0!important;opacity:.45}
      body.pluvia-city-immersive .window-bottombar{bottom:0!important;opacity:.55}
      body.pluvia-city-immersive .window-sill{opacity:.55}
      body.pluvia-city-immersive .window-picture{filter:brightness(.6) saturate(1.02) contrast(1.08) blur(.12px)!important}
    }
    @media(prefers-reduced-motion:reduce){
      .immersive-music-btn.is-playing:before{animation:none!important}
    }
  `;
  document.head.appendChild(style);

  const button = document.createElement('button');
  button.className = 'immersive-music-btn';
  button.type = 'button';
  button.setAttribute('aria-label','Play city rain music');
  button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18V5l11-2v13.2a3.3 3.3 0 1 1-2-3.03V7.4l-7 1.27V18.2A3.3 3.3 0 1 1 9 18z"/></svg>';
  document.body.appendChild(button);

  let entering = false;

  function syncMusicState(){
    const radio = document.querySelector('.pluvia-radio');
    const playing = !!radio?.classList.contains('playing');
    button.classList.toggle('is-playing', playing);
    button.setAttribute('aria-label', playing ? 'Pause city rain music' : 'Play city rain music');
  }

  function enterImmersive(){
    if (entering) return;
    entering = true;
    document.body.classList.add('pluvia-city-immersive');
    document.documentElement.style.overflow = 'hidden';
    syncMusicState();
    setTimeout(() => { entering = false; }, 450);
  }

  function exitImmersive(){
    document.body.classList.remove('pluvia-city-immersive');
    document.documentElement.style.overflow = '';
    entering = false;
    const radio = document.querySelector('.pluvia-radio');
    if (radio && window.matchMedia('(max-width:700px)').matches && !radio.classList.contains('mobile-inline')) {
      const hero = document.querySelector('.hero');
      const heroStack = document.querySelector('.hero-stack');
      if (hero && heroStack) {
        hero.insertBefore(radio, heroStack);
        radio.classList.add('mobile-inline');
      }
    }
  }

  document.addEventListener('click', (event) => {
    const city = event.target.closest('[data-city]');
    if (city) {
      // Let the existing weather, landmark and radio handlers process the city first.
      setTimeout(enterImmersive, 220);
      return;
    }

    if (!document.body.classList.contains('pluvia-city-immersive')) return;

    // The visible immersive button internally clicks the hidden Pluvia Radio toggle.
    // Those synthetic radio clicks must be allowed to reach the radio handlers without
    // being interpreted as a request to exit immersive city mode.
    if (event.target.closest('.immersive-music-btn')) return;
    if (!event.isTrusted && event.target.closest('.pluvia-radio, #radioToggle, #radioNext')) return;

    exitImmersive();
  }, true);

  button.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    const radioToggle = document.querySelector('#radioToggle');
    if (radioToggle) radioToggle.click();
    setTimeout(syncMusicState, 80);
  });

  function wireRadio(){
    const radio = document.querySelector('.pluvia-radio');
    if (!radio) return false;
    new MutationObserver(syncMusicState).observe(radio,{attributes:true,attributeFilter:['class']});
    syncMusicState();
    return true;
  }

  if (!wireRadio()) {
    const watch = new MutationObserver(() => {
      if (wireRadio()) watch.disconnect();
    });
    watch.observe(document.body,{childList:true,subtree:true});
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.body.classList.contains('pluvia-city-immersive')) exitImmersive();
  });

  window.addEventListener('popstate', () => {
    if (document.body.classList.contains('pluvia-city-immersive')) exitImmersive();
  });

  const version = document.querySelector('.closing .kicker');
  if (version) version.textContent = 'PLUVIA / 04.3.1';
})();