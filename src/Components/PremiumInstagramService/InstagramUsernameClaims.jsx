import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield, faUserCheck, faIdBadge } from "@fortawesome/free-solid-svg-icons";

const InstagramUsernameClaims = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-transparent p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Instagram Username Claims</h1>
        <p className="text-gray-600 mb-6">
          Secure your desired Instagram username with our professional assistance. Whether you need to claim an inactive handle
          or recover a username, we have the expertise to help.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow">
            <FontAwesomeIcon icon={faUserShield} className="text-blue-500 text-3xl mb-2" />
            <h3 className="font-semibold text-lg">Secure Your Handle</h3>
            <p className="text-sm text-gray-500 text-center">Claim usernames tied to your brand or personal identity.</p>
          </div>
          <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow">
            <FontAwesomeIcon icon={faUserCheck} className="text-green-500 text-3xl mb-2" />
            <h3 className="font-semibold text-lg">Inactive Username Recovery</h3>
            <p className="text-sm text-gray-500 text-center">Get access to inactive usernames through our recovery process.</p>
          </div>
          <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow">
            <FontAwesomeIcon icon={faIdBadge} className="text-purple-500 text-3xl mb-2" />
            <h3 className="font-semibold text-lg">Trademark & Brand Protection</h3>
            <p className="text-sm text-gray-500 text-center">Ensure your brand identity is protected on Instagram.</p>
          </div>
        </div>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
          Start Your Claim
        </button>
      </div>
    </div>
  );
};

export default InstagramUsernameClaims;
