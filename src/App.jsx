import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import PageTransition from './utils/PageTransition';
import Project from './components/Project';

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
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageTransition>
</div>
      <Footer />
    </div>
  );
};

export default App;  