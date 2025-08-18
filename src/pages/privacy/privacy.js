import React from "react";
import "../about/About.css"; // Importing the CSS file for styling

const PrivacyPolicy = () => {
  return (
    <div className="about-container">
      <h3 style={{ color: "#085EAB" }}>Privacy Statement</h3>
      <p>
        www.chemicaltoday.in is a proprietary company. Chemical Today takes your
        privacy very seriously. We have developed this privacy policy to protect
        the information gathered from our site visitors.
      </p>
      <p>
        Our web server identifies the domain name and IP address of each visitor
        to www.chemicaltoday.in, but not the e-mail address. Our log files
        collect and store domain name information. We also track information, in
        aggregate, on pages and features that users access.
      </p>
      <p>
        Chemical Today does not sell such information to third parties. The
        information we collect may be used for audits, statistical analysis,
        product development, and advertising sales efforts. We disclose site
        usage information to third parties only in aggregate. Subscribers to our
        online and offline products and services are asked to provide Personally
        Identifiable Information (name, e-mail address, job title, company).
        Chemical Today does not share this information with third parties. Each
        issue of our e-newsletters, delivered via e-mail, offer the opportunity
        to "opt out" of our distribution list.
      </p>
      <p>
        Chemical Today may modify this policy from time to time to reflect
        legal, technological, or other developments. Any such modified policy
        will appear at this URL.
      </p>
      <h3 style={{ color: "#085EAB" }}>To alter your details</h3>
      <p>If your contact details change, please Contact Us to amend them.</p>
      <h3 style={{ color: "#085EAB" }}>Voluntary Information</h3>
      <p>
        We may ask for further information about you as part of online surveys
        or if you enter any competition or other promotional feature. This
        information will be used to enable us to improve our website or online
        service. It may also be disclosed to other companies who wish to tell
        you about services of interest to you.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
