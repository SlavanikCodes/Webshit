const images = [
    "img/Minecraft.jpg",
    "img/Accountant.jpg",
    "img/SnowWhite.jpg"
];

let current = 0;
const slideshow = document.getElementById("slideshow");

function changeImage() {
    slideshow.style.opacity = 0;

    setTimeout(() => {
        current = (current + 1) % images.length;
        slideshow.src = images[current];
        slideshow.onload = function() {
            slideshow.style.opacity = 1;
        };
    }, 1000);
}

setInterval(changeImage, 8000);