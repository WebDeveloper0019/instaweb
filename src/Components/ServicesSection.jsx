import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { FaHeart, FaPlay, FaUser, FaSync, FaEye, FaStar } from "react-icons/fa";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const HerosSection = () => {
  return (
    <section className="relative py-12 pb-56 flex flex-col justify-center items-center text-white text-center px-6 md:px-12 lg:px-20 ">
      {/* Hero Content */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Grow faster. Without the hassle.
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mt-4">
          Instagram promotion made easy. Whether looking for likes, views, or followers, you've come to the right place.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-8 px-8 py-4 bg-white text-blue-700 font-semibold text-lg md:text-xl rounded-full shadow-lg flex items-center gap-3 mx-auto hover:bg-gray-200 transition duration-300"
        >
          Get Started <FaArrowRight />
        </motion.button>
      </motion.div>
    </section>
  );
};

const ServiceSection = () => {
  const services = [
    { icon: FaHeart, title: "Instagram Likes", description: "Our award-winning, instantly-delivered Instagram likes are sourced from real and active users.", buttonText: "Buy Likes", price: "$1.99 - $49.99" },
    { icon: FaPlay, title: "Instagram Views", description: "Need to boost your videos and reels? Look no further than our real, authentic views.", buttonText: "Buy Views", price: "$0.99 - $29.99" },
    { icon: FaUser, title: "Instagram Followers", description: "No bots. Grow your following quickly with our expertly-sourced Instagram followers.", buttonText: "Buy Followers", price: "$2.99 - $99.99" },
    { icon: FaSync, title: "Automatic Instagram Likes", description: "Say hello to predictable growth. We detect new uploads within 60 seconds.", buttonText: "Buy Auto Likes", price: "$4.99 - $199.99" },
    { icon: FaEye, title: "Automatic Instagram Views", description: "Make sure your videos or reels get a pre-selected number of automatic views.", buttonText: "Buy Auto Views", price: "$1.49 - $39.99" },
    { icon: FaStar, title: "Premium Services", description: "Experience VIP growth with our exclusive premium services tailored for influencers and brands.", buttonText: "Get Premium", price: "$19.99 - $499.99" },
  ];

  return (
    <section className="  text-gray-900 text-center">
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-500">Our Services</h2>
      <p className="text-lg text-gray-200 mt-4 max-w-3xl mx-auto">
        Choose from our top-rated services to enhance your Instagram presence effortlessly.
      </p>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 lg:px-20">
        {services.map((service, index) => (
          <motion.div key={index} initial="hidden" whileInView="visible" variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-lg text-left border border-gray-200">
            <div className="flex items-center gap-4">
              <service.icon className="text-blue-600 text-3xl" />
              <h3 className="text-2xl font-bold">{service.title}</h3>
            </div>
            <p className="mt-3 text-gray-700">{service.description}</p>
            <p className="mt-2 text-gray-500 font-semibold">Starting at {service.price}</p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition duration-300">
              {service.buttonText}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <>
      <HerosSection />
      <ServiceSection />
    </>
  );
};

export default ServicesSection;