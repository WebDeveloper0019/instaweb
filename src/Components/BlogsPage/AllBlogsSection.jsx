import React, { useState } from "react";
import BlogCard from "./BlogCard";

const AllBlogsSection = () => {
  const blogs = [
    {
      id: 1,
      category: "Marketing",
      title: "Harnessing the Power of Storytelling in Digital Marketing Strategies",
      date: "February 13, 2025",
      image: "/assets/blogs1.jpg",
    },
    {
      id: 2,
      category: "Wellness",
      title: "Tips for Better Rest and Increased Productivity",
      date: "February 13, 2025",
      image: "/assets/blogs2.jpg",
    },
    {
      id: 3,
      category: "Wellness",
      title: "How to Start Your Day with Intention and Clarity",
      date: "February 13, 2025",
      image: "/assets/blogs3.jpg",
    },
    {
      id: 4,
      category: "Growth Strategy",
      title: "Maximizing Instagram Engagement and Productivity",
      date: "February 13, 2025",
      image: "/assets/blogs4.jpg",
    },
    {
      id: 5,
      category: "Monetization",
      title: "Brand Collaboration Guide with Intention and Clarity",
      date: "February 13, 2025",
      image: "/assets/blogs5.jpg",
    },
    {
      id: 6,
      category: "Content Creation",
      title: "Instagram Content Creation Secrets Clarity",
      date: "February 13, 2025",
      image: "/assets/blogs6.jpg",
    },
    {
      id: 7,
      category: "Social Media",
      title: "Understanding Algorithm Changes in 2025",
      date: "February 14, 2025",
      image: "/assets/blogs7.jpg",
    },
  ];

  const blogsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  // [#e7e2d2]
  return (
    <section className="bg-transparent py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-100 mb-6">All Blogs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {currentBlogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
        
        {blogs.length > blogsPerPage && (
          <div className="flex justify-center mt-8">
            <button
              className={`px-4 py-2 mx-2 rounded-lg shadow-lg ${
                currentPage === 1 ? "bg-gray-400 opacity-50 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-600"
              }`}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              Previous
            </button>
            <span className="px-4 text-gray-400 py-2 font-semibold">Page {currentPage} of {totalPages}</span>
            <button
              className={`px-4 py-2 mx-2 rounded-lg shadow-lg ${
                currentPage === totalPages ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-600"
              }`}
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllBlogsSection;
