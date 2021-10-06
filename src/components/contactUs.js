import * as React from 'react';
import ContactForm from './contactForm';
import PageSectionTwoCol from './pageSectionTwoCol';
import { 
    contactBoxContainer, 
    contactBox,
    leftCol,
    rightCol,
    infoBox 
} from '../styles/contactUs.module.css';
import { 
    sectionTitle
} from '../styles/pageSection.module.css';

 const ContactUs = () =>{
    return(     
        <PageSectionTwoCol sectionId="contact-us">
            <div className={ leftCol } >
                <h1 className={ sectionTitle }>Want to Know More?</h1>
                <p>We are currently accepting clients within 30 miles of the Schaumburg, Illinois area.</p>
                <div className={ infoBox }>
                    <h2>Give us a call</h2>
                    <p>Tel: (847)630-9939</p>
                </div>
            </div>
            <div className={ rightCol }>
                < ContactForm />
            </div>
        </PageSectionTwoCol>
     );
 }

 export default ContactUs;