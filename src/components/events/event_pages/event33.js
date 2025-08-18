import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/everythingwater.jpg";
const Event33Details = () => {
  return (
    <div className="event-details">
      <h1>20th EverythingAboutWater Expo 2025</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p>
            <strong>
              South Asia's Largest Water & Wastewater Exhibition and Conference
            </strong>
          </p>

          <p>
            <strong>Location:</strong> Bharat Mandapam, Pragati Maidan, New
            Delhi, India
          </p>
          <p>
            <strong>Start:</strong> 28th August 2025 | 10:00 AM
          </p>
          <p>
            <strong>End:</strong> 30th August 2025 | 18:00 PM
          </p>
          <p>
            <strong>Contact:</strong>
            Sanjay Menani
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto: enquiry@eawaterexpo.com">
              {" "}
              enquiry@eawaterexpo.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>+91 98739 97992
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="http://www.eawaterexpo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.eawaterexpo.com/
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          The 20th EverythingAboutWater Expo 2025 stands as a remarkable and
          all-encompassing annual event in India, spotlighting cutting-edge
          technologies and solutions within the water sector. This event serves
          as an exceptional getaway for stakeholders worldwide to immerse
          themselves in the expansive and dynamic realm of the Indian water
          management industry, facilitating the exchange of business
          opportunities, networking, and the exploration of innovative Water
          solutions.
        </p>
      </div>
    </div>
  );
};

export default Event33Details;
