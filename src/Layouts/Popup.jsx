import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaCrown, FaEye, FaUsers } from "react-icons/fa";

const purchases = [
  { text: "Someone from India just bought 100 likes.", type: "like" },
  { text: "Someone from USA just bought 500 followers.", type: "follower" },
  { text: "Someone from UK just bought 1,000 views.", type: "view" },
  { text: "Someone from Canada just bought 250 likes.", type: "like" },
  { text: "Someone from Australia just bought 750 followers.", type: "follower" },
  { text: "Someone just purchased TikTok Verification services.", type: "premium" },
  { text: "Someone just purchased an Instagram Unban request.", type: "premium" },
  { text: "Someone just claimed a premium YouTube Verified Channel.", type: "premium" },
  { text: "Someone from USA just bought 200 followers.", type: "follower" },
  { text: "Someone from UK just bought 4,000 views.", type: "view" },
  { text: "Someone from Canada just bought 1,050 likes.", type: "like" },
  { text: "Someone just bought a Twitter Gold Badge Verification.", type: "premium" },
  { text: "Someone just verified their Telegram group.", type: "premium" },
  { text: "Someone just purchased a premium OnlyFans Username Claim.", type: "premium" }
];

const PurchaseNotifications = () => {
  const [purchaseIndex, setPurchaseIndex] = useState(0);
  const [showPurchase, setShowPurchase] = useState(false);

  useEffect(() => {
    const purchaseInterval = setInterval(() => {
      setShowPurchase(true);
      setPurchaseIndex((prev) => (prev + 1) % purchases.length);
      setTimeout(() => {
        setShowPurchase(false);
      }, 2000);
    }, 5000);
    return () => clearInterval(purchaseInterval);
  }, []);

  const getIcon = (type) => {
    switch (type) {
      case "premium":
        return <FaCrown className="text-yellow-500 text-2xl" />;
      case "view":
        return <FaEye className="text-blue-500 text-2xl" />;
      case "follower":
        return <FaUsers className="text-green-500 text-2xl" />;
      default:
        return <FaHeart className="text-purple-500 text-2xl" />;
    }
  };

  return (
    <AnimatePresence>
      {showPurchase && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-5 left-5 bg-white text-gray-900 p-4 rounded-lg z-[1000] shadow-lg flex items-center space-x-3 border border-gray-200"
        >
          {getIcon(purchases[purchaseIndex].type)}
          <p>{purchases[purchaseIndex].text}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PurchaseNotifications;
