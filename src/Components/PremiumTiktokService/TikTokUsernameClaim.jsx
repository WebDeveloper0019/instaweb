import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUserShield, 
  faCheckCircle, 
  faLock, 
  faExclamationCircle, 
  faUserTag 
} from "@fortawesome/free-solid-svg-icons";

const TikTokUsernameClaim = () => {
  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center px-6 pt-32 py-10">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-2xl p-8">
        
        {/* Header Section */}
        <div className="text-center">
          <FontAwesomeIcon icon={faUserTag} className="text-6xl text-red-500 mb-4" />
          <h2 className="text-3xl font-bold text-gray-900">Claim Your TikTok Username</h2>
          <p className="text-gray-600 mt-2">
            Secure your unique TikTok username before someone else takes it.
          </p>
          <button className="mt-5 bg-red-500 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-red-600 transition">
            Start Username Claim
          </button>
        </div>

        {/* Why Claim a Username? */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-900 text-center">Why Claim Your TikTok Username?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow">
              <FontAwesomeIcon icon={faUserShield} className="text-red-500 text-4xl mb-3" />
              <h4 className="text-lg font-semibold text-gray-800">Brand Protection</h4>
              <p className="text-gray-600 text-center">Secure your brand name to prevent impersonation.</p>
            </div>
            <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow">
              <FontAwesomeIcon icon={faLock} className="text-blue-500 text-4xl mb-3" />
              <h4 className="text-lg font-semibold text-gray-800">Exclusive Rights</h4>
              <p className="text-gray-600 text-center">Get priority on usernames linked to your identity.</p>
            </div>
            <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow">
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-4xl mb-3" />
              <h4 className="text-lg font-semibold text-gray-800">Verified Badge</h4>
              <p className="text-gray-600 text-center">Increase trust and visibility with a unique username.</p>
            </div>
          </div>
        </div>

        {/* Username Claim Requirements */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-900 text-center">Username Claim Requirements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <ul className="bg-gray-100 p-6 rounded-lg shadow space-y-3">
              <li className="text-gray-700 flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" /> Username is inactive
              </li>
              <li className="text-gray-700 flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" /> You own the trademark
              </li>
              <li className="text-gray-700 flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" /> You have a verified TikTok account
              </li>
            </ul>
            <ul className="bg-gray-100 p-6 rounded-lg shadow space-y-3">
              <li className="text-gray-700 flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" /> Proof of business or identity
              </li>
              <li className="text-gray-700 flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" /> No copyright or policy violations
              </li>
              <li className="text-gray-700 flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" /> Legal documentation if required
              </li>
            </ul>
          </div>
        </div>

        {/* Important Note */}
        <div className="mt-10 bg-yellow-100 p-6 rounded-lg shadow flex items-start space-x-4">
          <FontAwesomeIcon icon={faExclamationCircle} className="text-yellow-500 text-4xl" />
          <p className="text-gray-800">
            TikTok username claims are subject to approval. Ensure your application meets all requirements before submitting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TikTokUsernameClaim;
