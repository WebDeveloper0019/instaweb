import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import GlowingButton from "../HomePage/GlowingButton"; // Importing the button component

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const HerosSection = () => {
  return (
    <section className="relative py-24 pt-40 flex flex-col justify-center items-center text-white text-center px-6 md:px-12 lg:px-20 bg-transparent to-red-500">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg">
          Supercharge Your Instagram Growth
        </h1>
        <p className="text-lg md:text-2xl text-gray-100 mt-6 leading-relaxed">
          Get instant engagement with real Views. Build credibility and grow your profile effortlessly!
        </p>
        
        <GlowingButton>
          Buy Views Now <FaArrowRight />
        </GlowingButton>
      </motion.div>
    </section>
  );
};

const ViewServicesSection = () => {
  return (
    <>
      <HerosSection />
    </>
  );
};

export default ViewServicesSection;
