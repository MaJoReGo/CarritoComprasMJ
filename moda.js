var additionalImages = [
    "./assets/images/hhhs.jpg",
    "./assets/images/543.jpg",
    "./assets/images/yyty.jpg"
];

var currentImageIndex = 0;

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % additionalImages.length;
    document.getElementById('imageMain').src = additionalImages[currentImageIndex];
}

setTimeout(changeImage, 3000);

setInterval(changeImage, 3000);