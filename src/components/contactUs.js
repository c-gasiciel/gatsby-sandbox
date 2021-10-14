import * as React from 'react';
import styled from 'styled-components'
import ContactForm from './contactForm';


 const ContactUs = () =>{
    return(     
        <MainContainer>
            <LeftCol >
                <SectionTitle>Want to Know More?</SectionTitle>
                <p>We are currently accepting clients within 30 miles 
                    of the Schaumburg, Illinois area.</p>
                <InfoBox >
                    <h2>Give us a call</h2>
                    <p>Tel: (847)630-9939</p>
                </InfoBox>
            </LeftCol>
            <RightCol>
                < ContactForm />
            </RightCol>
        </MainContainer>
     );
 }

 export default ContactUs;


 const MainContainer = styled.div` 
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    margin: 0 auto;
    height: 100%;

    background-color: transparent;
    box-sizing: border-box; 
    padding: 1% 5% 1% 5%;
    width: 90%;

    @media screen and (max-width: 736px){
        display: flex;
        flex-flow: column;
        align-content: center;
        margin: 0 auto;
        height: 100%;
    }
 `

 const LeftCol = styled.div` 
    padding: 1rem 0rem 0rem 2rem;
    width: 40%;

    @media screen and (max-width: 736px){
        margin: 3rem auto 2rem auto;
        padding-left: 0rem;
        width: 95%;
    }
 `

 const RightCol = styled.div` 
    width: 55%;

    @media screen and (max-width: 736px){
        width: 95%;
    }
 `


 const SectionTitle = styled.h1` 
    padding: 1rem 2rem 1rem 0rem;
    text-transform: uppercase;
    border-bottom: 1px solid rgb(105,214,251);

    @media screen and (max-width: 736px){
        text-align: center;
    }
 `

const InfoBox = styled.div` 
    margin: 2rem 0rem 1rem 0rem;
`