import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
    layoutContainer,
    pageHeader,
    rightHeader,
    headerContact,
    navContainer,
    navLogo,
    navLinks,
    mainContent,
} from '../styles/layout.module.css'
import NavLink from './navLink'

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
            <header className={ pageHeader }>
                <h1>
                    <Link className={ navLogo } to="/">My Technology Firm</Link>
                </h1>
                <div className={ rightHeader }>
                    <p className={ headerContact }>Have a question or need a quote? (XXX)XXX-XXXX</p>
                    <nav className={ navContainer }>
                        <ul className={ navLinks }>
                            <NavLink linkURL="/" linkName="Home" />
                            <NavLink linkURL="#services" linkName="Services" />
                            <NavLink linkURL="#about-us" linkName="About Us" />
                            <NavLink linkURL="#contact-us" linkName="Contact Us" />
                        </ul>
                    </nav>
                </div>
            </header>
            <main className={ mainContent } >
                {children}
            </main>
            <footer>     
            </footer>
        </div>
    )
}

export default Layout