import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const likeOptions = [
  { likes: 100, price: 2.49, discount: "10% off" },
  { likes: 250, price: 9.99, discount: "20% off" },
  { likes: 500, price: 17.99, discount: "30% off" },
  { likes: 1000, price: 59.99, discount: "40% off" },
  { likes: 5000, price: 149.99, discount: "50% off" },
  { likes: 10000, price: 299.99, discount: "60% off" },
  { likes: 50000, price: 899.99, discount: "70% off" },
];

const PricingSlider = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSliderChange = (event) => {
    setSelectedIndex(parseInt(event.target.value, 10));
  };

  const handleDropdownChange = (event) => {
    const index = likeOptions.findIndex((option) => option.likes === parseInt(event.target.value, 10));
    if (index !== -1) {
      setSelectedIndex(index);
    }
  };

  const selectedLikes = likeOptions[selectedIndex];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 flex flex-col items-center text-white bg-transparent rounded-3xl ">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold"
      >
        Boost Your Likes 
      </motion.h2>
      <p className="text-lg mt-3 opacity-80 max-w-md text-center">
        Select your likes package and enjoy the best discounts. The more you buy, the more you save!
      </p>

      <div className="bg-white shadow-2xl rounded-xl p-8 pt-12 w-full max-w-lg mt-8 text-gray-900 relative">
        {/* Floating Likes Display */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-3 text-lg font-bold rounded-full flex items-center gap-2 shadow-lg"
        >
          <FaHeart className="text-2xl" /> {selectedLikes.likes} Likes
        </motion.div>

        {/* Slider */}
        <input
          type="range"
          min="0"
          max={likeOptions.length - 1}
          step="1"
          value={selectedIndex}
          onChange={handleSliderChange}
          className="w-full cursor-pointer mt-8 accent-red-600"
        />

        {/* Dropdown */}
        <select
          className="mt-4 w-full border border-gray-300 rounded-lg p-3 text-lg font-medium focus:ring-2 focus:ring-red-500"
          value={selectedLikes.likes}
          onChange={handleDropdownChange}
        >
          {likeOptions.map((option, index) => (
            <option key={index} value={option.likes}>
              {option.likes} likes
            </option>
          ))}
        </select>

        {/* Pricing & Discount */}
        <div className="mt-6 flex justify-between items-center text-lg font-semibold">
          <span>Price:</span>
          <span className="text-2xl font-bold text-black-700">${selectedLikes.price.toFixed(2)}</span>
        </div>
        <div className="mt-2 flex justify-between items-center text-sm font-medium text-gray-600">
          <span>Discount:</span>
          <span className="text-lg font-bold text-red-500">{selectedLikes.discount}</span>
        </div>

        {/* Purchase Button */}
        <button className="mt-6 w-full bg-red-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-all duration-300 shadow-md">
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default PricingSlider;
