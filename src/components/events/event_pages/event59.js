import React from "react";
import "./Event1Details.css";
import eventimage from "../../../assets/events/event59.jpg";
const Event59Details = () => {
  return (
    <div className="event-details">
      <h1>PLASTECH INDIA EXPO</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p>A PREMIUM EVENT ON PLASTIC & ALLIED INDUSTRY</p>
          <p>
            <strong>Location: </strong>
            CODISSIA TRADE FAIR COMPLEX, COIMBATORE
          </p>
          <p>
            <strong>Start: </strong> 11 DECEMBER 2025 AT 10:00 AM
          </p>
          <p>
            <strong>End:</strong> 13 DECEMBER 2025 AT 5:45 PM
          </p>
          <p>
            <strong>Contact: </strong>
            KASHIF RAZA
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:EXPO@MEDIADAY.CO.IN"> EXPO@MEDIADAY.CO.IN</a>
          </p>
          <p>
            <strong>Phone Number : </strong>
            +91-93421 85915
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://www.plastindiaexpo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.plastindiaexpo.com/
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          Plastech India Expo 2025 is a premier event for the plastics industry
          in India being held in Coimbatore, India. This three-day event gathers
          industry professionals, service providers, machinery and equipment
          manufacturers, technology innovators, and related stakeholders. This
          unique platform will facilitate networking, knowledge sharing, and
          business opportunities in the Indian Plastic Industry ultimately
          benefiting all participants. <br />
          The event focuses on Plastics, Polymers, Packaging, Machinery,
          Recycling, Technology & Allied Industry!
          <br />
          Tamil Nadu, one of India’s industrial hubs, plays a significant role
          in the country’s plastic technology market. The state is a vital
          player in both the manufacturing and innovation aspects of the plastic
          industry, hosting a range of activities. <br />
          The event will give opportunity to the manufacturers of Plastic
          technology and allied industry to explore new markets both within the
          state of Tamil Nadu as well as the neighbouring regions.
        </p>
      </div>
    </div>
  );
};

export default Event59Details;
