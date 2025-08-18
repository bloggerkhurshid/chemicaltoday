import React from "react";
import "./advertise.css"; // Ensure you have a CSS file with this name in your project

const AdvertiseWithUs = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(
        "https://admin.chemicaltoday.in/news/advertise",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jsonData),
        }
      );

      if (response.ok) {
        // Optionally, redirect to a thank-you page or display a success message
        console.log("submitted successfully");
        window.location.href = "/contact/thank-you";
      } else {
        // Handle server errors or invalid responses
        alert("There was an error with your submission. Please try again.");
      }
    } catch (error) {
      // Handle network errors
      console.error("There was a problem with your fetch operation:", error);
      alert("Network error. Please try again.");
    }
  };

  return (
    <div className="advertise-container">
      <div className="advertise-heading">
        <h2>Interested in Advertising? Let's Connect</h2>
        <p>
          Chemical Today offers a unique global digital magazine with a
          substantial readership of nearly 250,000, providing an unparalleled
          platform for advertisers to connect with a targeted and influential
          audience in the chemical industry. With extensive regional coverage,
          the magazine ensures your products and services gain optimal
          visibility among key decision-makers and industry professionals. In
          addition to the magazine, we will promote your ads across our social
          media platforms, newsletters and e-blasts, offering multiple
          touchpoints for potential customers. By choosing to advertise with us,
          you can enhance your brand's presence and drive significant business
          growth through our dedicated and engaged readership.
        </p>
      </div>
      <div className="advertise-info">
        <p>
          Discover how our advertising solutions can help you reach your
          marketing goals. Contact us for more details.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="advertise-form">
        <input
          type="text"
          name="businessName"
          placeholder="Business Name"
          required
        />
        <input
          type="text"
          name="contactPerson"
          placeholder="Contact Person"
          required
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          required
          maxLength="15"
        />
        <input type="email" name="email" placeholder="Email" required />
        <select name="interestedIn" required>
          <option value="">Interested In</option>
          <option value="Banner Ads">Banner Ads</option>
          <option value="Sponsored Content">Sponsored Content</option>
          <option value="Email Campaigns">Email Campaigns</option>
          <option value="Custom Solutions">Custom Solutions</option>
        </select>
        <textarea
          name="additionalInformation"
          placeholder="Message"
          rows="4"
        ></textarea>
        <button type="submit">Submit Inquiry</button>
      </form>
    </div>
  );
};

export default AdvertiseWithUs;
