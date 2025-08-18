import React, { useState } from "react";
import "./SubscribeForm.css"; // Make sure to create a corresponding CSS file

const SubscribeForm = () => {
  const [formData, setFormData] = useState({
    subscriptionPlan: "",
    company_name: "",
    name: "",
    mailingAddress: "",
    city: "",
    state: "",
    pin: "",
    phoneOffice: "",
    phoneResi: "",
    mobile: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(formData);
  //     window.location.href = '/'; // Redirects to the home page

  //     // Add form submission logic here, such as sending the data to an API or validating the input.
  // };/
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      const response = await fetch(
        "https://admin.chemicaltoday.in/news/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log(result.message); // Success message    //     window.location.href = '/'; // Redirects to the home page
        window.location.href = "/subscribe/thank-you"; // Redirects to the home page

        // alert("Subscription added successfully.");
        // Redirect or update UI as needed
      } else {
        const error = await response.json();
        console.log(error);
        throw new Error(error.message);
      }
    } catch (error) {
      console.log("An error occurred:", error.message);

      console.error("An error occurred:", error.message);
      alert("Failed to add subscription.");
    }
  };

  return (
    <div className="subscription-container">
      <form className="subscribe-form" onSubmit={handleSubmit}>
        <h2>Subscribe to CHEMICAL TODAY</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="company_name"
          placeholder="Company Name"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="mobile"
          placeholder="Mobile"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email ID"
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div className="contact-details">
        <h3>Magazine Subscription Contact Details</h3>
        <p>
          <strong>Phone:</strong>+91 8310156283
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:subscription@worldofchemicals.com">
            subscription@worldofchemicals.com
          </a>
        </p>

        {/* <h3>Bank Details</h3>
        <p>
          <strong>Account Name:</strong> WORLD OF CHEMICALS
        </p>
        <p>
          <strong>Bank Name:</strong> IDFC First Bank
        </p>
        <p>
          <strong>Account Number:</strong> 10167995263
        </p>
        <p>
          <strong>IFSC Code:</strong> IDFB0081773
        </p>
        <p>
          <strong>Swift Code:</strong> IDFBINBBMUM
        </p>
        <p>
          <strong>MICR Code:</strong> 560751039
        </p>
        <p>
          <strong>Branch Name:</strong> K G ROAD
        </p>
        <p>
          <strong>Branch Code:</strong> 81773
        </p> */}
      </div>
    </div>
  );
};

export default SubscribeForm;
