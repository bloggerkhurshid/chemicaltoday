import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/event48.webp";
const Event48Details = () => {
  return (
    <div className="event-details">
      <h1>SEPAWA CONGRESS</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p>
            Europe’s leading event for the detergents, cleaning products,
            cosmetics, and perfumery industries.
          </p>

          <p>
            <strong>Location: </strong>
            Estrel Congress Center, Sonnenalle 225, 12057 Berlin, Germany
          </p>
          <p>
            <strong>Start: </strong> 15 October 2025, 8:30 hrs
          </p>
          <p>
            <strong>End:</strong> 17 October 2025, 13:00 hrs
          </p>
          <p>
            <strong>Contact: </strong>
            Franziska Konle
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto: franziska.konle@sofw.com">
              {" "}
              franziska.konle@sofw.com
            </a>
          </p>
          <p>
            <strong>Phone: </strong>+49 8281 79940-27
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://www.sepawa.com/congress/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.sepawa.com/congress/en
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          The SEPAWA CONGRESS, held annually in October in Berlin, Germany, is
          Europe's leading event for the detergents, cleaning products,
          cosmetics, and perfumery industries. In 2024 it brought together
          nearly 4,000 attendees from 66 countries, 326 exhibiting companies,
          and featured 164 expert presentations. Organized by SEPAWA in
          cooperation with DGK e.V., GDCh e.V., and TEGEWA e.V., the congress
          comprises the European Detergents Conference (EDC), the Cosmetic
          Science Conference (CSC), and the DGP Conference. Attendees benefit
          from a diverse program of lectures, panel discussions, and networking
          opportunities, making it an essential event for industry
          professionals. With its comprehensive approach, the SEPAWA CONGRESS
          fosters innovation and knowledge exchange in these key sectors.
        </p>
      </div>
    </div>
  );
};

export default Event48Details;
