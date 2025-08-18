import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/event30.png";
const Event30Details = () => {
  return (
    <div className="event-details">
      <h1>PharmaTech & LabTech Expo 2025</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <h5>SPECTRUM OF PHARMA, LAB, LIFE SCIENCE & BIOTECH EXPO</h5>
          <p>
            <strong>Location:</strong> Bengaluru Exhibition Center (BIEC),
            Bengaluru, Karnataka, India
          </p>
          <p>
            <strong>Start:</strong> 08 January 2025, 10:00AM
          </p>
          <p>
            <strong>End:</strong> 10 January 2025, 06:00PM
          </p>
          <p>
            <strong>Contact:</strong>Mr. Manan Doshi
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:manan@pharmatechnologyindex.com">
              manan@pharmatechnologyindex.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>+91 9377235673
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://pharmatechexpo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://pharmatechexpo.com/
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        PharmaTechnologyindex.com Pvt. Ltd. provides technological platform to
        buyers and sellers. PharmaTechnologyindex.com Pvt Ltd has successfully
        organised India’s Premier PharmaTech Expo & LabTech Expo at Ahmedabad,
        Gandhinagar, Chandigarh, Bengaluru, Mumbai and Indore. PharmaTech Expo &
        LabTech expo is proven platform to find world class technology and cost
        effective solutions for pharmaceutical productions. We aim to provide
        best services and focus to deliver latest technology to the industry
        through constant innovations and technology up gradation.
      </div>
    </div>
  );
};

export default Event30Details;
