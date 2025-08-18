import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/event29.jpg";
const Event13Details = () => {
  return (
    <div className="event-details">
      <h1>Drug Safety Symposium 2025 - Dubai Chapter</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <h5>
            The Eminence Touch – Combining Learning, Networking & Fun in Dubai
          </h5>
          <p>
            <strong>Location:</strong> Holiday Inn & Suites, Dubai Science Park,
            DUBAI
          </p>
          <p>
            <strong>Start:</strong> February 12th, 2025
          </p>
          <p>
            <strong>End:</strong> February 13th, 2025
          </p>
          <p>
            <strong>Contact:</strong>Abhay Dave
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:abhay@eminencemedia.in">abhay@eminencemedia.in</a>
          </p>
          <p>
            <strong>Phone:</strong>+91 7666345961
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://www.drugsafetysymposium.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.drugsafetysymposium.com/
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        The 3rd Edition Drug Safety Symposium 2025 – Dubai Chapter, taking place
        on February 12th – 13th , 2025, is set to be an extraordinary event that
        not only builds on the successes of its previous editions but also
        introduces something even more exciting. Known for bringing fun and
        learning together, Eminence Group is adding its signature flair to this
        year’s event, making it not just a platform for deep industry insights
        but an engaging and dynamic experience.
      </div>
    </div>
  );
};

export default Event13Details;
