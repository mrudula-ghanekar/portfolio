import React from 'react';
import '../styles/Project.css';
import project1 from '../Components/Assests/Project1.png';
import project2 from '../Components/Assests/Project2.png';
import project3 from '../Components/Assests/Project3.png';
import project4 from '../Components/Assests/Project4.png';
import project5 from '../Components/Assests/Project5.png';


const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-wrapper">
         {/* Project 1 */}
          <div className="project-flip">
          <div className="flip-inner">
            <div className="flip-front">
              <img src={project1} alt="AI Digital Agency" />
            </div>
            <div className="flip-back">
              <h3>AI-system</h3>
            <p>An Agentic Digital Marketing Agency </p>
              <a href="https://leadzy-frontend.vercel.app" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        </div>
         {/* Project 2 */}
          <div className="project-flip">
          <div className="flip-inner">
            <div className="flip-front">
              <img src={project2} alt="An Agentic Influencer Management System " />
            </div>
            <div className="flip-back">
              <h3>AI-MultiAgent</h3>
            <p>An Agentic Influencer Management System </p>
              <a href="https://cas-frontend-mg.vercel.app/" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        </div>
          {/* Project 3 */}
          <div className="project-flip">
          <div className="flip-inner">
            <div className="flip-front">
            <img src={project3} alt="AI-Resume Anylzer" />
            </div>
            <div className="flip-back">
              <h3>AI-Resume Anylzer</h3>
              <p>A Smart Resume Anlyzer built on Java and  React.</p>
              <a href="https://ai-resume-frontend-mg.vercel.app/" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        </div>
         {/* Project 4 */}
         <div className="project-flip">
          <div className="flip-inner">
            <div className="flip-front">
              <img src={project4} alt="Chess App" />
            </div>
            <div className="flip-back">
              <h3>Chess App</h3>
              <p>A simple, interactive chess app with real-time gameplay.</p>
              <a href="https://chess-app-mg.vercel.app/" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        </div>
        {/* Project 5 */}
        <div className="project-flip">
          <div className="flip-inner">
            <div className="flip-front">
              <img src={project5} alt="Mobile Phone Clone" />
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
       
      </div>
    </section>
  );
};

export default Projects;
