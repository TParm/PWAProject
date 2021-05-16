// if ("serviceWorker" in navigator) {
//     window.addEventListener("load", function() {
//         navigator.serviceWorker
//             .register("/serviceWorker.js")
//             .then((res) => console.log("service worker registered"))
//             .catch((err) => console.log("service worker not registered", err));
//     });
// }

const container = document.querySelector(".container");
const Cars = [
  { name: "A-Klasse", image: "images/MBA1.jpg" },
  { name: "A-Klasse Berline", image: "images/MBA2.jpg" },
  { name: "B-Klasse", image: "images/MBB1.jpg" },
  { name: "EQC", image: "images/MBEQC.jpg" },
  { name: "C-Klasse Berline", image: "images/MBC1.jpg" },
  { name: "C-Klasse Break", image: "images/MBC2.jpg" },
  { name: "C-Klasse Coupé", image: "images/MBC3.jpg" },
  { name: "C-Klasse Cabriolet", image: "images/MBC4.jpg" },
  { name: "CLA Coupé", image: "images/MBCLA1.jpg" },
  { name: "CLA Shouting Brake", image: "images/MBCLA2.jpg" },
  { name: "CLS", image: "images/MBCLS.jpg" },
  { name: "E-Klasse Berline", image: "images/MBE1.jpg" },
  { name: "E-Klasse Break", image: "images/MBE2.jpg" },
  { name: "E-Klasse Coupé", image: "images/MBE3.jpg" },
  { name: "E-Klasse Cabriolet", image: "images/MBE4.jpg" },
  { name: "G-Klasse", image: "images/MBG.jpg" },
  { name: "GLA", image: "images/MBGLA.jpg" },
  { name: "EQA", image: "images/MBEQA.jpg" },
  { name: "GLB", image: "images/MBGLB.jpg" },
  { name: "GLC SUV", image: "images/MBGLC.jpg" },
  { name: "GLC Coupé", image: "images/MBGLC2.jpg" },
  { name: "GLE SUV", image: "images/MBGLE.jpg" },
  { name: "GLE Coupé", image: "images/MBGLE2.jpg" },
  { name: "GLS", image: "images/MBGLS.jpg" },
  { name: "S-Klasse Berline", image: "images/MBS1.jpg" },
  { name: "S-Klasse Coupé", image: "images/MBS2.jpg" },
  { name: "S-Klasse Cabriolet", image: "images/MBS3.jpg" },
  { name: "SLC", image: "images/MBSLC.jpg" },
  { name: "V-Klasse", image: "images/MBV.jpg" },
  { name: "EQV", image: "images/MBEQV.jpg" },
  { name: "X-Klasse", image: "images/MBX.jpg" },
  { name: "AMG GT Coupé", image: "images/AMGGT.jpg" },
  { name: "AMG GT Roadster", image: "images/AMGRoad.jpg" },
  { name: "AMG GT4-Door Coupé", image: "images/AMGGT4.jpg" },
];

const showCars = () => {
  let output = "";
  Cars.forEach(
    ({ name, image }) =>
      (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="/testrit.html">Win testrit</a>
                </div>
                `)
  );
  container.innerHTML = output;
};

document.getElementById("name" && "name1" && "name2" && "name3" && "name4")?.addEventListener("keyup", function() {
  var nameInput = document.getElementById('name').value;
  var nameInput1 = document.getElementById('name1').value;
  var nameInput2 = document.getElementById('name2').value;
  var nameInput3 = document.getElementById('name3').value;
  var nameInput4 = document.getElementById('name4').value;
  if (nameInput != "" && nameInput1 != "" && nameInput2 != "" && nameInput3 != "" && nameInput4 != "") {
      document.getElementById('btnShowNotification').removeAttribute("disabled");
  } else {
      document.getElementById('btnShowNotification').setAttribute("disabled", null);
  }
});


document.addEventListener("DOMContentLoaded", showCars);

window.addEventListener("load", function () {
  console.log("Loaded.");

  // Service Worker registreren.
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("service-worker.js")
      .then((registration) => {
        console.log("Registerd:", registration);
      })
      .catch((error) => console.log(error));
  } else {
    console.log("No service worker support in this browser.");
  }

  // Click events opvangen.
  document
    .querySelector("#btnGrantPermission")
    ?.addEventListener("click", function () {
      console.log("clicked");

      // Controleer of notifications mogelijk zijn met deze browser...
      if (!("Notification" in window)) {
        console.log("Notifications are not supported by your browser.");
      } else {
        if (Notification.permission == "granted") {
          console.log("Permission granted before.");
        } else if (Notification.permission !== "denied") {
          Notification.requestPermission().then((permission) => {
            if (permission == "granted") {
              console.log("Permission granted.");
            }
          });
        } else {
          console.log("Permission denied. No Notifications will be send.");
        }
      }
    });

  document
    .querySelector("#btnShowNotification")
    ?.addEventListener("click", function () {
      if (Notification.permission === "granted") {
        navigator.serviceWorker.getRegistration().then((registration) => {
          // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/showNotification
          registration.showNotification("MB Testrit!", {
            vibrate: [
              300, 100, 100, 50, 100, 50, 100, 100, 150, 250, 100, 700, 200,
              150, 200,
            ],
            body: "Bericht is verstuurd naar één van onze werknemers!",
            icon: "/images/icons/brand.png",
            actions: [
              { action: "go", title: "Ga naar de officiële website.." },
              { action: "noGo", title: "Scroll verder op huidige website" },
            ],
          });
            
          console.log("New notification was send.");
          window.location.href = "/index.html";
        });
      }
    });

    
    document.querySelector("#btnSubscribeToPushNotification")
        .addEventListener('click', function(){
            console.log("Clicked to subscribe.");

            navigator.serviceWorker.getRegistration()
            .then(registration => {
                // https://developer.mozilla.org/en-US/docs/Web/API/PushManager/subscribe
                // Public key: BGR9dUZ-UlIFfVWIfSfkZ3lFP52RuXUPvXFE5fsL0CAXnawPKoQDLMKguQSTW6DCaCfEwMlVz9HPkXH8IztuMIM
                // Private key: cJdeLej_aarHqCZEApBMu7Ikj2h58vNMtXMGwxrKIn8
                registration.pushManager.subscribe(
                    {
                        userVisibleOnly: true,
                        applicationServerKey: urlB64ToUint8Array("BGR9dUZ-UlIFfVWIfSfkZ3lFP52RuXUPvXFE5fsL0CAXnawPKoQDLMKguQSTW6DCaCfEwMlVz9HPkXH8IztuMIM")
                    }
                )
                .then(subscription => {
                    console.log("Subscripton: ", JSON.stringify(subscription));

                    // Verzend het 'subscription object' naar de centrale server om op te slaan.
                    var options = {
                        method: "POST",
                        headers: { "Content-type": "application/json"},
                        body: JSON.stringify(subscription)
                    };
                    fetch("api/save-subscription", options)
                    .then(response => {
                        console.log("Response:", response);
                        return response.json();
                    })
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => console.log(error));
                })
                .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
        });
});
// Zie: https://github.com/GoogleChromeLabs/web-push-codelab/blob/master/app/scripts/main.js
function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}