import * as React from 'react';
import PageSection from './pageSection';


const Services = () => {
    return(
        <PageSection sectionId="services">
            <h1>Services</h1>
            <ul>
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
        </PageSection>
    );
}

export default Services;