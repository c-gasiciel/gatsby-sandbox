import * as React from 'react';
import styled from 'styled-components';
import {StaticImage} from 'gatsby-plugin-image';


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
                    <PrimaryListItem>
                        Onsite and remote help desk support
                    </PrimaryListItem>
                    <PrimaryListItem>Desktop Management
                        <ul>
                            <li>Track and manage assets</li>
                            <li>Deploy computers</li>
                            <li>Upgrade computers</li>
                            <li>Install and migrate data</li>
                        </ul>
                    </PrimaryListItem>
                    <PrimaryListItem>Disaster management
                        <ul>
                            <li>IT recovery strategies</li>
                            <li>Data backup</li>
                        </ul>
                    </PrimaryListItem>
                    <PrimaryListItem>Cyber Security
                        <ul>
                            <li>Firewall</li>
                            <li>Endpoint detection and response</li>
                            <li>Antivirus</li>
                            <li>Malware protection</li>
                            <li>Email spam filtering</li>
                        </ul>
                    </PrimaryListItem>
                    <PrimaryListItem>
                        Discovery and Assessment of IT environment
                    </PrimaryListItem>
                    <PrimaryListItem>Telecommunications Consulting
                        <ul>
                            <li>Unified communications solutions (GoToConnect)</li>
                        </ul>
                    </PrimaryListItem>
                    <PrimaryListItem>
                        Network management
                    </PrimaryListItem>
                </ul>
            </LeftCol>
            <RightCol>
                <StaticImage 
                    alt="A laptop keyboard with a headset resting on top"
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

const PrimaryListItem = styled.li` 
    padding-bottom: 0.5rem;
`