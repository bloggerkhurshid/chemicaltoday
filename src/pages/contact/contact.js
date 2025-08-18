import React from "react";
import "./contact.css"; // Ensure you have a CSS file with this name in your project
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactUs = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Convert form data to JSON
    const jsonData = {
      companyName: data.companyName, // Ensure these field names match your model's
      fullName: data.fullName,
      phoneNumber: data.phoneNumber,
      email: data.email,
      message: data.message,
    };
    console.log("jsons");
    console.log(jsonData);

    try {
      const response = await fetch(
        "https://admin.chemicaltoday.in/news/contact",
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
        console.log(errorData);
        throw new Error(errorData.message || "Submission failed");
      }

      // Handle success
      window.location.href = "/contact/thank-you"; // Redirect or display a success message
    } catch (error) {
      console.error("Error submitting form:", error);
      // Update the UI to show an error message
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-heading">
        <h2>Reach Out to Us</h2>
      </div>
      <div className="contact-info">
        <p>
          <a href="tel:+919110637134">
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: "8px" }} />
            +91 9110637134
          </a>
        </p>
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
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          required
        />
        <input type="text" name="fullName" placeholder="Full Name" required />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          required
          maxLength="15"
          minLength="10"
        />
        <input type="email" name="email" placeholder="Email" required />
        <textarea
          name="message"
          placeholder="Message"
          required
          rows="4"
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
