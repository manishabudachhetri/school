import React, { useState, useEffect } from 'react';

const ReviewCard = ({ name, role, avatar, content }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg relative">

    
    {/* Content */}
    <div className="relative z-10">
      {/* Centered Author Image */}
      <div className="flex justify-center mb-6">
        <img 
          src={avatar} 
          alt={name} 
          className="w-24 h-24 rounded-full border-4 border-primary object-cover"
        />
      </div>
      
      {/* Author info - centered */}
      <div className="text-center mb-6">
        <h4 className="font-semibold text-xl text-gray-900">{name}</h4>
        <p className="text-primary">{role}</p>
      </div>
      
      
      
      {/* Content */}
      <p className="text-gray-700 italic text-center">{content}</p>
    </div>
  </div>
);

const Reviews = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 3;

  const allReviews = [
    {
      id: 1,
      name: "David Bhattarai",
      role: "Parent",
      avatar: "https://img.freepik.com/free-photo/confident-middle-aged-man-portrait_23-2149051737.jpg",
      content: "Excellent education and caring teachers. My child has shown remarkable progress. The school's commitment to academic excellence and personal development is truly commendable."
    },
    {
      id: 2,
      name: "Ishaan Adhikari",
      role: "Student",
      avatar: "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg",
      content: "Great learning environment with modern facilities. I love studying here! The teachers are supportive and the extra-curricular activities help us develop all-round skills."
    },
    {
      id: 3,
      name: "Maya Shrestha",
      role: "Parent",
      avatar: "https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs43587-022-00179-y/MediaObjects/43587_2022_179_Figa_HTML.png",
      content: "The school's commitment to excellence is evident in everything they do. From academic programs to sports facilities, everything is top-notch. Highly recommended!"
    }
  ];

  // Calculate total pages
  const totalPages = Math.ceil(allReviews.length / reviewsPerPage);

  // Get current reviews
  const getCurrentReviews = () => {
    const startIndex = currentPage * reviewsPerPage;
    return allReviews.slice(startIndex, startIndex + reviewsPerPage);
  };

  // Auto scroll through reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalPages]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Review</h2>
            
            <p className="text-gray-600 mt-4">
            Check Our School Reviews from Students and Parents
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {getCurrentReviews().map((review) => (
              <ReviewCard
                key={review.id}
                name={review.name}
                role={review.role}
                avatar={review.avatar}
                content={review.content}
              />
            ))}
          </div>

      
         
            
          
        </div>
      </div>
    </section>
  );
};

export default Reviews;

