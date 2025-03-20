import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react"; // Icons for dropdowns

const HeaderNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [autoDropdownOpen, setAutoDropdownOpen] = useState(false);
  const [premiumDropdownOpen, setPremiumDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#121212] text-white py-4 px-6 lg:px-16 flex justify-between items-center relative border-b border-gray-700">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img
          src="/assets/Screenshot 2025-03-17 150158.jpg"
          alt="fansflares logo"
          className="w-[180px]"
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex space-x-6 items-center">
        {["Likes", "Views", "Followers"].map((item, index) => (
          <Link key={index} to={`/buy-instagram-${item.toLowerCase()}`} className="hover:text-gray-400 transition">
            {item}
          </Link>
        ))}

        {/* Automatic Services Dropdown */}
        <DropdownMenu 
          title="Automatic Services"
          isOpen={autoDropdownOpen}
          setIsOpen={setAutoDropdownOpen}
          links={[
            { name: "Automatic Likes", path: "/buy-automatic-instagram-likes" },
            { name: "Automatic Views", path: "/buy-automatic-instagram-views" },
          ]}
        />

        {/* Premium Services Dropdown */}
        <DropdownMenu 
          title="Premium Services"
          isOpen={premiumDropdownOpen}
          setIsOpen={setPremiumDropdownOpen}
          links={[
            { name: "Premium Likes", path: "/premium-instagram-likes" },
            { name: "Premium Followers", path: "/premium-instagram-followers" },
          ]}
        />
      </div>

      {/* Login Button */}
      <div className="hidden lg:flex">
        <Link to="/auth" className="hover:text-gray-400 transition">Log in</Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#0D0D0D] text-white flex flex-col items-center py-4 space-y-4 lg:hidden border-t border-gray-700">
          {["Likes", "Views", "Followers"].map((item, index) => (
            <Link key={index} to={`/buy-instagram-${item.toLowerCase()}`} className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
              {item}
            </Link>
          ))}

          <DropdownMenu 
            title="Automatic Services"
            isOpen={autoDropdownOpen}
            setIsOpen={setAutoDropdownOpen}
            links={[
              { name: "Automatic Likes", path: "/buy-automatic-instagram-likes" },
              { name: "Automatic Views", path: "/buy-automatic-instagram-views" },
            ]}
            mobile
          />

          <DropdownMenu 
            title="Premium Services"
            isOpen={premiumDropdownOpen}
            setIsOpen={setPremiumDropdownOpen}
            links={[
              { name: "Premium Likes", path: "/premium-instagram-likes" },
              { name: "Premium Followers", path: "/premium-instagram-followers" },
            ]}
            mobile
          />

          <Link to="/auth" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>Log in</Link>
        </div>
      )}
    </nav>
  );
};

// Dropdown Menu Component
const DropdownMenu = ({ title, isOpen, setIsOpen, links, mobile }) => (
  <div className="relative">
    <button className="flex items-center hover:text-gray-400 transition" onClick={() => setIsOpen(!isOpen)}>
      {title}
      <ChevronDown size={18} className={`ml-1 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
    </button>

    <div className={`absolute left-0 mt-2 bg-[#0D0D0D] border border-gray-700 rounded-md shadow-lg flex flex-col w-48 z-10 transition-all duration-300 ease-in-out transform origin-top ${isOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-90 invisible"}`}>
      {links.map((link, index) => (
        <Link key={index} to={link.path} className="px-4 py-2 hover:bg-gray-800 transition" onClick={() => setIsOpen(false)}>
          {link.name}
        </Link>
      ))}
    </div>
  </div>
);

export default HeaderNav;
