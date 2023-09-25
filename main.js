// SLIDER
window.addEventListener('load', function(){
    var botonRetroceder = document.querySelector('#retroceder');
    var botonAvanzar = document.querySelector('#avanzar')
    var imagen = document.querySelector('#slider')

    var imagenes = [];
    imagenes[0] = 'img/imagen1.jpg';
    imagenes[1] = 'img/imagen2.jpg';
    imagenes[2] = 'img/imagen3.jpg';
    imagenes[3] = 'img/imagen4.jpg';
    imagenes[4] = 'img/imagen5.jpg';
    imagenes[5] = 'img/imagen6.jpg';
    imagenes[6] = 'img/imagen7.jpg';

    var posicionActualAuto = 0;
    var posicionActualManual = 0;
    var intervalo;

    function cambiarImagenes(){
        imagen.src = imagenes[posicionActualAuto];

        if (posicionActualAuto < imagenes.length - 1){
            posicionActualAuto++;
        } 
        else{
            posicionActualAuto = 0;
        }
    }
    // iniciamos el intervalo de tiempo automáticamente
    intervalo = setInterval(cambiarImagenes, 3000);

    function anvanzarImagen(){
        // detenemos el intervalo de tiempo antes de cambiar a manual
        clearInterval(intervalo)

        if (posicionActualManual >= imagenes.length - 1){
            posicionActualManual = 0;
        } else{
            posicionActualManual++;
        }
        imagen.src = imagenes[posicionActualManual];

        // reiniciamos el intervalo después del cambio manual
        intervalo = setInterval(cambiarImagenes, 3000);
    }

    function retrocederImagen(){
        // detenemos el intervalo de tiempo antes de cambiar a manual
        clearInterval(intervalo)

        if(posicionActualManual <= 0){
            posicionActualManual = imagenes.length - 1;
        } else{
            posicionActualManual--;
        }
        imagen.src = imagenes[posicionActualManual];

        // detenemos el intervalo de tiempo antes de cambiar a manual
        intervalo = setInterval(cambiarImagenes, 3000);
    }

    botonAvanzar.addEventListener('click', anvanzarImagen);
    botonRetroceder.addEventListener('click', retrocederImagen);

});

// FORMULARIO - RECOMENDACION

function enviar(){
    var nombre = document.querySelector('#nombre').value;
    var apellido = document.querySelector('#apellido').value;
    var nombreCancion = document.querySelector('#nombreCancion').value;
    var nombreArtista = document.querySelector('#nombreArtista').value;

    if (nombre !== '' && apellido !== '' && nombreCancion !== '' && nombreArtista !== ''){
        alert('¡Gracias por tu recomendación! 😃');
    }else{
        alert('⚠️Rellena los campos obligatorios⚠️');
    }
}
