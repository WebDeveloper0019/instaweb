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

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black text-white py-20 px-6 lg:px-16">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl lg:text-5xl font-bold">What Our Clients Say</h2>
        <p className="text-gray-300 mt-4">
          See how our services have helped people grow their social media presence!
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-3xl mx-auto relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center flex flex-col items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={testimonials[index].avatar}
              alt={testimonials[index].name}
              className="w-20 h-20 rounded-full border-4 border-pink-500 mb-4"
            />
            <h3 className="text-xl font-semibold">{testimonials[index].name}</h3>
            <p className="text-gray-300 mt-3">{testimonials[index].review}</p>
            <div className="flex mt-4 text-yellow-400">
              {Array.from({ length: testimonials[index].rating }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={() =>
            setIndex((prevIndex) =>
              prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
            )
          }
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition-all"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={() => setIndex((prevIndex) => (prevIndex + 1) % testimonials.length)}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition-all"
        >
          <FaChevronRight size={20} />
        </button>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`h-3 w-3 rounded-full ${
                i === index ? "bg-pink-500" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-semibold">Ready to Grow Your Social Media?</h3>
        <p className="text-gray-400 mt-2">
          Join thousands of satisfied customers and boost your engagement today!
        </p>
        <a
          href="/signup"
          className="mt-4 inline-block bg-pink-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-pink-600 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
