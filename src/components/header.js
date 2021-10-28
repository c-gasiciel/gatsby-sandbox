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
        <PageHeader>
            <NavLogo to="/">My Technology Firm</NavLogo>
            <RightHeader>
                <HeaderContact>Have a question or need a quote? (847)630-9939</HeaderContact>
                <Navbar />
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
    x-index: 10;

    @media all and (max-width: 1044px){
        flex-direction: column;
        justify-content: flex-start;
    }

    @media all and (max-width: 763px){
        background-color: red;
        flex-direction: row;
        justify-content: space-between;
    }
`

const NavLogo = styled(Link)` 
    border: solid 1px black;
    color: black;
    font-size: clamp(1rem, 2.5vw, 1.6rem);
    font-weight: 800;
    padding: 1rem;
    text-decoration: none;
    text-transform: uppercase;
    margin-right: 0.2rem;
    white-space: no-wrap;

    background-color: blue;

    &:visited{
        color: black;
    }
`


const RightHeader = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: yellow;

    @media all and (max-width: 1044px){
        justify-content: center;
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
    flex-direction: row-reverse;
    font-size: .8rem;
    color: black;
    padding: 0;
    margin: 1rem 0rem 0rem 0rem;

    @media screen and (max-width: 1044px){
        display: none;
    }
`