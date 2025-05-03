// scripts/theme-switch.js
document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.querySelector('#checkbox');
    const transitionCircle = document.querySelector('.theme-transition-circle');
    const currentTheme = localStorage.getItem('theme') || 'dark-theme';

    // Set an initial theme
    document.documentElement.className = currentTheme;
    toggleSwitch.checked = currentTheme === 'light-theme';

    // Theme switch event handler
    toggleSwitch.addEventListener('change', function() {
        const targetTheme = this.checked ? 'light-theme' : 'dark-theme';
        
        // Create a new circle element for this animation
        const newCircle = document.createElement('div');
        newCircle.classList.add('theme-transition-circle');
        
        // Set the correct background for the animation
        if (targetTheme === 'light-theme') {
            newCircle.style.background = 'var(--light-bg)';
            newCircle.style.boxShadow = '0 0 100px 50px var(--light-bg)';
        } else {
            newCircle.style.background = 'var(--dark-bg)';
            newCircle.style.boxShadow = '0 0 100px 50px var(--dark-bg)';
        }
        
        // Add the new circle to the DOM
        document.body.appendChild(newCircle);
        
        // Start animation in the next frame to ensure the element is properly rendered
        requestAnimationFrame(() => {
            newCircle.classList.add('animate');
        });
        
        // Change theme immediately
        document.documentElement.className = targetTheme;
        localStorage.setItem('theme', targetTheme);
        
        // Clean up after animation completes
        newCircle.addEventListener('animationend', function() {
            newCircle.remove();
        });
        
        // Failsafe: Remove the circle after a set time in case the animation event fails
        const animDuration = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--transition-duration')) * 1000;
        setTimeout(() => {
            if (document.body.contains(newCircle)) {
                newCircle.remove();
            }
        }, animDuration + 500);
    });
});