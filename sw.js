// Enhanced Service Worker for Marmara 2025 - PWA Features
const CACHE_NAME = 'marmara-v2.0.0';
const STATIC_CACHE = 'marmara-static-v2.0.0';
const DYNAMIC_CACHE = 'marmara-dynamic-v2.0.0';
const IMAGE_CACHE = 'marmara-images-v2.0.0';

// Enhanced Cache Strategy
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/css/variables.css',
  '/css/fonts.css',
  '/css/site.css',
  '/js/main.js',
  '/img/logo1.jpg',
  '/img/logo2.jpg',
  '/img/bg-main.jpg',
  '/manifest.json'
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
  
  // Skip external requests
  if (url.origin !== location.origin) {
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
  const cache = await caches.open(cacheName);
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const responseClone = networkResponse.clone();
      responseClone.headers.set('sw-cache-time', Date.now().toString());
      cache.put(request, responseClone);
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await cache.match(request);
    return cachedResponse || await fallbackResponse(request);
  }
}

// Stale While Revalidate Strategy
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  const fetchPromise = fetch(request).then(networkResponse => {
    if (networkResponse.ok) {
      const responseClone = networkResponse.clone();
      responseClone.headers.set('sw-cache-time', Date.now().toString());
      cache.put(request, responseClone);
    }
    return networkResponse;
  }).catch(() => null);
  
  return cachedResponse || await fetchPromise || await fallbackResponse(request);
}

// Enhanced Image Strategy
async function imageStrategy(request) {
  const cache = await caches.open(IMAGE_CACHE);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    const cacheTime = parseInt(cachedResponse.headers.get('sw-cache-time') || '0');
    const isExpired = Date.now() - cacheTime > CACHE_DURATION.images;
    
    if (!isExpired) {
      // Update in background
      fetch(request).then(response => {
        if (response.ok) {
          const responseClone = response.clone();
          responseClone.headers.set('sw-cache-time', Date.now().toString());
          cache.put(request, responseClone);
        }
      }).catch(() => {});
      
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
    return cachedResponse || createPlaceholderImage();
  }
}

// Fallback Response
async function fallbackResponse(request) {
  const url = new URL(request.url);
  
  // HTML fallback
  if (request.headers.get('accept').includes('text/html')) {
    const cache = await caches.open(STATIC_CACHE);
    return await cache.match('/index.html') || new Response(
      '<h1>Offline</h1><p>Please check your connection</p>',
      { headers: { 'Content-Type': 'text/html' } }
    );
  }
  
  // Image fallback
  if (IMAGE_EXTENSIONS.some(ext => url.pathname.includes(ext))) {
    return createPlaceholderImage();
  }
  
  return new Response('Resource not available offline', { status: 503 });
}

// Create Placeholder Image
// Create Placeholder Image
function createPlaceholderImage() {
  const svg = `
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f1f5f9"/>
      <rect x="50" y="50" width="300" height="200" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="2" rx="8"/>
      <circle cx="120" cy="120" r="20" fill="#94a3b8"/>
      <polygon points="150,180 200,120 250,180" fill="#94a3b8"/>
      <text x="200" y="220" font-family="Arial, sans-serif" font-size="14" fill="#64748b" text-anchor="middle">Image Offline</text>
      <text x="200" y="240" font-family="Arial, sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">Marmara Supplies</text>
    </svg>
  `;
  
  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'no-cache'
    }
  });
}

// Enhanced Background Sync for Offline Data
self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync event:', event.tag);
  
  if (event.tag === 'contact-form') {
    event.waitUntil(syncContactForms());
  }
  
  if (event.tag === 'newsletter-signup') {
    event.waitUntil(syncNewsletterSignups());
  }
});

// Sync Contact Forms
async function syncContactForms() {
  try {
    const db = await openDatabase();
    const forms = await getStoredForms(db, 'contact-forms');
    
    for (const form of forms) {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form.data)
        });
        
        if (response.ok) {
          await deleteStoredForm(db, 'contact-forms', form.id);
          console.log('[SW] Contact form synced successfully');
        }
      } catch (error) {
        console.error('[SW] Failed to sync contact form:', error);
      }
    }
  } catch (error) {
    console.error('[SW] Background sync failed:', error);
  }
}

// Sync Newsletter Signups
async function syncNewsletterSignups() {
  try {
    const db = await openDatabase();
    const signups = await getStoredForms(db, 'newsletter-signups');
    
    for (const signup of signups) {
      try {
        const response = await fetch('/api/newsletter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(signup.data)
        });
        
        if (response.ok) {
          await deleteStoredForm(db, 'newsletter-signups', signup.id);
          console.log('[SW] Newsletter signup synced successfully');
        }
      } catch (error) {
        console.error('[SW] Failed to sync newsletter signup:', error);
      }
    }
  } catch (error) {
    console.error('[SW] Newsletter sync failed:', error);
  }
}

