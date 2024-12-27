import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 4rem 2rem;
  background: #fff;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  color: #444;
`;

const About = () => {
  return (
    <AboutSection>
      <AboutTitle>About Me</AboutTitle>
      <AboutText>
        I'm a passionate developer with a focus on creating clean, responsive, and interactive web applications. I enjoy learning new technologies and building products that solve real-world problems.
      </AboutText>
    </AboutSection>
  );
};

export default About;
