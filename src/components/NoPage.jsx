import React from 'react';
import { Link } from 'react-router-dom';

function NoPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 py-12">
      <div className="text-center max-w-xl">
        <h1 className="text-7xl md:text-9xl font-extrabold text-[#1fa951] animate-bounce">
          404
        </h1>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold">Page Not Found</h2>
        <p className="mt-4 text-gray-400 text-lg">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <Link to="/">
          <button className="mt-8 inline-block bg-[#1fa951] text-white px-6 py-3 rounded-md font-medium text-lg hover:bg-[#158f3c] transition-all duration-300">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NoPage;
