import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/event40.png";
const Event40Details = () => {
  return (
    <div className="event-details">
      <h1>CPHI & PMEC China 2025</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p>
            CPHI & PMEC China is Asia's premier pharmaceutical event for
            sourcing, networking, learning and innovation with over 20 years'
            experience of bringing together Chinese and global pharma
            professionals.
          </p>

          <p>
            <strong>Location: </strong>
            Shanghai New International Expo Centre (SNIEC), Shanghai, China
          </p>
          <p>
            <strong>Start: </strong> 24 June 2025
          </p>
          <p>
            <strong>End:</strong> 26 June 2025
          </p>
          <p>
            <strong>Contact: </strong>
            Floy Huang
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto: floy.huang@informa.com"> floy.huang@informa.com</a>
          </p>
          <p>
            <strong>Phone: </strong>021 3339 2169
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="http://www.cphi.com/china"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.cphi.com/china{" "}
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          In 2025, CPHI & PMEC China will be held in 24-26 June 2025 at SNIEC
          (Shanghai New International Expo Centre), Shanghai, China.
          <br />
          CPHI & PMEC China 2025 will cover more than 230,000 square meters of
          exhibition area, attract over 90,000 global attendees and 3,500
          exhibitors, and hold more than 100 conferences during the exhibition.
          <br />
          CPHI & PMEC China 2025 showcases a wide range of pharmaceutical
          products and services, including: active pharmaceutical ingredients,
          Intermediates & fine chemicals, excipients, finished dosage
          formulation, biopharmaceuticals, natural extracts, CMO & CRO,
          machinery & equipment, packaging & drug delivery, laboratory
          equipment, cleanroom & pollution control and etc.
        </p>
      </div>
    </div>
  );
};

export default Event40Details;
