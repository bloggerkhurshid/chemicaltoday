import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/event21.jpg";
const Event21Details = () => {
  return (
    <div className="event-details">
      <h1>INACOATING 2025</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p></p>
          <h5 className="subheading-description"></h5>
          <p>
            <strong>Date: </strong> JULY 29 – 31, 2025
          </p>
          <p>
            <strong>Time: </strong> 10.00 AM – 18.00 PM
          </p>
          <p>
            <strong>Venue: </strong> JIEXPO (JAKARTA INTERNATIONAL EXPO),
            INDONESIA
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@gem-indonesia.com">info@gem-indonesia.com</a>
          </p>

          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://www.inacoating-exhibition.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.inacoating-exhibition.net/
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          INACOATING 2025 is the specialized event for coating & paint industry,
          including paint products, raw materials, resin, composite,
          manufacturing equipment, environment protection, technology and
          services, etc. This B2B event offers a comprehensive showcase of the
          latest paint and coating technologies for the region environmental
          manufacturing and industrial needs. This annual event presents a prime
          opportunity to network and form new global partnerships with local and
          international professional buyers.
          <br />
          <br />
          The 13th edition of INACOATING will be held on 29 – 31 July 2025 and
          co-located with Chemical Indonesia 2025, Inamarine 2025, and
          RailwayTech Indonesia 2025 at Jakarta International Expo (JIExpo),
          Kemayoran, Jakarta-Indonesia. INACOATING 2025 will serve as
          Indonesia’s most prospective one-stop coating and painting exhibition
          for maritime, eco-building, industrial, automotive, furniture, and
          related paints & coating industries.
        </p>
      </div>
    </div>
  );
};

export default Event21Details;
