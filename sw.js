// Enhanced Service Worker for Marmara 3D Gallery
const CACHE_VERSION = 'v1.0.0';
const STATIC_CACHE = `marmara-static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `marmara-dynamic-${CACHE_VERSION}`;
const IMAGE_CACHE = `marmara-images-${CACHE_VERSION}`;

// Enhanced Cache Strategy
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/css/variables.css',
  '/css/fonts.css',
  '/css/site.css',
  '/js/main.js',
  '/img/logo2.jpg',
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/Draggable.min.js'
];

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
const CACHE_DURATION = {
  static: 30 * 24 * 60 * 60 * 1000, // 30 days
  dynamic: 7 * 24 * 60 * 60 * 1000,  // 7 days
  images: 14 * 24 * 60 * 60 * 1000   // 14 days
};

// Enhanced Install Event
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker');
  
  event.waitUntil(
    Promise.all([
      // Cache static assets
      caches.open(STATIC_CACHE)
        .then(cache => {
          console.log('[SW] Caching static assets');
          return cache.addAll(STATIC_ASSETS);
        }),
      
      // Skip waiting to activate immediately
      self.skipWaiting()
    ])
  );
});

// Enhanced Activate Event
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker');
  
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && 
                cacheName !== DYNAMIC_CACHE && 
                cacheName !== IMAGE_CACHE) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      
      // Take control of all pages
      self.clients.claim()
    ])
  );
});

// Enhanced Fetch Event with Smart Caching
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip external requests (except CDN assets)
  if (url.origin !== location.origin && !url.hostname.includes('cdnjs.cloudflare.com')) {
    return;
  }
  
  event.respondWith(
    handleRequest(request)
  );
});

// Enhanced Request Handler
async function handleRequest(request) {
  const url = new URL(request.url);
  
  try {
    // Static assets - Cache First
    if (STATIC_ASSETS.some(asset => url.pathname === asset || url.pathname.endsWith(asset))) {
      return await cacheFirst(request, STATIC_CACHE);
    }
    
    // Images - Cache First with fallback
    if (IMAGE_EXTENSIONS.some(ext => url.pathname.includes(ext))) {
      return await imageStrategy(request);
    }
    
    // HTML pages - Network First
    if (request.headers.get('accept').includes('text/html')) {
      return await networkFirst(request, DYNAMIC_CACHE);
    }
    
    // Other assets - Stale While Revalidate
    return await staleWhileRevalidate(request, DYNAMIC_CACHE);
    
  } catch (error) {
    console.error('[SW] Request failed:', error);
    return await fallbackResponse(request);
  }
}

// Cache First Strategy
async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    // Check if cache is still fresh
    const cacheTime = parseInt(cachedResponse.headers.get('sw-cache-time') || '0');
    const isExpired = Date.now() - cacheTime > CACHE_DURATION.static;
    
    if (!isExpired) {
      return cachedResponse;
    }
  }
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const responseClone = networkResponse.clone();
      responseClone.headers.set('sw-cache-time', Date.now().toString());
      cache.put(request, responseClone);
    }
    return networkResponse;
  } catch (error) {
    return cachedResponse || new Response('Network error', { status: 503 });
  }
}

// Network First Strategy
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    return cachedResponse || new Response('Offline', { status: 503 });
  }
}

// Stale While Revalidate Strategy
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  const fetchPromise = fetch(request).then(networkResponse => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  });
  
  return cachedResponse || fetchPromise;
}

// Image Strategy
async function imageStrategy(request) {
  const cache = await caches.open(IMAGE_CACHE);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // Return a placeholder image or error response
    return new Response('Image not available', { status: 404 });
  }
}

// Fallback Response
async function fallbackResponse(request) {
  const url = new URL(request.url);
  
  if (request.headers.get('accept').includes('text/html')) {
    const cache = await caches.open(STATIC_CACHE);
    return await cache.match('/index.html') || new Response('Offline', { status: 503 });
  }
  
  return new Response('Network error', { status: 503 });
}
