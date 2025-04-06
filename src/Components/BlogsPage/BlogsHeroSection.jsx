import React from "react";

const BlogsHeroSection = () => {
  return (
    <div className="relative opacity-90 w-full mb-36 h-[600px] pb-12 top-36 flex items-center justify-center text-center bg-cover bg-center" 
  style={{ backgroundImage: "url('/assets/BlogsBanner.jpg')" }}

>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-white">
        <h1  className="text-4xl   sm:text-5xl font-bold">Adventures, Stories & Insights Await</h1>
        <p className="mt-4 text-lg text-gray-200">
          Welcome to the heart of my blog, where stories of exploration, innovation, and personal growth come to life.
        </p>
      </div>
      
   
    </div>
  );
};

export default BlogsHeroSection;
