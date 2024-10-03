const productGrid = document.getElementById('productGrid');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let scrollAmount = 0;

// Function to scroll the product grid
function scrollGrid(direction) {
    const productWidth = 190; // Width of one product card + margin
    const visibleProducts = Math.floor(productGrid.clientWidth / productWidth);
    const maxScroll = productGrid.scrollWidth - productGrid.clientWidth;
    
    scrollAmount += direction * visibleProducts * productWidth;
    scrollAmount = Math.max(0, Math.min(scrollAmount, maxScroll));

    productGrid.style.transform = `translateX(-${scrollAmount}px)`;

    // Disable/Enable buttons based on scroll position
    prevBtn.disabled = scrollAmount === 0;
    nextBtn.disabled = scrollAmount === maxScroll;
}

// Add event listeners to buttons
prevBtn.addEventListener('click', () => scrollGrid(-1));
nextBtn.addEventListener('click', () => scrollGrid(1));