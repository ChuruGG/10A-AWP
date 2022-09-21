const IMAGES = [
    'images/garou.jpg',
    'images/genos.jpg',
    'images/boros.jpg',
    'images/metal-bat.jpg',
    
];

const EXTENSION =  /\.(jpg|jpeg|png|gif|webp)$/gi;


// Evento de instalación
self.addEventListener('install', event => {
    console.log('install');
});

// Evento de peticiones
self.addEventListener('fetch', event => {
 
    returnCustomCss(event);
    changeImage(event);
})



function changeCssToImage (event) {
    // Esto provoca que los estilos mueran en la página.
    if (event.request.url.includes('.css')) {
        // Imprime solo los archivos con extención css
        console.log(event.request.url);
    
        // En el mismo evento, responde con un fetch a la url
        event.respondWith(fetch(IMAGES));
    }
}

function returnCustomCss (event) {
    if (event.request.url.includes('style.css')) {
        // Imprime solo los archivos con extención css
        console.log(event.request.url);

        // Crea una respuesta y retornala
        const resp = new Response(`
            body {
                color: #fff;
                background-color: darkred;
            }   
        `, 
        {
            headers: {
                'Content-Type': 'text/css'
            }
        });

        // En el mismo evento, responde con una respuesta personalizada
        event.respondWith(resp);
    }
}


//TAREA: EN LA IMAGEN QUE TENEMOS SUSTITUIR POR  LAs DEMAS 
function changeImage (event) {
    let index = Math.floor(Math.random() * IMAGES.length);
    if (EXTENSION.test(event.request.url)) {
       // console.log(event.request.url);
        event.respondWith(fetch(IMAGES[index]));
    } 
}




