import * as React from 'react';
import styled from 'styled-components';
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
        <FlexContainer>
            <LeftCol>
                <SectionTitle>Services</SectionTitle>
                <p>
                My Technology Firm LLC helps companies get the most benefit out of 
                the technology that is required to efficiently operate their business. 
                We offer a wide range of IT consulting services that include Onsite 
                and Remote Help Desk support, Network Security, and Managed IT Services. 
                We do assessments to discover security vulnerabilities and make 
                recommendations. Here are some services we offer: 
                </p>
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
            </LeftCol>
            <RightCol>
                <StaticImage 
                    alt="People working together using a laptop and notebook"
                    src="../images/headset-on-keyboard-sm.jpg"
                    layout="constrained"
                />
            </RightCol>
        </FlexContainer>
    );
}

export default Services;

const FlexContainer = styled.div` 
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    margin: 0 auto;
    background-color: transparent;
    box-sizing: border-box; 
    height: 100%;
    padding: 1% 5% 1% 5%;
    width: 95%;

    @media screen and (max-width: 736px){
        display: flex;
        flex-flow: column;
        align-content: center;
        margin: 0 auto;
        height: 100%;
    }
`

const LeftCol = styled.div` 
    display: flex;
    flex-flow: column;
    padding: 0rem 2rem 0rem 5rem;
    width: 55%;

    @media screen and (max-width: 736px){
        margin: 3rem auto 2rem auto;
        padding: 0;
        width: 90%;
    }
`

const RightCol = styled.div` 
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding: 0rem 2rem 0rem 0rem;
    width: 45%;

    @media screen and (max-width: 736px){
        margin: 0rem auto 2rem auto;
        padding: 1rem;
        width: 90%;
    }
`

const SectionTitle = styled.h1`
    padding: 0rem 0rem 1rem 0rem;
    text-transform: uppercase;
    border-bottom: 1px solid rgb(105,214,251); 

    @media screen and (max-width: 736px){
        text-align: center;
    }
`