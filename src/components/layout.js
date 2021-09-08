import * as React from 'react'
import { Link } from 'gatsby'
import { 
    layoutContainer,
    heading,
    navContainer,
    navLogo,
    navLinks,
} from '../styles/layout.module.css'
import NavLink from './navLink'

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={layoutContainer}>
            <title>{pageTitle}</title>
            <nav className={navContainer}>
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
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout