import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        // Check on an initial load
        checkScreenSize();
        
        // Add event listener for resize
        window.addEventListener('resize', checkScreenSize);
        
        // Cleanup event listener
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="site-header">
            <div className="header-container">
                {isMobile && (
                    <button 
                        className="hamburger-menu" 
                        onClick={toggleMenu}
                        aria-label="Toggle navigation menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                )}
                
                <nav className={`nav-menu ${isMobile ? 'mobile' : ''} ${menuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><NavLink to="/" className="main-text" onClick={() => isMobile && setMenuOpen(false)}>Home</NavLink></li>
                        <li><NavLink to="/social-media" className="main-text" onClick={() => isMobile && setMenuOpen(false)}>Social Media</NavLink></li>
                        <li><NavLink to="/resume" className="main-text" onClick={() => isMobile && setMenuOpen(false)}>Resume</NavLink></li>
                        <li><NavLink to="/software" className="main-text" onClick={() => isMobile && setMenuOpen(false)}>Software I Use</NavLink></li>
                        <li><NavLink to="/hardware" className="main-text" onClick={() => isMobile && setMenuOpen(false)}>Hardware I Use</NavLink></li>
                    </ul>
                </nav>
                
                <div className="theme-switch-container">
                    <ThemeSwitch />
                </div>
            </div>
        </header>
    );
};

export default Header;