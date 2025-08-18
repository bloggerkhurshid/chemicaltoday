import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/India Chem 2024_400 x 200 pixels Logo 2.jpg";
const Event4Details = () => {
  return (
    <div className="event-details">
      <h1>India Chem 2024 </h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p>
            Flagship event, focuses on Chemicals, Petrochemicals and Chemical
            Technology, jointly organized by Ministry of Chemicals and
            Fertilizers, Government of India and FICCI after every 2 years
          </p>
          <p>
            <strong>Location:</strong> Bombay Exhibition Centre, Mumbai, India
          </p>
          <p>
            <strong>Start:</strong> 17th October 2024, 10:00 AM
          </p>
          <p>
            <strong>End:</strong> 19th October 2024, 6:00PM
          </p>
          <p>
            <strong>Contact:</strong>Ishant Rai
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:ishant.rai@ficci.com">ishant.rai@ficci.com</a>
          </p>
          <p>
            <strong>Phone:</strong>+91 7840870556
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://indiachem.ficci.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.indiachem.in
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          Department of Chemicals & Petrochemicals, Ministry of Chemicals &
          Fertilizers, Government of India, jointly with FICCI is organising the
          13th Edition of “India Chem 2024” from 17th - 19th October 2024 at
          Bombay Exhibition Centre, Mumbai, India. India Chem, the flagship
          event of the Department, is one of the largest composite events of the
          industry in the Asia-Pacific region and comprises of an International
          Exhibition and various conferences. India Chem 2024 will showcase
          tremendous potential and supportive government policy for sustainable
          growth in the sector and will be a single platform for investors, both
          domestic and international and other stakeholders to interact and
          forge alliances, thereby providing immense potential for trade and
          investment, in a mutually beneficial way. The concurrent sessions as
          part of conference includes Global CEOs Round Table, ministerial
          plenary as well as conclaves on different industry segments (e.g.,
          Chemicals, Petrochemical, Agrochemical Industry, Process and
          machinery) and regional exchanges between India and the counties.
        </p>
      </div>
    </div>
  );
};

export default Event4Details;
