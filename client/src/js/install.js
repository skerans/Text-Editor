const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;
// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  deferredPrompt = event;
});


butInstall.addEventListener('click', async () => {
  if(deferredPrompt !== null) {
    deferredPrompt.prompt();
    // const { outcome } = await deferredPrompt.userChoice;
    // if (outcome === 'accepted') {
    //   deferredPrompt = null;
    // }
  }
});


window.addEventListener('appinstalled', (event) => {
  console.log('Thanks for installing our app!');
  deferredPrompt = null;
});
