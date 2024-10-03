const products = [
    { src: 'image/product6.webp', alt: 'Product 6', text: 'Product 6' },
    { src: 'image/product7.webp', alt: 'Product 7', text: 'Product 7' },
    { src: 'image/product8.webp', alt: 'Product 8', text: 'Product 8' },
    { src: 'image/product9.webp', alt: 'Product 9', text: 'Product 9' },
    { src: 'image/product10.webp', alt: 'Product 10', text: 'Product 10' }
    // Add more products as needed
];

function loadMoreProducts() {
    const slider = document.getElementById('imageSlider');
    products.forEach(product => {
        const newSlide = document.createElement('div');
        newSlide.classList.add('slide');
        newSlide.innerHTML = `
            <img src="${product.src}" alt="${product.alt}">
            <p>${product.text}</p>
        `;
        slider.appendChild(newSlide);
    });
}
