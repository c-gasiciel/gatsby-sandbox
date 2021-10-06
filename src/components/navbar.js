import React from 'react';
import NavLink from './navLink';
import PaintDripLink from './paintDripLink';
import { 
    navContainer,
    navLinks
} from '../styles/navbar.module.css';

const Navbar = () =>{
    return(
        <nav className={ navContainer }>
            <ul className={ navLinks }>
                <NavLink linkURL="/" linkName="Home" />
                <PaintDripLink 
                    linkURL="/servicesPage"
                    dripColor="#FFFFFF" 
                    linkName="Services"
                />
                <NavLink linkURL="/#about-us" linkName="About Us" />
                <PaintDripLink 
                    linkURL="/contact"
                    dripColor="#FFFFFF" 
                    linkName="Contact Us" 
                />
            </ul>
        </nav>
    );
}

export default Navbar;