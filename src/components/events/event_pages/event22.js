import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/event22.jpg";
const Event22Details = () => {
  return (
    <div className="event-details">
      <h1>INAGRICHEM 2025</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p></p>
          <h5 className="subheading-description">
            INAGRICHEM 2025-THE INDONESIA’S only Dedicated Event to AGRICULTURAL
            CHEMICALS, FERTILIZER & PESTICIDES
          </h5>
          <p>
            <strong>Date: </strong> JULY 29 – 31, 2025
          </p>
          <p>
            <strong>Time: </strong> 10.00 AM – 18.00 PM
          </p>
          <p>
            <strong>venue: </strong> JIEXPO (JAKARTA INTERNATIONAL EXPO),
            INDONESIA
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@gem-indonesia.com">info@gem-indonesia.com</a>
          </p>

          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://www.inagrichem-exhibition.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.inagrichem-exhibition.net/
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          <strong>INGRICHEM 2025</strong>
          will take part from July 29 – 31, 2025 at{" "}
          <strong>Jakarta International (JIExpo), Kemayoran, Jakarta.</strong>
          The edition of the event aims at promoting agriculture and
          agrochemical-based industries. Through this unique experience, it is
          hoped that the agriculture industry will gain momentum generating
          higher revenue for the nation.
          <br />
          <br />
          At the same time, <strong>
            INAGRITECH 2025, INAPALM ASIA 2025,
          </strong>{" "}
          and <strong>Sugarmach Indonesia 2025</strong> are held together as the
          most influential trade show specialised for agriculture and plantation
          industry. <strong>INAGRICHEM</strong> which will be a glittering
          showcase for the Agriculture Chemical-based products and service
          industry. It will reveal the rapid developments in the industry as
          well as innovation and technology with many major projects,
          investments, and new chemical plants underway, including the
          agrochemical industry.
        </p>
      </div>
    </div>
  );
};

export default Event22Details;
