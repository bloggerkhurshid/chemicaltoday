import React from "react";
import "./post_insider.css";
import Details from "../Details/Details";
import viewMore from "../../../assets/home-page-assets/view-more.svg";
import PostCard from "../post_card/post_card";
import { recordAdClick } from "../../../utils/constants";
const Insider = ({
  country,
  postTitle,
  postBy,
  postDate,
  postImgUrl,
  postImgCap,
  postDesc,
  image_caption,
  latest1,
  latest2,
  latest3,
  latest4,
  ad1,
  ad2,
  ad3,
  ad4,
}) => {
  return (
    <>
      <div className="insider-body">
        <div className="insider-details">
          <Details
            title={postTitle}
            publishedCompany={postBy}
            publishedDate={postDate}
            postImg={postImgUrl}
            postImgTitle={postImgCap}
            postDesc={postDesc}
            country={country}
            image_caption={image_caption}
          />
        </div>

        <div className="insider-xl-ads"></div>

        <div className="insider-sidebar-ads">
          <div className="insider-latest-updates">Latest Updates</div>
          <div className="insider-latest">
            <div className="insider-updates">
              <a
                href={latest1.url}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                {latest1.desc}
              </a>
            </div>
            <div className="insider-updates">
              <a
                href={latest2.url}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                {latest2.desc}
              </a>
            </div>
            <div className="insider-updates">
              <a
                href={latest3.url}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                {latest3.desc}
              </a>
            </div>
            <div className="insider-updates insider-last-update">
              <a
                href={latest4.url}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                {latest4.desc}
              </a>
            </div>
          </div>
          <div className="insider-ads">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                recordAdClick(ad1);
              }}
            >
              <img
                src={ad1.image}
                className="side-bar-ad"
                alt="Side bar ad"
                width="400"
                height="200"
              />
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                recordAdClick(ad2);
              }}
            >
              {" "}
              <img
                src={ad2.image}
                className="side-bar-ad"
                alt="Side bar ad"
                width="400"
                height="200"
              />
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                recordAdClick(ad3);
              }}
            >
              {" "}
              <img
                src={ad3.image}
                className="side-bar-ad"
                alt="Side bar ad"
                width="400"
                height="200"
              />
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                recordAdClick(ad4);
              }}
            >
              {" "}
              <img
                src={ad4.image}
                className="side-bar-ad"
                alt="Side bar ad"
                width="400"
                height="200"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insider;
