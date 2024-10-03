let currentIndex = 0;
    const slidesToShow = 4; // Change this to show more products
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Update slider position based on the current index
    function updateSliderPosition() {
        const slider = document.getElementById('imageSlider');
        const slideWidth = slides[0].clientWidth;
        const newPosition = -currentIndex * slideWidth;
        slider.style.transform = `translateX(${newPosition}px)`;
    }

    // Move to the next slide
    function nextSlide() {
        if (currentIndex < totalSlides - slidesToShow) {
            currentIndex++;
            updateSliderPosition();
        } else {
            currentIndex = 0; // Restart from the first slide
            updateSliderPosition();
        }
    }

    // Move to the previous slide
    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        } else {
            currentIndex = totalSlides - slidesToShow; // Jump to the last visible slide
            updateSliderPosition();
        }
    }

