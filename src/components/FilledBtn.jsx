import React from 'react';
import Btn from './Btn';
import '../styles/FilledBtn.css';

function FilledBtn(props) {
    return (
        <Btn newClass="filled-btn">{props.children}</Btn>
    );
}

export default FilledBtn;