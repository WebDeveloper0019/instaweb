import React from "react";
import { ShieldCheck, UserCheck, Search, FileText, Send, MessageSquare } from "lucide-react";

const OnlyFansUsernameClaim = () => {
  return (
    <div className="max-w-7xl mx-auto p-10 bg-transparent">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-extrabold text-purple-700">OnlyFans Username Claim Service</h1>
        <p className="text-xl text-gray-200 mt-4">Secure your desired OnlyFans username before someone else does! Our streamlined service ensures a fast and hassle-free process.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white bg-opacity-95 p-10 rounded-3xl shadow-2xl border border-purple-500 hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Claim a Username?</h2>
          <p className="text-lg text-gray-700">Reserving your username ensures your brand identity remains unique and recognizable.</p>
          <ul className="mt-6 space-y-5 text-lg text-gray-800">
            <li className="flex items-center gap-4"><ShieldCheck className="text-purple-600" /><strong>Brand Security:</strong> Prevent impersonation and name squatting.</li>
            <li className="flex items-center gap-4"><UserCheck className="text-purple-600" /><strong>Professional Identity:</strong> Keep your name consistent across platforms.</li>
            <li className="flex items-center gap-4"><Search className="text-purple-600" /><strong>Exclusive Rights:</strong> Ensure you have the first claim to your username.</li>
          </ul>
        </div>

        <div className="bg-white bg-opacity-95 p-10 rounded-3xl shadow-2xl border border-purple-500 hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">How It Works</h2>
          <p className="text-lg text-gray-700">Our step-by-step process ensures a smooth and secure claim.</p>
          <ul className="mt-6 space-y-5 text-lg text-gray-800">
            <li className="flex items-center gap-4"><FileText className="text-purple-600" /> <strong>Availability Check:</strong> We verify if your username is claimable.</li>
            <li className="flex items-center gap-4"><Send className="text-purple-600" /> <strong>Submission Request:</strong> We process your request with priority handling.</li>
            <li className="flex items-center gap-4"><MessageSquare className="text-purple-600" /> <strong>24/7 Support:</strong> Get updates and assistance throughout.</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-4xl font-bold text-gray-100">Claim Your Username Now!</h2>
        <p className="text-lg text-gray-400 mt-4">Don't wait! Secure your OnlyFans identity today with our expert service.</p>
        <button className="mt-6 bg-gradient-to-r from-purple-600 to-purple-500 text-white px-10 py-5 rounded-full text-xl font-semibold hover:opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
          Claim Your Username
        </button>
      </div>
    </div>
  );
};

export default OnlyFansUsernameClaim;
