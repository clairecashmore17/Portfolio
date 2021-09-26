import React from 'react';
import { generateCustomPlaceholderURL } from 'react-placeholder-image';

const Project = (props) => {
    const imagePlaceholder = generateCustomPlaceholderURL(200, 200);

    return (
        <article className="project">
            <a target="_blank" 
            rel="noreferrer" 
            href={props.deployment}
            >
                <img className="project-img" src={imagePlaceholder} alt={props.projectName} />
                <h3>{props.projectName}</h3>
            </a>
            <h4>
                <a target="_blank"
                rel="noreferrer" 
                className="repoLink" 
                href={props.github}>
                    Code here
                </a>
            </h4>
            <p className="projectTech">{props.tech}</p>
        </article>
    );
}

export default Project;