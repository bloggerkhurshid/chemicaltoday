import React from "react";
import "./ThankYouPage.css"; // Make sure to create a corresponding CSS file

const ThankYouPage = () => {
  return (
    <div className="thank-you-container">
      <div className="thank-you-card">
        <h1>Thank You for Subscribing!</h1>
        <p>
          Your subscription to CHEMICAL TODAY has been successfully processed.
        </p>
        <div className="contact-info">
          <p>If you have any questions, feel free to reach out to us:</p>
          <p>📞 +91 9620220027</p>
          <p>📧 subscription@worldofchemicals.com</p>
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

export default ThankYouPage;
