// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-gray-100 text-center">
      <div>
        <h1 className="text-5xl font-bold text-gray-800">Hi, I'm Your Name</h1>
        <p className="mt-4 text-xl text-gray-600">A passionate Software Developer</p>
        <div className="mt-8">
          <Link to="/about" className="px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
            Learn More About Me
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
