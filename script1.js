// Function to filter products
function filterProducts() {
    const productGrid = document.getElementById('product-grid');
    const priceFilter = document.getElementById('price-filter').value;
    const auctionChecked = document.getElementById('auction-filter').checked;
    const buyItNowChecked = document.getElementById('buyitnow-filter').checked;
    const classifiedChecked = document.getElementById('classified-filter').checked;
    const freeShippingChecked = document.getElementById('freeshipping-filter').checked;
    const inStorePickupChecked = document.getElementById('instorepickup-filter').checked;

    // Get all product items
    const products = document.querySelectorAll('.product-item');

    // Loop through products and apply filters
    products.forEach(product => {
        const productPrice = parseFloat(product.dataset.price);
        const productFormat = product.dataset.format;
        const productShipping = product.dataset.shipping;

        // Filter by price
        let showProduct = true;
        if (priceFilter === '0-100' && productPrice > 100) {
            showProduct = false;
        } else if (priceFilter === '100-200' && (productPrice < 100 || productPrice > 200)) {
            showProduct = false;
        }

        // Filter by buying format
        if (
            (auctionChecked && productFormat === 'auction') ||
            (buyItNowChecked && productFormat === 'buyitnow') ||
            (classifiedChecked && productFormat === 'classified')
        ) {
            showProduct = showProduct;
        } else if (auctionChecked || buyItNowChecked || classifiedChecked) {
            showProduct = false;
        }

        // Filter by delivery options
        if (
            (freeShippingChecked && productShipping === 'free-shipping') ||
            (inStorePickupChecked && productShipping === 'in-store-pickup')
        ) {
            showProduct = showProduct;
        } else if (freeShippingChecked || inStorePickupChecked) {
            showProduct = false;
        }

        // Show or hide the product
        product.style.display = showProduct ? 'block' : 'none';
    });
}

// Add event listeners to filter elements
document.getElementById('price-filter').addEventListener('change', filterProducts);
document.getElementById('auction-filter').addEventListener('change', filterProducts);
document.getElementById('buyitnow-filter').addEventListener('change', filterProducts);
document.getElementById('classified-filter').addEventListener('change', filterProducts);
document.getElementById('freeshipping-filter').addEventListener('change', filterProducts);
document.getElementById('instorepickup-filter').addEventListener('change', filterProducts);

// View change functionality
document.getElementById('view').addEventListener('change', function() {
    const grid = document.querySelector('.product-grid');
    if (this.value === 'list-view') {
        grid.style.gridTemplateColumns = '1fr';
    } else {
        grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
    }
});
