'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets\AssetManifest.json": "6aad0c7ab848c8355d3fe39671706d76",
"/assets\assets\background.jpg": "9a23165d7a36138f1eb13dc73fd928ff",
"/assets\assets\mailbox.jpg": "16f60cbce019b67f5ca3be217f1f08a9",
"/assets\assets\mountains_1.jpg": "c1d9c9beadbb3cc1191b9afeb2965908",
"/assets\assets\mountains_2.jpg": "148963ebf57cfb9683a3cc21cd6b4303",
"/assets\assets\notes.jpg": "d7caec6e9290f38c620122f792d5c29e",
"/assets\assets\pictile\logo.png": "4380ecb7b6a0a60d8a1fcb9ae9b911f5",
"/assets\assets\pictile\screen_1.jpg": "3790c5325c82edf840673cbe763933ef",
"/assets\assets\pictile\screen_2.jpg": "bfa843a1c3395dca31d0d7817bd46c49",
"/assets\assets\pictile\screen_3.jpg": "de66d63a726e919d8bea3f3c029b7d27",
"/assets\assets\pictile\screen_4.jpg": "0d2b117cd4b1c00642b728c219f215b7",
"/assets\assets\pictile\screen_5.jpg": "a1b71bbee0a2d228b84dc9b84512394d",
"/assets\assets\pictile\screen_6.jpg": "2b79941224f6276d8ca8dc00c410b9f8",
"/assets\assets\pictile\screen_7.jpg": "0a9dd6f12e7be7b3cda9f4e1c0296f83",
"/assets\assets\picture.jpg": "3e25f0ea20899bd0b63a0fbb4de29444",
"/assets\assets\placelytics\logo.jpg": "2b8978bc5f75d0319dcbd6672e7d5329",
"/assets\assets\rive_icon.png": "8907514773858755e6c846ff936237b0",
"/assets\assets\squares.jpg": "eb8df1a62843f77fc83cdbdc3d0bedd1",
"/assets\assets\squares_rotated.jpg": "0e0d33e2137be97f0ed39e86eb64403c",
"/assets\assets\thg\logo.png": "6528812ec7f53704ccf0a847f194599a",
"/assets\FontManifest.json": "0386edcde2e8e1240375796917481ef1",
"/assets\fonts\Etna.otf": "f6617e99cf5c69aaeccbc20a2b3fc7c3",
"/assets\fonts\Kontanter.otf": "7afc41964d2f099cd82a875f55a3ee2c",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\fonts\Prime-Regular.otf": "dfecd2960230ee34625ef3704812e097",
"/assets\LICENSE": "e3a1471a5c8d0fbb37c4bd7b82830eff",
"/assets\packages\font_awesome_flutter\lib\fonts\fa-brands-400.ttf": "51d23d1c30deda6f34673e0d5600fd38",
"/assets\packages\font_awesome_flutter\lib\fonts\fa-regular-400.ttf": "d51b09f7b8345b41dd3b2201f653c62b",
"/assets\packages\font_awesome_flutter\lib\fonts\fa-solid-900.ttf": "0ea892e09437fcaa050b2b15c53173b7",
"/icons\Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons\Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "025a75f012ec686924e3a3a2fbc1cd1b",
"/main.dart.js": "c45e6bafaae2af3dcdb361ef719e9323",
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
