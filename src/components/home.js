import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import PageSection from './pageSection';
import { homeContent, button, buttonText } from '../styles/home.module.css';
import { card } from '../styles/home.module.css';

const Home = () =>{
    return(
        <PageSection sectionId="home">
            <div className={ homeContent }>
                <p>IT solutions for small business</p>
                <button className={ button }>
                    <AniLink 
                        className={ buttonText }  
                        paintDrip
                        hex="#FFFFFF"
                        to="/servicesPage"
                    >Learn More</AniLink>
                </button>
            </div>
        </PageSection>
    );
}

export default Home;