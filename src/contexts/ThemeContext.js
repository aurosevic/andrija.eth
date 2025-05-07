import React, { createContext, useState, useEffect, useCallback } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Initialize theme state from localStorage, default to dark theme
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'light-theme' ? 'light-theme' : 'dark-theme';
    });

    // State to track when a theme transition is happening
    const [isChanging, setIsChanging] = useState(false);

    // Function to toggle theme with animation
    const toggleTheme = useCallback(() => {
        const newTheme = theme === 'dark-theme' ? 'light-theme' : 'dark-theme';

        // Create animation element
        const newCircle = document.createElement('div');
        newCircle.classList.add('theme-transition-circle');

        // Set background to the target theme color
        newCircle.style.background = newTheme === 'light-theme'
            ? 'var(--light-bg)'
            : 'var(--dark-bg)';

        newCircle.style.boxShadow = newTheme === 'light-theme'
            ? '0 0 100px 50px var(--light-bg)'
            : '0 0 100px 50px var(--dark-bg)';

        // Add theme-changing class to prevent text transitions
        document.documentElement.classList.add('theme-changing');

        // Add the circle to the DOM
        document.body.appendChild(newCircle);

        // Apply new theme immediately
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
        setIsChanging(true);

        // Start animation
        requestAnimationFrame(() => {
            newCircle.classList.add('animate');
        });

        // Clean up after animation completes
        const animDuration = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--transition-duration'));
        setTimeout(() => {
            if (document.body.contains(newCircle)) {
                document.documentElement.classList.remove('theme-changing');
                newCircle.remove();
                setIsChanging(false);
            }
        }, animDuration * 1000 + 500);
    }, [theme]);

    // Set initial theme on document when component mounts
    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isChanging }}>
            {children}
        </ThemeContext.Provider>
    );
};