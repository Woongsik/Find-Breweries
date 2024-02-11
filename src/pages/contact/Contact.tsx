import React from 'react';
import { Form } from '../../components/form/Form';
import PageTitle from '../../components/pageTitle/PageTitle';
import './Contact.css';

export default function Contact() {
  return (
    // use React hook form to handle the contact form, add validation and display error
    <div className="contact">
      <div>
      <PageTitle title='Contac us!' />
      <Form />
      </div>
    </div>
  )
}
