// CardComponent.js
import React from "react";

const RowOfCards = () => {
  const cardContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "500px", // Increased width
    height: "350px", // Increased height
    border: "1px solid #000000", // Border color set to #000000
    borderRadius: "20px", // Increased border radius
    margin: "30px", // Increased margin
    padding: "40px", // Increased padding
    position: "relative",
    textAlign: "center",
    backgroundColor: "#000000", // Background color set to black
    color: "white", // Text color set to white
    borderRight: "1px solid white", // White border on the right side
  };

  const circleStyle = {
    width: "80px", // Increased circle diameter
    height: "80px", // Increased circle diameter
    backgroundColor: "#821BC3", // Circle color set to #821BC3
    borderRadius: "50%",
    position: "absolute",
    top: "20px", // Adjusted top position
    left: "20px", // Adjusted left position
  };
  const buttonStyle = {
    backgroundColor: "red", // Red background color
    color: "white", // White text color
    padding: "10px 20px", // Padding for the button
    borderRadius: "5px", // Border radius for the button
    marginTop: "20px", // Adjusted margin top
    cursor: "pointer", // Cursor style
  };

  return (
    <div style={cardContainerStyle}>
      <div style={circleStyle}></div>
      <h1 style={{ marginTop: "110px" }}>
        SUSTAINABILITY CIRCULARITY SUMMIT 2022
      </h1>
      <p style={{ marginTop: "10px" }}>
        Ignition Action in chemical and plastic industry
      </p>
      <a href="/events/sustainability" target="_blank">
        <button style={buttonStyle}>Read More</button>
      </a>
    </div>
  );
};

export default RowOfCards;
