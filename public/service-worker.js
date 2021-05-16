const staticTestRit = "Testrit-v1";
const assets = [
    "/",
    "/index.html",
    "/shop.html",
    "/contact.html",
    "/css/reset.css",
    "/css/style.css",
    "/css/styleShop.css",
    "/css/styleAbout.css",
    "/scripts/app.js",
    "/images/MBA1.jpg",
    "/images/MBA2.jpg",
    "/images/MBB1.jpg",
    "/images/MBC1.jpg",
    "/images/MBC2.jpg",
    "/images/MBC3.jpg",
    "/images/MBC4.jpg",
    "/images/MBCLA1.jpg",
    "/images/MBCLA2.jpg",
    "/images/MBCLS.jpg",
    "/images/MBE1.jpg",
    "/images/MBE2.jpg",
    "/images/MBE3.jpg",
    "/images/MBE4.jpg",
    "/images/MBEQA.jpg",
    "/images/MBEQC.jpg",
    "/images/MBEQV.jpg",
    "/images/MBG.jpg",
    "/images/MBGLA.jpg",
    "/images/MBGLB.jpg",
    "/images/MBGLC.jpg",
    "/images/MBGLE.jpg",
    "/images/MBGLE2.jpg",
    "/images/MBGLS.jpg",
    "/images/MBS1.jpg",
    "/images/MBS2.jpg",
    "/images/MBS3.jpg",
    "/images/MBSLC.jpg",
    "/images/MBV.jpg",
    "/images/MBX.jpg",
    "/images/AMGGT.jpg",
    "/images/AMGGT4.jpg",
    "/images/AMGRoad.jpg",

];

self.addEventListener("install", (installEvent) => {
    installEvent.waitUntil(
      caches.open(staticTestRit).then(cache => {
        cache.addAll(assets);
      })
    );
  });
  
  self.addEventListener("fetch", (fetchEvent) => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then((res) => {
        return res || fetch(fetchEvent.request);
      })
    );
  });

self.addEventListener('notificationclick', event => {
  console.log("Notification clicked.");

  event.notification.close();

  if(event.action === "go")
  {
      console.log("Ga naar de officiele site");
      // https://developer.mozilla.org/en-US/docs/Web/API/Clients/openWindow
      clients.openWindow("https://www.mercedes-benz.be/nl_BE/passengercars.html?group=all&subgroup=see-all&view=BODYTYPE");
  }
  else
      console.log("Notification closed.");
});

// Vang het 'push' event op!
self.addEventListener('push', event => {
  console.log("Notification was pushed from the push service: ", event.data.text());
  

  event.waitUntil(
      self.registration.showNotification(event.data.text())
  );
});