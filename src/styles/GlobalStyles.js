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
    background-color: #f4f4f9;
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

  /* Flexbox Utilities */
  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
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
`;

export default GlobalStyles;
