// src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';
import avatar from '../Components/Assests/avatar.png';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 >
          Hi, I'm  <span> Mrudula </span> <br />
         Ghanekar
        </h1>
        <p>
        I combine technical expertise, <span>innovative problem-solving</span>, creativity and <span>practical experience</span> to create efficient, <span>scalable solutions</span> that deliver exceptional <span>user experiences</span> and drive <span>meaningful product development.
       </span>  </p>
        <div className="buttons">
          <a href="/resume" className="btn">
            Download Resume
          </a>
          <a href="#projects" className="btn">
            See My Work
          </a>
        </div>
      </motion.div>
      <motion.img
        src={avatar}
        alt="Avatar"
        className="hero-avatar"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      />
    </section>
  );
};

export default Hero;
