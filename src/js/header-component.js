document.addEventListener('DOMContentLoaded', function() {
    // Create the header component HTML structure
    const headerHTML = `
    <header class="site-header">
        <div class="header-container">
            <nav class="nav-menu">
                <ul>
                    <li><a href="../pages/index.html" class="main-text">Home</a></li>
                    <li><a href="../pages/social-media.html" class="main-text">Social Media</a></li>
                    <li><a href="../pages/resume.html" class="main-text">Resume</a></li>
                    <li><a href="../pages/software.html" class="main-text">Software I Use</a></li>
                    <li><a href="../pages/hardware.html" class="main-text">Hardware I Use</a></li>
                </ul>
            </nav>
            <div class="theme-switch-wrapper">
                <label class="theme-switch" for="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div class="slider">
                        <div class="moon-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        </div>
                        <div class="sun-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="5"></circle>
                                <line x1="12" y1="1" x2="12" y2="3"></line>
                                <line x1="12" y1="21" x2="12" y2="23"></line>
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                <line x1="1" y1="12" x2="3" y2="12"></line>
                                <line x1="21" y1="12" x2="23" y2="12"></line>
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                            </svg>
                        </div>
                    </div>
                </label>
            </div>
        </div>
    </header>
    `;

    // Insert the header at the beginning of the body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // Get current page path for navigation highlighting
    const currentPage = window.location.pathname.split('/').pop();
    console.log('Andrija', currentPage);

    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-menu a');
    console.log('Andrija', navLinks);

    // Highlight current page in navigation
    navLinks.forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('active');
        }
    });
});