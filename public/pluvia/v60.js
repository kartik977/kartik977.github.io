(() => {
  const environments = {
    cafe:      {name:'Café', icon:'☕', note:'Warm lamps, wet glass, a table by the window.'},
    apartment: {name:'Apartment', icon:'⌂', note:'Quiet curtains and a soft room glow.'},
    hotel:     {name:'Hotel room', icon:'▣', note:'Heavy drapes, polished glass and late-night calm.'},
    train:     {name:'Train', icon:'▤', note:'A rounded carriage window with passing light.'},
    car:       {name:'Car windshield', icon:'◇', note:'Dashboard shadows, pillars and a working wiper.'},
    rooftop:   {name:'Rooftop', icon:'△', note:'Open air, a low parapet and the whole rainy skyline.'}
  };

  const style = document.createElement('style');
  style.id = 'pluvia-v60-style';
  style.textContent = `
    /* PLUVIA 6.0 — Choose Your Window */
    .environment-btn{
      min-height:54px;padding:0 21px;border-radius:999px;border:1px solid rgba(223,241,249,.14);
      background:linear-gradient(145deg,rgba(7,17,25,.54),rgba(5,12,18,.36));color:#edf6fa;
      display:inline-flex;align-items:center;gap:10px;cursor:pointer;font:600 13px/1 "Manrope",sans-serif;
      backdrop-filter:blur(16px) saturate(125%);-webkit-backdrop-filter:blur(16px) saturate(125%);
      box-shadow:0 16px 42px rgba(0,0,0,.22),inset 0 1px rgba(255,255,255,.05);
      transition:transform .24s ease,border-color .24s ease,background .24s ease;
    }
    .environment-btn:hover{transform:translateY(-2px);border-color:color-mix(in srgb,var(--accent) 48%,rgba(255,255,255,.13));background:linear-gradient(145deg,color-mix(in srgb,var(--accent) 9%,rgba(7,17,25,.62)),rgba(5,12,18,.42))}
    .environment-btn .env-icon{font-size:16px;opacity:.92}.environment-btn small{font:700 8px/1 "Manrope",sans-serif;letter-spacing:.12em;color:#829cab;text-transform:uppercase}

    .environment-panel{
      position:fixed;z-index:210;left:50%;top:50%;width:min(760px,calc(100vw - 34px));max-height:min(690px,calc(100dvh - 34px));overflow:auto;
      transform:translate(-50%,-47%) scale(.97);opacity:0;visibility:hidden;pointer-events:none;
      border:1px solid rgba(226,243,251,.14);border-radius:30px;background:linear-gradient(145deg,rgba(5,15,22,.94),rgba(4,10,16,.9));
      backdrop-filter:blur(30px) saturate(135%);-webkit-backdrop-filter:blur(30px) saturate(135%);
      box-shadow:0 42px 130px rgba(0,0,0,.62),inset 0 1px rgba(255,255,255,.06);color:#edf6fa;
      transition:opacity .28s ease,transform .28s ease,visibility 0s linear .3s;
    }
    .environment-panel.open{opacity:1;visibility:visible;pointer-events:auto;transform:translate(-50%,-50%) scale(1);transition:opacity .28s ease,transform .28s ease}
    .environment-scrim{position:fixed;z-index:205;inset:0;background:rgba(0,4,7,.54);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);opacity:0;visibility:hidden;pointer-events:none;transition:.28s ease}
    .environment-scrim.open{opacity:1;visibility:visible;pointer-events:auto}
    .environment-head{display:flex;align-items:flex-start;justify-content:space-between;gap:20px;padding:25px 26px 19px;border-bottom:1px solid rgba(255,255,255,.075)}
    .environment-head small{display:block;font:700 8px/1 "Manrope",sans-serif;letter-spacing:.2em;color:#819cab;margin-bottom:10px}.environment-head h3{margin:0;font:600 clamp(28px,5vw,48px)/.98 "Playfair Display",serif;letter-spacing:-.035em}.environment-head p{max-width:480px;margin:10px 0 0;color:#91a6b3;font-size:12px;line-height:1.55}
    .environment-close{width:42px;height:42px;border-radius:50%;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.035);color:#e7f1f6;font-size:20px;cursor:pointer}
    .environment-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;padding:18px 20px 22px}
    .environment-choice{position:relative;min-height:160px;text-align:left;border-radius:22px;border:1px solid rgba(225,242,250,.1);background:linear-gradient(145deg,rgba(255,255,255,.045),rgba(255,255,255,.018));padding:18px;cursor:pointer;color:#edf6fa;overflow:hidden;transition:transform .22s ease,border-color .22s ease,background .22s ease}
    .environment-choice:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 82% 10%,color-mix(in srgb,var(--accent) 12%,transparent),transparent 43%);opacity:.8}.environment-choice:hover{transform:translateY(-3px);border-color:rgba(224,241,249,.2);background:linear-gradient(145deg,rgba(255,255,255,.065),rgba(255,255,255,.025))}
    .environment-choice.active{border-color:color-mix(in srgb,var(--accent) 50%,rgba(255,255,255,.1));box-shadow:0 0 0 1px color-mix(in srgb,var(--accent) 14%,transparent),0 20px 50px rgba(0,0,0,.2)}
    .environment-choice .choice-icon{position:relative;display:grid;place-items:center;width:42px;height:42px;border-radius:14px;background:rgba(255,255,255,.055);font-size:20px;margin-bottom:22px}.environment-choice strong{position:relative;display:block;font:600 17px/1 "Manrope",sans-serif}.environment-choice span{position:relative;display:block;margin-top:8px;color:#859ca9;font-size:10px;line-height:1.45}.environment-choice .choice-check{position:absolute;right:15px;top:15px;width:18px;height:18px;border-radius:50%;border:1px solid rgba(255,255,255,.13)}.environment-choice.active .choice-check{background:var(--accent);border-color:var(--accent);box-shadow:0 0 16px color-mix(in srgb,var(--accent) 42%,transparent)}

    .environment-stage{position:absolute;inset:0;z-index:10;pointer-events:none;overflow:hidden;transition:opacity .45s ease}
    .env-left,.env-right,.env-top,.env-bottom,.env-prop-a,.env-prop-b,.env-glow,.env-wiper{position:absolute;pointer-events:none;transition:all .55s ease}

    /* Café */
    body[data-environment="cafe"] .env-left{left:0;top:0;bottom:0;width:7vw;background:linear-gradient(90deg,#090806,rgba(24,18,12,.76),rgba(10,8,6,.16));box-shadow:18px 0 35px rgba(0,0,0,.28)}
    body[data-environment="cafe"] .env-right{right:0;top:0;bottom:0;width:7vw;background:linear-gradient(-90deg,#090806,rgba(24,18,12,.72),rgba(10,8,6,.12));box-shadow:-18px 0 35px rgba(0,0,0,.28)}
    body[data-environment="cafe"] .env-bottom{left:0;right:0;bottom:0;height:13vh;background:linear-gradient(180deg,rgba(38,25,15,.18),#120d09 26%,#080604);box-shadow:0 -16px 42px rgba(0,0,0,.65)}
    body[data-environment="cafe"] .env-prop-a,body[data-environment="cafe"] .env-prop-b{top:0;width:2px;height:18vh;background:linear-gradient(#111,rgba(40,31,22,.8));box-shadow:0 0 18px #000}
    body[data-environment="cafe"] .env-prop-a{left:23%}body[data-environment="cafe"] .env-prop-b{right:24%}
    body[data-environment="cafe"] .env-prop-a:after,body[data-environment="cafe"] .env-prop-b:after{content:"";position:absolute;left:50%;bottom:-20px;width:55px;height:34px;transform:translateX(-50%);border-radius:50% 50% 35% 35%;background:radial-gradient(circle at 50% 42%,rgba(255,215,151,.78),rgba(123,79,37,.34) 40%,rgba(18,12,8,.92) 70%);box-shadow:0 12px 55px rgba(255,175,85,.15)}
    body[data-environment="cafe"] .env-glow{inset:0;background:radial-gradient(circle at 23% 19%,rgba(255,187,99,.1),transparent 23%),radial-gradient(circle at 76% 18%,rgba(255,187,99,.08),transparent 24%)}

    /* Apartment */
    body[data-environment="apartment"] .env-left,body[data-environment="apartment"] .env-right{top:0;bottom:0;width:15vw;max-width:210px;background:repeating-linear-gradient(90deg,rgba(12,15,18,.98) 0 17px,rgba(28,34,39,.94) 18px 34px,rgba(8,11,14,.96) 35px 48px);filter:drop-shadow(0 12px 28px rgba(0,0,0,.5))}
    body[data-environment="apartment"] .env-left{left:-5vw;border-radius:0 45% 45% 0}body[data-environment="apartment"] .env-right{right:-5vw;border-radius:45% 0 0 45%}
    body[data-environment="apartment"] .env-bottom{left:0;right:0;bottom:0;height:8vh;background:linear-gradient(#1a2024,#080b0d 38%,#030506);box-shadow:0 -10px 35px rgba(0,0,0,.58)}
    body[data-environment="apartment"] .env-glow{right:4vw;bottom:10vh;width:240px;height:240px;border-radius:50%;background:radial-gradient(circle,rgba(255,191,120,.14),transparent 64%)}

    /* Hotel */
    body[data-environment="hotel"] .env-left,body[data-environment="hotel"] .env-right{top:-4vh;bottom:0;width:18vw;max-width:250px;background:repeating-linear-gradient(90deg,#151312 0 21px,#292421 22px 43px,#0d0c0c 44px 61px);filter:drop-shadow(0 18px 35px rgba(0,0,0,.7))}
    body[data-environment="hotel"] .env-left{left:-7vw;border-radius:0 55% 35% 0}body[data-environment="hotel"] .env-right{right:-7vw;border-radius:55% 0 0 35%}
    body[data-environment="hotel"] .env-top{left:0;right:0;top:0;height:7vh;background:linear-gradient(#161311,#090807);box-shadow:0 12px 35px rgba(0,0,0,.48)}
    body[data-environment="hotel"] .env-bottom{left:0;right:0;bottom:0;height:11vh;background:linear-gradient(#302923,#16110e 40%,#080605);box-shadow:0 -16px 42px rgba(0,0,0,.6)}
    body[data-environment="hotel"] .env-glow{left:7vw;bottom:14vh;width:180px;height:220px;background:radial-gradient(ellipse at center,rgba(255,193,121,.16),transparent 62%)}

    /* Train */
    body[data-environment="train"] .pluvia-window{background:#05080a}
    body[data-environment="train"] .window-frame,body[data-environment="train"] .window-topbar,body[data-environment="train"] .window-bottombar,body[data-environment="train"] .window-sill{opacity:0!important}
    body[data-environment="train"] .environment-stage{inset:4vh 4vw 7vh;border:20px solid #171d20;border-radius:8vw;box-shadow:0 0 0 2px rgba(255,255,255,.04),inset 0 0 0 3px #070a0c,0 0 80px rgba(0,0,0,.75)}
    body[data-environment="train"] .env-top{left:-20px;right:-20px;top:-20px;height:58px;background:linear-gradient(#2a3237,#12171a);border-radius:7vw 7vw 0 0}
    body[data-environment="train"] .env-bottom{left:-20px;right:-20px;bottom:-20px;height:72px;background:linear-gradient(#252d31,#0d1113 58%);border-radius:0 0 7vw 7vw}
    body[data-environment="train"] .env-glow{inset:0;background:repeating-linear-gradient(90deg,transparent 0 13vw,rgba(221,239,248,.035) 14vw,transparent 15vw 26vw);animation:trainLightSweep 5s linear infinite}

    /* Car */
    body[data-environment="car"] .window-frame,body[data-environment="car"] .window-topbar,body[data-environment="car"] .window-bottombar,body[data-environment="car"] .window-sill{opacity:0!important}
    body[data-environment="car"] .env-left{left:-4vw;top:-4vh;bottom:10vh;width:12vw;background:linear-gradient(112deg,#050607 0 44%,#252c30 47% 58%,rgba(5,7,8,.15) 62%);transform:skewX(-5deg);filter:drop-shadow(12px 0 25px rgba(0,0,0,.7))}
    body[data-environment="car"] .env-right{right:-4vw;top:-4vh;bottom:10vh;width:12vw;background:linear-gradient(-112deg,#050607 0 44%,#252c30 47% 58%,rgba(5,7,8,.15) 62%);transform:skewX(5deg);filter:drop-shadow(-12px 0 25px rgba(0,0,0,.7))}
    body[data-environment="car"] .env-bottom{left:-5vw;right:-5vw;bottom:-3vh;height:22vh;border-radius:50% 50% 0 0/28% 28% 0 0;background:linear-gradient(#20272b 0,#0b0f11 32%,#030405 80%);box-shadow:0 -22px 55px rgba(0,0,0,.7),inset 0 1px rgba(255,255,255,.035)}
    body[data-environment="car"] .env-wiper{display:block;left:50%;bottom:13vh;width:46vw;height:9px;border-radius:999px;background:linear-gradient(90deg,#060708,#20262a 18% 82%,#060708);transform-origin:2% 50%;transform:rotate(-7deg);box-shadow:0 3px 9px rgba(0,0,0,.7)}
    body[data-environment="car"] .env-wiper:after{content:"";position:absolute;left:0;top:2px;width:12px;height:26px;border-radius:5px;background:#101518;transform:translate(-3px,-8px)}
    body[data-environment="car"].pluvia-city-immersive .env-wiper{animation:carWiper 4.8s ease-in-out infinite}

    /* Rooftop */
    body[data-environment="rooftop"] .window-frame,body[data-environment="rooftop"] .window-topbar,body[data-environment="rooftop"] .window-bottombar,body[data-environment="rooftop"] .window-sill,body[data-environment="rooftop"] .window-reflection{opacity:0!important}
    body[data-environment="rooftop"] .window-room-shadow{background:linear-gradient(180deg,rgba(0,0,0,.06),transparent 50%,rgba(0,0,0,.28))!important;box-shadow:inset 0 0 90px rgba(0,0,0,.2)!important}
    body[data-environment="rooftop"] .env-bottom{left:-3vw;right:-3vw;bottom:-2vh;height:13vh;background:linear-gradient(#353b3f 0,#14191c 18%,#07090a 100%);box-shadow:0 -12px 28px rgba(0,0,0,.42)}
    body[data-environment="rooftop"] .env-bottom:before{content:"";position:absolute;left:0;right:0;top:0;height:10px;background:linear-gradient(#59636a,#252b2f);box-shadow:0 -1px rgba(255,255,255,.06)}
    body[data-environment="rooftop"] .env-prop-a{right:12vw;bottom:10vh;width:2px;height:26vh;background:#11171a;box-shadow:0 0 8px #000}body[data-environment="rooftop"] .env-prop-a:before,body[data-environment="rooftop"] .env-prop-a:after{content:"";position:absolute;right:0;width:13vw;height:1px;background:#172024;transform-origin:right}body[data-environment="rooftop"] .env-prop-a:before{top:28%;transform:rotate(8deg)}body[data-environment="rooftop"] .env-prop-a:after{top:54%;transform:rotate(-6deg)}

    body[data-environment="cafe"] .window-frame,body[data-environment="hotel"] .window-frame{opacity:.7}
    body[data-environment="apartment"] .window-frame{opacity:.55}

    @keyframes carWiper{0%,72%,100%{transform:rotate(-7deg)}79%{transform:rotate(-42deg)}87%{transform:rotate(13deg)}94%{transform:rotate(-7deg)}}
    @keyframes trainLightSweep{0%{transform:translateX(-20vw)}100%{transform:translateX(20vw)}}

    @media(max-width:760px){
      .environment-btn{width:100%;justify-content:center;min-height:52px}
      .environment-grid{grid-template-columns:1fr 1fr;padding:14px}.environment-choice{min-height:145px}.environment-head{padding:20px 19px 16px}.environment-head p{font-size:11px}
      body[data-environment="cafe"] .env-left,body[data-environment="cafe"] .env-right{width:5vw}
      body[data-environment="train"] .environment-stage{inset:2.5vh 3vw 5vh;border-width:13px;border-radius:12vw}
      body[data-environment="car"] .env-left,body[data-environment="car"] .env-right{width:16vw}.env-wiper{max-width:none}
    }
    @media(max-width:480px){.environment-grid{grid-template-columns:1fr}.environment-choice{min-height:126px}.environment-choice .choice-icon{margin-bottom:14px}}
    @media(prefers-reduced-motion:reduce){.env-glow,.env-wiper{animation:none!important}.environment-panel,.environment-scrim{transition:none!important}}
  `;
  document.head.appendChild(style);

  const heroActions = document.querySelector('.hero-actions');
  const windowLayer = document.querySelector('.pluvia-window');
  if (!heroActions || !windowLayer) return;

  const button = document.createElement('button');
  button.className = 'environment-btn';
  button.type = 'button';
  button.innerHTML = '<span class="env-icon">▦</span><span>Choose your window</span><small id="environmentButtonLabel">Café</small>';
  heroActions.appendChild(button);
  const buttonLabel = button.querySelector('#environmentButtonLabel');

  const scrim = document.createElement('div');
  scrim.className = 'environment-scrim';
  const panel = document.createElement('section');
  panel.className = 'environment-panel';
  panel.setAttribute('role','dialog');
  panel.setAttribute('aria-modal','true');
  panel.setAttribute('aria-label','Choose your Pluvia environment');
  panel.innerHTML = `
    <div class="environment-head">
      <div><small>PLUVIA / 06 · CHOOSE YOUR WINDOW</small><h3>Where are you watching from?</h3><p>The same city and live rain, seen from a different place. Your choice stays with you as you travel between skies.</p></div>
      <button class="environment-close" type="button" aria-label="Close environment picker">×</button>
    </div>
    <div class="environment-grid">
      ${Object.entries(environments).map(([id,e]) => `<button class="environment-choice" type="button" data-environment-choice="${id}"><span class="choice-check"></span><span class="choice-icon">${e.icon}</span><strong>${e.name}</strong><span>${e.note}</span></button>`).join('')}
    </div>`;
  document.body.append(scrim,panel);

  const stage = document.createElement('div');
  stage.className = 'environment-stage';
  stage.setAttribute('aria-hidden','true');
  stage.innerHTML = '<i class="env-left"></i><i class="env-right"></i><i class="env-top"></i><i class="env-bottom"></i><i class="env-prop-a"></i><i class="env-prop-b"></i><i class="env-glow"></i><i class="env-wiper"></i>';
  windowLayer.appendChild(stage);

  let current = 'cafe';
  try {
    const saved = localStorage.getItem('pluviaEnvironment60');
    if (saved && environments[saved]) current = saved;
  } catch (_) {}

  function apply(id){
    if (!environments[id]) return;
    current = id;
    document.body.dataset.environment = id;
    buttonLabel.textContent = environments[id].name;
    [...panel.querySelectorAll('[data-environment-choice]')].forEach(choice => choice.classList.toggle('active',choice.dataset.environmentChoice === id));
    try { localStorage.setItem('pluviaEnvironment60',id); } catch (_) {}
    window.PluviaEnvironment = {get:()=>current,set:apply,environments};
  }

  function open(){
    if (document.body.classList.contains('pluvia-city-immersive')) return;
    panel.classList.add('open');scrim.classList.add('open');
    requestAnimationFrame(()=>panel.querySelector(`[data-environment-choice="${current}"]`)?.focus());
  }
  function close(){panel.classList.remove('open');scrim.classList.remove('open');button.focus({preventScroll:true})}

  button.addEventListener('click',open);
  scrim.addEventListener('click',close);
  panel.querySelector('.environment-close').addEventListener('click',close);
  panel.addEventListener('click',event=>{
    const choice = event.target.closest('[data-environment-choice]');
    if (!choice) return;
    apply(choice.dataset.environmentChoice);
    setTimeout(close,180);
  });
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&panel.classList.contains('open')){event.preventDefault();close();}});

  // Never let the chooser linger over an immersive city transition.
  new MutationObserver(()=>{if(document.body.classList.contains('pluvia-city-immersive')){panel.classList.remove('open');scrim.classList.remove('open');}}).observe(document.body,{attributes:true,attributeFilter:['class']});

  apply(current);
  const version = document.querySelector('.closing .kicker');
  if (version) version.textContent = 'PLUVIA / 06.0';
})();