import React from "react";

const Upcoming = ({ title, description, buttonText }) => {
  const divBlockStyle = {
    backgroundColor: "#821BC3", // Background color of the div block
    color: "white", // Text color
    padding: "20px", // Padding around the content
    display: "flex", // Flex layout to align items vertically
    flexDirection: "column", // Arrange items in a column
    alignItems: "flex-start", // Align items to the start of the column
    width: "100%", // Width of the div block
    height: "300px", // Height of the div block
    marginTop: "20px", // Adjusted margin top to move the component down
  };

  const buttonStyle = {
    backgroundColor: "white", // Background color of the button
    color: "#821BC3", // Text color of the button
    padding: "10px 20px", // Padding around the button text
    border: "none", // Remove border
    borderRadius: "5px", // Add border radius
    marginTop: "10px", // Spacing above the button
    cursor: "pointer", // Cursor style
  };

  const paragraphStyle = {
    wordWrap: "break-word", // Wrap long words onto the next line
    width: "80%", // Width of the paragraph (updated to 50%)
  };

  return (
    <div style={divBlockStyle}>
      <h1>{title}</h1>
      <p style={paragraphStyle}>{description}</p>
      <button style={buttonStyle}>{buttonText}</button>
    </div>
  );
};

export default Upcoming;
