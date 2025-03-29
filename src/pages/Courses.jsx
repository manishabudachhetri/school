import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ title, grade, description, subjects }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
    <h3 className="text-xl font-semibold mb-2 relative inline-block">
      {title}
      <span className="absolute bottom-0 left-0 w-full h-1 bg-[#e4a536]"></span>
    </h3>
    <p className="text-gray-600 mb-4 mt-4">{description}</p>
    <div className="mb-4">
      <span className="text-sm font-semibold text-gray-700">Grade: </span>
      <span className="text-sm text-gray-600">{grade}</span>
    </div>
    <div>
      <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Subjects:</h4>
      <div className="flex flex-wrap gap-2">
        {subjects.map((subject, index) => (
          <span
            key={index}
            className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full"
          >
            {subject}
          </span>
        ))}
      </div>
    </div>
  </div>
);
const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Primary Education",
      grade: "Grade 1-5",
      description: "Building strong foundations through interactive learning, creative activities, and character development. Our primary program focuses on nurturing young minds in a supportive environment.",
      subjects: ["English", "Mathematics", "Science", "Social Studies", "Nepali"]
    },
    {
      id: 2,
      title: "Lower Secondary",
      grade: "Grade 6-8",
      description: "Fostering intellectual growth through project-based learning and analytical thinking. Students explore diverse subjects while developing essential research and communication skills.",
      subjects: ["English", "Mathematics", "Science", "Social Studies", "Computer Science", "Nepali"]
    },
    {
      id: 3,
      title: "Secondary Education",
      grade: "Grade 9-10",
      description: "Comprehensive SEE preparation program emphasizing academic excellence and practical knowledge. Students engage in advanced coursework while developing leadership and problem-solving abilities.",
      subjects: ["English", "Mathematics", "Science", "Social Studies", "Optional Mathematics", "Computer Science"]
    },
    {
      id: 4,
      title: "Higher Secondary",
      grade: "Grade 11-12",
      description: "Advanced curriculum designed for university preparation and career readiness. Focus on specialized subjects with hands-on laboratory work and research opportunities.",
      subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="w-full relative h-[400px]">   
        <img 
          src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
          alt="Courses Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4 text-white">Our Courses</h1>
            <nav className="flex justify-start items-center text-white/90 text-sm">
              <Link to="/" className="hover:text-yellow-500">Home</Link>
              <span className="mx-2 text-xl">›</span>
              <span className="text-yellow-500">Courses</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Available Programs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map(course => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;



























































