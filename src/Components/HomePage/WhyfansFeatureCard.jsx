import React from "react";
import { motion } from "framer-motion";

const WhyfansFeatureCard = ({ icon: Icon, title, desc }) => {
  return (
    <motion.div
      className="p-8 bg-white text-gray-900 rounded-2xl shadow-xl transform hover:scale-105 hover:shadow-2xl transition duration-300 flex flex-col items-center text-center"
      whileHover={{ scale: 1.05 }}
    >
      <Icon className="text-6xl text-pink-500 mb-6" />
      <h4 className="text-2xl font-bold text-gray-800">{title}</h4>
      <p className="text-lg text-gray-600 mt-3">{desc}</p>
    </motion.div>
  );
};

export default WhyfansFeatureCard;
