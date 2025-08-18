import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/28.jpg";
const Event28Details = () => {
  return (
    <div className="event-details">
      <h1>PMFAI ICSCE- Trade Show Exhibition and conference</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p>
            An exclusive agri input trade show driving Business Opportunities
            for all AG Chem & AG BIO companies for knowledge sharing and B2B
            organized from 1997.
          </p>
          <p>
            <strong>Location:</strong> LE Meridien Hotels and Conference Centre
            Dubai
          </p>
          <p>
            <strong>Start:</strong> 21 January 2025
          </p>
          <p>
            <strong>End:</strong> 22 January 2025
          </p>
          <p>
            <strong>Contact:</strong>Aparna Bhasin
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto: events@pmfaiindia.org">
              {" "}
              dheeresh.bangera@informa.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong> 91-22 45154705
          </p>
          <p>
            <strong>Website: </strong>
            PMFAI ICSCE - Agri Inputs Buyer-Seller Meet 2025, Dubai
            <br />
            <a
              href="https://pmfaiicsce.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://pmfaiicsce.org/
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          Meet Buyers- Sellers, Importers & Exporters, Manufacturers &
          agrochemical technical and formulators, manufacturers of
          Biopesticides, biostimulants, micronutrients & Biofertilizers,
          intermediate manufacturers, packaging material suppliers. To meet all
          key Indian Agrochemical and Ag Bio Suppliers. +90 exhibition booths ,
          learn from conference sessions and panel discussions., Gain Knowledge
          from Two Days plenary sessions- listen to Industry Experts, Scientist
          and Researchers. Generate New Markets, Sales Leads and Business
          Network
        </p>
      </div>
    </div>
  );
};

export default Event28Details;
