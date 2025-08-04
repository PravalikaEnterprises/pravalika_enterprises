import React, { useEffect } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import AboutCeo from '../components/AboutCeo.jsx';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <AboutCeo />
      <Footer />
    </>
  );
};

export default HomePage;
