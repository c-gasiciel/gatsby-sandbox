import * as React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import {
    navLinkItem,
    navLinkText
} from '../styles/navLink.module.css';

const CoverNavLink = ({linkURL, swipeColor, swipeDir, linkName}) => {
    return (
        <li className={navLinkItem}>
            <AniLink 
                className={navLinkText}  
                cover
                direction={ swipeDir }
                duration={ 1 }
                bg={ swipeColor }
                to={linkURL}
            >{linkName}</AniLink>
        </li>
    );
}

export default CoverNavLink;