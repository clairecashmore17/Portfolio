import React from "react";
import './style.scss';

const Icon = (props) => {

    return (
        <li className="contactList">
            <a target="_blank" rel="noreferrer" href={props.link}>
                <span class="reactIcon">{props.children}</span>
                <span class="iconText">{props.text}</span>
            </a>
        </li>
    );
}

export default Icon;