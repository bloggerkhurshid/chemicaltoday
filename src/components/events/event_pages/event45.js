import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/event45.jpg";
const Event45Details = () => {
  return (
    <div className="event-details">
      <h1>5th Annual Pharma GMP & Quality Management 2025</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p>Tech-Driven Quality: Redefining Pharma Excellence</p>

          <p>
            <strong>Location: </strong>
            Mumbai
          </p>
          <p>
            <strong>Start: </strong> April 24th 2025, 8:00 AM
          </p>
          <p>
            <strong>End:</strong> April 25th 2025, 5:00 PM
          </p>
          <p>
            <strong>Contact: </strong>
            Shravan Nair
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto: shravan@eminencemedia.in">
              {" "}
              shravan@eminencemedia.in
            </a>
          </p>
          <p>
            <strong>Phone: </strong>+91 7517672770
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://www.gxpqualitymanagement.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.gxpqualitymanagement.com/
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          The pharmaceutical industry is undergoing rapid transformation, with
          an increasing focus on quality, compliance, and innovation in
          manufacturing processes. In this context, Eminence Business Media has
          announced 5th Annual Pharma GMP and Quality Management 2025, scheduled
          for April 24th - 25th, 2025, in the vibrant city Mumbai. The
          conference is co-located with Pharma Quality Excellence Awards 2025.
        </p>
      </div>
    </div>
  );
};

export default Event45Details;
