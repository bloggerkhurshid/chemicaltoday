import React from "react";
import "./Event1Details.css";
import eventimage from "../../../assets/events/event58.jpg";
const Event58Details = () => {
  return (
    <div className="event-details">
      <h1>
        7<sup>th</sup> Edition ICC Sustainability Conclave 2025
      </h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          {/* <p>
            CPHI & PMEC India 2025 stands as South Asia’s premier event for the
            pharmaceutical industry, bringing together the region’s top
            professionals and innovators. This influential platform fosters
            collaboration, knowledge exchange, and business growth by uniting
            industry leaders under one roof. Attendees can explore cutting-edge
            solutions, connect with key stakeholders, expand their networks, and
            stay ahead in a rapidly evolving pharmaceutical landscape. Whether
            you're looking to showcase your brand, discover new partners, or
            gain valuable insights, this is the place to be.
          </p> */}
          <p>
            <strong>Location: </strong>
            The Lalit, New Delhi
          </p>
          <p>
            <strong>Start: </strong> 9:00 A.M. Thursday, 30th October 2025
          </p>
          <p>
            <strong>End:</strong> 2:00 P.M. Friday, 31st October 2025
          </p>
          <p>
            <strong>Contact: </strong>
            Pallavi Thakur | Kush Chawla
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:pallavithakur@iccmail.in">
              {" "}
              pallavithakur@iccmail.in
            </a>{" "}
            |<a href="mailto:iccnro@iccmail.in"> iccnro@iccmail.in</a>
          </p>
          <p>
            <strong>Phone Number : </strong>
            +91 11 49147829
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://www.iccsustainabilityconclave.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.iccsustainabilityconclave.org/
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        {/* <p>
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
        </p> */}
      </div>
    </div>
  );
};

export default Event58Details;
