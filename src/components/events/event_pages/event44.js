import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/event44.webp";
const Event44Details = () => {
  return (
    <div className="event-details">
      <h1>INDIA PAINT & COATING EXPO</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p>
            Connect with industry leaders, policymakers, and potential customers
          </p>

          <p>
            <strong>Location: </strong>
            BANGALORE INTERNATIONAL EXHIBITION & CONVENTION CENTER (BIEC),
            BANGALORE
          </p>
          <p>
            <strong>Start: </strong> 10 April 2025, 10:00 AM
          </p>
          <p>
            <strong>End:</strong> 12 April 2025, 6:00 PM
          </p>
          <p>
            <strong>Contact: </strong>
            KASHIF RAZA NAQVI
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto: EXPO@MEDIADAY.CO.IN"> EXPO@MEDIADAY.CO.IN</a>
          </p>
          <p>
            <strong>Phone: </strong>+91 93421 85915
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://paintandcoatingexpo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://paintandcoatingexpo.com/
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          The Three day event focuses on Paints, Powder enamels, Coating,
          Pigments, additives, solvents, binders, fillers, dyes, polymers,
          monomers, synthetic-natural-emulsion resins, tackifiers, bulk and
          specialty chemicals, intermediates, extenders, color matching tools,
          mixers, dispensing machines, corrosion prevention chemicals, drying
          and hardening agents, paint removing chemicals and allied industry.
          <br /><br />
          The Paint and coating Expo is an event designed to stimulate
          investment in the Paint and Coating industry, fostering a platform for
          local and national investors and experts to share knowledge, exchange
          business ideas, and ultimately drive business growth. By bringing
          together industry stakeholders, the expo aims to promote trade,
          improve competitiveness, and increase the overall value of the Paint
          and coating sector.
        </p>
      </div>
    </div>
  );
};

export default Event44Details;
