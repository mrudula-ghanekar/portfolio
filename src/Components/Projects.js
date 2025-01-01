import React from 'react';
import '../styles/Project.css';
import project1 from '../Components/Assests/Project1.png';
import project2 from '../Components/Assests/Project2.png';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-wrapper">
        {/* Project 1 */}
        <div className="project-flip">
          <div className="flip-inner">
            <div className="flip-front">
              <img src={project1} alt="Mobile Phone Clone" />
            </div>
            <div className="flip-back">
              <h3>Mobile Phone Clone</h3>
              <p>A mobile phone UI clone built with React and styled-components.</p>
              <a href="https://mobilephone-clone.vercel.app/" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-flip">
          <div className="flip-inner">
            <div className="flip-front">
              <img src={project2} alt="Chess App" />
            </div>
            <div className="flip-back">
              <h3>Chess App</h3>
              <p>A simple, interactive chess app with real-time gameplay.</p>
              <a href="https://chess-app-dusky.vercel.app/" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
