import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLockOpen,
  faUserSlash,
  faUserEdit,
  faShieldAlt,
  faCheckCircle,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";

const TikTokBypasses = () => {
  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center px-6 pt-32 py-10">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-2xl p-8">
        
        {/* Header Section */}
        <div className="text-center">
          <FontAwesomeIcon icon={faShieldAlt} className="text-6xl text-red-500 mb-4" />
          <h2 className="text-3xl font-bold text-gray-900">TikTok Bypasses</h2>
          <p className="text-gray-600 mt-2">
            Unlock restricted accounts, bypass 2FA, remove suspensions, and modify usernames easily.
          </p>
          <button className="mt-5 bg-red-500 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-red-600 transition">
            Get Bypass Assistance
          </button>
        </div>

        {/* Bypass Services */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-900 text-center">Available TikTok Bypasses</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow">
              <FontAwesomeIcon icon={faLockOpen} className="text-green-500 text-4xl mb-3" />
              <h4 className="text-lg font-semibold text-gray-800">2FA Bypass</h4>
              <p className="text-gray-600 text-center">Access your TikTok account without two-factor authentication.</p>
            </div>
            <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow">
              <FontAwesomeIcon icon={faUserSlash} className="text-blue-500 text-4xl mb-3" />
              <h4 className="text-lg font-semibold text-gray-800">Suspension Removal</h4>
              <p className="text-gray-600 text-center">Recover banned or suspended TikTok accounts.</p>
            </div>
            <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow">
              <FontAwesomeIcon icon={faUserEdit} className="text-red-500 text-4xl mb-3" />
              <h4 className="text-lg font-semibold text-gray-800">Username Change</h4>
              <p className="text-gray-600 text-center">Modify your username even after restrictions.</p>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-10 bg-yellow-100 p-6 rounded-lg shadow flex items-start space-x-4">
          <FontAwesomeIcon icon={faExclamationTriangle} className="text-yellow-500 text-4xl" />
          <p className="text-gray-800">
            Bypassing TikTok security measures should comply with TikTok's policies. Unauthorized actions may lead to penalties.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TikTokBypasses;
