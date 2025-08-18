import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/IDS25.png";
const Event17Details = () => {
  return (
    <div className="event-details">
      <h1>Industrial Decarbonization Summit - Road to Net Zero (IDS)</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p></p>
          <h5 className="subheading-description">
            The Summit will focus on variety of research topics related to
            decarbonization, Climate Change including their management, Policy
            issues and Sustainability etc.
          </h5>
          <p>
            <strong>Location:</strong> LE MÉRIDIEN NEW DELHI
          </p>
          <p>
            <strong>Start:</strong> 15-January-2025 / 08:30 HRS
          </p>
          <p>
            <strong>End:</strong> 15-January-2025 / 17:00 HRS
          </p>
          <p>
            <strong>Contact:</strong>Shalinder Chauhan
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:sc@trisamamedia.com">sc@trisamamedia.com</a>
          </p>
          <p>
            <strong>Phone:</strong>+91 97112 41886
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://idssummit.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://idssummit.com/
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          The Summit will focus on variety of research topics related to
          decarbonization, Climate Change including their management, Policy
          issues and Sustainability etc. Considering the urgent need of sharing
          the climate information and knowledge among academia, researchers,
          regulatory bodies, policy makers, industry, business, concerned
          government department and public at large to learn from each other,
          identify the promising technologies/ best practices.
          <br /> To address above issues, the “Industrial Decarbonization Summit
          - Road to Net Zero”, is being organised on 15 January 2025 at New
          Delhi.
        </p>
      </div>
    </div>
  );
};

export default Event17Details;
