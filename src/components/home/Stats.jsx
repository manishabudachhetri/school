import React from 'react';

const StatItem = ({ count, label, icon }) => (
  <div className="text-center bg-white p-6 rounded-lg shadow-md hover:transform hover:scale-105 transition-transform duration-300">
    <div className="text-primary text-4xl mb-4">
      <i className={icon}></i>
    </div>
    <div className="text-4xl font-bold mb-2 text-primary">{count}</div>
    <div className="text-gray-600 font-medium">{label}</div>
  </div>
);

const Stats = () => {
  const statistics = [
    {
      id: 1,
      icon: "fas fa-user-graduate",
      count: "1000+",
      label: "Students",
    },
    {
      id: 2,
      icon: "fas fa-chalkboard-teacher",
      count: "100+",
      label: "Expert Teachers",
    },
    {
      id: 3,
      icon: "fas fa-book",
      count: "50+",
      label: "Courses",
    },
    {
      id: 4,
      icon: "fas fa-trophy",
      count: "100+",
      label: "Awards",
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map(stat => (
            <StatItem key={stat.id} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

