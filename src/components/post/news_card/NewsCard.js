import React from "react";
import "./newscard.css"; // Ensure your CSS file is correctly imported
import { Link } from "react-router-dom";

const NewsCard = ({
  widthInPer = "45%",
  posts,
  isActive,
  link_page = "/post",
}) => {
  const linkStyle = {
    textDecoration: "none", // Remove underline from the link
    color: "inherit", // Inherit color from parent
  };

  console.log("sad");
  console.log(widthInPer);
  return (
    <>
      {posts.map((post) => (
        <Link
          key={post.id}
          to={`/news/${post.news_type}/${post.id}/${post.title}`}
          className="news-card"
          style={{ height: "350px", width: widthInPer }}
        >
          <img
            src={post.thumbnail_image_url}
            alt={post.title}
            className="news-card-image"
          />
          <div className="news-img-text">
            <p className="news-text">
              {new Date(post.published_date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
          <div className="news-all-text">
            <p className="news-overlay-text">
              {post.title.length > 100
                ? post.title.substring(0, 100) + "..."
                : post.title}
            </p>
            <p style={{ opacity: "0.7", marginTop: "-12px" }}>Chemical Today</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default NewsCard;
