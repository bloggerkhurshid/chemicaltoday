import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/event49.webp";
const Event49Details = () => {
  return (
    <div className="event-details">
      <h1>Global Refining & Petrochemicals Congress 2025 (GRPC 2025)</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p>
            India’s leading downstream forum shaping the future of refining,
            petrochemicals, and sustainability.
          </p>

          <p>
            <strong>Location: </strong>
            Hotel Le Méridien, New Delhi, India
          </p>
          <p>
            <strong>Start: </strong> 10th July 2025, 08:00 AM
          </p>
          <p>
            <strong>End:</strong> 11th July 2025, 06:00 PM
          </p>
          <p>
            <strong>Contact: </strong>
            Anjali Sharma, Manager Sales
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto: anjali@itenmedia.in"> anjali@itenmedia.in</a>
          </p>
          <p>
            <strong>Phone: </strong>+91 88511 10485
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://refpet.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://refpet.com/
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          The 9th edition of the Global Refining & Petrochemicals Congress (GRPC
          2025), organized by The Energy & Climate Initiatives Society (ENCIS),
          will be held on 10th–11th July 2025 at Le Méridien, New Delhi. With
          the theme “The Next Horizon: Downstream 2030 – Innovations for a
          Low-Carbon Future”, GRPC 2025 will bring together 600+ delegates, 100+
          CXOs, and 60+ speakers to discuss digital transformation, AI,
          hydrogen, circular economy, and advanced process technologies. As
          India’s flagship downstream platform, the congress offers strategic
          insights, collaborative opportunities, and cutting-edge innovations.
          Join policymakers, technology leaders, and global stakeholders to
          explore transformative solutions that will shape a more sustainable,
          efficient, and future-ready refining and petrochemical sector.
        </p>
      </div>
    </div>
  );
};

export default Event49Details;
