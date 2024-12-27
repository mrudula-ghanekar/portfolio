import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  padding: 2rem;
  background: #333;
  color: white;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterSection>
      <p>&copy; 2024 My Portfolio | All Rights Reserved</p>
    </FooterSection>
  );
};

export default Footer;
