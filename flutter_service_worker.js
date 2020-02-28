'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "abb72016b8d1a019345deb6e95124f00",
"/main.dart.js": "1e75371db9f0cfd2985296569c8a2eb3",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "0cd4c9d954c3e172e7515a3c1053e4e0",
"/assets/LICENSE": "467711b76bb8dcbd232f150e244bdeb1",
"/assets/AssetManifest.json": "9cc2c500f7c1593046ddb23113d2d781",
"/assets/FontManifest.json": "893926fa32b11bf7016814823bf8a1ca",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d21f791b837673851dd14f7c132ef32e",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bdd8d75eb9e6832ccd3117e06c51f0d3",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3ca122272cfac33efb09d0717efde2fa",
"/assets/fonts/RobotoSlab.ttf": "0b2aeb1c9f580b22533476443b47f0ad",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/pictile/screen_4.jpg": "0d2b117cd4b1c00642b728c219f215b7",
"/assets/assets/pictile/screen_5.jpg": "a1b71bbee0a2d228b84dc9b84512394d",
"/assets/assets/pictile/screen_7.jpg": "0a9dd6f12e7be7b3cda9f4e1c0296f83",
"/assets/assets/pictile/screen_6.jpg": "2b79941224f6276d8ca8dc00c410b9f8",
"/assets/assets/pictile/screen_2.jpg": "bfa843a1c3395dca31d0d7817bd46c49",
"/assets/assets/pictile/screen_3.jpg": "de66d63a726e919d8bea3f3c029b7d27",
"/assets/assets/pictile/screen_1.jpg": "3790c5325c82edf840673cbe763933ef",
"/assets/assets/pictile/logo.png": "4380ecb7b6a0a60d8a1fcb9ae9b911f5",
"/assets/assets/placelytics/logo.jpg": "2b8978bc5f75d0319dcbd6672e7d5329"
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
        return fetch(event.request);
      })
  );
});
