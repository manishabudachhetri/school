import React from 'react';

const TeamMember = ({ name, position, image }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="text-center">
      <div className="relative mb-6">
        <img 
          src={image} 
          alt={name} 
          className="w-48 h-48 square-full mx-auto object-cover border-4 border-primary"
        />
        <div className="absolute inset-0 square-full bg-primary opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
      </div>
      <h3 className="text-2xl font-semibold mb-2 text-gray-800">{name}</h3>
      <p className="text-primary font-medium text-lg">{position}</p>
    </div>
  </div>
);

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Raj Thapa",
      position: "Head",
      image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      name: "Birendra Karki",
      position: "Principal",
      image: "https://img.freepik.com/free-photo/young-male-entrepreneur-making-eye-contact-against-blue-background_662251-739.jpg?semt=ais_hybrid"
    },
    {
      id: 3,
      name: "Durga Oli",
      position: "Founder",
      image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      name: "Pabitra Rai",
      position: "Founder",
      image: "https://images.unsplash.com/photo-1590650213165-c1fef80648c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-gray-200 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-4">Our Team Members</h2>
          <p className="text-center text-gray-600 mb-12">
            Meet our experienced and dedicated team
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map(member => (
              <TeamMember key={member.id} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
