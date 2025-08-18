import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/OPES.png";
const Event31Details = () => {
  return (
    <div className="event-details">
      <h1>Oman Petroleum and Energy Show</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p></p>
          <p>
            Oman Petroleum & Energy Show (OPES), under the patronage of the
            Ministry of Energy and Minerals, is the ultimate gateway to energy
            innovation, networking, and business opportunities, connecting
            industry leaders and driving future growth.
          </p>
          <p>
            <strong>Location:</strong> Oman Convention & Exhibition Centre
          </p>
          <p>
            <strong>Start:</strong> 12th May 2025, 9 AM
          </p>
          <p>
            <strong>End:</strong> 14th May 2025, 6 PM
          </p>
          {/* <p>
            <strong>Contact:</strong>Abhay Dave
          </p> */}
          <p>
            {" "}
            <strong>Contact Person Email:</strong>{" "}
            <ul>
              <li>
                For Space booking -
                <a href="mailto:Satyam.chopra@connectthroughus.com">
                  Satyam.chopra@connectthroughus.com
                </a>
                - Event Director
              </li>
              <li>
                For Marketing -
                <a href="mailto:Tsitsi.musumhi@connectthroughus.com">
                  Tsitsi.musumhi@connectthroughus.com
                </a>
                - Marketing Manager
              </li>
              <li>
                For Operations -
                <a href="mailto:Mughis.juned@connectthroughus.com">
                  Mughis.juned@connectthroughus.com
                </a>
                - Operations Director
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          <strong>Contact Person Name:</strong>
          <br />
          Space booking and Sponsorship opportunities: Satyam Chopra - 9934 4198
        </p>
        <p>
          <strong>Event Website:</strong>{" "}
          <a
            href="http://www.omanpetroleumandenergyshow.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://www.omanpetroleumandenergyshow.com/
          </a>
        </p>
        <p>
          Oman Petroleum & Energy Show (OPES), held under the patronage of the
          Ministry of Energy and Minerals, is Oman’s premier event serving the
          entire oil, gas, and energy industry. It offers a vital platform for
          networking, business opportunities, and showcasing innovative products
          and solutions. With tens of thousands of industry professionals in
          attendance, OPES connects energy stakeholders, decision-makers, and
          verified buyers while highlighting the latest trends and advancements
          to drive business growth.
        </p>
      </div>
    </div>
  );
};

export default Event31Details;
