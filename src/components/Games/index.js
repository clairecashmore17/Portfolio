import React from 'react';
import './style.scss';
import Project from '../Projects';
import games from './games.json';

const Games = () => {
    return (
        <section id="games">
            <h2 className="title">Games</h2>

            <article className="gamesContainer">
                {games.map((games) => (
                    <Project
                        projectName = {games.projectName}
                        tech = {games.tech}
                        deployment = {games.deployment}
                        github = {games.github}
                        img = {games.img}
                    />
                ))}
            </article>
        </section>
    );
}

export default Games;