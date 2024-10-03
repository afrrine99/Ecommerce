const showMoreBtn = document.querySelector('.show-more-btn');
const productGrid = document.querySelector('.fs-product-grid');

// Example of additional products to show
const additionalProducts = [
    {
        title: '3 In 1 Usb Cable',
        price: '232',
        originPrice: '842',
        discount: '-72%',
        image: 'image/product.webp',
    },
    {
        title: 'Aromatic Humidifier',
        price: '129',
        originPrice: '842',
        discount: '-72%',
        image: 'images/Aromatic Humidifier.webp',
    },
    {
        title: 'Another Product',
        price: '150',
        originPrice: '300',
        discount: '-50%',
        image: 'images/another-product.webp',
    },
    // Add more product objects as needed
];

let currentIndex = 0;

function showMoreProducts() {
    const productsToShow = 2; // Number of products to show each time
    const totalProducts = additionalProducts.length;

    for (let i = 0; i < productsToShow; i++) {
        if (currentIndex < totalProducts) {
            const product = additionalProducts[currentIndex];
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <a class="card-fs-content-body-unit" href="#">
                    <div class="fs-card-img-container">
                        <img src="${product.image}" alt="Product Image">
                    </div>
                    <div class="fs-card-text">
                        <p class="fs-card-title">${product.title}</p>
                        <div class="fs-card-price">
                            <span class="currency">৳</span><span class="price">${product.price}</span>
                        </div>
                        <div class="fs-card-origin-price">
                            <span class="currency">৳</span><span class="price">${product.originPrice}</span>
                            <span class="itemDiscount">${product.discount}</span>
                        </div>
                    </div>
                </a>
            `;
            productGrid.appendChild(productCard);
            currentIndex++;
        }
    }

    if (currentIndex >= totalProducts) {
        showMoreBtn.style.display = 'none'; // Hide button if no more products
    }
}

// Event listener for the button
showMoreBtn.addEventListener('click', showMoreProducts);
