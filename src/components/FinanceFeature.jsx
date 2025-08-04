import React from "react";
import autoFinanceImg from "../assets/auto_finance1.png";
import { motion as Motion } from "framer-motion";

const FinanceFeature = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-100 py-16 px-6 md:px-20" id="finance-options">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Image with animation */}
        <Motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.6 }}
          className="flex-1 text-center"
        >
          <img
            src={autoFinanceImg}
            alt="Finance Options"
            className="w-full max-w-2xl mx-auto drop-shadow-lg"
          />
        </Motion.div>

        {/* Text Content with staggered animation */}
        <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.5 }}
          className="flex-1"
        >
          <Motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1.2 }}
            className="text-3xl md:text-4xl font-extrabold text-yellow-700 mb-6 font-poppins text-center md:text-left"
          >
            Easy & Flexible Finance Options
          </Motion.h2>

          <ul className="space-y-5 text-gray-800 text-lg font-medium">
            {[
              "Attractive Finance Through Nationalised Banks & NBFCs",
              "Avail Minimal Documentation",
              "Enjoy Flexible Repayment Options",
            ].map((item, index) => (
              <Motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, x: 30 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 1, delay: index * 0.5 }}
                className="flex items-start gap-3"
              >
                <span className="text-yellow-500 text-2xl">✔</span>
                {item}
              </Motion.li>
            ))}
          </ul>
        </Motion.div>
      </div>
    </section>
  );
};

export default FinanceFeature;
