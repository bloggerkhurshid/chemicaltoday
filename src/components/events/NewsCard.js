// CardComponent.js
import React from "react";

const NewsCard = ({ title, description }) => {
  const cardStyle = {
    backgroundColor: "white", // White background color for the card
    padding: "30px", // Padding around the card
    borderRadius: "10px", // Rounded corners for the card
    display: "flex", // Flex layout to align items horizontally
    flexDirection: "column", // Arrange items in a column
    alignItems: "flex-start", // Align items to the start of the column
    maxWidth: "500px", // Maximum width for the card
    height: "350px", // Height of the card
    margin: "auto", // Center the card horizontally
  };

  const grayBlockStyle = {
    width: "100%", // Full width of the card
    height: "200px", // Height of the gray-colored block
    backgroundColor: "#dcdcdc", // Gray color for the block
    marginBottom: "20px", // Spacing below the gray-colored block
  };

  const bigRectangularBlockStyle = {
    width: "70px", // Width of the big rectangular block
    height: "70px", // Height of the big rectangular block
    backgroundColor: "grey", // Grey color for the big rectangular block
    marginBottom: "20px", // Spacing below the big rectangular block
    display: "flex", // Flex layout to align items horizontally
    justifyContent: "center", // Center items horizontally
    alignItems: "center", // Center items vertically
  };

  const titleStyle = {
    color: "white", // Text color for the title
    fontSize: "20px", // Font size for the title
    fontWeight: "bold", // Font weight for the title
  };

  const descriptionStyle = {
    fontSize: "16px", // Font size for the description
  };

  return (
    <div style={cardStyle}>
      <div style={grayBlockStyle}></div>
      <div style={bigRectangularBlockStyle}>
        <h2 style={titleStyle}>{title}</h2>
      </div>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
};

export default NewsCard;
