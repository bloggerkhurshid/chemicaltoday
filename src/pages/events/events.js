import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./events.css";
import hb from "../../assets/events/rockwell.webp";
import corrosion from "../../assets/events/corrosion.png";
import knowledge from "../../assets/events/knowledge.webp";
import march from "../../assets/events/image.webp";
import june from "../../assets/events/image-june.webp";
import comsol2 from "../../assets/events/image-sept.webp";

// import eventimage1 from "../../assets/events/400-x-200-GRPC-LOGO.jpg";
// import eventimage3 from "../../assets/events/400X200 pix-300dpi rwe logo.jpeg";
// import eventadvt2 from "../../assets/events/RWE Ads-13 2.jpg";
// import eventimage4 from "../../assets/events/India Chem 2024_400 x 200 pixels Logo 2.jpg";
// import eventimage5 from "../../assets/events/400x200-TURKCHEM.jpg";
// import eventimage6 from "../../assets/events/DSS Banner  (400 x 200 px).png";
// import eventimage7 from "../../assets/events/IBAAS-2024.jpg";
// import eventimage8 from "../../assets/events/SEPAWA24.jpg";
// import eventimage9 from "../../assets/events/MP-Banner.jpg";
// import eventimage10 from "../../assets/events/IPCC24.png";
// import eventimage11 from "../../assets/events/plastics.png";
// import eventimage12 from "../../assets/events/packaging.png";
// import eventimage13 from "../../assets/events/CPHI & PMEC India 2024.jpg";
// import eventimage14 from "../../assets/events/Re-source.jpg";
// import eventimage15 from "../../assets/events/PM&AE Awards 2024.png";
// import eventimage16 from "../../assets/events/PM&AC2024.png";
// import eventimage17 from "../../assets/events/IDS25.png";
// import eventimage18 from "../../assets/events/IRS_2024.jpg";
// import eventimage19 from "../../assets/events/event19.jpg";
// import eventimage20 from "../../assets/events/event20.jpg";
// import eventimage24 from "../../assets/events/event24.png";
import eventimage21 from "../../assets/events/event21.jpg";
import eventimage22 from "../../assets/events/event22.jpg";
import eventimage23 from "../../assets/events/event23.jpg";
// import eventimage25 from "../../assets/events/event25.png";
// import eventimage26 from "../../assets/events/event26.jpg";
// import eventimage27 from "../../assets/events/event27.jpg";
// import eventimage28 from "../../assets/events/28.jpg";
// import eventimage29 from "../../assets/events/event29.jpg";
// import eventimage30 from "../../assets/events/event30.png";
// import eventimage31 from "../../assets/events/OPES.png";
import eventimage32 from "../../assets/events/ARC.jpg";
import eventimage33 from "../../assets/events/everythingwater.jpg";
// import eventimage34 from "../../assets/events/IPF.jpg";
// import eventimage35 from "../../assets/events/ECV.jpg";
// import eventimage36 from "../../assets/events/36-plastics summit.png";
// import eventimage37 from "../../assets/events/37-packaging summit.png";
// import eventimage38 from "../../assets/events/38-chemical recycling summit.png";
// import eventimage39 from "../../assets/events/event39.png";
import eventimage40 from "../../assets/events/event40.png";
import eventimage41 from "../../assets/events/event41.png";
// import eventimage42 from "../../assets/events/event42.webp";
import eventimage43 from "../../assets/events/event43.webp";
// import eventimage44 from "../../assets/events/event44.webp";
// import eventimage45 from "../../assets/events/event45.jpg";
// import eventimage46 from "../../assets/events/event46.jpg";
// import eventimage47 from "../../assets/events/event47.webp";
import eventimage48 from "../../assets/events/event48.webp";
import eventimage49 from "../../assets/events/event49.webp";
import eventimage50 from "../../assets/events/event50.png";
// import eventimage51 from "../../assets/events/event51.png";
import eventimage52 from "../../assets/events/event52.png";
import eventimage53 from "../../assets/events/event53.png";
import eventimage54 from "../../assets/events/event54.png";
import eventimage55 from "../../assets/events/event55.png";
import eventimage56 from "../../assets/events/event56.jpg";
import eventimage57 from "../../assets/events/event57.png";
import eventimage58 from "../../assets/events/event58.jpg";
import eventimage59 from "../../assets/events/event59.jpg";
import eventimage60 from "../../assets/events/event60.png";
import eventimage61 from "../../assets/events/event61.jpg";
import eventimage62 from "../../assets/events/event62.png";
import eventimage63 from "../../assets/events/event63.webp";

