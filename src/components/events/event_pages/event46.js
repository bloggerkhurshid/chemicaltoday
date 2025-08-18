import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/event46.jpg";
const Event46Details = () => {
  return (
    <div className="event-details">
      <h1>Pharma Quality Excellence Awards 2025</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p>
            Theme: P.R.I.D.E. - Performance, Reliability, Innovation,
            Development, and EHS
          </p>

          <p>
            <strong>Location: </strong>
            Mumbai
          </p>
          <p>
            <strong>Start: </strong> April 25th 2025, 7:00 PM
          </p>
          <p>
            <strong>End:</strong> April 25th 2025, 10:00 PM
          </p>
          <p>
            <strong>Contact: </strong>
            Abhay Dave
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto: abhay@eminencemedia.in"> abhay@eminencemedia.in</a>
          </p>
          <p>
            <strong>Phone: </strong>+91 7666345961
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://thepharmaawards.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://thepharmaawards.com/
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          After a successful edition of the maiden award ceremony in 2024,
          Eminence is thrilled to announce the Pharma Quality Excellence Awards
          2025, taking place on April 25th, 2025, in conjunction with the 5th
          Annual Pharma GMP and Quality Management 2025 conference in Mumbai.
          This award ceremony is dedicated to recognizing the outstanding
          contributions of quality teams within the pharmaceutical industry. The
          theme for this year’s awards is P.R.I.D.E.; which stands for
          Performance, Reliability, Innovation, Development, and EHS
          (Environmental, Health, and Safety).
        </p>
      </div>
    </div>
  );
};

export default Event46Details;
