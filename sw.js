navigator.serviceWorker.register('sw.js');

function showNotification() {
  Notification.requestPermission(function(result) {
    if (result === 'granted') {
      navigator.serviceWorker.ready.then(function(registration) {
        registration.showNotification('Vibration Sample', {
          body: 'Buzz! Buzz!',
          icon: '../images/touch/chrome-touch-icon-192x192.png',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: 'vibration-sample'
        });
      });
    }
  });
}


self.addEventListener('install', function(event) {
    console.log('[Service Worker] Installing Service Worker ...', event);
    event.waitUntil(
      caches.open("static")
      .then(function(cache){
        console.log("precaching");
        cache.add('/index.html');
        cache.add('/');
      })
    );
  });
  self.addEventListener('activate', function(event) {
 console.log('[Service Worker] Activating Service Worker ...', event);
 return self.clients.claim();
 });
   self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
      .then(function(response){
        if (response)
          return response;
        else  
          return fetch(event.request);
      }
      )
    );
  });

 