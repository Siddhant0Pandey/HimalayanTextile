import React from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Building a Better Tomorrow with Smart Construction Solutions",
    date: "April 23, 2025",
    author: "Admin",
    image: "/blog/blog01.jpg",
    link: "/blog/blog01",
  },
  {
    id: 2,
    title: "Your Trusted Source for Construction News and Industry Trends",
    date: "April 10, 2025",
    author: "Admin",
    image: "/blog/blog02.jpg",
    link: "/blog/blog02",
  },
  {
    id: 3,
    title: "HExpert Insights on Modern Construction Methods and Innovation",
    date: "March 30, 2025",
    author: "Admin",
    image: "/blog/blog03.jpeg",
    link: "/blog/blog03",
  },
  {
    id: 4,
    title: "Discover the Latest Developments in Construction and Design",
    date: "March 15, 2025",
    author: "Admin",
    image: "/blog/blog04.jpg",
    link: "/blog/blog04",
  },
  {
    id: 5,
    title: "Guiding You Through Every Step of Your Construction Journey",
    date: "February 28, 2025",
    author: "Admin",
    image: "/blog/blog05.jpg",
    link: "/blog/blog05",
  },
  {
    id: 6,
    title: "Where Construction Expertise Meets Real World Experience",
    date: "February 10, 2025",
    author: "Admin",
    image: "/blog/blog06.jpg",
    link: "/blog/blog06",
  },
];

function JournalsContent() {
  return (
    <section className="blog-area gray-bg pt-120 pb-90">
      <div className="container">
        <div className="row">
          {blogPosts.map((post) => (
            <div className="col-xl-4 col-lg-4 col-md-6" key={post.id}>
              <div className="single-blog mb-30">
                <div className="blog-thumb">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="uniform-img"
                  />
                </div>
                <div className="b-content">
                  <div className="b-meta mb-10">
                    <span>
                      <Link to="#">
                        <i className="fas fa-user"></i>
                      </Link>
                      {post.author}
                    </span>
                    <span>
                      <Link to="#">
                        <i
                          className="far fa-calendar-alt"
                          style={{ paddingLeft: "20px" }}
                        ></i>{" "}
                        {post.date}
                      </Link>
                    </span>
                  </div>
                  <div className="b-text mb-15">
                    <h3>
                      <Link to={post.link}>{post.title}</Link>
                    </h3>
                  </div>
                  <div className="b-btn">
                    <Link to={post.link}>
                      Read More <i className="ti-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Section */}
        <div className="row">
          <div className="col-12">
            <div className="basic-pagination text-center mt-35">
              {/* <ul>
                <li>
                  <Link to="#">
                    <i className="fas fa-angle-double-left"></i>
                  </Link>
                </li>
                <li className="active">
                  <Link to="#">01</Link>
                </li>
                <li>
                  <Link to="#">02</Link>
                </li>
                <li>
                  <Link to="#">03</Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fas fa-ellipsis-h"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fas fa-angle-double-right"></i>
                  </Link>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JournalsContent;
