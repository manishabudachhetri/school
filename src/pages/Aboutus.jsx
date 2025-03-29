import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (    
    <div>
      {/* Hero Section - Full Width */}
      <div className="w-full relative h-[400px]">   
        <img 
          src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="About Us Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4 text-white">About Us</h1>
            <nav className="flex justify-start items-center text-white/90 text-sm">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="mx-2 text-xl">›</span>
              <span className="text-primary">About Us</span>
            </nav>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* About Our School Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative mt-8">
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
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:transform hover:scale-105 transition-transform duration-300 relative">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-book text-yellow-600 text-2xl"></i>
              </div>
              <h3 className="font-semibold mb-2">Quality Curriculum</h3>
              <p className="text-gray-600">Comprehensive and up-to-date curriculum following national education standards</p>
              <div className="absolute bottom-0 left-0 w-full h-2 bg-[#e4a536] rounded-b-lg"></div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:transform hover:scale-105 transition-transform duration-300 relative">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chalkboard-teacher text-yellow-600 text-2xl"></i>
              </div>
              <h3 className="font-semibold mb-2">Expert Teachers</h3>
              <p className="text-gray-600">Highly qualified and experienced educators dedicated to student success</p>
              <div className="absolute bottom-0 left-0 w-full h-2 bg-[#e4a536] rounded-b-lg"></div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:transform hover:scale-105 transition-transform duration-300 relative">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-yellow-600 text-2xl"></i>
              </div>
              <h3 className="font-semibold mb-2">Individual Attention</h3>
              <p className="text-gray-600">Small class sizes ensuring personalized attention for each student</p>
              <div className="absolute bottom-0 left-0 w-full h-2 bg-[#e4a536] rounded-b-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gray-200 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-4">Our Team Members</h2>
            <p className="text-center text-gray-600 mb-12">
              Meet our experienced and dedicated team
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="relative mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="Raj Thapa" 
                      className="w-48 h-48 square-full mx-auto object-cover border-4 border-primary"
                    />
                    <div className="absolute inset-0 square-full bg-primary opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800">Raj Thapa</h3>
                  <p className="text-primary font-medium text-lg">Head</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="relative mb-6">
                    <img 
                      src="https://img.freepik.com/free-photo/young-male-entrepreneur-making-eye-contact-against-blue-background_662251-739.jpg?semt=ais_hybrid" 
                      alt="Birendra Karki" 
                      className="w-48 h-48 square-full mx-auto object-cover border-4 border-primary"
                    />
                    <div className="absolute inset-0 square-full bg-primary opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800">Birendra Karki</h3>
                  <p className="text-primary font-medium text-lg">Principal</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="relative mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="Durga Oli" 
                      className="w-48 h-48 square-full mx-auto object-cover border-4 border-primary"
                    />
                    <div className="absolute inset-0 square-full bg-primary opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800">Durga Oli</h3>
                  <p className="text-primary font-medium text-lg">Founder</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="relative mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1590650213165-c1fef80648c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="Pabitra Rai" 
                      className="w-48 h-48 square-full mx-auto object-cover border-4 border-primary"
                    />
                    <div className="absolute inset-0 square-full bg-primary opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800">Pabitra Rai</h3>
                  <p className="text-primary font-medium text-lg">Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}        
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>            
            <h2 className="text-3xl font-bold mb-6">Our History</h2>
            <p className="text-gray-700 mb-4">Founded in 2000, our school has grown from a small institution to one of the most respected educational establishments in the region. Over the years, we have maintained our commitment to excellence while adapting to changing educational needs.
            </p>            
            <p className="text-gray-700 mb-4">
              Our journey has been marked by continuous improvement, innovation in teaching methods, and a strong focus on student welfare. We take pride in our alumni who have achieved success in various fields globally.</p>
            <div className="grid grid-cols-2 gap-6 mt-8">              
              <div className="text-center">
               
              </div>           
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://img.freepik.com/free-photo/red-buildings-households_1127-2024.jpg"
              alt="School History"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>      
      </div>

      {/* Add spacing div before footer */}
      <div className="h-32"></div>
    </div> 
     );
};

export default AboutUs;















































