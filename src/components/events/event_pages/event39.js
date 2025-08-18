import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/event39.png";
const Event39Details = () => {
  return (
    <div className="event-details">
      <h1>Global Regulatory Updates, Deadline and Opportunities for 25-26</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p>
            We cordially invite you to attend the "Global Chemicals Regulatory
            Outlook 2025" event, which is scheduled to be held from February 3,
            5 and 6th, 2025, in various cities in the western regions of India.
          </p>

          <p>
            <strong>Location:</strong>
            <ul>
              <li>3 Feb 2025 - Mumbai</li>
              <li>5 Feb 2025 - Vapi</li>
              <li>6 Feb 2025 - Ahmedabad</li>
            </ul>
          </p>
          <p>
            <strong>Timings: </strong>{" "}
            <ul>
              <li>Mumbai (2:00 pm - 5:00pm)</li>
              <li>Vapi (10:00 pm - 01:00pm)</li>
              <li>Ahmedabad (2:00 pm - 5:00pm)</li>
            </ul>
          </p>
          {/* <p>
            <strong>End:</strong> 30th August 2025 | 18:00 PM
          </p> */}
          <p>
            <strong>Contact: </strong>
            Communication Manager
          </p>
          {/* <p>
            <strong>Email:</strong>{" "}
            <a href="mailto: enquiry@eawaterexpo.com">
              {" "}
              enquiry@eawaterexpo.com
            </a>
          </p> */}
          <p>
            <strong>Phone: </strong>+91 93229 53604
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          <strong>Website:</strong>{" "}
          <a
            href="https://rrma-global.org/global-regulatory-updates-deadlines-and-opportunities-for-2025-26-event/?utm_medium=3rd_party&utm_source=chemical_today&utm_campaign=2025-02-rrma-city-series-event&utm_content=partner_promotion"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://rrma-global.org/global-regulatory-updates-deadlines-and-opportunities-for-2025-26-event/?utm_medium=3rd_party&utm_source=chemical_today&utm_campaign=2025-02-rrma-city-series-event&utm_content=partner_promotion
          </a>
        </p>
        <p>
          This event will offer you a unique opportunity to gain a global
          perspective of effective chemical regulations across Asia and Europe.{" "}
          <br />
          Using an interactive format, we will engage in discussions about how
          businesses can effectively handle and prepare for upcoming chemical
          regulatory deadlines. Our partnerships with local associations allow
          us to offer the best expertise in chemical compliance, providing you
          with a comprehensive understanding of the regulations that govern the
          chemical industry.
          <br />
          <br />
          We look forward to meeting you at the event and engaging in
          discussions about this relevant topic!
        </p>
      </div>
    </div>
  );
};

export default Event39Details;
