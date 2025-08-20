// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
// import companyLogo from "../../assets/header-assets/logo4.svg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

// function BasicExample() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="/">
//           <img
//             src={companyLogo} // Assuming your logo is in the public folder
//             width="120" // Set the width as needed
//             height="100" // Set the height as needed
//             className="d-inline-block align-top" // Aligns the image with text if you have any
//             alt="React Bootstrap logo" // Accessibility text
//           />
//         </Navbar.Brand>{" "}
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="/Posts/1">Posts</Nav.Link>{" "}
//             {/* Posts link added here */}
//             <NavDropdown title="Sectors" id="sectors-dropdown">
//               {/* First column of sectors */}
//               <NavDropdown.Item href="/Sectors/Plastic & Polymers/1">
//                 Plastic & Polymers
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/Sectors/Rubber/1">
//                 Rubber
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/Sectors/Specialty Chemicals/1">
//                 Specialty Chemicals
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/Sectors/Fine/Basic Chemicals/1">
//                 Fine/Basic Chemicals
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/Sectors/Food Additives/Emulsifiers/1">
//                 Food Additives/Emulsifiers
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/Sectors/Sugar/1">Sugar</NavDropdown.Item>
//               <NavDropdown.Item href="/Sectors/Health/1">
//                 Health
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/Sectors/Dairy/1">Dairy</NavDropdown.Item>
//               <NavDropdown.Item href="/Sectors/Cosmetics/1">
//                 Cosmetics
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/Sectors/Soaps & Detergents/1">
//                 Soaps & Detergents
//               </NavDropdown.Item>

//               {/* Second column of sectors */}
//               <NavDropdown.Item href="/Sectors/Flavours-Fragrances/1">
//                 Flavours & Fragrances
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/Sectors/Cleaning-Sanitation/1">
//                 Cleaning & Sanitation
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/Sectors/Biocides/1">
//                 Biocides
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/Sectors/Oil-Gas/1">
//                 Oil & Gas
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/Sectors/Petrochemicals/1">
//                 Petrochemicals
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/Sectors/Oleochemicals/1">
//                 Oleochemicals
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/Sectors/Lubricants/1">
//                 Lubricants
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/Sectors/Fluids-Fuels/1">
//                 Fluids/Fuels
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/Sectors/Surface-and-Coating/1">
//                 Surface and Coating
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/Sectors/Electroplating/1">
//                 Electroplating
//               </NavDropdown.Item>

//               {/* Third column of sectors */}
//               <NavDropdown.Item href="/Sectors/Aerosols/1">
//                 Aerosols
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/Sectors/Industrial-Gases/1">
//                 Industrial Gases
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/Sectors/Gas-Transport/1">
//                 Gas Transport
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/Sectors/Adhesives-and-Sealants/1">
//                 Adhesives and Sealants
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/Sectors/Metal-Treatment/1">
//                 Metal Treatment
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/Sectors/Construction/1">
//                 Construction
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/Sectors/Surfactants/1">
//                 Surfactants
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/Sectors/Enzymes & Hormones/1">
//                 Enzymes & Hormones
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/Sectors/Paint & Coatings/1">
//                 Paint & Coatings
//               </NavDropdown.Item>
//             </NavDropdown>
//             <NavDropdown title="Insights" id="insights-dropdown">
//               <NavDropdown.Item href="/Reports/1">Reports</NavDropdown.Item>
//               <NavDropdown.Item href="/Case Studies/1">
//                 Case Studies
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/White Papers/1">
//                 White Papers
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/R&D/1">R&D</NavDropdown.Item>
//             </NavDropdown>
//             <NavDropdown title="Spotlight" id="spotlight-dropdown">
//               <NavDropdown.Item href="/Plant Visit/1">
//                 Plant Visit
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/Management/1">
//                 Management
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="/Products/1">Product</Nav.Link>
//             <Nav.Link href="/events">Events</Nav.Link>
//             <Nav.Link href="/Equipments/1">Equipment</Nav.Link>
//             <Nav.Link href="/Sustainability/1">Sustainability</Nav.Link>
//             <Nav.Link href="/Digitalization/1">Digitalization</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default BasicExample;

