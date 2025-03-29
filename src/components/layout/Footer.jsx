import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* School Info */}
          <div>
            <h4>Our School</h4>
            <p className="footer-text">
              My School is a Complete School Website Solution with Online Admission and Online Fee Payment Accept.
              This is Best School Website Solution for Your School.
            </p>
            <img
              src="https://ext.same-assets.com/849750594/4209778334.png"
              alt="School Logo"
              className="footer-logo h-16"
            />
          </div>

          {/* Useful Links */}
          <div>
            <h4>Useful Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/fee-payment">
                  Fee Payment
                </Link>
              </li>
              <li>
                <Link to="/gallery">
                  School Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact-us">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4>Contact Info</h4>
            <ul className="space-y-3">
              <li className="footer-contact-item">
                <i className="fas fa-map-marker-alt footer-contact-icon"></i>
                <span>Birtamode-2,Jhapa,Nepal</span>
              </li>
              <li className="footer-contact-item">
                <i className="fas fa-envelope footer-contact-icon"></i>
                <a href="mailto:DEMO548597315@gmail.com">
                  demo12344@gmail.com
                </a>
              </li>
              <li className="footer-contact-item">
                <i className="fas fa-phone-alt footer-contact-icon"></i>
                <span>+977-9824456789</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-divider">
          <div className="flex flex-col md:flex-row justify-between">
            <p className="footer-copyright">Copyright @ 2024 All Right Reserved | Developed By <a href="https://unlein.com" className="text-primary">SCHOOL Pvt Ltd</a></p>
            <div className="footer-bottom-links flex space-x-4 mt-3 md:mt-0">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-conditions">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;