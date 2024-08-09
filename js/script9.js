document.addEventListener('DOMContentLoaded', () => {
    const opciones = document.querySelectorAll('.opcion');
    const puntosDisplay = document.getElementById('puntos');
    let puntos = localStorage.getItem('puntos') ? parseInt(localStorage.getItem('puntos')) : 0;
    puntosDisplay.textContent = puntos;

    const respuestaCorrecta = 'a'; 

    opciones.forEach(opcion => {
        opcion.addEventListener('click', (e) => {
            const seleccion = e.target.id;
            if (seleccion === respuestaCorrecta) {
                e.target.classList.add('correcta');
                puntos++;
                puntosDisplay.textContent = puntos;
                localStorage.setItem('puntos', puntos); 
            } else {
                e.target.classList.add('incorrecta');
            }

            opciones.forEach(op => {
                op.disabled = true;
                if (op.id === respuestaCorrecta) {
                    op.classList.add('correcta');
                }
            });
        });
    });


    const siguienteBtn = document.getElementById('siguiente');
    siguienteBtn.addEventListener('click', () => {
        localStorage.setItem('puntos', puntos); 
    });
});