import React, { useEffect, useState, useRef } from "react";
import { FaEye } from "react-icons/fa";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const purchases = [
  { text: "Someone from India just bought 1000 Likes.", amount: 1000 },
  { text: "Someone from Canada just bought 500 Likes.", amount: 500 },
  { text: "Someone from India just bought 700 Likes.", amount: 700 },
  { text: "Someone from Canada just bought 2000 Likes.", amount: 2000 }
];

const ViewDeliveredLikesSection = () => {
  const textControls = useAnimation();
  const statsControls = useAnimation();
  const [likesCount, setLikesCount] = useState(0);
  const [purchaseIndex, setPurchaseIndex] = useState(0);
  const [showPurchase, setShowPurchase] = useState(false);
  const [totalLikes, setTotalLikes] = useState(() => {
    return parseInt(localStorage.getItem("totalLikes")) || 235000000; // Load from localStorage or set default value
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("totalLikes", totalLikes); // Update localStorage whenever totalLikes changes
  }, [totalLikes]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          textControls.start("visible");
          statsControls.start("visible");

          let start = 0;
          const end = 200000;
          const duration = 2000;
          const interval = 50;
          const increment = Math.ceil(end / (duration / interval));

          const counter = setInterval(() => {
            start += increment;
            if (start >= end) {
              setLikesCount(end.toLocaleString() + "+");
              clearInterval(counter);
            } else {
              setLikesCount(start.toLocaleString());
            }
          }, interval);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [textControls, statsControls]);

  useEffect(() => {
    const purchaseInterval = setInterval(() => {
      setShowPurchase(true);
      setPurchaseIndex((prev) => {
        const nextIndex = (prev + 1) % purchases.length;
        setTotalLikes((prevLikes) => {
          const newTotal = prevLikes + purchases[nextIndex].amount;
          localStorage.setItem("totalLikes", newTotal); // Save updated count to localStorage
          return newTotal;
        });
        return nextIndex;
      });
      setTimeout(() => {
        setShowPurchase(false);
      }, 3000);
    }, 5000);

    return () => clearInterval(purchaseInterval);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 px-6 md:px-12 lg:px-24 text-white">
      <motion.div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section: Heading & Description */}
        <motion.div initial="hidden" animate={textControls} variants={fadeInLeft}>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Real Engagement. Instant Results.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mt-4">
            Get <strong>high-quality Instagram Automatic Likes</strong> from real users—no bots, no fake accounts.
            Elevate your social presence with <strong>authentic engagement</strong> that helps you grow faster.
          </p>
          <p className="text-lg md:text-xl text-gray-300 mt-4">
            Whether you're an <strong>influencer, brand, or business</strong>, our <strong>instant delivery</strong>
            and <strong>affordable pricing</strong> make boosting your visibility easier than ever.
            Take the guesswork out of growing your Instagram presence!
          </p>
        </motion.div>

        {/* Right Section: Stats & Centered Button */}
        <div className="flex flex-col items-center md:items-end gap-6 relative">
          <motion.div initial="hidden" animate={statsControls} variants={fadeInRight} className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 md:p-8 rounded-2xl shadow-lg flex flex-col items-center gap-4 relative">
            <FaEye className="text-green-50000 text-5xl animate-pulse" />
            <div className="text-center">
              <p className="text-5xl font-bold text-white">{totalLikes.toLocaleString()}</p>
              <p className="text-lg text-gray-300">Automatic Likes delivered worldwide</p>
            </div>
            {/* Popup Notification */}
            <AnimatePresence>
              {showPurchase && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-2 right-32 transform translate-x-full bg-white text-gray-900 p-4 rounded-lg shadow-lg flex items-center space-x-3 border border-gray-200 z-50"
                >
                  <FaEye className="text-green-500 text-2xl" />
                  <p>{purchases[purchaseIndex].text}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div initial="hidden" animate={statsControls} variants={fadeInRight} className="w-full flex justify-end">
            <button className="px-8 py-4 bg-red-500 text-white text-lg md:text-xl font-semibold rounded-full shadow-lg hover:scale-105 transition duration-300">
              Get Started Now
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ViewDeliveredLikesSection;
