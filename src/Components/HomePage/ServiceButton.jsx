import React from "react";
import { motion } from "framer-motion";

const ServiceButton = ({ icon: Icon, text, color }) => {
  return (
    <motion.button
      className={`flex items-center gap-3 px-6 py-3 rounded-full shadow-lg transition duration-300 text-white ${color} border border-white/10 hover:scale-105`}
    >
      <Icon className="text-xl" />
      {text}
    </motion.button>
  );
};

export default ServiceButton;
