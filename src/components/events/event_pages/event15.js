import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/PM&AE Awards 2024.png";
const Event15Details = () => {
  return (
    <div className="event-details">
      <h1>Pharma Manufacturing & Automation Excellence Awards 2024</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <h5>
            Honoring the Visionaries Behind Pharma's Transformational Growth.
          </h5>
          <p>
            <strong>Location:</strong> Hotel Westin Mindspace Hyderabad
          </p>
          <p>
            <strong>Start:</strong> October 18th 2024 & 6.30 PM
          </p>
          <p>
            <strong>End:</strong>October 18th 2024 & 11 PM
          </p>
          <p>
            <strong>Contact:</strong>Shravan Nair
          </p>
          <p>
            <strong>Email:</strong>
            <a href="mailto:shravan@eminencemedia.in">
              shravan@eminencemedia.in
            </a>
          </p>

          <p>
            <strong>Phone:</strong>+91 7517672770
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://www.pmaeawards.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.pmaeawards.com/
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          Driven by global demand, generics production, and increased domestic
          investment, India's pharma manufacturing sector has grown by 9% to 12%
          annually over the past two years. Automation in the industry has also
          surged, with 15% to 18% annual growth, as companies embrace digital
          technologies for greater efficiency and innovation.Amidst this
          transformative growth, the Pharma Manufacturing & Automation
          Excellence Awards 2024 is set to honor the visionaries and
          organizations who have propelled the industry forward. Scheduled for
          October 18th, 2024, at the prestigious Hotel Westin Mindspace,
          Hyderabad, this event serves as a tribute to the brilliance and
          innovation shaping the future of pharma manufacturing.
        </p>
      </div>
    </div>
  );
};

export default Event15Details;
