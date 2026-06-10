'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "615c59b9360363ccd120b359599e30bf",
"assets/AssetManifest.bin.json": "b2ca84293b268c603bbabd0567be166e",
"assets/assets/calendar_view.mp4": "2cc97ab87674e8573a5d9007c4919bef",
"assets/assets/gantt_view.mp4": "e876603916585a439eb2f81979b6bab4",
"assets/assets/header_dark.png": "1d8d979f7f4d01a736d4061562fb7af3",
"assets/assets/header_light.png": "4f473a188b3dae15518e26e7e5febc13",
"assets/assets/logo_dark.png": "d06fc7f8a076a2e79d8d403ae2c2f214",
"assets/assets/logo_light.png": "509943c964511bcc19e591eb49c7b36b",
"assets/assets/med/header_dark.png": "125c3958c193a955ab270a1de28a304b",
"assets/assets/med/header_light.png": "29c6e12b315f85ebc5da72fe1f3bf4ee",
"assets/assets/med/logo_dark.png": "ac1bfb2422be67f275534155d03db875",
"assets/assets/med/logo_light.png": "db0108bf2e15cdfd0928981a6378d008",
"assets/assets/small/header_dark.png": "2b6711bd67e9c8dec71ffcb293109e4a",
"assets/assets/small/header_light.png": "daef6357dd994205e897f985916e869e",
"assets/assets/small/logo_dark.png": "ebdafee1de539f26d9cc38fbf3f20c26",
"assets/assets/small/logo_light.png": "106e559d6e4d40bb7907aea452888566",
"assets/assets/task_breakdown_view.mp4": "b200d886cd3f1e9a8b97c3b4eb6ed63a",
"assets/assets/xsmall/header_dark.png": "d40230ddf678bfa886e5bc8ff4301e95",
"assets/assets/xsmall/header_light.png": "3f9d8705542f87063fe6f5460625a4d8",
"assets/assets/xsmall/logo_dark.png": "8300df9a306983694541f1c3cafb6b33",
"assets/assets/xsmall/logo_light.png": "829349807d4a51c4e88482f3489e2a4e",
"assets/assets/xxsmall/header_dark.png": "43b03a99a6e4612b6a467a5ce27483e9",
"assets/assets/xxsmall/header_light.png": "02ce41e054977cee2b943b123f4cfa32",
"assets/assets/xxsmall/logo_dark.png": "ad76bcba4faee31841148e2e4b0b71a9",
"assets/assets/xxsmall/logo_light.png": "64220d4074aa5c6dfca336a365cfb117",
"assets/assets/xxxsmall/header_dark.png": "2be86f7f1de445a1efc48e0cce2f78ae",
"assets/assets/xxxsmall/header_light.png": "a6f796f0a79c63a116ac2ca460681d76",
"assets/assets/xxxsmall/logo_dark.png": "2c53e80a18f2c1ca9eda92dcf06dc3c2",
"assets/assets/xxxsmall/logo_light.png": "cae5da4ae6e4195158d120778fc419bc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "27c68a2799976633e4966adf46a80410",
"assets/NOTICES": "ec625fdfcf9b1cba97e13ed855e7612e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "760bb071c979073ff70a72e7bdae6005",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "e037d9995a3a2cfd305abf1a38928f7a",
"icons/Icon-192.png": "f5828aefbded4c79b1559613936198a9",
"icons/Icon-512.png": "2dc8b520d6019306a9433727729c0894",
"icons/Icon-maskable-192.png": "f5828aefbded4c79b1559613936198a9",
"icons/Icon-maskable-512.png": "2dc8b520d6019306a9433727729c0894",
"index.html": "dcd88c4d1d34fc35e084ccc3fd0ce637",
"/": "dcd88c4d1d34fc35e084ccc3fd0ce637",
"main.dart.js": "af1c6c1e76fe90a0ff93e7f573df81b4",
"manifest.json": "0069b8e57be8954f24f56259ee7aa475",
"version.json": "2b521e10dfa0f067561de489a19d6620"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
