import React from "react";
import "./post_card.css"; // Ensure your CSS file is correctly imported
import { Link } from "react-router-dom";

const PostCard = ({
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
          to={`${link_page}/${post.id}`}
          className="post-card"
          style={{ height: "380px", width: widthInPer }}
        >
          <img
            src={post.thumbnail_image_url}
            alt={post.heading}
            className="post-card-image"
          />
          <div className="img-text">
            <p className="text">{post.title}</p>
          </div>
          <p className="overlay-text">{post.content}</p>
        </Link>
      ))}
    </>
  );
};

export default PostCard;
