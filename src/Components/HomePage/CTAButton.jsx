// components/CTAButton.js
import React from "react";
import { Link } from "react-router-dom";

const CTAButton = ({ to, children, variant = "primary" }) => {
  const baseStyles = "font-bold py-4 px-8 rounded-lg shadow-lg transition transform duration-300";
  const variants = {
    primary: "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:scale-105",
    secondary: "border border-gray-600 hover:bg-gray-800 text-white",
  };

  return (
    <Link to={to} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </Link>
  );
};

export default CTAButton;
