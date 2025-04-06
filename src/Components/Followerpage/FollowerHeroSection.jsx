import React from "react";
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import { FaUsers,FaBell, FaHeart, FaComments, FaChartLine } from "react-icons/fa";

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

const FollowerHeroSection = () => {
  return (
    <section className="relative text-white pt-40 px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-between overflow-hidden">
      {/* Left Side: Text Content */}
      <div className="max-w-2xl text-center lg:text-left">
        <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
          Gain More <span className="text-blue-500">Instagram Followers</span>
          & Build Your Influence
        </h1>
        <p className="mt-5 text-lg text-gray-300 leading-relaxed">
          Get real, high-quality Instagram followers instantly. Grow your audience, 
          enhance your brand presence, and boost engagement effortlessly!
        </p>
        
        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 items-center">
          <Link
            to="/buy-instagram-followers"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300"
          >
            Get Followers
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
      <div className="relative mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
        {/* Floating Instagram Buttons */}
        <motion.div
          className="absolute top-8 left-12 bg-purple-500 text-white p-4 rounded-full flex items-center space-x-2 shadow-lg"
          variants={floatingVariants}
          animate="animate"
        >
          <FaUsers size={24} />
          <span>Followers</span>
        </motion.div>

        {/* <motion.div
          className="absolute top-1/2 right-12 bg-red-500 text-white p-4 rounded-full flex items-center space-x-2 shadow-lg"
          variants={floatingVariants}
          animate="animate"
        >
          <FaHeart size={24} />
          <span>Likes</span>
        </motion.div> */}

        <motion.div
          className="absolute bottom-0 left-0 bg-orange-500 text-white p-4 rounded-full flex items-center space-x-2 shadow-lg"
          variants={floatingVariants}
          animate="animate"
        >
          <FaBell size={24} />
          <span>New followers</span>
        </motion.div>

        <motion.div
          className="absolute bottom-16 right-10 bg-yellow-500 text-white p-4 rounded-full flex items-center space-x-2 shadow-lg"
          variants={floatingVariants}
          animate="animate"
        >
          <FaChartLine size={24} />
          <span>Growth</span>
        </motion.div>

        {/* Lottie Animation */}
        <DotLottieReact
          src="https://lottie.host/00d5484e-e39f-45e9-9a3f-c8f9cb1b0329/33tJvou2Ms.lottie"
          loop
          autoplay
          style={{ width: "100%", maxWidth: "700px" }}
        />
      </div>
    </section>
  );
};

export default FollowerHeroSection;
