
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Best School For Students",
      subtitle: "We Prepare the future of our Generation",
      imageSrc: "https://png.pngtree.com/thumb_back/fh260/background/20230716/pngtree-students-happy-going-to-school-illustration-image_6117694.jpg",
      
      buttonText: "Learn More",
      buttonLink: "/about-us"
    },
    {
      id: 2,
      subtitle: "Quality education for a brighter future",
     
      imageSrc: "https://media.istockphoto.com/id/1358014313/photo/group-of-elementary-students-having-computer-class-with-their-teacher-in-the-classroom.jpg?s=612x612&w=0&k=20&c=3xsykmHXFa9ejL_sP2Xxiow7zdtmKvg15UxXFfgR98Q=",
      buttonText: "Learn More",
      buttonLink: "/about-us"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <>
      <div className="hero-section relative h-[calc(100vh-136px)] min-h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={{ backgroundImage: `url(${slide.imageSrc})` }}
          >
            <div className="hero-overlay absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="hero-content text-center px-4 text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
                <Link 
                  to={slide.buttonLink} 
                  className="btn-primary inline-block px-6 py-3 rounded-lg transition-colors duration-300 hover:bg-[#d29525]"
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-4 rounded-full z-20 transition-all duration-300"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-4 rounded-full z-20 transition-all duration-300"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Updated Moving Text Banner */}
      <div className="bg-[#d29525] text-white py-3">
        <marquee 
          behavior="scroll" 
          direction="left" 
          scrollamount="5"
          onmouseover={(e) => e.target.stop()}
          onmouseout={(e) => e.target.start()}
        >
           Welcome to Our School! Join us for a bright future! 
        </marquee>
      </div>
    </>
  );
};

export default Hero;




