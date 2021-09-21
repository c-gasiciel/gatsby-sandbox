import * as React from 'react';
import PageSection from './pageSection';
import { contactBoxContainer, contactBox } from '../styles/contactUs.module.css';

 const ContactUs = () =>{
    return(     
        <PageSection sectionId="contact-us">
            <h1>Contact Us</h1>
            <div className={ contactBoxContainer }>
                <section className={ contactBox }>
                    <h3>Send us an email</h3>
                </section>
                <section className={ contactBox }>
                    <h3>Send us a message</h3>
                </section>
            </div>
        </PageSection>
     );
 }

 export default ContactUs;