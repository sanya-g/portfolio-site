// src/components/Main.js
import React from 'react';

function Main() {
  return (
    <main>
      <section id="about">
        <h2>About Me</h2>
        <p>Hello! My name is Sanya Gupta. CS & Business Student @ USC </p>
        <p> Full-Stack Developer, Data & AI Ethicist, Hackathon Enthusiast, etc.. </p>
        <p> Passionate about tech for social good. Check out some of my projects below! </p>
      </section>
      <section id="projects">
        <h2>Projects</h2> 
        <p> Split this into two columns - Software & Data Science</p>
        <p>Find Your Mix (https://drink-yate.netlify.app/)</p>
        <p> Live Local </p>
        <p> AI Smart Mirror </p>
        
        <p> Without Waste </p>
        <p> Girl Genius Website https://girlgeniusmag.org/ </p>
        <p> Developed site for a community of 460,000+ marginalized individuals in tech. </p>
        <p> Data Science </p>
        <p> How Much is Your Car Worth? </p>
        <p> Other project I'm going to do - NBA related </p>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>Add Github, LinkedIn, Email</p>
      </section>
    </main>
  );
}

export default Main;