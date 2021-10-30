import * as React from 'react'
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import PageSection from '../components/pageSection';


const AboutPage = () => {
    return(
        <Layout pageTitle="About Us">
            <FlexContainer>
                <LeftCol>
                    <StaticImage 
                        alt="An overhead view of a group of people with laptops meeting around a table"
                        src="../images/people.jpg"
                        layout="constrained"
                    />
                </LeftCol>
                <RightCol>
                    <PageHeader>About Us</PageHeader>
                    <PageText> 
                        My Technology Firm LLC's story begins with the recognition
                        that companies of all sizes deserve top-tier IT services 
                        without the expense and hassle of hiring an in-house team.
                        With over a decade of experience in IT consulting, we are 
                        dedicated to helping you get the most out of your company's 
                        technology so that you can focus on what's important instead
                        of why the printer isn't working.  Based in Schaumburg, Illinois, 
                        we are currently focused on serving businesses of all sizes 
                        within Schaumburg and its surrounding areas.   
                    </PageText>
                </RightCol>
            </FlexContainer>
        </Layout>
    );
}

export default AboutPage

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
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    padding: 4rem 2rem 0rem 0rem;
    width: 50%;

    @media screen and (max-width: 736px){
        margin: 3rem auto 0rem auto;
        padding: 0;
        width: 90%;
    }
`

const RightCol = styled.div` 
    box-sizing: border-box;
    width: 50%;

    @media screen and (max-width: 736px){
        margin: 1rem auto 2rem auto;
        padding: 0;
        width: 90%;
    }
`

const PageHeader = styled.h1` 
    border-bottom: 1px solid rgb(105,214,251);
    padding: 2rem 1rem 1rem 1rem; 
    text-align: center;
    text-transform: uppercase;
`

const PageText = styled.p` 
    padding: 0 2rem 0 0;
    margin: 0 auto;

    @media screen and (max-width: 736px){
        padding: 0;
    }
`