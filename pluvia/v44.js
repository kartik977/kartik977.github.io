(() => {
  const button = document.querySelector('.immersive-music-btn');
  const selectedCity = document.querySelector('#selectedCity');
  if (!button) return;

  const catalog = {
    tokyo: [
      {title:'Rain', artist:'Hata Motohiro', preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/85/ce/64/85ce6424-0f8d-b1eb-3524-c21e352f9c7d/mzaf_17028835718644657456.plus.aac.ep.m4a'},
      {title:'Rainy Blue', artist:'Hideaki Tokunaga', preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/2b/44/06/2b4406e6-d541-1bfe-e3ea-bfe3a80eaa48/mzaf_8939945164144576854.plus.aac.ep.m4a'},
      {title:'Endless Rain', artist:'X JAPAN', preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c5/10/32/c51032bc-b0b7-37a0-bd1f-dae0a0223b40/mzaf_4274219543313634925.plus.aac.ep.m4a'}
    ],
    mumbai: [
      {title:'Barso Re', artist:'A.R. Rahman, Shreya Ghoshal & Uday Majumdar', preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/64/c9/32/64c932f0-4109-6760-2002-130797769cff/mzaf_1950037304989864945.plus.aac.ep.m4a'},
      {title:'Rimjhim Gire Sawan', artist:'Kishore Kumar', preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e0/d3/73/e0d373ff-7eae-63f0-3fa1-7e079e5fec16/mzaf_3865286795455428981.plus.aac.ep.m4a'},
      {title:'Tip Tip Barsa Paani', artist:'Alka Yagnik & Udit Narayan', preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/7d/e0/52/7de052c6-aafd-357a-e2ff-6cc2b3b3dc6c/mzaf_14632981977655830883.plus.aac.ep.m4a'}
    ],
    london: [
      {title:'Set Fire to the Rain', artist:'Adele', preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/96/8b/3f/968b3f92-f082-c8c2-47ba-ab7add22dfdc/mzaf_13981153720371020318.plus.aac.ep.m4a'},
      {title:'Here Comes the Rain Again', artist:'Eurythmics', preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/72/fe/ce/72fece70-89a0-1b3a-fa4a-ad058dde3917/mzaf_3433349509748663983.plus.aac.ep.m4a'},
      {title:'Rain', artist:'The Beatles', preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/86/3c/dc/863cdcac-0d28-94a0-15d0-a01f167432fd/mzaf_9258319708601389636.plus.aac.ep.m4a'}
    ],
    seattle: [
      {title:'Have You Ever Seen the Rain?', artist:'Creedence Clearwater Revival', preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a7/55/f7/a755f7d7-d934-126d-a883-05e79eaa9444/mzaf_13855660925334657413.plus.aac.ep.m4a'},
      {title:'Rainy Days And Mondays', artist:'Carpenters', preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/fd/48/d9/fd48d97c-7f8e-1bc8-8224-614e7d44adce/mzaf_8327188197888161132.plus.aac.ep.m4a'},
      {title:'November Rain', artist:"Guns N' Roses", preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/67/6b/0c/676b0cc6-2f6e-555a-b4f1-a514ab21adb4/mzaf_1533663258923831215.plus.aac.ep.m4a'}
    ],
    singapore: [
      {title:'下雨天', artist:'Nan Quan Mama', preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/e2/f3/a3/e2f3a33f-fdaf-c21b-1314-ede2a3d5e2a8/mzaf_10057316662723848184.plus.aac.ep.m4a'},
      {title:'雨一直下', artist:'Phil Chang', preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/8e/4c/0a/8e4c0a4e-2f08-a7ce-a3fb-46684430afd6/mzaf_17092125316344372605.plus.aac.ep.m4a'},
      {title:'雨愛', artist:'Rainie Yang', preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f4/a8/2a/f4a82a28-5ffd-104c-cbca-078f4bafb731/mzaf_1730419277821962479.plus.aac.ep.m4a'}
    ],
    saopaulo: [
      {title:'Chove Chuva', artist:'Jorge Ben Jor', preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/5c/33/d4/5c33d404-1858-7b31-86b3-ae5309666870/mzaf_15401932118259935778.plus.aac.ep.m4a'},
      {title:'Águas de Março', artist:'Elis Regina & Antônio Carlos Jobim', preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/46/c9/83/46c98301-28e6-bc75-e495-55638bccca96/mzaf_9192636079966759712.plus.aac.ep.m4a'},
      {title:'Quando a Chuva Passar', artist:'Ivete Sangalo', preview:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/0f/65/9c/0f659ca3-41b6-0b6b-248a-f26440d5b7c6/mzaf_15501571249927745280.plus.aac.ep.m4a'}
    ]
  };

  const cityNameToId = {
    tokyo:'tokyo', london:'london', mumbai:'mumbai', seattle:'seattle', singapore:'singapore',
    'são paulo':'saopaulo', 'sao paulo':'saopaulo'
  };

  const audio = new Audio();
  audio.preload = 'none';
  audio.crossOrigin = 'anonymous';

  let cityId = 'tokyo';
  let trackIndex = -1;

  function selectedId(){
    const name = selectedCity?.textContent?.trim().toLowerCase();
    return cityNameToId[name] || cityId;
  }

  function chooseTrack(id, preservePlayback = false){
    const list = catalog[id];
    if (!list?.length) return;
    const wasPlaying = preservePlayback && !audio.paused;
    cityId = id;
    let next = trackIndex;
    while (list.length > 1 && next === trackIndex) next = Math.floor(Math.random() * list.length);
    if (next < 0 || next >= list.length) next = Math.floor(Math.random() * list.length);
    trackIndex = next;
    const track = list[trackIndex];
    audio.pause();
    audio.src = track.preview;
    audio.currentTime = 0;
    button.dataset.track = track.title;
    button.dataset.artist = track.artist;
    button.title = `${track.title} — ${track.artist}`;
    sync();
    if (wasPlaying) audio.play().catch(() => {});
  }

  function sync(){
    const playing = !audio.paused && !audio.ended;
    button.classList.toggle('is-playing', playing);
    button.setAttribute('aria-label', playing ? 'Pause city rain music' : 'Play city rain music');
  }

  // Capture on the button itself so this handler runs before the older v4.3 bubble handler.
  // stopImmediatePropagation prevents that older handler from clicking the hidden radio control.
  button.addEventListener('click', async (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    if (!document.body.classList.contains('pluvia-city-immersive')) return;
    cityId = selectedId();
    if (!audio.src) chooseTrack(cityId, false);

    try {
      if (audio.paused) await audio.play();
      else audio.pause();
    } catch (_) {}
    sync();
  }, true);

  document.addEventListener('click', (event) => {
    const hit = event.target.closest('[data-city]');
    if (!hit || !catalog[hit.dataset.city]) return;
    const oldRadio = document.querySelector('.pluvia-radio');
    if (oldRadio?.classList.contains('playing')) {
      const oldToggle = document.querySelector('#radioToggle');
      oldToggle?.click();
    }
    chooseTrack(hit.dataset.city, false);
  }, false);

  if (selectedCity) {
    new MutationObserver(() => {
      const id = selectedId();
      if (id !== cityId) chooseTrack(id, false);
    }).observe(selectedCity, {childList:true, subtree:true, characterData:true});
  }

  audio.addEventListener('play', sync);
  audio.addEventListener('pause', sync);
  audio.addEventListener('ended', () => {
    chooseTrack(cityId, false);
    audio.play().catch(() => {});
  });

  // Pause the dedicated immersive player when the user exits the city scene.
  const bodyObserver = new MutationObserver(() => {
    if (!document.body.classList.contains('pluvia-city-immersive') && !audio.paused) audio.pause();
  });
  bodyObserver.observe(document.body, {attributes:true, attributeFilter:['class']});

  chooseTrack(selectedId(), false);
})();