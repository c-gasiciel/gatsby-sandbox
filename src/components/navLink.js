import * as React from 'react';
import { Link } from 'gatsby';
import {
    navLinkItem,
    navLinkText
} from '../styles/navLink.module.css';

const NavLink = ({linkURL, linkName}) => {
    return (
        <li className={navLinkItem}>
            <Link className={navLinkText} to={linkURL}>{linkName}</Link>
        </li>
    );
}

export default NavLink;