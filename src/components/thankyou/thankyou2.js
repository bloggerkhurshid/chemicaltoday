import React from "react";
import "./ThankYouPage.css"; // Make sure to create a corresponding CSS file
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThankYouPage2 = () => {
  return (
    <div className="thank-you-container">
      <div className="thank-you-card">
        <h1>Thank You for Contacting Us</h1>
        <p>We will get back to you soon</p>
        <div className="contact-info">
          <p>If you have any questions, feel free to reach out to us:</p>
          <a href="tel:+919110637134">
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: "8px" }} />
            +91 9110637134
          </a>{" "}
          <p>
            <a href="mailto:advt@worldofchemicals.com">
              <i className="bi bi-envelope"></i>Advertise:
              advt@worldofchemicals.com
            </a>
          </p>
          <p>
            <a href="mailto:subscription@worldofchemicals.com">
              <i className="bi bi-envelope"></i> Subscribe:
              subscription@worldofchemicals.com
            </a>
          </p>
          <p>
            <a href="mailto:editorial@worldofchemicals.com">
              <i className="bi bi-envelope"></i> Editorial:
              editorial@worldofchemicals.com
            </a>
          </p>
        </div>
        <button
          className="tqbutton"
          onClick={() => (window.location.href = "/")}
        >
          Home Page
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage2;
