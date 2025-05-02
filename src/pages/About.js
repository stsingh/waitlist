import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
        <Navbar />
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Our Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our innovative solutions are transforming the way you experience skincare.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Overview */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Our Mission</h2>
            <p className="text-gray-600">
              We're dedicated to revolutionizing skincare through cutting-edge technology and personalized recommendations. Our products are designed to help you achieve your best skin, backed by science and user experiences.
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">What Sets Us Apart</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-green-500">✓</span>
                <span className="ml-3 text-gray-600">AI-powered recommendations tailored to your skin type</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-green-500">✓</span>
                <span className="ml-3 text-gray-600">Real user reviews and experiences</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-green-500">✓</span>
                <span className="ml-3 text-gray-600">Science-backed formulations</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Link
            to="/"
            className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Explore Our Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
