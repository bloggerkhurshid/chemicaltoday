import React from "react";
import "./ChemicalTodayTV.css"; // Assuming you have a separate CSS file for styling
import logoImage from "../../assets/ct-logo.jpg"; // Assuming the logo is stored in the assets folder
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ChemicalTodayTV = () => {
  return (
    <div style={{ margin: "5%" }}>
      <div className="ctv-container" style={{ marginBottom: "50px" }}>
        <img
          src={logoImage}
          alt="Chemical Today TV Logo"
          className="ctv-logo"
        />

        <h1>CHEMICAL TODAY TV</h1>
        <p>
          At CHEMICAL TODAY TV, we dive deep into the heart of the chemical
          industry, bringing you in-depth interviews with Corporate Leaders,
          Industry Experts, and well-known Academicians. Our content is designed
          to illuminate the latest trends, explore market dynamics, and
          highlight the strengths of organizations within the sector.
        </p>
        <p>
          As the chosen media partners for leading events, we deliver real-time,
          live video interviews that shine a spotlight on innovations and
          product showcases, directly from the event floor. Our coverage extends
          globally, reaching all stakeholders in the chemical industry and
          providing a comprehensive view of the sector.
        </p>
        <h2>Join CHEMICAL TODAY TV</h2>
        <p>
          Be a part of our online community. Upload your company’s and products’
          videos to CHEMICAL TODAY TV and gain unparalleled visibility within
          the industry. Connect with us to feature your innovations and share
          your story on a global platform.
        </p>
        <p>
          Reach out to all stakeholders in the chemical industry globally, with
          CHEMICAL TODAY TV.
        </p>
        <a
          href="https://youtube.com/@chemicaltodaytv?si=7nbMimsoW-7Uz3uF"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#085EAB" }}
        >
          Visit Chemical Today TV
        </a>
      </div>
      <div className="cover-post-heading">
        <h3 className="cover-post-heading-text">Gallery</h3>
      </div>
      <div className="cover-post-items-events">
        <Link
          key={1}
          to={`https://www.youtube.com/embed/8doRHhvzEx8`}
          target="_blank"
          className="news-card"
          style={{ height: "300px", width: "30%", marginBottom: "20px" }}
        >
          <iframe
            className="post-card-image"
            src="https://www.youtube.com/embed/8doRHhvzEx8"
          ></iframe>
          <div className="img-text" style={{ backgroundColor: "#085EAB" }}>
            <p className="text">April 8, 2022 </p>
          </div>
          <p
            className="overlay-text"
            style={{
              marginLeft: "8px",
              fontWeight: "bold",
              fontFamily: "Helvitica",
            }}
          >
            Ms. Shalini Goyal Bhalla, ICCE - SCS 2022
          </p>
        </Link>
        <Link
          key={1}
          to={`https://www.youtube.com/embed/Kb8Mjk3lRM4`}
          target="_blank"
          className="news-card"
          style={{ height: "300px", width: "30%", marginBottom: "20px" }}
        >
          <iframe
            className="post-card-image"
            src="https://www.youtube.com/embed/Kb8Mjk3lRM4"
          ></iframe>
          <div className="img-text" style={{ backgroundColor: "#085EAB" }}>
            <p className="text">April 8, 2022 </p>
          </div>
          <p
            className="overlay-text"
            style={{
              marginLeft: "8px",
              fontWeight: "bold",
              fontFamily: "Helvitica",
            }}
          >
            Dr. Ashok Menon, SABIC - SCS 2022
          </p>
        </Link>

        <Link
          key={1}
          to={`https://www.youtube.com/embed/kz9eKLis75A`}
          target="_blank"
          className="news-card"
          style={{ height: "300px", width: "30%", marginBottom: "20px" }}
        >
          <iframe
            className="post-card-image"
            src="https://www.youtube.com/embed/kz9eKLis75A"
          ></iframe>
          <div className="img-text" style={{ backgroundColor: "#085EAB" }}>
            <p className="text">April 8, 2022 </p>
          </div>
          <p
            className="overlay-text"
            style={{
              marginLeft: "8px",
              fontWeight: "bold",
              fontFamily: "Helvitica",
            }}
          >
            Mr. Satya Bhushan, BOROUGE - SCS 2022
          </p>
        </Link>

        <Link
          key={1}
          to={`https://www.youtube.com/embed/rgWv2V4z8qs`}
          target="_blank"
          className="news-card"
          style={{ height: "300px", width: "30%", marginBottom: "20px" }}
        >
          <iframe
            className="post-card-image"
            src="https://www.youtube.com/embed/rgWv2V4z8qs"
          ></iframe>
          <div className="img-text" style={{ backgroundColor: "#085EAB" }}>
            <p className="text">April 8, 2022 </p>
          </div>
          <p
            className="overlay-text"
            style={{
              marginLeft: "8px",
              fontWeight: "bold",
              fontFamily: "Helvitica",
            }}
          >
            Dr. Adrian Blum, Evonik - SCS 2022
          </p>
        </Link>

        <Link
          key={1}
          to={`https://www.youtube.com/embed/hufl-2zlQmA`}
          target="_blank"
          className="news-card"
          style={{ height: "300px", width: "30%", marginBottom: "20px" }}
        >
          <iframe
            className="post-card-image"
            src="https://www.youtube.com/embed/hufl-2zlQmA"
          ></iframe>
          <div className="img-text" style={{ backgroundColor: "#085EAB" }}>
            <p className="text">April 8, 2022 </p>
          </div>
          <p
            className="overlay-text"
            style={{
              marginLeft: "8px",
              fontWeight: "bold",
              fontFamily: "Helvitica",
            }}
          >
            Dr. Deepali Sinha Khetriwal, dss+ - SCS 2022
          </p>
        </Link>

        <Link
          key={1}
          to={`https://www.youtube.com/embed/li-rXv7ViII`}
          target="_blank"
          className="news-card"
          style={{ height: "300px", width: "30%", marginBottom: "20px" }}
        >
          <iframe
            className="post-card-image"
            src="https://www.youtube.com/embed/li-rXv7ViII"
          ></iframe>
          <div className="img-text" style={{ backgroundColor: "#085EAB" }}>
            <p className="text">Aug 3, 2021 </p>
          </div>
          <p
            className="overlay-text"
            style={{
              marginLeft: "8px",
              fontWeight: "bold",
              fontFamily: "Helvitica",
            }}
          >
            Rahul Tikoo, Huntsman Corporation - Chemical 4.0
          </p>
        </Link>

        <Link
          key={1}
          to={`https://www.youtube.com/embed/F3oN74Ze-D4`}
          target="_blank"
          className="news-card"
          style={{ height: "300px", width: "30%", marginBottom: "20px" }}
        >
          <iframe
            className="post-card-image"
            src="https://www.youtube.com/embed/F3oN74Ze-D4"
          ></iframe>
          <div className="img-text" style={{ backgroundColor: "#085EAB" }}>
            <p className="text">Aug 3, 2021 </p>
          </div>
          <p
            className="overlay-text"
            style={{
              marginLeft: "8px",
              fontWeight: "bold",
              fontFamily: "Helvitica",
            }}
          >
            Anjani Prasad, Archroma India- Chemical 4.0
          </p>
        </Link>

        <Link
          key={1}
          to={`https://www.youtube.com/embed/HDJvrIrfwtw`}
          target="_blank"
          className="news-card"
          style={{ height: "300px", width: "30%", marginBottom: "20px" }}
        >
          <iframe
            className="post-card-image"
            src="https://www.youtube.com/embed/HDJvrIrfwtw"
          ></iframe>
          <div className="img-text" style={{ backgroundColor: "#085EAB" }}>
            <p className="text">May 16, 2018 </p>
          </div>
          <p
            className="overlay-text"
            style={{
              marginLeft: "8px",
              fontWeight: "bold",
              fontFamily: "Helvitica",
            }}
          >
            Dr. Kamalakanta Routray, Reliance Industries
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ChemicalTodayTV;
