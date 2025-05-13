import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p className="main-text">Built on 🌍 by Andrija.</p>
                <p className="main-text">Copyright © 2022–{new Date().getFullYear()}. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;