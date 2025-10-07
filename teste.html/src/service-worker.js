self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("app--cache").then(cache => {
            return cache.addAll([
                "index.html",
                "manifest.json",
                "icon-192.png",
                "icon-512.png",
            ]);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWidth(
        caches.match(event.request). then (response => response || fetch(event.request))
    );

});