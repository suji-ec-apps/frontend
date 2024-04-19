const imageContainer = document.getElementById('imageContainer');

function changeImage(imageSrc) {
    imageContainer.style.backgroundImage = `url(${imageSrc})`;
}