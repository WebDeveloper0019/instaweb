import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaHeart, FaPlay, FaUser, FaSync, FaEye } from "react-icons/fa";

// Floating circles animation variants
const floatingAnimation = {
  animate: {
    y: [0, 15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const StatsSection = () => {
  return (
    <section className="relative bg-gray-100 text-center py-16 overflow-hidden">
      {/* Curved Background Effect */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-[#4E54C8] to-[#1A1A40] rounded-b-[50%]"></div>

      {/* Floating Circles */}
      <motion.div
        className="absolute top-20 left-16 w-16 h-16 bg-purple-300 rounded-full opacity-50"
        variants={floatingAnimation}
        animate="animate"
      ></motion.div>
      <motion.div
        className="absolute top-1/3 right-20 w-12 h-12 bg-blue-300 rounded-full opacity-50"
        variants={floatingAnimation}
        animate="animate"
      ></motion.div>
      <motion.div
        className="absolute bottom-20 left-32 w-14 h-14 bg-green-300 rounded-full opacity-50"
        variants={floatingAnimation}
        animate="animate"
      ></motion.div>
      <motion.div
        className="absolute bottom-32 right-40 w-10 h-10 bg-gray-400 rounded-full opacity-50"
        variants={floatingAnimation}
        animate="animate"
      ></motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Stat Item 1 - 100% Real Users */}
          <div className="relative bg-white p-8 rounded-full shadow-lg">
            <h2 className="text-4xl font-extrabold text-blue-600 drop-shadow-md">
              <CountUp end={100} duration={3} />%
            </h2>
            <p className="text-gray-600">Real & Active Users</p>
          </div>

          {/* Stat Item 2 - 2+ Billion Delivered */}
          <div className="relative bg-white p-8 rounded-full shadow-lg">
            <h2 className="text-4xl font-extrabold text-blue-600 drop-shadow-md">
              <CountUp end={2000} duration={3} />M+
            </h2>
            <p className="text-gray-600">Likes, Views & Followers Delivered</p>
          </div>

          {/* Stat Item 3 - No Hassle */}
          <div className="relative bg-white p-8 rounded-full shadow-lg">
            <h2 className="text-4xl font-extrabold text-blue-600 drop-shadow-md">
              <CountUp end={0} duration={3} />
            </h2>
            <p className="text-gray-600">Headaches or Hassle</p>
          </div>

          {/* Stat Item 4 - 24/7 Support */}
          <div className="relative bg-white p-8 rounded-full shadow-lg">
            <h2 className="text-4xl font-extrabold text-blue-600 drop-shadow-md">
              <CountUp end={24} duration={3} />/7
            </h2>
            <p className="text-gray-600">Customer Support</p>
          </div>
        </div>

        {/* Below Heading */}
        <h3 className="mt-32 text-3xl font-bold text-gray-800">Available on FansFlares</h3>
        <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
          Whether you're looking to grow your followers, boost likes, or increase views, FansFlares is your #1 option.
          Premium results, without the price tag.
        </p>

        {/* Service Buttons */}
        <div className="mt-20 flex flex-wrap justify-center gap-4">
          <button className="flex items-center gap-3 px-6 py-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300">
            <FaHeart className="text-white" /> Likes
          </button>
          <button className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300">
            <FaPlay className="text-white" /> Views
          </button>
          <button className="flex items-center gap-3 px-6 py-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all duration-300">
            <FaUser className="text-white" /> Followers
          </button>
          <button className="flex items-center gap-3 px-6 py-3 bg-gray-600 text-white rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300">
            <FaSync className="text-white" /> Automatic Services
          </button>
          <button className="flex items-center gap-3 px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300">
            <FaEye className="text-white" /> Premium Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
