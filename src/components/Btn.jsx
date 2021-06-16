import React from 'react';
import '../styles/Btn.css';

function Btn(props) {
    return (
        <button className={props.newClass + " btn"}>{props.children}</button>
    );
}

export default Btn;