import React from 'react';
import styled from 'styled-components';
import '../styles/Footer.css';
const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <SocialLinks>
        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </SocialLinks>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #f8f8f8;
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
