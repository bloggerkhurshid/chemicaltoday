import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/event50.png";
const Event50Details = () => {
  return (
    <div className="event-details">
      <h1>ADIPEC</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p>
            ADIPEC will unite industries and innovators to reframe the global
            energy narrative, unleashing the power of positive energy to drive
            humanity’s next era of progress
          </p>

          <p>
            <strong>Location: </strong>
            ADNEC, Abu Dhabi
          </p>
          <p>
            <strong>Start: </strong> 3 November, 2025: 10AM - 6PM
          </p>
          <p>
            <strong>End:</strong> 6 November, 2025: 10AM - 5PM
          </p>
          <p>
            <strong>Contact: </strong>
            ADIPEC Team
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto: enquiry@adipec.com"> enquiry@adipec.com</a>
          </p>
          <p>
            <strong>Phone: </strong>+971 2 4444909
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://bit.ly/3G9ubT0"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://bit.ly/3G9ubT0
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          ADIPEC will take place from 3-6 November 2025 in Abu Dhabi, UAE,
          exploring the power of energy in accelerating an economy-wide
          transformation that delivers for people, the planet and our collective
          prosperity. <br />
          The ADIPEC Conferences will feature over 380 sessions across two
          tracks – Strategic and Technical – and explore the intersection of the
          three powerful forces reshaping our future: the economic opportunities
          of the Global South, the transformation of global energy systems and
          the unprecedented rise of AI.
          <br />
          The exhibition will showcase over 2,250 exhibitors across 17 halls,
          including four specialised zones for decarbonisation, maritime &
          logistics, and AI, alongside the new Future of Energy Zone.
          <br />
          ADIPEC 2025 expects over 205,000 attendees, offering unparalleled
          opportunities for collaboration, innovation, and progress.
        </p>
      </div>
    </div>
  );
};

export default Event50Details;
