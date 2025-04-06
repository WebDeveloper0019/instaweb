import React from "react";

const InstaBlogsSection = () => {
  // [#f1ecdf]
  return (
    <section className="bg-transparent py-14 px-6 text-center">
      {/* Instagram Header */}
      <h2 className="text-gray-300 font-semibold text-sm mb-6 uppercase">
        FOLLOW ME ON INSTAGRAM
      </h2>

      {/* Instagram Images Grid */}
      <div className="grid grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
        <img
          src="/assets/blogs1.jpg"
          alt="Instagram Post 1"
          className="w-full h-52 object-cover rounded-md"
        />
        <img
          src="/assets/blogs2.jpg"
          alt="Instagram Post 2"
          className="w-full h-52 object-cover rounded-md"
        />
        <img
          src="/assets/blogs3.jpg"
          alt="Instagram Post 3"
          className="w-full h-52 object-cover rounded-md"
        />
        <img
          src="/assets/blogs4.jpg"
          alt="Instagram Post 4"
          className="w-full h-52 object-cover rounded-md"
        />
      </div>

      {/* Subscription Section */}
      <div className="max-w-4xl mx-auto bg-[#ece8dd] p-12 rounded-lg shadow-lg text-left">
        <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
        Boost Your Instagram Growth <em>Instantly!</em>
        </h3>
        <p className="text-gray-700 mb-6 text-lg">
        Get real Instagram likes, followers, and views to enhance your social presence. Join 4000+ satisfied users today!
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Add your e-mail"
            className="w-full sm:w-2/3 px-4 py-3 border border-gray-400 rounded-md text-gray-800"
          />
          <button className="bg-blue-700 text-white px-8 py-3 font-semibold uppercase rounded-md">
          Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstaBlogsSection;