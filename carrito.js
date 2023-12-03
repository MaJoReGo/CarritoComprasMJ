const carrito = [];

function agregarAlCarrito(button) {
    const productoSeleccionado = button.parentElement;
    const nombre = productoSeleccionado.dataset.nombre;
    const precio = parseFloat(productoSeleccionado.dataset.precio);
    let existencia = parseInt(productoSeleccionado.dataset.existencia);

    if (existencia > 0) {
        // Agregar al carrito
        carrito.push({ nombre, precio });

        // Restar existencia y actualizar en la lista de productos
        existencia--;
        productoSeleccionado.dataset.existencia = existencia;

        // Mostrar mensaje de confirmación
        alert(`Se agregó ${nombre} al carrito. Existencia actual: ${existencia}`);

        // Actualizar la visualización del carrito
        mostrarCarrito();
    } else {
        alert("Producto agotado");
    }
}

function mostrarCarrito() {
const listaCarrito = document.getElementById("listaCarrito");
const totalCarrito = document.getElementById("totalCarrito");

listaCarrito.innerHTML = "";
let total = 0;

carrito.forEach((producto, index) => {
const li = document.createElement("li");

const img = document.createElement("img");
img.src = `./assets/images/${producto.nombre.replace(/\s+/g, '')}.jpg`;
img.alt = producto.nombre;
img.style.maxWidth = '50px';  // Puedes ajustar el tamaño de la imagen según tus preferencias
img.style.maxHeight = '50px';
li.appendChild(img);

const nombrePrecio = document.createElement("div");
nombrePrecio.innerHTML = `<b>${producto.nombre}</b> - $${producto.precio.toFixed(2)}`;

const botonBorrar = document.createElement("button");
botonBorrar.textContent = "Borrar Producto";
botonBorrar.onclick = function () {
    eliminarDelCarrito(index);
};

li.appendChild(nombrePrecio);
li.appendChild(botonBorrar);
listaCarrito.appendChild(li);

total += producto.precio;
});

totalCarrito.textContent = total.toFixed(2);
}
function eliminarDelCarrito(index) {
    const productoEliminado = carrito.splice(index, 1)[0];

    // Restablecer existencia del producto eliminado en la lista de productos
    const productoEnLista = document.querySelector(`[data-nombre="${productoEliminado.nombre}"]`);
    productoEnLista.dataset.existencia = parseInt(productoEnLista.dataset.existencia) + 1;

    // Actualizar la visualización del carrito
    mostrarCarrito();
}

function vaciarCarrito() {
    // Restablecer existencia de productos en el carrito al vaciarlo
    carrito.forEach(producto => {
        const productoEnLista = document.querySelector(`[data-nombre="${producto.nombre}"]`);
        productoEnLista.dataset.existencia = parseInt(productoEnLista.dataset.existencia) + 1;
    });

    // Vaciar el carrito
    carrito.length = 0;

    // Actualizar la visualización del carrito
    mostrarCarrito();
}

function comprarProductos() {
    if (carrito.length > 0) {
        alert("¡Gracias por tu compra! Productos comprados:\n" + obtenerProductosComprados());
        // Puedes realizar acciones adicionales relacionadas con la compra aquí
        vaciarCarrito();
    } else {
        alert("El carrito está vacío. Agrega productos antes de comprar.");
    }
}

function obtenerProductosComprados() {
    return carrito.map(producto => `${producto.nombre} - $${producto.precio.toFixed(2)}`).join('\n');
}
