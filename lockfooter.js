// You can add optional interactivity for the social media icons if needed.
// For example, open links in a new tab or add tracking.

document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('click', function(event) {
        event.preventDefault();
        window.open(this.href, '_blank'); // Open links in new tab
    });
});
