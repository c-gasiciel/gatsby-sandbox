import * as React from 'react';
import { Link } from 'gatsby';
import {
    navLinkItem,
    navLinkText
} from '../styles/navLink.module.css';

const NavDropdown = ({linkURL, linkHeader}) => {
    return (
        <li>
            <h2 class={ navLinkText }>{ linkHeader }</h2>
            <ul>
                <li></li> 
            </ul>
        </li>

    );
}

export default NavDropdown;