import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Resetting some default styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 16px;
    background-color: white;
    color: #333;
    line-height: 1.6;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style-type: none;
  }

  /* General container */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  /* Responsive container */
  @media (max-width: 768px) {
    .container {
      padding: 0 1rem;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 0 0.5rem;
    }
  }

  /* Flexbox Utilities */
  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .justify-between {
    justify-content: space-between;
  }

  .align-start {
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    .flex-column-responsive {
      flex-direction: column;
    }
  }

  /* Box Shadows for hover and buttons */
  .box-shadow {
    transition: box-shadow 0.3s ease;
  }
  .box-shadow:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  /* Scrollbar customizations for smoothness */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  /* Smooth Scroll */
  html {
    scroll-behavior: smooth;
  }

  /* Modal backdrop */
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9999;
  }

  /* Utility Classes */
  .centered {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .hidden {
    display: none;
  }

  /* Responsive font sizes */
  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    body {
      font-size: 12px;
    }
  }

  /* Hover Feedback */
  a:hover, button:hover {
    color: #0066cc;
    transition: color 0.3s ease;
  }

  /* Dark Mode */
  body.dark-mode {
    background-color: #121212;
    color: #e0e0e0;
  }

  body.dark-mode a {
    color: #58a6ff;
  }
`;

export default GlobalStyles;
