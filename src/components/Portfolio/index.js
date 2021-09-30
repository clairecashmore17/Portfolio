import React from 'react';
import './style.scss';
import Project from '../Projects';
import projects from './projects.json';

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h2 className="title">Portfolio</h2>

            <article className="projectContainer">
                {projects.map((projects) => (
                    <Project
                        projectName = {projects.projectName}
                        tech = {projects.tech}
                        deployment = {projects.deployment}
                        github = {projects.github}
                        img = {projects.img}
                    />
                ))}
            </article>
        </section>
    );
}

export default Portfolio;