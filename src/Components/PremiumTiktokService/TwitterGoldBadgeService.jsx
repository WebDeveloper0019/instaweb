import React from "react";
import { CheckCircle, ShieldCheck, TrendingUp, UserCheck, Search, FileText, Send, MessageSquare } from "lucide-react";

const TwitterGoldBadgeService = () => {
  return (
    <div className="max-w-7xl mx-auto p-10 bg-transparent">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-extrabold text-blue-700">Twitter Gold Badge Verification</h1>
        <p className="text-xl text-gray-200 mt-4">Boost your brand’s credibility and unlock new engagement opportunities with our expert verification service.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white bg-opacity-95 p-10 rounded-3xl shadow-2xl border border-blue-500 hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Get Verified?</h2>
          <p className="text-lg text-gray-700">A Twitter Gold Badge enhances your brand’s legitimacy and trustworthiness.</p>
          <ul className="mt-6 space-y-5 text-lg text-gray-800">
            <li className="flex items-center gap-4"><CheckCircle className="text-blue-600" /><strong>Authenticity:</strong> Distinguish yourself with credibility.</li>
            <li className="flex items-center gap-4"><ShieldCheck className="text-blue-600" /><strong>Trust & Recognition:</strong> Increase your audience’s confidence.</li>
            <li className="flex items-center gap-4"><TrendingUp className="text-blue-600" /><strong>Higher Engagement:</strong> Improve reach and visibility.</li>
            <li className="flex items-center gap-4"><UserCheck className="text-blue-600" /><strong>Brand Protection:</strong> Prevent impersonation risks.</li>
          </ul>
        </div>

        <div className="bg-white bg-opacity-95 p-10 rounded-3xl shadow-2xl border border-blue-500 hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Service Inclusions</h2>
          <p className="text-lg text-gray-700">We provide a seamless verification process with expert guidance.</p>
          <ul className="mt-6 space-y-5 text-lg text-gray-800">
            <li className="flex items-center gap-4"><Search className="text-blue-600" /> <strong>Profile Optimization:</strong> Enhancing your profile for approval.</li>
            <li className="flex items-center gap-4"><FileText className="text-blue-600" /> <strong>Activity Review:</strong> Aligning content with Twitter’s criteria.</li>
            <li className="flex items-center gap-4"><Send className="text-blue-600" /> <strong>Submission Assistance:</strong> We handle the application process.</li>
            <li className="flex items-center gap-4"><MessageSquare className="text-blue-600" /> <strong>Follow-up Support:</strong> Ongoing help until approval.</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-4xl font-bold text-gray-100">Start Your Verification Today!</h2>
        <p className="text-lg text-gray-400 mt-4">Let’s make your brand stand out with a verified presence.</p>
        <button className="mt-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-10 py-5 rounded-full text-xl font-semibold hover:opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
          Apply for Verification
        </button>
      </div>
    </div>
  );
};

export default TwitterGoldBadgeService;
