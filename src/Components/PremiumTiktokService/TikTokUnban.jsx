import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faVideo, faShieldHalved, faLock, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const TikTokUnban = () => {
  return (
    <div className="bg-transparent min-h-screen flex flex-col items-center justify-center py-10">
      
      {/* Top Unban Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {/* TikTok Shop Unban */}
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-start">
          <FontAwesomeIcon icon={faStore} className="text-4xl text-red-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">TikTok Shop Unban</h3>
          <p className="text-gray-600 mt-2">
            Restore your TikTok Shop account and regain access to your store features.
          </p>
          <button className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg shadow hover:bg-red-600 transition">
            Request Shop Unban
          </button>
        </div>

        {/* TikTok Live Unban */}
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-start">
          <FontAwesomeIcon icon={faVideo} className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">TikTok Live Unban</h3>
          <p className="text-gray-600 mt-2">
            Recover your TikTok Live streaming access and start going live again.
          </p>
          <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition">
            Request Live Unban
          </button>
        </div>
      </div>

      {/* Why Unban Your Account? */}
      <div className="bg-white p-6 rounded-xl shadow-md mt-10 w-full max-w-5xl">
        <h3 className="text-xl font-semibold text-gray-800">Why Unban Your Account?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="flex items-start space-x-3">
            <FontAwesomeIcon icon={faLock} className="text-red-500 text-3xl" />
            <div>
              <h4 className="font-semibold text-gray-800">Regain Access</h4>
              <p className="text-gray-600">Restore your shop or live features and continue your business.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <FontAwesomeIcon icon={faShieldHalved} className="text-blue-500 text-3xl" />
            <div>
              <h4 className="font-semibold text-gray-800">Secure Your Account</h4>
              <p className="text-gray-600">Ensure your account follows TikTok's policies for future safety.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <FontAwesomeIcon icon={faShieldHalved} className="text-green-500 text-3xl" />
            <div>
              <h4 className="font-semibold text-gray-800">Boost Your Credibility</h4>
              <p className="text-gray-600">A verified and unbanned account increases trust among customers.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Unban Requirements */}
      <div className="bg-white p-6 rounded-xl shadow-md mt-10 w-full max-w-5xl">
        <h3 className="text-xl font-semibold text-gray-800">Unban Requirements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <ul className="text-gray-600 space-y-2">
            <li><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" /> Follow TikTok Community Guidelines</li>
            <li><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" /> Provide necessary verification documents</li>
            <li><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" /> Ensure your content follows TikTok rules</li>
          </ul>
          <ul className="text-gray-600 space-y-2">
            <li><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" /> Good account standing</li>
            <li><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" /> No repeated violations</li>
            <li><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" /> Provide an appeal if needed</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default TikTokUnban;
