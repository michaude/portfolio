import React from "react";
import '../styles/Footer.css'

function Footer() {
    return (
        <div id="footer">
            <div className="socials">
                <a href="http://"><i class="fab fa-github socials-item"></i></a>
                <a href=""><i class="fab fa-linkedin-in socials-item"></i></a>
                <a href=""><i class="far fa-envelope socials-item"></i></a>
            </div>
            <p>Rachel Michaud © 2021</p> 
        </div>
    );
}

export default Footer;