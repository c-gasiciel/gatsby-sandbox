import React from 'react';
import { Link } from 'gatsby';
import Navbar from './navbar';
import {
    pageHeader,
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
                <p className={ headerContact }>Have a question or need a quote? (XXX)XXX-XXXX</p>
                <Navbar />
            </div>
    </header>
    );
}

export default Header;