import React from "react";
import { FaShieldAlt, FaClock, FaUsers, FaStar, FaBolt } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaShieldAlt className="text-yellow-400 text-5xl mb-4" />,
    title: "Safe & Secure",
    description: "We prioritize security, ensuring safe transactions and account protection.",
  },
  {
    icon: <FaClock className="text-blue-400 text-5xl mb-4" />,
    title: "Fast Delivery",
    description: "Your orders are processed instantly with our lightning-fast system.",
  },
  {
    icon: <FaUsers className="text-purple-400 text-5xl mb-4" />,
    title: "Trusted by Thousands",
    description: "Thousands of influencers and brands trust us to grow their social presence.",
  },
  {
    icon: <FaStar className="text-pink-400 text-5xl mb-4" />,
    title: "Premium Quality",
    description: "We deliver only the highest quality engagement with real users.",
  },
  {
    icon: <FaBolt className="text-green-400 text-5xl mb-4" />,
    title: "24/7 Support",
    description: "Our expert team is available 24/7 to assist you whenever needed.",
  },
];

const WhyFansFlares = () => {
  return (
    <section className="bg-[#0D0D0D] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why FansFlares?
        </motion.h2>
        <motion.p 
          className="text-gray-300 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover why FansFlares is the #1 choice for boosting your social media presence!
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFansFlares;
