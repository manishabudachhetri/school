import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: 'https://img.freepik.com/free-photo/red-buildings-households_1127-2024.jpg',
      title: 'School Building'
    },
    {
      id: 2,
      image: 'https://renaissance-bsr.com/wp-content/uploads/2022/11/annual-day-three9.jpg',
      title: 'Annual Function'
    },
    {
      id: 3,
      image: 'https://www.northlandpri.moe.edu.sg/images/Photos%20Used/Sports%20Day%202023/razor%20sharp%20relay%20finishes.jpg',
      title: 'Sports Day'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Classroom'
    },
    {
      id: 5,
      image: 'https://www.smarttech.com/-/media/project/smart/www/resources/blogs/hero-and-opengraph/adobestock_284090952.jpeg?h=4003&iar=0&w=6017&rev=373870405f324097b2eb44ec1971a970&hash=F303673706E716585CB20CEC4E152F9B',
      title: 'Library'
    },
    
     
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=1429&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Basketball Court'
    },
    {
      id: 7,
      image: 'https://opjms.edu.in/downloads/nimages/science-lab9.jpg',
      title: 'Science Lab'
    },
    {
      id: 8,
      image: 'https://www.schoolscapesuk.com/wp-content/uploads/2017/12/Tregolls-3G-Pitch.jpg',
      title: 'Playground'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="w-full relative h-[400px]">   
        <img 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Gallery Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4 text-white">Our Gallery</h1>
            <nav className="flex justify-start items-center text-white/90 text-sm">
              <Link to="/" className="hover:text-yellow-500">Home</Link>
              <span className="mx-2 text-xl">›</span>
              <span className="text-yellow-500">Gallery</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-left mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Photo Gallery</h2>
            
            <p className="text-gray-600 max-w-2xl">
              Explore our school's vibrant atmosphere through our photo gallery
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 border-t">
                  <h3 className="text-lg font-semibold text-center text-gray-800">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;


































































