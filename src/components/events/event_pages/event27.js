import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/event27.jpg";
const Event27Details = () => {
  return (
    <div className="event-details">
      <h1>Plastasia 2025</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p>
            <strong></strong>
          </p>
          <p> Step into the future of plastics innovation @ plastasia- 2025</p>
          <p>
            <strong>Location:</strong> BIEC, BANGALORE, India
          </p>
          <p>
            <strong>Start:</strong> 9<sup>th</sup> May 2025
          </p>
          <p>
            <strong>End:</strong> 12<sup>th</sup> May 2025
          </p>
          <p>
            <strong>Contact:</strong>
            Plastasia
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto: Info@plastasia.in"> Info@plastasia.in</a>
          </p>
          <p>
            <strong>Phone:</strong> 7619267070, 7619267071
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="http://www.plastasia.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.plastasia.in/
            </a>
          </p>
        </div>
      </div>
      <div className="event-description"></div>
    </div>
  );
};

export default Event27Details;
