import React, { useEffect, useRef, useState } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import deliveryVan from "../assets/delivery_van.png"; 
import alphaImg from "../assets/alpha.png";
import apeImg from "../assets/ape.png";
import auto1 from "../assets/Auto1.png";
import auto2 from "../assets/Auto2.png";
import auto3 from "../assets/Auto3.png";
import auto4 from "../assets/Auto4.png";
import auto5 from "../assets/Auto5.png";
import auto6 from "../assets/Auto6.png";
import deliveryVan2 from "../assets/delivery_van2.png";

const phoneNumber = "tel:+919959318263";
const whatsappLink = "https://wa.me/919959318263";

const models = [
  {
    name: "Piaggio Ape Auto Alpha",
    image: alphaImg,
  },
  {
    name: "Diesel Bajaj cargo BS6 Auto",
    image: deliveryVan2,
  },
  {
    name: "Mahindra Alfa Passenger Auto",
    image: apeImg ,
  },
  {
    name: "Piaggio Ape Cargo Auto ",
    image: deliveryVan,
  },
  {
    name: "Mahindre Alfa Cargo Auto",
    image: auto1,
  },


  {
    name: "Diesel Bajaj Passenger BS6 Auto ",
    image: auto5,
  },

];

const ModelCard = ({ model }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("scale-100", "opacity-100");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-400 transition-all duration-500 w-full max-w-xs transform scale-95 opacity-0"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={model.image}
          alt={model.name}
          
          className="w-full h-full object-contain transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <h2 className="text-lg font-semibold text-gray-900 font-poppins mb-4 text-center">
          {model.name}
        </h2>
        <div className="flex justify-between gap-4">
          <a
            href={phoneNumber}
            className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition duration-300"
          >
            <FaPhoneAlt /> Call
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-yellow-400 text-yellow-600 hover:bg-yellow-100 font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition duration-300"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

const ModelList = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      className="bg-gradient-to-b from-gray-100 to-white py-10 px-4 md:px-16"
      id="models"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-poppins text-center">
        Our Models
      </h1>
      <div
        className={`grid gap-6 ${
          isMobile
            ? "grid-cols-1 justify-items-center"
            : "grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        }`}
      >
        {models.map((model, index) => (
          <ModelCard key={index} model={model} />
        ))}
      </div>
    </section>
  );
};

export default ModelList;
