import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUserTag, FaUserCheck, FaHourglassHalf, FaExclamationTriangle } from "react-icons/fa";
import InstagramImage from "/assets/instagram.png"; // Ensure correct path

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

const InstaUsernameClaimHeroSection = () => {
  return (
    <section className="relative text-white pt-40 px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-between overflow-hidden">
      <div className="max-w-lg text-center lg:text-left animate-fadeIn">
        <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-500 drop-shadow-lg">
        Reserve Your Unique Instagram Identit
        </h1>
        <p className="mt-5 text-lg text-gray-400 leading-relaxed">
          Want to secure a <strong>desired or inactive Instagram username</strong>? 
          Our professional team assists you in <strong>requesting and claiming usernames</strong> efficiently and securely.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 items-center">
          <Link
            to="/instagram-username-claim"
            className="bg-gradient-to-r from-purple-500 to-red-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:scale-105 transition transform duration-300"
          >
            Claim Now
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
          src={InstagramImage}
          alt="Instagram Username Claim Services"
          className="w-72 lg:w-96"
        />

        <motion.div
          className="absolute top-4 left-12 bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-full shadow-xl text-white text-lg font-bold flex items-center space-x-2"
          variants={floatingVariants}
          animate="animate"
        >
          <FaUserTag size={24} />
          <span>Request Submitted</span>
        </motion.div>

        <motion.div
          className="absolute top-16 right-12 bg-gradient-to-r from-yellow-500 to-orange-500 p-4 rounded-full shadow-xl text-white text-lg font-bold flex items-center space-x-2"
          variants={floatingVariants}
          animate="animate"
        >
          <FaHourglassHalf size={24} />
          <span>Verification in Progress</span>
        </motion.div>

        <motion.div
          className="absolute bottom-16 left-10 bg-gradient-to-r from-red-500 to-purple-500 p-4 rounded-full shadow-xl text-white text-lg font-bold flex items-center space-x-2"
          variants={floatingVariants}
          animate="animate"
        >
          <FaExclamationTriangle size={24} />
          <span>Eligibility Checked</span>
        </motion.div>

        <motion.div
          className="absolute bottom-4 right-10 bg-gradient-to-r from-blue-400 to-cyan-500 p-4 rounded-full shadow-xl text-white text-lg font-bold flex items-center space-x-2"
          variants={floatingVariants}
          animate="animate"
        >
          <FaUserCheck size={24} />
          <span>Username Claimed</span>
        </motion.div>
      </div>
    </section>
  );
};

export default InstaUsernameClaimHeroSection;
