import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/event26.jpg";
const Event26Details = () => {
  return (
    <div className="event-details">
      <h1>ICC Sustainability Conclave 2024</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p></p>
          <h5 className="subheading-description">
            A premier event to promote Sustainability and ESG in India's
            chemical industry.
          </h5>
          <p>
            <strong>Location:</strong> The Lalit Hotel, New Delhi
          </p>
          <p>
            <strong>Start:</strong> 9 AM, 5th December 2024
          </p>
          <p>
            <strong>End:</strong> 5 PM, 6th December 2024
          </p>
          <p>
            <strong>Contact:</strong>Ms. Pallavi Thakur, Mr. Dhrumil Soni
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:Pallavithakur@iccmail.in">
              Pallavithakur@iccmail.in
            </a>
            {" | "}
            <a href="mailto:dhrumilsoni@iccmail.in">dhrumilsoni@iccmail.in</a>
          </p>

          <p>
            <strong>Phone:</strong>011 49147829
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://iccsustainabilityconclave.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://iccsustainabilityconclave.org/
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          The ICC Sustainability Conclave is departmental event jointly
          organised by Department of Chemicals and Petrochemicals, Govt. of
          India and Indian Chemical Council. PricewaterhouseCoopers (PwC) a
          globally renowned entity is the Knowledge Partner for the Conclave.
          ICC Sustainability Conclave is an important platform uniting industry
          leaders, government officials, and sustainability experts to promote
          sustainable practices within India's chemical sector. Participants
          gain insights into ESG frameworks, regulatory developments, and
          innovations driving sustainable growth. With sessions on green
          chemistry, circular economy, and corporate responsibility, the
          conclave is a space for knowledge sharing, collaboration, and
          strategic development. Attendees engage in dynamic discussions,
          workshops, and networking opportunities that empower the chemical
          industry to align with global sustainability goals. For more
          information, visit the official event website.
        </p>
      </div>
    </div>
  );
};

export default Event26Details;
