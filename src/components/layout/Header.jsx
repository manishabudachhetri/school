import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="w-full">
      
          

      {/* Logo and Navigation */}
      <div className="main-navigation">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-2">
          <Link to="/" className="mb-4 md:mb-0">
            <img
              src="https://ext.same-assets.com/1081761200/2832207875.png"
              alt="My School International"
              className="h-16"
            />
          </Link>
          <nav className="flex flex-wrap justify-center">
            <Link to="/" className="nav-link px-4 py-2 font-medium">HOME</Link>
            <Link to="/about-us" className="nav-link px-4 py-2 font-medium">ABOUT US</Link>
            <Link to="/gallery" className="nav-link px-4 py-2 font-medium">GALLERY</Link>
            <Link to="/contact-us" className="nav-link px-4 py-2 font-medium">CONTACT US</Link>
            <Link to="/courses" className="nav-link px-4 py-2 font-medium">COURSES</Link>
            <Link to="/certificate" className="nav-link px-4 py-2 font-medium">CERTIFICATE</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;