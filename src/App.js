import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/footer/Footer";
import companyLogo from "./assets/header-assets/logo4.svg";
// import Event1Details from "./components/events/event_pages/event1";
// import Event2Details from "./components/events/event_pages/event2";
// import Event7Details from "./components/events/event_pages/event7";
// import Event8Details from "./components/events/event_pages/event8";
// import Event9Details from "./components/events/event_pages/event9";
// import Event10Details from "./components/events/event_pages/event10";
// import Event11Details from "./components/events/event_pages/event11";
// import Event12Details from "./components/events/event_pages/event12";
// import Event14Details from "./components/events/event_pages/event14";
// import Event15Details from "./components/events/event_pages/event15";
// import Event16Details from "./components/events/event_pages/event16";
// import Event18Details from "./components/events/event_pages/event18";
// import Event20Details from "./components/events/event_pages/event20";
// import Event25Details from "./components/events/event_pages/event25";

// import Event24Details from "./components/events/event_pages/event24";
import Event21Details from "./components/events/event_pages/event21";
import Event22Details from "./components/events/event_pages/event22";
import Event23Details from "./components/events/event_pages/event23";
// import Event26Details from "./components/events/event_pages/event26";
// import Event27Details from "./components/events/event_pages/event27";
// import Event28Details from "./components/events/event_pages/event28";
// import Event29Details from "./components/events/event_pages/event29";
// import Event13Details from "./components/events/event_pages/event13";
// import Event17Details from "./components/events/event_pages/event17";
// import Event19Details from "./components/events/event_pages/event19";
// import Event30Details from "./components/events/event_pages/event30";
// import Event31Details from "./components/events/event_pages/event31";
// import Event32Details from "./components/events/event_pages/event32";
import Event33Details from "./components/events/event_pages/event33";
// import Event34Details from "./components/events/event_pages/event34";
// import Event35Details from "./components/events/event_pages/event35";
// import Event36Details from "./components/events/event_pages/event36";
// import Event37Details from "./components/events/event_pages/event37";
// import Event38Details from "./components/events/event_pages/event38";
// import Event39Details from "./components/events/event_pages/event39";
// import Event40Details from "./components/events/event_pages/event40";
import Event41Details from "./components/events/event_pages/event41";
// import Event42Details from "./components/events/event_pages/event42";
// import Event43Details from "./components/events/event_pages/event43";
// import Event44Details from "./components/events/event_pages/event44";
// import Event45Details from "./components/events/event_pages/event45";
// import Event46Details from "./components/events/event_pages/event46";
// import Event47Details from "./components/events/event_pages/event47";
import Event48Details from "./components/events/event_pages/event48";
// import Event49Details from "./components/events/event_pages/event49";
// import Event50Details from "./components/events/event_pages/event50";
// import Event51Details from "./components/events/event_pages/event51";
import Event52Details from "./components/events/event_pages/event52";
import Event53Details from "./components/events/event_pages/event53";
import Event54Details from "./components/events/event_pages/event54";
// import Event55Details from "./components/events/event_pages/event55.js";
import Event56Details from "./components/events/event_pages/event56.js";
import Event57Details from "./components/events/event_pages/event57.js";
import Event58Details from "./components/events/event_pages/event58.js";
import Event59Details from "./components/events/event_pages/event59.js";
import Event60Details from "./components/events/event_pages/event60.js";
import Event61Details from "./components/events/event_pages/event61.js";
import Event62Details from "./components/events/event_pages/event62.js";

//visiting cards
import VC1 from "./pages/visiting/VC_1.js";
import VC2 from "./pages/visiting/VC_2.js";
import VC3 from "./pages/visiting/VC_3.js";
import VC4 from "./pages/visiting/VC_4.js";
import VC5 from "./pages/visiting/VC_5.js";

