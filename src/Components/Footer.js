import React from 'react';
import styled from 'styled-components';
import '../styles/Footer.css';
const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Mrudula Ghanekar. All rights reserved.</p>
      <SocialLinks>
        <a href="https://github.com/mrudula-ghanekar" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/mrudula-ghanekar-bb00231bb/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
       
      </SocialLinks>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  text-align: center;
  padding: 20px;
  background: white;
  border-top: 1px solid #eaeaea;

  p {
    margin: 0;
    font-size: 14px;
  }
`;

const SocialLinks = styled.div`
  margin-top: 10px;

  a {
    margin: 0 10px;
    font-size: 16px;
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Footer;
