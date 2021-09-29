import React from 'react';
import './style.scss';

const Header = (props) => {
    return (
        <header>
            {props.children}
            <h1 id="name">Claire Cashmore</h1>

            <div id="img-container">
                <img src="../images/soccer.jpeg" alt="soccer ball on a field" />
            </div>
        </header>
    );
}

export default Header;