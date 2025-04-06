import React from "react";
import { motion } from "framer-motion";
import PricingCard from "../ViewPage/PricingCard";

const likesPlans = [
  { id: 1, amount: 50, price: "1.39", discount: null },
  { id: 2, amount: 100, price: "2.49", discount: "10% OFF" },
  { id: 3, amount: 250, price: "4.49", discount: "35% OFF" },
  { id: 4, amount: 500, price: "7.99", discount: "50% OFF" },
];

const viewsPlans = [
  { id: 1, amount: 1000, price: "2.99", discount: null },
  { id: 2, amount: 2500, price: "5.49", discount: "15% OFF" },
  { id: 3, amount: 5000, price: "9.99", discount: "30% OFF" },
  { id: 4, amount: 10000, price: "17.99", discount: "45% OFF" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const AutoViewPricingSection = ({ type = "views" }) => {
  const plans = type === "likes" ? likesPlans : viewsPlans;

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 text-center bg-transparent text-white">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-4xl font-extrabold"
      >
        {type === "likes" ? "Get Real Likes Instantly" : "Boost Your Views Instantly"}
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
        {plans.map((plan, index) => (
          <PricingCard key={plan.id} plan={plan} index={index} type={type} />
        ))}
      </div>
    </section>
  );
};

export default AutoViewPricingSection;
