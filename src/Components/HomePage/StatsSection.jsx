import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaPlay, FaUser, FaSync, FaEye } from "react-icons/fa";
import StatCard from "./StatCard";
import ServiceButton from "./ServiceButton";
import FloatingElement from "./FloatingElement";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};
// gradient-to-b from-[#211C84] to-[#4338CA]
const StatsSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-white text-center py-20 overflow-hidden bg-transparent">
      {/* Floating Background Elements */}
      <FloatingElement className="absolute top-10 left-20 w-32 h-32 bg-purple-500 rounded-full opacity-40 blur-3xl" />
      <FloatingElement className="absolute bottom-10 right-16 w-28 h-28 bg-blue-500 rounded-full opacity-40 blur-3xl" />

      {/* Title & Description */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-white">
          Elevate Your Social Presence
        </h2>
        <p className="text-gray-300 mt-4 max-w-3xl mx-auto text-lg">
          Unlock the full potential of your online brand with our seamless and reliable engagement solutions.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        className="relative z-10  max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {[
          { value: 100, label: "Real & Active Users", suffix: "%", color: "bg-blue-500/30" },
          { value: 2000, label: "M+ Likes & Views Delivered", suffix: "M+", color: "bg-green-500/30" },
          { value: 0, label: "Hassles or Risks", suffix: "", color: "bg-red-500/30" },
          { value: 24, label: "Hours of Support", suffix: "/7", color: "bg-yellow-500/30" },
        ].map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </motion.div>

      {/* Services Section */}
      <motion.div className="mt-16" initial="hidden" whileInView="visible" variants={fadeInUp}>
        <h3 className="text-4xl font-bold text-gray-200">Available Services</h3>
        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {[
            { icon: FaHeart, text: "Likes", color: "bg-pink-500/30" },
            { icon: FaPlay, text: "Views", color: "bg-blue-500/30" },
            { icon: FaUser, text: "Followers", color: "bg-green-500/30" },
            { icon: FaSync, text: "Auto Services", color: "bg-yellow-500/30" },
            { icon: FaEye, text: "Premium Services", color: "bg-purple-500/30" },
          ].map((service, index) => (
            <ServiceButton key={index} {...service} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default StatsSection;
