import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/event23.jpg";
const Event23Details = () => {
  return (
    <div className="event-details">
      <h1>CHEMICAL INDONESIA 2025</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p></p>
          <h5 className="subheading-description">
            Welcome to Chemical Indonesia – the Indonesia’s leading trade show
            for chemicals, petrochemicals, and process industry.
          </h5>
          <p>
            <strong>Date: </strong> JULY 29 – 31, 2025
          </p>
          <p>
            <strong>Time: </strong> 10.00 AM – 18.00 PM
          </p>
          <p>
            <strong>Venue: </strong> JJIEXPO (JAKARTA INTERNATIONAL EXPO),
            INDONESIA
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@gem-indonesia.com">info@gem-indonesia.com</a>
          </p>

          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://chemical-indonesia.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://chemical-indonesia.net/
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          <strong>CHEMICAL INDONESIA 2025</strong>
          is a specialized exhibition of chemicals, petrochemicals and process
          plant equipment that will showcasing the latest technology and
          products covering chemicals, raw materials, process plant machinery &
          equipment, laboratory equipment and services, etc.
          <br />
          <br />
          This B2B trade show offers a comprehensive platform of solutions for
          industry professionals seeking to stay at the forefront of the
          industry, presents a prime opportunity to network, form new global
          partnerships, announce new innovative products, as well as experiences
          to explore business opportunities in the fast-growing Indonesian
          market.
        </p>
      </div>
    </div>
  );
};

export default Event23Details;
