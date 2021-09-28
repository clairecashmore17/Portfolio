import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <p id="codeLink">
                <a target=" _blank" 
                rel="noreferrer" 
                className="footerLink"
                id="portfolioCode" 
                href="https://github.com/clairecashmore17/Portfolio/tree/main">
                    Portfolio
                </a> by <a target="_blank" 
                rel="noreferrer"
                className="footerLink"
                id="portfolioCreator"
                href="https://github.com/Fikcup">
                    Fikcup
                </a>
            </p>

            <p id=""> 
                Reach me at <a className="footerLink"
                href="mailto:clairecashmore2017@gmail.com?subject=Mail from Portfolio">
                    clairecashmore2017@gmail.com
                </a> or <Link 
                className='footerLink' 
                to='/contact'>
                    through here
                </Link>
            </p>
        </footer>
    );
}

export default Footer;