import React from "react";
import { motion } from "framer-motion";

const floatingAnimation = {
  animate: {
    y: [0, 10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const FloatingElement = ({ className }) => {
  return <motion.div className={className} variants={floatingAnimation} animate="animate" />;
};

export default FloatingElement;
