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
import eventimage from '../../../assets/events/ADIPEC_2024_484x252[1].jpg'
const Event2Details = () => {
    return (
        <div className="event-details">
            <h1> ADIPEC </h1>
            <div className="event-header">
                <img src={eventimage} alt="Event Logo" className="event-image" />
                <div style={{fontFamily : 'Helvitica' , fontSize : 'medium'}}>
                <p>
            ADIPEC 2024 will be held in Abu Dhabi from 4-7 November 2024, with a renewed commitment to advancing tangible action across the entire energy value chain, accelerating decarbonisation and advancing the global energy transformation.                    </p>
                    <p><strong>Location:</strong>  Abu Dhabi National Exhibition Centre</p>
                    <p><strong>Start:</strong>  Monday 4 Nov:10:00AM</p>
                    <p><strong>End:</strong> Thursday 7 Nov:10:00AM - 5:00PM</p>
                    <p><strong>Contact:</strong> ADIPEC Team</p>
                    <p><strong>Email:</strong> <a href="mailto:marketing@adipec.com">marketing@adipec.com</a></p>
                    <p><strong>Phone:</strong>+971 2 444 4909</p>
                    <p><strong>Website:</strong> <a href="https://www.adipec.com/" target="_blank" rel="noopener noreferrer">https://www.adipec.com/</a></p>
                </div>
            </div>
            <div className="event-description">

                    <p>
                    ADIPEC will convene diverse energy producers, the biggest energy consumers, as well as enablers in government, finance, and technology from around the world, facilitating critical cross-sector partnerships that support the decarbonisation of heavy industries and advance climate action.
                     </p>
                     <p>
                     As the world’s largest energy conference and exhibition, ADIPEC is ideally positioned to drive forward the outcomes of COP28 and the UAE Consensus, acting as a platform for energy and related industries to demonstrate concrete actions, real progress, and credible solutions advancing an inclusive and equitable transition.
                     </p>
                     <p>
                     Join us in Abu Dhabi this November for the world’s largest energy event and help create the energy system of tomorrow, today. 

</p>

            </div>
        </div>
    );
}

export default Event2Details;
