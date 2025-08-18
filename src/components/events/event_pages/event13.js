import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/CPHI & PMEC India 2024.jpg";
const Event13Details = () => {
  return (
    <div className="event-details">
      <h1>CPHI & PMEC India 2024</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p>
            CPHI & PMEC India is South Asia’s largest pharmaceutical exhibition,
            spanning over 120,000 square meters.
          </p>
          <p>
            <strong>Location:</strong> India Expo Center, Greater Noida, Delhi
            NCR.
          </p>
          <p>
            <strong>Start:</strong> 26th November 2024 at 10:00AM IST
          </p>
          <p>
            <strong>End:</strong> 28th November 2024 at 6:00PM IST
          </p>
          <p>
            <strong>Contact:</strong>Dheeresh Bangera & Mahesh Verma
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto: dheeresh.bangera@informa.com">
              {" "}
              dheeresh.bangera@informa.com
            </a>
            <span> | </span>
            <a href="mailto: mahesh.verma@informa.com">
              {" "}
              mahesh.verma@informa.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>+91 9004021880 / 9960676015
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
          CPHI & PMEC India 2024 is a premier event in the pharmaceutical
          industry. This event unites pharmaceutical excellence across South
          Asia, offering a unique platform for industry experts to meet, learn,
          share ideas, and drive their businesses forward. It's an excellent
          opportunity for networking, discovering companies, expanding
          expertise, finding solutions, and staying at the forefront of the
          pharmaceutical industry. CPHI & PMEC India creates connections and
          inspires partnerships across the global pharma community. We champion
          innovation at the heart of pharma at our in-person and online events,
          granting you access to endless opportunity. Our powerful digital
          solutions help you to stay connected with your industry at every step
          in your journey.
        </p>
      </div>
    </div>
  );
};

export default Event13Details;
