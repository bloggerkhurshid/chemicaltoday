import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/plastics.png";
const Event11Details = () => {
  return (
    <div className="event-details">
      <h1>The 2nd European Sustainable Plastics Summit 2024</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p>
            <strong></strong>
          </p>
          <p>
            The 2nd European Sustainable Plastics Summit 2024 (ESPS 2024) will
            gather key stakeholders, industry leaders, policymakers, and experts
            from across the plastics value chain, aiming to be a catalyst for
            positive change by fostering collaboration, innovation, and
            actionable insights to address the challenges and opportunities in
            reshaping the future of plastics.
          </p>
          <p>
            <strong>Location:</strong>Frankfurt, Germany
          </p>
          <p>
            <strong>Start:</strong>22nd October 2024
          </p>
          <p>
            <strong>End:</strong> 23 October 2024
          </p>
          <p>
            <strong>Contact:</strong>
            ECV International
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto: marketing@ecvinternational.com">
              {" "}
              marketing@ecvinternational.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>+86 13271915990
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://www.ecv-events.com/EuropeanSustainablePlastics/index.php?cci=16
"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.ecv-events.com/EuropeanSustainablePlastics/index.php?cci=16
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          This ESPS 2024 will bring together professionals from the plastics
          value chain as well as other relevant stakeholders to discuss the
          situation and trends of sustainable plastics development in the
          European region. The summit is expected to further unleash the
          potential of sustainable plastics in the European region, attract more
          cooperation and investment opportunities for the sustainable plastics
          market , and contribute to the green transformation of global
          plastics.
        </p>
      </div>
    </div>
  );
};

export default Event11Details;
