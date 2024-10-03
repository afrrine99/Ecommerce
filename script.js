// Adding event listener to nav-links
document.querySelectorAll('.nav-links a').forEach(function(navLink) {
    navLink.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent page reload
        
        // Get the page data from the clicked link
        const page = this.getAttribute('data-page');
        
        // Get the dynamic content container
        const dynamicContent = document.getElementById('dynamicContent');
        
        // Update the content based on the selected page
        if (page === 'home') {
            dynamicContent.innerHTML = `
                <h1>Welcome to Home Page</h1>
                <p>This is the home page content. Enjoy exploring our website!</p>
            `;
        } else if (page === 'about') {
            dynamicContent.innerHTML = `
                <h1>About Us</h1>
                <p>We are a leading company providing the best services for your needs.</p>
            `;
        } else if (page === 'shop') {
            dynamicContent.innerHTML = `
                <h1>Shop Our Products</h1>
                <p>Discover the best products in our shop and start shopping now!</p>
            `;
        } else if (page === 'contact') {
            dynamicContent.innerHTML = `
                <h1>Contact Us</h1>
                <p>If you have any questions, feel free to reach out to us!</p>
            `;
        }
    });
});
