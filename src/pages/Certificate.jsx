import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Certificate = () => {
  const [certificateNumber, setCertificateNumber] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Mock certificate data (replace with actual API call)
  const mockCertificates = {
    'CERT2024001': {
      studentName: 'Aarav Sharma',
      course: 'Secondary Education',
      issueDate: '2024-03-15',
      grade: 'A+',
      status: 'valid'
    },
    'CERT2024002': {
      studentName: 'Priya Patel',
      course: 'Higher Secondary',
      issueDate: '2024-03-10',
      grade: 'A',
      status: 'valid'
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSearchResult(null);
    
    setTimeout(() => {
      const result = mockCertificates[certificateNumber];
      if (result) {
        setSearchResult(result);
      } else {
        setError('Certificate not found. Please check the certificate number and try again.');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="w-full relative h-[400px]">   
        <img 
          src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Certificate Verification"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4 text-white">Certificate </h1>
            <nav className="flex justify-start items-center text-white/90 text-sm">
              <Link to="/" className="hover:text-yellow-500">Home</Link>
              <span className="mx-2 text-xl">›</span>
              <span className="text-yellow-500">Certificate </span>
            </nav>
          </div>
        </div>
      </div>

      {/* Certificate Verification Content */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto mt-12">
          {/* Title and Description */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Verify Your Certificate</h2>
            <p className="text-gray-600">Enter your certificate number below to verify its authenticity</p>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="certificateNumber" className="block text-gray-700 font-medium mb-2">
                  Certificate Number
                </label>
                <input
                  type="text"
                  id="certificateNumber"
                  value={certificateNumber}
                  onChange={(e) => setCertificateNumber(e.target.value.toUpperCase())}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter certificate number (e.g., CERT2024001)"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition-colors disabled:bg-yellow-300"
              >
                {isLoading ? 'Searching...' : 'Verify Certificate'}
              </button>
            </form>
          </div>
          {/* Results Section */}
          {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg">
              <p>{error}</p>
            </div>
          )}
          {searchResult && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="border-b pb-4 mb-4">
                <h2 className="text-2xl font-bold text-green-600 mb-2">Certificate Verified</h2>
                <p className="text-sm text-gray-500">This certificate is valid and was issued by our institution.</p>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600">Student Name</h3>
                    <p className="text-lg">{searchResult.studentName}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600">Course</h3>
                    <p className="text-lg">{searchResult.course}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600">Issue Date</h3>
                    <p className="text-lg">{searchResult.issueDate}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600">Grade</h3>
                    <p className="text-lg">{searchResult.grade}</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                    <p className="text-green-600 font-semibold">Status: Valid</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Certificate;















































































