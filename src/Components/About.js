import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AboutSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #121212;
  color: #fff;
  padding: 40px;
  padding-top: 100px;
  flex-direction: column;
  text-align: center;
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const TextWrapper = styled.div`
  max-width: 600px;
  text-align: left;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #58a6ff;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #d1d5db;
`;

const ExperienceTitle = styled.h3`
  font-size: 24px;
  margin-top: 30px;
  color: #58a6ff;
`;

const ExperienceItem = styled.div`
  font-size: 18px;
  margin-top: 10px;
  color: #d1d5db;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 20px;
`;

const Skill = styled.div`
  background: #58a6ff;
  padding: 10px 20px;
  border-radius: 25px;
  color: white;
  font-size: 14px;
  font-weight: 500;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const TechStackTitle = styled.h3`
  font-size: 24px;
  margin-top: 30px;
  color: #58a6ff;
`;

const TechStackList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;
`;

const TechStackItem = styled.li`
  font-size: 18px;
  margin-bottom: 8px;
  color: #d1d5db;
`;

const About = () => {
  return (
    <AboutSection>
      <Container>
        <TextWrapper>
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            I am a skilled software engineer with hands-on experience in delivering
            scalable, efficient solutions. My approach blends technical expertise with
            a strong problem-solving mindset, ensuring that each product is crafted to
            provide a seamless user experience and meet business goals.
          </motion.p>

          <ExperienceTitle>Experience</ExperienceTitle>
          <ExperienceItem>
            • Software Engineer at Wipro (2021–Present): Leading key projects, mentoring junior developers, and optimizing processes to improve product quality and scalability.
          </ExperienceItem>
          <ExperienceItem>
            • MTech Candidate at BITS Pilani (2021–Present): Applying advanced technical concepts through rigorous coursework and practical applications.
          </ExperienceItem>

          <SkillsContainer>
            <Skill>Problem Solving</Skill>
            <Skill>Collaboration</Skill>
            <Skill>Scalable Solutions</Skill>
            <Skill>Innovation</Skill>
            <Skill>Product Development</Skill>
          </SkillsContainer>

          <TechStackTitle>Tech Stack</TechStackTitle>
          <TechStackList>
            <TechStackItem>JavaScript</TechStackItem>
            <TechStackItem>React</TechStackItem>
            <TechStackItem>Java</TechStackItem>
            <TechStackItem>Node.js</TechStackItem>
            <TechStackItem>HTML/CSS</TechStackItem>
            <TechStackItem>OOP</TechStackItem>
            <TechStackItem>Data Structures & Algorithms</TechStackItem>
          </TechStackList>
        </TextWrapper>
      </Container>
    </AboutSection>
  );
};

export default About;
