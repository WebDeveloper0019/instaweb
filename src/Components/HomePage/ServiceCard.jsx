import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ name, icon, description, link, glow }) => {
  return (
    <motion.a
      href={link}
      className={`group relative bg-black/20 backdrop-blur-lg p-10 rounded-3xl border border-white/10 transition-all transform hover:scale-105 ${glow}`}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
    >
      {/* Neon Glow Border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent to-white/5 opacity-50 group-hover:opacity-80 transition" />

      {/* Icon */}
      <motion.div
        className="relative mb-6 p-6 bg-black/30 rounded-full shadow-xl z-10"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {icon}
      </motion.div>

      {/* Service Details */}
      <h3 className="relative text-2xl font-semibold text-white drop-shadow-lg z-10">
        {name}
      </h3>
      <p className="relative text-gray-200 text-center mt-3 text-lg drop-shadow-lg z-10">
        {description}
      </p>
    </motion.a>
  );
};

export default ServiceCard;
