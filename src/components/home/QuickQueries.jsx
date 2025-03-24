import React from 'react';
import { Link } from 'react-router-dom';

const QuickQueries = () => {
  return (
    <section className="py-12 bg-[#7c765d]">
      <div className="container mx-auto px-4">
        <div className="rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left Side - Quick Queries */}
            <div className="bg-white-500 p-8">
              <h2 className="text-4xl font-bold mb-8">Quick Queries</h2>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-4">We Are Ready to Help You</h3>
                <p className="text-black text-700 mb-4">
                  Our School Has the Best Teachers. If You Need Any Type of Help, 
                  Just Fill this Quick Query Form and We Can Solve Your Queries 
                  Regarding Our School.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-block bg-yellow-600 text-white px-6 py-2 rounded hover:bg-[#7c765d] transition-colors"
                >
                  Check Now
                </Link>
              </div>
            </div>
                 
            {/* Right Side - Contact Form */}
            <div className="bg-yellow-400 p-8">
              <h2 className="text-3xl font-bold mb-6">Contact Now</h2>
              <form>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="w-full px-4 py-2 border rounded"
                  />
                  <input
                    type="email"
                    placeholder="Enter Email "
                    className="w-full px-4 py-2 border rounded"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-2 border rounded"
                  />
                  <textarea
                    placeholder="Message"
                    rows="1"
                    className="w-full px-4 py-2 border rounded"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-[#bc841d]"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickQueries;




