import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/event19.jpg";
const Event19Details = () => {
  return (
    <div className="event-details">
      <h1>CII’s Water & Waste Expo 2025</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p></p>
          <h5 className="subheading-description">
            India’s leading fair for water, sewage, waste & recycling.
          </h5>
          <p>
            <strong>Location:</strong> Pragati Maidan New Delhi
          </p>
          <p>
            <strong>Start:</strong> 20/02/2025 (10:00 AM)
          </p>
          <p>
            <strong>End:</strong> 22/02/2025 (06:00 PM)
          </p>
          <p>
            <strong>Contact:</strong>Amit Sharma
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:amit.sharma@cii.in">amit.sharma@cii.in</a>
          </p>
          <p>
            <strong>Mob:</strong>+91 9818391920
          </p>

          <p>
            <strong>Website:</strong>{" "}
            <a
              href="http://www.watersolidwaste.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.watersolidwaste.in/
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          CII’s Water & Waste Expo is the most important B2B platform with a
          wide coverage of all relevant environmental sectors including water,
          sewage, refuse, recycling and energy conservation management in India.
          <br />
          The event would take place at New Delhi - the power centre of India.
          While the exhibition will focus on technology providers, the
          concurrent conference at CII’s Water & Waste Expo will bring together
          policy makers, municipal corporations, local governments agencies and
          change makers to discuss key national and topical issues concerning
          the environment.
        </p>
      </div>
    </div>
  );
};

export default Event19Details;
