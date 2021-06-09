import React from "react";
import '../styles/Header.css'

function Header() {
    return (
        <div className="header">
            <div className="header-item">
                <h3>RCHL</h3>
            </div>
            <div className="header-links header-item">
                <a href="/">About</a>
                <a href="/">School</a>
                <a href="/">Experience</a>
                <a href="/">Projects</a>
            </div>
        </div>
        
    );
}

export default Header;