import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/event20.jpg";
const Event20Details = () => {
  return (
    <div className="event-details">
      <h1> CHEMLOG India 2024</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p></p>
          {/* <h5 className="subheading-description">
            CHEMLOG India 2024, the premier conference dedicated to Chemical
            Supply Chain & Logistics, Chemical Storage, Hazardous Goods
            Management, Oil / Gas / Liquid Fuel Supply, Bulk Liquid Cargo
            Shipping, ISO Tanks, Container Transport, and much more.
          </h5> */}
          <p>
            <strong>Location:</strong> Radisson Blu, Mumbai International
            Airport, Mumbai
          </p>
          <p>
            <strong>Date:</strong> 14th November 2024
          </p>
          <p>
            <strong>Contact:</strong> Shailendra Kumar
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:sk@chemlog.co.in">sk@chemlog.co.in</a>
          </p>
          <p>
            <strong>Mob:</strong>+91 9868332325
          </p>

          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://www.chemlogindia.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.chemlogindia.com/
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          CHEMLOG India 2024, the premier conference dedicated to Chemical
          Supply Chain & Logistics, Chemical Storage, Hazardous Goods
          Management, Oil / Gas / Liquid Fuel Supply, Bulk Liquid Cargo
          Shipping, ISO Tanks, Container Transport, and much more.
        </p>
      </div>
    </div>
  );
};

export default Event20Details;
