import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header';
import { 
    layoutContainer,
    mainContent,
} from '../styles/layout.module.css';


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


    return (
        <div className={ layoutContainer }>
            <title>{ pageTitle } | { data.site.siteMetadata.title }</title>
            <Header />
            <main className={ mainContent } >
                {children}
            </main>
            <footer>     
            </footer>
        </div>
    )
}

export default Layout;