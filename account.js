document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
  
    if (email && password) {
      alert('Logged in successfully!');
      // Implement your login logic here
    } else {
      alert('Please fill out all fields.');
    }
  });
  
  document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
  
    if (firstName && lastName && email && password) {
      alert('Registered successfully!');
      // Implement your register logic here
    } else {
      alert('Please fill out all fields.');
    }
  });
  