import React from "react";
import '../styles/HeroSection.css';
import FilledBtn from "./FilledBtn";

function HeroSection() {
    return (
        <div id="hero">
            <div className="hero-container">
                <div className="hero-item">
                    <h1 className="typewriter">Hi, I'm Rachel!</h1>
                    <p><i className="fas fa-map-marker-alt icon-hero"></i> Montreal, Canada</p>
                    <p>Aspiring to be a full stack web developer. I love coffee,<br /> coding and dogs.</p>
                    <FilledBtn><i className="fas fa-file-download"></i> download my CV</FilledBtn>
                </div>
                <div className="hero-item">
                    <img alt="" src="./public/images/circle-cropped.png"  />
                </div>
            </div>
            <i className="fas fa-sort-down icon-hero"></i>
        </div>
    );
}

export default HeroSection;