// Enhanced Push Notifications
self.addEventListener('push', (event) => {
  console.log('[SW] Push message received');
  
  const options = {
    body: 'Check out our latest marble and granite tools!',
    icon: '/img/logo1.jpg',
    badge: '/img/logo2.jpg',
    vibrate: [200, 100, 200],
    data: {
      url: '/',
      timestamp: Date.now()
    },
    actions: [
      {
        action: 'view',
        title: 'View Products',
        icon: '/img/icon-view.png'
      },
      {
        action: 'dismiss',
        title: 'Dismiss',
        icon: '/img/icon-dismiss.png'
      }
    ],
    requireInteraction: true,
    silent: false
  };
  
  if (event.data) {
    try {
      const payload = event.data.json();
      options.title = payload.title || 'Marmara Supplies';
      options.body = payload.body || options.body;
      options.icon = payload.icon || options.icon;
      options.data.url = payload.url || options.data.url;
    } catch (error) {
      console.error('[SW] Error parsing push payload:', error);
      options.title = 'Marmara Supplies';
    }
  } else {
    options.title = 'Marmara Supplies';
  }
  
  event.waitUntil(
    self.registration.showNotification(options.title, options)
  );
});

// Enhanced Notification Click Handler
self.addEventListener('notificationclick', (event) => {
  console.log('[SW] Notification clicked');
  
  const { action, data } = event.notification;
  event.notification.close();
  
  if (action === 'dismiss') {
    return;
  }
  
  const urlToOpen = action === 'view' ? data.url : '/';
  
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then(clientList => {
        // Check if a window is already open
        for (const client of clientList) {
          if (client.url.includes(self.location.origin) && 'focus' in client) {
            client.focus();
            client.navigate(urlToOpen);
            return;
          }
        }
        
        // Open new window if none exists
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      })
  );
});

// Enhanced Message Handler for Communication with Main Thread
self.addEventListener('message', (event) => {
  const { type, payload } = event.data;
  
  switch (type) {
    case 'SKIP_WAITING':
      self.skipWaiting();
      break;
      
    case 'GET_CACHE_SIZE':
      event.waitUntil(getCacheSize().then(size => {
        event.ports[0].postMessage({ type: 'CACHE_SIZE', size });
      }));
      break;
      
    case 'CLEAR_CACHE':
      event.waitUntil(clearAllCaches().then(success => {
        event.ports[0].postMessage({ type: 'CACHE_CLEARED', success });
      }));
      break;
      
    case 'STORE_OFFLINE_DATA':
      event.waitUntil(storeOfflineData(payload).then(success => {
        event.ports[0].postMessage({ type: 'DATA_STORED', success });
      }));
      break;
      
    default:
      console.log('[SW] Unknown message type:', type);
  }
});

// Enhanced Cache Management
async function getCacheSize() {
  try {
    const cacheNames = await caches.keys();
    let totalSize = 0;
    
    for (const cacheName of cacheNames) {
      const cache = await caches.open(cacheName);
      const requests = await cache.keys();
      
      for (const request of requests) {
        const response = await cache.match(request);
        if (response) {
          const size = parseInt(response.headers.get('content-length') || '0');
          totalSize += size;
        }
      }
    }
    
    return totalSize;
  } catch (error) {
    console.error('[SW] Error calculating cache size:', error);
    return 0;
  }
}

async function clearAllCaches() {
  try {
    const cacheNames = await caches.keys();
    await Promise.all(
      cacheNames.map(cacheName => caches.delete(cacheName))
    );
    console.log('[SW] All caches cleared');
    return true;
  } catch (error) {
    console.error('[SW] Error clearing caches:', error);
    return false;
  }
}

// Enhanced Offline Data Storage
async function storeOfflineData(data) {
  try {
    const db = await openDatabase();
    const transaction = db.transaction(['offline-data'], 'readwrite');
    const store = transaction.objectStore('offline-data');
    
    await store.add({
      id: Date.now(),
      type: data.type,
      data: data.payload,
      timestamp: Date.now()
    });
    
    console.log('[SW] Offline data stored successfully');
    return true;
  } catch (error) {
    console.error('[SW] Error storing offline data:', error);
    return false;
  }
}

// Enhanced IndexedDB Helper Functions
function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('MarmaraDB', 1);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      
      // Create object stores
      if (!db.objectStoreNames.contains('contact-forms')) {
        db.createObjectStore('contact-forms', { keyPath: 'id', autoIncrement: true });
      }
      
      if (!db.objectStoreNames.contains('newsletter-signups')) {
        db.createObjectStore('newsletter-signups', { keyPath: 'id', autoIncrement: true });
      }
      
      if (!db.objectStoreNames.contains('offline-data')) {
        db.createObjectStore('offline-data', { keyPath: 'id', autoIncrement: true });
      }
    };
  });
}

function getStoredForms(db, storeName) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName], 'readonly');
    const store = transaction.objectStore(storeName);
    const request = store.getAll();
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
}

function deleteStoredForm(db, storeName, id) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);
    const request = store.delete(id);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve();
  });
}

