import React from "react";
import "./editorial.css";
// import viewMore from "../../assets/home-page-assets/view-more.svg";
// import EditorialFooter from '../../components/editorialfooter/EditorialFooter';
// import share from "../../assets/home-page-assets/share_img.png";
// import TempAds from "../../assets/home-page-assets/temp-adv.png";
import edad from "../../assets/rockwell.webp";
import { Link } from "react-router-dom";

import aug2024 from "../../assets/page_1.png";
import sept2024 from "../../assets/page_1_sept.png";
import oct2024 from "../../assets/page_oct.png";
import jan2025 from "../../assets/January-2025.png";
import feb2025 from "../../assets/February-2025.png";
import mar2025 from "../../assets/March-2025.webp";
import apr2025 from "../../assets/April 2025.webp";
import may2025 from "../../assets/May-2025.webp";
import june2025 from "../../assets/June-2025.webp";
import july2025 from "../../assets/July-2025.webp";
import august2025 from "../../assets/August 2025.webp";

function Editorial() {
  return (
    <>
      <div className="editorial-body">
        <a
          href="https://www.rockwellautomation.com/en-in/capabilities/process-solutions/process-systems/campaign-process-power.html?utm_source=ThirdParty&utm_medium=Paid_Display&utm_campaign=IA_MultiIndustry_AP_CMP-07572-C1P7R9&utm_content=LP_PP_WOCDisplay_IN"
          target="_blank"
        >
          <div>
            <img className="horizontal-ads" src={edad} alt="Advertize" />
          </div>
        </a>
        <div className="editorial">
          <div className="editorial-heading">
            <h3 className="editorial-heading-text">2025</h3>
          </div>
        </div>
        <div className="editorial-items">
          {/* August 2025 */}
          <div className="editorial-item1">
            <Link to="/magazine/2025/August/August+2025">
              <img
                src={august2025}
                style={{ height: "200px", width: "150px" }}
                alt="August 2025"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                August 2025
              </div>
            </Link>
          </div>
          {/* July 2025 */}
          <div className="editorial-item1">
            <Link to="/magazine/2025/July/July+2025">
              <img
                src={july2025}
                style={{ height: "200px", width: "150px" }}
                alt="June 2025"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                July 2025
              </div>
            </Link>
          </div>
          {/* June 2025 */}
          <div className="editorial-item1">
            <Link to="/magazine/2025/June/June+2025">
              <img
                src={june2025}
                style={{ height: "200px", width: "150px" }}
                alt="June 2025"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                June 2025
              </div>
            </Link>
          </div>
          {/* May 2025 */}
          <div className="editorial-item1">
            <Link to="/magazine/2025/May/May+2025">
              <img
                src={may2025}
                style={{ height: "200px", width: "150px" }}
                alt="May 2025"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                May 2025
              </div>
            </Link>
          </div>
          {/* April 2025 */}
          <div className="editorial-item1">
            <Link to="/magazine/2025/April/April+2025">
              <img
                src={apr2025}
                style={{ height: "200px", width: "150px" }}
                alt="April 2025"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                April 2025
              </div>
            </Link>
          </div>
          {/* March 2025 */}
          <div className="editorial-item1">
            <Link to="/magazine/2025/March/March+2025">
              <img
                src={mar2025}
                style={{ height: "200px", width: "150px" }}
                alt="March 2025"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                March 2025
              </div>
            </Link>
          </div>
          {/* February 2025 */}
          <div className="editorial-item1">
            <Link to="/magazine/2025/February/February+2025">
              <img
                src={feb2025}
                style={{ height: "200px", width: "150px" }}
                alt="January 2025"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                February 2025
              </div>
            </Link>
          </div>
          {/* January 2025 */}
          <div className="editorial-item1">
            <Link to="/magazine/2025/January/January+2025">
              <img
                src={jan2025}
                style={{ height: "200px", width: "150px" }}
                alt="January 2025"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                January 2025
              </div>
            </Link>
          </div>
        </div>

        <div className="editorial">
          <div className="editorial-heading">
            <h3 className="editorial-heading-text">2024</h3>
          </div>
        </div>

        <div className="editorial-items">
          {/* april 2024 */}
          <div className="editorial-item1">
            <Link to="/magazine/2024/April/April+2024">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2024/April/4.+April+2024-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="April 2024"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                April 2024
              </div>
            </Link>
          </div>
          {/* may 2024 */}
          <div className="editorial-item1">
            <Link to="/magazine/2024/May/May+2024">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2024/May/5.+May+2024-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="May 2024"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                May 2024
              </div>
            </Link>
          </div>
          {/* june 2024 */}
          <div className="editorial-item1">
            <Link to="/magazine/2024/June/June+2024">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2024/June/6.+June+2024-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="June 2024"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                June 2024
              </div>
            </Link>
          </div>

          {/* july 2024 */}
          <div className="editorial-item1">
            <Link to="/magazine/2024/July/July+2024">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2024/July/page_1.png"
                style={{ height: "200px", width: "150px" }}
                alt="July 2024"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                July 2024
              </div>
            </Link>
          </div>
          {/* august 2024 */}
          <div className="editorial-item1">
            <Link to="/magazine/2024/August/August+2024">
              <img
                src={aug2024}
                style={{ height: "200px", width: "150px" }}
                alt="August 2024"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                August 2024
              </div>
            </Link>
          </div>
          {/* september 2024 */}
          <div className="editorial-item1">
            <Link to="/magazine/2024/September/September+2024">
              <img
                src={sept2024}
                style={{ height: "200px", width: "150px" }}
                alt="September 2024"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                September 2024
              </div>
            </Link>
          </div>
          {/* october 2024 */}
          <div className="editorial-item1">
            <Link to="/magazine/2024/October/October+2024">
              <img
                src={oct2024}
                style={{ height: "200px", width: "150px" }}
                alt="October 2024"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                October 2024
              </div>
            </Link>
          </div>
          {/* november 2024 */}
          <div className="editorial-item1">
            <Link to="/magazine/2024/November/November+2024">
              <img
                src="https://chemicaltodaywebsiet.s3.us-east-1.amazonaws.com/2024/November/page_1.png"
                style={{ height: "200px", width: "150px" }}
                alt="November 2024"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                November 2024
              </div>
            </Link>
          </div>

          {/* december 2024 */}
          <div className="editorial-item1">
            <Link to="/magazine/2024/December/December+2024">
              <img
                src="https://chemicaltodaywebsiet.s3.us-east-1.amazonaws.com/2024/December/December+2024-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="April 2024"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                December 2024
              </div>
            </Link>
          </div>
        </div>
        {/* ----------------- 2023 ---------- */}
        <div className="editorial">
          <div className="editorial-heading">
            <h3 className="editorial-heading-text">2023</h3>
          </div>
        </div>

        <div className="editorial-items">
          {/* january 2023 */}
          <div className="editorial-item1">
            <Link to="/magazine/2023/January/January+2023">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2023/January/page_1.png"
                style={{ height: "200px", width: "150px" }}
                alt="January 2023"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                January 2023
              </div>
            </Link>
          </div>

          {/* february 2023 */}
          <div className="editorial-item1">
            <Link to="/magazine/2023/February/February+2023">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2023/February/February+2023-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="february 2023"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                February 2023
              </div>
            </Link>
          </div>
        </div>

        {/* Other items */}

        <div className="editorial">
          <div className="editorial-heading">
            <h3 className="editorial-heading-text">2022</h3>
          </div>
        </div>

        <div className="editorial-items">
          <div className="editorial-item1">
            <Link to="/magazine/2022/January/January+2022">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2022/January/page_1.png"
                style={{ height: "200px", width: "150px" }}
                alt="June 2024"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                January 2022
              </div>
            </Link>
          </div>
          <div className="editorial-item1">
            <Link to="/magazine/2022/February/February+2022">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2022/February/page_1.png"
                style={{ height: "200px", width: "150px" }}
                alt="February 2022"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                February 2022
              </div>
            </Link>
          </div>

          <div className="editorial-item1">
            <Link to="/magazine/2022/March/March+2022">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2022/March/page_1.png"
                style={{ height: "200px", width: "150px" }}
                alt="March 2022"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                March 2022
              </div>
            </Link>
          </div>

          {/* Continue for other months as needed */}
          <div className="editorial-item1">
            <Link to="/magazine/2022/April/April+2022">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2022/April/page_1.png"
                style={{ height: "200px", width: "150px" }}
                alt="April 2022"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                April 2022
              </div>
            </Link>
          </div>

          <div className="editorial-item1">
            <Link to="/magazine/2022/May/May+2022">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2022/May/page_1.png"
                style={{ height: "200px", width: "150px" }}
                alt="May 2022"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                May 2022
              </div>
            </Link>
          </div>

          <div className="editorial-item1">
            <Link to="/magazine/2022/June/June+2022">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2022/June/page_1.png"
                style={{ height: "200px", width: "150px" }}
                alt="June 2022"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                June 2022
              </div>
            </Link>
          </div>

          {/* Add more months as needed */}
          <div className="editorial-item1">
            <Link to="/magazine/2022/July/July+2022">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2022/July/page_1.png"
                style={{ height: "200px", width: "150px" }}
                alt="July 2022"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                July 2022
              </div>
            </Link>
          </div>

          <div className="editorial-item1">
            <Link to="/magazine/2022/August/August+2022">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2022/August/page_1.png"
                style={{ height: "200px", width: "150px" }}
                alt="August 2022"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                August 2022
              </div>
            </Link>
          </div>

          <div className="editorial-item1">
            <Link to="/magazine/2022/September/September+2022">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2022/September/page_1.png"
                style={{ height: "200px", width: "150px" }}
                alt="September 2022"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                September 2022
              </div>
            </Link>
          </div>

          <div className="editorial-item1">
            <Link to="/magazine/2022/October/October+2022">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2022/October/page_1.png"
                style={{ height: "200px", width: "150px" }}
                alt="October 2022"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                October 2022
              </div>
            </Link>
          </div>

          <div className="editorial-item1">
            <Link to="/magazine/2022/November/November+2022">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2022/November/page_1.png"
                style={{ height: "200px", width: "150px" }}
                alt="November 2022"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                November 2022
              </div>
            </Link>
          </div>

          <div className="editorial-item1">
            <Link to="/magazine/2022/December/December+2022">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2022/December/page_1.png"
                style={{ height: "200px", width: "150px" }}
                alt="December 2022"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                December 2022
              </div>
            </Link>
          </div>

          {/* Other items */}
        </div>
        {/* ------------- 2021 -------------- */}
        <div className="editorial">
          <div className="editorial-heading">
            <h3 className="editorial-heading-text">2021</h3>
          </div>
        </div>

        <div className="editorial-items">
          {/* january 2021 */}
          <div className="editorial-item1">
            <Link to="/magazine/2021/January/January+2021">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2021/January/page_1.png"
                style={{ height: "200px", width: "150px" }}
                alt="January 2021"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                January 2021
              </div>
            </Link>
          </div>

          {/* feb 2021 */}
          <div className="editorial-item1">
            <Link to="/magazine/2021/February/February+2021">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2021/February/page_1.png"
                style={{ height: "200px", width: "150px" }}
                alt="February 2021"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                February 2021
              </div>
            </Link>
          </div>

          {/* march 2021 */}
          <div className="editorial-item1">
            <Link to="/magazine/2021/March/March+2021">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2021/March/page_1.png"
                style={{ height: "200px", width: "150px" }}
                alt="March 2021"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                March 2021
              </div>
            </Link>
          </div>

          {/* april 2021 */}
          <div className="editorial-item1">
            <Link to="/magazine/2021/April/April+2021">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2021/April/page_1.png"
                style={{ height: "200px", width: "150px" }}
                alt="April 2021"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                April 2021
              </div>
            </Link>
          </div>

          {/* may 2021 */}
          <div className="editorial-item1">
            <Link to="/magazine/2021/May/May+2021">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2021/May/page_1.png"
                style={{ height: "200px", width: "150px" }}
                alt="May 2021"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                May 2021
              </div>
            </Link>
          </div>

          {/* june 2021 */}
          <div className="editorial-item1">
            <Link to="/magazine/2021/June/June+2021">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2021/June/page_1.png"
                style={{ height: "200px", width: "150px" }}
                alt="June 2021"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                June 2021
              </div>
            </Link>
          </div>

          {/* july 2021 */}
          <div className="editorial-item1">
            <Link to="/magazine/2021/July/July+2021">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2021/July/page_1.png"
                style={{ height: "200px", width: "150px" }}
                alt="July 2021"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                July 2021
              </div>
            </Link>
          </div>

          {/* august 2021 */}
          <div className="editorial-item1">
            <Link to="/magazine/2021/August/August+2021">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2021/August/page_1.png"
                style={{ height: "200px", width: "150px" }}
                alt="August 2021"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                August 2021
              </div>
            </Link>
          </div>

          {/* september 2021 */}
          <div className="editorial-item1">
            <Link to="/magazine/2021/September/September+2021">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2021/September/page_1.png"
                style={{ height: "200px", width: "150px" }}
                alt="September 2021"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                September 2021
              </div>
            </Link>
          </div>

          {/* october 2021 */}
          <div className="editorial-item1">
            <Link to="/magazine/2021/October/October+2021">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2021/October/page_1.png"
                style={{ height: "200px", width: "150px" }}
                alt="October 2021"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                October 2021
              </div>
            </Link>
          </div>

          {/* november 2021 */}
          <div className="editorial-item1">
            <Link to="/magazine/2021/November/November+2021">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2021/November/page_1.png"
                style={{ height: "200px", width: "150px" }}
                alt="November 2021"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                November 2021
              </div>
            </Link>
          </div>

          {/* December 2021 */}
          <div className="editorial-item1">
            <Link to="/magazine/2021/December/December+2021">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2021/December/page_1.png"
                style={{ height: "200px", width: "150px" }}
                alt="December 2021"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                December 2021
              </div>
            </Link>
          </div>
        </div>

        {/* ------------- 2020 -------------- */}
        <div className="editorial">
          <div className="editorial-heading">
            <h3 className="editorial-heading-text">2020</h3>
          </div>
        </div>

        <div className="editorial-items">
          {/* february 2020 */}
          <div className="editorial-item1">
            <Link to="/magazine/2020/February/February+2020">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2020/February/2.+February+2020-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="February 2020"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                February 2020
              </div>
            </Link>
          </div>

          {/* march 2020 */}
          <div className="editorial-item1">
            <Link to="/magazine/2020/March/March+2020">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2020/March/3.+March+2020-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="March 2020"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                March 2020
              </div>
            </Link>
          </div>

          {/* april 2020 */}
          <div className="editorial-item1">
            <Link to="/magazine/2020/April/April+2020">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2020/April/4.+April+2020-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="April 2020"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                April 2020
              </div>
            </Link>
          </div>

          {/* may 2020 */}
          <div className="editorial-item1">
            <Link to="/magazine/2020/May/May+2020">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2020/May/5.+May+2020-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="May 2020"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                May 2020
              </div>
            </Link>
          </div>

          {/* june 2020 */}
          <div className="editorial-item1">
            <Link to="/magazine/2020/June/June+2020">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2020/June/6.+June+2020-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="June 2020"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                June 2020
              </div>
            </Link>
          </div>

          {/* july 2020 */}
          <div className="editorial-item1">
            <Link to="/magazine/2020/July/July+2020">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2020/July/7.+July+2020-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="July 2020"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                July 2020
              </div>
            </Link>
          </div>

          {/* september 2020 */}
          <div className="editorial-item1">
            <Link to="/magazine/2020/September/September+2020">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2020/September/9.+September+2020-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="September 2020"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                September 2020
              </div>
            </Link>
          </div>

          {/* october 2020 */}
          <div className="editorial-item1">
            <Link to="/magazine/2020/October/October+2020">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2020/October/10.+October+2020-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="October 2020"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                October 2020
              </div>
            </Link>
          </div>

          {/* november 2020 */}
          <div className="editorial-item1">
            <Link to="/magazine/2020/November/November+2020">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2020/November/11.+November+2020-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="November 2020"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                November 2020
              </div>
            </Link>
          </div>

          {/* December 2020 */}
          <div className="editorial-item1">
            <Link to="/magazine/2020/December/December+2020">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2020/December/12.+December+2020-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="December 2020"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                December 2020
              </div>
            </Link>
          </div>
        </div>

        {/* ------------- 2019 -------------- */}
        <div className="editorial">
          <div className="editorial-heading">
            <h3 className="editorial-heading-text">2019</h3>
          </div>
        </div>

        <div className="editorial-items">
          {/* january 2019*/}
          <div className="editorial-item1">
            <Link to="/magazine/2019/January/January+2019">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2019/January/1.+January+2019-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="January 2019"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                January 2019
              </div>
            </Link>
          </div>

          {/* february 2019 */}
          <div className="editorial-item1">
            <Link to="/magazine/2019/February/February+2019">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2019/February/2.+February+2019-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="February 2019"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                February 2019
              </div>
            </Link>
          </div>

          {/* march 2019 */}
          <div className="editorial-item1">
            <Link to="/magazine/2019/March/March+2019">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2019/March/3.+March+2019-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="March 2019"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                March 2019
              </div>
            </Link>
          </div>

          {/* april 2019 */}
          <div className="editorial-item1">
            <Link to="/magazine/2019/April/April+2019">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2019/April/4.+April+2019-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="April 2019"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                April 2019
              </div>
            </Link>
          </div>

          {/* may 2019 */}
          <div className="editorial-item1">
            <Link to="/magazine/2019/May/May+2019">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2019/May/5.+May+2019-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="May 2019"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                May 2019
              </div>
            </Link>
          </div>

          {/* june 2019 */}
          <div className="editorial-item1">
            <Link to="/magazine/2019/June/June+2019">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2019/June/6.+June+2019-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="June 2019"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                June 2019
              </div>
            </Link>
          </div>

          {/* july 2019 */}
          <div className="editorial-item1">
            <Link to="/magazine/2019/July/July+2019">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2019/July/7.+July+2019-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="July 2019"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                July 2019
              </div>
            </Link>
          </div>

          {/* august 2019 */}
          <div className="editorial-item1">
            <Link to="/magazine/2019/August/August+2019">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2019/August/8.+August+2019-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="August 2019"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                August 2019
              </div>
            </Link>
          </div>

          {/* september 2019 */}
          <div className="editorial-item1">
            <Link to="/magazine/2019/September/September+2019">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2019/September/9.+September+2019-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="September 2019"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                September 2019
              </div>
            </Link>
          </div>

          {/* october 2019 */}
          <div className="editorial-item1">
            <Link to="/magazine/2019/October/October+2019">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2019/October/10.+October+2019-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="October 2019"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                October 2019
              </div>
            </Link>
          </div>

          {/* november 2019 */}
          <div className="editorial-item1">
            <Link to="/magazine/2019/November/November+2019">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2019/November/11.+November+2019-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="November 2019"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                November 2019
              </div>
            </Link>
          </div>

          {/* December 2019 */}
          <div className="editorial-item1">
            <Link to="/magazine/2019/December/December+2019">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2019/December/12.+December+2019-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="December 2019"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                December 2019
              </div>
            </Link>
          </div>
        </div>

        {/* ------------- 2018 -------------- */}
        <div className="editorial">
          <div className="editorial-heading">
            <h3 className="editorial-heading-text">2018</h3>
          </div>
        </div>

        <div className="editorial-items">
          {/* january 2018 */}
          <div className="editorial-item1">
            <Link to="/magazine/2018/January/January+2018">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2018/January/January+2018-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="January 2018"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                January 2018
              </div>
            </Link>
          </div>

          {/* february 2018 */}
          <div className="editorial-item1">
            <Link to="/magazine/2018/February/February+2018">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2018/February/February+2018-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="February 2018"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                February 2018
              </div>
            </Link>
          </div>

          {/* march 2018 */}
          <div className="editorial-item1">
            <Link to="/magazine/2018/March/March+2018">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2018/March/March+2018-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="March 2018"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                March 2018
              </div>
            </Link>
          </div>

          {/* april 2018 */}
          <div className="editorial-item1">
            <Link to="/magazine/2018/April/April+2018">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2018/April/April+2018-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="April 2018"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                April 2018
              </div>
            </Link>
          </div>

          {/* may 2018 */}
          <div className="editorial-item1">
            <Link to="/magazine/2018/May/May+2018">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2018/May/May+2018-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="May 2019"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                May 2018
              </div>
            </Link>
          </div>

          {/* june 2019 */}
          <div className="editorial-item1">
            <Link to="/magazine/2018/June/June+2018">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2018/June/June+2018-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="June 2018"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                June 2018
              </div>
            </Link>
          </div>

          {/* july 2018 */}
          <div className="editorial-item1">
            <Link to="/magazine/2018/July/July+2018">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2018/July/July+2018-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="July 2018"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                July 2018
              </div>
            </Link>
          </div>

          {/* september 2018 */}
          <div className="editorial-item1">
            <Link to="/magazine/2018/September/September+2018">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2018/September/September+2018-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="September 2018"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                September 2018
              </div>
            </Link>
          </div>

          {/* october 2018 */}
          <div className="editorial-item1">
            <Link to="/magazine/2018/October/October+2018">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2018/October/October+2018-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="October 2018"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                October 2018
              </div>
            </Link>
          </div>

          {/* november 2018 */}
          <div className="editorial-item1">
            <Link to="/magazine/2018/November/November+2018">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2018/November/November+2018-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="November 2018"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                November 2018
              </div>
            </Link>
          </div>
        </div>

        {/* ------------- 2017 -------------- */}
        <div className="editorial">
          <div className="editorial-heading">
            <h3 className="editorial-heading-text">2017</h3>
          </div>
        </div>

        <div className="editorial-items">
          {/* january 2017 */}
          <div className="editorial-item1">
            <Link to="/magazine/2017/January/January+2017">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2017/January/January+2017-001.png"
                style={{ height: "200px", width: "150px" }}
                alt="January 2017"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                January 2017
              </div>
            </Link>
          </div>

          {/* february 2017 */}
          <div className="editorial-item1">
            <Link to="/magazine/2017/February/February+2017">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2017/February/February+2017-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="February 2017"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                February 2017
              </div>
            </Link>
          </div>

          {/* march 2017 */}
          <div className="editorial-item1">
            <Link to="/magazine/2017/March/March+2017">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2017/March/March+2017-001.png"
                style={{ height: "200px", width: "150px" }}
                alt="March 2017"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                March 2017
              </div>
            </Link>
          </div>

          {/* april 2017 */}
          <div className="editorial-item1">
            <Link to="/magazine/2017/April/April+2017">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2017/April/April+2017-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="April 2017"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                April 2017
              </div>
            </Link>
          </div>

          {/* may 2017 */}
          <div className="editorial-item1">
            <Link to="/magazine/2017/May/May+2017">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2017/May/May+2017-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="May 2017"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                May 2017
              </div>
            </Link>
          </div>

          {/* june 2017 */}
          <div className="editorial-item1">
            <Link to="/magazine/2017/June/June+2017">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2017/June/June+2017-001.png"
                style={{ height: "200px", width: "150px" }}
                alt="June 2017"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                June 2017
              </div>
            </Link>
          </div>

          {/* july 2017 */}
          <div className="editorial-item1">
            <Link to="/magazine/2017/July/July+2017">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2017/July/July+2017-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="July 2017"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                July 2017
              </div>
            </Link>
          </div>

          {/* august 2017 */}
          <div className="editorial-item1">
            <Link to="/magazine/2017/August/August+2017">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2017/August/August+2017-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="August 2017"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                August 2017
              </div>
            </Link>
          </div>

          {/* september 2017 */}
          <div className="editorial-item1">
            <Link to="/magazine/2017/September/September+2017">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2017/September/September+2017-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="September 2017"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                September 2017
              </div>
            </Link>
          </div>

          {/* october 2017 */}
          <div className="editorial-item1">
            <Link to="/magazine/2017/October/October+2017">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2017/October/October+2017-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="October 2017"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                October 2017
              </div>
            </Link>
          </div>

          {/* november 2017 */}
          <div className="editorial-item1">
            <Link to="/magazine/2017/November/November+2017">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2017/November/November+2017-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="November 2017"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                November 2017
              </div>
            </Link>
          </div>

          {/* december 2017 */}
          <div className="editorial-item1">
            <Link to="/magazine/2017/December/December+2017">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2017/December/December+2017-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="December 2017"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                December 2017
              </div>
            </Link>
          </div>
        </div>

        {/* ------------- 2017 -------------- */}
        <div className="editorial">
          <div className="editorial-heading">
            <h3 className="editorial-heading-text">2016</h3>
          </div>
        </div>

        <div className="editorial-items">
          {/* january 2017 */}
          <div className="editorial-item1">
            <Link to="/magazine/2016/January/January+2016">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2016/January/January+2016-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="January 2017"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                January 2016
              </div>
            </Link>
          </div>

          {/* february 2017 */}
          <div className="editorial-item1">
            <Link to="/magazine/2016/February/February+2016">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2016/February/February+2016-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="February 2016"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                February 2016
              </div>
            </Link>
          </div>

          {/* march 2017 */}
          <div className="editorial-item1">
            <Link to="/magazine/2016/March/March+2016">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2016/March/March+2016-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="March 2017"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                March 2016
              </div>
            </Link>
          </div>

          {/* april 2017 */}
          <div className="editorial-item1">
            <Link to="/magazine/2016/April/April+2016">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2016/April/April+2016-001.png"
                style={{ height: "200px", width: "150px" }}
                alt="April 2017"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                April 2016
              </div>
            </Link>
          </div>

          {/* may 2017 */}
          <div className="editorial-item1">
            <Link to="/magazine/2016/May/May+2016">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2016/May/May+2016-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="May 2017"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                May 2016
              </div>
            </Link>
          </div>

          {/* june 2017 */}
          <div className="editorial-item1">
            <Link to="/magazine/2016/June/June+2016">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2016/June/June+2016-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="June 2017"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                June 2016
              </div>
            </Link>
          </div>

          {/* july 2016 */}
          <div className="editorial-item1">
            <Link to="/magazine/2016/July/July+2016">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2016/July/July+2016-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="July 2016"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                July 2016
              </div>
            </Link>
          </div>

          {/* august 2016 */}
          <div className="editorial-item1">
            <Link to="/magazine/2016/August/August+2016">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2016/August/August+2016-001.png"
                style={{ height: "200px", width: "150px" }}
                alt="August 2016"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                August 2016
              </div>
            </Link>
          </div>

          {/* september 2016 */}
          <div className="editorial-item1">
            <Link to="/magazine/2016/September/September+2016">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2016/September/September+2016-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="September 2016"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                September 2016
              </div>
            </Link>
          </div>

          {/* october 2016 */}
          <div className="editorial-item1">
            <Link to="/magazine/2016/October/October+2016">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2016/October/October+2016-01.png"
                style={{ height: "200px", width: "150px" }}
                alt="October 2016"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                October 2016
              </div>
            </Link>
          </div>

          {/* november 2016 */}
          <div className="editorial-item1">
            <Link to="/magazine/2016/November/November+2016">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2016/November/November+2016-001.png"
                style={{ height: "200px", width: "150px" }}
                alt="November 2016"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                November 2016
              </div>
            </Link>
          </div>

          {/* december 2017 */}
          <div className="editorial-item1">
            <Link to="/magazine/2016/December/December+2016">
              <img
                src="https://chemicaltodaywebsiet.s3.amazonaws.com/2016/December/December+2016-001.png"
                style={{ height: "200px", width: "150px" }}
                alt="December 2016"
              />
              <div style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                December 2016
              </div>
            </Link>
          </div>
        </div>
        {/* --------end------- */}
      </div>
    </>
  );
}

export default Editorial;
