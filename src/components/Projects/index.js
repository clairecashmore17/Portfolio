import React from 'react';
import { CustomPlaceholder } from 'react-placeholder-image';

const Project = (props) => {
    const placeholder = <CustomPlaceholder width={200} height={200}/>;

    return (
        <article className="project">
            <a target="_blank" 
            rel="norefferer" 
            href={props.deployment}
            >
                <img className="project-img" src={placeholder} alt={props.projectName} />
                <h3>{props.projectName}</h3>
            </a>
            <h4><a className="repoLink">Code here</a></h4>
            <p className="projectTech">{props.tech}</p>
        </article>
    );
}

export default Project;