import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Menu, ChevronDown, Eye, Users, Heart, Play, MessageCircle, RefreshCcw, 
  CheckCircle, Unlock, User, Key, ShieldCheck, Badge 
} from "lucide-react";
import { FaTiktok, FaInstagram, FaKickstarter, FaYoutube, FaStar, FaTwitter, FaTelegram } from "react-icons/fa";

const HeaderNav = () => {
  return (
    <nav className="bg-transparent text-white py-4 pt-12 px-6 lg:px-16 flex justify-between items-center absolute z-[100] w-[100%]">
      <Link to="/" className="flex items-center">
        <img src="/logo.png" alt="fansflares logo" className="w-[180px]" />
      </Link>

      <div className="hidden lg:flex space-x-6 items-center">
        <Link to="/free-instagram-tools" className="hover:text-gray-400 transition">Like</Link>
        <Link to="/resources" className="hover:text-gray-400 transition">View</Link>
        <Link to="/resources" className="hover:text-gray-400 transition">Followers</Link>

        {/* Mega Dropdowns */}
        <MegaDropdown title=" Automatic Instagram Services" servicesList={instagramServices} customLeft="-170px" />
        <MegaDropdown title="Premium Services" servicesList={premiumServices} customLeft="-500px" />
      </div>

      <div className="hidden lg:flex">
        <Link to="/login" className="hover:text-gray-400 transition">Log in</Link>
      </div>

      <button className="lg:hidden text-black">
        <Menu size={28} />
      </button>
    </nav>
  );
};

// Mega Dropdown Component with Adjustable Left Position
const MegaDropdown = ({ title, servicesList, customLeft }) => {
  const [activeCategory, setActiveCategory] = useState(Object.keys(servicesList)[0]);

  return (
    <div className="relative group">
      <button className="flex items-center hover:text-gray-400 transition">
        {title}
        <ChevronDown size={18} className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
      </button>

      {/* Mega Menu Container */}
      <div 
        className="absolute mt-1 w-[820px] bg-white text-black border border-gray-300 rounded-lg shadow-lg hidden group-hover:flex"
        style={{ left: customLeft || "0px" }} // Apply custom left shift if provided
      >
        <div className="flex w-full">
          {/* Left Side - Categories */}
          <div className="w-[300px] bg-gray-100 p-4 rounded-l-lg">
            {Object.keys(servicesList).map((category) => (
              <div
                key={category}
                className={`flex items-center space-x-3 p-3 cursor-pointer rounded-lg transition ${
                  activeCategory === category ? "bg-purple-200 text-purple-700" : "hover:bg-gray-200"
                }`}
                onMouseEnter={() => setActiveCategory(category)}
              >
                <span className="bg-purple-300 p-2 rounded-lg text-white">{servicesList[category][0].icon}</span>
                <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
              </div>
            ))}
          </div>

          {/* Right Side - Services (Two Columns) */}
          <div className="w-2/3 p-4">
            <div className="grid grid-cols-2 gap-2">
              {servicesList[activeCategory].map((service, index) => (
                <Link key={index} to={service.path} className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition">
                  <span className="bg-purple-100 p-2 rounded-lg">{service.icon}</span>
                  <span>{service.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Instagram Services
const instagramServices = {
  likes: [
    { name: "Instagram Likes", path: "/buy-instagram-likes", icon: <Heart size={18} /> },
    { name: "Automatic Instagram Likes", path: "/buy-automatic-instagram-likes", icon: <RefreshCcw size={18} /> },
  ],
  followers: [
    { name: "Instagram Followers", path: "/buy-instagram-followers", icon: <Users size={18} /> },
    { name: "Automatic Instagram Followers", path: "/buy-automatic-instagram-followers", icon: <RefreshCcw size={18} /> },
  ],
  views: [
    { name: "Instagram Views", path: "/buy-instagram-views", icon: <Play size={18} /> },
    { name: "Automatic Instagram Views", path: "/buy-automatic-instagram-views", icon: <RefreshCcw size={18} /> },
  ],
};

// Premium Services with Brand Icons
const premiumServices = {
  tiktok: [
    { name: "Verifications", path: "/tiktok-verifications", icon: <CheckCircle size={18} /> },
    { name: "Unbans", path: "/tiktok-unbans", icon: <Unlock size={18} /> },
    { name: "Username Claims", path: "/tiktok-username-claims", icon: <User size={18} /> },
    { name: "Bypasses", path: "/tiktok-bypasses", icon: <Key size={18} /> },
    { name: "Verified Accounts", path: "/tiktok-verified-accounts", icon: <ShieldCheck size={18} /> },
  ],
  instagram: [
    { name: "Unbans", path: "/instagram-unbans", icon: <Unlock size={18} /> },
    { name: "Username Claims", path: "/instagram-username-claims", icon: <User size={18} /> },
  ],
  kick: [
    { name: "Username Claims", path: "/kick-username-claims", icon: <User size={18} /> },
    { name: "Verifications", path: "/kick-verifications", icon: <CheckCircle size={18} /> },
  ],
  youtube: [
    { name: "Verified Channels", path: "/youtube-verified-channels", icon: <Play size={18} /> },
    { name: "YouTube Verifications", path: "/youtube-verifications", icon: <ShieldCheck size={18} /> },
  ],
  onlyfans: [
    { name: "Username Claims", path: "/onlyfans-username-claims", icon: <User size={18} /> },
  ],
  twitter: [
    { name: "Gold Badge Verification", path: "/twitter-gold-verification", icon: <Badge size={18} /> },
  ],
  telegram: [
    { name: "Group, Bot & Channel Verifications", path: "/telegram-verifications", icon: <CheckCircle size={18} /> },
  ],
};

// Assign Brand Icons to Categories
Object.assign(premiumServices, {
  tiktok: [{ icon: <FaTiktok size={20} style={{ color: "#000000" }} /> }, ...premiumServices.tiktok],
  instagram: [{ icon: <FaInstagram size={20} style={{ color: "#E1306C" }} /> }, ...premiumServices.instagram],
  kick: [{ icon: <FaKickstarter size={20} style={{ color: "#52C41A" }} /> }, ...premiumServices.kick],
  youtube: [{ icon: <FaYoutube size={20} style={{ color: "#FF0000" }} /> }, ...premiumServices.youtube],
  onlyfans: [{ icon: <FaStar size={20} style={{ color: "#00AFF0" }} /> }, ...premiumServices.onlyfans],
  twitter: [{ icon: <FaTwitter size={20} style={{ color: "#000000" }} /> }, ...premiumServices.twitter],
  telegram: [{ icon: <FaTelegram size={20} style={{ color: "#0088CC" }} /> }, ...premiumServices.telegram],
});

export default HeaderNav;
