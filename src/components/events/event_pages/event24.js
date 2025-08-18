import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/event24.png";
const Event24Details = () => {
  return (
    <div className="event-details">
      <h1>Rethink Circularity: European Circular Economy Summit 2024</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p></p>
          <h5 className="subheading-description"></h5>

          <p>
            <strong>Date:</strong> December 5-6, 2024
          </p>

          <p>
            <strong>Place:</strong> Frankfurt, Germany
          </p>
          <p>
            <strong>Organizer: </strong> ECV International
          </p>

          <p>
            <strong>Official Website: </strong>{" "}
            <a
              href="https://www.ecv-events.com/e/8-idadvo/rethink-circularity:-european-circular-economy-summit-2024?cci=16
"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.ecv-events.com/e/8-idadvo/rethink-circularity:-european-circular-economy-summit-2024?cci=16
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          The summit aims to facilitate communication and learning among
          different industries and stakeholders in key areas crucial for
          advancing the circular economy. Participants will share new insights
          into achieving circular economy goals, strategies, and proven
          effective actions. It also serves as a high-quality platform for
          participants across the value chain to strengthen cooperation,
          exchange ideas, and explore new business opportunities.
        </p>
        <h5>Hot Topics:</h5>
        <ul>
          <li>
            Action on New Circular Economy – Perspective from European Policies
            and Regulations
          </li>
          <li>
            Unlock the Value of Circularity by Establishing Circular Business
            Models to Drive Economic Growth and Environmental Benefit
          </li>
          <li>
            {" "}
            How to Deploy Strategies and Take Actions to Realize Automotive
            Industry’s Circularity Transition
          </li>
          <li>
            Solving for Circularity in Healthcare: The Necessity and Opportunity
            of an Ecosystem Approach
          </li>
          <li>
            Circular Packaging - Reduce Resource Consumption from the Design
            Stage and Improve the Safety and Recyclability of Materials
          </li>
          <li>
            Redefine Products – How Design Driving the Future of Circularity
          </li>
          <li>
            Bring Regenerative Agriculture to Life – A Holistic Model to Restore
            the Ecosystem, Reduce Carbon Emissions and Enhance Farmers’
            Livelihoods
          </li>
          <li>
            Panel Discussion: Challenges and Methods to Realize European
            Circular Economy Transition
          </li>
          <li>
            ISO Brings Together 100 Countries to Define the Circular Economy
          </li>
          <li>
            Improving Circularity to Save Natural Resources & Protect
            Competitiveness in a Fast-Paced Environment
          </li>
          <li>
            From Linear to Circular – Embracing the Future of Circular Economy
            Transition
          </li>
          <li>
            Developing Battery Closed Loop Recycling to Decrease EV Carbon
            Emissions throughout the Life Cycle
          </li>
          <li>
            Innovation-Driven New Technologies and Products to Boost the
            Recycling of Plastic Materials
          </li>
          <li>
            The Fashion Remodel – Future Production and Consumption to be more
            Sustainable
          </li>
          <li>
            Digital Innovation: Data based Life Circle Assessment Foster the
            Transition to Circular Economy
          </li>
          <li>
            Panel discussion: Rethink Recycling - How to Leverage the Value of
            End-of-Life Products
          </li>
          <li>
            Establish a Management System to Guide the Road towards Circular
            Economy and Waste Management
          </li>
          <li>
            Navigating a Path to Leverage Circular Potential of Steel Industry
          </li>
        </ul>
        <p>
          To get more information, please contact: <br />
          <p>
            <a href="mailto:marketing@ecvinternational.com">
              marketing@ecvinternational.com
            </a>
          </p>
        </p>
      </div>
    </div>
  );
};

export default Event24Details;
