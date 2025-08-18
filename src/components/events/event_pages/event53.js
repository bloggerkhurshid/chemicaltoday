import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/event53.png";
const Event53Details = () => {
  return (
    <div className="event-details">
      <h1>PolyNext Awards & Conference Dubai 2025</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p>
            Global platform spotlighting innovation & sustainability in plastic
            recycling.
          </p>

          <p>
            <strong>Location: </strong>
            Crowne Plaza Deira, Dubai, UAE
          </p>
          <p>
            <strong>Start: </strong> 01 October 2025, 09:00 AM
          </p>
          <p>
            <strong>End:</strong> 02 October 2025, 06:00 PM
          </p>
          <p>
            <strong>Contact: </strong>
            Anas Javed (organizer: Next Business Media)
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto: contact@nextbusinessmedia.com">
              {" "}
              contact@nextbusinessmedia.com
            </a>
          </p>
          <p>
            <strong>Phone: </strong>+1 702 551 9568 / +91 9811192198
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://www.polynextconf.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.polynextconf.com/
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          PolyNext Awards & Conference Dubai 2025 is a premier global platform
          dedicated to accelerating innovation in plastic recycling and
          sustainability. Taking place from 1–2 October at the Crowne Plaza
          Deira, this event will convene global industry leaders, policymakers,
          innovators, and sustainability advocates. Attendees will explore
          cutting-edge technologies, exchange best practices, and celebrate
          excellence through the prestigious PolyNext Awards. Featuring
          interactive sessions, panel discussions, tech showcases, and
          networking opportunities, the conference aims to forge strategic
          collaborations that drive impactful, circular-economy solutions in
          plastics. Organized by Next Business Media, PolyNext 2025 is your
          gateway to shaping the future of sustainable plastic management.
        </p>
      </div>
    </div>
  );
};

export default Event53Details;
