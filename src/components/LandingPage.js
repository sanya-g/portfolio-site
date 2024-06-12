// src/LandingPage.js
import React from 'react';
import Typewriter from 'typewriter-effect';

const LandingPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'white' }}>
      <h1 style={{ color: 'black', fontFamily: 'monospace' }}>
        <Typewriter
          options={{
            strings: ['Sanya Gupta_'],
            autoStart: true,
            loop: false,
          }}
        />
      </h1>
    </div>
  );
};

export default LandingPage;
