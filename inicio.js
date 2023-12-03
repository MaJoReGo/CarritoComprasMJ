var additionalImages = [
    "./assets/images/tienda2.jpg",
    "./assets/images/tienda3.jpg",
    "./assets/images/tienda4.jpg"
];

var currentImageIndex = 0;

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % additionalImages.length;
    document.getElementById('imageToShow').src = additionalImages[currentImageIndex];
}

setTimeout(changeImage, 3000);

setInterval(changeImage, 3000);