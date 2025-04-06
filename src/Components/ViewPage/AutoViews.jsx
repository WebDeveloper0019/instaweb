import React from "react";
import GlowingButton from "../HomePage/GlowingButton";
import { FaArrowRight } from "react-icons/fa";

const AutoViews = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 text-gray-100 ">
      {/* Redirect to Automatic Views */}
      <div className="mt-16 bg-transparent py-12 px-8 rounded-xl text-center ">
        <h3 className="text-3xl font-bold text-gray-100">Want Automatic Views?</h3>
        <p className="text-gray-200 mt-3 text-lg max-w-2xl mx-auto">
          Get Views automatically on every new post with our subscription service. Enjoy seamless engagement growth without lifting a finger!
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <div className="bg-gray-200 p-6 rounded-lg shadow-md text-gray-700 max-w-xs">
            <h4 className="text-xl font-semibold">Instant Delivery</h4>
            <p className="text-gray-500 mt-2">Your Views start rolling in within minutes of posting.</p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md text-gray-700 max-w-xs">
            <h4 className="text-xl font-semibold">Real Engagement</h4>
            <p className="text-gray-500 mt-2">Get Views from real accounts for maximum authenticity.</p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md text-gray-700 max-w-xs">
            <h4 className="text-xl font-semibold">Flexible Plans</h4>
            <p className="text-gray-500 mt-2">Choose from weekly or monthly subscription plans.</p>
          </div>
        </div>
        <a href="/automatic-Views">
          <GlowingButton>Explore Automatic Views <FaArrowRight /></GlowingButton>
        </a>
      </div>
    </section>
  );
};

export default AutoViews;
