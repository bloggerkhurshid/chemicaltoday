import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/event55.png";
const Event55Details = () => {
  return (
    <div className="event-details">
      <h1>Asia Bio-based Plastics Summit 2025</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p>
            Unlocking Tropical Resources: Building a Low-Cost, High-Performance,
            and Sustainable Bio-based Plastics Ecosystem
          </p>

          <p>
            <strong>Location: </strong>
            Singapore
          </p>
          <p>
            <strong>Start: </strong> October 30, 2025
          </p>
          <p>
            <strong>End:</strong> October 31, 2025
          </p>
          <p>
            <strong>Contact: </strong>
            Britney
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:marketing@ecvinternational.com">
              {" "}
              marketing@ecvinternational.com
            </a>
          </p>
          <p>
            <strong>Phone: </strong>8613271915990
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://www.ecv-events.com/ABPS2025?cci=16"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.ecv-events.com/ABPS2025?cci=16
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          This summit aims to bring together global industry leaders, research
          experts, policymakers, and investment institutions to jointly explore
          technological breakthroughs, market trends, policy support, and
          commercialization pathways for bio-based plastics in Asia. Through
          keynote speeches, panel discussions, and case studies, the summit will
          provide participants with in-depth insights and collaboration
          opportunities, accelerating the region’s transition toward a
          low-carbon circular economy and contributing to global sustainable
          development goals.
        </p>
      </div>
    </div>
  );
};

export default Event55Details;
