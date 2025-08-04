import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100 text-gray-800 px-4 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-4">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="mt-4 px-6 py-2 bg-yellow-300 text-gray-900 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
