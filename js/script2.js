document.addEventListener('DOMContentLoaded', () => {
    const opciones = document.querySelectorAll('.opcion');
    const puntosDisplay = document.getElementById('puntos');
    let puntos = localStorage.getItem('puntos') ? parseInt(localStorage.getItem('puntos')) : 0;
    puntosDisplay.textContent = puntos;

    const respuestaCorrecta = 'd'; // La respuesta correcta es la opción 'd' (Michael Jackson)

    opciones.forEach(opcion => {
        opcion.addEventListener('click', (e) => {
            const seleccion = e.target.id;
            if (seleccion === respuestaCorrecta) {
                e.target.classList.add('correcta');
                puntos++;
                puntosDisplay.textContent = puntos;
                localStorage.setItem('puntos', puntos); // Guardar puntaje en localStorage
            } else {
                e.target.classList.add('incorrecta');
            }
            // Desactivar las opciones después de seleccionar una respuesta
            opciones.forEach(op => {
                op.disabled = true;
                if (op.id === respuestaCorrecta) {
                    op.classList.add('correcta');
                }
            });
        });
    });

    // Manejar el botón siguiente
    const siguienteBtn = document.getElementById('siguiente');
    siguienteBtn.addEventListener('click', () => {
        localStorage.setItem('puntos', puntos); // Asegurar que el puntaje se mantenga en localStorage
    });
});
