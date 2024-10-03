function changeQuantity(button, action) {
    const row = button.closest('tr');
    const quantitySpan = row.querySelector('.quantity');
    const priceElement = row.querySelector('.price');
    const totalElement = row.querySelector('.total');

    let quantity = parseInt(quantitySpan.textContent);
    const price = parseFloat(priceElement.textContent.replace('$', ''));

    if (action === 'increase') {
        quantity++;
    } else if (action === 'decrease' && quantity > 1) {
        quantity--;
    }

    quantitySpan.textContent = quantity;
    totalElement.textContent = `$${(price * quantity).toFixed(2)}`;

    updateCartTotal();
}

function updateCartTotal() {
    const totals = document.querySelectorAll('.total');
    let grandTotal = 0;

    totals.forEach(total => {
        grandTotal += parseFloat(total.textContent.replace('$', ''));
    });

    // Update the grand total display (you can add a grand total row if needed)
    console.log('Grand Total:', `$${grandTotal.toFixed(2)}`);
}

function continueShopping() {
    alert("Continue shopping clicked!");
}

function updateCart() {
    alert("Cart updated!");
}
