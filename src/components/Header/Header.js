import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import './Header.css';

const Header = () => {
    return (
        <header className="site-header">
            <div className="header-container">
                <nav className="nav-menu">
                    <ul>
                        <li><NavLink to="/" className="main-text">Home</NavLink></li>
                        <li><NavLink to="/social-media" className="main-text">Social Media</NavLink></li>
                        <li><NavLink to="/resume" className="main-text">Resume</NavLink></li>
                        <li><NavLink to="/software" className="main-text">Software I Use</NavLink></li>
                        <li><NavLink to="/hardware" className="main-text">Hardware I Use</NavLink></li>
                    </ul>
                </nav>
                <ThemeSwitch />
            </div>
        </header>
    );
};

export default Header;