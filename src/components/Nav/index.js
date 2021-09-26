import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul className="navbar">
                <Link to='/'>
                    <li className="navbar">About Me</li>
                </Link>
                <Link to='/projects'>
                    <li className="navbar">Projects</li>
                </Link>
                <Link to='/games'>
                    <li className="navbar">Games</li>
                </Link>
                <Link to='/resume'>
                    <li className="navbar">Resume</li>
                </Link>
                <Link to='/contact'>
                    <li className="navbar">Contact</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;