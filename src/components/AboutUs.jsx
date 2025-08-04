import React from "react";
import { motion as Motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-b from-white via-yellow-50 to-white py-16 px-6 md:px-20" id="about">
      <Motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-700 mb-6 font-poppins">
          About Pravalika Enterprises
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          At Pravalika Enterprises, we specialize in providing reliable and affordable auto rickshaw solutions tailored to your transportation and business needs. With a focus on quality, customer satisfaction, and trust, we offer a wide range of models, seamless finance support, and hassle-free documentation.
        </p>
        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          Backed by years of industry experience and strong partnerships with nationalized banks and NBFCs, we ensure that every customer finds the right vehicle with the right support. Whether you're looking to start a new venture or expand your fleet, we're here to make it easier and more affordable.
        </p>
      </Motion.div>
    </section>
  );
};

export default AboutUs;