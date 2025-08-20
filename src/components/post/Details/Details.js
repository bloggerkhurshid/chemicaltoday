import React from "react";
import "./Details.css";
import { FaTwitter, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Details = ({
  title,
  publishedCompany,
  publishedDate,
  postImg,
  postImgTitle,
  postDesc,
  image_caption,
  country,
}) => {
  const iconSize = 25;
  const url = window.location.href;

  const shareViaTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const shareViaWhatsapp = () => {
    window.open(`whatsapp://send?text=${encodeURIComponent(url)}`);
  };

  const shareViaLinkedin = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
      "_blank"
    );
  };

  const renderTextWithLineBreaks = (text) =>
    text.split("\n").map((line, index, array) =>
      index === array.length - 1 ? (
        line
      ) : (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      )
    );

  return (
    <>
      <div className="detail-img-info">
        {/* Float box: image + caption */}
        <figure className="float-figure">
          <img className="detail-img" src={postImg} alt={postImgTitle} />
          <figcaption className="image-caption">{image_caption}</figcaption>
        </figure>

        {/* Text will flow beside AND below the floated image */}
        <h1 className="detail-insider-title">{title}</h1>

        <p className="detail-desc">
          <span className="date-location">
            {new Date(publishedDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}{" "}
            / {country}
          </span>
          <span className="post-desc">
            {renderTextWithLineBreaks(postDesc)}
          </span>
        </p>
      </div>

      {/* Footer */}
      <div className="detail-footer">
        <h1 className="footer-logo">
          <span style={{ color: "#085EAB" }}>©Chemical</span>{" "}
          <span style={{ color: "#089090" }}>Today</span>
        </h1>
        <div className="share-section">
          <p>Share :</p>
          <FaTwitter size={iconSize} onClick={shareViaTwitter} />
          <FaWhatsapp size={iconSize} onClick={shareViaWhatsapp} />
          <FaLinkedin size={iconSize} onClick={shareViaLinkedin} />
        </div>
      </div>
    </>
  );
};

export default Details;
