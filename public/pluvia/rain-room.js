(()=>{
  const storageKey='pluvia-v97-rain-rooms';
  const grid=document.querySelector('#roomGrid');
  const navCount=document.querySelector('#navRoomCount');
  const heroCount=document.querySelector('#heroRoomCount');
  const toast=document.querySelector('#roomToast');

  const envLabels={
    cafe:'Café Window',apartment:'Apartment Window',hotel:'Hotel Room',
    train:'Train Window',car:'Car Windshield',rooftop:'Rooftop'
  };
  const atmosphereLabels={live:'Live',drizzle:'Drizzle',rain:'Rain',storm:'Storm',snow:'Snow'};
  const cityNames={
    tokyo:'Tokyo',mumbai:'Mumbai',london:'London',paris:'Paris',seattle:'Seattle',
    newyork:'New York',singapore:'Singapore',seoul:'Seoul',kyoto:'Kyoto',
    amsterdam:'Amsterdam',vancouver:'Vancouver',saopaulo:'São Paulo'
  };
  const cardGlow={
    tokyo:'rgba(132,191,226,.15)',mumbai:'rgba(230,173,110,.14)',london:'rgba(132,174,199,.14)',
    paris:'rgba(195,159,181,.13)',newyork:'rgba(128,170,209,.14)',singapore:'rgba(103,194,181,.13)'
  };

  let rooms=[];
  let toastTimer=null;

  const esc=value=>String(value??'').replace(/[&<>"']/g,char=>({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[char]));

  function load(){
    try{
      const saved=JSON.parse(localStorage.getItem(storageKey)||'[]');
      rooms=Array.isArray(saved)?saved.filter(room=>room&&room.id).slice(0,8):[];
    }catch(_){rooms=[]}
  }

  function save(){
    try{localStorage.setItem(storageKey,JSON.stringify(rooms.slice(0,8)))}catch(_){}
  }

  function roomName(room){
    return room.cityId?(cityNames[room.cityId]||room.cityId):room.place?.name||'Saved sky';
  }

  function showToast(message){
    clearTimeout(toastTimer);
    toast.textContent=message;
    toast.classList.add('show');
    toastTimer=setTimeout(()=>toast.classList.remove('show'),2400);
  }

  function render(){
    navCount.textContent=String(rooms.length);
    heroCount.textContent=String(rooms.length);

    if(!rooms.length){
      grid.innerHTML='<div class="room-empty"><span>☂</span><strong>Your Rain Room is empty.</strong>'+
        '<p>Explore a city, build the atmosphere you want, then save it from inside the immersive view.</p>'+
        '<a href="./#cities">Create your first room ↗</a></div>';
      return;
    }

    grid.innerHTML=rooms.map(room=>{
      const name=esc(roomName(room));
      const env=esc(envLabels[room.env]||room.env||'Window');
      const mode=esc(atmosphereLabels[room.atmosphere]||room.atmosphere||'Live');
      const music=Math.round(Number(room.mix?.music??72));
      const track=esc(room.trackTitle||'City radio');
      const glow=cardGlow[room.cityId]||'rgba(139,216,246,.13)';
      return '<article class="room-card" style="--card-glow:'+glow+'">'+
        '<button class="room-open" type="button" data-room-open="'+esc(room.id)+'">'+
          '<span class="room-star">★</span><small>FAVORITE SKY</small>'+
          '<strong>'+name+'</strong><em>'+env+' · '+mode+'</em>'+
          '<div class="room-meta"><span>'+music+'% music</span><span>'+track+'</span></div>'+
          '<b>ENTER MY ROOM ↗</b></button>'+
        '<button class="room-delete" type="button" data-room-delete="'+esc(room.id)+'" aria-label="Remove '+name+'">×</button>'+
      '</article>';
    }).join('');
  }

  grid.addEventListener('click',event=>{
    const remove=event.target.closest('[data-room-delete]');
    if(remove){
      const id=remove.dataset.roomDelete;
      const room=rooms.find(item=>item.id===id);
      rooms=rooms.filter(item=>item.id!==id);
      save();render();showToast((room?roomName(room):'Room')+' removed');
      return;
    }

    const open=event.target.closest('[data-room-open]');
    if(open){
      const id=open.dataset.roomOpen;
      try{sessionStorage.setItem('pluvia-v97-pending-room',id)}catch(_){}
      location.href='./?room='+encodeURIComponent(id);
    }
  });

  window.addEventListener('storage',event=>{
    if(event.key===storageKey){load();render()}
  });

  load();
  render();
})();