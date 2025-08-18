import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/SEPAWA24.jpg";
const Event8Details = () => {
  return (
    <div className="event-details">
      <h1>SEPAWA CONGRESS</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p>
            The SEPAWA CONGRESS is Europe's premier home and personal care event
            with over 3500 attendees, more than 300 exhibitors and over 160
            presentations
          </p>
          <p>
            <strong>Location:</strong> Berlin, Estrel Congress Centre,
            Sonnenallee 225, 12057 Berlin
          </p>
          <p>
            <strong>Start:</strong> 16 October 2024; 8am
          </p>
          <p>
            <strong>End:</strong> 18 October 2024; 1pm
          </p>
          <p>
            <strong>Contact:</strong>
            Nancy Snehotta
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto: nancy.snehotta@sofw.com">
              {" "}
              nancy.snehotta@sofw.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>+49 8281 79940-39
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href=" https://sepawa.com/congress/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://sepawa.com/congress/
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          The SEPAWA CONGRESS, Europe's top event for detergents, cleaning
          products, cosmetics, and perfumery, will be held from October 16-18 in
          Berlin. Attracting over 3,500 attendees from 65 countries, it features
          more than 300 exhibitors and over 160 presentations. Organized with
          DGK, GDCh, and TEGEWA, the congress includes the European Detergents
          Conference (EDC), Cosmetic Science Conference (CSC), and DGP
          Conference, offering key industry insights and networking.
        </p>
      </div>
    </div>
  );
};

export default Event8Details;
