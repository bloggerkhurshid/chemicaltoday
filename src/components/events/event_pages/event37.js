import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/37-packaging summit.png";
const Event37Details = () => {
  return (
    <div className="event-details">
      <h1>The 3rd Europe Green Packaging Innovation Summit 2025</h1>
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
            <strong>Date:</strong> May 20-21, 2025
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
            <a
              href="mailto: Britney@ecvinternational.com
"
            >
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
              href=" https://www.ecv-events.com/EGPIS2025?cci=16"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.ecv-events.com/EGPIS2025?cci=16
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          <strong>About the Event</strong>
        </p>
        <p>
          This summit will gather leaders from the international packaging value
          chain, brands, recyclers, and regulators to understand the current
          legislation in Europe, learn about the importance of design and
          material selection for recyclability, explore innovative packaging
          solutions and address key sustainability challenges to drive packaging
          innovation, growth and profitability in an ever-evolving packaging
          world.
        </p>
        <p>
          <strong>Hot Points</strong>
          <ul>
            <li>EU Packaging Legislations</li>
            <li>PLCA Approach to Reduce Scope 3 Emissions</li>
            <li>Increased Emphasis on Recyclability and Waste Reduction</li>
            <li>Circular Plastics Economy</li>
            <li>Rising Demand for Biodegradable and Compostable Packaging</li>
            <li>Smart Packaging</li>
          </ul>
        </p>
        <p>
          <strong>Hot Topics</strong>
          <ul>
            <li>Navigating EU Packaging Regulatory Landscapes</li>
            <li>EU Plastics Strategy and SUPD Targets for Plastic Bottles</li>
            <li>How Will EPR Help Circular Packaging </li>
            <li>PLCA Approach to Reduce and Quantify Scope 3 Emissions</li>
            <li>
              Bio-based Materials for Reusable E-commerce Packaging Solutions
            </li>
            <li>How CSRD will Help Drive Development of Circular Packaging</li>
            <li>Generative AI for Rigid Packaging Design</li>
            <li>Chemical Recycling Driven a Circular Plastics Economy</li>
            <li>PCR for Food Contact Packaging Applications</li>
            <li>
              {" "}
              Fireside Talk: Assessing Recyclable Materials for Packaging
              Innovation — How the Future Sustainable Packaging will Evolve?{" "}
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Event37Details;
