import React, { useState, useEffect } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Alex Johnson",
    review:
      "FansFlares helped me grow my Instagram engagement massively! The results were instant and real.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Sophia Martinez",
    review:
      "Amazing service! My TikTok views skyrocketed, and the customer support was excellent!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Daniel Lee",
    review:
      "Very satisfied with the premium services. The process was smooth and hassle-free.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Emily Carter",
    review: "Top-notch service! My social media presence improved drastically!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#211C84] to-[#4338CA] text-white py-20 px-6 lg:px-16 relative">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <motion.h2 
          className="text-4xl lg:text-5xl font-bold" 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          What Our Clients Say
        </motion.h2>
        <p className="text-gray-300 mt-4">
          See how our services have helped people grow their social media presence!
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-3xl mx-auto relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="bg-gray-800 p-10 rounded-3xl shadow-xl text-center flex flex-col items-center border border-gray-600"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={testimonials[index].avatar}
              alt={testimonials[index].name}
              className="w-24 h-24 rounded-full border-4 border-pink-500 mb-4 shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <h3 className="text-xl font-semibold text-pink-400">{testimonials[index].name}</h3>
            <p className="text-gray-300 mt-3 italic text-lg">“{testimonials[index].review}”</p>
            <div className="flex mt-4 text-yellow-400 text-lg">
              {Array.from({ length: testimonials[index].rating }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <motion.button
          onClick={() => setIndex((prevIndex) => prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-4 rounded-full hover:bg-gray-600 transition-all shadow-md"
          whileHover={{ scale: 1.1 }}
        >
          <FaChevronLeft size={24} />
        </motion.button>
        <motion.button
          onClick={() => setIndex((prevIndex) => (prevIndex + 1) % testimonials.length)}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-4 rounded-full hover:bg-gray-600 transition-all shadow-md"
          whileHover={{ scale: 1.1 }}
        >
          <FaChevronRight size={24} />
        </motion.button>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-3">
          {testimonials.map((_, i) => (
            <motion.span
              key={i}
              className={`h-4 w-4 rounded-full ${i === index ? "bg-pink-500" : "bg-gray-500"}`}
              animate={{ scale: i === index ? 1.5 : 1 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
