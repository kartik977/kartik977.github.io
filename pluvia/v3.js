import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js';

const cityData={
  tokyo:{name:'Tokyo',country:'JAPAN',lat:35.6762,lon:139.6503},
  london:{name:'London',country:'UNITED KINGDOM',lat:51.5072,lon:-0.1276},
  mumbai:{name:'Mumbai',country:'INDIA',lat:19.076,lon:72.8777},
  seattle:{name:'Seattle',country:'UNITED STATES',lat:47.6062,lon:-122.3321},
  singapore:{name:'Singapore',country:'SINGAPORE',lat:1.3521,lon:103.8198},
  saopaulo:{name:'São Paulo',country:'BRAZIL',lat:-23.5505,lon:-46.6333}
};

// ---------- lazy 3D globe enhancement ----------

const wrap=document.querySelector('.globe-wrap');
if(wrap){
  const shell=document.createElement('div');shell.className='globe-3d-shell';shell.innerHTML=`<canvas id="globe3dCanvas" aria-label="Interactive 3D rain globe"></canvas><div class="globe-hud"><div class="globe-hud-top"><span class="globe-live-pill">WORLD RAIN SIGNAL</span><span class="globe-drag-pill">DRAG TO ROTATE · CLICK A LIGHT</span></div><div class="globe-city-readout"><b id="globeCityName">Tokyo</b><span id="globeCityMeta">JAPAN · SELECTED SKY</span></div></div>`;wrap.appendChild(shell);
  const canvas=shell.querySelector('#globe3dCanvas'),readName=shell.querySelector('#globeCityName'),readMeta=shell.querySelector('#globeCityMeta');
  const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(devicePixelRatio||1,matchMedia('(max-width:760px)').matches?1:1.5));renderer.setClearColor(0x000000,0);
  const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(38,1,.1,100);camera.position.set(0,0,4.45);
  const world=new THREE.Group();scene.add(world);
  scene.add(new THREE.AmbientLight(0xa9d7ef,1.25));const key=new THREE.DirectionalLight(0xdaf3ff,2.25);key.position.set(-2.5,3.2,4);scene.add(key);const rim=new THREE.PointLight(0x77bfff,18,12);rim.position.set(3,-1,2);scene.add(rim);

  const globe=new THREE.Mesh(new THREE.SphereGeometry(1.34,40,40),new THREE.MeshPhongMaterial({color:0x0a2740,emissive:0x04131f,emissiveIntensity:.85,shininess:95,specular:0x8ed4ff,transparent:true,opacity:.96}));world.add(globe);
  const facets=new THREE.Mesh(new THREE.IcosahedronGeometry(1.355,4),new THREE.MeshBasicMaterial({color:0x76b9dd,wireframe:true,transparent:true,opacity:.055}));world.add(facets);
  const atmosphere=new THREE.Mesh(new THREE.SphereGeometry(1.43,40,40),new THREE.MeshBasicMaterial({color:0x65bde8,transparent:true,opacity:.055,side:THREE.BackSide,blending:THREE.AdditiveBlending}));world.add(atmosphere);

  const gridMat=new THREE.LineBasicMaterial({color:0x9ad7f2,transparent:true,opacity:.115});
  for(let lat=-60;lat<=60;lat+=30){const pts=[];const phi=THREE.MathUtils.degToRad(lat);for(let lon=0;lon<=360;lon+=4){const t=THREE.MathUtils.degToRad(lon);pts.push(new THREE.Vector3(1.365*Math.cos(phi)*Math.sin(t),1.365*Math.sin(phi),1.365*Math.cos(phi)*Math.cos(t)))}world.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),gridMat))}
  for(let lon=0;lon<360;lon+=30){const pts=[];const t=THREE.MathUtils.degToRad(lon);for(let lat=-90;lat<=90;lat+=4){const phi=THREE.MathUtils.degToRad(lat);pts.push(new THREE.Vector3(1.365*Math.cos(phi)*Math.sin(t),1.365*Math.sin(phi),1.365*Math.cos(phi)*Math.cos(t)))}world.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),gridMat))}

  // atmospheric star dust
  const starGeo=new THREE.BufferGeometry(),stars=[];for(let i=0;i<160;i++){const r=2.3+Math.random()*3.8,th=Math.random()*Math.PI*2,u=Math.random()*2-1,s=Math.sqrt(1-u*u);stars.push(r*s*Math.cos(th),r*u,r*s*Math.sin(th))}starGeo.setAttribute('position',new THREE.Float32BufferAttribute(stars,3));scene.add(new THREE.Points(starGeo,new THREE.PointsMaterial({color:0xb9def1,size:.012,transparent:true,opacity:.28,sizeAttenuation:true})));

  function glowTexture(){const c=document.createElement('canvas');c.width=c.height=128;const x=c.getContext('2d'),g=x.createRadialGradient(64,64,2,64,64,60);g.addColorStop(0,'rgba(210,246,255,1)');g.addColorStop(.14,'rgba(120,211,255,.95)');g.addColorStop(.35,'rgba(70,169,255,.38)');g.addColorStop(1,'rgba(70,169,255,0)');x.fillStyle=g;x.fillRect(0,0,128,128);return new THREE.CanvasTexture(c)}
  const glowTex=glowTexture(),hotspots=[];
  function latLon(lat,lon,r=1.39){const p=THREE.MathUtils.degToRad(lat),t=THREE.MathUtils.degToRad(lon);return new THREE.Vector3(r*Math.cos(p)*Math.sin(t),r*Math.sin(p),r*Math.cos(p)*Math.cos(t))}
  Object.entries(cityData).forEach(([id,c])=>{const holder=new THREE.Group();holder.position.copy(latLon(c.lat,c.lon));const dot=new THREE.Mesh(new THREE.SphereGeometry(.032,18,18),new THREE.MeshBasicMaterial({color:0xdff7ff}));dot.userData.city=id;holder.add(dot);const sprite=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex,color:0x74c9ff,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending}));sprite.scale.set(.27,.27,.27);sprite.userData.city=id;holder.add(sprite);world.add(holder);hotspots.push(dot,sprite)});

  // rain shell around the planet
  const rainCount=110,rainPositions=new Float32Array(rainCount*3),rainSpeed=[];for(let i=0;i<rainCount;i++){const p=latLon((Math.random()*150)-75,(Math.random()*360)-180,1.48+Math.random()*.42);rainPositions.set([p.x,p.y,p.z],i*3);rainSpeed.push(.0025+Math.random()*.005)}const rainGeo=new THREE.BufferGeometry();rainGeo.setAttribute('position',new THREE.BufferAttribute(rainPositions,3));const rainPts=new THREE.Points(rainGeo,new THREE.PointsMaterial({color:0xb9e7ff,size:.018,transparent:true,opacity:.38,depthWrite:false}));world.add(rainPts);

  const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2();let dragging=false,prev={x:0,y:0},targetQ=null,hovered=null,cameraKick=0;
  function setPointer(e){const r=canvas.getBoundingClientRect();pointer.x=((e.clientX-r.left)/r.width)*2-1;pointer.y=-((e.clientY-r.top)/r.height)*2+1}
  function intersect(e){setPointer(e);raycaster.setFromCamera(pointer,camera);return raycaster.intersectObjects(hotspots,true).find(h=>h.object.userData.city)}
  shell.addEventListener('pointerdown',e=>{dragging=true;prev={x:e.clientX,y:e.clientY};targetQ=null;shell.setPointerCapture?.(e.pointerId)});
  shell.addEventListener('pointermove',e=>{if(dragging){const dx=e.clientX-prev.x,dy=e.clientY-prev.y;prev={x:e.clientX,y:e.clientY};world.rotation.y+=dx*.0065;world.rotation.x+=dy*.0045;world.rotation.x=Math.max(-1.05,Math.min(1.05,world.rotation.x));return}const hit=intersect(e);hovered=hit?.object.userData.city||null;shell.style.cursor=hovered?'pointer':'grab';if(hovered){readName.textContent=cityData[hovered].name;readMeta.textContent=`${cityData[hovered].country} · CLICK TO ENTER`}});
  shell.addEventListener('pointerup',e=>{const wasDrag=Math.abs(e.clientX-prev.x)+Math.abs(e.clientY-prev.y)>5;dragging=false;if(wasDrag)return;const hit=intersect(e);const id=hit?.object.userData.city;if(id){const target=document.querySelector(`.city-card[data-city="${id}"]`)||document.querySelector(`.globe-dot[data-city="${id}"]`);target?.click();focusCity(id,true)}});
  shell.addEventListener('pointerleave',()=>{if(!dragging){hovered=null;shell.style.cursor='grab';const current=findCurrentId();if(current)updateReadout(current)}});

  function findCurrentId(){const name=document.querySelector('#selectedCity')?.textContent?.trim().toLowerCase();return Object.keys(cityData).find(k=>cityData[k].name.toLowerCase()===name)||'tokyo'}
  function updateReadout(id){const c=cityData[id];if(!c)return;readName.textContent=c.name;readMeta.textContent=`${c.country} · SELECTED SKY`}
  function focusCity(id,kick=false){const c=cityData[id];if(!c)return;const local=latLon(c.lat,c.lon,1).normalize(),front=new THREE.Vector3(0,0,1);targetQ=new THREE.Quaternion().setFromUnitVectors(local,front);updateReadout(id);if(kick)cameraKick=1}
  const selected=document.querySelector('#selectedCity');selected&&new MutationObserver(()=>focusCity(findCurrentId(),true)).observe(selected,{childList:true,subtree:true,characterData:true});focusCity('tokyo',false);

  function resize(){const r=shell.getBoundingClientRect(),w=Math.max(1,r.width),h=Math.max(1,r.height);renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix()}window.addEventListener('resize',resize);resize();
  const clock=new THREE.Clock();let globeVisible=false,globeLast=0;
  const globeObserver=new IntersectionObserver(entries=>{globeVisible=!!entries[0]?.isIntersecting},{rootMargin:'120px'});globeObserver.observe(shell);
  function animate(ts=0){requestAnimationFrame(animate);if(document.hidden||!globeVisible||document.body.classList.contains('pluvia-city-immersive'))return;if(ts-globeLast<33)return;globeLast=ts;const t=clock.getElapsedTime();if(!dragging&&targetQ){world.quaternion.slerp(targetQ,.055);if(world.quaternion.angleTo(targetQ)<.008)targetQ=null}else if(!dragging&&!targetQ)world.rotation.y+=.0012;atmosphere.scale.setScalar(1+.006*Math.sin(t*1.4));facets.rotation.y-=.00042;
    const a=rainGeo.attributes.position.array;for(let i=0;i<rainCount;i++){const j=i*3;a[j+1]-=rainSpeed[i];const len=Math.hypot(a[j],a[j+1],a[j+2]);if(a[j+1]<-1.5||len<1.39){const p=latLon(55+Math.random()*35,(Math.random()*360)-180,1.5+Math.random()*.35);a[j]=p.x;a[j+1]=p.y;a[j+2]=p.z}}rainGeo.attributes.position.needsUpdate=true;
    if(cameraKick>0){cameraKick*=.91;camera.position.z=4.45-.55*Math.sin((1-cameraKick)*Math.PI)}else camera.position.z+=(4.45-camera.position.z)*.08;renderer.render(scene,camera)}requestAnimationFrame(animate);
}

// update copy/version after enhancement loads
const worldText=document.querySelector('.world-copy>p');if(worldText)worldText.textContent='Drag the planet, find the glowing rain signals, and click a city to enter its live atmosphere. Pluvia now connects the world pulse directly to each city scene.';
const coming=document.querySelector('.coming-pill');if(coming)coming.textContent='PLUVIA 3.0 · INTERACTIVE WORLD';
const version=document.querySelector('.closing .kicker');if(version)version.textContent='PLUVIA / 03';
