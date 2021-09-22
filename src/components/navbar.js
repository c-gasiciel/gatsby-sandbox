import React from 'react';
import NavLink from './navLink';
import { 
    navContainer,
    navLinks
} from '../styles/navbar.module.css';

const Navbar = () =>{
    return(
        <nav className={ navContainer }>
            <ul className={ navLinks }>
                <NavLink linkURL="/" linkName="Home" />
                <NavLink linkURL="#services" linkName="Services" />
                <NavLink linkURL="#about-us" linkName="About Us" />
                <NavLink linkURL="#contact-us" linkName="Contact Us" />
            </ul>
        </nav>
    );
}

export default Navbar;