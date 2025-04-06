import React from "react";
import { FaHeart, FaEye, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard"; // Import ServiceCard

const services = [
  {
    name: "Instagram Views",
    icon: <FaEye size={80} className="text-blue-400 drop-shadow-lg" />,
    description: "Boost your video views and maximize reach.",
    link: "/instagram-views",
    glow: "shadow-blue-500/50",
  },
  {
    name: "Instagram Likes",
    icon: <FaHeart size={80} className="text-pink-500 drop-shadow-lg" />,
    description: "Get real likes from active Instagram users.",
    link: "/instagram-likes",
    glow: "shadow-pink-500/50",
  },
  {
    name: "Instagram Followers",
    icon: <FaUsers size={80} className="text-purple-500 drop-shadow-lg" />,
    description: "Grow your account with real & organic followers.",
    link: "/instagram-followers",
    glow: "shadow-purple-500/50",
  },
];

const AvailableOn = () => {
  return (
    <section className="relative text-white pb-24 px-6 lg:px-16 flex flex-col items-center">
      {/* Animated Background Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500 opacity-25 blur-[180px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header Section */}
      <div className="relative text-center max-w-3xl">
        <h2 className="text-6xl superCharge_font font-extrabold uppercase tracking-wide bg-clip-text text-transparent bg-white">
          Supercharge Your Instagram Growth
        </h2>
        <p className="text-gray-250 mt-4 text-lg drop-shadow-lg">
          Get real engagement & take your social presence to the next level.
        </p>
      </div>

      {/* Service Cards Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16 max-w-6xl">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      {/* Call-to-Action */}
      <motion.div
        className="relative text-center mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-4xl font-semibold text-white drop-shadow-lg">
          Take Your Instagram Growth to the Next Level
        </h3>
        <p className="text-gray-300 mt-4 text-lg drop-shadow-lg">
          Join thousands of influencers using our premium services.
        </p>
        <a
          href="/signup"
          className="mt-6 inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-12 py-4 rounded-2xl text-xl font-semibold hover:scale-110 transition-transform shadow-lg"
        >
          Get Started
        </a>
      </motion.div>
    </section>
  );
};

export default AvailableOn;
