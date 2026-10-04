(() => {
  const views = {
    tokyo: {
      name: 'Tokyo', landmark: 'Tokyo Tower', language: 'Japanese',
      image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Tokyo%20Tower%20at%20night.jpg?width=2200',
      source: 'https://commons.wikimedia.org/wiki/File:Tokyo_Tower_at_night.jpg',
      credit: 'Douglas P Perkins · Wikimedia Commons',
      position: '58% 48%'
    },
    london: {
      name: 'London', landmark: 'Big Ben', language: 'English',
      image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Big%20Ben%20at%20night%202026-03-31.jpg?width=2200',
      source: 'https://commons.wikimedia.org/wiki/File:Big_Ben_at_night_2026-03-31.jpg',
      credit: 'Andrew Bone · Wikimedia Commons',
      position: '54% 42%'
    },
    mumbai: {
      name: 'Mumbai', landmark: 'Gateway of India', language: 'Hindi / Marathi',
      image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Gateway%20of%20India%2C%20Mumbai%20%28Night%29.jpg?width=2200',
      source: 'https://commons.wikimedia.org/wiki/File:Gateway_of_India,_Mumbai_(Night).jpg',
      credit: 'Kushared · Wikimedia Commons',
      position: '50% 55%'
    },
    seattle: {
      name: 'Seattle', landmark: 'Space Needle', language: 'English',
      image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Seattle%20Space%20Needle.jpg?width=2200',
      source: 'https://commons.wikimedia.org/wiki/File:Seattle_Space_Needle.jpg',
      credit: 'Diham · Wikimedia Commons',
      position: '50% 46%'
    },
    singapore: {
      name: 'Singapore', landmark: 'Marina Bay Sands', language: 'English / Mandarin',
      image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Marina%20Bay%20Sands%20at%20night.jpg?width=2200',
      source: 'https://commons.wikimedia.org/wiki/File:Marina_Bay_Sands_at_night.jpg',
      credit: 'Hugwine · Wikimedia Commons',
      position: '50% 50%'
    },
    saopaulo: {
      name: 'São Paulo', landmark: 'São Paulo Skyline', language: 'Portuguese',
      image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Sao%20Paulo%20Skyline%20at%20night.jpg?width=2200',
      source: 'https://commons.wikimedia.org/wiki/File:Sao_Paulo_Skyline_at_night.jpg',
      credit: 'Thomas Hobbs · Wikimedia Commons',
      position: '50% 48%'
    }
  };

  const css = `
    body{background:#040a0f!important}
    .skyline{opacity:.08!important;filter:blur(4px)!important}
    .ambient{opacity:.13!important}
    .cloud{opacity:.1!important}

    .pluvia-window{position:fixed;inset:0;z-index:0;overflow:hidden;background:#03070a;pointer-events:none}
    .window-picture{position:absolute;inset:-3%;width:106%;height:106%;object-fit:cover;object-position:50% 50%;filter:brightness(.46) saturate(.82) contrast(1.08) blur(.35px);transform:scale(1.035);transition:opacity .8s ease,transform 7s ease,object-position 1.2s ease}
    .window-picture.next{opacity:0}.pluvia-window.switching .window-picture.current{opacity:0}.pluvia-window.switching .window-picture.next{opacity:1;transform:scale(1.065)}
    .window-weather-tone{position:absolute;inset:0;background:radial-gradient(circle at 55% 43%,transparent 0 21%,rgba(1,8,13,.2) 48%,rgba(1,5,8,.72) 100%),linear-gradient(180deg,rgba(3,10,15,.15),rgba(2,9,14,.25) 52%,rgba(1,5,8,.7));mix-blend-mode:multiply}
    .window-room-shadow{position:absolute;inset:0;box-shadow:inset 0 0 170px 45px rgba(0,0,0,.76);background:linear-gradient(90deg,rgba(0,0,0,.42),transparent 12% 88%,rgba(0,0,0,.42))}
    .window-reflection{position:absolute;inset:0;opacity:.28;background:linear-gradient(112deg,transparent 0 12%,rgba(211,231,244,.11) 17%,transparent 24% 58%,rgba(190,218,235,.08) 64%,transparent 73%),radial-gradient(ellipse at 18% 18%,rgba(170,204,228,.1),transparent 28%);filter:blur(1px)}
    .window-frame{position:absolute;inset:0;filter:drop-shadow(0 12px 14px rgba(0,0,0,.55))}
    .window-frame:before,.window-frame:after{content:"";position:absolute;top:0;bottom:0;width:16px;background:linear-gradient(90deg,#11181d,#2b343a 38%,#070b0e 74%,#1d252a);box-shadow:0 0 0 1px rgba(255,255,255,.05),0 0 28px rgba(0,0,0,.75)}
    .window-frame:before{left:calc(33.333% - 8px)}.window-frame:after{right:calc(33.333% - 8px)}
    .window-topbar,.window-bottombar{position:absolute;left:0;right:0;height:17px;background:linear-gradient(#222b30,#0c1115 50%,#252e33);box-shadow:0 1px rgba(255,255,255,.05),0 8px 25px rgba(0,0,0,.6)}
    .window-topbar{top:88px}.window-bottombar{bottom:6.5vh;height:24px}
    .window-sill{position:absolute;left:-2%;right:-2%;bottom:0;height:8vh;background:linear-gradient(180deg,#1b2227,#090d10 38%,#020405);box-shadow:0 -14px 45px rgba(0,0,0,.8),inset 0 1px rgba(255,255,255,.06);transform:perspective(500px) rotateX(13deg);transform-origin:bottom}
    .window-sill:after{content:"";position:absolute;left:8%;right:8%;top:14px;height:1px;background:linear-gradient(90deg,transparent,rgba(170,211,235,.12),transparent)}

    .window-droplets{position:absolute;inset:0;opacity:.75;filter:drop-shadow(0 2px 2px rgba(0,0,0,.4))}
    .window-drop{position:absolute;width:var(--s);height:calc(var(--s)*1.32);left:var(--x);top:var(--y);border-radius:55% 48% 60% 44%;background:radial-gradient(circle at 35% 25%,rgba(255,255,255,.38),rgba(183,215,232,.08) 40%,rgba(4,16,23,.08) 70%);border:1px solid rgba(220,239,249,.12);backdrop-filter:blur(.7px);transform:rotate(var(--r))}
    .window-drop:after{content:"";position:absolute;width:1px;height:var(--tail);left:50%;top:90%;background:linear-gradient(rgba(211,232,243,.2),transparent);opacity:.55}

    .window-hud{position:fixed;z-index:5;left:24px;bottom:calc(7vh + 24px);display:flex;align-items:flex-end;gap:16px;pointer-events:auto;color:#dce7ed;text-shadow:0 2px 12px rgba(0,0,0,.8)}
    .window-hud-main{display:flex;flex-direction:column;gap:5px}.window-hud-main small{font:600 8px/1 "Manrope",sans-serif;letter-spacing:.2em;color:#9eb3c0}.window-hud-main strong{font:600 17px/1.1 "Manrope",sans-serif}.window-hud-main span{font-size:10px;color:#91a6b4}
    .window-credit{font-size:8px;color:#6f8491;border-bottom:1px solid rgba(255,255,255,.15);padding-bottom:2px;pointer-events:auto}

    .hero{min-height:calc(100vh - 88px)!important}
    .hero:before{content:"";position:absolute;inset:-40px -5vw;border-radius:44px;background:radial-gradient(circle at 25% 34%,rgba(5,18,27,.28),transparent 38%);pointer-events:none}
    .hero-copy{padding:30px 0;text-shadow:0 4px 35px rgba(0,0,0,.75)}
    .hero-text{color:#c5d1d8!important}
    .glass{background:linear-gradient(145deg,rgba(7,18,26,.5),rgba(7,16,23,.24))!important;border-color:rgba(220,238,248,.14)!important;box-shadow:0 28px 90px rgba(0,0,0,.38),inset 0 1px rgba(255,255,255,.04)!important}
    .scene-card{background:rgba(3,10,15,.3)!important}
    .scene-image{opacity:.8!important}

    @media(max-width:900px){
      .window-frame:before{left:50%;width:12px}.window-frame:after{display:none}.window-topbar{top:72px}.window-hud{left:16px;bottom:calc(7vh + 14px)}
      .window-picture{filter:brightness(.4) saturate(.8) contrast(1.06)}
    }
    @media(max-width:600px){
      .window-frame:before{display:none}.window-bottombar{bottom:5.5vh}.window-sill{height:7vh}.window-hud{bottom:calc(6vh + 10px)}.window-credit{display:none}
    }
  `;

  const style = document.createElement('style');
  style.id = 'pluvia-window-style';
  style.textContent = css;
  document.head.appendChild(style);

  const windowLayer = document.createElement('div');
  windowLayer.className = 'pluvia-window';
  windowLayer.setAttribute('aria-hidden','true');
  windowLayer.innerHTML = `
    <img class="window-picture current" alt="" />
    <img class="window-picture next" alt="" />
    <div class="window-weather-tone"></div>
    <div class="window-reflection"></div>
    <div class="window-droplets"></div>
    <div class="window-room-shadow"></div>
    <div class="window-frame"></div>
    <div class="window-topbar"></div>
    <div class="window-bottombar"></div>
    <div class="window-sill"></div>`;
  document.body.prepend(windowLayer);

  const hud = document.createElement('div');
  hud.className = 'window-hud';
  hud.innerHTML = `
    <div class="window-hud-main">
      <small>OUTSIDE YOUR WINDOW</small>
      <strong id="windowLandmark">Tokyo Tower</strong>
      <span id="windowCity">Tokyo · Japan</span>
    </div>
    <a class="window-credit" id="windowCredit" target="_blank" rel="noopener noreferrer">PHOTO SOURCE ↗</a>`;
  document.body.appendChild(hud);

  const dropletLayer = windowLayer.querySelector('.window-droplets');
  for(let i=0;i<38;i++){
    const d=document.createElement('i'); d.className='window-drop';
    const size=(4+Math.random()*13).toFixed(1)+'px';
    d.style.setProperty('--s',size);
    d.style.setProperty('--x',(Math.random()*100).toFixed(2)+'%');
    d.style.setProperty('--y',(4+Math.random()*82).toFixed(2)+'%');
    d.style.setProperty('--r',(-18+Math.random()*36).toFixed(1)+'deg');
    d.style.setProperty('--tail',(8+Math.random()*45).toFixed(0)+'px');
    dropletLayer.appendChild(d);
  }

  const currentImg = windowLayer.querySelector('.window-picture.current');
  const nextImg = windowLayer.querySelector('.window-picture.next');
  const landmarkEl = hud.querySelector('#windowLandmark');
  const cityEl = hud.querySelector('#windowCity');
  const creditEl = hud.querySelector('#windowCredit');
  let active = 'tokyo';
  let swapTimer;

  function fallbackFromScene(){
    const scene=document.querySelector('#sceneImage');
    return scene && scene.src ? scene.src : '';
  }

  function setView(id, instant=false){
    const view=views[id]; if(!view || (id===active && currentImg.src)) return;
    active=id;
    landmarkEl.textContent=view.landmark;
    cityEl.textContent=`${view.name} · ${view.language}`;
    creditEl.textContent=view.credit + ' ↗';
    creditEl.href=view.source;

    const loader=new Image();
    loader.onload=()=>{
      if(instant || !currentImg.src){
        currentImg.src=view.image;
        currentImg.style.objectPosition=view.position;
        currentImg.style.opacity='1';
        return;
      }
      nextImg.src=view.image;
      nextImg.style.objectPosition=view.position;
      windowLayer.classList.add('switching');
      clearTimeout(swapTimer);
      swapTimer=setTimeout(()=>{
        currentImg.src=view.image;
        currentImg.style.objectPosition=view.position;
        nextImg.src='';
        windowLayer.classList.remove('switching');
      },820);
    };
    loader.onerror=()=>{
      const fallback=fallbackFromScene();
      if(fallback){
        currentImg.src=fallback;
        currentImg.style.objectPosition='50% 50%';
      }
    };
    loader.src=view.image;
  }

  const selectedCity=document.querySelector('#selectedCity');
  function idFromSelected(){
    const name=(selectedCity?.textContent||'').trim().toLowerCase();
    return Object.keys(views).find(k=>views[k].name.toLowerCase()===name);
  }
  if(selectedCity){
    new MutationObserver(()=>{const id=idFromSelected(); if(id)setView(id)}).observe(selectedCity,{childList:true,characterData:true,subtree:true});
  }
  document.addEventListener('click',e=>{
    const hit=e.target.closest('[data-city]');
    if(hit && views[hit.dataset.city]) setView(hit.dataset.city);
  },true);

  // Hook reserved for the next upgrade: native-language rain songs per city.
  window.PluviaCityExperience = {
    views,
    getActiveCity:()=>active,
    getNativeLanguage:()=>views[active]?.language || ''
  };

  setView('tokyo',true);
})();