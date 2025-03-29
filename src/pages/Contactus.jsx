import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="w-full relative h-[400px]">   
        <img 
          src="https://cdn.pixabay.com/photo/2016/12/15/12/24/contact-us-1908762_640.png"
          alt="Contact Us Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4 text-white">Contact Us</h1>
            <nav className="flex justify-start items-center text-white/90 text-sm">
              <Link to="/" className="hover:text-yellow-500">Home</Link>
              <span className="mx-2 text-xl">›</span>
              <span className="text-yellow-500">Contact Us</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contact Now</h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Please fill out the form below or use our contact information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-yellow-500"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-yellow-500"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-yellow-500"
                      placeholder="Your Phone Number"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-yellow-500"
                      placeholder="Message Subject"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-yellow-500"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <i className="fas fa-map-marker-alt text-yellow-500 mt-1 mr-4"></i>
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-600">Birtamode-2, Jhapa, Nepal</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <i className="fas fa-phone-alt text-yellow-500 mt-1 mr-4"></i>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-600">+977-9824456789</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <i className="fas fa-envelope text-yellow-500 mt-1 mr-4"></i>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">demo12344@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold mb-6">Our Location</h2>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.3040558171477!2d87.98603427536737!3d26.642507471459837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5ba7d0f64768f%3A0x3c8c49366d86f7f3!2sBirtamode%2C%20Nepal!5e0!3m2!1sen!2s!4v1709005037844!5m2!1sen!2s"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                    title="School Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;













































