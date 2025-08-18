import React from "react";
import "./Event1Details.css";
import eventimage from "../../../assets/events/event62.png";
const Event62Details = () => {
  return (
    <div className="event-details">
      <h1>ADIPEC</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          {/* <p>
            From Material Revolution to Recycling Innovation:Building a
            Zero-Waste Consumption Ecosystem
          </p> */}
          <p>
            <strong>Location: </strong>
            ADNEC, Abu Dhabi, United Arab Emirates
          </p>
          <p>
            <strong>Start: </strong> 3 November 2025: 10AM - 6PM
          </p>
          <p>
            <strong>End:</strong> 6 November 2025: 10AM - 5PM
          </p>
          {/* <p>
            <strong>Contact: </strong>
            Manan Tyagi
          </p> */}
          <p>
            <strong>Email:</strong>{" "}
            <a href="marketing@adipec.com">marketing@adipec.com</a>
          </p>
          <p>
            <strong>Phone Number : </strong>
            +971 2 4444909
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://bit.ly/3G9ubT0"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://bit.ly/3G9ubT0
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          Held under the patronage of H.H. Sheikh Mohamed Bin Zayed Al Nahyan,
          President of the UAE, and hosted by ADNOC, ADIPEC will take place in
          Abu Dhabi from 3-6 November 2025.
          <br />
          As global energy demand rises, ADIPEC addresses a dual imperative –
          building resilience in today’s systems and scaling intelligent
          solutions to enable the system-wide transformation required to
          accelerate inclusive global progress. Under the theme Energy.
          Intelligence. Impact., ADIPEC will unite industries, investors,
          innovators and technologists to turn dialogue into delivery, where
          solutions are showcased, decisions are made and collaborations are
          catalysed to drive system-wide transformation and unlock long-term
          value.
          <br />
          The ADIPEC Conferences will feature 1,800+ diverse voices over 380+
          sessions across 12 conference programmes. The conferences will turn
          dialogue into delivery, showcasing solutions and catalysing
          collaborations that drive measurable impact at speed and scale.
          <br />
          Spanning 17 exhibition halls, the ADIPEC Exhibition will host over
          2,250 exhibitors representing the entire global energy ecosystem. This
          includes 54 NOCs, IOCs, NECs and IECs, 30 dedicated country pavilions,
          four specialised industry zones focused on decarbonisation,
          digitalisation, maritime and logistics and artificial intelligence.
          <br />
          ADIPEC expects over 205,000 attendees, offering unparalleled
          opportunities for collaboration, innovation and progress.
          <br />
          For more information, visit{" "}
          <a href="https://www.adipec.com/" target="__blank">
            www.adipec.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Event62Details;
