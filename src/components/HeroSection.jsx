import React from "react";
import '../styles/HeroSection.css';

function HeroSection() {
    return (
        <div id="hero">
            <div className="hero-text">
                <h1>Hi, I'm Rachel!</h1>
                <p>Aspiring to be a full stack web developer</p>
            </div>
            <div><img alt="" src="./images/circle-cropped.png"  /></div>
        </div>
    );
}

export default HeroSection;