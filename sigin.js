document.getElementById('continue-button').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    if (username) {
        alert(`Continuing with: ${username}`);
    } else {
        alert('Please enter your email or username.');
    }
});

// Add more functionality for social buttons if needed
document.getElementById('google-button').addEventListener('click', function() {
    alert('Continue with Google');
});
document.getElementById('facebook-button').addEventListener('click', function() {
    alert('Continue with Facebook');
});
document.getElementById('apple-button').addEventListener('click', function() {
    alert('Continue with Apple');
});
