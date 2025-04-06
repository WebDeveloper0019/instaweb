import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt, faCheckCircle, faCertificate } from "@fortawesome/free-solid-svg-icons";

const KickVerifications = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-transparent p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Kick Verifications</h1>
        <p className="text-gray-600 mb-6">
          Get verified on Kick with our seamless verification service. Enhance your credibility and gain trust from your audience.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow">
            <FontAwesomeIcon icon={faShieldAlt} className="text-blue-500 text-3xl mb-2" />
            <h3 className="font-semibold text-lg">Secure Verification</h3>
            <p className="text-sm text-gray-500 text-center">Ensure your account is authentic and protected.</p>
          </div>
          <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow">
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-3xl mb-2" />
            <h3 className="font-semibold text-lg">Trusted Badge</h3>
            <p className="text-sm text-gray-500 text-center">Stand out with the official verification badge.</p>
          </div>
          <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow">
            <FontAwesomeIcon icon={faCertificate} className="text-purple-500 text-3xl mb-2" />
            <h3 className="font-semibold text-lg">Professional Support</h3>
            <p className="text-sm text-gray-500 text-center">Get expert guidance through the verification process.</p>
          </div>
        </div>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
          Apply for Verification
        </button>
      </div>
    </div>
  );
};

export default KickVerifications;
