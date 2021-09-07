import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { 
    container,
    heading,
    navContainer,
    navLinks,
    navLinkItem,
    navLinkText
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={container}>
            <title>{pageTitle}</title>
            <nav className={navContainer}>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/">
                            <StaticImage src="https://via.placeholder.com/250x50" alt="My Technology Firm logo"/>
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about">About Me</Link>
                    </li>
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