import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/event42.webp";
const Event42Details = () => {
  return (
    <div className="event-details">
      <h1>Egypt Energy Show (EGYPES) </h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          {/* <p>
            CPHI & PMEC China is Asia's premier pharmaceutical event for
            sourcing, networking, learning and innovation with over 20 years'
            experience of bringing together Chinese and global pharma
            professionals.
          </p> */}

          <p>
            <strong>Location: </strong>
            EGYPT INTERNATIONAL EXHIBITION CENTER
          </p>
          <p>
            <strong>Start: </strong> 17th February 2025
          </p>
          <p>
            <strong>End:</strong> 19th February 2025
          </p>
          {/* <p>
            <strong>Contact: </strong>
            Floy Huang
          </p> */}
          {/* <p>
            <strong>Email:</strong>{" "}
            <a href="mailto: floy.huang@informa.com"> floy.huang@informa.com</a>
          </p> */}
          {/* <p>
            <strong>Phone: </strong>021 3339 2169
          </p> */}
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="http://www.egypes.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.egypes.com/
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          Held under the patronage and participation of His Excellency Abdel
          Fattah El Sisi, President of the Arab Republic of Egypt, Egypt Energy
          Show (EGYPES) is at the heart of an ever-evolving, ever-expanding
          global stage where energy meets the future. Taking place from 17–19
          February, EGYPES 2025, under the theme “Building a Secure and
          Sustainable Energy Future,” will bring together over 47,000 energy
          professionals and stakeholders to drive influential thought leadership
          and accelerate the transition toward sustainable energy production.
          For more information, visit{" "}
          <a
            href="https://www.egypes.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            egypes.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Event42Details;
