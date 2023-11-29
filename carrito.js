// Lógica adicional para la página del carrito si es necesario
        // Puedes utilizar JavaScript para manipular el DOM y mostrar los productos en el carrito
        // Además, puedes incluir aquí la lógica para eliminar productos y otras interacciones en la página del carrito
        document.addEventListener('DOMContentLoaded', function () {
            // Función para mostrar el contenido del carrito en la página del carrito
            function mostrarCarritoEnPagina() {
                const listaCarrito = document.getElementById('listaCarrito');
                const totalCarrito = document.getElementById('totalCarrito');

                // Limpiar contenido actual
                listaCarrito.innerHTML = "";

                // Iterar sobre productos en el carrito y agregar elementos a la lista
                carrito.forEach(producto => {
                    const li = document.createElement('li');
                    li.textContent = `${producto.nombre} - Cantidad: ${producto.cantidad} - Precio: $${producto.precio.toFixed(2)}`;

                    // Agregar botón de eliminar
                    const botonEliminar = document.createElement('button');
                    botonEliminar.textContent = 'Eliminar';
                    botonEliminar.addEventListener('click', function () {
                        eliminarProductoDelCarrito(producto.nombre);
                        mostrarCarritoEnPagina(); // Actualizar la lista después de eliminar un producto
                        actualizarEnlaceCarritoEnPagina(); // Actualizar el enlace del carrito en la página
                    });

                    li.appendChild(botonEliminar);
                    listaCarrito.appendChild(li);
                });

                // Calcular y mostrar el total del carrito
                const total = carrito.reduce((sum, producto) => sum + producto.cantidad * producto.precio, 0);
                totalCarrito.textContent = `$${total.toFixed(2)}`;
            }

            mostrarCarritoEnPagina(); // Mostrar el carrito al cargar la página del carrito
        });
        // Lógica adicional para la página del carrito si es necesario
// Puedes utilizar JavaScript para manipular el DOM y mostrar los productos en el carrito
// Además, puedes incluir aquí la lógica para eliminar productos y otras interacciones en la página del carrito
document.getElementById('finalizarCompra').addEventListener('click', function () {
    // Lógica para finalizar la compra, por ejemplo, enviar el pedido al servidor
    alert('Compra finalizada. ¡Gracias por comprar!');
});