import NewsLetter from "./pages/newsletter/newsletter";
import Employee from "./pages/employees/employees";
import CoverPageHeader from "./components/cover_page_header/cover_page_header";
import CoverPage from "./pages/coverpage/coverpage";
import ListNews from "./pages/list_news/listnews";
import NewsInsider from "./pages/news_insider/news_insider";
import ListCatNews from "./pages/list_cat/list_cat";
import Editorial from "./pages/editorial/editorial";
import ImageFlipBook from "./pages/magazine_demo/magazine";
import Rockwell from "./pages/Rockwell/rockwell.js";
import About from "./pages/about/About";
import Events from "./pages/events/events";
import ContactUs from "./pages/contact/contact";
import TermsAndConditions from "./pages/terms/terms";
import PrivacyPolicy from "./pages/privacy/privacy";
import ChemicalTodayTV from "./pages/ct-tv/chemicaltodaytv";
import SubscribeForm from "./pages/subscribe/subscribe";
import Sustainability from "./pages/events/events/sustainability";
import ThankYouPage from "./components/thankyou/thankyou";
import AdvertiseWithUs from "./pages/advtwithus/advtwithus";
import ThankYouPage2 from "./components/thankyou/thankyou2";
import { isMobile, isTablet, isWinPhone } from "react-device-detect";
import SearchPage from "./pages/search/search";
import BasicExample from "./components/resp_header/resp_header";
import Event3Details from "./components/events/event_pages/event3";
import Event4Details from "./components/events/event_pages/event4";
import { Helmet } from "react-helmet";
import PdfViewer from "./pages/PdfViewer/PdfViewer";
import CompactEdition from "./pages/compact-edition/compact-edition";
import mediakit from "./assets/Media_Kit_2025.pdf";

import editorialcalender from "./assets/Chemical_Today_Editorial_Calendar.pdf";
import Event5Details from "./components/events/event_pages/event5";
import Event6Details from "./components/events/event_pages/event6";
import S3PdfViewer from "./pages/s3pdfviewer/s3pdfviewer";
import Pdf from "./pages/LetterView/pdf";

