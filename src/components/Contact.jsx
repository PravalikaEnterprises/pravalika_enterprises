import React from "react";
import { motion as Motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-50 py-16 px-6 md:px-20"
    >
      <div className="max-w-5xl mx-auto">
        <Motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-3xl md:text-4xl font-bold text-yellow-700 mb-10 text-center font-poppins"
        >
          Get In Touch
        </Motion.h2>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="bg-white p-8 rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            type="hidden"
            name="access_key"
            value="YOUR_ACCESS_KEY"
          />
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-yellow-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Your Name"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-yellow-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="you@example.com"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              required
              rows="5"
              className="w-full border border-yellow-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-lg transition duration-300 flex items-center gap-2"
            >
              <FaEnvelope /> Send Message
            </button>
          </div>
        </form>

        
        
      </div>
    </section>
  );
};

export default Contact;
