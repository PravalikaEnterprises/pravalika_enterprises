import React from 'react';
import headerImg from '../assets/header_img.png'; 


function Header() {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${headerImg})` }}
      id="Header"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 pt-16 px-6 md:px-12 max-w-4xl mx-auto text-left">
        <div className="bg-black/60 p-6 rounded-lg shadow-lg backdrop-blur-sm">
          <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 drop-shadow-lg">
            Trusted Auto Rickshaw Dealers
          </h1>
          <p className="mt-4 text-white text-md md:text-lg drop-shadow-md">
            We offer a wide range of new and second-hand auto rickshaws. Quality assured, competitively priced, and ready for the road.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
