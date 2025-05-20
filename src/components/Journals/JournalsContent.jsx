import React from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Weaving the Future: Smart Textiles and Sustainable Innovation",
    date: "April 23, 2025",
    author: "Admin",
    image: "/assets/img/blog/textile01.jpg",
    link: "/blog/textile01",
  },
  {
    id: 2,
    title: "Top Trends in the Textile Industry You Need to Know in 2025",
    date: "April 10, 2025",
    author: "Admin",
    image: "/assets/img/blog/textile02.jpg",
    link: "/blog/textile02",
  },
  {
    id: 3,
    title: "From Fiber to Fabric: Innovations in Textile Manufacturing",
    date: "March 30, 2025",
    author: "Admin",
    image: "/assets/img/blog/textile03.jpg",
    link: "/blog/textile03",
  },
  {
    id: 4,
    title: "Designing Tomorrow: How Technology is Shaping Textile Design",
    date: "March 15, 2025",
    author: "Admin",
    image: "/assets/img/blog/textile04.jpg",
    link: "/blog/textile04",
  },
  {
    id: 5,
    title: "Sustainability in Fashion: The Role of Eco-Friendly Textiles",
    date: "February 28, 2025",
    author: "Admin",
    image: "/assets/img/blog/textile05.jpg",
    link: "/blog/textile05",
  },
  {
    id: 6,
    title: "Global Supply Chains and the Future of Textile Production",
    date: "February 10, 2025",
    author: "Admin",
    image: "/assets/img/blog/textile06.jpg",
    link: "/blog/textile06",
  },
];

function JournalsContent() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className={`bg-white rounded-lg overflow-hidden shadow transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl animate-fadeIn`}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 space-x-4 mb-3">
                  <span className="flex items-center">
                    <i className="fas fa-user mr-1 text-gray-400"></i>
                    {post.author}
                  </span>
                  <span className="flex items-center">
                    <i className="far fa-calendar-alt mr-1 text-gray-400"></i>
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 hover:text-[#1fa951]">
                  <Link to={post.link}>{post.title}</Link>
                </h3>
                <Link
                  to={post.link}
                  className="text-[#1fa951] font-medium hover:underline inline-flex items-center"
                >
                  Read More
                  <i className="ti-angle-right ml-2"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Pagination */}
        <div className="flex justify-center mt-10">
          {/* Pagination disabled for now */}
        </div>
      </div>
    </section>
  );
}

export default JournalsContent;
