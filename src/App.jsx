import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import HomePage from './pages/Home';
import AboutUs from './pages/Aboutus';
import Gallery from './pages/Gallery';
import ContactUs from './pages/Contactus';
import Courses from './pages/Courses';
import Certificate from './pages/Certificate';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/certificate" element={<Certificate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
