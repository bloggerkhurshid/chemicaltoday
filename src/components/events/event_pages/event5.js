// import React from 'react';

// const Event1Details = () => {
//     return (
//         <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
//             <h1>Global Refining & Petrochemicals Congress</h1>
//             <h3>8th Edition 2024</h3>
//             <p><strong>Location:</strong> Hotel Le Meridien, New Delhi, India</p>
//             <p><strong>Start:</strong> 9:00 AM, 27th June 2024</p>
//             <p><strong>End:</strong> 5:30 PM, 28th June 2024</p>
//             <p><strong>Contact:</strong> Mr. Sunny Mehta</p>
//             <p>Email: <a href="mailto:Sunny@itenmedia.in">Sunny@itenmedia.in</a></p>
//             <p>Phone: 01143013474, 09711433168</p>
//             <p>Event Website: <a href="http://www.refpet.com" target="_blank" rel="noopener noreferrer">www.refpet.com</a></p>
//             <div>
//                 <img src="path_to_left_side_image.jpg" alt="Event Logo" style={{ width: '335px', height: '270px', float: 'left' }} />
//                 <div style={{ float: 'right', width: '400px', padding: '10px' }}>
//                     <ul>
//                         <li>Smart Manufacturing</li>
//                         <li>Renewable Fuels</li>
//                         <li>Sustainability</li>
//                         <li>Commercial Opportunities</li>
//                     </ul>
//                 </div>
//                 <div style={{ clear: 'both', marginTop: '300px' }}>
//                     <p>
//                         The Global Refining & Petrochemicals Congress (GRPC) is a leading international forum for policy makers, asset owners, licensors, contractors, technology majors, research organisations & equipment suppliers to explore next generation downstream opportunities whilst collaborating on emerging & future risks across industry markets.
//                     </p>
//                     <p>
//                         The conference builds upon the existing knowledge of experts & industry stakeholders defining critical areas of collaboration including smart manufacturing, renewable fuels, sustainability, commercial opportunities, regulatory compliances, operational excellence, process technology innovations, catalyst developments & complex integrations whilst highlighting the global & regional market trends.
//                     </p>
//                     <p>
//                         It also serves as a niche-networking forum, providing an opportunity to meet and interact with the leading experts, technology partners, researchers, colleagues and friends from academia.
//                     </p>
//                     <p>
//                         Attracting a diverse and eclectic mix of speakers, delegates, exhibitors and attendees, GRPC facilitates the exchange of ideas and discussions on pertinent energy-related issues, while simultaneously meeting the strategic objectives of the industry, making it the most important event for those involved in the refining and processing of hydrocarbons.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Event1Details;

// EventDetails.js
import React from "react";
import "./Event1Details.css"; // Make sure to import the CSS file for styles
import eventimage from "../../../assets/events/400x200-TURKCHEM.jpg";
const Event5Details = () => {
  return (
    <div className="event-details">
      <h1>Turkchem 2024 </h1>
      <div className="event-header">
        <img src={eventimage} alt="Event Logo" className="event-image" />
        <div style={{ fontFamily: "Helvitica", fontSize: "medium" }}>
          <p>Turkchem 2024 "Everything About Chemistry" </p>
          <p>
            <strong>Location:</strong> Istanbul Faır Center Istanbul/Turkey
          </p>
          <p>
            <strong>Start:</strong> 27 November 10.00 a.m
          </p>
          <p>
            <strong>End:</strong> 29 November 06.00 p.m
          </p>
          <p>
            <strong>Contact:</strong>Berke Genç
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:berke.genc@artkim.com.tr">
              berke.genc@artkim.com.tr
            </a>
          </p>
          <p>
            <strong>Phone:</strong>+90 542 303 91 12
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://turkchem.com.tr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              International Chemical Industry Exhibitions | Turkchem Eurasia
              2024
            </a>
          </p>
        </div>
      </div>
      <div className="event-description">
        <p>
          10th International Fine, Specialty Chemicals, Commodity Chemicals,
          Petrochemicals, Laboratory, Test-Measurement Equipment, Process and
          Automation Industry, Packaging, Recycling and Environmental
          Technologies Exhibition
        </p>
        <p>
          Turkchem Eurasia will host sector professionals on 27-29 November 2024
          at Istanbul Expo Center.
        </p>
        <p>
          Turkchem Exhibition, which has been the meeting point of international
          sector professionals with the motto of & "Everything About Chemistry"
          for years, offers a unique platform for its exhibitors and visitors to
          establish new business contacts and discover the latest developments
          in the sector.
        </p>
        <p>
          Don’t miss the Biggest Meeting of the Chemical Industry in Turkey and
          the EMEA Region!
        </p>

        <p>
          Turkchem Eurasia, which is held every two years and is now among the
          world&#39;s leading Chemistry events.
        </p>
        <p>
          If you want to take part in the largest meeting of the chemical
          industry in Eurasia, do not miss Turkchem 2024!
        </p>
      </div>
    </div>
  );
};

export default Event5Details;
