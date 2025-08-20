import React, { useState } from "react";
import "./Footer.css";
import companyLogo from "../../assets/header-assets/logo4.svg";
import { FooterConstants } from "../../utils/constants";
import editorialcalender from "../../assets/Chemical_Today_Editorial_Calendar.pdf";
import { FaTwitter, FaWhatsapp, FaLinkedin } from "react-icons/fa"; // Import icons from react-icons library
import SubscribePopup from "../../pages/SubscribepopUp";
import { Link } from "react-router-dom";
const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubscribeClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
      <div className="footer-main">
        <div className="footer-container">
          <div className="subscribe-text">
            {/* <p><strong>Footer</strong></p> */}
            <p>{FooterConstants.subscribeText}</p>
            <p style={{ color: "#000000" }}>{FooterConstants.subscribeInfo}</p>
          </div>
          <div className="subscribe-input">
            <button onClick={handleSubscribeClick}>
              {FooterConstants.subscribe}
            </button>
          </div>
        </div>
        <div className="footer-body">
          <div className="footer-subheadings">
            <div className="our-brands">
              <h5 className="our-brands-heading">About</h5>

              <a
                href="/about"
                className="footer-links"
                style={{ textDecoration: "none" }}
              >
                {FooterConstants.aboutUs}
              </a>
              <a
                href="/contact"
                className="footer-links"
                style={{ textDecoration: "none" }}
              >
                {FooterConstants.contactUs}
              </a>
              {/* added on 28th april 2024 */}
              {/* <a
                href="/employees-details"
                className="footer-links"
                style={{ textDecoration: "none" }}
              >
                Employees Details
              </a> */}
              {/* end */}
            </div>
            <div className="our-brands">
              <h5 className="our-brands-heading">
                {FooterConstants.usefulLinks}
              </h5>
              {/* <a
                href="/pdf-viewer/editorial-calendar"
                className="footer-links"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Editorial Calendar
              </a> */}
              {/* <a
                href="/pdf-viewer/media-kit"
                className="footer-links"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Media Kit
              </a> */}
              <a
                href="https://chem-square.com/"
                target="_blank"
                style={{ textDecoration: "none" }}
                className="footer-links"
              >
                {FooterConstants.chemSquare}
              </a>
              {/* <a
                href="/pdf-viewer/editorial-calendar"
                className="footer-links"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Editorial Calendar
              </a> */}
              {/* <a
                href="https://www.worldofchemicals.com/"
                target="_blank"
                className="footer-links"
                style={{ textDecoration: "none" }}
              >
                World Of Chemicals
              </a> */}

              {/* ---------- */}
              {/* <a
                href="/pdf-viewer/editorial-calendar"
                className="footer-links"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Editorial Calendar
              </a> */}
              <a
                href="/pdf-viewer/media-kit"
                className="footer-links"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Media Kit
              </a>
              <a
                href="https://www.worldofchemicals.com/"
                target="_blank"
                className="footer-links"
                style={{ textDecoration: "none" }}
              >
                World Of Chemicals
              </a>
              {/* <a
                href="/editorial"
                target="_blank"
                className="footer-links"
                style={{ textDecoration: "none" }}
              >
                E-Magazines
              </a> */}
            </div>

            <div className="our-brands">
              <h5 className="our-brands-heading">{FooterConstants.ourBrand}</h5>
              <a
                href="/chemical-today-tv"
                target="_blank"
                style={{ textDecoration: "none" }}
                className="footer-links"
              >
                {FooterConstants.chemicalTodayTV}
              </a>
              <a
                href="/e-magazines"
                target="_blank"
                className="footer-links"
                style={{ textDecoration: "none" }}
              >
                E-Magazines
              </a>
              <a
                href="/newsletters"
                target="_blank"
                className="footer-links"
                style={{ textDecoration: "none" }}
              >
                Newsletters
              </a>
              <a
                href="/compact-edition"
                className="footer-links"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Compact Edition
              </a>

              {/* <a>
                <Link to="/magazine/April_2024">Compact Edition</Link>
              </a> */}
            </div>

            <div className="our-brands">
              <h5 className="our-brands-heading">Others</h5>
              <a
                href="/Articles/1"
                className="footer-links"
                style={{ textDecoration: "none" }}
              >
                Articles
              </a>

              <a
                href="/Inhouse/1"
                className="footer-links"
                style={{ textDecoration: "none" }}
              >
                Inhouse Articles
              </a>

              <a
                href="/Sustainability/1"
                className="footer-links"
                style={{ textDecoration: "none" }}
              >
                Sustainability
              </a>
              <a
                href="/Digitalization/1"
                className="footer-links"
                style={{ textDecoration: "none" }}
              >
                Digitalization
              </a>
            </div>
                        <div className="our-brands">
              <h5 className="our-brands-heading">Partners</h5>

              <a
                href="/terms-and-conditions"
                className="footer-links"
                style={{ textDecoration: "none" }}
              >
                {FooterConstants.associatePartner}
              </a>
            </div>
            
            <div className="our-brands">
              <h5 className="our-brands-heading">Privacy & Terms</h5>

              <a
                href="/terms-and-conditions"
                className="footer-links"
                style={{ textDecoration: "none" }}
              >
                {FooterConstants.termsAndCond}
              </a>
              <a
                href="/privacy-and-poilicies"
                className="footer-links"
                style={{ textDecoration: "none" }}
              >
                {FooterConstants.privacyPolicy}
              </a>
            </div>
          </div>

          <div>
            <a href="/">
              <div className="footer-img">
                <img
                  src={companyLogo}
                  className="footer-logo"
                  alt="Company Logo"
                />
              </div>
            </a>
            <div className="footer-icons">
              <a href="https://twitter.com/ChemicalToday_" target="_blank">
                <div className="footer-icon">
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg> */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </div>
              </a>
              <a
                href="https://www.youtube.com/@WorldofchemicalsMedia"
                target="_blank"
              >
                <div className="footer-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FF0000"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/showcase/chemicaltoday/?originalSubdomain=in"
                style={{ textDecoration: "none", color: "#085EAB" }}
                target="_blank"
              >
                <div className="footer-icon">
                  <FaLinkedin size={28} onClick={() => {}} />
                </div>
              </a>
            </div>
            <p className="footer-copyright" style={{ color: "#000000" }}>
              {FooterConstants.copyright}
            </p>
          </div>
        </div>
        {/* disclaimer section*/}
        <div className="footer-container disclaimer ">
          <p>
            {" "}
            <strong style={{ fontSize: "14px" }}> Disclaimer: </strong>
            We strive for accuracy, but errors may occur. We are more than
            willing to correct any errors or omissions upon notification.
          </p>
        </div>
      </div>

      <SubscribePopup show={showPopup} onClose={handleClosePopup} />
    </>
  );
};

export default Footer;
