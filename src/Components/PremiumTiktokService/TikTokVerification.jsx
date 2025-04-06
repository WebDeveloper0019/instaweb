import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard, faFaceSmile, faShieldHalved, faLock, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const TikTokVerification = () => {
  return (
    <div className="bg-transparent min-h-screen flex flex-col items-center justify-center pt-32">
      
      {/* Top Verification Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {/* Photo ID Verification */}
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-start">
          <FontAwesomeIcon icon={faIdCard} className="text-4xl text-red-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Photo ID Verification</h3>
          <p className="text-gray-600 mt-2">
            Upload a government-issued ID to verify your identity. We accept passports, driver's licenses, and national ID cards.  This process takes less than a minute.
          </p>
          <button className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg shadow hover:bg-red-600 transition">
            Start ID Verification
          </button>
        </div>

        {/* Face Verification */}
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-start">
          <FontAwesomeIcon icon={faFaceSmile} className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Face Verification</h3>
          <p className="text-gray-600 mt-2">
            Complete a quick face scan to verify your identity. This process takes less than a minute and ensures account authenticity.
          </p>
          <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition">
            Start Face Verification
          </button>
        </div>
      </div>

      {/* Why Verify Your Account? */}
      <div className="bg-white p-6 rounded-xl shadow-md mt-10 w-full max-w-5xl">
        <h3 className="text-xl font-semibold text-gray-800">Why Verify Your Account?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="flex items-start space-x-3">
            <FontAwesomeIcon icon={faLock} className="text-red-500 text-3xl" />
            <div>
              <h4 className="font-semibold text-gray-800">Enhanced Security</h4>
              <p className="text-gray-600">Protect your account from unauthorized access and impersonation.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <FontAwesomeIcon icon={faShieldHalved} className="text-blue-500 text-3xl" />
            <div>
              <h4 className="font-semibold text-gray-800">Exclusive Features</h4>
              <p className="text-gray-600">Access special features and tools available only to verified accounts.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <FontAwesomeIcon icon={faShieldHalved} className="text-green-500 text-3xl" />
            <div>
              <h4 className="font-semibold text-gray-800">Verified Badge</h4>
              <p className="text-gray-600">Get the coveted verification badge to boost your credibility.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Verification Requirements */}
      <div className="bg-white p-6 rounded-xl shadow-md mt-10 w-full max-w-5xl">
        <h3 className="text-xl font-semibold text-gray-800">Verification Requirements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <ul className="text-gray-600 space-y-2">
            <li><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" /> Valid government-issued ID</li>
            <li><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" /> Clear, recent photo of yourself</li>
            <li><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" /> Working camera or webcam</li>
          </ul>
          <ul className="text-gray-600 space-y-2">
            <li><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" /> Good lighting conditions</li>
            <li><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" /> Stable internet connection</li>
            <li><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" /> Age 18 or older</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default TikTokVerification;
