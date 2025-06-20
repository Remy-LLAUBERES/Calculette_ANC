self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('anc-cache').then(function(cache) {
      return cache.addAll([
        "./",
	    "./index.html",
	    "./manifest.json",
	    "./Logo.ico"
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
.catch(err => console.error("Erreur de mise en cache", err));
