import React from 'react'
import { Link } from 'react-router-dom'
import { blogPosts } from "../data/homeData";

function Blog() {
  return (
<div className="flex flex-col items-center gap-8">
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            {blogPosts.map((post) => (
              <div
                key={post}
                className="bg-white w-full hover:scale-105 transition ease-in  sm:w-[334px] rounded-lg shadow-md p-2 flex flex-col items-center"
              >
                <img
                  src={post.image}
                  alt={post.heading}
                  className="w-full h-40 object-cover rounded mb-3"
                />
                <span className="text-gray-700 font-medium capitalize">
                  {post.heading}
                </span>
              </div>
            ))}
          </div>
          <Link
            to="/blogs"
            className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all active:scale-95 focus:scale-95"
          >
            View All Blogs
          </Link>
        </div>  )
}

export default Blog