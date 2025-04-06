import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const TelegramFAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Telegram verification?",
      answer:
        "Telegram verification is a process that authenticates your group, bot, or channel, ensuring that it is officially recognized and trusted by users.",
    },
    {
      question: "Why should I verify my Telegram service?",
      answer:
        "Verification adds credibility, increases trust, and protects against impersonation, making your service more appealing to users.",
    },
    {
      question: "What services do you offer for Telegram verification?",
      answer:
        "We assist with the entire verification process, from eligibility assessment to submission and approval guidance, ensuring a seamless experience.",
    },
    {
      question: "How long does it take to get verified?",
      answer:
        "The timeline varies depending on Telegram’s review process, but we expedite the submission and follow up to ensure a quicker response.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  // bg-[#0D0D0D]
  return (
    <section className=" text-white py-14 px-6 lg:px-16 relative">
      {/* Glowing Background */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[300px] bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 blur-[100px] opacity-30"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-extrabold text-white mb-4 tracking-wide">
          Have Questions? We’ve Got Answers!
        </h2>
        <p className="text-gray-400 text-lg">
          Find everything you need to know about FansFlares.
        </p>
      </div>

      <div className="mt-10 max-w-3xl mx-auto space-y-6 relative z-10">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-gray-700 hover:border-purple-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/30"
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

      {/* Call-to-Action */}
      <div className="text-center mt-12">
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full text-lg font-semibold tracking-wide text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-pink-500/50"
        >
          Still Have Questions? Contact Us!
        </a>
      </div>
    </section>
  );
};

export default TelegramFAQSection;
