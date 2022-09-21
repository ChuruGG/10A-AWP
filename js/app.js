

if(navigator.serviceWorker){
    console.log("Hola desde app, lo soportamos")
    navigator.serviceWorker.register('/sw.js');

}

