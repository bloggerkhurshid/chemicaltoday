import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/Re-source.jpg";
const Event13Details = () => {
  return (
    <div className="event-details">
      <h1>RE-Source 2024</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <h5>Join us at Europe's biggest renewable energy sourcing event!</h5>
          <p>
            <strong>Location:</strong> Amsterdam, The Netherlands
          </p>
          <p>
            <strong>Start:</strong> 24 October 2024
          </p>
          <p>
            <strong>End:</strong> 25 October 2024
          </p>
          <p>
            <strong>Contact:</strong>NUNO BACHAREL
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:n.bacharel@resource-platform.com">
              n.bacharel@resource-platform.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>+32 4 709 10 719
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://resource-platform.eu/events/re-source-2024-event/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://resource-platform.eu/events/re-source-2024-event/
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <strong>RE-Source 2024: Time to Accelerate and Innovate</strong>
        <p>
          The RE-Source conference returns on October 24-25th in Amsterdam, with
          new business and learning opportunities to shape the future of
          corporate renewable energy procurement! Join us and be part of
          Europe's leading forum for clean energy buyers and sellers. We've been
          at the forefront since 2017, fostering collaboration and innovation to
          overcome challenges and accelerate the energy transition.
        </p>
        <p> This year's conference is packed with opportunities:</p>
        <ul>
          <li>Network with 1400+ participants</li>
          <li>
            Learn from and engage with 100+ senior political and industry
            speakers
          </li>
          <li>
            Be a part of the 350+ prescheduled B2B meetings between clean energy
            buyers and suppliers
          </li>
          <li>Connect with 350+ corporate clean energy buyers</li>
        </ul>
      </div>
    </div>
  );
};

export default Event13Details;
