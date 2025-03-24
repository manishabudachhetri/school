import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Home Page Components
import Hero from './components/home/Hero';
import About from './components/home/About';
import QuickQueries from './components/home/QuickQueries';
import Stats from './components/home/Stats';
import Events from './components/home/Events';
import Team from './components/home/Team';
import Reviews from './components/home/Reviews';




// Home Page
const HomePage = () => (
  <>
    <Hero />
    <About />
    <QuickQueries />
    <Stats />
    <Events />
    <Team />
    <Reviews />
   
   
  </>
);

// Main App Component
const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
        
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;