// Enhanced Performance Monitoring
self.addEventListener('install', (event) => {
  console.log('[SW] Service Worker installing...');
  
  // Track installation performance
  const installStart = performance.now();
  
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then(cache => cache.addAll(STATIC_ASSETS)),
      self.skipWaiting()
    ]).then(() => {
      const installTime = performance.now() - installStart;
      console.log(`[SW] Installation completed in ${installTime.toFixed(2)}ms`);
      
      // Report installation metrics
      self.clients.matchAll().then(clients => {
        clients.forEach(client => {
          client.postMessage({
            type: 'SW_INSTALLED',
            installTime: installTime
          });
        });
      });
    })
  );
});

// Enhanced Error Handling and Logging
self.addEventListener('error', (event) => {
  console.error('[SW] Service Worker error:', event.error);
  
  // Report error to analytics or logging service
  if (self.registration && self.registration.sync) {
    self.registration.sync.register('error-report').catch(err => {
      console.error('[SW] Failed to register error sync:', err);
    });
  }
});

self.addEventListener('unhandledrejection', (event) => {
  console.error('[SW] Unhandled promise rejection:', event.reason);
  event.preventDefault();
});

// Enhanced Cache Cleanup Strategy
async function performCacheCleanup() {
  try {
    const cacheNames = await caches.keys();
    
    for (const cacheName of cacheNames) {
      const cache = await caches.open(cacheName);
      const requests = await cache.keys();
      
      for (const request of requests) {
        const response = await cache.match(request);
        if (response) {
          const cacheTime = parseInt(response.headers.get('sw-cache-time') || '0');
          const maxAge = cacheName.includes('static') ? CACHE_DURATION.static :
                        cacheName.includes('images') ? CACHE_DURATION.images :
                        CACHE_DURATION.dynamic;
          
          if (Date.now() - cacheTime > maxAge) {
            await cache.delete(request);
            console.log('[SW] Expired cache entry removed:', request.url);
          }
        }
      }
    }
    
    console.log('[SW] Cache cleanup completed');
  } catch (error) {
    console.error('[SW] Cache cleanup failed:', error);
  }
}

// Schedule periodic cache cleanup
setInterval(performCacheCleanup, 24 * 60 * 60 * 1000); // Daily cleanup

// Enhanced Network Status Monitoring
self.addEventListener('online', () => {
  console.log('[SW] Network connection restored');
  
  // Trigger background sync for pending data
  if (self.registration && self.registration.sync) {
    self.registration.sync.register('contact-form').catch(console.error);
    self.registration.sync.register('newsletter-signup').catch(console.error);
  }
  
  // Notify clients about network status
  self.clients.matchAll().then(clients => {
    clients.forEach(client => {
      client.postMessage({ type: 'NETWORK_STATUS', online: true });
    });
  });
});

self.addEventListener('offline', () => {
  console.log('[SW] Network connection lost');
  
  // Notify clients about network status
  self.clients.matchAll().then(clients => {
    clients.forEach(client => {
      client.postMessage({ type: 'NETWORK_STATUS', online: false });
    });
  });
});

// Enhanced Update Detection
self.addEventListener('updatefound', () => {
  console.log('[SW] New service worker version found');
  
  const newWorker = self.registration.installing;
  
  newWorker.addEventListener('statechange', () => {
    if (newWorker.state === 'installed' && self.clients.length > 0) {
      // New service worker installed, notify clients
      self.clients.matchAll().then(clients => {
        clients.forEach(client => {
          client.postMessage({
            type: 'SW_UPDATE_AVAILABLE',
            message: 'A new version is available. Refresh to update.'
          });
        });
      });
    }
  });
});

// Enhanced Resource Precaching with Priority
const CRITICAL_RESOURCES = [
  '/css/variables.css',
  '/css/fonts.css',
  '/js/main.js',
  '/img/logo1.jpg'
];

const NON_CRITICAL_RESOURCES = [
  '/img/logo2.jpg',
  '/img/bg-main.jpg'
];

async function precacheResources() {
  try {
    const cache = await caches.open(STATIC_CACHE);
    
    // Cache critical resources first
    await cache.addAll(CRITICAL_RESOURCES);
    console.log('[SW] Critical resources cached');
    
    // Cache non-critical resources with delay
    setTimeout(async () => {
      try {
        await cache.addAll(NON_CRITICAL_RESOURCES);
        console.log('[SW] Non-critical resources cached');
      } catch (error) {
        console.error('[SW] Error caching non-critical resources:', error);
      }
    }, 2000);
    
  } catch (error) {
    console.error('[SW] Error in precaching:', error);
  }
}

// Enhanced Analytics and Usage Tracking
function trackCacheHit(request, source) {
  console.log(`[SW] Cache hit: ${request.url} (${source})`);
  
  // Could send analytics data to your analytics service
  if (self.clients) {
    self.clients.matchAll().then(clients => {
      clients.forEach(client => {
        client.postMessage({
          type: 'CACHE_HIT',
          url: request.url,
          source: source,
          timestamp: Date.now()
        });
      });
    });
  }
}

// Initialize service worker
console.log('[SW] Service Worker script loaded');

// Perform initial cache warming on first install
self.addEventListener('install', (event) => {
  event.waitUntil(precacheResources());
});
