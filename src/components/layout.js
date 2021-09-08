import * as React from 'react'
import { Link } from 'gatsby'
import { 
    layoutContainer,
    pageHeader,
    headerContact,
    navContainer,
    navLogo,
    navLinks,
} from '../styles/layout.module.css'
import NavLink from './navLink'

const Layout = ({ pageTitle, children}) => {
    return (
        <div className={layoutContainer}>
            <title>{pageTitle}</title>
            <header className={ pageHeader }>
                <p className={headerContact} >Have a question or need a quote? (XXX)XXX-XXXX</p>
                <nav className={ navContainer }>
                    <h1>
                        <Link className={navLogo} to="/">My Technology Firm</Link>
                    </h1>
                    <ul className={navLinks}>
                        <NavLink linkURL="/" linkName="Home" />
                        <NavLink linkURL="/services" linkName="Services" />
                        <NavLink linkURL="/about" linkName="About Us" />
                        <NavLink linkURL="/contact" linkName="Contact Us" />
                    </ul>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout