import React from "react";
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

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

const LikeHeroSection = () => {
  return (
    <section className="relative text-white pt-40 px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-between overflow-hidden">
      {/* Left Side: Text Content */}
      <div className="max-w-lg text-center lg:text-left animate-fadeIn">
        <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight lg:w-[9em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg">
          Get Real Instagram Likes Instantly
        </h1>
        <p className="mt-5 text-lg text-gray-400 leading-relaxed">
          Increase engagement and credibility with high-quality Instagram likes.
          Our instant delivery ensures real results that make a difference.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 items-center">
          <Link
            to="/buy-instagram-likes"
            className="bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:scale-105 transition transform duration-300"
          >
            Get Likes Now
          </Link>
          <Link
            to="/how-it-works"
            className="mt-4 sm:mt-0 border border-gray-600 py-4 px-8 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Right Side: Animation with Floating Icons */}
      <div className="relative mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
        {/* Floating Like Icon */}
        <motion.div
          className="absolute top-8 left-6 bg-gradient-to-r from-red-500 to-pink-500 shadow-xl p-4 rounded-full text-white text-lg font-bold flex items-center space-x-2"
          variants={floatingVariants}
          animate="animate"
        >
          <FaHeart size={24} />
          <span>Likes</span>
        </motion.div>

        {/* Floating 1K Likes Icon */}
        <motion.div
          className="absolute top-1/4 right-8 bg-gradient-to-r from-purple-500 to-indigo-500 shadow-xl p-4 rounded-full text-white text-lg font-bold flex items-center space-x-2"
          variants={floatingVariants}
          animate="animate"
        >
          <FaHeart size={24} />
          <span>1K Likes</span>
        </motion.div>

        {/* Floating 10K Likes Icon */}
        <motion.div
          className="absolute bottom-8 left-10 bg-gradient-to-r from-orange-500 to-yellow-500 shadow-xl p-4 rounded-full text-white text-lg font-bold flex items-center space-x-2"
          variants={floatingVariants}
          animate="animate"
        >
          <FaHeart size={24} />
          <span>10K Likes</span>
        </motion.div>

        {/* Lottie Animation */}
        <DotLottieReact
          src="https://lottie.host/00d5484e-e39f-45e9-9a3f-c8f9cb1b0329/33tJvou2Ms.lottie"
          loop
          autoplay
          style={{
            width: "100%",
            maxWidth: "900px",
            filter: "drop-shadow(0px 0px 25px rgba(255, 100, 100, 0.8))",
          }}
        />
      </div>
    </section>
  );
};

export default LikeHeroSection;
