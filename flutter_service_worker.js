// The old Flutter app registered a service worker at this path; this one removes it so
// returning visitors load the CV instead of the cached app.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => {
  self.registration.unregister()
    .then(() => self.clients.matchAll({ type: 'window' }))
    .then((clients) => clients.forEach((c) => c.navigate(c.url)));
});
