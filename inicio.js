var additionalImages = [
    "./assets/images/554.jpg",
    "./assets/images/543.jpg",
    "./assets/images/yyty.jpg"
];

var currentImageIndex = 0;

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % additionalImages.length;
    document.getElementById('imageToShow').src = additionalImages[currentImageIndex];
}

setTimeout(changeImage, 3000);

setInterval(changeImage, 3000);