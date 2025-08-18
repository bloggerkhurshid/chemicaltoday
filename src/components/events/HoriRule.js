import React from "react";

const HoriRule = ({ text }) => {
  const blockStyle = {
    display: "inline-block",
    minWidth: "150px", // Minimum width to accommodate text
    maxWidth: "calc(100% - 20px)", // Maximum width based on container width and margin
    height: "40px", // Adjust height as needed
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    lineHeight: "40px", // Center text vertically
    margin: "10px auto 0 auto", // Adjusted spacing around block, reduced bottom margin to 0
    fontSize: "20px", // Increase font size
    fontWeight: "bold", // Make text bold
    overflow: "hidden", // Hide overflowing text
    whiteSpace: "nowrap", // Prevent text from wrapping
    textOverflow: "ellipsis", // Add ellipsis (...) to indicate overflow
    position: "relative", // Added for positioning
    top: "10px", // Move block down
  };

  const hrStyle = {
    border: "none",
    borderBottom: "1px solid black", // Horizontal rule style
    width: "91%", // Adjust width of the hr
    margin: "0 auto", // Center the hr
    position: "relative", // Added for positioning
  };

  return (
    <div>
      <div style={blockStyle}>{text}</div>
      <hr style={hrStyle} />
    </div>
  );
};

export default HoriRule;
