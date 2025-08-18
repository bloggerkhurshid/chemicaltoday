import React from "react";
import "../post_card/post_card.css";
import { Link } from "react-router-dom";

const CPPostCard = ({
  widthInPer = "45%",
  posts,
  isActive,
  link_page = "/post",
}) => {
  const linkStyle = {
    textDecoration: "none", // Remove underline from the link
    color: "inherit", // Inherit color from parent
  };

  return (
    <>
      {posts.map((post) => {
        // Truncate title and content if they exceed 80 characters
        const truncatedTitle =
          post.title.length > 80
            ? post.title.substring(0, 80) + "..."
            : post.title;
        const truncatedContent =
          post.content.length > 80
            ? post.content.substring(0, 80) + "..."
            : post.content;

        return (
          <Link
            key={post.id}
            to={`${link_page}/${post.id}`}
            className="post-card"
            style={{ height: "380px", width: "45%" }}
          >
            <img
              src={post.thumbnail_image_url}
              alt={post.heading}
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">{truncatedTitle}</p>
            </div>
            <p className="overlay-text">{truncatedContent}</p>
          </Link>
        );
      })}
    </>
  );
};

export default CPPostCard;
