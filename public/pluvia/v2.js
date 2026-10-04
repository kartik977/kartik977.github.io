(() => {
  const scenes = {
    tokyo:{name:"Tokyo",country:"JAPAN",tag:"Neon reflections and midnight crossings.",accent:"#98caff",image:"https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=82"},
    london:{name:"London",country:"UNITED KINGDOM",tag:"Soft grey skies over the Thames.",accent:"#bdd5df",image:"https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=82"},
    mumbai:{name:"Mumbai",country:"INDIA",tag:"Monsoon energy on the Arabian Sea.",accent:"#8fe4df",image:"https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1400&q=82"},
    seattle:{name:"Seattle",country:"UNITED STATES",tag:"Evergreen calm under silver rain.",accent:"#9bd8ff",image:"https://images.unsplash.com/photo-1502175353174-a7a70e73b362?auto=format&fit=crop&w=1400&q=82"},
    singapore:{name:"Singapore",country:"SINGAPORE",tag:"Warm nights, tropical downpours, glass towers.",accent:"#9fe8cc",image:"https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1400&q=82"},
    saopaulo:{name:"São Paulo",country:"BRAZIL",tag:"A vast skyline lit through the storm.",accent:"#a5c6ff",image:"https://images.unsplash.com/photo-1543059080-f9b1272213d5?auto=format&fit=crop&w=1400&q=82"}
  };

  const style=document.createElement('style');
  style.textContent=`
    .hero{grid-template-columns:1.05fr .95fr!important;gap:7vw!important}.hero-stack{display:flex;flex-direction:column;gap:18px;align-items:stretch}.hero-stack .weather-card{max-width:420px;width:100%;margin-left:auto}
    .scene-card{position:relative;min-height:292px;border-radius:28px;overflow:hidden;margin-left:auto;max-width:420px;width:100%;background:#07131d;box-shadow:var(--shadow);border:1px solid rgba(255,255,255,.13)}
    .scene-image{display:block;width:100%;height:292px;object-fit:cover;filter:saturate(1.06) contrast(1.03) brightness(.78);transform:scale(1.01);transition:opacity .35s ease,transform .8s ease}.scene-card:hover .scene-image{transform:scale(1.045)}.scene-card.switching .scene-image{opacity:.25}
    .scene-card:after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(4,12,18,.9),rgba(4,12,18,.12) 55%,rgba(255,255,255,.02));pointer-events:none}.scene-overlay{position:absolute;inset:0;padding:22px;display:flex;flex-direction:column;justify-content:space-between;z-index:2}.scene-caption{display:flex;justify-content:space-between;align-items:flex-end;gap:18px}.scene-caption h3{margin:0;font:600 31px/1.05 "Manrope",sans-serif}.scene-caption p{margin:9px 0 0;color:#d7e3ea;font-size:13px;line-height:1.45;max-width:235px}.scene-badge{padding:9px 11px;border-radius:999px;border:1px solid rgba(255,255,255,.18);background:rgba(7,18,26,.42);backdrop-filter:blur(12px);font:600 8px/1 "Manrope",sans-serif;letter-spacing:.13em;color:#d6e1e8;white-space:nowrap}
    .city-card{padding:0!important;min-height:292px!important}.city-card-thumb-wrap{height:124px;overflow:hidden;position:relative}.city-card-thumb-wrap:after{content:"";position:absolute;inset:0;background:linear-gradient(to bottom,transparent,rgba(4,10,14,.55))}.city-card-thumb{width:100%;height:100%;object-fit:cover;display:block;opacity:.82;transform:scale(1.025);transition:transform .45s ease,opacity .45s ease}.city-card:hover .city-card-thumb{transform:scale(1.08);opacity:.96}.city-card-body{padding:18px 20px 20px;position:relative;z-index:2}.city-card .city-rain{position:static!important;margin-top:18px}.city-tagline{margin:9px 0 0;color:#91a6b5;font-size:11px;line-height:1.45;max-width:90%}
    @media(max-width:900px){.hero{grid-template-columns:1fr!important}.hero-stack,.hero-stack .weather-card,.scene-card{max-width:100%;margin-left:0}}@media(max-width:600px){.scene-caption{flex-direction:column;align-items:flex-start}.scene-image,.scene-card{min-height:260px;height:260px}}
  `;
  document.head.appendChild(style);

  const sceneCard=document.querySelector('.scene-card');
  const sceneImage=document.querySelector('#sceneImage');
  const sceneCity=document.querySelector('#sceneCity');
  const sceneTagline=document.querySelector('#sceneTagline');
  const sceneBadge=document.querySelector('#sceneBadge');
  const selectedCity=document.querySelector('#selectedCity');
  const selectedCondition=document.querySelector('#selectedCondition');
  const cityGrid=document.querySelector('#cityGrid');

  function placeholder(scene){
    const safe=(v)=>String(v).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
    const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800"><defs><linearGradient id="g" x2="1" y2="1"><stop stop-color="#07131d"/><stop offset=".58" stop-color="#163247"/><stop offset="1" stop-color="${scene.accent}" stop-opacity=".7"/></linearGradient></defs><rect width="1200" height="800" fill="url(#g)"/><g fill="#040a0f">${[35,150,255,375,495,610,735,855,985,1085].map((x,i)=>`<rect x="${x}" y="${300+(i%3)*70}" width="${75+(i%4)*15}" height="430"/>`).join('')}</g><g stroke="#d6ebff" stroke-opacity=".22">${[180,360,560,760,960,1140].map(x=>`<line x1="${x}" y1="0" x2="${x-150}" y2="800"/>`).join('')}</g><text x="65" y="640" fill="white" font-family="Arial" font-size="72" font-weight="700">${safe(scene.name)}</text><text x="65" y="690" fill="#dbe8f0" font-family="Arial" font-size="25">${safe(scene.tag)}</text></svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }

  function sceneByName(name){return Object.values(scenes).find(s=>s.name.toLowerCase()===String(name).toLowerCase())}
  function currentLabel(){return selectedCondition?.textContent?.trim()||'Rain'}
  function updateScene(scene,label=currentLabel()){
    if(!scene||!sceneImage)return;
    sceneCard?.classList.add('switching');
    const next=new Image();
    next.onload=()=>{sceneImage.src=scene.image;sceneCard?.classList.remove('switching')};
    next.onerror=()=>{sceneImage.src=placeholder(scene);sceneCard?.classList.remove('switching')};
    next.src=scene.image;
    sceneImage.alt=`${scene.name} city scene`;
    if(sceneCity)sceneCity.textContent=scene.name;
    if(sceneTagline)sceneTagline.textContent=scene.tag;
    if(sceneBadge)sceneBadge.textContent=`${scene.country} / ${String(label).toUpperCase()}`;
  }

  function enhanceCards(){
    cityGrid?.querySelectorAll('.city-card[data-city]').forEach(card=>{
      if(card.dataset.v2==='1')return;
      const scene=scenes[card.dataset.city]; if(!scene)return;
      const country=card.querySelector('.city-country'), title=card.querySelector('.city-title'), rain=card.querySelector('.city-rain');
      if(!country||!title||!rain)return;
      card.dataset.v2='1';
      const wrap=document.createElement('div');wrap.className='city-card-thumb-wrap';
      const img=document.createElement('img');img.className='city-card-thumb';img.alt=`${scene.name} skyline`;img.loading='lazy';img.src=scene.image;img.onerror=()=>{img.src=placeholder(scene)};wrap.appendChild(img);
      const body=document.createElement('div');body.className='city-card-body';
      const tag=document.createElement('p');tag.className='city-tagline';tag.textContent=scene.tag;
      body.append(country,title,tag,rain);card.prepend(wrap);card.append(body);
    });
  }

  cityGrid&&new MutationObserver(enhanceCards).observe(cityGrid,{childList:true,subtree:false});
  selectedCity&&new MutationObserver(()=>{
    const name=selectedCity.textContent.trim();
    const scene=sceneByName(name);
    if(scene)updateScene(scene);
    else if(name==='Your sky')updateScene({name:'Your sky',country:'CURRENT LOCATION',tag:'A live frame built from your current weather.',accent:'#9ddcff',image:''});
  }).observe(selectedCity,{childList:true,characterData:true,subtree:true});

  document.addEventListener('click',e=>{
    const target=e.target.closest('[data-city]');
    if(target&&scenes[target.dataset.city])setTimeout(()=>updateScene(scenes[target.dataset.city]),20);
  },true);

  sceneImage&&sceneImage.addEventListener('error',()=>{const s=sceneByName(sceneCity?.textContent)||scenes.tokyo;sceneImage.src=placeholder(s)},{once:false});
  enhanceCards(); updateScene(scenes.tokyo,'Rain');
})();