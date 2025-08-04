import React, { useEffect } from 'react';
import Headers from "../components/Header.jsx";
import Footer from '../components/Footer.jsx';
import ModelList from '../components/ModelCard.jsx';
import FinanceFeature from '../components/FinanceFeature.jsx';
import Contact from '../components/Contact.jsx';
import Testimonials from '../components/Testimonials.jsx';
import AboutUs from '../components/AboutUs.jsx';
import Navbar from '../components/Navbar.jsx';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Headers />
      <AboutUs />
      <ModelList />
      <FinanceFeature />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
