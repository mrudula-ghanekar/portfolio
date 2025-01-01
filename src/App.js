import React from 'react';
import '../src/styles/Slidebar.css';       // Import sidebar styles
import '../src/styles/Hero.css';          // Import hero styles
import '../src/styles/Project.css';      // Import projects styles
import '../src/styles/About.css';         // Import about styles
import '../src/styles/Contact.css';       // Import contact styles
import '../src/styles/Footer.css';        // Import footer styles

import Hero from './Components/Hero';
import Sidebar from './Components/Sidebar';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import GlobalStyles from './styles/GlobalStyles';
function App() {
  return (
    <div>
      <GlobalStyles/>
    {/* Navbar for the page */}
      <Sidebar />   {/* Sidebar for quick navigation */}
      <Hero />      {/* Hero section with an intro */}
      <About />     {/* About me section */}
      <Projects />  {/* Projects section */}
      <Contact />   {/* Contact section */}
      <Footer />    {/* Footer section */}
    </div>
  );
}

export default App;