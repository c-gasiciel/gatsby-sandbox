import React from 'react';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import PaintDripLink from './paintDripLink';
import CoverNavLink from './coverNavLink';

import { 
    navContainer,
} from '../styles/navbar.module.css';

const Navbar = () =>{
    return(
        <nav className={ navContainer }>
            <Bars />
            <NavLinksContainer>
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
            </NavLinksContainer>
        </nav>
    );
}

export default Navbar;

const Bars = styled(FiMenu) `
    display: none;

    @media screen and (max-width: 736px){
        display: block;
        padding: 0.5rem;
        position: absolute;
        font-size: 1.8rem;
        cursor: pointer;
    }
`


const NavLinksContainer = styled.ul`
    display: flex;
    list-style: none;
    padding-left: 0;

    @media screen and (max-width: 736px){
        display: none;
        flex-direction: column;
        width: 100%;
    }
`