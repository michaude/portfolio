import React from "react";
import '../styles/Footer.css'

function Footer() {
    return (
        <div id="footer">
            <div className="socials">
                <a href="https://github.com/michaude/portfolio"><i className="fab fa-github socials-item"></i></a>
                <a href="https://www.linkedin.com/in/rachel-michaud-73276a190/"><i className="fab fa-linkedin-in socials-item"></i></a>
                <a href=""><i className="far fa-envelope socials-item"></i></a>
            </div>
            <p>Rachel Michaud © 2021</p> 
        </div>
    );
}

export default Footer;