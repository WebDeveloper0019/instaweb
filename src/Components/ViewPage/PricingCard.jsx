import React from "react";
import { FaHeart, FaUsers, FaClock, FaTachometerAlt, FaTruck, FaLock, FaHeadset, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const PricingCard = ({ plan, index, type = "likes" }) => {
  const isLikes = type === "likes";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      transition={{ delay: index * 0.2 }}
      className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl flex flex-col items-center hover:scale-105 transition duration-300"
    >
      {plan.discount && (
        <span className="absolute -top-3 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded-full">
          {plan.discount}
        </span>
      )}

      <div className="w-full text-center py-4">
        {isLikes ? (
          <FaHeart className="text-4xl text-red-400 mb-2 animate-pulse" />
        ) : (
          <FaEye className="text-4xl text-blue-400 mb-2 animate-pulse" />
        )}
        <p className="text-xl font-semibold">
          {plan.amount} {isLikes ? "Likes" : "Views"}
        </p>
      </div>

      <ul className="mt-4 space-y-2 text-gray-300 text-sm w-full text-left">
        <li className="flex items-center gap-2">
          <FaUsers className="text-purple-400" /> {plan.amount} {isLikes ? "Likes" : "Views"} from real users
        </li>
        <li className="flex items-center gap-2">
          <FaClock className="text-purple-400" /> Starts in 5 seconds
        </li>
        <li className="flex items-center gap-2">
          <FaTachometerAlt className="text-purple-400" /> Adjustable speed
        </li>
        <li className="flex items-center gap-2">
          <FaTruck className="text-purple-400" /> Delivery tracking
        </li>
        <li className="flex items-center gap-2">
          <FaLock className="text-purple-400" /> No password required
        </li>
        <li className="flex items-center gap-2">
          <FaHeadset className="text-purple-400" /> 24/7 support
        </li>
      </ul>

      <p className="text-3xl font-bold text-white mt-5">${plan.price}</p>
      <button className="mt-4 px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-full shadow-md hover:scale-105 hover:bg-red-700 transition duration-300">
        Purchase Now
      </button>
    </motion.div>
  );
};

export default PricingCard;
