import React from "react";
import "./Details.css";
import { FaTwitter, FaWhatsapp, FaLinkedin } from "react-icons/fa"; // Import icons from react-icons library

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
  const iconSize = 25; // Set the desired size of the icons here

  const url = window.location.href; // Assuming url is already defined elsewhere
  const shareViaTwitter = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url
    )}`;
    window.open(tweetUrl, "_blank");
  };

  const shareViaWhatsapp = () => {
    const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(url)}`;
    window.open(whatsappUrl);
  };

  const shareViaLinkedin = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      url
    )}`;
    window.open(linkedinUrl, "_blank");
  };

  const renderTextWithLineBreaks = (text) => {
    return text.split("\n").map((line, index, array) =>
      // Don't add a <br> tag after the last line
      index === array.length - 1 ? (
        line
      ) : (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      )
    );
  };
  return (
    <>
      <div className="detail-img-info">
        <img className="detail-img" src={postImg} alt={postImgTitle} />
        <p style={{ opacity: "0.7" }}>{image_caption}</p>
        <h1 className="detail-insider-title">{title}</h1>

        <div>
          <p className="detail-desc">
            <span className="date-location" style={{ opacity: "0.7" }}>
              {new Date(publishedDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}{" "}
              / {country}{" "}
            </span>
            {renderTextWithLineBreaks(postDesc)}
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "16px", fontWeight: "bold" }}>
          <span style={{ color: "#085EAB" }}>©Chemical</span>{" "}
          <span style={{ color: "#089090" }}>Today</span>
        </h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p
            style={{
              margin: 0,
              padding: "0 10px",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Share :{" "}
          </p>

          <div style={{ margin: "0 10px", cursor: "pointer" }}>
            <FaTwitter size={iconSize} onClick={shareViaTwitter} />
          </div>
          <div style={{ margin: "0 10px", cursor: "pointer" }}>
            <FaWhatsapp size={iconSize} onClick={shareViaWhatsapp} />
          </div>
          <div style={{ margin: "0 10px", cursor: "pointer" }}>
            <FaLinkedin size={iconSize} onClick={shareViaLinkedin} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
