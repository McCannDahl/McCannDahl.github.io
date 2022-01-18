'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b83f6ee0fedc2b03f49897b1ac2c64ab",
"assets/assets/audio/explosion.mp3": "8f191e98a6269c4c4dd437a8cb04dd6c",
"assets/assets/audio/turret1.mp3": "eb36c950477f81757f36c71ca66c0302",
"assets/assets/audio/turret10.mp3": "99d92565fcb8a980b73ae609184a3aad",
"assets/assets/audio/turret11.mp3": "d9cd4b2d5f3831e08dfb2e541ec5a1f5",
"assets/assets/audio/turret12.mp3": "4b5b4b287952da702419eb628673666f",
"assets/assets/audio/turret2.mp3": "2cc4ce52b366d592c4f74b0a75ae279e",
"assets/assets/audio/turret3.mp3": "c8853f26745e4c7ecc3b03235f8dd5b7",
"assets/assets/audio/turret4.mp3": "21b9ec956549d825235196ac56ab7a8f",
"assets/assets/audio/turret5.mp3": "c77aab2d26a9bca8af73512f0e87d1ca",
"assets/assets/audio/turret6.mp3": "8898776b9629c50cbbd84d97a01363ae",
"assets/assets/audio/turret7.mp3": "3a91066628aeae0b5fd9b9414fe9b3a4",
"assets/assets/audio/turret8.mp3": "a22441c99f6b885304594b3b7d0c3cb3",
"assets/assets/audio/turret9.mp3": "cb0456e4b8d0b405e06b7f7a5ff37855",
"assets/assets/images/1.png": "4172110b9f848c9f5f1db62a5255c421",
"assets/assets/images/10.png": "714576846cffabf47902a3cead70a681",
"assets/assets/images/11.png": "fee723678ffbb682eb229e2ca1ca02ea",
"assets/assets/images/12.png": "a1b712f25b63e1aae15c232faa7a045b",
"assets/assets/images/13.png": "c796a7525f28d9ab61ac993317cfd779",
"assets/assets/images/14.png": "2c2b52247a1ff395b41d3bf3079d0d0b",
"assets/assets/images/15.png": "3c988b08c37987fa3664cd3001276a76",
"assets/assets/images/16.png": "da3e23cc5087d75689adfa3931397938",
"assets/assets/images/17.png": "bd4f07c71fee10c04a6fa5301161efea",
"assets/assets/images/18.png": "dc79c9d7e0221c5ab252722e23663269",
"assets/assets/images/19.png": "a3bb5ae6fa582c7d157592e759236a07",
"assets/assets/images/2.png": "faf0fc0bd30fe323d5997203100d248f",
"assets/assets/images/20.png": "d691b88ea242dfb72650567c71da17d3",
"assets/assets/images/21.png": "3ba8d8efb7097d4fb68172d5d72f16e7",
"assets/assets/images/22.png": "ee734cce8b966bacce58c66b18340faa",
"assets/assets/images/3.png": "34679aeca68f54f6f63d7c050c343d11",
"assets/assets/images/4.png": "e622406d8f740da8405f96656bd96317",
"assets/assets/images/5.png": "7d2a3629ecf1a90abb9b87447f38c90e",
"assets/assets/images/6.png": "589ac6ee329668681bde88e954986f55",
"assets/assets/images/7.png": "b246c3ed4d36f87e35337820b89708fa",
"assets/assets/images/8.png": "26b3ca84dc42bf8507755b3544a2437c",
"assets/assets/images/9.png": "a8c16a55e9ea139f0dfe5d17061c5a66",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "46d239c39013aeb396ad157ed9299e56",
"assets/packages/flame_splash_screen/assets/layer1.png": "31625c711892b1d250fe3bb58ad32850",
"assets/packages/flame_splash_screen/assets/layer2.png": "51efb74c8ec5a2fd21f622392678f607",
"assets/packages/flame_splash_screen/assets/layer3.png": "24a8fdc53b85d6d749cc2857c708de49",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d7327facfd06dc9756f125ffd81f7f7b",
"/": "d7327facfd06dc9756f125ffd81f7f7b",
"main.dart.js": "921ba79b2d06b67f5081211549819754",
"manifest.json": "faf890e36fc57e219c73b652d4f94b93",
"version.json": "847ecaf3ea7dbabf4550c08be4a79392"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
