function agregarProducto() {
    const nombre = document.getElementById('nombre').value;
    const precio = parseFloat(document.getElementById('precio').value);
    const existencia = parseInt(document.getElementById('existencia').value);
    const descripcion = document.getElementById('descripcion').value;
    const imagen = document.getElementById('imagen').value;

    const listaProductos = document.getElementById('listaProductos');
    const li = document.createElement('li');

    const img = document.createElement('img');
    img.src = imagen;
    img.alt = nombre;

    const nombrePrecio = document.createElement('div');
    nombrePrecio.innerHTML = `<b>${nombre}</b> - $${precio.toFixed(2)}`;

    li.appendChild(img);
    li.appendChild(nombrePrecio);
    listaProductos.appendChild(li);

    // Limpiar el formulario
    document.getElementById('formularioProducto').reset();
}