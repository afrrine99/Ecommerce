const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const productSlider = document.getElementById('product-slider');

// Set the width of each product card dynamically
const productCardWidth = document.querySelector('.card-fs-content-body-unit').offsetWidth + 10; // Add the gap

prevBtn.addEventListener('click', () => {
    productSlider.scrollLeft -= productCardWidth * 2; // Scroll two products at a time
});

nextBtn.addEventListener('click', () => {
    productSlider.scrollLeft += productCardWidth * 2; // Scroll two products at a time
});
