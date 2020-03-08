'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets\AssetManifest.json": "396bb013b759b89b6645d7902b307e9f",
"/assets\assets\background.jpg": "63ae03b3ad9d8a0743d7450e784775d5",
"/assets\assets\background_empty.jpg": "9a23165d7a36138f1eb13dc73fd928ff",
"/assets\assets\construction.jpeg": "79dd2bc831fe08bad12e2e3a6c7a74c2",
"/assets\assets\mailbox.jpg": "16f60cbce019b67f5ca3be217f1f08a9",
"/assets\assets\message.jpg": "1fc6ed102afa23973c0a4f1e156fbd7a",
"/assets\assets\notes.jpg": "d7caec6e9290f38c620122f792d5c29e",
"/assets\assets\rive_icon.png": "8907514773858755e6c846ff936237b0",
"/assets\assets\trump.jpg": "5fef88abe280e0143044f30b0a3882fe",
"/assets\FontManifest.json": "46c062eb21560ff9e57980926bff3dce",
"/assets\fonts\Etna.otf": "f6617e99cf5c69aaeccbc20a2b3fc7c3",
"/assets\fonts\Kontanter.otf": "7afc41964d2f099cd82a875f55a3ee2c",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\fonts\MyIcons.ttf": "b9b0533613d0200bb0703b6b76c585ca",
"/assets\fonts\Prime-Regular.otf": "dfecd2960230ee34625ef3704812e097",
"/assets\LICENSE": "e3a1471a5c8d0fbb37c4bd7b82830eff",
"/assets\packages\font_awesome_flutter\lib\fonts\fa-brands-400.ttf": "51d23d1c30deda6f34673e0d5600fd38",
"/assets\packages\font_awesome_flutter\lib\fonts\fa-regular-400.ttf": "d51b09f7b8345b41dd3b2201f653c62b",
"/assets\packages\font_awesome_flutter\lib\fonts\fa-solid-900.ttf": "0ea892e09437fcaa050b2b15c53173b7",
"/icons\Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons\Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "025a75f012ec686924e3a3a2fbc1cd1b",
"/main.dart.js": "91049600b51b643a7c9afc9b3761b769",
"/manifest.json": "50e07f8968f4bb98f3b1ea2f50f09f75"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
