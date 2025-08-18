import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/36-plastics summit.png";
const Event36Details = () => {
  return (
    <div className="event-details">
      <h1>2nd Asia Sustainable Plastics Summit 2025</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          {/* <p>
            12th International Bauxite, Alumina & Aluminium Conference &
            Exhibition (IBAAS-IIM 2024)
          </p> */}
          <p>
            <strong>Location:</strong> Singapore
          </p>
          <p>
            <strong>Date:</strong> March 27-28, 2025
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
              href="https://www.ecv-events.com/ASPS2025?cci=16"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.ecv-events.com/ASPS2025?cci=16
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          <strong>About the Event</strong>
        </p>
        <p>
          In addition to focusing on the plastics cycle, the 2nd Asia
          Sustainable Plastics Summit 2025 (ASPS 2025) also turns attention to
          bio-based, biodegradable, and digitalized plastic manufacturing.
          Bio-based plastics are part of the circular economy, with a lower
          carbon footprint and superior material performance compared to
          fossil-based plastics. The biodegradable and digital plastics
          production industry is also undergoing significant advancements and
          reforms as global awareness of environmental sustainability grows.
          This is also an innovation of this Sustainable Plastics Summit, which
          aims to connect more industries in the plastics chain through new
          directions to address plastic pollution and realize a sustainable
          future.
        </p>
        <strong>Partial Proposed Topics</strong>
        <ul>
          <li>
            Towards a Better and More Sustainable Future: Enhancing the
            Circularity of Plastic.
          </li>
          <li>
            Paving the Path to Carbon Emissions Reduction and Sustainable
            Development with Circular Polymers.
          </li>
          <li>Circular Economy Strategies for Packaging and Best Practices.</li>
          <li>
            Enabling Circularity of Difficult-to-Recycle Plastics - Chemical
            Recycling.
          </li>
          <li>
            Sustainable Apparel, More Social and Environmentally Responsible
            Apparel Creation and Manufacturing.
          </li>
          <li>
            Recycling the Unrecyclable: The Power of Enzymes to Infinitely
            Recycle Plastics without Hurting the Planet.
          </li>
          <li>
            Current Developments and Future Opportunities for the Integration of
            Recycled Plastics in Electrical and Electronic Products.
          </li>
          <li>
            Carbon Management Technology - a Win-Win in Reducing Carbon
            Emissions and Achieving Sustainable Development.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Event36Details;
