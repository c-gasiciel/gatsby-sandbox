import * as React from 'react';
import { 
    pageSection,
    flexContainer
} from '../styles/pageSection.module.css';

const PageSectionTwoCol = ({ sectionId, children}) =>{
    return(
        <section id={ sectionId } className={ pageSection }>
            <div className={ flexContainer }>
                { children }
            </div>
        </section>
    );
}

export default PageSectionTwoCol;