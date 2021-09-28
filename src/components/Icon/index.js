import React from "react";
import './style.scss';

const Icon = (props) => {

    return (
        <li className="contactList">
            <a target="_blank" rel="noreferrer" href={props.link}>
                {props.children}
                {props.text}
            </a>
        </li>
    );
}

export default Icon;