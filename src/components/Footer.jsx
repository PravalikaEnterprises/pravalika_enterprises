import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { assets } from '../assets/assets.js'; // Adjust path if needed

const Footer = () => {
  return (
    <footer className="bg-yellow-300 text-gray-900 shadow-inner backdrop-blur-md">
      {/* Main Grid */}
      <div className="max-w-screen-xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
        
        {/* Left: Logo & Address */}
        <div className="space-y-4">
          <img src={assets.logo} alt="Logo" className="h-10" />
          <div>
            <h4 className="font-semibold">Address:</h4>
            <p className="text-sm leading-relaxed">
              D.No:31-58-26-8/1, Mathrusri Nagar, Kurmanapalem<br />
              Near Duvvada Railway Station, Visakhapatnam - 530046 Andhra Pradesh, India.
            </p>
          </div>

          {/* Social Icons */}
          <div>
            <p className="mb-2 font-semibold">Follow Us</p>
            <div className="flex space-x-3 text-gray-900">
              <a href="#" className="p-2 bg-white rounded-full hover:text-orange-500 transition">
                <FaInstagram />
              </a>
              <a href="#" className="p-2 bg-white rounded-full hover:text-orange-500 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="p-2 bg-white rounded-full hover:text-orange-500 transition">
                <FaYoutube />
              </a>
              <a href="#" className="p-2 bg-white rounded-full hover:text-orange-500 transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Center: Enquire Button */}
        <div className="flex justify-center md:justify-center items-start">
          <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold shadow hover:bg-orange-500 hover:text-white transition">
            Enquire Now
          </button>
        </div>

        {/* Right: Links */}
        <div className="text-sm space-y-2">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-1">Links</h4>
              <ul className="space-y-1">
                <li><a href="#about" className="hover:text-orange-500">About Us</a></li>
                <li><a href="#contact" className="hover:text-orange-500">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-1">All Products</h4>
              <ul className="space-y-1">
                <li><a href="#cargo" className="hover:text-orange-500">Cargo</a></li>
                <li><a href="#passenger" className="hover:text-orange-500">Passenger</a></li>
                <li><a href="#electric" className="hover:text-orange-500">Electric</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line + Copyright + Designer */}
      <div className="border-t border-white mt-0 pt-1 px-6 max-w-screen-xl mx-auto text-xs text-gray-800 pb-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Pravalika Enterprises. All rights reserved.</p>
          <p className="mt-2 md:mt-0 text-[11px]">
            Designed by <a href="https://www.linkedin.com/in/banoth-bhargava-naik/" className="hover:text-orange-500 underline">Banoth Bhargava Naik</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
