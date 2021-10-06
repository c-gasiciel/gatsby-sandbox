import * as React from 'react';
import { pageSection } from '../styles/pageSection.module.css';

const PageSection = ({ sectionId, children}) =>{
    return(
        <section id={ sectionId } className={ pageSection }>
            { children }
        </section>
    );
}

export default PageSection;