import React, { useState } from "react";
import BlogCard from "./BlogCard";

const BlogsSection = () => {
  const blogs = [
    { id: 1,link:"/Harnessing the Power of Storytelling in Digital Marketing Strategies", category: "Marketing", title: "Harnessing the Power of Storytelling in Digital Marketing Strategies", date: "February 13, 2025", image: "/assets/blogs1.jpg" },
    { id: 2,link:"", category: "Wellness", title: "Tips for Better Rest and Increased Productivity", date: "February 13, 2025", image: "/assets/blogs2.jpg" },
    { id: 3,link:"", category: "Wellness", title: "How to Start Your Day with Intention and Clarity", date: "February 13, 2025", image: "/assets/blogs3.jpg" },
    { id: 4,link:"", category: "Growth Strategy", title: "Maximizing Instagram Engagement and Productivity", date: "February 13, 2025", image: "/assets/blogs4.jpg" },
    { id: 5,link:"", category: "Monetization", title: "Brand Collaboration Guide with Intention and Clarity", date: "February 13, 2025", image: "/assets/blogs5.jpg" },
    { id: 6,link:"", category: "Content Creation", title: "Instagram Content Creation Secrets", date: "February 13, 2025", image: "/assets/blogs6.jpg" },
    { id: 7,link:"", category: "Technology", title: "AI's Impact on Modern Web Development", date: "February 13, 2025", image: "/assets/blogs7.jpg" },
  ];

  const blogsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const shouldShowPagination = blogs.length > 6;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToPage = (pageNumber) => setCurrentPage(pageNumber);
  // bg-[#e7e2d2]
  return (
    <section className="bg-transparent py-10 pt-40">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-100 mb-6">Latest Blogs</h2>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {currentBlogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>

        {/* Pagination - Only Show if More than 6 Blogs */}
        {shouldShowPagination && (
          <div className="flex justify-center mt-6 space-x-2">
            <button
              onClick={prevPage}

              // [#b4a28c]
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg text-gray-900 bg-blue-600 hover:bg-blue-600 transition duration-200 ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => goToPage(index + 1)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === index + 1
                    ? "bg-blue-900 text-blue" // Active page color
                    : "bg-blue-500 text-gray-900 hover:bg-blue-900" // Normal button
                } transition duration-200`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg text-gray-900 bg-blue-600 hover:bg-blue-600 transition duration-200 ${
                currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogsSection;
