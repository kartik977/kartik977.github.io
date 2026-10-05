(() => {
  const style = document.createElement('style');
  style.id = 'pluvia-performance-style';
  style.textContent = `
    html.pluvia-performance .ambient,
    html.pluvia-performance .cloud{display:none!important}

    html.pluvia-performance .glass,
    html.pluvia-performance .pluvia-radio,
    html.pluvia-performance .immersive-detail-card,
    html.pluvia-performance .immersive-hold-hint,
    html.pluvia-performance .soundscape-panel,
    html.pluvia-performance .environment-panel,
    html.pluvia-performance .environment-scrim,
    html.pluvia-performance .rain-roulette-btn,
    html.pluvia-performance .environment-btn{
      backdrop-filter:none!important;
      -webkit-backdrop-filter:none!important;
    }

    html.pluvia-performance .window-reflection{
      filter:none!important;
      mix-blend-mode:normal!important;
      opacity:.12!important;
    }
    html.pluvia-performance .living-glass-bloom{
      filter:none!important;
      mix-blend-mode:normal!important;
      opacity:.1!important;
    }
    html.pluvia-performance .living-streak{display:none!important}
    html.pluvia-performance .v501-glass-drop:nth-of-type(n+9){display:none!important}
    html.pluvia-performance .window-drop:nth-of-type(n+19){display:none!important}
    html.pluvia-performance .window-picture{
      transition:opacity .45s ease!important;
      will-change:auto!important;
    }
    html.pluvia-performance .window-reflection{will-change:auto!important}
    html.pluvia-performance body[data-environment="train"] .env-glow,
    html.pluvia-performance body[data-environment="car"] .env-wiper{animation:none!important}

    @media(max-width:760px){
      html.pluvia-performance .v501-glass-drop:nth-of-type(n+7){display:none!important}
      html.pluvia-performance .window-drop:nth-of-type(n+13){display:none!important}
      html.pluvia-performance #fogCanvas{opacity:.72}
    }
  `;
  document.head.appendChild(style);

  let enabled = false;
  function enable(reason='auto'){
    if (enabled) return;
    enabled = true;
    document.documentElement.classList.add('pluvia-performance');
    document.documentElement.dataset.performanceReason = reason;
    try { sessionStorage.setItem('pluviaPerformanceSession','1'); } catch (_) {}
  }

  const mqMobile = matchMedia('(max-width:900px), (pointer:coarse)').matches;
  const saveData = navigator.connection?.saveData === true;
  const lowMemory = typeof navigator.deviceMemory === 'number' && navigator.deviceMemory <= 4;
  const lowCpu = typeof navigator.hardwareConcurrency === 'number' && navigator.hardwareConcurrency <= 4;
  let sessionPerf = false;
  try { sessionPerf = sessionStorage.getItem('pluviaPerformanceSession') === '1'; } catch (_) {}

  if (mqMobile || saveData || lowMemory || lowCpu || sessionPerf) {
    enable(mqMobile ? 'mobile' : 'device');
  }

  // Short FPS watchdog. If the full desktop path is struggling, downgrade automatically.
  if (!enabled && typeof requestAnimationFrame === 'function') {
    let frames = 0;
    let start = 0;
    function sample(ts){
      if (!start) start = ts;
      frames++;
      const elapsed = ts - start;
      if (elapsed < 1800) {
        requestAnimationFrame(sample);
      } else {
        const fps = frames / (elapsed / 1000);
        if (fps < 48) enable('fps');
      }
    }
    requestAnimationFrame(sample);
  }

  // Recheck briefly after entering immersive mode, where glass effects become active.
  let checking = false;
  new MutationObserver(() => {
    if (enabled || checking || !document.body.classList.contains('pluvia-city-immersive')) return;
    checking = true;
    let frames = 0, start = 0;
    function sampleImmersive(ts){
      if (!start) start = ts;
      frames++;
      const elapsed = ts - start;
      if (elapsed < 1200) requestAnimationFrame(sampleImmersive);
      else {
        checking = false;
        const fps = frames / (elapsed / 1000);
        if (fps < 45) enable('immersive-fps');
      }
    }
    requestAnimationFrame(sampleImmersive);
  }).observe(document.body,{attributes:true,attributeFilter:['class']});

  window.PluviaPerformance = { enable, isEnabled: () => enabled };
})();