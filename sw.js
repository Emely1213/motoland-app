const URL = "https://script.google.com/macros/s/AKfycbxFWEud4Ii35PSNqWf5YvLJRE_sWva1lgtZmCoHR_O9BsEtmoDuWS7ePdXaun4e62Gv/exec";
self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open("app").then(cache=>{
      return cache.addAll(["./"]);
    })
  );
});