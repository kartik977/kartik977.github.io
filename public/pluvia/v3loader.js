(() => {
  const world = document.querySelector('#world');
  const pill = document.querySelector('.coming-pill');
  if (!world) return;

  const isDesktop = matchMedia('(min-width: 900px) and (pointer:fine)').matches;
  const saveData = navigator.connection?.saveData === true;
  const lowMemory = typeof navigator.deviceMemory === 'number' && navigator.deviceMemory <= 4;

  if (!isDesktop || saveData || lowMemory) {
    document.documentElement.classList.add('pluvia-lite-world');
    if (pill) pill.textContent = 'PLUVIA 6.0 · LIGHTWEIGHT WORLD';
    return;
  }

  let loaded = false;
  const load = () => {
    if (loaded) return;
    loaded = true;
    import('./v3.js?v=perf3').catch(() => {
      document.documentElement.classList.add('pluvia-lite-world');
      if (pill) pill.textContent = 'PLUVIA 6.0 · LIGHTWEIGHT WORLD';
    });
  };

  const observer = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) {
      observer.disconnect();
      load();
    }
  }, { rootMargin: '250px 0px' });

  observer.observe(world);
})();