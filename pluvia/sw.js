const CACHE='pluvia-shell-v1030';
const SHELL=[
  './',
  './index.html',
  './v7.css?v=10.3.0',
  './v7.js?v=10.3.0',
  './rain-room.html',
  './rain-room.css?v=1.1.0',
  './rain-room.js?v=1.1.0',
  './pwa.js?v=9.8.0',
  './manifest.webmanifest',
  './pluvia-icon.svg'
];

self.addEventListener('install',event=>{
  event.waitUntil(
    caches.open(CACHE)
      .then(cache=>cache.addAll(SHELL))
      .then(()=>self.skipWaiting())
  );
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(key=>key!==CACHE&&key.startsWith('pluvia-shell-')).map(key=>caches.delete(key))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET')return;

  const url=new URL(request.url);
  if(url.origin!==self.location.origin)return;

  if(request.mode==='navigate'){
    event.respondWith(
      fetch(request)
        .then(response=>{
          const copy=response.clone();
          caches.open(CACHE).then(cache=>cache.put(request,copy));
          return response;
        })
        .catch(async()=>{
          const cache=await caches.open(CACHE);
          if(url.pathname.endsWith('/rain-room.html'))return cache.match('./rain-room.html');
          return (await cache.match('./index.html'))||(await cache.match('./'));
        })
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(cached=>{
      const network=fetch(request).then(response=>{
        if(response&&response.ok){
          const copy=response.clone();
          caches.open(CACHE).then(cache=>cache.put(request,copy));
        }
        return response;
      }).catch(()=>cached);
      return cached||network;
    })
  );
});