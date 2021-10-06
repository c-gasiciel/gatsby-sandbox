import React from 'react';
import { Link } from 'gatsby';
import Navbar from './navbar';
import {
    pageHeader,
    pageHeaderNoBg,
    navLogo,
    rightHeader,
    headerContact
} from '../styles/header.module.css';

const Header = () =>{
    return(
        <header className={ pageHeader }>
            <h1>
                <Link className={ navLogo } to="/">My Technology Firm</Link>
            </h1>
            <div className={ rightHeader }>
                <p className={ headerContact }>Have a question or need a quote? (847)630-9939</p>
                <Navbar />
            </div>
    </header>
    );
}

export default Header;