import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/img-1.jpg";
const Event7Details = () => {
  return (
    <div className="event-details">
      <h1>IBAAS-IIM 2024 Conference & Exhibition </h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p>
            12th International Bauxite, Alumina & Aluminium Conference &
            Exhibition (IBAAS-IIM 2024)
          </p>
          <p>
            <strong>Location:</strong> BITS-Pilani, Goa (India)
          </p>
          <p>
            <strong>Start:</strong> 25th September 2024; 9.00 AM
          </p>
          <p>
            <strong>End:</strong> 27th September 2024; 6.00 PM
          </p>
          <p>
            <strong>Contact:</strong>
            1. Dr. Ashok Kumar Nandi, Convenor 2. Ms. Priyanka Jadhav, Executive
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto: ashok.nandi@ibaas.info"> info@ibaas.info; info.ibaas@gmail.com; ashok.nandi@ibaas.info</a>
          </p>
          <p>
            <strong>Phone:</strong>+91 9823015772; +91 9373818839
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href=" http://www.ibaas.info/"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.ibaas.info/
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          The 12th International Bauxite, Alumina & Aluminium Conference &
          Exhibition (IBAAS-IIM 2024) is a premier event set to gather industry
          leaders, professionals, and stakeholders from across the globe.
          Scheduled for September 25-27, 2024, in Goa, India, this conference
          will focus on the latest advancements, trends, and challenges in the
          bauxite, alumina, and aluminium sectors. Attendees will have the
          opportunity to engage in insightful discussions, explore innovative
          technologies, and foster valuable business connections. Featuring
          keynote presentations, technical sessions, and an expansive
          exhibition, IBAAS-IIM 2024 aims to drive sustainable growth and
          development within the aluminium industry, reinforcing its pivotal
          role in the global economy.
        </p>
      </div>
    </div>
  );
};

export default Event7Details;
