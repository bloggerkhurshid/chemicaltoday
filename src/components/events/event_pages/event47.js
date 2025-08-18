import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/event47.webp";
const Event47Details = () => {
  return (
    <div className="event-details">
      <h1>API China</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p>
            Grand platform for Chinese pharmaceutic inner cycle, cradle of
            global pharmaceutic industrial chain
          </p>

          <p>
            <strong>Location: </strong>
            GuangZhou
          </p>
          <p>
            <strong>Start: </strong> May 21, 2025
          </p>
          <p>
            <strong>End:</strong> May 23, 2025
          </p>
          <p>
            <strong>Contact: </strong>
            Jasmine Wang
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto: zheng.wang@reedsinopharm">
              {" "}
              zheng.wang@reedsinopharm
            </a>
          </p>
          <p>
            <strong>Phone: </strong>+86(0)1 0 84556520
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://www.apichina.com.cn/#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.apichina.com.cn
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          Gathering 60,000+ pharma professionals from 5000+ API,Chemical drugs,
          BioPharma and formulated TCM manu-facturers and CROs/CMOs/CDMOs in
          China,API China has become the ideal business platform for
          international pharma professionals. <br /> API China, the one
          themed“Grand platform for Chinese pharmaceutic inner cycle, cradle of
          global pharmaceutic industrial chain”, hosts 1200+ exhibitors from
          ingredients, contract services and biopharma, technology, packaging,
          and machinery in each edition. <br />
          Being the most preferred platform for around 5,000 Chinese
          pharmaceutical enterprises, API China has attracted over 97% of top
          100 industrial enterprise to exhibition and procurement.
        </p>
        <ul>
          Key Show Facts
          <li>Total exhibition space of 70,000 square meters</li>
          <li>Number of exhibitors: 1200+</li>
          <li>
            Exhibitors who will continue participating next year: 92.21%. <br />{" "}
            Speech topics: 100+
          </li>
          <li>More than30,000visits from all over the world</li>
          <li>Visitors who will continue participating next year: 96%</li>
        </ul>
      </div>
    </div>
  );
};

export default Event47Details;
