self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("app--cache").then(cache => {
            return cache.addAll([
                "index.html",
                "manifest.json",
                "icone192.png",
                "icon512.png",
            ]);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWidth(
        caches.match(event.request). then (response => response || fetch(event.request))
    );


});

