const CACHE_NAME = 'zenbreak-cache-v1';
const urlsToCache = [
  'index.html',
  'choix-duree.html',
  'choix-son.html',
  'style.css',
  'logo.png',
  'sounds/pluie.mp3',
  'sounds/notification.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
