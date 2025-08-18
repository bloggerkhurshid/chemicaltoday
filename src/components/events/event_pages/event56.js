import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/event56.jpg";
const Event56Details = () => {
  return (
    <div className="event-details">
      <h1>Sustainability Mobility Fuels Summit 2025</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p>Driving Sustainable Mobility through Alternative Fuels</p>
          <p>
            <strong>Location: </strong>
            Shangri-La Eros Hotel, New Delhi, India
          </p>
          <p>
            <strong>Start: </strong> 11 September 2025 | 8:30 AM Onwards
          </p>
          <p>
            <strong>End:</strong> 12 September 2025 | 5:30 PM
          </p>
          <p>
            <strong>Contact: </strong>
            Anchal Choudhary
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto: anchal.choudhary@india.messefrankfurt.com">
              {" "}
              anchal.choudhary@india.messefrankfurt.com
            </a>
          </p>
          <p>
            <strong>Phone Number : </strong>
            <li>Mob: +91 86302 20927</li>
            <li>Tel: +91 11 66762381</li>
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://mobilityfuelssummit.com/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://mobilityfuelssummit.com/index.html
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          Messe Frankfurt’s newly rebranded Sustainable Mobility Fuels Summit
          taking place on 11-12 September 2025 at Shangri- La Eros Hotel, New
          Delhi is the leading forum in India for in depth discussions on the
          evolving landscape of sustainable fuels, including CNG, LNG,
          ethanol-blended flex fuels, biodiesel, Compressed Biogas (CBG), and
          Green Hydrogen. This pivotal conference will convene key stakeholders
          to address the critical transition from conventional fossil fuels to a
          diversified and sustainable energy mix for the mobility sector.
        </p>
      </div>
    </div>
  );
};

export default Event56Details;
