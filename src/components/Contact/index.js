import React from 'react';
import './style.scss';
import Icon from '../Icon';
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';

const Contact = () => {
    return (
        <section id="contact">
            <h2 className="title">Let's Work Together</h2>

            <ul className="contactList">
                <Icon link="mailto:clairecashmore2017@gmail.com?subject=Mail from Portfolio"
                text="clairecashmore2017@gmail.com"
                ><HiOutlineMail /></Icon>
                <Icon link="https://www.linkedin.com/in/claire-cashmore/"
                text="linkedin.com/claire-cashmore"
                ><FaLinkedinIn /></Icon>
                <Icon link="https://github.com/clairecashmore17"
                text="github.com/clairecashmore17"
                ><AiOutlineGithub /></Icon>
                <Icon link="https://twitter.com/claire_cashmore"
                text="twitter.com/claire_cashmore"
                ><FaTwitter /></Icon>
                <Icon link="https://www.instagram.com/claire_cashmore17/"
                text="instagram.com/claire_cashmore17"
                ><FaInstagram /></Icon>
            </ul>
        </section>
    );
}

export default Contact;