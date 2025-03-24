import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Our School"
              className="rounded-lg shadow-lg"
            />
            
            
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">About Our School</h2>
            <p className="text-gray-600 mb-6">
              We are committed to providing a nurturing environment where students can discover 
              their potential and develop into well-rounded individuals. Our approach combines 
              academic excellence with character development.
            </p>
            
            <Link
              to="/about"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Click Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

