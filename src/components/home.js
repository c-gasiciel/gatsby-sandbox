import React from 'react';
import PageSection from './pageSection';
import { homeContent, button, buttonText } from '../styles/home.module.css';
import { card } from '../styles/home.module.css';

const Home = () =>{
    return(
        <PageSection sectionId="home">
            <div className={ homeContent }>
                <p>IT solutions for small business</p>
                <button className={ button }>
                    <a className={ buttonText } href="/">Learn More</a>
                </button>
            </div>
        </PageSection>
    );
}

export default Home;