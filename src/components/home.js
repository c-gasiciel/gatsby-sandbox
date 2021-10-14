import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styled from 'styled-components';
import { buttonText } from '../styles/home.module.css';

const Home = () =>{
    return(
        <FlexContainer>
            <ContentCard>
                <PageText>IT consulting solutions for business</PageText>  
                <Button
                    paintDrip
                    hex="#FFFFFF"
                    to="/servicesPage"
                >Learn More</Button>
            </ContentCard>
        </FlexContainer>
    );
}

export default Home;

const FlexContainer = styled.div`
    box-sizing: border-box; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 77vh;
    height: 100%;
    width: 100%;
`

const ContentCard = styled.div` 
    box-sizing: border-box; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5% auto;
    width: 70%;
`

const PageText = styled.p` 
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
`

const Button = styled(AniLink)` 
    color: black;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;

    background-color: transparent;
    border: 1px solid black;
    padding: 1rem 3rem;

    &:visted{
        color: black;
    }
`
