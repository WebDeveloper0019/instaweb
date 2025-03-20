import React from "react";
import { motion } from "framer-motion";
import { FaThumbsUp, FaClock, FaTruck, FaQuestionCircle } from "react-icons/fa";

const floatingShapes = {
  hidden: { opacity: 0 },
  animate: {
    opacity: [1, 0],
    x: ["-100vw", "100vw", "-100vw"],
    y: ["-100vh", "100vh", "-100vh"],
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const FeaturesSection = () => {
  return (
    <section className="bg-gray-100 text-center py-16 min-h-screen flex flex-col justify-center relative overflow-hidden">
      <h2 className="text-5xl font-extrabold text-gray-800 mb-8 font-sans">AND OTHER FEATURES...</h2>

      {/* Animated Background Shapes */}
      <motion.div className="absolute top-10 left-10 w-20 h-20 bg-purple-300 rotate-45 opacity-50" variants={floatingShapes} initial="hidden" animate="animate"></motion.div>
      <motion.div className="absolute bottom-10 right-10 w-20 h-20 bg-blue-300 opacity-50" variants={floatingShapes} initial="hidden" animate="animate"></motion.div>
      <motion.div className="absolute top-1/3 left-1/4 w-28 h-14 bg-green-300 opacity-50" variants={floatingShapes} initial="hidden" animate="animate"></motion.div>
      <motion.div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-gray-400 opacity-50" variants={floatingShapes} initial="hidden" animate="animate"></motion.div>
      <motion.div className="absolute top-20 right-1/3 w-16 h-16 bg-red-300 rounded-full opacity-50" variants={floatingShapes} initial="hidden" animate="animate"></motion.div>
      <motion.div className="absolute bottom-20 left-1/3 w-20 h-20 bg-yellow-300 rounded-full opacity-50" variants={floatingShapes} initial="hidden" animate="animate"></motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 max-w-6xl mx-auto relative z-10">
        {/* Feature Item 1 */}
        <div className="flex flex-col items-center relative">
          <div className="w-32 h-32 flex items-center justify-center bg-white shadow-lg rounded-full mb-6 relative z-10">
            <FaThumbsUp className="text-purple-600 text-5xl" />
          </div>
          <h3 className="text-3xl font-bold text-gray-800">Highly Rated</h3>
          <p className="text-gray-600 mt-4 text-lg">Stormlikes is a top-rated marketing platform for all things Instagram.</p>
        </div>

        {/* Feature Item 2 */}
        <div className="flex flex-col items-center relative">
          <div className="w-32 h-32 flex items-center justify-center bg-white shadow-lg rounded-full mb-6 relative z-10">
            <FaClock className="text-purple-600 text-5xl" />
          </div>
          <h3 className="text-3xl font-bold text-gray-800">Immediate Start</h3>
          <p className="text-gray-600 mt-4 text-lg">Delivery starts within seconds of you placing the order.</p>
        </div>

        {/* Feature Item 3 */}
        <div className="flex flex-col items-center relative">
          <div className="w-32 h-32 flex items-center justify-center bg-white shadow-lg rounded-full mb-6 relative z-10">
            <FaTruck className="text-purple-600 text-5xl" />
          </div>
          <h3 className="text-3xl font-bold text-gray-800">Delivery Tracking</h3>
          <p className="text-gray-600 mt-4 text-lg">Our system allows you to follow delivery progress and see order status in real-time.</p>
        </div>

        {/* Feature Item 4 */}
        <div className="flex flex-col items-center relative">
          <div className="w-32 h-32 flex items-center justify-center bg-white shadow-lg rounded-full mb-6 relative z-10">
            <FaQuestionCircle className="text-purple-600 text-5xl" />
          </div>
          <h3 className="text-3xl font-bold text-gray-800">Professional Support</h3>
          <p className="text-gray-600 mt-4 text-lg">Contact us any time and expect a helpful response.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
