var additionalImages = [
    "./assets/images/554.jpg",
    "./assets/images/543.jpg",
    "./assets/images/yyty.jpg"
    // Agrega más rutas de imágenes según sea necesario
];

var currentImageIndex = 0;

// Función para cambiar la imagen cada 3 segundos (3000 milisegundos)
function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % additionalImages.length;
    document.getElementById('imageToShow').src = additionalImages[currentImageIndex];
}

// Cambia la imagen inicial después de 3 segundos
setTimeout(changeImage, 3000);

// Establece un intervalo para cambiar la imagen cada 3 segundos
setInterval(changeImage, 3000);