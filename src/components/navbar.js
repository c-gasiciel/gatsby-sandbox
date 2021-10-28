import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import PaintDripLink from './paintDripLink';
import CoverNavLink from './coverNavLink';

const Navbar = ({ open }) =>{
    return(
        <NavContainer open={ open } >
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
        </NavContainer>
    );
}

export default Navbar;

const NavContainer = styled.nav` 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 0 0rem 0;
    margin: 0;

    @media all and (max-width: 763px){
        flex-direction: column;
        justify-content: center;
        padding: 0rem 0rem 0rem 0rem;
        width: 45%;

        height: 100vh;
        background-color: red;
        position: absolute;
        top: 15vh;
        right: 0;
        transition: transform 0.3s ease-in-out;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    }
`

const NavLinksContainer = styled.ul`
    display: flex;
    list-style: none;
    padding-left: 0;

    @media screen and (max-width: 763px){
        flex-direction: column;
        height: 100vh;
        padding-top: 1rem;
        position: absolute;
        width: 100%;
    }
`

const MenuToggleContainer = styled.button` 
    background: blue;
    display: none;

    @media screen and (max-width: 763px){
        border: none;
        display: block;
        height: 10%;
        width: 10%;
        padding: 0rem 0rem;
        position: absolute;
        cursor: pointer;
        font-size: 1.5rem;
    }
`

const Bars = styled(FiMenu) `
    font-size: 2rem;
`