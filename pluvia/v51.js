(() => {
  const cityNames = {
    tokyo:'Tokyo', london:'London', mumbai:'Mumbai', seattle:'Seattle', singapore:'Singapore', saopaulo:'São Paulo'
  };

  const style = document.createElement('style');
  style.id = 'pluvia-v51-style';
  style.textContent = `
    .rain-roulette-btn{
      min-height:54px;
      padding:0 22px;
      border-radius:999px;
      border:1px solid color-mix(in srgb,var(--accent) 38%,rgba(255,255,255,.12));
      background:linear-gradient(145deg,color-mix(in srgb,var(--accent) 11%,rgba(7,17,25,.62)),rgba(6,14,21,.42));
      color:#eef7fb;
      display:inline-flex;
      align-items:center;
      gap:11px;
      cursor:pointer;
      font:600 13px/1 "Manrope",sans-serif;
      letter-spacing:-.01em;
      backdrop-filter:blur(16px) saturate(120%);
      -webkit-backdrop-filter:blur(16px) saturate(120%);
      box-shadow:0 16px 40px rgba(0,0,0,.2),inset 0 1px rgba(255,255,255,.05);
      transition:transform .25s ease,border-color .25s ease,background .25s ease,opacity .25s ease;
    }
    .rain-roulette-btn:hover{transform:translateY(-2px);border-color:color-mix(in srgb,var(--accent) 62%,rgba(255,255,255,.14));background:linear-gradient(145deg,color-mix(in srgb,var(--accent) 17%,rgba(7,17,25,.66)),rgba(6,14,21,.48))}
    .rain-roulette-btn:disabled{opacity:.5;cursor:default;transform:none}
    .rain-roulette-btn .rr-dot{width:8px;height:8px;border-radius:50%;background:var(--accent);box-shadow:0 0 16px var(--accent);animation:rrPulse 2s ease-out infinite}
    .rain-roulette-btn small{font:700 8px/1 "Manrope",sans-serif;letter-spacing:.13em;color:#8ba4b2;text-transform:uppercase}

    .immersive-detail-card{
      position:fixed;
      z-index:152;
      left:50%;
      bottom:max(34px,calc(env(safe-area-inset-bottom,0px) + 26px));
      width:min(430px,calc(100vw - 34px));
      transform:translate(-50%,18px) scale(.97);
      opacity:0;
      pointer-events:none;
      border:1px solid rgba(226,242,250,.14);
      border-radius:24px;
      background:linear-gradient(145deg,rgba(5,14,21,.82),rgba(5,12,18,.68));
      backdrop-filter:blur(24px) saturate(130%);
      -webkit-backdrop-filter:blur(24px) saturate(130%);
      box-shadow:0 30px 90px rgba(0,0,0,.48),inset 0 1px rgba(255,255,255,.06);
      color:#edf6fa;
      overflow:hidden;
      transition:opacity .32s ease,transform .32s ease;
    }
    .immersive-detail-card.show{opacity:1;transform:translate(-50%,0) scale(1)}
    .immersive-detail-head{display:flex;align-items:flex-start;justify-content:space-between;gap:20px;padding:18px 20px 15px;border-bottom:1px solid rgba(255,255,255,.08)}
    .immersive-detail-kicker{font:700 8px/1 "Manrope",sans-serif;letter-spacing:.19em;color:#88a4b4;text-transform:uppercase;margin-bottom:8px}
    .immersive-detail-head strong{display:block;font:600 25px/1 "Playfair Display",serif}
    .immersive-detail-head span{display:block;margin-top:6px;font-size:10px;color:#8ea5b3}
    .immersive-detail-weather{font:600 22px/1 "Manrope",sans-serif;white-space:nowrap;padding-top:4px}
    .immersive-detail-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,.055)}
    .immersive-detail-grid div{background:rgba(4,13,19,.78);padding:13px 15px;min-width:0}
    .immersive-detail-grid small{display:block;font:700 7px/1 "Manrope",sans-serif;letter-spacing:.15em;color:#6f8a99;text-transform:uppercase;margin-bottom:6px}
    .immersive-detail-grid b{display:block;font:500 11px/1.25 "Manrope",sans-serif;color:#d9e7ee;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .immersive-detail-track{padding:13px 18px;display:flex;align-items:center;gap:10px;color:#94aab7;font-size:10px}
    .immersive-detail-track i{width:7px;height:7px;border-radius:50%;background:var(--accent);box-shadow:0 0 12px var(--accent)}
    .immersive-detail-track b{color:#dce9ef;font-weight:500}

    .immersive-hold-hint{
      position:fixed;
      z-index:151;
      left:50%;
      bottom:max(27px,calc(env(safe-area-inset-bottom,0px) + 20px));
      transform:translate(-50%,8px);
      opacity:0;
      pointer-events:none;
      padding:9px 13px;
      border-radius:999px;
      border:1px solid rgba(255,255,255,.11);
      background:rgba(4,12,18,.48);
      backdrop-filter:blur(14px);
      -webkit-backdrop-filter:blur(14px);
      color:#9fb3bf;
      font:700 7px/1 "Manrope",sans-serif;
      letter-spacing:.15em;
      text-transform:uppercase;
      transition:opacity .28s ease,transform .28s ease;
    }
    .immersive-hold-hint.show{opacity:1;transform:translate(-50%,0)}

    @keyframes rrPulse{70%{box-shadow:0 0 0 9px transparent}}
    @media(max-width:760px){
      .hero-actions{flex-wrap:wrap}
      .rain-roulette-btn{width:100%;justify-content:center;min-height:52px}
      .immersive-detail-card{bottom:max(24px,calc(env(safe-area-inset-bottom,0px) + 18px))}
      .immersive-detail-grid{grid-template-columns:1fr 1fr}
      .immersive-detail-grid div:last-child{grid-column:1 / -1}
    }
    @media(prefers-reduced-motion:reduce){.rain-roulette-btn .rr-dot{animation:none!important}.immersive-detail-card,.immersive-hold-hint{transition:none!important}}
  `;
  document.head.appendChild(style);

  const heroActions = document.querySelector('.hero-actions');
  const cityGrid = document.querySelector('#cityGrid');
  const selectedCity = document.querySelector('#selectedCity');
  const selectedTemp = document.querySelector('#selectedTemp');
  const selectedCondition = document.querySelector('#selectedCondition');
  const selectedRain = document.querySelector('#selectedRain');
  const selectedWind = document.querySelector('#selectedWind');
  const selectedTime = document.querySelector('#selectedTime');
  const musicButton = document.querySelector('.immersive-music-btn');
  const toast = document.querySelector('#toast');

  const roulette = document.createElement('button');
  roulette.className = 'rain-roulette-btn';
  roulette.type = 'button';
  roulette.innerHTML = '<span class="rr-dot"></span><span>Take me somewhere it\'s raining</span><small id="rainRouletteCount">finding rain…</small>';
  if (heroActions) heroActions.appendChild(roulette);
  const countEl = roulette.querySelector('#rainRouletteCount');

  const detail = document.createElement('aside');
  detail.className = 'immersive-detail-card';
  detail.setAttribute('aria-live','polite');
  detail.innerHTML = `
    <div class="immersive-detail-head">
      <div><div class="immersive-detail-kicker">PLUVIA / NOW EXPERIENCING</div><strong id="detailCity">Tokyo</strong><span id="detailLandmark">Tokyo Tower</span></div>
      <div class="immersive-detail-weather" id="detailTemp">—°</div>
    </div>
    <div class="immersive-detail-grid">
      <div><small>Weather</small><b id="detailCondition">—</b></div>
      <div><small>Rain</small><b id="detailRain">— mm</b></div>
      <div><small>Wind</small><b id="detailWind">— km/h</b></div>
      <div><small>Local time</small><b id="detailTime">—</b></div>
      <div><small>Glass</small><b>Living window</b></div>
      <div><small>Mode</small><b>Immersive rain</b></div>
    </div>
    <div class="immersive-detail-track"><i></i><span>NOW PLAYING · <b id="detailTrack">City rain radio</b></span></div>`;
  document.body.appendChild(detail);

  const hint = document.createElement('div');
  hint.className = 'immersive-hold-hint';
  hint.textContent = 'Hold the scene for details';
  document.body.appendChild(hint);

  let detailTimer = null;
  let hintTimer = null;
  let holdTimer = null;
  let holdStart = null;
  let suppressClick = false;
  let lastImmersive = false;

  function rainyCards(){
    return [...document.querySelectorAll('.city-card[data-city]')].map(card => {
      const text = card.textContent || '';
      const match = text.match(/([0-9]+(?:\.[0-9]+)?)\s*mm\s*rain/i);
      return {card, id:card.dataset.city, rain:match ? Number(match[1]) : 0};
    }).filter(x => x.rain > 0);
  }

  function updateRainCount(){
    const wet = rainyCards();
    if (countEl) countEl.textContent = wet.length ? `${wet.length} wet ${wet.length === 1 ? 'sky' : 'skies'}` : 'waiting for rain';
    roulette.disabled = !wet.length;
  }

  if (cityGrid) {
    new MutationObserver(updateRainCount).observe(cityGrid,{childList:true,subtree:true,characterData:true});
    updateRainCount();
  }

  function showToast(message){
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'),2600);
  }

  roulette.addEventListener('click', () => {
    const wet = rainyCards();
    if (!wet.length) return showToast('None of the current Pluvia cities are reporting rain right now.');
    const current = (selectedCity?.textContent || '').trim().toLowerCase();
    const different = wet.filter(x => cityNames[x.id]?.toLowerCase() !== current);
    const pool = different.length ? different : wet;
    const choice = pool[Math.floor(Math.random()*pool.length)];
    choice.card.click();
  });

  function selectedId(){
    const name=(selectedCity?.textContent||'Tokyo').trim().toLowerCase();
    return Object.entries(cityNames).find(([,n])=>n.toLowerCase()===name)?.[0] || window.PluviaCityExperience?.getActiveCity?.() || 'tokyo';
  }

  function updateDetail(){
    const id = selectedId();
    const view = window.PluviaCityExperience?.views?.[id];
    detail.querySelector('#detailCity').textContent = selectedCity?.textContent || cityNames[id] || 'Pluvia';
    detail.querySelector('#detailLandmark').textContent = view?.landmark || document.querySelector('#windowLandmark')?.textContent || 'City window';
    detail.querySelector('#detailTemp').textContent = selectedTemp?.textContent || '—°';
    detail.querySelector('#detailCondition').textContent = selectedCondition?.textContent || 'Live weather';
    detail.querySelector('#detailRain').textContent = `${selectedRain?.textContent || '—'} mm`;
    detail.querySelector('#detailWind').textContent = `${selectedWind?.textContent || '—'} km/h`;
    detail.querySelector('#detailTime').textContent = (selectedTime?.textContent || document.querySelector('#pluviaLocalTime')?.textContent || 'LOCAL').replace(' LOCAL','');
    const track = musicButton?.dataset.track;
    const artist = musicButton?.dataset.artist;
    detail.querySelector('#detailTrack').textContent = track ? `${track}${artist ? ` — ${artist}` : ''}` : 'City rain radio';
  }

  function showDetail(){
    if (!document.body.classList.contains('pluvia-city-immersive')) return;
    updateDetail();
    detail.classList.add('show');
    clearTimeout(detailTimer);
    detailTimer=setTimeout(()=>detail.classList.remove('show'),5000);
  }

  function showHint(){
    hint.classList.add('show');
    clearTimeout(hintTimer);
    hintTimer=setTimeout(()=>hint.classList.remove('show'),2400);
  }

  // Press-and-hold the scene for details. The follow-up click is swallowed at window capture
  // before the older immersive exit handler on document can see it.
  window.addEventListener('pointerdown', event => {
    if (!document.body.classList.contains('pluvia-city-immersive')) return;
    if (event.target.closest?.('.immersive-music-btn,.immersive-nav-zone')) return;
    holdStart = {x:event.clientX,y:event.clientY};
    clearTimeout(holdTimer);
    holdTimer=setTimeout(()=>{
      suppressClick=true;
      showDetail();
    },620);
  }, true);

  window.addEventListener('pointermove', event => {
    if (!holdStart) return;
    if (Math.hypot(event.clientX-holdStart.x,event.clientY-holdStart.y)>18) {
      clearTimeout(holdTimer);
      holdTimer=null;
    }
  }, true);

  window.addEventListener('pointerup', () => {
    clearTimeout(holdTimer);
    holdTimer=null;
    holdStart=null;
  }, true);

  window.addEventListener('click', event => {
    if (!suppressClick || !document.body.classList.contains('pluvia-city-immersive')) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    suppressClick=false;
  }, true);

  const bodyObserver = new MutationObserver(() => {
    const immersive=document.body.classList.contains('pluvia-city-immersive');
    if (immersive && !lastImmersive) showHint();
    if (!immersive) detail.classList.remove('show');
    lastImmersive=immersive;
  });
  bodyObserver.observe(document.body,{attributes:true,attributeFilter:['class']});

  const version = document.querySelector('.closing .kicker');
  if (version) version.textContent = 'PLUVIA / 05.1';
})();