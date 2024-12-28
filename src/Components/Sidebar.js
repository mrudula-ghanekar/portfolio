import React from "react";
import { Link } from "react-scroll";
import '../styles/Slidebar.css';
import { FaHome, FaUserAlt, FaCode, FaEnvelope } from "react-icons/fa";

const Sidebar = () => {
  return (
    <nav className="sidebar-container">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="hero" smooth={true} duration={500} className="styled-link">
            <FaHome />
            <span>Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="About" smooth={true} duration={500} className="styled-link">
            <FaUserAlt />
            <span>About</span> 
          </Link>
        </li>
        <li className="nav-item">
          <Link to="projects" smooth={true} duration={500} className="styled-link">
            <FaCode />
            <span>Projects</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="contact-section" smooth={true} duration={500} className="styled-link">
            <FaEnvelope />
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
