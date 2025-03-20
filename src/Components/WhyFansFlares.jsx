import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaHeart, FaStar, FaRocket, FaLightbulb } from "react-icons/fa";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const StatsSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-white text-center pt-12 pb-20 overflow-hidden">
      {/* Features Section */}
      <motion.div className="mt-16 max-w-7xl mx-auto text-center" initial="hidden" whileInView="visible" variants={fadeInUp}>
        <h3 className="text-5xl font-extrabold text-gray-200">Why FansFlares?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {[
            { icon: FaHeart, title: "Real Engagement", desc: "Get high-quality interactions from real users." },
            { icon: FaStar, title: "Premium Quality", desc: "We offer the best-in-class services for your growth." },
            { icon: FaRocket, title: "Innovative Growth Tactics", desc: "Utilize cutting-edge strategies for superior performance." },
            { icon: FaLightbulb, title: "Strategic Insights", desc: "Maximize results with data-driven techniques." },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-10 bg-gray-800 rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300"
              variants={fadeInUp}
            >
              <feature.icon className="text-6xl text-blue-400 mb-6 mx-auto" />
              <h4 className="text-3xl font-bold text-white">{feature.title}</h4>
              <p className="text-xl text-gray-300 mt-4">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default StatsSection;
