import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/PM&AC2024.png";
const Event16Details = () => {
  return (
    <div className="event-details">
      <h1>6th Annual Pharma Manufacturing & Automation Convention 2024</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <h5>Advancing Manufacturing: Embracing Automation and Innovation</h5>
          <p>
            <strong>Location:</strong> Hotel Westin Mindspace Hyderabad
          </p>
          <p>
            <strong>Start:</strong> October 17th 2024 & 8.30 AM
          </p>
          <p>
            <strong>End:</strong> October 18th 2024 & 5.30 PM
          </p>
          <p>
            <strong>Contact:</strong>Abhay Dave
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:abhay@eminencemedia.in">abhay@eminencemedia.in</a>
          </p>
          <p>
            <strong>Phone:</strong>+91 7666345961
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://www.manufacturingpharma.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.manufacturingpharma.com/
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          The pharma industry is undergoing a transformative evolution with the
          integration of advanced manufacturing technologies and automation
          systems. <br />
          In the 2-day program 6 th Annual Pharma Manufacturing and Automation
          Convention 2024, focused on embracing automation and innovation;
          leaders, experts, and professionals are set to explore the latest
          trends, challenges, and advancements shaping the future of pharma.
          Eminence Business Media has scheduled the conference for October 17 th
          – 18 th , 2024 at Hotel Westin Mindspace, Hyderabad.
        </p>
      </div>
    </div>
  );
};

export default Event16Details;
