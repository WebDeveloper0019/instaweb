import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaRocket, FaShieldAlt, FaThumbsUp, FaHeadset } from "react-icons/fa";

const features = [
  { icon: <FaThumbsUp />, title: "Boost Engagement", description: "Increase likes, followers, and views effortlessly with our premium services." },
  { icon: <FaStar />, title: "Top-Rated Services", description: "Trusted by influencers and businesses for high-quality social media growth." },
  { icon: <FaHeadset />, title: "24/7 Support", description: "Our support team is always available to assist you with any inquiries." },
  { icon: <FaShieldAlt />, title: "Secure & Reliable", description: "We ensure a safe and secure transaction process with guaranteed results." },
  { icon: <FaRocket />, title: "Instant Boost", description: "Get instant likes, followers, and views to enhance your social presence quickly." },
  { icon: <FaStar />, title: "Premium Quality", description: "We provide high-quality, real engagement for your Instagram growth." }
];

const FeaturesSection = () => {
  return (
    <section className="flex flex-col lg:flex-row Boost_social items-center justify-between ps-40 px-10 py-20 bg-transparent">
      <div className="lg:w-1/2 text-left">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-4"
        >
          Boost Your Social Media Presence Instantly
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 mb-6"
        >
          Gain real followers, likes, and views effortlessly with our trusted social media growth services.
        </motion.p>
        <motion.button 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-red-600 text-white py-3 px-6 rounded-lg font-medium shadow-lg hover:bg-red-700 transition-all"
        >
          Get Started Now →
        </motion.button>
        
        <div className="grid grid-cols-2 grid_change gap-6 mt-10">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="flex grid_child_change items-start gap-4"
            >
              <div className="text-yellow-600 text-2xl">{feature.icon}</div>
              <div>
                <h3 className="font-bold text-white">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:w-1/2 grid_feature_image flex justify-center relative"
      >
        <img 
          src="/assets/blogs1.jpg" 
          alt="Social Media Growth" 
          className="w-96 rounded-lg shadow-lg"
        />
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ delay: 0.5, duration: 0.6 }}
          className="absolute bottom-[-20px] flex gap-4 bg-white p-4 rounded-lg shadow-lg"
        >
          <img src="/assets/blogs2.jpg" alt="Likes Boost" className="w-20 rounded-lg shadow" />
          <img src="/assets/blogs3.jpg" alt="Followers Growth" className="w-20 rounded-lg shadow" />
          <img src="/assets/blogs5.jpg" alt="Views Increase" className="w-20 rounded-lg shadow" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;