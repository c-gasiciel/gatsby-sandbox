import * as React from 'react';
import {StaticImage} from 'gatsby-plugin-image'
import PageSectionTwoCol from './pageSectionTwoCol';
import { 
    leftContainer,
    rightContainer, 
    sectionTitle
} from '../styles/pageSection.module.css';
import {
    circularImage
} from '../styles/services.module.css';


const Services = () => {

    return(
        <PageSectionTwoCol sectionId="services" pageHeader="Services">
                <div className={ leftContainer}>
                <h1 className={ sectionTitle }>Services</h1>
                <ul >
                    <li>Desktop Management
                        <ul>
                            <li>Track and Manage Assets</li>
                            <li>Deploy Computers</li>
                            <li>Upgrade / Refresh Computers</li>
                            <li>Install and migrate Data</li>
                        </ul>
                    </li>
                    <li>Disaster management
                        <ul>
                            <li>IT recovery strategies</li>
                        </ul>
                    </li>
                    <li>Cyber Security</li>
                    <li>Discovery and Assessment of IT environment</li>
                    <li>Network management</li>
                </ul>
                </div>
                <div className={ rightContainer }>
                    <StaticImage 
                        alt="People working together using a laptop and notebook"
                        src="../images/headset-on-keyboard-sm.jpg"
                        layout="constrained"
                    />
                </div>
        </PageSectionTwoCol>
    );
}

export default Services;