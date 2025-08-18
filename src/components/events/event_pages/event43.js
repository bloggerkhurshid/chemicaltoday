import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/event43.webp";
const Event43Details = () => {
  return (
    <div className="event-details">
      <h1>CII Surface & Coating Expo 2025</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p>
            CII is organizing the 5th edition of
            <strong> “Surface & Coating Expo” (SCE2025) </strong>
            scheduled from <strong> 17 - 19 July 2025,</strong> The{" "}
            <strong> 3rd Edition </strong>
            of <strong>“Adhesives & Sealants Expo” </strong> will be organised
            concurrently with <strong>SCE2025.</strong>
          </p>

          <p>
            <strong>Location: </strong>
            Chennai Trade Centre, Chennai, India.
          </p>
          <p>
            <strong>Start: </strong> 17 July 2025 (9AM - 5:30PM)
          </p>
          <p>
            <strong>End:</strong> 19 July 2025 (10AM - 5:30PM)
          </p>
          <p>
            <strong>Contact: </strong>
            MP. Madhan
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto: madhan.mp@cii.in"> madhan.mp@cii.in</a>
          </p>
          <p>
            <strong>Phone: </strong>+91 9363905015
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="http://www.ciisce.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.ciisce.in/
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          This 3-Day Exhibition and Conference would set a platform for all the
          stakeholders from the Industry - manufacturers, distributors, solution
          providers, traders, end users and policy makers across the globe to
          meet, network, interact and establish new opportunities. International
          Conferences and Certified Training Course will be organised along with
          the Exhibition.
        </p>
        <strong>Event Fact Sheet</strong>
        <ul>
          <li>3 Days Exhibition with 10000+ sqm Display Area</li>
          <li>350+ Exhibitors</li>
          <li>1000+ Conference Delegates</li>
          <li>20,000+ Business & Trade Visitors</li>
          <li>Exclusive International Pavilions & Participations</li>
          <li>International Conference on Surface & Coating</li>
          <li>Technology Conference on Electroplating</li>
          <li>Adhesives & Sealants Summit</li>
          <li>International Summit on Corrosion Technology & Management</li>
          <li>Certified Training Course on Paints and Coatings</li>
          <li>Open Floor Talk on Automotive Materials & Fabrication</li>
          <li>Workshop on Electroplating (in Vernacular Language)</li>
          <li>Special Focus on Academia - Industry Skill Connect</li>
          <li>Certification & Training Pavilion</li>
          <li>Product Launches & Presentations</li>
        </ul>
      </div>
    </div>
  );
};

export default Event43Details;
