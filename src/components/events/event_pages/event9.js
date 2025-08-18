import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/Biopolymer_Summit.jpg";
const Event9Details = () => {
  return (
    <div className="event-details">
      <h1>North American Biopolymer Summit</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p>
            At this Summit collaboration and innovation will take centre stage
            as we work together to propel the industry forward.
          </p>
          <p>
            <strong>Location:</strong> Cleveland, Ohio-USA
          </p>
          <p>
            <strong>Start:</strong> 2nd October 2024
          </p>
          <p>
            <strong>End:</strong> 3rd October 2024
          </p>
          <p>
            <strong>Contact:</strong>
            Hayden De Menezes
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto: h.demenezes@acieu.net "> h.demenezes@acieu.net</a>
          </p>
          <p>
            <strong>Phone:</strong>+44 (0)203 141 0607
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://www.wplgroup.com/aci/event/biopolymer-summit-usa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.wplgroup.com/aci/event/biopolymer-summit-usa/
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          The North American Biopolymer Summit 2024 serves as a premier platform
          for addressing the most pressing issues facing the biopolymer industry
          today. From market analysis and regulatory landscapes to technological
          advancements and sustainability initiatives, our comprehensive agenda
          will cover a wide array of topics, ensuring that attendees gain
          valuable insights and actionable strategies to drive success in this
          rapidly evolving sector. Throughout the summit, participants will have
          the opportunity to delve into key themes, including North American
          market analysis and challenges, regulatory and policy landscapes,
          technology and research development, and market strategies comparison.
          Additionally, we will explore innovations in biomanufacturing, market
          diversification strategies, advancements in sustainable materials, and
          biopolymer production and engineering.
        </p>
      </div>
    </div>
  );
};

export default Event9Details;
