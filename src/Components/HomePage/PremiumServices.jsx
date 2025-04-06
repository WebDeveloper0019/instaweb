import React, { useState } from "react";
import { CheckCircle, Eye } from "lucide-react";

const services = [
  {
    category: "TikTok Services",
    items: [
      {
        text: "Verifications",
        hiddenText: "",
      },
      {
        text: "Username claims",
        hiddenText: "",
      },
      {
        text: "Bypasses",
        hiddenText: "(2FA bypass, removals, username changes, etc.)",
      },
      {
        text: "Unbans",
        hiddenText: "(including TikTok Shop & TikTok Live)",
      },
      {
        text: "Verified accounts",
        hiddenText: "",
      },
    ],
  },
  {
    category: "Instagram Services",
    items: [{ text: "Unbans" }, { text: "Username claims" }],
  },
  {
    category: "Kick Services",
    items: [{ text: "Username claims" }, { text: "Verifications" }],
  },
  {
    category: "YouTube Services",
    items: [{ text: "Verified channels" }, { text: "YouTube verifications" }],
  },
  {
    category: "OnlyFans Services",
    items: [{ text: "Username claims" }],
  },
  {
    category: "Twitter Services",
    items: [{ text: "Gold badge verification" }],
  },
  {
    category: "Telegram Services",
    items: [{ text: "Group, bot, and channel verifications" }],
  },
];

const PremiumServices = () => {
  const [visible, setVisible] = useState({});

  const toggleVisibility = (category, index, event) => {
    event.stopPropagation(); // Prevents triggering hover or click effects on card
    setVisible((prev) => ({
      ...prev,
      [`${category}-${index}`]: !prev[`${category}-${index}`],
    }));
  };

  return (
    <section className="text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Premium Services Across Platforms
        </h1>
        <p className="text-lg text-gray-300 mt-4">
          Get top-tier verifications, unbans, username claims, and more!
        </p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300 min-h-[250px]"
            >
              <h3 className="text-xl font-semibold text-indigo-300 mb-3">
                {service.category}
              </h3>
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <CheckCircle size={20} className="text-green-400 mr-2" />
                    <span>{item.text}</span>
                    {item.hiddenText && (
                      <button
                        className="ml-2 cursor-pointer text-gray-400 hover:text-white focus:outline-none"
                        onClick={(e) => toggleVisibility(service.category, i, e)}
                      >
                        <Eye size={18} />
                      </button>
                    )}
                    {visible[`${service.category}-${i}`] && (
                      <span className="ml-2 text-xs text-indigo-300">
                        {item.hiddenText}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <button className="mt-10 bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default PremiumServices;
