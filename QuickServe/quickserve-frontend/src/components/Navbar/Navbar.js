import React from 'react';
import '../css/Navbar.css'

const NavigationBar = () => {
    return (
        <header>
            <nav>
                <a href="#home" id="logo">Site Logo</a>
                <i class="fas fa-bars" id="ham-menu"></i>
                <ul id="nav-bar">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#team">Team</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavigationBar;
