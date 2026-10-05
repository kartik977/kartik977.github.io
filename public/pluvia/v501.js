(() => {
  const style = document.createElement('style');
  style.id = 'pluvia-v501-style';
  style.textContent = `
    /* PLUVIA 5.0.1 — clearer living glass */
    .window-droplets{
      z-index:6!important;
      opacity:1!important;
      filter:drop-shadow(0 3px 3px rgba(0,0,0,.38)) drop-shadow(0 0 7px rgba(206,235,248,.08))!important;
      pointer-events:none!important;
    }
    .window-drop{
      opacity:.78!important;
      border-color:rgba(232,247,255,.28)!important;
      background:
        radial-gradient(circle at 30% 21%,rgba(255,255,255,.72) 0 7%,rgba(228,245,253,.32) 12%,rgba(168,207,228,.13) 42%,rgba(6,18,26,.05) 72%)!important;
      box-shadow:
        inset -2px -3px 5px rgba(6,17,24,.22),
        inset 1px 1px 3px rgba(255,255,255,.2),
        0 2px 5px rgba(0,0,0,.28)!important;
    }
    .window-drop:after{
      width:1.5px!important;
      background:linear-gradient(to bottom,rgba(231,247,255,.48),rgba(196,226,241,.2) 38%,transparent)!important;
      opacity:.85!important;
    }

    .v501-glass-drop{
      position:absolute;
      z-index:8;
      left:var(--x);
      top:var(--y);
      width:var(--size);
      height:calc(var(--size) * 1.28);
      border-radius:52% 48% 58% 45%;
      opacity:0;
      pointer-events:none;
      border:1px solid rgba(236,249,255,.32);
      background:
        radial-gradient(circle at 30% 18%,rgba(255,255,255,.82) 0 6%,rgba(226,244,252,.38) 12%,rgba(156,203,228,.14) 45%,rgba(2,14,21,.08) 74%);
      box-shadow:
        inset -2px -4px 6px rgba(3,13,19,.25),
        inset 1px 1px 3px rgba(255,255,255,.22),
        0 3px 6px rgba(0,0,0,.34),
        0 0 8px rgba(207,236,249,.08);
      animation:none;
      will-change:auto;
    }
    .v501-glass-drop:before{
      content:"";
      position:absolute;
      left:23%;
      top:15%;
      width:25%;
      height:18%;
      border-radius:50%;
      background:rgba(255,255,255,.64);
      filter:blur(.5px);
    }
    .v501-glass-drop:after{
      content:"";
      position:absolute;
      left:50%;
      top:88%;
      width:2px;
      height:var(--trail);
      transform:translateX(-50%);
      border-radius:999px;
      background:linear-gradient(to bottom,rgba(224,243,252,.48),rgba(191,224,240,.2) 38%,transparent 100%);
      box-shadow:0 0 4px rgba(210,237,250,.09);
    }
    body.pluvia-city-immersive .v501-glass-drop{
      filter:drop-shadow(0 2px 3px rgba(0,0,0,.42));
      animation:v501GlassFall var(--duration) cubic-bezier(.37,.02,.52,1) var(--delay) infinite;
      will-change:transform,opacity;
    }

    .immersive-nav-zone{
      position:fixed;
      z-index:125;
      top:0;
      bottom:0;
      width:min(18vw,190px);
      display:none;
      opacity:0;
      background:transparent;
      border:0;
      padding:0;
      -webkit-tap-highlight-color:transparent;
    }
    .immersive-nav-zone.prev{left:0;cursor:w-resize}
    .immersive-nav-zone.next{right:0;cursor:e-resize}
    body.pluvia-city-immersive .immersive-nav-zone{display:block}

    @keyframes v501GlassFall{
      0%{transform:translate3d(0,-15vh,0) scale(.92);opacity:0}
      7%{opacity:.9}
      24%{transform:translate3d(var(--drift-a),12vh,0) scale(1);opacity:.94}
      48%{transform:translate3d(var(--drift-b),38vh,0) scale(1.02);opacity:.82}
      72%{transform:translate3d(var(--drift-c),72vh,0) scale(.98);opacity:.58}
      100%{transform:translate3d(var(--drift-d),118vh,0) scale(.9);opacity:0}
    }

    @media(max-width:700px){
      .immersive-nav-zone{width:22vw}
      .window-drop:nth-of-type(n+17),.living-streak:nth-of-type(n+11),.v501-glass-drop:nth-of-type(n+13){display:none!important}
      .v501-glass-drop{border-color:rgba(238,249,255,.36)}
    }
    @media(prefers-reduced-motion:reduce){
      .v501-glass-drop{animation:none!important;opacity:.55!important}
    }
  `;
  document.head.appendChild(style);

  const dropletLayer = document.querySelector('.window-droplets');
  if (dropletLayer) {
    const extraDropCount = matchMedia('(max-width:700px)').matches ? 12 : 20;
    for (let i = 0; i < extraDropCount; i++) {
      const drop = document.createElement('i');
      drop.className = 'v501-glass-drop';
      const size = 7 + Math.random() * 17;
      const drift = -10 + Math.random() * 20;
      drop.style.setProperty('--x', `${2 + Math.random() * 96}%`);
      drop.style.setProperty('--y', `${-15 + Math.random() * 70}%`);
      drop.style.setProperty('--size', `${size.toFixed(1)}px`);
      drop.style.setProperty('--trail', `${28 + Math.random() * 135}px`);
      drop.style.setProperty('--duration', `${7.5 + Math.random() * 9}s`);
      drop.style.setProperty('--delay', `${(-Math.random() * 15).toFixed(2)}s`);
      drop.style.setProperty('--drift-a', `${(drift * .35).toFixed(1)}px`);
      drop.style.setProperty('--drift-b', `${(drift * .72).toFixed(1)}px`);
      drop.style.setProperty('--drift-c', `${(drift * 1.05).toFixed(1)}px`);
      drop.style.setProperty('--drift-d', `${(drift * 1.45).toFixed(1)}px`);
      dropletLayer.appendChild(drop);
    }
  }

  const prevZone = document.createElement('button');
  prevZone.className = 'immersive-nav-zone prev';
  prevZone.type = 'button';
  prevZone.setAttribute('aria-label', 'Previous city');
  const nextZone = document.createElement('button');
  nextZone.className = 'immersive-nav-zone next';
  nextZone.type = 'button';
  nextZone.setAttribute('aria-label', 'Next city');
  document.body.append(prevZone, nextZone);

  const order = ['tokyo','london','mumbai','seattle','singapore','saopaulo'];
  const names = {
    tokyo:'Tokyo', london:'London', mumbai:'Mumbai', seattle:'Seattle', singapore:'Singapore', saopaulo:'São Paulo'
  };
  const selectedCity = document.querySelector('#selectedCity');
  const nameToId = Object.fromEntries(Object.entries(names).map(([id,name]) => [name.toLowerCase(), id]));

  function isImmersive(){
    return document.body.classList.contains('pluvia-city-immersive');
  }
  function currentId(){
    const name = selectedCity?.textContent?.trim().toLowerCase();
    return nameToId[name] || window.PluviaCityExperience?.getActiveCity?.() || 'tokyo';
  }
  function activate(id){
    const target = document.querySelector(`.city-card[data-city="${id}"]`) || document.querySelector(`.globe-dot[data-city="${id}"]`);
    if (target) target.click();
  }
  function cycle(direction){
    if (!isImmersive()) return;
    const now = currentId();
    const index = Math.max(0, order.indexOf(now));
    const next = order[(index + direction + order.length) % order.length];
    activate(next);
  }

  // Intercept invisible edge navigation before the older immersive document handler can exit the scene.
  window.addEventListener('click', event => {
    if (!isImmersive()) return;
    const zone = event.target.closest?.('.immersive-nav-zone');
    if (!zone) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    cycle(zone.classList.contains('prev') ? -1 : 1);
  }, true);

  // Horizontal swipe / mouse drag changes cities while staying immersive.
  let startX = null;
  let startY = null;
  let suppressNextClick = false;
  window.addEventListener('pointerdown', event => {
    if (!isImmersive() || event.target.closest?.('.immersive-music-btn,.soundscape-panel')) return;
    startX = event.clientX;
    startY = event.clientY;
  }, true);
  window.addEventListener('pointerup', event => {
    if (!isImmersive() || event.target.closest?.('.soundscape-panel') || startX == null || startY == null) return;
    const dx = event.clientX - startX;
    const dy = event.clientY - startY;
    startX = startY = null;
    if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.25) {
      suppressNextClick = true;
      event.preventDefault();
      event.stopPropagation();
      cycle(dx < 0 ? 1 : -1);
      setTimeout(() => { suppressNextClick = false; }, 180);
    }
  }, true);
  window.addEventListener('click', event => {
    if (!suppressNextClick || !isImmersive()) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    suppressNextClick = false;
  }, true);

  // Trackpad horizontal swipe.
  let wheelCooldown = false;
  window.addEventListener('wheel', event => {
    if (!isImmersive() || wheelCooldown || event.target.closest?.('.soundscape-panel')) return;
    if (Math.abs(event.deltaX) < 55 || Math.abs(event.deltaX) < Math.abs(event.deltaY) * 1.2) return;
    event.preventDefault();
    wheelCooldown = true;
    cycle(event.deltaX > 0 ? 1 : -1);
    setTimeout(() => { wheelCooldown = false; }, 900);
  }, {capture:true, passive:false});

  window.addEventListener('keydown', event => {
    if (!isImmersive()) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      cycle(event.key === 'ArrowRight' ? 1 : -1);
    }
  }, true);

  const version = document.querySelector('.closing .kicker');
  if (version) version.textContent = 'PLUVIA / 05.0.1';
})();