import React from "react";
import { motion as Motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Ravi Kumar",
    feedback:
      "Excellent service and smooth delivery. The finance options were very helpful for my small business.",
    location: "Tuni, Andhra Pradesh",
  },
  {
    name: "Sunita Sharma",
    feedback:
      "Very responsive team and high-quality auto rickshaws. Highly recommended!",
    location: "Anakapalli, Andhra Pradesh",
  },
  {
    name: "Anil Verma",
    feedback:
      "Great experience from start to finish. Hassle-free documentation and flexible payment plans.",
    location: "Visakhapatnam, Andhra Pradesh",
  },
];

const TestimonialCard = ({ name, feedback, location }) => (
  <Motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, amount: 0.3 }}
    className="bg-white border border-yellow-200 shadow-xl rounded-2xl p-6 max-w-md w-full"
  >
    <FaQuoteLeft className="text-yellow-400 text-3xl mb-4" />
    <p className="text-gray-700 mb-4 italic leading-relaxed">“{feedback}”</p>
    <h4 className="text-gray-900 font-semibold text-lg">{name}</h4>
    <p className="text-gray-500 text-sm">{location}</p>
  </Motion.div>
);

const Testimonials = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20" id="testimonials">
      <div className="max-w-4xl mx-auto text-center">
        <Motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl md:text-4xl font-bold text-yellow-700 mb-12 font-poppins"
        >
          What Our Customers Say
        </Motion.h2>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
