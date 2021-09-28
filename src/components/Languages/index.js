import React from 'react';

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