import React from "react";
import { FaHeart, FaEye, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

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

// bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A]

const AvailableOn = () => {
  return (
    <section className="relative  text-white bg-gradient-to-b from-[#211C84] to-[#372EB0] py-24 px-6 lg:px-16 flex flex-col items-center">
      {/* Animated Background Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500 opacity-25 blur-[180px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header Section */}
      <div className="relative text-center max-w-3xl">
        <h2 className="text-6xl font-extrabold uppercase tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400 drop-shadow-lg">
        Supercharge Your Instagram Growth
        </h2>
        <p className="text-gray-300 mt-4 text-lg drop-shadow-lg">
          Get real engagement & take your social presence to the next level.
        </p>
      </div>

      {/* Service Cards Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16 max-w-6xl">
        {services.map((service, index) => (
          <motion.a
            key={index}
            href={service.link}
            className={`group relative bg-black/20 backdrop-blur-lg p-10 rounded-3xl border border-white/10 transition-all transform hover:scale-105 ${service.glow}`}
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
              {service.icon}
            </motion.div>

            {/* Service Details */}
            <h3 className="relative text-3xl font-semibold text-white drop-shadow-lg z-10">
              {service.name}
            </h3>
            <p className="relative text-gray-200 text-center mt-3 text-lg drop-shadow-lg z-10">
              {service.description}
            </p>
          </motion.a>
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
        <p className="text-gray-400 mt-4 text-lg drop-shadow-lg">
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
