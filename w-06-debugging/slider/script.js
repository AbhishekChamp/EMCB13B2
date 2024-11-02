let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const slideWidth = -currentSlide * 100;
    document.querySelector(
        ".slides",
    ).style.transform = `translateX(${slideWidth}%)`;
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// Initialize the slider
showSlide(currentSlide);
