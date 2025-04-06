import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

const MobileHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activePremiumService, setActivePremiumService] = useState(null);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = (dropdownName) => {
    if (openDropdown === dropdownName) {
      setOpenDropdown(null);
      if (dropdownName === "premiumServices") {
        setActivePremiumService(null);
      }
    } else {
      setOpenDropdown(dropdownName);
      if (dropdownName !== "premiumServices") {
        setActivePremiumService(null);
      }
    }
  };

  const handlePremiumServiceToggle = (service) => {
    setActivePremiumService(activePremiumService === service ? null : service);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
        setActivePremiumService(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-transparent text-white py-4 pt-12 px-6 lg:px-16 flex justify-between items-center absolute z-[100] w-[100%]" ref={dropdownRef}>
      <Link to="/" className="flex items-center">
        <img src="/assets/Screenshot 2025-03-17 150158.jpg" alt="fansflares logo" className="w-[180px]" />
      </Link>

      <div className="hidden lg:flex space-x-6 items-center">
        {["Likes", "Views", "Followers"].map((item, index) => (
          <Link key={index} to={`/buy-instagram-${item.toLowerCase()}`} className="hover:text-gray-400 transition">
            {item}
          </Link>
        ))}

        <DropdownMenu
          title="Automatic Services"
          isOpen={openDropdown === "automaticServices"}
          toggleOpen={() => handleDropdownToggle("automaticServices")}
          links={[
            { name: "Automatic Likes", path: "/buy-automatic-instagram-likes" },
            { name: "Automatic Views", path: "/buy-automatic-instagram-views" },
          ]}
        />

        <div className="relative">
          <button className="flex items-center hover:text-gray-400 transition" onClick={() => handleDropdownToggle("premiumServices")}>
            Premium Services
            <ChevronDown size={18} className={`ml-1 transition-transform duration-300 ${openDropdown === "premiumServices" ? "rotate-180" : ""}`} />
          </button>

          <div
            className={`absolute left-0 text-white mt-2 bg-black/80 border border-gray-700 rounded-md shadow-lg flex flex-col w-56 z-10 transition-all duration-300 ease-in-out transform origin-top ${
              openDropdown === "premiumServices" ? "opacity-100 scale-100 visible" : "opacity-0 scale-90 invisible"
            }`}
          >
            {[/* Add premium service links as needed */].map((service, index) => (
              <DropdownSubMenu
                key={index}
                title={service.name}
                links={service.links}
                isOpen={activePremiumService === service.name}
                toggleOpen={() => handlePremiumServiceToggle(service.name)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="hidden lg:flex">
        <Link to="/login" className="hover:text-gray-400 transition">Log in</Link>
      </div>

      <button className="lg:hidden text-white z-[999]" onClick={() => setMenuOpen((prevState) => !prevState)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-0 right-0 bg-black/90 w-64 h-full z-[50] transition-transform duration-300 ease-in-out transform ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="relative h-full">
          {/* Show Close button only when sidebar is open */}
          <button
            className={`absolute top-6 right-6 text-white z-[999] transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"}`}
            onClick={() => setMenuOpen(false)}
          >
            <X size={28} />
          </button>

          <div className="flex flex-col items-start px-6 py-12 space-y-6">
            {["Likes", "Views", "Followers"].map((item, index) => (
              <Link key={index} to={`/buy-instagram-${item.toLowerCase()}`} className="text-white text-xl hover:text-gray-400 transition">
                {item}
              </Link>
            ))}

            <DropdownMenu
              title="Automatic Services"
              isOpen={openDropdown === "automaticServices"}
              toggleOpen={() => handleDropdownToggle("automaticServices")}
              links={[
                { name: "Automatic Likes", path: "/buy-automatic-instagram-likes" },
                { name: "Automatic Views", path: "/buy-automatic-instagram-views" },
              ]}
            />

            <div className="relative">
              <button className="flex items-center text-white text-xl hover:text-gray-400 transition" onClick={() => handleDropdownToggle("premiumServices")}>
                Premium Services
                <ChevronDown size={18} className={`ml-1 transition-transform duration-300 ${openDropdown === "premiumServices" ? "rotate-180" : ""}`} />
              </button>

              <div
                className={`absolute left-0 mt-2 text-white bg-black/80 border border-gray-700 rounded-md shadow-lg flex flex-col w-56 z-10 transition-all duration-300 ease-in-out transform origin-top ${
                  openDropdown === "premiumServices" ? "opacity-100 scale-100 visible" : "opacity-0 scale-90 invisible"
                }`}
              >
                {[/* Add premium service links for mobile view */].map((service, index) => (
                  <DropdownSubMenu
                    key={index}
                    title={service.name}
                    links={service.links}
                    isOpen={activePremiumService === service.name}
                    toggleOpen={() => handlePremiumServiceToggle(service.name)}
                  />
                ))}
              </div>
            </div>

            <div className="text-white text-xl">
              <Link to="/login" className="hover:text-gray-400 transition">Log in</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const DropdownMenu = ({ title, isOpen, toggleOpen, links }) => (
  <div className="relative">
    <button className="flex items-center hover:text-gray-400 transition" onClick={toggleOpen}>
      {title}
      <ChevronDown size={18} className={`ml-1 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
    </button>

    <div
      className={`absolute left-0 mt-2 text-white bg-black/80 border border-gray-700 rounded-md shadow-lg flex flex-col w-56 z-10 transition-all duration-300 ease-in-out transform origin-top ${
        isOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-90 invisible"
      }`}
    >
      {links.map((link, index) => (
        <Link key={index} to={link.path} className="px-4 py-2 hover:bg-gray-800 transition">
          {link.name}
        </Link>
      ))}
    </div>
  </div>
);

const DropdownSubMenu = ({ title, links, isOpen, toggleOpen }) => (
  <div className="relative">
    <button className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-800 transition" onClick={toggleOpen}>
      {title}
      <ChevronRight size={16} className={`transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`} />
    </button>

    <div
      className={`absolute top-0 left-full bg-black/80 border border-gray-700 rounded-md shadow-lg flex flex-col w-56 z-10 transition-all duration-300 ease-in-out transform origin-left ${
        isOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-90 invisible"
      }`}
    >
      {links.map((subLink, subIndex) => (
        <Link key={subIndex} to={subLink.path} className="px-4 py-2 hover:bg-gray-800 transition">
          {subLink.name}
        </Link>
      ))}
    </div>
  </div>
);

export default MobileHeader;
