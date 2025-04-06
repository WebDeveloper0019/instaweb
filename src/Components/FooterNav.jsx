import React from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterNav = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 lg:px-20 relative overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-3xl font-bold tracking-wide text-white">FansFlares</h2>
          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
            Elevate your social presence with <span className="text-white font-semibold">premium growth services</span>.
            Expand your influence effortlessly!
          </p>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
            Our Services
          </h3>
          <ul className="space-y-3">
            {[
              { name: "Instagram Likes", path: "/buy-instagram-likes" },
              { name: "Instagram Views", path: "/buy-instagram-views" },
              { name: "Instagram Followers", path: "/buy-instagram-followers" },
              { name: "Automatic Likes", path: "/buy-automatic-instagram-likes" },
              { name: "Automatic Views", path: "/buy-automatic-instagram-views" },
            ].map((service, index) => (
              <li key={index}>
                <Link
                  to={service.path}
                  className="text-gray-400 hover:text-white transition duration-300 relative 
                    before:absolute before:w-0 before:h-[2px] before:bg-pink-500 before:left-0 before:bottom-0 
                    before:transition-all before:duration-300 hover:before:w-full"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Latest Articles */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
            Our Latest Articles
          </h3>
          <ul className="text-sm space-y-3">
            {[
              { title: "Start a Business Today", date: "March 28, 2020" },
              { title: "Productivity in Life", date: "March 24, 2020" },
              { title: "Programming Languages", date: "March 20, 2020" },
            ].map((article, index) => (
              <li key={index}>
                {article.title} <br />
                <span className="text-red-500 text-xs">{article.date}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
            Resources
          </h3>
          <ul className="space-y-3">
            {[
              { name: "Blog", path: "/blog" },
              { name: "Press", path: "/press" },
              { name: "Support", path: "/support" },
              { name: "Terms of Service", path: "/terms-of-service" },
              { name: "Privacy Policy", path: "/privacy-policy" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="text-gray-400 hover:text-white transition duration-300 relative 
                    before:absolute before:w-0 before:h-[2px] before:bg-pink-500 before:left-0 before:bottom-0 
                    before:transition-all before:duration-300 hover:before:w-full"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
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
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-800 pt-5">
        &copy; {new Date().getFullYear()} FansFlares. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterNav;
