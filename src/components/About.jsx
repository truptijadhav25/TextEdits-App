import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='about-container'>
      <h1 className='about-title'>About TextEdits</h1>
      <p className='about-description'>
        TextEdits is a simple yet powerful text manipulation tool. It helps users transform text to UPPERCASE, lowercase, Capital Case, and more. You can customize the font size, change colors, and even copy the formatted text to your clipboard. This app is built with React.js and aims to enhance productivity in content creation.
      </p>
      <h2>Further Features</h2>
      <ul className='feature-list'>
        <li>Word and Character Count</li>
        <li>Text Reverse Feature</li>
      </ul>
    </div>
  );
};

export default About;
