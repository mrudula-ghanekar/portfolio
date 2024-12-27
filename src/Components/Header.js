// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-gray-800">Your Name</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-lg text-gray-600 hover:text-blue-600 transition duration-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-lg text-gray-600 hover:text-blue-600 transition duration-300">About</Link>
            </li>
            <li>
              <Link to="/projects" className="text-lg text-gray-600 hover:text-blue-600 transition duration-300">Projects</Link>
            </li>
            <li>
              <Link to="/contact" className="text-lg text-gray-600 hover:text-blue-600 transition duration-300">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
