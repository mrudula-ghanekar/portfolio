// src/components/ProjectCard.js
import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
      <p className="mt-4 text-gray-600">{project.description}</p>
      <a href={project.link} className="mt-6 text-blue-500 hover:text-blue-700">View Project</a>
    </div>
  );
}

export default ProjectCard;
