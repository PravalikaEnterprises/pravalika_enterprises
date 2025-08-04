import React from "react";
import { motion as Motion } from "framer-motion";
import founderImg from "../assets/founder.png"; // Make sure to add the image in the assets folder

const AboutCeo = () => {
    return (
        <section className="bg-gradient-to-b from-white via-yellow-50 to-white py-16 px-6 md:px-20" id="about-page">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Founder Image */}
                <Motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <div className="w-56 h-56 md:w-80 md:h-90 rounded-full overflow-hidden shadow-lg">
                        <img
                            src={founderImg}
                            alt="Vemula Chinna - Founder"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </Motion.div>

                {/* About Text */}
                <Motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-yellow-700 mb-4 font-poppins">
                        Vemula Chinna – Founder & CEO
                    </h2>
                    <p className="text-gray-700 text-lg mb-4">
                        Mr. Vemula Chinna is the driving force behind Pravalika Enterprises. With a passion for vehicles and a strong vision for entrepreneurship, he founded the company to bring reliable, refurbished auto rickshaws to customers across the region.
                    </p>
                    <p className="text-gray-700 text-lg mb-4">
                        His hands-on leadership, technical know-how, and commitment to trust and transparency have helped the company earn a solid reputation in the second-hand vehicle market.
                    </p>
                </Motion.div>
            </div>

            {/* Company Info */}
            <Motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="mt-16 max-w-4xl mx-auto text-center"
            >
                <h3 className="text-2xl md:text-3xl font-semibold text-yellow-600 mb-4 font-poppins">
                    About Pravalika Enterprises
                </h3>
                <p className="text-gray-700 text-lg mb-4">
                    Pravalika Enterprises is a growing business specializing in the purchase, repair, and resale of second-hand 3-wheeler vehicles (auto rickshaws). Based on the belief that quality used vehicles should be accessible to all, we buy old or damaged autos, carry out professional repairs, and resell them in road-ready condition at affordable prices.
                </p>
                <h4 className="text-xl text-yellow-700 font-bold mt-8 mb-2">Our Core Services</h4>
                <ul className="text-gray-800 text-lg space-y-2">
                    <li>• Buying second-hand 3-wheeler autos</li>
                    <li>• Expert repair and restoration</li>
                    <li>• Quality resale with warranty options</li>
                    <li>• Fair pricing and transparent deals</li>
                </ul>

                <h4 className="text-xl text-yellow-700 font-bold mt-8 mb-2">Why Customers Trust Us</h4>
                <ul className="text-gray-800 text-lg space-y-2">
                    <li>• Led by a knowledgeable and honest CEO</li>
                    <li>• Skilled mechanics and a strong service team</li>
                    <li>• Affordable, dependable autos for daily use or business</li>
                    <li>• 100% customer satisfaction focus</li>
                </ul>
            </Motion.div>
        </section>
    );
};

export default AboutCeo;
