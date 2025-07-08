const CACHE_NAME = "anc-cache-v2"; // 🔁 Change ce nom à chaque mise à jour

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon.png"
];

// 📦 Installation et mise en cache des fichiers
self.addEventListener('install', function(e) {
  console.log("[ServiceWorker] Installation");
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(FILES_TO_CACHE);
      })
      .catch(err => console.error("Erreur de mise en cache", err))
  );
  self.skipWaiting(); // permet une prise en compte immédiate après install
});

// 🧹 Suppression des anciens caches
self.addEventListener('activate', function(e) {
  console.log("[ServiceWorker] Activation");
  e.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME) {
            console.log("[ServiceWorker] Suppression du cache : ", key);
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim(); // contrôle immédiat des pages ouvertes
});

// 🌐 Réponse aux requêtes réseau
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});

// 💬 Communication avec la page pour forcer skipWaiting si besoin
self.addEventListener("message", event => {
  if (event.data.action === "skipWaiting") {
    self.skipWaiting();
  }
});
