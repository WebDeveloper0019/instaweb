import React from "react";
import { motion } from "framer-motion";

const GlowingButton = ({ children }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.7)" }}
      className="mt-8 px-10 py-4 bg-white text-pink-600 font-bold text-lg md:text-xl rounded-full shadow-xl flex items-center gap-3 mx-auto hover:bg-gray-200 transition duration-300"
    >
      {children}
    </motion.button>
  );
};

export default GlowingButton;
