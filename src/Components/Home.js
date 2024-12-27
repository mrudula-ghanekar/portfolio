import React from 'react';
import styled from 'styled-components';

const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background: #f8f8f8;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const Home = () => {
  return (
    <HomeSection>
      <Title>Welcome to My Portfolio</Title>
      <Subtitle>Building elegant web applications</Subtitle>
    </HomeSection>
  );
};

export default Home;
