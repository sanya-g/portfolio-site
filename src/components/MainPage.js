// src/MainPage.js
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; 
import './MainPage.css';

const MainPage = () => {
    const [isScrollTextVisible, setIsScrollTextVisible] = useState(true);

  useEffect(() => {
    const rightColumn = document.getElementById('right-column');

    function handleScroll() {
      const threshold = rightColumn.scrollHeight - rightColumn.clientHeight - 100; 
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
        <h2>Computer Science, Business Admin, & Data Science @ <a href="https://viterbischool.usc.edu/">USC</a></h2>
        <h3> Hi! I am a junior at the University of Southern California who is passionate about building tech with tangible impact, AI Ethics, and <a href="https://www.cordonbleu.edu/news/culinary-tourism/en">culinary tourism.</a> </h3>
      </div>
      <div className="right-column" id = "right-column">
        <h2>Projects</h2>
        <div className="project-section">
          <Project
            duration="May 2024"
            title="Find Your Mix »"
            description="(Mobile-only) Created for YATÉ Yerba Mate. The website recommends a YATÉ drink for the user based on their favorite musical artists. Our flash release software strategy resulted in 150+ new user discovery for YATÉ."
            tags={['React.js', 'Tailwind']}
            logo="https://www.spiritedaway.co/cdn/shop/files/YATE_SUBLIME_GINGER_CAN_01_a1cf4a8e-3626-4346-a359-e0ea1900e23a.webp?v=1700800605" 
            link="https://drink-yate.netlify.app/"
          />
        </div>
        <div className="project-section">
        <Project
            duration="March 2024"
            title="How Much is Your Car Worth? »"
            description="This custom algorithm was built to increase transparency and promote fair pricing in the used car market. Based on a cars.com dataset of 500 million cars, the final equation achieved an 85.56% R-squared, showing a high correlation to the market."
            tags={['R', 'Python']}
            logo="https://www.freeiconspng.com/thumbs/car-png/red-sports-car-png-1.png" 
            link="https://github.com/sanya-g/car-regression"
          />
        </div>
        <div className="project-section">
        <Project
            duration="Aug 2023"
            title="Live Local »"
            description="Cross-platform mobile application that spotlights minority-owned local businesses through a social-media style interface. Built out MVP as part of the founding team, winning the GrizzHacks Hackathon as well as achieving the Best Social Good Hack award. "
            tags={['Flutter', 'Java','GCP','MongoDB','Spring Boot']}
            logo="https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/001/221/773/datas/medium.png" 
            link="https://github.com/sanya-g/live_local"
          />
        </div>
        <div className="project-section">
        <Project
            duration="July 2023"
            title="AI-integrated Smart Mirror »"
            description="Built a physical, modular smart mirror that incorporates various real-time API data, as well as OpenCV facial recognition and programmed NLU capabilities for a seamless user experience."
            tags={['Python', 'OpenCV','Node.js','Electron']}
            logo="https://projects.bluestampengineering.com/wp-content/uploads/2020/06/img_5560-2048x1536.jpg" 
            link="https://github.com/sanya-g/aismartmirror"
          />
        </div>
        <div className="project-section">
        <Project
            duration="Aug 2021"
            title="Without Waste »"
            description="As part of the Four Eyes Lab at the University of California, Santa Barbara, I served as the PM & Unity developer for our proof-of-concept 3-D visualization. The program showcases a dual experience of climate-related disasters through a spreading wildfire and a rising flood respectively."
            tags={['C#', 'JavaScript','C++']}
            logo="https://lh7-us.googleusercontent.com/docsz/AD_4nXf0RDYDJhFnGbwzBpy90qGA_-7a-HsnYERoc05XzO2Nuv_E_DcpX65Nuo6bHJq2wOSV1Zs6SYeKxcIrV7EyVY-cTB7CObNuOVZks7bIjDPCJmDPWF0X0y2k1L1GsRO5uuEogA8KvZlzgaPtqxNJGWAh?key=z_wJ88f3D6gXit_0qQL_ng" 
            link="https://docs.google.com/document/d/e/2PACX-1vSFP4UKpxNijjKmCzy_jlbbEXJtb36yv_q0CI6YJrBPxGoYBZkT8J1nRiDXbtHYQYZD8e86b3y-yIVT/pub"
          />
        </div>
        <div className="project-section">
        <Project
            duration="Jan 2021"
            title="Girl Genius Magazine »"
            description="Developed the website for Girl Genius, a nonprofit organization that serves to promote marginalized community presence in STEM-related fields. To date, the organization has reached 479K+ individuals through its various campaigns."
            tags={['JavaScript', 'Tailwind']}
            logo="https://yt3.googleusercontent.com/ytc/AIdro_nw2NP573R1UToEyJoCZVJdZZfCo-LHrx2KR0aRKFdpa2w=s900-c-k-c0x00ffffff-no-rj" 
            link="https://girlgeniusmag.org/"
          />
        </div>
      </div>
      <Footer isScrollTextVisible={isScrollTextVisible} />
    </div>
  );
};

const Project = ({ duration, title, description, tags, logo, link }) => {
    return (
      <div className="project-card">
        <div className="project-card-left">
          <img src={logo} alt="Project logo" />
        </div>
        <div className="project-card-right">
          <p>{duration}</p>
          <h3>
            <a href={link} className="project-title">{title}</a>
            </h3>
          <div className="project-tags">
            {tags.map((tag, index) => (
              <span key={index} className="project-tag">{tag}</span>
            ))}
          </div>
          <p>{description}</p>
        </div>
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
