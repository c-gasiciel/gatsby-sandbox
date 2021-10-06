import * as React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import {
    navLinkItem,
    navLinkText
} from '../styles/navLink.module.css';

const PaintDripLink = ({linkURL, dripColor, linkName}) => {
    return (
        <li className={navLinkItem}>
            <AniLink 
                className={navLinkText}  
                paintDrip
                hex={ dripColor }
                to={linkURL}
            >{linkName}</AniLink>
        </li>
    );
}

export default PaintDripLink;