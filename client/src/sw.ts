import { precacheAndRoute } from 'workbox-precaching';
precacheAndRoute(self.__WB_MANIFEST);
self.addEventListener('fetch', (event) => {
  // network-first для API, cache-first для статики
});
