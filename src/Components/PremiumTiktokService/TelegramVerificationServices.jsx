import React from "react";
import { FaTelegram, FaEnvelope, FaCheckCircle, FaInfoCircle } from "react-icons/fa";

const TelegramVerificationServices = () => {
  return (
    <div className="p-10 max-w-6xl mx-auto bg-transparent shadow-xl rounded-lg">
      <h1 className="text-5xl font-bold mb-8 text-center text-blue-700">Telegram Verification Services</h1>
      <p className="text-gray-200 mb-10 text-center text-lg max-w-3xl mx-auto">
        Secure official verification for your Telegram Group, Bot, or Channel to enhance credibility and user trust.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center border border-gray-200">
          <FaCheckCircle className="text-green-500 text-4xl mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-3">Group Verification</h2>
          <p className="text-gray-800">Gain legitimacy and attract more users with a verified Telegram group.</p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-lg text-center border border-gray-200">
          <FaCheckCircle className="text-green-500 text-4xl mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-3">Bot Verification</h2>
          <p className="text-gray-800">Ensure your bot is trusted and secure with official verification.</p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-lg text-center border border-gray-200">
          <FaCheckCircle className="text-green-500 text-4xl mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-3">Channel Verification</h2>
          <p className="text-gray-800">Boost your channel's reputation and visibility with verification.</p>
        </div>
      </div>
      
      <div className="mt-12 p-10 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-3xl font-semibold mb-6 text-blue-700 text-center">How We Help You</h2>
        <p className="text-gray-800 text-lg text-center mb-6 max-w-3xl mx-auto">
          Our experts streamline the verification process, ensuring your Telegram entity gains authenticity and protection.
        </p>
        <ul className="text-gray-700 list-disc list-inside space-y-3 max-w-3xl mx-auto">
          <li><FaInfoCircle className="inline text-blue-500 mr-2" /> Step-by-step guidance through the process.</li>
          <li><FaInfoCircle className="inline text-blue-500 mr-2" /> Handling all documentation and submission.</li>
          <li><FaInfoCircle className="inline text-blue-500 mr-2" /> Ensuring quick and hassle-free approval.</li>
        </ul>
      </div>
      
      <div className="mt-12 text-center bg-blue-200 p-10 rounded-lg shadow-lg border border-blue-300">
        <h2 className="text-3xl font-semibold mb-4 text-blue-700">Get Verified Today!</h2>
        <p className="text-gray-800 mb-6">Ready to verify your Telegram service? Reach out to us now.</p>
        <a
          href="mailto:support@yourwebsite.com"
          className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
        >
          <FaEnvelope className="mr-2 text-xl" /> Contact Support
        </a>
      </div>
    </div>
  );
};

export default TelegramVerificationServices;
