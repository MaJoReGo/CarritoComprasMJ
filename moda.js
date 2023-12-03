var additionalImages = [
    "./assets/images/vestidoNaranjaLentejuelas.jpg",
    "./assets/images/camisaVerde.jpg",
    "./assets/images/chaquetaRosa.jpg"
];

var currentImageIndex = 0;

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % additionalImages.length;
    document.getElementById('imageMain').src = additionalImages[currentImageIndex];
}

setTimeout(changeImage, 3000);

setInterval(changeImage, 3000);

var additionalImagesSecond = [
    "./assets/images/vestidoAcanaladoAzul.jpg",
    "./assets/images/camisaGris.jpg",
    "./assets/images/bufandaNaranja.jpg"
];

var currentImageIndex = 0;

function changeImageSecond() {
    currentImageIndex = (currentImageIndex + 1) % additionalImages.length;
    document.getElementById('imageSecond').src = additionalImagesSecond[currentImageIndex];
}

setTimeout(changeImageSecond, 3000);

setInterval(changeImageSecond, 3000);