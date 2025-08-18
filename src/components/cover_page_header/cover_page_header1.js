import React, { useEffect, useState } from "react";
import "./CoverPageHeader.css";
import "./ts.css";
import companyLogo from "../../assets/header-assets/logo4.svg";
import magazineCover from "../../assets/magazines/September_2024/page_1.png";
import { CoverPageHeaderConstants } from "../../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import PostCommonUtils from "../../models/PostCommonUtils";
import Marquee from "react-fast-marquee"; // Import Marquee from react-fast-marquee
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SubscribePopup from "../../pages/SubscribepopUp2";
import SubscribePopup2 from "../../pages/SubscribepopUp2";

const CoverPageHeader = () => {
  const [showAdvertiseForm, setShowAdvertiseForm] = useState(false);
  const [stories, setStories] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const navigation = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleLinkClick = (e) => {
    if (!submitted) {
      e.preventDefault();
      setShowPopup(true);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      // Attempt to fetch data from backend
      try {
        var response = await PostCommonUtils.gethomepagedata();
        // Assuming the structure you provided, we extract and set the stories
        response = response.homeScreenTopSection;

        console.log("asdkjas12334");
        console.log(response.scroll_items);
        const fetchedStories = response.scroll_items.map((update) => ({
          url: update.url,
          title: update.desc,
        }));
        console.log("nasdsa");
        console.log(fetchedStories);
        setStories(fetchedStories);
      } catch (error) {
        console.error("Failed to fetch stories:", error);
        // Handle errors or set a fallback state as needed
      }
    };

    fetchData(); // Call fetchData within useEffect
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  return (
    <>
      <SubscribePopup2
        onClose={() => setShowPopup(false)}
        show={showPopup}
        setshowpopup={setShowPopup}
        navigation={navigation}
      />
      <header className="header">
        <div className="header-top">
          <div className="logo-container">
            <Link to="/" className="logo-link">
              <img className="logo" src={companyLogo} alt="Chemical Today" />
            </Link>{" "}
          </div>
          <div className="header-actions">
            <img
              className="magazineCoverImg"
              src={magazineCover}
              alt="magazine cover"
            />
            <div className="read-more">
              <p className="readMoreTest">
                {" "}
                Nexus of Progress: Mining,Technology and Rare Metals in Unison
              </p>
              <div
                className="read-more-button"
                style={{ paddingTop: "15px" }}
                onClick={handleLinkClick}
              >
                <p>{CoverPageHeaderConstants.readHere}</p>
                <p className="arrow">&rarr;</p>
              </div>
            </div>
            <div className="header-btn">
              <a href="/advertise-with-us" className="header-util-btn">
                {" "}
                {CoverPageHeaderConstants.downloadApp}{" "}
              </a>
              <a href="/subscribe" className="header-util-btn">
                {" "}
                {CoverPageHeaderConstants.magazineSubscribe}{" "}
              </a>
              <a href="/chemical-today-tv" className="header-util-btn">
                {" "}
                {CoverPageHeaderConstants.chemicalTodayTV}{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="top-stories-bar">
          <div className="container">
            <div className="row top-stories-box clearfix">
              <div className="col-sm-auto">
                <div className="top-stories-label">
                  <div className="top-stories-label-wrap">
                    <span className="flash-icon"></span>
                    {/* #bb2431 */}
                    <span className="label-txt" style={{ color: "#085EAB" }}>
                      Highlights
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm top-stories-lists">
                <div className="row align-items-center">
                  <div className="col">
                    {" "}
                    <Marquee
                      gradient={false}
                      speed={75}
                      pauseOnHover={true}
                      style={{ marginLeft: "50px", marginTop: "15px" }}
                    >
                      {stories.map((story, index) => (
                        <a
                          key={index}
                          href={story.url}
                          target="_blank"
                          style={{
                            textDecoration: "none",
                            color: "#000000", // Initially set to grey #BB2431
                            paddingLeft: "20px",
                            fontWeight: "400",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.fontWeight = "bold";
                          }} // Change color to red on hover
                          onMouseLeave={(e) => {
                            e.target.style.fontWeight = "normal";
                          }} // Change color back to grey when leaving hover
                        >
                          {story.title}
                        </a>
                      ))}
                    </Marquee>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="navigation">
          <Link to={`/Posts/1`} className="item">
            Posts
          </Link>

          <Link
            to={"/Sectors/Agrochemicals and Fertilizers/1"}
            className="item dropdown"
          >
            Sectors
            <div className="dropdown-content">
              <div className="row1" style={{ display: "flex" }}>
                <div className="column1" style={{ flex: 1 }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Link
                      to={"/Sectors/Agrochemicals and Fertilizers/1"}
                      className="insideitem"
                    >
                      Agrochemicals and Fertilizers
                    </Link>
                    <Link
                      to={"/Sectors/Biotechnology/1"}
                      className="insideitem"
                    >
                      Biotechnology
                    </Link>
                    <Link to={"/Sectors/Ceramics/1"} className="insideitem">
                      Ceramics
                    </Link>
                    <Link
                      to={"/Sectors/Cleaning and Sanitation/1"}
                      className="insideitem"
                    >
                      Cleaning and Sanitation
                    </Link>
                    <Link to={"/Sectors/Construction/1"} className="insideitem">
                      Construction
                    </Link>

                    <Link
                      to={"/Sectors/Cosmetics and Personal Care/1"}
                      className="insideitem"
                    >
                      Cosmetics and Personal Care
                    </Link>
                    <Link to={"/Sectors/Dairy/1"} className="insideitem">
                      Dairy
                    </Link>
                    <Link
                      to={"/Sectors/Electronics and Electroplating/1"}
                      className="insideitem"
                    >
                      Electronics and Electroplating
                    </Link>
                    <Link
                      to={"/Sectors/Flavours and Fragrances/1"}
                      className="insideitem"
                    >
                      Flavours and Fragrances
                    </Link>
                  </div>
                </div>
                <div className="column1" style={{ flex: 1 }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Link
                      to={"/Sectors/Food and Beverages/1"}
                      className="insideitem"
                    >
                      Food and Beverages
                    </Link>
                    <Link to={"/Sectors/Health/1"} className="insideitem">
                      Health
                    </Link>
                    <Link
                      to={"/Sectors/Inks, Dyes and Pigments/1"}
                      className="insideitem"
                    >
                      Inks, Dyes and Pigments
                    </Link>
                    <Link
                      to={"/Sectors/Iron and Steel/1"}
                      className="insideitem"
                    >
                      Iron and Steel
                    </Link>
                    <Link to={"/Sectors/Leather/1"} className="insideitem">
                      Leather
                    </Link>
                    <Link to={"/Sectors/Lubricants/1"} className="insideitem">
                      Lubricants
                    </Link>
                    <Link to={"/Sectors/Mining/1"} className="insideitem">
                      Mining
                    </Link>
                    <Link
                      to={"/Sectors/Oil and Gas, Petrochemical/1"}
                      className="insideitem"
                    >
                      Oil and Gas, Petrochemical
                    </Link>
                    <Link
                      to={"/Sectors/Paint and Coatings/1"}
                      className="insideitem"
                    >
                      Paint and Coatings
                    </Link>
                  </div>
                </div>
                <div className="column1" style={{ flex: 1 }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Link to={"/Sectors/Pharma/1"} className="insideitem">
                      Pharma
                    </Link>
                    <Link
                      to={"/Sectors/Plastic and Polymers/1"}
                      className="insideitem"
                    >
                      Plastic and Polymers
                    </Link>
                    <Link
                      to={"/Sectors/Pulp and Paper/1"}
                      className="insideitem"
                    >
                      Pulp and Paper
                    </Link>
                    <Link to={"/Sectors/Rubber/1"} className="insideitem">
                      Rubber
                    </Link>
                    <Link
                      to={"/Sectors/Soaps and Detergents/1"}
                      className="insideitem"
                    >
                      Soaps and Detergents
                    </Link>
                    <Link
                      to={"/Sectors/Specialty Chemicals/1"}
                      className="insideitem"
                    >
                      Specialty Chemicals
                    </Link>
                    <Link to={"/Sectors/Sugar/1"} className="insideitem">
                      Sugar
                    </Link>
                    <Link to={"/Sectors/Textile/1"} className="insideitem">
                      Textile
                    </Link>
                    <Link
                      to={"/Sectors/Water Treatment/1"}
                      className="insideitem"
                    >
                      Water Treatment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to={"/Reports/1"} className="item dropdown2">
            Insights
            <div className="dropdown-content2">
              <Link to={`/Reports/1`} className="insideitem">
                Reports
              </Link>
              <Link to={`/Case Studies/1`} className="insideitem">
                Case Studies
              </Link>
              <Link to={"/White Papers/1`"} className="insideitem">
                White Papers
              </Link>
              <Link to={"/R&D/1"} className="insideitem">
                R&D
              </Link>
            </div>
          </Link>

          <Link to={"/Plant Visit/1"} className="item dropdown2">
            Spotlight
            <div className="dropdown-content2">
              <Link to={"/Plant Visit/1"} className="insideitem">
                Plant Visit
              </Link>
              {/* <Link to={'featured-management'} className='insideitem'></Link> */}
              <Link to={`/Management/1`} className="insideitem">
                Management
              </Link>
            </div>
          </Link>

          <Link to={"/Products/1"} className="item">
            Product
          </Link>
          <Link to={"/events"} className="item">
            Events
          </Link>
          <Link to={"/Equipments/1"} className="item">
            Equipment
          </Link>
          <Link to={"/Sustainability/1"} className="item">
            Sustainability
          </Link>
          <Link to={"/Digitalization/1"} className="item">
            Digitalization
          </Link>
          <Link to={"/search"} className="item search-icon">
            <FontAwesomeIcon icon={faSearch} />
          </Link>
        </div>
      </header>
    </>
  );
};

export default CoverPageHeader;
