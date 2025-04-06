import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlock, faUserShield, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const InstagramUnbanRequests = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Instagram Unban Requests</h1>
        <p className="text-gray-600 mb-6">
          If your Instagram account has been banned, we provide a professional service to help you get it back.
          Our experts will analyze your case and submit strong appeals to Instagram on your behalf.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="flex items-start gap-4">
            <FontAwesomeIcon icon={faUnlock} className="text-blue-600 text-3xl" />
            <div>
              <h3 className="font-semibold text-lg">Unlock Your Account</h3>
              <p className="text-gray-600">We work on bypassing account restrictions and unbanning your profile.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FontAwesomeIcon icon={faUserShield} className="text-green-600 text-3xl" />
            <div>
              <h3 className="font-semibold text-lg">Expert Assistance</h3>
              <p className="text-gray-600">Our professionals draft and submit effective unban requests.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FontAwesomeIcon icon={faExclamationCircle} className="text-red-600 text-3xl" />
            <div>
              <h3 className="font-semibold text-lg">Quick Response</h3>
              <p className="text-gray-600">We ensure fast processing to restore your account access ASAP.</p>
            </div>
          </div>
        </div>

        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
          Request Unban Now
        </button>
      </div>
    </div>
  );
};

export default InstagramUnbanRequests;
