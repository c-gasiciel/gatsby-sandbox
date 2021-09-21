import * as React from 'react';
import { textSection } from '../styles/pageSection.module.css';

const PageSection = ({ sectionId, children}) =>{
    return(
        <section id={ sectionId } className={ textSection }>
            { children }
        </section>
    );
}

export default PageSection;