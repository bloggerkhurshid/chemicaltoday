import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/event41.png";
const Event41Details = () => {
  return (
    <div className="event-details">
      <h1>Cosmetics Ingredients Expo</h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p>
            South India's only event for sourcing ingredients, raw materials,
            formulations, extracts, and oils, for the cosmetics, personal care,
            and home care industries.
          </p>
          <p>
            <strong>Location: </strong>
            Chennai, Tamil Nadu
          </p>
          <p>
            <strong>Start: </strong> Aug 1, 2025, 10:00 AM
          </p>
          <p>
            <strong>End:</strong> Aug 2, 2025, 6:00 PM
          </p>
          <p>
            <strong>Contact: </strong>
            Kumudini Bodha
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto: kumudini@futuremarketevents.com">
              {" "}
              kumudini@futuremarketevents.com
            </a>
          </p>
          <p>
            <strong>Phone: </strong>+91 9833326239
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://cosmetics-ingredientsexpo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://cosmetics-ingredientsexpo.com/
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          The Cosmetics Ingredients Expo, scheduled for 1st & 2nd August 2025,
          is set to be bigger and better than ever. This year, it will be
          co-located with the Cospack International Expo and the Home Care
          Ingredients Expo, creating an expansive platform for networking,
          innovation, and collaboration.
          <br />
          <br />
          This event offers a comprehensive marketplace, bringing together
          leading industry players and start-ups from the cosmetics, home care,
          and personal care sectors. Explore a wide range of products and
          solutions, including:
          <ul>
            <li>Cosmetics & personal care ingredients and raw materials</li>
            <li>Nutraceuticals for skincare</li>
            <li>Home care ingredients & surfactants</li>
            <li>Ayurvedic and herbal ingredients</li>
            <li>Aerosol packaging, fragrances, and essential oils</li>
            <li>Labelling and laser marking solutions</li>
            <li>
              Formulations, specialty chemicals, and finished packaging
              solutions
            </li>
            <li>Packaging materials and much more</li>
          </ul>
          Join us to be a part of an exciting opportunity to shape the future of
          the industry!
        </p>
      </div>
    </div>
  );
};

export default Event41Details;
