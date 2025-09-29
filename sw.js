// Service Worker for Marmara Website
const CACHE_NAME = 'marmara-v1';
const urlsToCache = [
  '/',
  '/css/variables.css',
  '/css/fonts.css',
  '/css/site.css',
  '/js/main.js',
  '/img/logo1.jpg',
  '/img/logo2.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      }
    )
  );
});
