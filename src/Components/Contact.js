import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background: #fff;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactInput = styled.input`
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
`;

const ContactTextArea = styled.textarea`
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  resize: none;
`;

const Contact = () => {
  return (
    <ContactSection>
      <ContactTitle>Contact Me</ContactTitle>
      <ContactForm>
        <ContactInput type="text" placeholder="Your Name" />
        <ContactInput type="email" placeholder="Your Email" />
        <ContactTextArea rows="5" placeholder="Your Message" />
        <button type="submit">Send Message</button>
      </ContactForm>
    </ContactSection>
  );
};

export default Contact;
