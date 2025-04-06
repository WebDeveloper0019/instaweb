import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faUserShield,
  faShieldAlt,
  faCertificate,
  faUsers,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const TikTokVerifiedAccounts = () => {
  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center px-6 pt-32 py-10">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-2xl p-8">
        
        {/* Header Section */}
        <div className="text-center">
          <FontAwesomeIcon icon={faCheckCircle} className="text-6xl text-blue-500 mb-4" />
          <h2 className="text-3xl font-bold text-gray-900">TikTok Verified Accounts</h2>
          <p className="text-gray-600 mt-2">
            Get your TikTok account verified with official recognition.
          </p>
          <button className="mt-5 bg-blue-500 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
            Apply for Verification
          </button>
        </div>

        {/* Verification Services */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-900 text-center">Available Verification Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow">
              <FontAwesomeIcon icon={faUserShield} className="text-green-500 text-4xl mb-3" />
              <h4 className="text-lg font-semibold text-gray-800">Standard Verification</h4>
              <p className="text-gray-600 text-center">Get the blue checkmark for public figures & brands.</p>
            </div>
            <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow">
              <FontAwesomeIcon icon={faShieldAlt} className="text-blue-500 text-4xl mb-3" />
              <h4 className="text-lg font-semibold text-gray-800">Business Verification</h4>
              <p className="text-gray-600 text-center">Verify your company or organization on TikTok.</p>
            </div>
            <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow">
              <FontAwesomeIcon icon={faCertificate} className="text-red-500 text-4xl mb-3" />
              <h4 className="text-lg font-semibold text-gray-800">Creator Verification</h4>
              <p className="text-gray-600 text-center">Influencers & content creators can apply here.</p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-10 bg-blue-100 p-6 rounded-lg shadow flex items-start space-x-4">
          <FontAwesomeIcon icon={faStar} className="text-blue-500 text-4xl" />
          <p className="text-gray-800">
            Verification requires a strong online presence, engagement, and authenticity. TikTok has strict criteria.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TikTokVerifiedAccounts;
