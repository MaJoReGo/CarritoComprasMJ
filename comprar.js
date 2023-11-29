// Tu lógica para la página de compra

// Evento de clic para agregar productos al carrito
document.querySelectorAll('.ButtonFirst button').forEach((button) => {
    button.addEventListener('click', function () {
        agregarAlCarrito('Abrigo Afelpado', 85000, 10);
        mostrarCarrito();
    });
});

// Puedes agregar eventos clic adicionales para los botones de otros productos

// Evento de clic para el enlace "Ver Carrito"
document.getElementById('carritoLink').addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'carrito.html';
});

