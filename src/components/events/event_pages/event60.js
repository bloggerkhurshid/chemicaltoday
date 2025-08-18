import React from "react";
import "./Event1Details.css";
import eventimage from "../../../assets/events/event60.png";
const Event60Details = () => {
  return (
    <div className="event-details">
      <h1>
        The 4<sup>th</sup> Asia Green Packaging Innovation Summit 2025
      </h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p>
            From Material Revolution to Recycling Innovation:Building a
            Zero-Waste Consumption Ecosystem
          </p>
          <p>
            <strong>Location: </strong>
            Singapore
          </p>
          <p>
            <strong>Start: </strong> November 13, 2025
          </p>
          <p>
            <strong>End:</strong> November 14, 2025
          </p>
          <p>
            <strong>Contact: </strong>
            BRITNEY
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="marketing@ecvinternational.com">
              marketing@ecvinternational.com
            </a>
          </p>
          <p>
            <strong>Phone Number : </strong>
            +86 13271915990
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://www.ecv-events.com/GPIS2025?cci=16"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.ecv-events.com/GPIS2025?cci=16
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          With the growing problem of plastic pollution in Asia, green packaging
          has become a core driver of industrial transformation. The 4th Asia
          Green Packaging Innovation Summit 2025 will be held in Singapore on
          November 13-14, bringing together experts across the supply chain to
          share innovative technologies, policy trends, and business best
          practices, driving the transition toward sustainable packaging
          solutions in the region.
        </p>
      </div>
    </div>
  );
};

export default Event60Details;
