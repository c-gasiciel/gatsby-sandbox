import * as React from 'react';
import { 
    contactForm,
    formCard,
    formInput, 
    formButton, 
} from '../styles/contactUs.module.css';

const ContactForm = () =>{

    return(
        <section className={ formCard }>
            <h2>Send us a message</h2>
            <form 
                action="https://getform.io/f/081909c6-3756-42c0-9e0e-f4b603ba2349"
                method="POST"
                enctype="multipart/form-data"
                className={ contactForm }
            >
                <label>Name*</label>
                <input type="text" name="name" className={ formInput } required/>
                
                <label>Email*</label>
                <input type="email" name="email" className={ formInput } required/>
                
                <label>Message*</label>
                <input type="textarea" name="message" className={ formInput } required/>
                
                <button type="submit" className={ formButton }>Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;