import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const AutoViewsFAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does buying automatic views work?",
      answer:
        "With our automatic views service, your new posts will receive views instantly after being uploaded. Just subscribe to a package, and we handle the rest!",
    },
    {
      question: "Are these automatic views from real accounts?",
      answer:
        "Yes! Our automatic views come from high-quality, active accounts to maintain the authenticity of your content engagement.",
    },
    {
      question: "How quickly will I receive the views on new posts?",
      answer:
        "Your views will start rolling in almost instantly after you upload new content, ensuring consistent engagement.",
    },
    {
      question: "Is buying automatic views safe?",
      answer:
        "Absolutely! Our methods comply with platform guidelines, ensuring no risk to your account. We never ask for your password.",
    },
    {
      question: "What if I don’t receive automatic views on my posts?",
      answer:
        "In rare cases of delays, you can contact our support team. We also offer a refund if we fail to deliver as promised.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="text-white py-14 px-6 lg:px-16 relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-extrabold text-white mb-4 tracking-wide">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 text-lg">
          Everything you need to know about buying automatic views.
        </p>
      </div>

      <div className="mt-10 max-w-3xl mx-auto space-y-6 relative z-10">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-gray-700 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
          >
            <button
              className="w-full flex justify-between items-center text-lg font-semibold py-3 px-4 text-gray-200 hover:text-white transition-all duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <ChevronDown
                size={24}
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-yellow-400" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-40 opacity-100 py-2 px-4 text-gray-300" : "max-h-0 opacity-0"
              }`}
            >
              <p className="leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AutoViewsFAQSection;