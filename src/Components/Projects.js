// src/pages/Projects.js
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    { title: "Project One", description: "A brief description of project one.", link: "#" },
    { title: "Project Two", description: "A brief description of project two.", link: "#" },
    { title: "Project Three", description: "A brief description of project three.", link: "#" },
  ];

  return (
    <section className="p-12 bg-gray-100">
      <h2 className="text-4xl font-semibold text-gray-800 text-center">My Projects</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
