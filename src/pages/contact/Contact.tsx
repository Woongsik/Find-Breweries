import React from 'react';
import { ContactForm } from '../../components/contactForm/ContactForm';
import PageTitle from '../../components/pageTitle/PageTitle';
import './Contact.css';

export default function Contact() {
  return (
    // use React hook form to handle the contact form, add validation and display error
    <div className="contact">
      <div className="contact__contents">
      <PageTitle title='Contac us!' />
      <ContactForm />
      </div>
    </div>
  )
}
