const carouselSlide = document.querySelector('.glider');
const carouselImages = document.querySelectorAll('.glider img');

let counter = 1;
cont size = carouselImages[0].clientWidth;

carouselSlide.getElementsByClassName.transform = 'translateX(' + (-size * counter) + 'px)';