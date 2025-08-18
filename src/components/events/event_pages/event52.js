import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/event52.png";
const Event52Details = () => {
  return (
    <div className="event-details">
      <h1>UTECH India - Sustainable Polyurethane & Foam (ISPUF) Expo 2025</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p>
            UTECH India - Sustainable Polyurethane & Foam (ISPUF) Expo 2025 is
            the platform for leading brands and emerging players in the
            sustainable polyurethane and foam sectors in India.
          </p>

          <p>
            <strong>Location: </strong>
            Hall 6, NESCO, Bombay Exhibition Centre - Mumbai.
          </p>
          <p>
            <strong>Start: </strong> 13 November 2025 (first 2 days - 10 am - 6
            pm)
          </p>
          <p>
            <strong>End:</strong> 15 November 2025 ( 10 am - 5 pm)
          </p>
          <p>
            <strong>Contact: </strong>
            Laxmi Shrinivas
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto: laxmi@mediafusionme.com">
              {" "}
              laxmi@mediafusionme.com
            </a>
          </p>
          <p>
            <strong>Phone: </strong>+91 86556 58207
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://ifpuexpo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ifpuexpo.com/
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          UTECH India - Sustainable Polyurethane & Foam (ISPUF) Expo 2025 is the
          platform for leading brands and emerging players in the sustainable
          polyurethane and foam sectors in India. This event offers unmatched
          business opportunities for manufacturers, suppliers, and buyers to
          connect with providers of raw materials, components, machinery, and
          advanced technologies.
          <br />
          The expert led conference runs alongside the expo, featuring in-depth
          discussions led by international experts. Attendees will gain insights
          into market trends, technological advancements, and industry best
          practices, along with exceptional networking opportunities for the
          global community. The UTECH India - Sustainable Polyurethane & Foam
          Expo, in its 1st edition, introduced the Sleep Expo - India Pavilion.
          Following the overwhelming success of its first edition, the 2nd
          edition of UTECH ISPUF Expo 2025, which will take place from November
          13-15 at Hall 6, NESCO, Bombay Exhibition Centre (BEC), Mumbai, India,
          promises even greater innovations, state-of-the-art technologies, and
          significant opportunities for attendees and exhibitors to explore new
          markets, expand their business horizons, and engage with the future of
          the PU foam industry.
        </p>
      </div>
    </div>
  );
};

export default Event52Details;
