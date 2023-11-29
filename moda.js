var additionalImages = [
    "./assets/images/hhhs.jpg",
    "./assets/images/faldaRosaPana.jpg",
    "./assets/images/trajeRosaPana.jpg"
];

var currentImageIndex = 0;

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % additionalImages.length;
    document.getElementById('imageMain').src = additionalImages[currentImageIndex];
}

setTimeout(changeImage, 3000);

setInterval(changeImage, 3000);

var additionalImagesSecond = [
    "./assets/images/camisaRosaClaro.jpg",
    "./assets/images/faldaRosaPana.jpg",
    "./assets/images/trajeRosaPana.jpg"
];

var currentImageIndex = 0;

function changeImageSecond() {
    currentImageIndex = (currentImageIndex + 1) % additionalImages.length;
    document.getElementById('imageSecond').src = additionalImagesSecond[currentImageIndex];
}

setTimeout(changeImageSecond, 3000);

setInterval(changeImageSecond, 3000);