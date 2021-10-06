import React from 'react';
import NavLink from './navLink';
import PaintDripLink from './paintDripLink';
import CoverNavLink from './coverNavLink';
import { 
    navContainer,
    navLinks
} from '../styles/navbar.module.css';

const Navbar = () =>{
    return(
        <nav className={ navContainer }>
            <ul className={ navLinks }>
                <CoverNavLink 
                    linkURL="/"
                    swipeColor="#55C3EE"
                    swipeDir="up" 
                    linkName="Home" 
                />
                <PaintDripLink 
                    linkURL="/servicesPage"
                    dripColor="#FFFFFF" 
                    linkName="Services"
                />
                <CoverNavLink 
                    linkURL="/about" 
                    swipeColor="#55C3EE"
                    swipeDir="down" 
                    linkName="About Us" />
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