document.addEventListener('DOMContentLoaded', function() {
    // Get current page path
    const currentPage = window.location.pathname.split('/').pop();
    console.log('OG Andrija', currentPage);

    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-menu a');
    console.log('OG Andrija', navLinks);

    // Highlight current page in navigation
    navLinks.forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('active');
        }
    });
});