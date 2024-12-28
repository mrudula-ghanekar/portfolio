import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <ContactSection id="contact">
      <h2>Contact Me</h2>
      <Form
        action="https://formspree.io/f/{your_form_id}" // Replace with your Formspree ID or backend endpoint
        method="POST"
      >
        <InputWrapper>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </InputWrapper>
        <button type="submit">Send</button>
      </Form>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  padding: 100px 50px;
  text-align: center;

  h2 {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  button {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;

  label {
    margin-bottom: 5px;
    font-weight: bold;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;

    &:focus {
      border-color: #007bff;
      outline: none;
    }
  }
`;

export default Contact;
