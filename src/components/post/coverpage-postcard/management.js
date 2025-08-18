import React from "react";
import "../post_card/post_card.css";
import { Link } from "react-router-dom";

const ManagPostCard = ({
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
          post.title.length > 40
            ? post.title.substring(0, 40) + "..."
            : post.title;
        const truncatedContent =
          post.content.length > 40
            ? post.content.substring(0, 40) + "..."
            : post.content;

        return (
          <Link
            key={post.id}
            to={`${link_page}/${post.id}`}
            className="post-card"
            style={{ height: "100px", width: "45%", marginRight: "12px" }}
          >
            <img
              src={post.thumbnail_image_url}
              alt={post.heading}
              className="post-card-image"
              style={{ height: "120px" }}
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

export default ManagPostCard;
