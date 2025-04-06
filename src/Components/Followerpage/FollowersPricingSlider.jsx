import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";

const FollowersPlans = [
  { id: 1, amount: 1000, price: 2.99, discount: null },
  { id: 2, amount: 2500, price: 5.49, discount: "15% OFF" },
  { id: 3, amount: 5000, price: 9.99, discount: "30% OFF" },
  { id: 4, amount: 10000, price: 17.99, discount: "45% OFF" },
  { id: 5, amount: 25000, price: 39.99, discount: "50% OFF" },
  { id: 6, amount: 50000, price: 74.99, discount: "55% OFF" },
];

const FollowersPricingSlider = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSliderChange = (event) => {
    setSelectedIndex(parseInt(event.target.value, 10));
  };

  const handleDropdownChange = (event) => {
    const index = FollowersPlans.findIndex((option) => option.amount === parseInt(event.target.value, 10));
    if (index !== -1) {
      setSelectedIndex(index);
    }
  };

  const selectedPlan = FollowersPlans[selectedIndex];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 flex flex-col items-center text-white bg-transparent rounded-3xl">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold"
      >
        Boost Your Followers Instantly
      </motion.h2>
      <p className="text-lg mt-3 opacity-80 max-w-md text-center">
        Select your Followers package and enjoy the best discounts. The more you buy, the more you save!
      </p>

      <div className="bg-white shadow-2xl rounded-xl p-8 pt-12 w-full max-w-lg mt-8 text-gray-900 relative">
        {/* Floating Followers Display */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-3 text-lg font-bold rounded-full flex items-center gap-2 shadow-lg"
        >
          <FaEye className="text-2xl" /> {selectedPlan.amount} Followers
        </motion.div>

        {/* Slider */}
        <input
          type="range"
          min="0"
          max={FollowersPlans.length - 1}
          step="1"
          value={selectedIndex}
          onChange={handleSliderChange}
          className="w-full cursor-pointer mt-8 accent-blue-600"
        />

        {/* Dropdown */}
        <select
          className="mt-4 w-full border border-gray-300 rounded-lg p-3 text-lg font-medium focus:ring-2 focus:ring-blue-500"
          value={selectedPlan.amount}
          onChange={handleDropdownChange}
        >
          {FollowersPlans.map((option, index) => (
            <option key={index} value={option.amount}>
              {option.amount} Followers
            </option>
          ))}
        </select>

        {/* Pricing & Discount */}
        <div className="mt-6 flex justify-between items-center text-lg font-semibold">
          <span>Price:</span>
          <span className="text-2xl font-bold text-blue-700">${selectedPlan.price.toFixed(2)}</span>
        </div>
        <div className="mt-2 flex justify-between items-center text-sm font-medium text-gray-600">
          <span>Discount:</span>
          <span className="text-lg font-bold text-red-500">{selectedPlan.discount || "No Discount"}</span>
        </div>

        {/* Purchase Button */}
        <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-md">
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default FollowersPricingSlider;