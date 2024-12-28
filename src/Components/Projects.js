// src/components/Projects.js
import React from 'react';
import '../styles/Project.css';
import project1 from '../Components/Assests/project1.png';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <img src={project1} alt="Project 1" />
          <h3>Project 1</h3>
          <p>A brief description of this project goes here.</p>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </section>
  );
};

export default Projects;
