import React from "react";

const Add = ({ imageUrl }) => {
  const containerStyle = {
    width: "100%", // Ensure the container takes the full width of its parent
    height: "100%", // Reduced height of the container
    position: "relative", // Ensure the image is positioned relative to the container
    overflow: "hidden", // Hide any overflowing content
  };

  const imageStyle = {
    width: "80%", // Ensure the image takes the full width of the container
    objectFit: "cover", // Fit the image inside the container, maintaining its aspect ratio
    margin: "5%",
  };

  return (
    <div style={containerStyle}>
      <img src={imageUrl} alt="Image" style={imageStyle} />
    </div>
  );
};

export default Add;