function App({ currentPath }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const excludeHeaderFooterRoutes = [
    "/events/sustainability",
    "/events/sustainability",
  ];
  const shouldExcludeHeaderFooter =
    excludeHeaderFooterRoutes.includes(currentPath);
  console.log(currentPath);

  return (
    <Router>
      <div className="noselect">
        {!shouldExcludeHeaderFooter && currentPath.startsWith("/magazine") ? (
          screenWidth <= 1100 ? (
            <BasicExample />
          ) : (
            <BasicExample />
          )
        ) : screenWidth <= 1100 || isTablet || isMobile ? (
          <BasicExample />
        ) : (
          <CoverPageHeader />
        )}

        <Routes>
          {/* <Route path="/editorial" element={<Editorial />} /> */}
          <Route path="/e-magazines" element={<Editorial />} />
          <Route path="/newsletters" element={<NewsLetter />} />
          <Route path="/employees-details" element={<Employee />} />
          {/* // visiting card routes */}
          <Route path="/Visiting_Card/Shraddha_Verma" element={<VC1 />} />
          <Route path="/Visiting_Card/Harshitha_L_V" element={<VC2 />} />
          <Route path="/Visiting_Card/Nethravati_BM" element={<VC3 />} />
          <Route path="/Visiting_Card/Rajesh_Candy" element={<VC4 />} />
          <Route path="/Visiting_Card/Dakshayani_S" element={<VC5 />} />
          {/* ----newsletters change------ */}
          <Route path="/newsletters/:folder/:file" element={<Pdf />} />
          <Route path="/advertorials/rockwell" element={<Rockwell />} />
          {/* event routes */}
          {/* june */}
          {/* <Route
            path="/industrial_events/CPHI_&_PMEC_China_2025"
            element={<Event40Details />}
          /> */}
          {/* <Route
            path="/industrial_events/23rd_ARC_Industry_Leadership_Forum_Bangalore"
            element={<Event32Details />}
          /> */}
          {/* <Route
            path="/industrial_events/Global_Refining_&_Petrochemicals_Congress_2025_(GRPC_2025)"
            element={<Event49Details />}
          /> */}

          {/* july */}

          {/* <Route
            path="/industrial_events/CII_Surface_&_Coating_Expo_2025"
            element={<Event43Details />}
          /> */}
          {/* <Route
            path="/industrial_events/INACOATING_2025"
            element={<Event21Details />}
          /> */}
          {/* <Route
            path="/industrial_events/INAGRICHEM_2025"
            element={<Event22Details />}
          /> */}
          {/* <Route
            path="/industrial_events/CHEMICAL_INDONESIA_2025"
            element={<Event23Details />}
          /> */}
          {/* august */}
          {/* <Route
            path="/industrial_events/Cosmetics_Ingredients_Expo"
            element={<Event41Details />}
          /> */}

          <Route
            path="/industrial_events/20th_EverythingAboutWater_Expo_2025"
            element={<Event33Details />}
          />
          {/* september */}
          <Route
            path="/industrial_events/Sustainability_Mobility_Fuels_Summit_2025"
            element={<Event56Details />}
          />
          {/* october */}
          <Route
            path="/industrial_events/PolyNext_Awards_&_Conference_Dubai_2025"
            element={<Event53Details />}
          />
          <Route
            path="/industrial_events/Asian_Chemicals_Forum_2025"
            element={<Event54Details />}
          />
          <Route
            path="/industrial_events/SEPAWA_CONGRESS"
            element={<Event48Details />}
          />
          <Route
            path="/industrial_events/7th_Edition_ICC_Sustainability_Conclave_2025"
            element={<Event58Details />}
          />
          {/* <Route
            path="/industrial_events/Asia_Bio-based_Plastics_Summit_2025"
            element={<Event55Details />}
          /> */}
          {/* november */}
          <Route
            path="/industrial_events/ADIPEC"
            element={<Event62Details />}
          />
          <Route
            path="/industrial_events/UTECH_India_-_Sustainable_Polyurethane_&_Foam(ISPUF)_Expo_2025"
            element={<Event52Details />}
          />
          <Route
            path="/industrial_events/The_4th_Asia_Green_Packaging_Innovation_Summit_2025"
            element={<Event60Details />}
          />
          <Route
            path="/industrial_events/4th_Edition_Summit_on_Global_Chemicals_&_Petrochemicals_Manufacturing_Hubs_in_India"
            element={<Event61Details />}
          />
          <Route
            path="/industrial_events/CPHI_&_PMEC_India_2025"
            element={<Event57Details />}
          />
          {/* december */}
          <Route
            path="/industrial_events/PLASTECH_INDIA_EXPO"
            element={<Event59Details />}
          />
          {/* ............end.......... */}
          {/* <Route
            path="/industrial_events/Plastasia_2025"
            element={<Event27Details />}
          />
          

          <Route
            path="/industrial_events/INDIA_PAINT_&_COATING_EXPO"
            element={<Event44Details />}
          /> */}

          {/* ------------end------------ */}
          <Route path="/magazine/:folderName" element={<ImageFlipBook />} />
          <Route path="/about" element={<About />} />
          <Route path="/subscribe/thank-you" element={<ThankYouPage />} />
          <Route path="/contact/thank-you" element={<ThankYouPage2 />} />
          <Route path="/advertise-with-us" element={<AdvertiseWithUs />} />
          <Route path="/" element={<CoverPage />} />
          <Route path="/:newsType/:pageNo" element={<ListNews />} />
          <Route path="/news/:newsType/:id/:title?" element={<NewsInsider />} />
          {/* <Route path="/news/:newsType/:id/:title?" component={<NewsInsider/>} /> */}
          <Route path="/:newsType/:cat/:pageNo" element={<ListCatNews />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/sustainability" element={<Sustainability />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy-and-poilicies" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/chemical-today-tv" element={<ChemicalTodayTV />} />
          <Route path="/subscribe" element={<SubscribeForm />} />
          <Route path="/search" element={<SearchPage />} />
          <Route
            path="/magazine/:year/:folder/:file"
            element={<S3PdfViewer />}
          />
          <Route
            path="/pdf-viewer/media-kit"
            element={<PdfViewer file={mediakit} />}
          />
          <Route
            path="/compact-edition"
            element={
              <CompactEdition file="https://chemicaltodaywebsiet.s3.amazonaws.com/Compact+Edition.pdf" />
            }
          />
          <Route
            path="/pdf-viewer/editorial-calendar"
            element={<PdfViewer file={editorialcalender} />}
          />
        </Routes>
        {!shouldExcludeHeaderFooter && <Footer />}
      </div>
    </Router>
  );
}

export default App;
