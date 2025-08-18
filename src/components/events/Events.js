// CombinedComponent.js
import React from "react";

const Events = () => {
  // Inline CSS styles
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start", // Adjust alignment as needed
    padding: "80px", // Increase padding for larger dimensions
    border: "1px solid black",
    maxWidth: "100%", // Adjust width as needed
    backgroundColor: "#821BC3",
  };

  const leftSideStyle = {
    textAlign: "left",
    flex: 1, // Let the left side take available space
    color: "white",
  };

  const buttonStyle = {
    //marginTop: '20px', // Increase space between the text and the button
    marginTop: "20px", // Increase space between the text and the button
    backgroundColor: "#821BC3", // Button color set to #821BC3
    border: "2px solid white", // Button border color set to white
    padding: "15px 30px", // Adjusted button padding
    fontSize: "16px", // Adjusted font size
    color: "white", // Text color set to white
    borderRadius: "10px", // Button border radius
    cursor: "pointer", // Cursor style set to pointer
  };

  const rightSideStyle = {
    display: "flex",
    flexDirection: "row",
    marginTop: "145px",
  };

  const smallBlockStyle = {
    display: "inline-block",
    margin: "0 15px", // Increase space around small blocks
    padding: "30px", // Increase padding for larger dimensions
    border: "1px solid black",
    borderRadius: "10px", // Rounded corners added
    textAlign: "center",
    backgroundColor: "white",
  };

  // Function to render small blocks to avoid repetition
  const renderSmallBlock = (text) => <div style={smallBlockStyle}>{text}</div>;

  return (
    <div style={containerStyle}>
      <div style={leftSideStyle}>
        <div>
          <p style={{ fontWeight: "bold", fontSize: "18px" }}>WEBINAR ON</p>
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "24px",
              marginBottom: "5px",
            }}
          >
            Simulating Corrosion & Corrosion
          </h1>
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "24px",
              marginBottom: "5px",
            }}
          >
            Protection for Oil And Gas Equipment
          </h1>
          <h3 style={{ fontSize: "18px" }}>
            March 10th 2024 (11:00 am to 1:00 pm)
          </h3>
        </div>
        <button style={buttonStyle}>Join Now</button>
      </div>
      <div style={rightSideStyle}>
        {renderSmallBlock("10 March")}
        {renderSmallBlock("11 March")}
        {renderSmallBlock("12 March")}
        {renderSmallBlock("11:00 am")}
      </div>
    </div>
  );
};

export default Events;
