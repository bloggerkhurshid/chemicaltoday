import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/38-chemical recycling summit.png";
const Event38Details = () => {
  return (
    <div className="event-details">
      <h1>Europe Chemical Recycling Innovation Summit 2025</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          {/* <p>
            12th International Bauxite, Alumina & Aluminium Conference &
            Exhibition (IBAAS-IIM 2024)
          </p> */}
          <p>
            <strong>Location:</strong> Frankfurt, Germany
          </p>
          <p>
            <strong>Date:</strong> May 22-23, 2025
          </p>
          {/* <p>
            <strong>End:</strong> 27th September 2024; 6.00 PM
          </p> */}
          <p>
            <strong>Contact:</strong>
            Britney
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto: Britney@ecvinternational.com">
              {" "}
              Britney@ecvinternational.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>+8613271915990
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href=" https://www.ecv-events.com/ECRIS2025?cci=16"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.ecv-events.com/ECRIS2025?cci=16
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <strong> About the Event </strong>
        <p>
          This summit will give you the opportunity to engage with industry
          experts and peers from brand owners, packaging providers, technology
          providers to large chemical, oil and gas multinationals to waste
          management players, private investors, plant EPCs and equipment
          providers, and to learn the latest development in chemical recycling
          in EU; know about the importance of feedstock and value chain
          collaboration; explore the future of chemical recycling in Europe etc.
        </p>
        <p>
          <strong>Hot Topics</strong>
          <ul>
            <li>
              From Directive to Regulation – The Impacts of PPWR on the Chemical
              Recycling Industry
            </li>
            <li>
              Chemical Recycling as Game Changer, The Developments and Trends of
              it in EU
            </li>
            <li>Chemical Recycling Solution for Flexible Plastic Packaging</li>
            <li>How EPR Schemes Support Achieving Recycling Targets</li>
            <li>
              Practical Implementation of a Life Cycle Assessment of Plastics
              Chemical Recycling{" "}
            </li>
            <li>
              Plastics Chemical Recycling: Innovation and Automation Enable a
              Circular Economy
            </li>
            <li>Empowering Chemical Recycling with AI and Digital Twins</li>
            <li>
              Cost-effective Pyrolysis Technology Process of Polymers and Fibers
            </li>
            <li>
              Panel Discussion: Closing the Loop with Collaboration from across
              the Supply Chain
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Event38Details;
