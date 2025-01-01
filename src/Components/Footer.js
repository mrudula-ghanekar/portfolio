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
  color: black;
  border-top: 1px solid #eaeaea;
  position: relative;
  bottom: 0;
  width: 100%;
  flex-shrink: 0; /* Prevents shrinking in flex layout */

  p {
    margin: 0;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    padding: 15px;
    p {
      font-size: 12px;
    }
  }
`;

const SocialLinks = styled.div`
  margin-top: 10px;

  a {
    margin: 0 10px;
    font-size: 16px;
    color: #58a6ff; /* Lighter blue color */
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      text-decoration: underline;
      color: #2b82db; /* Darker blue on hover */
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 10px;
    a {
      font-size: 14px;
    }
  }
`;

export default Footer;
