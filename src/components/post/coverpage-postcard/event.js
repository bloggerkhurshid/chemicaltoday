import React from "react";
import "../post_card/post_card.css";
import { Link } from "react-router-dom";

const Events = ({
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

        return (
          <Link
            key={post.id}
            to={`/events`}
            className="post-card"
            style={{ height: "280px", width: "45%" }}
          >
            <div
              style={{
                width: "100%",
                height: "290px",
                backgroundColor: "grey",
              }}
            ></div>{" "}
            <div className="img-text">
              <p className="text">{truncatedTitle}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Events;
