import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/IPF.jpg";
const Event34Details = () => {
  return (
    <div className="event-details">
      <h1>IPF Bangladesh 2025</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p>THE LARGEST FAIR FOR PLASTICS,PRINTING & PACKAGING INDUSTRIES</p>
          <p>
            <strong>Location:</strong> International Convention City Bashundhara
            (ICCB)
          </p>
          <p>
            <strong>Time[Date & Time]:</strong> 12/02/2025 - 15/02/2025 |
            11:00-19:00 (Last day till 18:30)
          </p>

          <p>
            <strong>Contact: </strong>
            <ol>
              <li>Ms. Tracy Chang (Ext. 185)</li>
              <li>Ms. Virginia Cheng (Ext.210)</li>
              <li>Ms. Gina Chou (Ext.200)</li>
            </ol>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto: exfdp@chanchao.com.tw"> exfdp@chanchao.com.tw</a>
          </p>
          <p>
            <strong>Phone:</strong> +886-2-2659-6000
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://ipf.chanchao.com.tw/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ipf.chanchao.com.tw/
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          IPF Bangladesh 2025 – The Bangladesh International Plastics, Printing,
          and Packaging Industry Fair will feature over 390 exhibitors with more
          than 800 booths from 18 countries and regions, covering an expansive
          18,000 square meters of exhibition space. The expo will spotlight
          state-of-the-art digital machinery, pioneering transformative
          solutions, and advanced raw materials, offering a dynamic B2B platform
          for industry professionals to network and discover new business
          prospects.🤝 Save your date! <br />
          👉Visitor Pre-Registration is NOW OPEN:
          <a href="https://chanchao.tw/tjDsAt" target="__blank">
            {" "}
            https://chanchao.tw/tjDsAt
          </a>
        </p>
      </div>
    </div>
  );
};

export default Event34Details;
