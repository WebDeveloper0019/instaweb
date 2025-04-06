import React from "react";
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion"; // For smooth floating animations
import { FaHeart, FaEye, FaUserPlus } from "react-icons/fa"; // Instagram icons

// Floating Animation Variants
const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
// Button Style for Floating Icons
const floatingButtonStyle = "shadow-xl p-4 rounded-full text-white text-lg font-bold flex items-center space-x-2";

const AutoViewsHeroSection = () => {
  return (
    <section className="relative text-white pt-48 px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-between overflow-hidden">
      
      {/* Left Side: Text Content */}
      <div className="max-w-lg text-center lg:text-left animate-fadeIn">
        <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg">
          Get Automatic Views 
        </h1>
        <p className="mt-5 text-lg text-gray-400 leading-relaxed">
          Boost your visibility effortlessly with our <strong>automatic views system</strong>. 
          Receive real, organic-looking views <strong>instantly on your videos</strong>. 
          <strong>Safe, reliable, and effective</strong> – trusted by thousands worldwide.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 btnn flex flex-col sm:flex-row sm:space-x-4 items-center">
          <Link
            to="/buy-automatic-views"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:scale-105 transition transform duration-300"
          >
            Get Started
          </Link>
          <Link
            to="/why-choose-us"
            className="mt-4 sm:mt-0 border border-gray-600 py-4 px-8 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Why Choose Us?
          </Link>
        </div>
      </div>

      {/* Right Side: Lottie Animation with Floating Icons */}
      <div className="relative mt-0 lg:mt-[-40px] lg:w-1/2 flex justify-center">
        
        {/* Floating Icons Behind Lottie */}
        <motion.div
          className={`absolute top-8 left-12 bg-gradient-to-r from-red-500 to-pink-500 ${floatingButtonStyle}`}
          variants={floatingVariants}
          animate="animate"
        >
          <FaEye size={24} />
          <span>Instant Views</span>
        </motion.div>
        
        <motion.div
          className={`absolute top-1/2 right-12 bg-gradient-to-r from-blue-500 to-cyan-400 ${floatingButtonStyle}`}
          variants={floatingVariants}
          animate="animate"
        >
          <FaUserPlus size={24} />
          <span>Boost Reach</span>
        </motion.div>
        
        <motion.div
          className={`absolute bottom-0 left-0 bg-gradient-to-r from-green-500 to-teal-400 ${floatingButtonStyle}`}
          variants={floatingVariants}
          animate="animate"
        >
          <FaHeart size={24} />
          <span>Auto Views</span>
        </motion.div>

        {/* Lottie Animation */}
        <DotLottieReact
          src="https://lottie.host/00d5484e-e39f-45e9-9a3f-c8f9cb1b0329/33tJvou2Ms.lottie"
          loop
          autoplay
          style={{
            width: "100%",
            maxWidth: "1000px",
            filter: "drop-shadow(0px 0px 25px rgba(120, 120, 255, 0.8))",
          }}
        />
      </div>
    </section>
  );
};

export default AutoViewsHeroSection;