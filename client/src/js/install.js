const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;
// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  deferredPrompt = event;
});


butInstall.addEventListener('click', async () => {
  deferredPrompt.prompt();
  
});


window.addEventListener('appinstalled', (event) => {
  console.log('Thanks for installing our app!');
  deferredPrompt = null;
});
