(() => {
  const panel = document.querySelector('.pluvia-radio');
  const hero = document.querySelector('.hero');
  const heroStack = document.querySelector('.hero-stack');
  if (!panel || !hero || !heroStack) return;

  const style = document.createElement('style');
  style.id = 'pluvia-v42-mobile-radio';
  style.textContent = `
    @media (max-width:700px){
      .pluvia-radio.mobile-inline{
        position:relative!important;
        inset:auto!important;
        left:auto!important;
        right:auto!important;
        top:auto!important;
        bottom:auto!important;
        grid-column:1 / -1!important;
        width:100%!important;
        max-width:none!important;
        margin:18px 0 8px!important;
        z-index:45!important;
        transform:none!important;
        border-radius:20px!important;
        box-shadow:0 20px 55px rgba(0,0,0,.30)!important;
      }
      .pluvia-radio.mobile-inline .pluvia-radio-head{padding:10px 13px!important}
      .pluvia-radio.mobile-inline .pluvia-radio-body{
        grid-template-columns:44px minmax(0,1fr) auto!important;
        padding:11px 13px!important;
        gap:10px!important;
      }
      .pluvia-radio.mobile-inline .pluvia-radio-disc{width:44px!important;height:44px!important}
      .pluvia-radio.mobile-inline .pluvia-radio-note{display:none!important}
      .pluvia-radio.mobile-inline .pluvia-radio-copy strong{font-size:13px!important}
      .pluvia-radio.mobile-inline .pluvia-radio-copy span{font-size:9px!important}
      .pluvia-radio.mobile-inline .pluvia-radio-btn{width:36px!important;height:36px!important}
      .hero{padding-bottom:34px!important}
      .hero-stack{margin-top:8px!important}
      .window-hud{bottom:16px!important;opacity:.78}
    }

    @media (max-width:430px){
      .pluvia-radio.mobile-inline{margin-top:14px!important}
      .pluvia-radio.mobile-inline .pluvia-radio-lang{font-size:7px!important;letter-spacing:.08em!important}
      .pluvia-radio.mobile-inline .pluvia-radio-copy small{display:none!important}
      .pluvia-radio.mobile-inline .pluvia-radio-controls{gap:5px!important}
      .pluvia-radio.mobile-inline .pluvia-radio-btn{width:34px!important;height:34px!important}
      .pluvia-radio.mobile-inline .pluvia-radio-body{grid-template-columns:40px minmax(0,1fr) auto!important}
      .pluvia-radio.mobile-inline .pluvia-radio-disc{width:40px!important;height:40px!important}
    }
  `;
  document.head.appendChild(style);

  const mq = window.matchMedia('(max-width:700px)');

  function placeRadio(){
    if (mq.matches){
      if (panel.parentElement !== hero){
        hero.insertBefore(panel, heroStack);
      }
      panel.classList.add('mobile-inline');
    } else {
      if (panel.classList.contains('mobile-inline')){
        panel.classList.remove('mobile-inline');
        document.body.appendChild(panel);
      }
    }
  }

  placeRadio();
  if (mq.addEventListener) mq.addEventListener('change', placeRadio);
  else mq.addListener(placeRadio);
  window.addEventListener('orientationchange', () => setTimeout(placeRadio, 120), {passive:true});

  const version = document.querySelector('.closing .kicker');
  if (version) version.textContent = 'PLUVIA / 04.2';
})();