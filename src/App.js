import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';

//import Header from './components/Header';
//import Main from './components/Main';
//import Footer from './components/Footer';
//import './App.css';

function App() {
  const [showMainPage, setShowMainPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMainPage(true);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showMainPage ? <MainPage /> : <LandingPage />}
    </div>
  );
}

export default App;
