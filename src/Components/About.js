import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Icons for tech stack (e.g., React, JavaScript)
import { FaReact, FaJs, FaNodeJs, FaHtml5, FaCss3Alt, FaJava } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";  // MongoDB icon
import { SiSpring, SiFirebase, SiApifox, SiLeetcode, SiCodeblocks } from "react-icons/si";  // Spring and Firebase icons

// Styled Components
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
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 20px;
  position: relative;

  &::before {
    content: "•";
    position: absolute;
    left: 0;
    font-size: 24px;
    color: #58a6ff;
  }
`;

const TechStackTitle = styled.h3`
  font-size: 24px;
  margin-top: 30px;
  color: #58a6ff;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const TechStackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 10px;
  justify-content: center;
`;

const TechStackItem = styled.div`
  background-color: #222;
  border-radius: 10px;
  padding: 15px 25px;
  font-size: 18px;
  font-weight: 600;
  color: #d1d5db;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    background-color: #58a6ff;
    color: #fff;
  }

  svg {
    font-size: 24px;
    transition: color 0.3s ease;
  }

  &:hover svg {
    color: #fff;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 20px;
  justify-content: center;
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
            <strong>Software Engineer at Wipro (2021–Present)</strong>
            <ul>
              <li>Applied foundational knowledge to quickly tackle complex software challenges in a fast-paced environment.</li>
              <li>Developed scalable, efficient solutions while continuously growing my technical expertise.</li>
              <li>Led projects to significantly enhance system performance and scalability.</li>
              <li>Mentored junior developers, facilitated knowledge transfer (KTs), and promoted a collaborative team culture.</li>
              <li>Streamlined processes to ensure high-quality code and improve project delivery efficiency.</li>
            </ul>
          </ExperienceItem>

          <ExperienceItem>
            <strong>MTech in Software Systems at BITS Pilani (Present)</strong>
            <ul>
              <li>Pursuing advanced knowledge in software systems, enhancing my expertise in system design and distributed systems.</li>
              <li>Applying cutting-edge technologies to solve complex problems, directly benefiting my work at Wipro.</li>
              <li>Transforming theoretical knowledge into practical, high-impact solutions in the workplace.</li>
            </ul>
          </ExperienceItem>

          <TechStackTitle>Tech Stack</TechStackTitle>
          <TechStackList>
            <TechStackItem aria-label="JavaScript">
              <FaJs /> JavaScript
            </TechStackItem>
            <TechStackItem aria-label="React">
              <FaReact /> React
            </TechStackItem>
            <TechStackItem aria-label="Node.js">
              <FaNodeJs /> Node.js
            </TechStackItem>
            <TechStackItem aria-label="Java">
              <FaJava /> Java
            </TechStackItem>
            <TechStackItem aria-label="MongoDB">
              <DiMongodb /> MongoDB
            </TechStackItem>
            <TechStackItem aria-label="Spring Framework">
              <SiSpring /> Spring Framework
            </TechStackItem>
            <TechStackItem aria-label="Firebase">
              <SiFirebase /> Firebase
            </TechStackItem>
            <TechStackItem aria-label="DSA">
              <SiCodeblocks /> DSA (Data Structures & Algorithms)
            </TechStackItem>
            <TechStackItem aria-label="API">
              <SiApifox /> API
            </TechStackItem>
          </TechStackList>
        </TextWrapper>
      </Container>
    </AboutSection>
  );
};

export default About;
