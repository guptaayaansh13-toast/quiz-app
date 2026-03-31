const CACHE_NAME = "quiz-app-cache-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "./Quiz-logo-with-speech-bubble-symbols-Graphics-17943290-1.jpg",
  "./Quiz-logo-with-speech-bubble-symbols-Graphics-17943290-1 (1).jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
