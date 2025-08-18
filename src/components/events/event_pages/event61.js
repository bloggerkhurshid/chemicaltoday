import React from "react";
import "./Event1Details.css";
import eventimage from "../../../assets/events/event61.jpg";
const Event61Details = () => {
  return (
    <div className="event-details">
      <h1>
        4<sup>th</sup> Edition Summit on Global Chemicals & Petrochemicals
        Manufacturing Hubs in India
      </h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          {/* <p>
            From Material Revolution to Recycling Innovation:Building a
            Zero-Waste Consumption Ecosystem
          </p> */}
          <p>
            <strong>Location: </strong>
            Bharat Mandapam, New Delhi
          </p>
          <p>
            <strong>Start: </strong> 13 November 2025
          </p>
          <p>
            <strong>End:</strong> 14 November 2025
          </p>
          <p>
            <strong>Contact: </strong>
            Manan Tyagi
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="manan.tyagi@ficci.com">manan.tyagi@ficci.com</a>
          </p>
          <p>
            <strong>Phone Number : </strong>
            9968461646
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://www.gcpmh.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.gcpmh.in/
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          The{" "}
          <strong>
            4th Edition of the Summit on Global Chemicals & Petrochemicals
            Manufacturing Hubs in India (GCPMH 2025){" "}
          </strong>
          is scheduled to be held on
          <strong> 13–14 November 2025 at Bharat Mandapam, New Delhi</strong>.
          As a premier platform for dialogue and collaboration, the Summit aims
          to catalyse growth and investment in India’s chemicals and
          petrochemicals sector by showcasing emerging opportunities across
          Petroleum, Chemicals and Petrochemicals Investment Regions (PCPIRs),
          enhancing infrastructure, ensuring sustainable feedstock availability,
          and expanding downstream capacities. With India's per capita chemical
          consumption remaining significantly below the global average and
          domestic demand continuing to rise, the Summit is envisioned to serve
          as a catalyst for transformation by promoting research and
          development, fostering skill development, and encouraging the adoption
          of sustainable and future-ready technologies. Furthermore, it will
          provide critical insights into the impact of global trade dynamics,
          evolving Free Trade Agreements (FTAs), and regulatory frameworks on
          industry competitiveness. Bringing together policymakers, industry
          leaders, global experts, and investors, GCPMH 2025 will offer a
          strategic forum to advance innovation, policy alignment, and long-term
          growth across the chemical value chain, while positioning India as a
          key player in the global chemicals and petrochemicals landscape.
        </p>
      </div>
    </div>
  );
};

export default Event61Details;
