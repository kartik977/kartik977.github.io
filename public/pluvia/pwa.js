(()=>{
  const installBtn=document.querySelector('#installPluviaBtn');
  let deferredPrompt=null;
  let toastTimer=null;

  const standalone=()=>window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true;

  function ensureToast(){
    let toast=document.querySelector('.pwa-install-toast');
    if(toast)return toast;
    toast=document.createElement('div');
    toast.className='pwa-install-toast';
    toast.setAttribute('role','status');
    toast.setAttribute('aria-live','polite');
    document.body.appendChild(toast);
    return toast;
  }

  function showInstallMessage(title,message){
    const toast=ensureToast();
    toast.innerHTML='<strong>'+title+'</strong>'+message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer=setTimeout(()=>toast.classList.remove('show'),5200);
  }

  function updateButton(){
    if(!installBtn)return;
    if(standalone()){
      installBtn.hidden=true;
      return;
    }
    installBtn.hidden=false;
    installBtn.classList.toggle('ready',Boolean(deferredPrompt));
    installBtn.textContent=deferredPrompt?'Install app':'Install Pluvia';
  }

  if('serviceWorker' in navigator){
    window.addEventListener('load',()=>{
      navigator.serviceWorker.register('./sw.js',{scope:'./'}).catch(()=>{});
    },{once:true});
  }

  window.addEventListener('beforeinstallprompt',event=>{
    event.preventDefault();
    deferredPrompt=event;
    updateButton();
  });

  window.addEventListener('appinstalled',()=>{
    deferredPrompt=null;
    updateButton();
    showInstallMessage('PLUVIA installed','Open it from your home screen, dock, or app launcher.');
  });

  installBtn?.addEventListener('click',async()=>{
    if(standalone()){
      installBtn.hidden=true;
      return;
    }

    if(deferredPrompt){
      const prompt=deferredPrompt;
      deferredPrompt=null;
      try{
        await prompt.prompt();
        await prompt.userChoice;
      }catch(_){}
      updateButton();
      return;
    }

    const isiOS=/iphone|ipad|ipod/i.test(navigator.userAgent);
    const isSafari=/safari/i.test(navigator.userAgent)&&!/chrome|chromium|crios|edg/i.test(navigator.userAgent);
    if(isiOS){
      showInstallMessage('Install PLUVIA','Tap Share in Safari, then choose <b>Add to Home Screen</b>.');
    }else if(isSafari){
      showInstallMessage('Install PLUVIA','In Safari, use <b>File → Add to Dock</b> (or Add to Home Screen on supported devices).');
    }else{
      showInstallMessage('Install PLUVIA','Open your browser menu and choose <b>Install app</b> or <b>Add to Home Screen</b>.');
    }
  });

  window.matchMedia('(display-mode: standalone)').addEventListener?.('change',updateButton);
  updateButton();
})();