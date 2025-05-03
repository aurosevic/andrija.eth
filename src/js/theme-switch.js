// Theme switching functionality
document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.querySelector('#checkbox');
    const currentTheme = localStorage.getItem('theme') || 'dark-theme';
    
    // Set the initial theme
    document.documentElement.className = currentTheme;
    toggleSwitch.checked = currentTheme === 'light-theme';
    
    // Theme switch event handler
    toggleSwitch.addEventListener('change', function() {
        const targetTheme = this.checked ? 'light-theme' : 'dark-theme';
        const currentThemeClass = this.checked ? 'dark-theme' : 'light-theme';

        // Create a new circle element for this animation
        const newCircle = document.createElement('div');
        newCircle.classList.add('theme-transition-circle');

        // Important: Set the background to the TARGET theme color
        // This ensures the animation reveals the new theme color
        newCircle.style.background = targetTheme === 'light-theme' ?
                                    'var(--light-bg)' :
                                    'var(--dark-bg)';
        newCircle.style.boxShadow = targetTheme === 'light-theme' ?
                                   '0 0 100px 50px var(--light-bg)' :
                                   '0 0 100px 50px var(--dark-bg)';

        // Add a special class to prevent text transitions
        document.documentElement.classList.add('theme-changing');

        // Add the circle to the DOM
        document.body.appendChild(newCircle);

        // Apply the theme class immediately, before animation starts.
        // This ensures the page is already in the new theme state under the expanding circle
        document.documentElement.classList.remove(currentThemeClass);
        document.documentElement.classList.add(targetTheme);
        localStorage.setItem('theme', targetTheme);

        // Start animation in the next frame
        requestAnimationFrame(() => {
            newCircle.classList.add('animate');
        });

        // Cleanup when animation ends
        newCircle.addEventListener('animationend', function() {
            // Remove special class to re-enable future transitions
            document.documentElement.classList.remove('theme-changing');
            newCircle.remove();
        });

        // Failsafe cleanup
        const animDuration = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--transition-duration'));
        setTimeout(() => {
            if (document.body.contains(newCircle)) {
                document.documentElement.classList.remove('theme-changing');
                newCircle.remove();
            }
        }, animDuration * 1000 + 500);
    });
});