const CACHE_NAME = "anc-cache-v4"; // 🔁 Mets à jour à chaque version

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon.png"
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
      .catch(err => console.error("Erreur de mise en cache", err))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => Promise.all(
      cacheNames.map(key => {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      })
    ))
  );

  // ✅ Affiche une notification si autorisé
  self.clients.matchAll().then(clients => {
    if (clients && clients.length) {
      self.registration.showNotification("✅ Mise à jour disponible", {
        body: "La Calculette ANC a été mise à jour et est prête à l'emploi.",
        icon: "icon.png",
        badge: "icon.png"
      });
    }
  });

  self.clients.claim();
});

// Requêtes : réseau d'abord, cache en secours si hors-ligne
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((reponse) => {
        const copie = reponse.clone();               // on rafraîchit le cache au passage
        caches.open(CACHE_NAME).then((c) => c.put(event.request, copie));
        return reponse;
      })
      .catch(() => caches.match(event.request))       // hors-ligne → on sert le cache
  );
});

self.addEventListener("message", event => {
  if (event.data.action === "skipWaiting") {
    self.skipWaiting();
  }
});
