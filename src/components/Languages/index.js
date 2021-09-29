import React from 'react';
import './style.scss';

const Languages = (props) => {
    return (
        <img id={props.name}
        className="languageIcon"
        src={props.imageLink}
        alt={props.name}
         />
    );
}

export default Languages;