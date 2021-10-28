import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import PaintDripLink from './paintDripLink';
import CoverNavLink from './coverNavLink';

import { 
    navContainer,
} from '../styles/navbar.module.css';

const Navbar = () =>{
    //Track if navigation should be open or closed
    const [isOpen, setIsOpen] = useState(false);

    //Open or close menu if menu icon is clicked
    function toggleMenu(){
        if(isOpen){
            setIsOpen(false);
        }
        else{
            setIsOpen(true);
        }
    }

    let button;

    if (isOpen){
        button = 'X';
    }
    else{
        button = <Bars />
    }

    return(
        <nav className={ navContainer }>
            <MenuToggleContainer onClick={toggleMenu} >
                { button }
            </MenuToggleContainer>
            <NavLinksContainer open={ isOpen }>
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

const MenuToggleContainer = styled.button` 
    background: blue;
    border: none;
    display: none;

    @media screen and (max-width: 763px){
        display: block;
        padding: 0rem 0rem;
        position: absolute;
        cursor: pointer;
        font-size: 2rem;
    }
`

const Bars = styled(FiMenu) `
    font-size: 2rem;
`


const NavLinksContainer = styled.ul`
    display: flex;
    list-style: none;
    padding-left: 0;

    @media screen and (max-width: 763px){
        flex-direction: column;
        height: 100vh;
        position: absolute;
        width: 100%;
        transition: transform 0.3s ease-in-out;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    }
`