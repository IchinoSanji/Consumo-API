// src/sw.js

const CACHE_NAME = 'weather-app-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/src/styles/styles.css',
    '/src/javacript/script.js',
    '/src/manifest.json',
    '/path/to/icon-192x192.png',
    '/path/to/icon-512x512.png'
];

// Instalação do Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

// Resposta para requisições
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});
