import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaHeart, FaPlay, FaUser, FaSync, FaEye } from "react-icons/fa";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const buttonHover = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.4)",
    transition: { type: "spring", stiffness: 250 },
  },
};

const floatingAnimation = {
  animate: {
    y: [0, 15, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  },
};

const StatsSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#211C84] to-[#4338CA] text-white text-center pt-12 pb-20 overflow-hidden">
      
      {/* Floating Background Elements */}
      <motion.div
        className="absolute top-10 left-20 w-24 h-24 bg-purple-400 rounded-full opacity-30 blur-2xl"
        variants={floatingAnimation}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-10 right-16 w-20 h-20 bg-blue-400 rounded-full opacity-30 blur-2xl"
        variants={floatingAnimation}
        animate="animate"
      />

      {/* Title & Description */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-500">
          Why Choose FansFlares?
        </h2>
        <p className="text-gray-300 mt-2 max-w-3xl mx-auto">
          Grow your brand with real engagement—secure, fast, and effective.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {[
          { value: 100, label: "Real & Active Users", suffix: "%", color: "from-blue-500 to-purple-500" },
          { value: 2000, label: "M+ Likes & Views Delivered", suffix: "M+", color: "from-green-400 to-teal-400" },
          { value: 0, label: "Hassles or Risks", suffix: "", color: "from-red-400 to-orange-400" },
          { value: 24, label: "Hours of Support", suffix: "/7", color: "from-yellow-400 to-orange-400" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-r p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            variants={fadeInUp}
            style={{ backgroundImage: `linear-gradient(135deg, ${stat.color})` }}
          >
            <h3 className="text-5xl font-bold text-white drop-shadow-lg">
              <CountUp end={stat.value} duration={3} />{stat.suffix}
            </h3>
            <p className="mt-2 text-white font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Services Section */}
      <motion.div className="mt-16" initial="hidden" whileInView="visible" variants={fadeInUp}>
        <h3 className="text-3xl font-bold text-gray-200">Available Services</h3>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {[
            { icon: FaHeart, text: "Likes", color: "from-pink-500 to-red-500" },
            { icon: FaPlay, text: "Views", color: "from-blue-500 to-cyan-500" },
            { icon: FaUser, text: "Followers", color: "from-green-500 to-teal-500" },
            { icon: FaSync, text: "Auto Services", color: "from-yellow-500 to-orange-500" },
            { icon: FaEye, text: "Premium Services", color: "from-purple-500 to-indigo-500" },
          ].map((service, index) => (
            <motion.button
              key={index}
              className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r text-white rounded-full shadow-lg transition duration-300"
              style={{ backgroundImage: `linear-gradient(135deg, ${service.color})` }}
              whileHover="hover"
              variants={buttonHover}
            >
              <service.icon className="text-white text-lg" />
              {service.text}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default StatsSection;
