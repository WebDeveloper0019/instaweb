import React from "react";
import { FaHeart, FaUsers, FaClock, FaTachometerAlt, FaTruck, FaLock, FaHeadset } from "react-icons/fa";
import { motion } from "framer-motion";

const pricingPlans = [
  { id: 1, likes: 50, price: "1.39", discount: null },
  { id: 2, likes: 100, price: "2.49", discount: "10% OFF" },
  { id: 3, likes: 250, price: "4.49", discount: "35% OFF" },
  { id: 4, likes: 500, price: "7.99", discount: "50% OFF" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const PricingSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 text-center bg-transparent text-white">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-4xl font-extrabold"
      >
        Get Real Likes Instantly
      </motion.h2>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-lg text-gray-300 mt-2 max-w-2xl mx-auto"
      >
        Choose the best plan for your needs and boost your social presence effortlessly.
      </motion.p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.id}
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
              <FaHeart className="text-4xl text-red-400 mb-2 animate-pulse" />
              <p className="text-xl font-semibold">{plan.likes} Likes</p>
            </div>

            <ul className="mt-4 space-y-2 text-gray-300 text-sm w-full text-left">
              <li className="flex items-center gap-2"><FaUsers className="text-purple-400" /> {plan.likes} Likes from real users</li>
              <li className="flex items-center gap-2"><FaClock className="text-purple-400" /> Starts in 5 seconds</li>
              <li className="flex items-center gap-2"><FaTachometerAlt className="text-purple-400" /> Adjustable speed</li>
              <li className="flex items-center gap-2"><FaTruck className="text-purple-400" /> Delivery tracking</li>
              <li className="flex items-center gap-2"><FaLock className="text-purple-400" /> No password required</li>
              <li className="flex items-center gap-2"><FaHeadset className="text-purple-400" /> 24/7 support</li>
            </ul>

            <p className="text-3xl font-bold text-white mt-5">${plan.price}</p>
            <button className="mt-4 px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-full shadow-md hover:scale-105 hover:bg-purple-700 transition duration-300">
              Purchase Now
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
