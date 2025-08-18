import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/IRS_2024.jpg";
const Event18Details = () => {
  return (
    <div className="event-details">
      <h1>India Refining Summit 2024</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p></p>
          <h5 className="subheading-description">
            Navigating green and sustainable technologies
          </h5>
          <p>
            <strong>Location:</strong> Eros Hotel, New Delhi
          </p>
          <p>
            <strong>Start:</strong> 23 October 2024 - 8:00 AM to 6:00 PM
          </p>
          <p>
            <strong>End:</strong> 24 October 2024 - 9:00 AM to 5:30 PM
          </p>
          <p>
            <strong>Contact:</strong>Harmandeep Kaur
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:harmandeep.kaur@india.messefrankfurt.com">
              harmandeep.kaur@india.messefrankfurt.com
            </a>
          </p>
          <p>
            <strong>Mob:</strong>+91 88605 95549
          </p>
          <p>
            <strong>Tel:</strong>+91 11 6676 2388
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://www.indiarefiningsummit.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.indiarefiningsummit.com/
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          Since its inception in 2016, India Refining Summit has grown to become
          a major gathering for the downstream oil and gas sector, drawing in a
          sizable number of attendees consisting of decision-makers, Industry
          leaders, suppliers and solution providers from both domestic and
          international markets.
          <br />
          <br />
          India‘s oil consumption is predicted to increase from 4.5 million
          barrels per day in 2023 to 5.54 million barrels per day in 2030. While
          energy transition is a top goal for today‘s refineries to become
          carbon resilient refineries of the future, the nation should also
          continue to invest extensively in traditional fuels while laying the
          foundation for the transition to green energy.
          <br />
          <br />
          With an overall yearly refining capacity of 254 million mt, the growth
          plans of 254 million mt, the growth plans of the State refiners in
          India would increasingly concentrate on improving the conversion
          ratios from crude to petrochemicals to roughly 10%-15%, from the
          current range of 4%-5%. Refiners are increasingly embracing
          petrochemical ventures as part of a broader strategy to position
          themselves for sustained growth in the event of energy transition and
          electric vehicles hitting demand for transport fuels.
          <br />
          <br />
          With the theme{" "}
          <strong>'Navigating green and sustainable technologies'</strong> the
          <span>7th India Refining Summit</span> focuses on refineries‘ holistic
          approach to becoming Next Gen Refineries, which meet demand growth,
          pursue advanced and sustainable technologies, and prioritize strategic
          measures and investments to improve the nation‘s energy resilience,
          petroleum storage capacity, and achievement of Net Zero targets.
        </p>
      </div>
    </div>
  );
};

export default Event18Details;
