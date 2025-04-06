import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle, FaShieldAlt, FaUserCheck, FaIdBadge } from "react-icons/fa";
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



const VerifiedAccountHeroSection = () => {
  return (
    <section className="relative text-white pt-40 px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-between overflow-hidden">
      <div className="max-w-lg text-center lg:text-left animate-fadeIn">
        <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500 drop-shadow-lg">
        Become TikTok Verified Today
        </h1>
        <p className="mt-5 text-lg text-gray-400 leading-relaxed">
          Want to <strong>get verified, secure your account, or restore lost verification</strong>? 
          Our expert team helps you <strong>achieve verification, protect your account, and maintain credibility</strong> 
          efficiently and securely.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 items-center">
          <Link
            to="/tiktok-verification"
            className="bg-gradient-to-r from-blue-500 to-green-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:scale-105 transition transform duration-300"
          >
            Get Verified Now
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
        <img
          src={TikTokImage}
          alt="TikTok Verified Services"
          className="w-72 lg:w-96"
       
        />

        <motion.div
          className="absolute top-4 left-12 bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-full shadow-xl text-white text-lg font-bold flex items-center space-x-2"
          variants={floatingVariants}
          animate="animate"
        >
          <FaCheckCircle size={24} />
          <span>Verification Approved</span>
        </motion.div>

        <motion.div
          className="absolute top-16 right-12 bg-gradient-to-r from-yellow-500 to-orange-500 p-4 rounded-full shadow-xl text-white text-lg font-bold flex items-center space-x-2"
          variants={floatingVariants}
          animate="animate"
        >
          <FaShieldAlt size={24} />
          <span>Account Secured</span>
        </motion.div>

        <motion.div
          className="absolute bottom-16 left-10 bg-gradient-to-r from-red-500 to-purple-500 p-4 rounded-full shadow-xl text-white text-lg font-bold flex items-center space-x-2"
          variants={floatingVariants}
          animate="animate"
        >
          <FaUserCheck size={24} />
          <span>Verified Badge Restored</span>
        </motion.div>

        <motion.div
          className="absolute bottom-4 right-10 bg-gradient-to-r from-blue-400 to-cyan-500 p-4 rounded-full shadow-xl text-white text-lg font-bold flex items-center space-x-2"
          variants={floatingVariants}
          animate="animate"
        >
          <FaIdBadge size={24} />
          <span>Profile Recognition</span>
        </motion.div>
      </div>
    </section>
  );
};

export default VerifiedAccountHeroSection;
