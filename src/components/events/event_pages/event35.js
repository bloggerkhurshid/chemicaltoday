import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/ECV.jpg";
const Event35Details = () => {
  return (
    <div className="event-details">
      <h1>
        The 2nd Asia Supply Chain Decarbonization and Sustainability Summit 2025
      </h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p>
            The 2nd Asia Supply Chain Decarbonization and Sustainability Summit
            2025 will give you the opportunity to unlock the secret of Scope 3
            success; learn about balancing trade-offs between carbon reduction,
            profit margins, resilience, and other factors; and explore the
            latest solutions for tackling the challenges of supply chain
            decarbonization and sustainability in Asia Pacific.
          </p>
          <p>
            <strong>Location:</strong> Singapore
          </p>
          <p>
            <strong>Start:</strong> May 27, 2025
          </p>
          <p>
            <strong>End:</strong> May 28, 2025
          </p>
          <p>
            <strong>Contact: </strong>
            Britney
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto: britney@ecvinternational.com ">
              {" "}
              britney@ecvinternational.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>+86 13271915990
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://www.ecv-events.com/ASCDSS2025"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.ecv-events.com/ASCDSS2025
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          In today's climate-conscious world, decarbonizing your operations and
          supply chain not only benefits the environment but can also improve
          your company’s bottom- and top-line performances.
          <br />
          The 2nd Asia Supply Chain Decarbonization and Sustainability Summit
          2025 will give you the opportunity to unlock the secret of Scope 3
          success; learn about balancing trade-offs between carbon reduction,
          profit margins, resilience, and other factors; and explore the latest
          solutions for tackling the challenges of supply chain decarbonization
          and sustainability in Asia Pacific.
          <br />
          <br />
          <strong>Highlights</strong>
          <ul>
            <li>
              From Decarbonization to Human Rights: Sustainability in Supply
              Chains in Asia
            </li>
            <li>
              Building Supplier Data Systems and a CBAM Compliance Roadmap
            </li>
            <li>
              AI Data Analytics Create Visibility in Procurement Carbon Chain
            </li>
            <li>
              Supplier and Value Chain Partners Engagement for Scope 3 Success
            </li>
            <li>
              Building Resilience into your Supply Chains While Realizing
              Decarbonization
            </li>
            <li>The Roadmap of Reducing PCFs</li>
            <li>Carbon Accounting for Accurate Reporting</li>
            <li>AI Boosts Sustainable Logistics</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Event35Details;
