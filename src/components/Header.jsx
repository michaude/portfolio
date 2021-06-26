import React from "react";
import '../styles/Header.css'

function Header() {
    return (
        <div className="header">
            <div className="header-item">
                <h3>RCHL</h3>
            </div>
            <div className="header-links header-item">
                <a href="#hero">About</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="/">Contact Me</a>
            </div>
        </div>
        
    );
}

export default Header;