import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FiMenu } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import Navbar from './navbar';


const Header = () =>{
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
        <PageHeader>
            <NavLogo to="/">My Technology Firm</NavLogo>
            <RightHeader>
                <HeaderContact>Have a question or need a quote?
                    <MailIcon /> 
                    rarceo@mytechnologyfirm.com
                </HeaderContact>
                <MenuToggleContainer onClick={ toggleMenu } >
                    { button }
                </MenuToggleContainer>
                <Navbar open={ isOpen } />
            </RightHeader>
    </PageHeader>
    );
}

export default Header;


const PageHeader = styled.header` 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /*background: rgba(51, 51, 51, 0.6);
    box-shadow: 0 0 1rem black; */ 
    padding: 1em 2em .2em 2em;
    color: black;
    height: 15vh;
    z-index: 10;

    @media all and (max-width: 1044px){
        flex-direction: column;
        justify-content: flex-start;
        height: 20%;
    }

    @media all and (max-width: 763px){
        flex-direction: row;
        justify-content: space-between;
    }
`

const NavLogo = styled(Link)` 
    border: solid 1px black;
    color: black;
    font-size: clamp(1.2rem, 2vw, 1.5rem);
    font-weight: 750;
    padding: 1rem;
    text-decoration: none;
    text-transform: uppercase;
    margin-right: 0.2rem;
    white-space: no-wrap;

    &:visited{
        color: black;
    }
`


const RightHeader = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media all and (max-width: 1044px){
        align-items: center;
        margin-top: 0.1rem;
        width: 90%;
    }

    @media all and (max-width: 763px){
        height: 100%;
        margin-top: 0;
        width: 30%;
    }
`


const HeaderContact = styled.p` 
    display: flex;
    flex-direction: row;
    font-size: .8rem;
    color: black;
    padding: 0;
    position: absolute;
    right: 1rem;
    top: 0;
    margin: 1rem 0rem 0rem 0rem;

    @media screen and (max-width: 1044px){
        display: none;
    }
`

const MenuToggleContainer = styled.button` 
    display: none;

    @media screen and (max-width: 763px){
        background-color: transparent;
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

const MailIcon = styled(MdOutlineEmail)` 
    margin: 0rem 0.2rem 0rem 0.5rem;
`