import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  background: #f8f8f8;
`;

const ProjectTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ProjectList = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

const ProjectCard = styled.div`
  background: #fff;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin-bottom: 2rem;
`;

const Project = ({ title, description, link }) => (
  <ProjectCard>
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
  </ProjectCard>
);

const Projects = () => {
  return (
    <ProjectsSection>
      <ProjectTitle>My Projects</ProjectTitle>
      <ProjectList>
        <Project title="Project 1" description="Description of project 1" link="https://example.com" />
        <Project title="Project 2" description="Description of project 2" link="https://example.com" />
        <Project title="Project 3" description="Description of project 3" link="https://example.com" />
      </ProjectList>
    </ProjectsSection>
  );
};

export default Projects;
