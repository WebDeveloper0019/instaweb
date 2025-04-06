import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaStar, FaRocket, FaLightbulb } from "react-icons/fa";
import WhyfansFeatureCard from "./whyfansFeatureCard";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const WhyFansFlares = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-white text-center pt-16 pb-20 bg-transparent px-6">
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} className="max-w-5xl mx-auto">
        <h3 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-md">
          Why <span className="text-yellow-300">FansFlares?</span>
        </h3>
        <p className="text-xl md:text-2xl text-gray-200 mt-4">
          Experience the best engagement strategies tailored for your success.
        </p>
      </motion.div>
      
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 max-w-6xl"
      >
        {[
          { icon: FaHeart, title: "Real Engagement", desc: "High-quality interactions from real users." },
          { icon: FaStar, title: "Premium Quality", desc: "Best-in-class services for your growth." },
          { icon: FaRocket, title: "Innovative Tactics", desc: "Cutting-edge strategies for performance." },
          { icon: FaLightbulb, title: "Strategic Insights", desc: "Maximize results with data-driven methods." },
        ].map((feature, index) => (
          <WhyfansFeatureCard key={index} icon={feature.icon} title={feature.title} desc={feature.desc} />
        ))}
      </motion.div>
    </section>
  );
};

export default WhyFansFlares;
