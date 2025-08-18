import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/IPCC24.png";
const Event10Details = () => {
  return (
    <div className="event-details">
      <h1>Industrial Pollution Control Congress 2024</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p>
            <strong>
              Challenges of industrial pollution & it’s impact on sustainable
              development
            </strong>
          </p>
          <p>
            “Industrial Pollution Control Congress” on 02nd September 2024 will
            bring together regional and international stakeholders, including
            professionals dealing in air pollution control from industries, air
            pollution control consultancies.
          </p>
          <p>
            <strong>Location:</strong> Hotel Le' Meridien, New Delhi, India
          </p>
          <p>
            <strong>Start:</strong> 2nd September 2024, 08:30 AM
          </p>
          <p>
            <strong>End:</strong> 2nd September 2024, 17:15 HRS
          </p>
          <p>
            <strong>Contact:</strong>
            Shalinder Chauhan / Aman Kumar
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto: sc@trisamamedia.com">
              {" "}
              sc@trisamamedia.com/aman@trisamamedia.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>+91 9711241886 / +91 8826174788
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://ipccindia.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ipccindia.com/
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          “Industrial Pollution Control Congress” on 02nd September 2024 will
          bring together regional and international stakeholders, including
          professionals dealing in air pollution control from industries, air
          pollution control consultancies, air pollution control technology
          suppliers, Continuous Emission Monitoring Systems (CEMS), suppliers
          and manufacturers, central and state pollution control boards,
          government ministries/organizations, R&D and academic institutions.
        </p>
      </div>
    </div>
  );
};

export default Event10Details;
