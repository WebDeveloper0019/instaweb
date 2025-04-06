import React from "react";
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import { FaEye, FaPlay, FaChartLine } from "react-icons/fa";

const floatingVariants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const ViewHeroSection = () => {
  return (
    <section className="relative text-white pt-40 px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-between overflow-hidden">
      {/* Left Side: Text Content */}
      <div className="max-w-2xl text-center lg:text-left">
        <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
          Boost Your <span className="text-blue-500">Instagram Views</span>
           & Enhance Engagement
        </h1>
        <p className="mt-5 text-lg text-gray-300 leading-relaxed">
          Get high-quality Instagram video views instantly. Increase visibility, 
          grow your audience, and make your content stand out!
        </p>
        {/* <ul className="mt-4 text-gray-400 text-lg space-y-2">
          <li>✔ 100% Real & High-Retention Views</li>
          <li>✔ Instant & Gradual Delivery Options</li>
          <li>✔ No Password Required</li>
        </ul> */}
        
        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 items-center">
          <Link
            to="/buy-instagram-views"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300"
          >
            Get Views
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
      <div className="relative mt-10 ms-2 mb-12 lg:mt-0 lg:w-1/2 flex justify-center">
        {/* Floating Instagram Buttons */}
        <motion.div
          className="absolute top-0 left-12 bg-blue-500 text-white p-4 rounded-full flex items-center space-x-2 shadow-lg"
          variants={floatingVariants}
          animate="animate"
        >
          <FaEye size={24} />
          <span>Views</span>
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-3 bg-green-500 text-white p-4 rounded-full flex items-center space-x-2 shadow-lg"
          variants={floatingVariants}
          animate="animate"
        >
          <FaPlay size={24} />
          <span>Watch Time</span>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 bg-yellow-500 text-white p-4 rounded-full flex items-center space-x-2 shadow-lg"
          variants={floatingVariants}
          animate="animate"
        >
          <FaChartLine size={24} />
          <span>Engagement</span>
        </motion.div>

        {/* Lottie Animation */}
        <DotLottieReact
          src="https://lottie.host/00d5484e-e39f-45e9-9a3f-c8f9cb1b0329/33tJvou2Ms.lottie"
          loop
          autoplay
          style={{ width: "100%",  maxWidth: "900px" }}
        />
      </div>
    </section>
  );
};

export default ViewHeroSection;
