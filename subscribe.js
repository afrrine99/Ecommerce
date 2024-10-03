document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    
    if (validateEmail(email)) {
        alert(`Thank you for subscribing! You've received 10% off.`);
        document.getElementById('subscribeForm').reset();
    } else {
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}