self.addEventListener('install', (e) =>{
    console.log("Установлен");

    e.waitUntil(
        caches.open('my-best-cache')
          .then((cache) => {
            cache.addAll([
              './',
              './index.html',
              './css/style.css',
            ])
          })
      )
    });

self.addEventListener('activate', (e) =>{
    console.log("Активирован")
});

self.addEventListener('fetch', (e) =>{
    console.log("Происходит запрос на сервер")
    e.respondWith(
        caches.match(e.request)
    )
})