import oilandcorrosion from "../../assets/events/corrosion-oil-and-gas.jpg";
import airpollution from "../../assets/events/airpollution.jpg";
import cosmolnew from "../../assets/events/comsol-24.jpeg";
import oilgas from "../../assets/events/oil&gas.jpg";

import airpollution2 from "../../assets/events/airpollution2.jpg";
import supplychainmanagement from "../../assets/events/Supply-Chain-Management.png";
import pharmaeventimage from "../../assets/events/Pharma-Event-Image.jpg";
import pharmaceutical from "../../assets/events/pharmaceutical-industry.png";

import oilandgas from "../../assets/events/Oil And Gas Image.jpg";
import sustainability_fs from "../../assets/events/Sustainability-FS-Image.png";
import corrosion_tech_forum from "../../assets/events/corrosion_tech_forum.jpg";
import chemical4o from "../../assets/events/Chemical 4.0.jpg";
// import adipec from "../../assets/events/ADIPEC_2024_484x252[1].jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Events = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    window.scrollTo({ top: 100 });
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div style={{ fontFamily: "Helvetica" }}>
      <div style={{ width: "90%", margin: "auto" }}>
        <Slider {...settings}>
          <a
            target="_blank"
            style={{ textDecoration: "none" }}
            href="https://www.rockwellautomation.com/en-in/capabilities/process-solutions/process-systems/campaign-process-power.html?utm_source=ThirdParty&utm_medium=Paid_Display&utm_campaign=IA_MultiIndustry_AP_CMP-07572-C1P7R9&utm_content=LP_PP_WOCDisplay_IN"
          >
            <div>
              <img
                src={hb}
                alt="First Image"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </a>
          <a
            target="_blank"
            style={{ textDecoration: "none" }}
            href="https://www.rockwellautomation.com/en-in/capabilities/process-solutions/process-systems/campaign-process-power.html?utm_source=ThirdParty&utm_medium=Paid_Display&utm_campaign=IA_MultiIndustry_AP_CMP-07572-C1P7R9&utm_content=LP_PP_WOCDisplay_IN"
          >
            <div>
              <img
                src={hb}
                alt="First Image"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </a>
        </Slider>
      </div>
      <div style={{ marginRight: "5%", marginLeft: "5%", marginTop: "40px" }}>
        <div className="cover-post-heading">
          <h3 className="cover-post-heading-text">Upcoming Webinars</h3>
        </div>
        <div className="cover-post-items-events">
          <Link
            key={1}
            to={`https://events.chemicaltoday.in/webinar/Modeling_Reaction_Kinetics_and_Pharmacokinetics_with_COMSOL/`}
            // to="#"
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img src={comsol2} alt="Oil and Gas" className="post-card-image" />
            <div className="img-text">
              <p className="text">September 11, 2025 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Modeling Reaction Kinetics and Pharmacokinetics with COMSOL®
            </p>
          </Link>
        </div>

        {/* ------------------------------------------ */}

        <div className="cover-post-heading">
          <h3 className="cover-post-heading-text">Past Webinars</h3>
        </div>
        <div className="cover-post-items-events">
          <Link
            key={1}
            to={`https://events.chemicaltoday.in/webinar/Modeling_Corrosion_Phenomena_and_Corrosion_Protection_Systems_with_COMSOL/`}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img src={june} alt="Oil and Gas" className="post-card-image" />
            <div className="img-text">
              <p className="text">June 05, 2025 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Modeling Corrosion Phenomena and Corrosion Protection Systems with
              COMSOL
            </p>
          </Link>

          <Link
            key={1}
            to={`https://events.chemicaltoday.in/webinar/Modeling_Chemical_Reactions_and_Reacting_Flows_Using_COMSOL_Multiphysics/`}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img src={march} alt="Oil and Gas" className="post-card-image" />
            <div className="img-text">
              <p className="text">March 06, 2025 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Modeling Chemical Reactions and Reacting Flows Using COMSOL
              Multiphysics
            </p>
          </Link>
          <Link
            key={1}
            to={`https://events.chemicaltoday.in/webinar/Modeling_Corrosion_and_Corrosion_Protection_Systems_with_COMSOL_Multiphysics`}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={corrosion}
              alt="Oil and Gas"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">November 28, 2024 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Modeling Corrosion and Corrosion Protection Systems with COMSOL
              Multiphysics
            </p>
          </Link>
          <Link
            key={1}
            to={`https://events.chemicaltoday.in/webinar/Multiphysics_Simulation_for_Oil_and_Gas_Processing/`}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img src={oilgas} alt="Oil and Gas" className="post-card-image" />
            <div className="img-text">
              <p className="text">July 19, 2024 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Multiphysics Simulation for Oil & Gas Processing
            </p>
          </Link>
          <Link
            key={1}
            to={`https://events.chemicaltoday.in/webinar/Modeling_Pharmaceutical_Processes_with_COMSOL_Multiphysics`}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={cosmolnew}
              alt="oil and corrosion"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">May 29, 2024 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Modeling Pharmaceutical Processes with COMSOL Multiphysics
            </p>
          </Link>

          <Link
            key={1}
            to={`https://events.chemicaltoday.in/comsol`}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={oilandcorrosion}
              alt="oil and corrosion"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">Mar 10, 2023 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Simulating Corrosion and Protection For Oil and Gas Equipment
            </p>
          </Link>
          <Link
            key={1}
            to={`https://events.chemicaltoday.in/airpollutioncontrol2/`}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={airpollution}
              alt="Air Pollution"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">July 8, 2022 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Exhaust Air Pollution Control Technologies.
            </p>
          </Link>
          <Link
            key={1}
            to={`https://events.chemicaltoday.in/airpollutioncontrol/`}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={airpollution2}
              alt="Air Pollution2"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">July 2, 2021 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Exhaust Air Pollution Control Technologies.
            </p>
          </Link>
        </div>
        <div className="cover-post-heading">
          <h3 className="cover-post-heading-text">Past Events</h3>
        </div>
        <div className="cover-post-items-events">
          <Link
            key={1}
            to={`https://events.chemicaltoday.in/Pharma/`}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={pharmaceutical}
              alt="Pharmaceutical Industry"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">Aug 12, 2022 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Pharma Connext: Formulating The Future.
            </p>
          </Link>

          <Link
            key={1}
            to={`https://events.chemicaltoday.in/SOLVENTSPHARMACOPEIA/`}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={pharmaeventimage}
              alt="Solvents Pharmacopeia"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">Sep 29, 2022 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Solvents Pharmacopeia
            </p>
          </Link>

          <Link
            key={1}
            to={`https://events.chemicaltoday.in/supplychainlogistics/`}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={supplychainmanagement}
              alt="Supply Chain & Logistics"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">Nov 11, 2022 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Chemicals in Tansit 2022
            </p>
          </Link>

          <Link
            key={1}
            to={`https://events.chemicaltoday.in/OPRSUMMIT2022/`}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={oilandgas}
              alt="Oil And Gas Image"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">June 17, 2022 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              OPR Summit 2022
            </p>
          </Link>

          <Link
            key={1}
            to={`https://events.chemicaltoday.in/sustainabilty-circularitysummit2022/`}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={sustainability_fs}
              alt="Sustainability & Circular Economy For Plastics."
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">April 8, 2022 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Sustainability Circularity Summit 2022
            </p>
          </Link>

          <Link
            key={1}
            to={`https://events.chemicaltoday.in/chemical4conference/`}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={chemical4o}
              alt="Chemical 4.0 Automating The Future."
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">July 16, 2021 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Chemical 4.0 Automating The Future.
            </p>
          </Link>
        </div>

        <div className="cover-post-heading">
          <h3 className="cover-post-heading-text">Conference</h3>
        </div>

        <div className="cover-post-items-events">
          <Link
            key={1}
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={corrosion_tech_forum}
              alt="corrosion"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">june 7-8, 2018 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Corrosion Technology Forum 2018
            </p>
          </Link>
        </div>

        <div className="cover-post-heading">
          <h3 className="cover-post-heading-text">Industrial Events</h3>
        </div>
        <div className="cover-post-items-events">
          {/* ------------------------------- */}

          {/* event 25 */}
          {/* <Link
            key={1}
            to={`/industrial_events/Sustainable_Action_Conference_2024(2.0)`}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage25}
              alt="Sustainable Action Conference 2024 (2.0)"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">November 21, 2024 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Sustainable Action Conference 2024 (2.0)
            </p>
          </Link> */}
          {/* <Link
            key={1}
            to={`/industrial_events/The_3rd_Asia_Green_Packaging_Innovation_Summit_2024`}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage12}
              alt="The 3rd Asia Green Packaging Innovation Summit 2024"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">November 21-22, 2024</p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              The 3rd Asia Green Packaging Innovation Summit 2024
            </p>
          </Link> */}
          {/* <Link
            key={1}
            to={`/industrial_events/CPHI_&_PMEC_India_2024`}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage13}
              alt="CPHI & PMEC India 2024"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">November 26-28, 2024</p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              CPHI & PMEC India 2024
            </p>
          </Link> */}
          {/* <Link
            key={2}
            to={"/industrial_events/Turkchem_2024"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage5}
              alt="Turkchem 2024"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">November 27-29, 2024 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Turkchem 2024{" "}
            </p>
          </Link>
          <Link
            key={2}
            to={
              "/industrial_events/Rethink_Circularity:_European_Circular_Economy_Summit_2024"
            }
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage24}
              alt="Turkchem 2024"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">December 5-6, 2024</p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Rethink Circularity: European Circular Economy Summit 2024
            </p>
          </Link> */}
          {/* new event added on 7th november */}
          {/* <Link
            key={2}
            to={"/industrial_events/ICC_Sustainability_Conclave_2024"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage26}
              alt="Turkchem 2024"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">December 5-6, 2024</p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              ICC Sustainability Conclave 2024
            </p>
          </Link> */}
          {/* event 30 */}
          {/* <Link
            key={2}
            to={"/industrial_events/PharmaTech_&_LabTech_Expo_2025"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage30}
              alt="PharmaTech & LabTech Expo 2025"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">January 08-10, 2025</p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              PharmaTech & LabTech Expo 2025
            </p>
          </Link> */}
          {/* .......end.......... */}

          {/* 18-09-2024 */}
          {/* <Link
            key={2}
            to={
              "/industrial_events/Industrial_Decarbonization_Summit_Road_to_Net_Zero(IDS)"
            }
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage17}
              alt="Industrial_Decarbonization_Summit_Road_to_Net_Zero(IDS)"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">January 15, 2025 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Industrial Decarbonization Summit - Road to Net Zero(IDS)
            </p>
          </Link> */}
          {/* 15-11-2024 - event 28*/}
          {/* <Link
            key={2}
            to={
              "/industrial_events/PMFAI_ICSCE_-_Trade_Show_Exhibition_and_Conference"
            }
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage28}
              alt="Industrial_Decarbonization_Summit_Road_to_Net_Zero(IDS)"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">January 21-22, 2025 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              PMFAI ICSCE- Trade Show Exhibition and conference
            </p>
          </Link> */}
          {/* 22-01-2025 - event 39*/}
          {/* <Link
            key={2}
            to={
              "/industrial_events/Global_Regulatory_Updates,_Deadline_and_Opportunities_for_25-26"
            }
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage39}
              alt="Industrial_Decarbonization_Summit_Road_to_Net_Zero(IDS)"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">February 3-6, 2025 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Global Regulatory Updates, Deadline and Opportunities for 25-26
            </p>
          </Link> */}
          {/* 20-11-2024 - event 29*/}
          {/* <Link
            key={2}
            to={"/industrial_events/Drug_Safety_Symposium_2025_-_Dubai_Chapter"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage29}
              alt="Drug Safety Symposium 2025 - Dubai Chapter"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">February 12-13, 2025 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Drug Safety Symposium 2025 - Dubai Chapter
            </p>
          </Link> */}
          {/* 08-01-2025 - event 34*/}
          {/* <Link
            key={2}
            to={"/industrial_events/IPF_Bangladesh_2025"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage34}
              alt="IPF Bangladesh 2025"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">February 12-15, 2025 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              IPF Bangladesh 2025
            </p>
          </Link> */}
          {/* 29-01-2025 - event 42*/}
          {/* <Link
            key={2}
            to={"/industrial_events/Egypt_Energy_Show(EGYPES)"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage42}
              alt="Egypt Energy Show (EGYPES)"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">February 17-19, 2025 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Egypt Energy Show (EGYPES)
            </p>
          </Link> */}
          {/* event 19 */}
          {/* <Link
            key={2}
            to={"/industrial_events/CII’s_Water_&_Waste_Expo_2025"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage19}
              alt="CII’s Water & Waste Expo 2025"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">February 20-22, 2025 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              CII’s Water & Waste Expo 2025
            </p>
          </Link> */}

          {/* event 36 */}
          {/* <Link
            key={2}
            to={"/industrial_events/2nd_Asia_Sustainable_Plastics_Summit_2025"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage36}
              alt="2nd Asia Sustainable Plastics Summit 2025"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">March 27-28, 2025</p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              2<sup>nd</sup> Asia Sustainable Plastics Summit 2025
            </p>
          </Link> */}
          {/* event 44 */}
          {/* <Link
            key={2}
            to={"/industrial_events/INDIA_PAINT_&_COATING_EXPO"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage44}
              alt="INDIA PAINT & COATING EXPO"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">April 10-12, 2025</p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              INDIA PAINT & COATING EXPO
            </p>
          </Link> */}
          {/* event 45 */}
          {/* <Link
            key={2}
            to={
              "/industrial_events/5th_Annual_Pharma_GMP_&_Quality_Management_2025"
            }
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage45}
              alt="5th Annual Pharma GMP & Quality Management 2025"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">April 24-25, 2025</p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              5th Annual Pharma GMP & Quality Management 2025
            </p>
          </Link> */}
          {/* event 46 */}
          {/* <Link
            key={2}
            to={"/industrial_events/Pharma_Quality_Excellence_Awards_2025"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage46}
              alt="Pharma Quality Excellence Awards 2025"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">April 25, 2025</p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Pharma Quality Excellence Awards 2025
            </p>
          </Link> */}
          {/* event 27 */}
          {/* <Link
            key={2}
            to={"/industrial_events/Plastasia_2025"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage27}
              alt="Plastasia 2025"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">May 09–12, 2025 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Plastasia 2025
            </p>
          </Link> */}
          {/* event-31, added 06/01/2025 */}
          {/* <Link
            key={2}
            to={"/industrial_events/Oman_Petroleum_and_Energy_Show"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage31}
              alt="Plastasia 2025"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">May 12–14, 2025 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Oman Petroleum and Energy Show
            </p>
          </Link> */}
          {/* event 37 */}
          {/* <Link
            key={2}
            to={
              "/industrial_events/The_3rd_Europe_Green_Packaging_Innovation_Summit_2025"
            }
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage37}
              alt="The 3rd Europe Green Packaging Innovation Summit 2025"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">May 20-21, 2025</p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              The 3<sup>rd</sup> Europe Green Packaging Innovation Summit 2025
            </p>
          </Link> */}
          {/* event 47 */}
          {/* <Link
            key={2}
            to={"/industrial_events/API_China"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage47}
              alt="The 3rd Europe Green Packaging Innovation Summit 2025"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">May 21-23, 2025</p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              API China
            </p>
          </Link> */}
          {/* event 38 */}
          {/* <Link
            key={2}
            to={
              "/industrial_events/Europe_Chemical_Recycling_Innovation_Summit_2025"
            }
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage38}
              alt="The 3rd Europe Green Packaging Innovation Summit 2025"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">May 22-23, 2025</p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Europe Chemical Recycling Innovation Summit 2025
            </p>
          </Link> */}
          {/* event-34, added 17/01/2025 */}
          {/* <Link
            key={2}
            to={
              "/industrial_events/The_2nd_Asia_Supply_Chain_Decarbonization_and_Sustainability_Summit_2025"
            }
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage35}
              alt="The 2nd Asia Supply Chain Decarbonization and Sustainability Summit 2025"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">May 27-28, 2025 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              The 2nd Asia Supply Chain Decarbonization and Sustainability
              Summit 2025
            </p>
          </Link> */}
          {/* event 51 */}
          {/* <Link
            key={2}
            to={
              "/industrial_events/Industrial_Pollution_Control_Congress(IPCC)_2025"
            }
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage51}
              alt="Industrial Pollution Control Congress (IPCC) 2025"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">June 13, 2025 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Industrial Pollution Control Congress (IPCC) 2025
            </p>
          </Link> */}
          {/* event-40, added 27/01/2025 */}
          {/* <Link
            key={2}
            to={"/industrial_events/CPHI_&_PMEC_China_2025"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage40}
              alt="CPHI & PMEC China 2025"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">June 24-26, 2025 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              CPHI & PMEC China 2025
            </p>
          </Link> */}
          {/* event 32 */}
          {/* <Link
            key={2}
            to={
              "/industrial_events/23rd_ARC_Industry_Leadership_Forum_Bangalore"
            }
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage32}
              alt="Plastasia 2025"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">July 10-11, 2025 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              23rd ARC Industry Leadership Forum Bangalore
            </p>
          </Link> */}
          {/* event 49 */}
          {/* <Link
            key={2}
            to={
              "/industrial_events/Global_Refining_&_Petrochemicals_Congress_2025_(GRPC_2025)"
            }
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage49}
              alt="Plastasia 2025"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">July 10-11, 2025 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Global Refining & Petrochemicals Congress 2025 (GRPC 2025)
            </p>
          </Link> */}
          {/* event 43 */}
          {/* <Link
            key={2}
            to={"/industrial_events/CII_Surface_&_Coating_Expo_2025"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage43}
              alt="CII Surface & Coating Expo 2025"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">July 17-19, 2025 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              CII Surface & Coating Expo 2025
            </p>
          </Link> */}

          {/* event 21 */}
          {/* <Link
            key={2}
            to={"/industrial_events/INACOATING_2025"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage21}
              alt="CII’s Water & Waste Expo 2025"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">July 29 –31, 2025 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              INACOATING 2025
            </p>
          </Link> */}
          {/* event 22 */}
          {/* <Link
            key={2}
            to={"/industrial_events/INAGRICHEM_2025"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage22}
              alt="INAGRICHEM 2025"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">July 29– 31, 2025</p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              INAGRICHEM 2025
            </p>
          </Link> */}
          {/* event 23 */}
          {/* <Link
            key={2}
            to={"/industrial_events/CHEMICAL_INDONESIA_2025"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage23}
              alt="CHEMICAL INDONESIA 2025"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">July 29–31, 2025</p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              CHEMICAL INDONESIA 2025
            </p>
          </Link> */}
          {/* event 41 */}
          {/* <Link
            key={2}
            to={"/industrial_events/Cosmetics_Ingredients_Expo"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage41}
              alt="Cosmetics Ingredients Expo"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">August 01-02, 2025</p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Cosmetics Ingredients Expo
            </p>
          </Link> */}
          {/* event 33 */}
          <Link
            key={2}
            to={"/industrial_events/20th_EverythingAboutWater_Expo_2025"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage33}
              alt="20th EverythingAboutWater Expo 2025"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">August 28–30, 2025</p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              20th EverythingAboutWater Expo 2025
            </p>
          </Link>
          {/* event 56 */}
          <Link
            key={2}
            to={"/industrial_events/Sustainability_Mobility_Fuels_Summit_2025"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage56}
              alt="Sustainability Mobility Fuels Summit 2025"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">September 11-12, 2025</p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Sustainability Mobility Fuels Summit 2025
            </p>
          </Link>
          {/* event 53 */}
          <Link
            key={2}
            to={"/industrial_events/PolyNext_Awards_&_Conference_Dubai_2025"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage53}
              alt="PolyNext Awards & Conference Dubai 2025"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">October 01-02, 2025</p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              PolyNext Awards & Conference Dubai 2025
            </p>
          </Link>
          {/* event 54 */}
          <Link
            key={2}
            to={"/industrial_events/Asian_Chemicals_Forum_2025"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage54}
              alt="Asian Chemicals Forum 2025"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">October 08-09, 2025</p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Asian Chemicals Forum 2025
            </p>
          </Link>
          {/* event 48 */}
          <Link
            key={2}
            to={"/industrial_events/SEPAWA_CONGRESS"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage48}
              alt="20th EverythingAboutWater Expo 2025"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">October 15–17, 2025</p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              SEPAWA CONGRESS
            </p>
          </Link>
          {/* event 58 */}
          <Link
            key={2}
            to={
              "/industrial_events/7th_Edition_ICC_Sustainability_Conclave_2025"
            }
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage58}
              alt="7th Edition ICC Sustainability Conclave 2025"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">October 30-31, 2025</p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              7<sup>th</sup> Edition ICC Sustainability Conclave 2025
            </p>
          </Link>
          {/* event 55 */}
          {/* <Link
            key={2}
            to={"/industrial_events/Asia_Bio-based_Plastics_Summit_2025"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage55}
              alt="Asia Bio-based Plastics Summit 2025"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">October 30-31, 2025</p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Asia Bio-based Plastics Summit 2025
            </p>
          </Link> */}
          {/* event 50 */}
          <Link
            key={2}
            to={"/industrial_events/ADIPEC"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img src={eventimage62} alt="ADIPEC" className="post-card-image" />
            <div className="img-text">
              <p className="text">November 3-6, 2025</p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              ADIPEC
            </p>
          </Link>
          {/* event 52 */}
          <Link
            key={2}
            to={
              "/industrial_events/UTECH_India_-_Sustainable_Polyurethane_&_Foam(ISPUF)_Expo_2025"
            }
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage52}
              alt="UTECH India - Sustainable Polyurethane & Foam (ISPUF) Expo 2025"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">November 13-15, 2025</p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              UTECH India - Sustainable Polyurethane & Foam (ISPUF) Expo 2025
            </p>
          </Link>
          {/* event 60 */}
          <Link
            key={2}
            to={
              "/industrial_events/The_4th_Asia_Green_Packaging_Innovation_Summit_2025"
            }
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage60}
              alt="The 4th Asia Green Packaging Innovation Summit 2025"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">November 13-14, 2025</p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              The 4th Asia Green Packaging Innovation Summit 2025
            </p>
          </Link>
          {/* event 61 */}
          <Link
            key={2}
            to={
              "/industrial_events/4th_Edition_Summit_on_Global_Chemicals_&_Petrochemicals_Manufacturing_Hubs_in_India"
            }
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage61}
              alt="4th Edition Summit on Global Chemicals & Petrochemicals Manufacturing Hubs in India"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">November 13-14, 2025</p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              4<sup>th</sup> Edition Summit on Global Chemicals & Petrochemicals
              Manufacturing Hubs in India
            </p>
          </Link>
          {/* event 63 */}
          <Link
            key={2}
            to={
              "/industrial_events/2025_Global_Chemical_Supply_Chain(China)_Summit"
            }
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage63}
              alt="4th Edition Summit on Global Chemicals & Petrochemicals Manufacturing Hubs in India"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">November 20-21, 2025</p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              2025 Global Chemical Supply Chain(China) Summit
            </p>
          </Link>
          {/* event 57 */}
          <Link
            key={2}
            to={"/industrial_events/CPHI_&_PMEC_India_2025"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage57}
              alt="CPHI & PMEC India 2025"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">November 25-27, 2025</p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              CPHI & PMEC India 2025
            </p>
          </Link>
          {/* event 59 */}
          <Link
            key={2}
            to={"/industrial_events/PLASTECH_INDIA_EXPO"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage59}
              alt="PLASTECH_INDIA_EXPO"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">December 11-13, 2025</p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              PLASTECH INDIA EXPO
            </p>
          </Link>
          {/* <Link
            key={2}
            to={"/industrial_events/Drug_Safety_Symposium_2024"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage6}
              alt="India_Chem_2024"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">June 27-28, 2024 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Drug Safety Symposium 2024 - India Chapter
            </p>
          </Link> */}
          {/* <Link
            key={2}
            to={
              "/industrial_events/Global_Refining__and_Petrochemicals_Congress"
            }
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage1}
              alt="Global Refining & Petrochemicals Congress"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">June 27-28, 2024 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Global Refining & Petrochemicals Congress
            </p>
          </Link> */}
          {/* <Link
            key={2}
            to={"/industrial_events/Industrial_Pollution_Control_Congress_2024"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage10}
              alt="Industrial Pollution Control Congress 2024"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">September 2, 2024 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Industrial Pollution Control Congress 2024
            </p>
          </Link> */}
          {/* <Link
            key={2}
            to={"/industrial_events/IBAAS_IIM_2024_Conference_&_Exhibition"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage7}
              alt="IBAAS-IIM 2024 Conference & Exhibition"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">September 25-27, 2024 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              IBAAS-IIM 2024 Conference & Exhibition
            </p>
          </Link> */}
          {/* <Link
            key={2}
            to={"/industrial_events/North_American_Biopolymer_Summit"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage9}
              alt="North American Biopolymer Summit"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">October 02-03, 2024 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              North American Biopolymer Summit
            </p>
          </Link> */}
          {/* <Link
            key={2}
            to={"/industrial_events/SEPAWA_CONGRESS"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage8}
              alt="SEPAWA CONGRESS"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">October 16-18, 2024 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              SEPAWA CONGRESS
            </p>
          </Link> */}
          {/* <Link
            key={2}
            to={"/industrial_events/India_Chem_2024"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage4}
              alt="India_Chem_2024"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">October 17-19, 2024 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              India Chem 2024
            </p>
          </Link> */}
          {/* ------------20/09-------- */}
          {/* <Link
            key={2}
            to={
              "/industrial_events/6th_Annual_Pharma_Manufacturing_&_Automation_Convention_2024"
            }
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage16}
              alt="6th Annual Pharma Manufacturing & Automation Convention 2024"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">October 17-18, 2024 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              6th Annual Pharma Manufacturing & Automation Convention 2024
            </p>
          </Link> */}

          {/* ------------20/09-------- */}
          {/* <Link
            key={2}
            to={
              "/industrial_events/Pharma_Manufacturing_&_Automation_Excellence_Awards_2024"
            }
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage15}
              alt="Pharma Manufacturing & Automation Excellence Awards 2024"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">October 18, 2024 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              Pharma Manufacturing & Automation Excellence Awards 2024
            </p>
          </Link> */}
          {/* ------------20/09-------- */}
          {/* <Link
            key={2}
            to={
              "/industrial_events/The_2nd_European_Sustainable_Plastics_Summit_2024"
            }
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage11}
              alt="The 2nd European Sustainable Plastics Summit 2024"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">October 22-23,2024</p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              The 2nd European Sustainable Plastics Summit 2024
            </p>
          </Link> */}
          {/* -------------- */}
          {/* <Link
            key={2}
            to={"/industrial_events/India_Refining_Summit_2024"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage18}
              alt="India Refining Summit 2024"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">October 23-24,2024</p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              India Refining Summit 2024
            </p>
          </Link> */}
          {/* <Link
            key={2}
            to={"/industrial_events/RE_Source_2024"}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage14}
              alt="RE-Source 2024"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">October 24-25,2024</p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              RE-Source 2024
            </p>
          </Link> */}
          {/* ------- */}
          {/* <Link
            key={1}
            to={`/industrial_events/ADIPEC`}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={adipec}
              alt="oil and corrosion"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">November 4-7, 2024 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              ADIPEC , Abu Dhabi, UAE
            </p>
          </Link> */}
          {/* event 20 */}
          {/* <Link
            key={1}
            to={`/industrial_events/CHEMLOG_India_2024`}
            target="_blank"
            className="news-card"
            style={{ height: "300px", width: "30%", marginBottom: "20px" }}
          >
            <img
              src={eventimage20}
              alt="CHEMLOG India 2024"
              className="post-card-image"
            />
            <div className="img-text">
              <p className="text">November 14, 2024 </p>
            </div>
            <p
              className="overlay-text"
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontFamily: "Helvitica",
              }}
            >
              CHEMLOG India 2024
            </p>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Events;
