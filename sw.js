const CACHE_NAME = "anc-cache-v6"; // 🔁 Mets à jour à chaque version

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon.png",
  "./mentions-legales.html",
  "./politique-confidentialite.html",
  "./cgu.html",
  "./README.md",
  "./TODO_COMMERCIALISATION.md",
  "./DEMARRAGE_RAPIDE.md",
  "./GITHUB_PAGES_SETUP.md",
  "./DESCRIPTIONS_MARKETING.md",
  "./GUIDE_VISUELS.md",
  "./APK_GENERATION_GUIDE.md",
  "./.well-known/assetlinks.json"
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

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});

self.addEventListener("message", event => {
  if (event.data.action === "skipWaiting") {
    self.skipWaiting();
  }
});
