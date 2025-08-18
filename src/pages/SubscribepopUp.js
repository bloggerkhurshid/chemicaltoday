import React, { useState } from "react";
import "./SubscribePopup.css";

const SubscribePopup = ({ show, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!show) {
    return null;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Convert form data to JSON
    const jsonData = {
      companyName: data.companyName,
      fullName: data.fullName,
      phoneNumber: data.phoneNumber,
      email: data.email,
      message: data.message,
    };

    try {
      const response = await fetch(
        "https://admin.chemicaltoday.in/news/subscribe-pop",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jsonData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Submission failed");
      }

      // Handle success
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Update the UI to show an error message
    }
  };

  const renderForm = () => (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Subscribe to Our Newsletter</h2>
      <div className="form-group">
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          required
        />
      </div>
      <div className="form-group">
        <input type="text" name="fullName" placeholder="Full Name" required />
      </div>
      <div className="form-group">
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          required
          maxLength="10"
          minLength="10"
        />
      </div>
      <div className="form-group">
        <input type="email" name="email" placeholder="Email" required />
      </div>
      <div className="form-group">
        <textarea
          name="message"
          placeholder="Message"
          required
          rows="4"
        ></textarea>
      </div>
      <button type="submit">Subscribe</button>
    </form>
  );

  const renderThankYouMessage = () => (
    <div className="thank-you-message">
      <h2>Thank You for Subscribing!</h2>
      <p>We appreciate your interest. You'll hear from us soon.</p>
    </div>
  );

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <span className="popup-close" onClick={onClose}>
          &times;
        </span>
        {isSubmitted ? renderThankYouMessage() : renderForm()}
      </div>
    </div>
  );
};

export default SubscribePopup;
