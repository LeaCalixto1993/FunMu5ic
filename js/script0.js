document.addEventListener('DOMContentLoaded', () => {

    const puntosElemento = document.getElementById('puntos');

    const btnVolverAJugar = document.getElementById('boton-volver-a-jugar');


    let puntaje = localStorage.getItem('puntos') ? parseInt(localStorage.getItem('puntos')) : 0;


    puntosElemento.textContent = puntaje;


    btnVolverAJugar.addEventListener('click', () => {

        puntaje = 0;

        localStorage.setItem('puntos', puntaje);

        puntosElemento.textContent = puntaje;
    });
});


function guardarPuntaje(nuevoPuntaje) {

    const puntajeActual = localStorage.getItem('puntos') ? parseInt(localStorage.getItem('puntos')) : 0;

    const puntajeTotal = puntajeActual + nuevoPuntaje;

    localStorage.setItem('puntos', puntajeTotal);


    window.location.href = 'index0.html';
}
document.addEventListener('DOMContentLoaded', () => {

    const puntosElemento = document.getElementById('puntos');

    const btnVolverAJugar = document.getElementById('boton-volver-a-jugar');


    let puntaje = localStorage.getItem('puntos') ? parseInt(localStorage.getItem('puntos')) : 0;


    puntosElemento.textContent = puntaje;


    btnVolverAJugar.addEventListener('click', () => {

        puntaje = 0;

        localStorage.setItem('puntos', puntaje);

        puntosElemento.textContent = puntaje;
    });
});


function guardarPuntaje(nuevoPuntaje) {

    const puntajeActual = localStorage.getItem('puntos') ? parseInt(localStorage.getItem('puntos')) : 0;

    const puntajeTotal = puntajeActual + nuevoPuntaje;

    localStorage.setItem('puntos', puntajeTotal);


    window.location.href = 'index0.html';
}
