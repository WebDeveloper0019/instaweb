import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle, FaFire, FaUsers } from "react-icons/fa";
import TikTokImage from "/assets/icons8-tiktok-750.png"; // Ensure correct path

const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const glowVariants = {
  animate: {
    // boxShadow: [
    //   "0px 0px 10px rgba(255, 0, 0, 0.5)",
    //   "0px 0px 20px rgba(255, 0, 0, 0.8)",
    //   "0px 0px 10px rgba(255, 0, 0, 0.5)",
    // ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const VerificationHeroSection = () => {
  return (
    <section className="relative text-white pt-40 px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-between overflow-hidden">
      <div className="max-w-lg text-center lg:text-left animate-fadeIn">
        <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500 drop-shadow-lg">
          Get Verified on TikTok
        </h1>
        <p className="mt-5 text-lg text-gray-400 leading-relaxed">
          Secure your <strong>blue checkmark</strong> and build trust with your audience.
          Our professional verification service ensures <strong>fast and hassle-free approval</strong>.
          <strong>Join thousands of influencers</strong> who have unlocked new opportunities with verified status.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 items-center">
          <Link
            to="/tiktok-verification"
            className="bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:scale-105 transition transform duration-300"
          >
            Apply for Verification
          </Link>
          <Link
            to="/why-choose-us"
            className="mt-4 sm:mt-0 border border-gray-600 py-4 px-8 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Why Choose Us?
          </Link>
        </div>
      </div>

      <div className="relative mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
        <motion.img
          src={TikTokImage}
          alt="TikTok Verification"
          className="w-72 lg:w-96"
          variants={floatingVariants}
          animate="animate"
        />

        <motion.div
          className="absolute top-4 left-12 bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-full shadow-xl text-white text-lg font-bold flex items-center space-x-2"
          variants={glowVariants}
          animate="animate"
        >
          <FaCheckCircle size={24} />
          <span>Verified Badge</span>
        </motion.div>
      </div>
    </section>
  );
};

export default VerificationHeroSection;
