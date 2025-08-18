import React, { useState } from "react";
import "./SubscribePopup.css";
import { useNavigate } from "react-router-dom";

const SubscribePopup2 = ({ show, onClose, setshowpopup, navigation }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  console.log("Adknaskdnajkdnaskx");
  if (!show) {
    console.log("num");
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
        "https://admin.chemicaltoday.in/news/magazine-pop",
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
      setshowpopup(false);
      navigate("/magazine/September_2024"); // Redirect after successful submission
    } catch (error) {
      console.error("Error submitting form:", error);
      // Update the UI to show an error message
    }
  };

  const renderForm = () => (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Read Our Digital Magazine</h2>
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
      <button type="submit">Read Now</button>
    </form>
  );

  const renderThankYouMessage = () => navigate("/magazine/September_2024"); // Redirect after successful submission

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

export default SubscribePopup2;
