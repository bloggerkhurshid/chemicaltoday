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
      </div>
    </>
  );
};

export default Insider;
