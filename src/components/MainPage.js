// src/MainPage.js
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Change import statement
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; // Correct import statement
import './MainPage.css';

const MainPage = () => {
    const [isScrollTextVisible, setIsScrollTextVisible] = useState(true);

  useEffect(() => {
    const rightColumn = document.getElementById('right-column');

    function handleScroll() {
      const threshold = rightColumn.scrollHeight - rightColumn.clientHeight - 100; // Adjust threshold as needed
      const isScrolledToBottom = rightColumn.scrollTop >= threshold;
      setIsScrollTextVisible(!isScrolledToBottom);
    }

    rightColumn.addEventListener('scroll', handleScroll);

    return () => {
      rightColumn.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="main-container">
      <div className="left-column">
        <h1>Sanya Gupta<span className="blink">_</span></h1>
        <h2>Computer Science, Business Admin, & Data Science @ USC</h2>
        <h3> Hi! I am a junior at the University of Southern California, passionate about building tech that has a tangible impact. </h3>
      </div>
      <div className="right-column" id = "right-column">
        <h2>Projects</h2>
        <div className="project-section">
          <h3>Find Your Mix</h3>
          <p>Full-Stack Developer, May 2024</p>
          <p>https://drink-yate.netlify.app/</p>
          <p> https://github.com/sanya-g/yate-yerba-mate </p>
        </div>
        <div className="project-section">
          <h3>How Much is Your Car Worth?</h3>
          <p>Data Scientist, March 2024</p>
          <p> https://github.com/sanya-g/car-regression </p>
        </div>
        <div className="project-section">
          <h3>Live Local</h3>
          <p>Full-Stack Developer, Aug 2023</p>
          <p>https://github.com/sanya-g/live_local </p>
        </div>
        <div className="project-section">
          <h3>AI Smart Mirror</h3>
          <p>Back-end Developer, July 2023</p>
          <p>https://github.com/sanya-g/aismartmirror</p>
        </div>
        <div className="project-section">
          <h3>Without Waste</h3>
          <p>AR/VR Researcher, Aug 2021</p>
          <p>https://docs.google.com/document/d/e/2PACX-1vSFP4UKpxNijjKmCzy_jlbbEXJtb36yv_q0CI6YJrBPxGoYBZkT8J1nRiDXbtHYQYZD8e86b3y-yIVT/pub</p>
        </div>
        <div className="project-section">
          <h3>Girl Genius Magazine</h3>
          <p>Web Developer, Jan 2021</p>
          <p>https://girlgeniusmag.org/</p>
        </div>
      </div>
      <Footer isScrollTextVisible={isScrollTextVisible} />
    </div>
  );
};

const Footer = ({ isScrollTextVisible}) => {
    return (
      <div className="footer">
        <div className="footer-left">
          <a href="mailto:sanyagup@usc.com"><FontAwesomeIcon icon={faEnvelope} /></a>
          <a href="https://linkedin.com/in/sanya-gupta1"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://github.com/sanya-g"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
        <div className="footer-right">
        {isScrollTextVisible && <div className="scroll-text">↓ scroll ↓</div>}
        </div>
      </div>
    );
  };

export default MainPage;
