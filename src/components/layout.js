import * as React from 'react';
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components'
import Header from './header';
import Footer from './footer';
import { 
    layoutContainer,
    layoutBg,
    layoutNoBg,
    mainContent,
} from '../styles/layout.module.css';


/* Pages that should be styled to have a background */
const pagesWithBackground = ['/'];


const Layout = ({ pageTitle, children}) => {
    const data = useStaticQuery(graphql `
        query{
            site{
                siteMetadata{
                    title
                }
            }
        }
    `);


    /* Get current pathname for styling */
    const { pathname } = useLocation();
    const classes = `${ layoutContainer } 
                    ${pagesWithBackground.includes(pathname) ? layoutBg : layoutNoBg }`;



    return (
        <div className={ classes }>
            <title>{ pageTitle } | { data.site.siteMetadata.title }</title>
            <Header />
            <MainContainer>
                { children }
            </MainContainer>
            <Footer />
        </div>
    )
}

export default Layout;


const MainContainer = styled.main` 
    min-height: 77vh;
    height: 100%;

    @media all and (max-width: 1098px){
        min-height: 70vh;
        height: 100%;
    }
`