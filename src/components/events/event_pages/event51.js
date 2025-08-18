import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/event51.png";
const Event51Details = () => {
  return (
    <div className="event-details">
      <h1>Industrial Pollution Control Congress (IPCC) 2025</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p>
            Theme: Challenges of industrial pollution & its impact on
            sustainable development
          </p>

          <p>
            <strong>Location: </strong>
            LE MÉRIDIEN NEW DELHI
          </p>
          <p>
            <strong>Start: </strong> 13 JUNE 2025 / 08:30 - 09:45 HRS
          </p>
          <p>
            <strong>End:</strong> 13 JUNE 2025 / 17:30 HRS
          </p>
          <p>
            <strong>Contact: </strong>
            Aryan Ujlayan
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto: aryan@trisamamedia.com"> aryan@trisamamedia.com</a>
          </p>
          <p>
            <strong>Phone: </strong>7827135571
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://ipccindia.com/index"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ipccindia.com/index
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          Theme: Challenges of industrial pollution & its impact on sustainable
          development We all have been dealing with the perils of pollution.
          Increasing health hazards due to bad air quality, toxic water and
          waste are not only responsible for environmental damage but also
          significant economic loss.
          <br />
          India is the third largest polluted country in the world (as of 2023),
          exceeding the World Health Organization’s prescribed limit of PM2.5 by
          10 times, according to IQAir. We are also the host of 9 out of ten
          most polluted cities in the world. We also generate nearly 4.43
          million tons of hazardous waste annually, out of which, 71,833 tons is
          incinerable (as per the reports by state pollution control boards).
        </p>
      </div>
    </div>
  );
};

export default Event51Details;
