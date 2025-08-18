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
import React from 'react';
import './Event1Details.css'; // Make sure to import the CSS file for styles
import eventimage from '../../../assets/events/400X200 pix-300dpi rwe logo.jpeg'
const Event3Details = () => {
    return (
        <div className="event-details">
            <h1> Reactor World Expo
 </h1>
            <div className="event-header">
                <img src={eventimage} alt="Event Logo" className="event-image" />
                <div style={{fontFamily : 'Helvitica' , fontSize : 'medium'}}>
                <p> An exhibition-seminar conclave exclusively for chemical reactors and allied industries</p>
                    <p><strong>Location:</strong>   CIDCO Exhibition & Convention Centre, Vashi, Navi Mumbai, India</p>
                    <p><strong>Date:</strong>  9th, 10th and 11th January 2025</p>
                    <p><strong>Contact:</strong> Ms. Anjali Patwardhan</p>
                    <p><strong>Email:</strong> <a href="mailto:anjali@orangebeak.com">anjali@orangebeak.com</a></p>
                    <p><strong>Phone:</strong>+91 78880 33767</p>
                    <p><strong>Website:</strong> <a href="https://reactorworldexpo.com/" target="_blank" rel="noopener noreferrer">https://reactorworldexpo.com/</a></p>
                </div>
            </div>
            <div className="event-description">

                    <p>
                    Reactor World Expo is an exhibition-seminar conclave exclusively for chemical reactors and allied industries. The chemical sector is an important entity that influences the growth of a region in many aspects. The expo will feature various chemical reactors, from laboratory-scale models to industrial-sized reactors, turbines, valves, pumps, centrifuges, sensors, heat exchangers, flanges, thermocouples, agitators, autoclaves, digesters, compressed air systems, distillation columns, specialty chemicals and everything in between along with services and technologies. It is set to be a premier gathering of industry leaders, entrepreneurs, and decision-makers.         
                                </p>
                    

            </div>
        </div>
    );
}

export default Event3Details;
