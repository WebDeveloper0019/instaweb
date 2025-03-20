import React from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterNav = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 lg:px-20 relative overflow-hidden">
      {/* Animated Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        {/* Logo & About */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-wide text-white">FansFlares</h2>
          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
            Elevate your social presence with **premium growth services**. Expand your influence effortlessly!
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-gray-200 mb-4 border-b border-gray-600 pb-2">
            Our Services
          </h3>
          <ul className="space-y-3 text-gray-400">
            {[
              { name: "Instagram Likes", path: "/buy-instagram-likes" },
              { name: "Instagram Views", path: "/buy-instagram-views" },
              { name: "Instagram Followers", path: "/buy-instagram-followers" },
              { name: "Automatic Services", path: "/buy-automatic-services" },
              { name: "premium Services", path: "/buy-premimum-services" },
            ].map((service, index) => (
              <li key={index}>
                <Link
                  to={service.path}
                  className="hover:text-white transition-all duration-300 relative before:absolute before:w-0 before:h-[2px] before:bg-pink-500 before:left-0 before:bottom-0 before:transition-all before:duration-300 hover:before:w-full"
                >
                  ➤ {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-gray-200 mb-4 border-b border-gray-600 pb-2">
            Follow Us
          </h3>
          <div className="flex space-x-5 text-2xl">
            {[
              { icon: <FaInstagram />, href: "#", color: "hover:text-pink-500" },
              { icon: <FaTwitter />, href: "#", color: "hover:text-blue-400" },
              { icon: <FaFacebook />, href: "#", color: "hover:text-blue-600" },
              { icon: <FaYoutube />, href: "#", color: "hover:text-red-500" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`transition-transform duration-300 transform scale-100 hover:scale-110 ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-700 pt-5">
        &copy; {new Date().getFullYear()} FansFlares. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterNav
