import React from 'react';
import PageSection from './pageSection';
import { homeContent, button } from '../styles/index.module.css';

const Home = () =>{
    return(
        <PageSection sectionId="home">
            <div className={ homeContent }>
                <p>IT solutions for small business</p>
                <a className={ button } href="/">Learn More</a>
            </div>
        </PageSection>
    );
}

export default Home;