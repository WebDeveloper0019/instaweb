import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUnlockAlt,
  faUserLock,
  faExclamationTriangle,
  faEnvelopeOpenText,
  faShieldAlt,
  faHandHoldingMedical,
} from "@fortawesome/free-solid-svg-icons";

const InstagramUnban = () => {
  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center px-6 pt-32 py-10">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-2xl p-8">
        
        {/* Header Section */}
        <div className="text-center">
          <FontAwesomeIcon icon={faUnlockAlt} className="text-6xl text-blue-500 mb-4" />
          <h2 className="text-3xl font-bold text-gray-900">Instagram Unban Services</h2>
          <p className="text-gray-600 mt-2">
            Get your Instagram account back with professional unban solutions.
          </p>
          <button className="mt-5 bg-blue-500 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
            Request Unban
          </button>
        </div>

        {/* Unban Services Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-900 text-center">Types of Instagram Bans We Handle</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow">
              <FontAwesomeIcon icon={faUserLock} className="text-red-500 text-4xl mb-3" />
              <h4 className="text-lg font-semibold text-gray-800">Temporary Ban</h4>
              <p className="text-gray-600 text-center">Recover your account from temporary restrictions.</p>
            </div>
            <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow">
              <FontAwesomeIcon icon={faExclamationTriangle} className="text-orange-500 text-4xl mb-3" />
              <h4 className="text-lg font-semibold text-gray-800">Permanent Ban</h4>
              <p className="text-gray-600 text-center">Appeal and get your permanently banned account back.</p>
            </div>
            <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow">
              <FontAwesomeIcon icon={faShieldAlt} className="text-blue-500 text-4xl mb-3" />
              <h4 className="text-lg font-semibold text-gray-800">Security Check Ban</h4>
              <p className="text-gray-600 text-center">Solve Instagram's security verification issues.</p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-10 bg-blue-100 p-6 rounded-lg shadow flex items-start space-x-4">
          <FontAwesomeIcon icon={faHandHoldingMedical} className="text-blue-500 text-4xl" />
          <p className="text-gray-800">
            Our team specializes in Instagram recovery. We follow official processes and best practices to ensure a successful unban.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstagramUnban;
