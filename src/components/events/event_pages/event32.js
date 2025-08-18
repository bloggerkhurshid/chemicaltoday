import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/ARC.jpg";
const Event32Details = () => {
  return (
    <div className="event-details">
      <h1>
        23<sup>rd</sup> ARC Industry Leadership Forum Bangalore
      </h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p> </p>
          <p>
            Title: <strong> “Winning in the Industrial AI Era”</strong> <br />{" "}
            Increase Business Performance Through AI, Digitalization, and
            Sustainability
          </p>

          <p>
            <strong>Location:</strong> Bangalore
          </p>
          <p>
            <strong>Start:</strong> July 10, 2025. Start Time : 9:00 AM(IST)
          </p>
          <p>
            <strong>End:</strong> July 11, 2025. End Time : 4:00 PM(IST)
          </p>
          <p>
            <strong>Contact: </strong>
            Ganapathiraman G
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto: ramang@arcweb.com"> ramang@arcweb.com</a>
          </p>
          <p>
            <strong>Phone: </strong>+91 9632330000( Ganapathiraman), +91
            9354045168 (Saurabh)
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://www.arcweb.com/events/arc-industry-leadership-forum-asia-bangalore"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.arcweb.com/events/arc-industry-leadership-forum-asia-bangalore
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          ARC Industry Forums are the “must attend” networking and learning
          events for engineering, operational and IT professionals worldwide.
          The 2023 and 2024 ARC Industry Forum in-person events in Bangalore,
          India was a huge success. We are currently in the process of planning
          a broad set of Industry, Industrial AI, Data Fabric, and Metaverses,
          Transforming to 21st Century Operations, Sustainability, Energy
          Transition, Cybersecurity, Automation Innovations and APM sessions for
          2025. Please visit the Forum ARC Industry Leadership Forum Bangalore
          for a complete list of programs and sessions. ARC Forum presentations
          and workshops give you the opportunity to discuss the needs and
          challenges of user companies and present your solutions and
          developments. ARC Forums are known for end user participation.
          Sponsors invite their customers to present in-person alongside other
          sponsor-provided users. Sponsors sit on the panel along with the
          customer, as well as other users and sponsors, for Q&A with attendees.
        </p>
      </div>
    </div>
  );
};

export default Event32Details;
