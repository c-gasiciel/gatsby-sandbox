import React from "react";
import {
    footer,
    copyrightContainer
} from '../styles/footer.module.css';

const Footer = () =>{
    return(
        <footer className={ footer }>
            <p className={ copyrightContainer }>&copy; 2021 My Technology Firm</p>
        </footer>
    );
}

export default Footer;