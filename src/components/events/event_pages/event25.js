import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/event25.png";
const Event25Details = () => {
  return (
    <div className="event-details">
      <h1>Sustainable Action Conference 2024 (2.0)</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <h5>
            Transforming Pledges into Action: Realizing a Sustainable Future
          </h5>
          <p>
            <strong>Location:</strong> Sunway Resort Hotel, Malaysia
          </p>
          <p>
            <strong>Start:</strong> 21st November, 2024. 8:30AM
          </p>
          <p>
            <strong>End:</strong> 21st November, 2024. 7:30PM
          </p>
          <p>
            <strong>Contact:</strong> Dinusha W Surendre
          </p>
          <p>
            <strong>Email:</strong>
            <a href="mailto:dinusha@controlunion.com">
              dinusha@controlunion.com
            </a>
          </p>

          <p>
            <strong>Phone:</strong> +603 3000 4132
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://sustainableactionconference.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://sustainableactionconference.com/
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          The Sustainable Action Conference aims to transform commitments into
          actions for a sustainable future. It provides a platform for leading
          industry players from diverse sectors, including government, state
          government, municipal councils, finance, manufacturing, plantations,
          forestry, energy, construction, and more, to discuss the latest
          sustainability trends, raise awareness, and overcome industry
          challenges.
          <br />
          <br />
          The conference will showcase solutions, share success stories, foster
          collaborations, and fund sustainable projects. In conjunction with SAC
          2024, the MDBC Innovation and Sustainability Awards (MISA) will
          recognize and promote best practices in sustainability and innovation,
          facilitating progress and offering valuable networking opportunities.
          <br />
          <br />
          The key Themes that will be discussed at the Sustainable Action
          Conference 2024 (2.0) + MISA are:
        </p>
        <ul>
          <li>
            <strong>Plenary 1 :</strong> ESG Reporting and Net-Zero Ambitions
          </li>
          <li>
            <strong>Plenary 2 :</strong> Policies and Incentives for a
            Low-Carbon Economy
          </li>
          <li>
            <strong>Plenary 3 :</strong> Future-Proofing Malaysian Palm Oil
          </li>
          <li>
            <strong>Session 1 :</strong> Financing the Future: Sustainable
            Investments and Risk Management
          </li>
          <li>
            <strong>Session 2 :</strong> Sustainable Production and Resource
            Management: Innovation in Manufacturing and Energy
          </li>
          <li>
            <strong>Session 3 :</strong> Greening the Land: Sustainable
            Practices in Agriculture and Forestry
          </li>
          <li>
            <strong>Session 4 :</strong> Empowering Communities: Sustainable
            Development in Urban and Rural Areas
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Event25Details;
