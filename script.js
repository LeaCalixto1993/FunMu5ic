// Añadimos un evento de envío al formulario
formulario.addEventListener('submit', function(event) {
    // Prevenimos el envío por defecto del formulario
    event.preventDefault();

    // Capturamos el valor ingresado en el campo de texto
    const nombreUsuario = document.getElementById('nombre').value;

    // Aquí puedes usar el valor ingresado (nombreUsuario) si lo necesitas

    // Redireccionamos a la siguiente página
    window.location.href = "subcarpeta/index1.html"; // Reemplaza con la URL de tu siguiente página
});

// También podemos manejar la pulsación de la tecla Enter dentro del campo de texto
const campoNombre = document.getElementById('nombre');

campoNombre.addEventListener('keyup', function(event) {
    // Verificamos si la tecla presionada es Enter
    if (event.key === 'Enter') {
        // Simulamos el envío del formulario
        formulario.dispatchEvent(new Event('submit'));
    }
});