import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom"; // Import useLocation and useNavigate hooks
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
// import './resp_header.css';
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import companyLogo from "../../assets/header-assets/logo4.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faArrowLeft } from "@fortawesome/free-solid-svg-icons"; // Import the back icon
import magazineCover from "../../assets/August 2025.webp";
function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle back navigation
  const handleBack = () => {
    navigate(-1);
  };

  // Determine if the back button should be displayed
  // Exclude the home path ("/") from showing the back button
  const shouldShowBackButton = location.pathname !== "/";

  return (
    shouldShowBackButton && (
      <Nav.Link onClick={handleBack} className="d-flex align-items-center">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Nav.Link>
    )
  );
}

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className="d-flex align-items-center">
          <BackButton /> {/* Place BackButton here */}
          <img
            src={companyLogo}
            width="100"
            height="85"
            className="d-inline-block align-top ms-1" // Add margin-start to space it from the button
            alt="Company Logo"
          />
        </Navbar.Brand>
        {/* changes 07-08-2025 */}
        {/* <Navbar.Brand className="d-flex align-items-center">
          <Link to="/magazine/2025/August/August+2025">
            <img
              src={magazineCover}
              width="45"
              height="60"
              className="d-inline-block align-top ms-3" // Add margin-start to space it from the button
              alt="Company Logo"
            />
            <p
              className="mb-0 ms-2 small text-black"
              style={{ fontSize: "5px" }}
            >
              The Chemical Equation Behind India’s Textile Transition
            </p>
          </Link>
        </Navbar.Brand> */}
        <Navbar.Brand>
          <Link
            to="/magazine/2025/August/August+2025"
            className="d-flex align-items-start text-decoration-none"
          >
            <img
              src={magazineCover}
              width="45"
              height="60"
              className="d-inline-block align-top"
              alt="Magazine Cover"
            />
            <div className="ms-2 d-flex flex-column justify-content-between">
              <p
                className="mb-1 mt-2 text-black"
                style={{ fontSize: "6px", lineHeight: "1.4" }}
              >
                The Chemical <br />
                Equation Behind <br /> India’s Textile Transition
              </p>
              <button
                className="btn btn-sm btn-outline-primary px-1"
                style={{
                  fontSize: "6px",
                  lineHeight: "1.2",
                  width: "fit-content",
                }}
              >
                Read More
              </button>
            </div>
          </Link>
        </Navbar.Brand>

        {/* changes 07-08-2025 */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Posts */}
            <Nav.Link href="/Posts/1">Posts</Nav.Link>

            {/* Sectors (multi-column dropdown can be customized with custom CSS) */}
            <NavDropdown
              title="Sectors"
              id="sectors-dropdown"
              className="mega-dropdown"
            >
              <div className="dropdown-columns">
                <div className="column">
                  <NavDropdown.Item href="/Sectors/Agrochemicals and Fertilizers/1">
                    Agrochemicals and Fertilizers
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Sectors/Biotechnology/1">
                    Biotechnology
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Sectors/Ceramics/1">
                    Ceramics
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Sectors/Cleaning and Sanitation/1">
                    Cleaning and Sanitation
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Sectors/Construction/1">
                    Construction
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Sectors/Cosmetics and Personal Care/1">
                    Cosmetics and Personal Care
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Sectors/Dairy/1">
                    Dairy
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Sectors/Electronics and Electroplating/1">
                    Electronics and Electroplating
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Sectors/Flavours and Fragrances/1">
                    Flavours and Fragrances
                  </NavDropdown.Item>
                </div>

                <div className="column">
                  <NavDropdown.Item href="/Sectors/Food and Beverages/1">
                    Food and Beverages
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Sectors/Health/1">
                    Health
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Sectors/Inks, Dyes and Pigments/1">
                    Inks, Dyes and Pigments
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Sectors/Iron and Steel/1">
                    Iron and Steel
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Sectors/Leather/1">
                    Leather
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Sectors/Lubricants/1">
                    Lubricants
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Sectors/Mining/1">
                    Mining
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Sectors/Oil and Gas, Petrochemical/1">
                    Oil and Gas, Petrochemical
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Sectors/Paint and Coatings/1">
                    Paint and Coatings
                  </NavDropdown.Item>
                </div>

                <div className="column">
                  <NavDropdown.Item href="/Sectors/Pharma/1">
                    Pharma
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Sectors/Plastic and Polymers/1">
                    Plastic and Polymers
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Sectors/Pulp and Paper/1">
                    Pulp and Paper
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Sectors/Rubber/1">
                    Rubber
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Sectors/Soaps and Detergents/1">
                    Soaps and Detergents
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Sectors/Specialty Chemicals/1">
                    Specialty Chemicals
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Sectors/Sugar/1">
                    Sugar
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Sectors/Textile/1">
                    Textile
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Sectors/Water Treatment/1">
                    Water Treatment
                  </NavDropdown.Item>
                </div>
              </div>
            </NavDropdown>

            {/* Insights */}
            <NavDropdown title="Insights" id="insights-dropdown">
              <NavDropdown.Item href="/Reports/1">Reports</NavDropdown.Item>
              <NavDropdown.Item href="/Case Studies/1">
                Case Studies
              </NavDropdown.Item>
              <NavDropdown.Item href="/White Papers/1">
                White Papers
              </NavDropdown.Item>
              <NavDropdown.Item href="/R&D/1">R&D</NavDropdown.Item>
            </NavDropdown>

            {/* Spotlight (with nested dropdown for Management) */}
            <NavDropdown title="Spotlight" id="spotlight-dropdown">
              <NavDropdown.Item href="/Plant Visit/1">
                Plant Visit
              </NavDropdown.Item>
              <NavDropdown
                style={{ marginLeft: "15px", marginRight: "15px", marginBottom: "15px" }}
                title="Management"
                id="management-submenu"
                drop="end"
              >
                <NavDropdown.Item href="/National/1">National</NavDropdown.Item>
                <NavDropdown.Item href="/International/1">
                  International
                </NavDropdown.Item>
                <NavDropdown.Item href="/Equipments/1">
                  Equipment
                </NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>

            {/* Other links */}
            <Nav.Link href="/Products/1">Product</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="/Logistics/1">Logistics</Nav.Link>
            <Nav.Link href="/Safety/1">Safety</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
