import React from "react";
import "./Event1Details.css";
import eventimage from "../../../assets/events/event57.png";
const Event57Details = () => {
  return (
    <div className="event-details">
      <h1>CPHI & PMEC India 2025</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p>
            CPHI & PMEC India 2025 stands as South Asia’s premier event for the
            pharmaceutical industry, bringing together the region’s top
            professionals and innovators. This influential platform fosters
            collaboration, knowledge exchange, and business growth by uniting
            industry leaders under one roof. Attendees can explore cutting-edge
            solutions, connect with key stakeholders, expand their networks, and
            stay ahead in a rapidly evolving pharmaceutical landscape. Whether
            you're looking to showcase your brand, discover new partners, or
            gain valuable insights, this is the place to be.
          </p>
          <p>
            <strong>Location: </strong>
            India Expo Center (IEML), Greater Noida, Delhi NCR
          </p>
          <p>
            <strong>Start: </strong> 25<sup>th</sup> Nov, 2025 10AM to 6PM
          </p>
          <p>
            <strong>End:</strong> 27<sup>th</sup> Nov, 2025 10AM to 5PM
          </p>
          <p>
            <strong>Contact: </strong>
            Dheeresh Bangera and Mahesh Verma
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:dheeresh.bangera@informa.com">
              {" "}
              dheeresh.bangera@informa.com
            </a>{" "}
            |
            <a href="mailto:mahesh.verma@informa.com">
              {" "}
              mahesh.verma@informa.com
            </a>
          </p>
          <p>
            <strong>Phone Number : </strong>
            +91 77380 85002
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://www.cphi.com/india/en/home.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.cphi.com/india/en/home.html
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          CPHI & PMEC India 2025 is South Asia’s leading pharmaceutical event,
          bringing together the region’s foremost professionals, innovators, and
          thought leaders. As a dynamic platform for collaboration and business
          development, it offers unmatched opportunities to explore the latest
          innovations, connect with key stakeholders, and gain insights that
          drive growth in a rapidly evolving pharma landscape. Whether you aim
          to showcase your brand, build strategic partnerships, or discover
          cutting-edge solutions, this is the definitive destination for the
          pharmaceutical community.
        </p>
        <p>
          More than just an event, CPHI & PMEC India is where global pharma
          comes to connect, collaborate, and transform. Through a powerful
          combination of in-person engagement and year-round digital solutions,
          we empower professionals to stay informed, build relationships, and
          unlock new opportunities at every step of their journey in the
          pharmaceutical world.
        </p>
      </div>
    </div>
  );
};

export default Event57Details;
