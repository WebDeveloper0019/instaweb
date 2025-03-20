import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaRocket, FaShieldAlt, FaHeadset } from "react-icons/fa";

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

const floatingShapess = {
  hidden: { opacity: 0 },
  animate: {
    opacity: [1, 0.5, 1],
    x: ["-80vw", "80vw", "-80vw"],
    y: ["-80vh", "80vh", "-80vh"],
    rotate: [0, 180, 360],
    transition: { duration: 15, repeat: Infinity, ease: "easeInOut" },
  },
};
// bg-gradient-to-br from-[#211C84] to-[#4338CA]
const FeaturesSection = () => {
  return (
    <section className=" text-center py-16 min-h-screen flex flex-col justify-center relative overflow-hidden text-white">
      <h2 className="text-5xl font-extrabold mb-8 font-sans bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400 drop-shadow-lg">
        WHY CHOOSE US?
      </h2>

      {/* Animated Background Shapes */}
      <motion.div className="absolute top-10 left-10 w-24 h-24 bg-pink-400 opacity-50 blur-xl rounded-full" variants={floatingShapess} initial="hidden" animate="animate"></motion.div>
      <motion.div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-400 opacity-50 blur-xl rounded-full" variants={floatingShapess} initial="hidden" animate="animate"></motion.div>
      <motion.div className="absolute top-10 left-10 w-20 h-20 bg-purple-300 rotate-45 opacity-50" variants={floatingShapes} initial="hidden" animate="animate"></motion.div>
      <motion.div className="absolute bottom-10 right-10 w-20 h-20 bg-blue-300 opacity-50" variants={floatingShapes} initial="hidden" animate="animate"></motion.div>
      <motion.div className="absolute top-1/3 left-1/4 w-28 h-14 bg-green-300 opacity-50" variants={floatingShapes} initial="hidden" animate="animate"></motion.div>
      <motion.div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-gray-400 opacity-50" variants={floatingShapes} initial="hidden" animate="animate"></motion.div>
      <motion.div className="absolute top-20 right-1/3 w-16 h-16 bg-red-300 rounded-full opacity-50" variants={floatingShapes} initial="hidden" animate="animate"></motion.div>
      <motion.div className="absolute bottom-20 left-1/3 w-20 h-20 bg-yellow-300 rounded-full opacity-50" variants={floatingShapes} initial="hidden" animate="animate"></motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 max-w-6xl mx-auto relative z-10">
        {/* Feature Item 1 */}
        <motion.div 
          className="flex flex-col items-center relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-32 h-32 flex items-center justify-center bg-white shadow-xl rounded-full mb-6 relative z-10">
            <FaStar className="text-yellow-500 text-5xl" />
          </div>
          <h3 className="text-3xl font-bold">Top-Rated Services</h3>
          <p className="text-gray-300 mt-4 text-lg">We are a highly trusted platform with excellent customer reviews.</p>
        </motion.div>

        {/* Feature Item 2 */}
        <motion.div 
          className="flex flex-col items-center relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-32 h-32 flex items-center justify-center bg-white shadow-xl rounded-full mb-6 relative z-10">
            <FaRocket className="text-blue-500 text-5xl" />
          </div>
          <h3 className="text-3xl font-bold">Instant Boost</h3>
          <p className="text-gray-300 mt-4 text-lg">Experience rapid growth with our fast and effective delivery system.</p>
        </motion.div>

        {/* Feature Item 3 */}
        <motion.div 
          className="flex flex-col items-center relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="w-32 h-32 flex items-center justify-center bg-white shadow-xl rounded-full mb-6 relative z-10">
            <FaShieldAlt className="text-green-500 text-5xl" />
          </div>
          <h3 className="text-3xl font-bold">Secure & Reliable</h3>
          <p className="text-gray-300 mt-4 text-lg">We prioritize your security with a fully encrypted process.</p>
        </motion.div>

        {/* Feature Item 4 */}
        <motion.div 
          className="flex flex-col items-center relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="w-32 h-32 flex items-center justify-center bg-white shadow-xl rounded-full mb-6 relative z-10">
            <FaHeadset className="text-purple-500 text-5xl" />
          </div>
          <h3 className="text-3xl font-bold">24/7 Support</h3>
          <p className="text-gray-300 mt-4 text-lg">Our team is available round the clock to assist you.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
