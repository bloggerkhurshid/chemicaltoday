import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/event54.png";
const Event54Details = () => {
  return (
    <div className="event-details">
      <h1>Asian Chemicals Forum 2025</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p>
            The <strong>Asian Chemicals Forum (ACF)</strong> is the leading
            platform for discussions on chemical safety management, regulatory
            compliance, and sustainable industry practices across Asia.
          </p>

          <p>
            <strong>Location: </strong>
            ITC Maratha, Mumbai, India
          </p>
          <p>
            <strong>Start: </strong> 8<sup>th</sup> October 2025 / 9.30 to 19.30
            IST
          </p>
          <p>
            <strong>End:</strong> 9<sup>th</sup> October 2025 / 9.30 to 19.00
            IST
          </p>
          <p>
            <strong>Contact: </strong>
            Jagadish Ladawa
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto: jagadish@in.gpcregulatory.com">
              {" "}
              jagadish@in.gpcregulatory.com
            </a>
          </p>
          <p>
            <strong>Phone: </strong>8446635600
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://asianchemicalsforum.com/?utm_source=chemicaltoday.in&utm_medium=referral&utm_campaign=2025_10_ACF"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://asianchemicalsforum.com/?utm_source=chemicaltoday.in&utm_medium=referral&utm_campaign=2025_10_ACF
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          The Asian Chemicals Forum returns to Mumbai on October 8-9, 2025, at
          ITC Maratha, bringing together industry leaders, government officials,
          NGOs, and academics to address critical chemical safety challenges
          across Asia.{" "}
          <strong>
            Co-organized by the Regulatory Representatives and Managers
            Association (RRMA) and Helsinki Chemicals Forum,
          </strong>{" "}
          this premier gathering features expert keynote presentations,
          interactive panel discussions, and strategic networking opportunities.
        </p>
        <p>
          Participants will explore regulatory developments, sustainability
          innovations, and emerging safety protocols shaping the chemical
          industry landscape. The forum provides an invaluable platform for
          cross-sector collaboration, knowledge exchange, and relationship
          building among stakeholders committed to advancing responsible
          chemical management practices throughout Asian markets.
        </p>
        <p>
          Registration includes access to specialized sessions, networking time,
          and the Compliance Expo Asia.
        </p>
      </div>
    </div>
  );
};

export default Event54Details;
