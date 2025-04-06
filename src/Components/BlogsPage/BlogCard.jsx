import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const BlogCard = ({ category, title, date, image, link }) => {
  return (
    <motion.a
      href={link}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl flex flex-col items-center hover:scale-105 transition duration-300 overflow-hidden"
    >
      {/* Image */}
      <img
        src={image}
        alt="Blog Cover"
        className="w-full h-64 object-cover rounded-lg"
      />

      {/* Content */}
      <div className="w-full text-center py-4">
        <p className="text-sm font-semibold text-gray-300 underline">{category}</p>
        <h2 className="mt-2 text-xl font-bold text-gray-400">{title}</h2>
        <p className="mt-3 text-sm text-gray-300">{date} | <span className="underline">Leave a Comment</span></p>
      </div>
    </motion.a>
  );
};

export default BlogCard;