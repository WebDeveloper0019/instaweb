
import React from "react";

const BlogPost = () => {
  return (
    <div className="bg-transparent pt-36 min-h-screen py-10 px-4 md:px-20">
      {/* Blog Post Section */}
      <div className="max-w-6xl mx-auto bg-gray-300 p-6 rounded-lg shadow-lg">
        <img
          src="/assets/blogs2.jpg"
          alt="Blog Post"
          className="rounded-lg w-full"
        />
        <h1 className="text-xl font-bold mt-4">
          Harnessing the Power of Storytelling in Digital Marketing Strategies
        </h1>
        <p className="text-sm text-gray-600">Published on February 2025</p>
        <p className="mt-4 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id velit lorem...
        </p>
        <hr className="my-4 border-gray-300" />
        <div className="flex justify-between text-sm">
          <a href="#" className="dark-brown">Previous Post</a>
          <a href="#" className="dark-brown">Next Post</a>
        </div>
      </div>

      {/* Related Posts Section */}
      <div className="max-w-6xl mx-auto bg-gray-300 p-6 rounded-lg shadow-lg mt-10">
        <h2 className="text-lg  font-bold">Related Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src="/assets/blogs2.jpg"
              alt="Related Post 1"
              className="rounded-lg w-full"
            />
            <h3 className="mt-2 font-semibold">Top Tech Tools Every Marketing Professional Should Master</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src="/assets/blogs3.jpg"
              alt="Related Post 2"
              className="rounded-lg w-full"
            />
            <h3 className="mt-2 font-semibold">Navigating Social Media Trends: What Marketers Need to Know in 2025</h3>
          </div>
        </div>
      </div>

      {/* Comment Section */}
      <div className="max-w-6xl mx-auto bg-gray-300 p-6 rounded-lg shadow-lg mt-10">
        <h2 className="text-lg font-bold">Leave a Comment</h2>
        <textarea
          className="w-full border-black-400 p-2 mt-2 border rounded-lg"
          placeholder="Type here..."
          rows="4"
        ></textarea>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <input
            type="text"
            placeholder="Name*"
            className="p-2 border border-black-400 rounded-lg"
          />
          <input
            type="email"
            placeholder="Email*"
            className="p-2 border border-black-400 rounded-lg"
          />
          <input
            type="text"
            placeholder="Service*"
            className="p-2 border border-black-400 rounded-lg"
          />
        </div>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
          Post Comment
        </button>
      </div>
    </div>
  );
};

export default BlogPost;


