import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import PageTransition from './utils/PageTransition';
import Maintainance from './ServicesPages/Maintainance';
import WebDevelopment from './ServicesPages/WebDevelopment';
import WebDesign from './ServicesPages/WebDesign';

const App = () => {
  const location = useLocation();

  return (
    <div>
      <Header />
      <div className='container mx-auto'>
      <PageTransition location={location}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/maintenance" element={<Maintainance />} />
        </Routes>
      </PageTransition>
</div>
      <Footer />
    </div>
  );
};

export default App;  