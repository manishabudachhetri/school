import React from 'react';

const EventCard = ({ title, date, description, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <div className="text-sm text-primary mb-2">{date}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    
    </div>
  </div>
);

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Annual Sports Day",
      date: "March 25, 2025",
      description: "Join us for a day of athletic excellence and sporting spirit.",
      image: "https://www.ptvenglishmediumprimary.com/wp-content/uploads/2019/05/DSC_7346-848x548.jpg"
    },
    {
      id: 2,
      title: "Science Exhibition",
      date: "April 5, 2025",
      description: "Witness innovative projects from our young scientists.",
      image: "https://stxaviersbharni.in/wp-content/uploads/2021/02/sc-720x350.jpg"
    },
    {
      id: 3,
      title: "Cultural Festival",
      date: "May 20, 2025",
      description: "Celebrate diversity through music, dance, and art.",
      image: "https://ssracs.edu.in/wp-content/uploads/2017/11/DSC_0096-scaled.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Upcoming Events</h2>
        <p className="text-center text-gray-600 mb-12">
          Stay updated with our latest events and activities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map(event => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;