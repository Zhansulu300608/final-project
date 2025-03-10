function toggleMenu() {
    document.querySelector(".items").classList.toggle("active");
}


// slider

let slides = document.querySelectorAll('.hero-slide');
let currentIndex = 0;

function changeSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}

setInterval(changeSlide, 5000);





