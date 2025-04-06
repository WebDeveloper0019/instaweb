import React from "react";
import { FaTelegram, FaEnvelope, FaCheckCircle } from "react-icons/fa";

const TelegramVerification = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-transparent shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Telegram Verification Services</h1>
      <p className="text-gray-200 mb-8 text-center text-lg">
        Get your Telegram Group, Bot, or Channel verified for enhanced credibility and trust.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
          <FaCheckCircle className="text-green-500 text-3xl mx-auto mb-3" />
          <h2 className="text-xl font-semibold mb-2">Group Verification</h2>
          <p className="text-gray-800">Enhance your group's credibility with official verification.</p>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
          <FaCheckCircle className="text-green-500 text-3xl mx-auto mb-3" />
          <h2 className="text-xl font-semibold mb-2">Bot Verification</h2>
          <p className="text-gray-800">Ensure authenticity and security for your Telegram bot.</p>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
          <FaCheckCircle className="text-green-500 text-3xl mx-auto mb-3" />
          <h2 className="text-xl font-semibold mb-2">Channel Verification</h2>
          <p className="text-gray-800">Boost your channel's reputation with official verification.</p>
        </div>
      </div>
      
      <div className="mt-10 text-center bg-blue-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Get Verified Today!</h2>
        <p className="text-gray-800 mb-6">Interested in verifying your Telegram service? Contact us now.</p>
        <a
          href="mailto:support@yourwebsite.com"
          className="inline-flex items-center px-6 py-3 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 transition duration-300"
        >
          <FaEnvelope className="mr-2 text-xl" /> Contact Support
        </a>
      </div>
    </div>
  );
};

export default TelegramVerification;
