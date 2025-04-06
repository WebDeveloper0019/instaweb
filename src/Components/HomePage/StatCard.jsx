import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

// Animation Variant
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const StatCard = ({ value, label, suffix, color }) => {
  return (
    <motion.div
      className={`p-6 rounded-xl shadow-lg backdrop-blur-xl ${color} text-white border border-white/10 transition duration-300 transform hover:scale-105`}
      variants={fadeInUp}
    >
      <h3 className="text-6xl font-bold">
        <CountUp end={value} duration={3} />{suffix}
      </h3>
      <p className="mt-2 text-lg font-medium">{label}</p>
    </motion.div>
  );
};

export default StatCard;
