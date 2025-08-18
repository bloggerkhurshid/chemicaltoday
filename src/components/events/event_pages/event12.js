import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/packaging.png";
const Event12Details = () => {
  return (
    <div className="event-details">
      <h1>The 3rd Asia Green Packaging Innovation Summit 2024</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p>
            <strong></strong>
          </p>
          <p>
            {" "}
            The summit will gather the leaders of packaging value chain, brands,
            recyclers and regulators, with a shared mission to accelerate
            sustainable transformation in packaged goods.
          </p>
          <p>
            <strong>Location:</strong> Kuala Lumpur, Malaysia
          </p>
          <p>
            <strong>Start:</strong> 21st November 2024
          </p>
          <p>
            <strong>End:</strong> 22nd November 2024
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
              href="https://www.ecv-events.com/AsiaGreenPackaging/index.php?cci=16"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.ecv-events.com/AsiaGreenPackaging/index.php?cci=16
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          <strong>HOT POINTS</strong>
        </p>
        <li>Government Policies and Regulations in Asia</li>
        <li>PLCA Approach to Reduce Scope 3 Emissions</li>
        <li>Consumer Behavior and Awareness </li>
        <li>Plastic Recycling and Upcycling</li>
        <li>Circular Economy Principles</li>
        <li> Waste Management and Collection</li>
        <br />
        <p>
          <strong>
            MORE THAN 15 INDUSTRY SPEAKERS GATHERED TOGETHER TO SHARE THE MOST
            CUTTING-EDGE TECHNOLOGIES AND TRENDS:
          </strong>
        </p>
        <li>
          Green Packaging Market Outlook and Regulatory Landscape in Asia.
        </li>
        <li>
          Food Contact Packaging: Regulatory Compliance and Food Safety Matters.
        </li>
        <li>
          EPR Development in SEA and the Impact on the Supply Chain Dynamics.
        </li>
        <li>Sustainable Flexible Packaging Design Towards Circularity.</li>
        <li>Enabling Circular Plastics Economy in Rigid Packaging.</li>
        <li>
          Consumer-centric Sustainable Innovation with Green Packaging:
          Reshaping the Consumption Experience.
        </li>
        <li>
          Towards Zero Waste: Promote the Circular Economy of Packaging Waste.
        </li>
        <li>Bio-based Materials in Plastics for a Circular Plastic System.</li>
      </div>
    </div>
  );
};

export default Event12Details;
