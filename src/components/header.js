import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Navbar from './navbar';
import {
    pageHeader,
    pageHeaderNoBg,
} from '../styles/header.module.css';

const Header = () =>{
    return(
        <header className={ pageHeader }>
            <NavLogo to="/">My Technology Firm</NavLogo>
            <RightHeader>
                <HeaderContact>Have a question or need a quote? (847)630-9939</HeaderContact>
                <Navbar />
            </RightHeader>
    </header>
    );
}

export default Header;


const PageHeader = styled.header` 

`

const NavLogo = styled(Link)` 
    border: solid 1px black;
    color: black;
    font-size: 2rem;
    font-weight: 800;
    height: 100%;
    padding: 1rem;
    text-decoration: none;
    text-transform: uppercase;
    margin-right: 0.5rem;

    &:visited{
        color: black;
    }

    @media screen and (max-width: 1098px){
        font-size: 1.5rem;
        margin: 1rem auto 0rem auto;
    }
`


const RightHeader = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media all and (max-width: 1098px){
        justify-content: center;
        align-items: center;
        margin-top: 1.1rem;
        width: 90%;
    }
`


const HeaderContact = styled.p` 
    display: flex;
    flex-direction: row-reverse;
    font-size: .8rem;
    color: black;
    padding: 0;
    margin: 1rem 0rem 0rem 0rem;

    @media screen and (max-width: 1098px){
        display: none;
    }
`