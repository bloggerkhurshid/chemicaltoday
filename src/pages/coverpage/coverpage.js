import React from "react";
import "./coverpage.css";
import TempAds from "../../assets/home-page-assets/temp-adv.png";
import posts from "../../utils/posts";
import PostCard from "../../components/post/post_card/post_card";
import viewMore from "../../assets/home-page-assets/view-more.svg";
import blankImg from "../../assets/home-page-assets/Post-assets/blank_img.svg";
import editorsChoice from "../../assets/home-page-assets/magazines.webp";
import sample from "../../assets/home-page-assets/Post-assets/sample_img.png";
import magazineCover from "../../assets/header-assets/magzine_cover.png";
import { BASE_URL } from "../../utils/constants";
import CPPostCard from "../../components/post/coverpage-postcard/coverpage_postcard";
import { useEffect, useState } from "react";
import PostCommonUtils from "../../models/PostCommonUtils";
import Reports from "../../models/reports";
import RandD from "../../models/randd";
import WhitePaper from "../../models/whitepaper";
import Cs from "../../models/CaseStudy";
import { Link } from "react-router-dom";
import EQPostCard from "../../components/post/coverpage-postcard/equipment";
import ManagPostCard from "../../components/post/coverpage-postcard/management";
import Events from "../../components/post/coverpage-postcard/event";
import event1 from "../../assets/events/0.jpg";
import event2 from "../../assets/events/1.jpg";
import { recordAdClick } from "../../utils/constants";
import event3 from "../../assets/events/2.jpg";
import tv from "../../assets/tv.jpg";

import event4 from "../../assets/events/3.jpg";
import Slider from "react-slick";

import SubscribePopup from "../../pages/SubscribepopUp2";

const CoverPage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const postDetails = posts;
  const singlePost = {
    id: 1,
    url: blankImg,
    heading: "Plant Visit",
    description:
      "This description for Image One explains its context, the story behind the photograph, and its significance in the broader collection. This description for Image One explains its context, the story behind the photograph, and its significance in the broader co",
  };

  const sidePostStyle = {
    display: "flex",
    flexDirection: "column",
    marginRight: "15px",
    marginBottom: "10px",
  };

  const [postComUtils, setPostComUtils] = useState([]); // Initialize state with null
  const [b_posts, setb_posts] = useState([]);
  const [c_posts, setc_posts] = useState([]);

  const [reports, setreports] = useState([]);
  const [randd, setrandd] = useState([]);

  const [whitepaper, setwhitepaper] = useState([]);
  const [homepagedata, sethomepagedata] = useState(null);
  const d_events = [
    { id: 1, title: "Industrial Events" },
    { id: 2, title: "Upcoming Webinars" },
    { id: 3, title: "Past Events" },
    { id: 4, title: "Conferences" },
  ];

  const [casestudy, setcasestudy] = useState([]);
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  };
  const bannerSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    console.log(screenWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response2 = await PostCommonUtils.gethomepagedata(); // Include id in the URL

        console.log("dnkjdksjdks");
        console.log(response2);
        sethomepagedata(response2);

        console.log(homepagedata.homeScreenTopSection.horizontal_banner);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  if (screenWidth >= 1100) {
    return (
      <>
        {homepagedata &&
          homepagedata.homeScreenTopSection && ( // Check if postComUtils and featured_post are defined
            <div>
              <Slider {...bannerSettings}>
                {homepagedata.homeScreenTopSection.horizontal_banner.map(
                  (banner, index) => (
                    <a
                      href="#"
                      key={index}
                      onClick={(e) => {
                        e.preventDefault();
                        recordAdClick(banner);
                      }}
                    >
                      <img
                        src={banner.image}
                        alt="Advertize"
                        style={{
                          width: "90%",
                          display: "block",
                          marginBottom: "22px",
                        }}
                        className="horizantal-ads"
                      />
                    </a>
                  )
                )}
              </Slider>
              <div className="main-body">
                <div className="cover-container">
                  <div className="cover-item">
                    <a
                      href={`/news/Posts/${homepagedata.homeScreenTopSection.post.id}`}
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      <div style={{}}>
                        <img
                          src={
                            homepagedata.homeScreenTopSection.post
                              .thumbnail_image_url
                          }
                          style={{ width: "560px", height: "400px" }}
                          className="cover-item-img"
                          alt="Cover"
                        />
                        <h3
                          className="cover-item-text"
                          style={{
                            width: "560px",
                            wordWrap: "break-word",
                            overflowWrap: "break-word",
                            maxWidth: "560px",
                          }}
                        >
                          {" "}
                          {truncateText(
                            homepagedata.homeScreenTopSection.post.title,
                            135
                          )}
                        </h3>{" "}
                      </div>
                      <p
                        style={{
                          opacity: "0.7",
                          marginTop: "8px",
                          textDecoration: "none",
                          color: "black",
                          fontFamily: "Helvetica",
                        }}
                      >
                        Chemical Today
                      </p>
                    </a>
                    <div className="w-3 h-5 tab-ads-cont"></div>
                  </div>
                  <div className="cover-details">
                    <div className="cover-details-latest">
                      <div className="latest-stores">Latest Stories</div>
                      <div className="latest-text">
                        <div style={{}}>
                          <a
                            href={
                              homepagedata.homeScreenTopSection.latest_updates1
                                .url
                            }
                            target="_blank"
                            style={{
                              textDecoration: "none",
                              color: "black",
                            }}
                          >
                            {homepagedata.homeScreenTopSection.latest_updates1
                              .desc.length > 100
                              ? homepagedata.homeScreenTopSection.latest_updates1.desc.slice(
                                  0,
                                  100
                                ) + "..."
                              : homepagedata.homeScreenTopSection
                                  .latest_updates1.desc}
                          </a>
                        </div>
                        <div style={{}}>
                          <a
                            href={
                              homepagedata.homeScreenTopSection.latest_updates2
                                .url
                            }
                            target="_blank"
                            style={{
                              textDecoration: "none",
                              color: "black",
                            }}
                          >
                            {homepagedata.homeScreenTopSection.latest_updates2
                              .desc.length > 100
                              ? homepagedata.homeScreenTopSection.latest_updates2.desc.slice(
                                  0,
                                  100
                                ) + "..."
                              : homepagedata.homeScreenTopSection
                                  .latest_updates2.desc}
                          </a>
                        </div>
                        <div style={{}}>
                          <a
                            href={
                              homepagedata.homeScreenTopSection.latest_updates3
                                .url
                            }
                            target="_blank"
                            style={{
                              textDecoration: "none",
                              color: "black",
                            }}
                          >
                            {homepagedata.homeScreenTopSection.latest_updates3
                              .desc.length > 100
                              ? homepagedata.homeScreenTopSection.latest_updates3.desc.slice(
                                  0,
                                  100
                                ) + "..."
                              : homepagedata.homeScreenTopSection
                                  .latest_updates3.desc}
                          </a>
                        </div>
                        <div style={{}}>
                          <a
                            href={
                              homepagedata.homeScreenTopSection.latest_updates4
                                .url
                            }
                            target="_blank"
                            style={{
                              textDecoration: "none",
                              color: "black",
                            }}
                          >
                            {homepagedata.homeScreenTopSection.latest_updates4
                              .desc.length > 100
                              ? homepagedata.homeScreenTopSection.latest_updates4.desc.slice(
                                  0,
                                  100
                                ) + "..."
                              : homepagedata.homeScreenTopSection
                                  .latest_updates4.desc}
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <div className="editors-choice"> */}
                    <div
                      style={{ marginBottom: "10px", marginTop: "20px" }}
                      className="latest-stores"
                    >
                      Advertorial
                    </div>
                    {/*    <div className="editor-choice">
                        <div className="editor-choice-img-side">
                        <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              recordAdClick(
                                homepagedata.homeScreenTopSection.advt1
                              );
                            }}
                          >
                            <img
                              style={{
                                height: "100px",
                                width: "250px",
                              }}
                              src={
                                homepagedata.homeScreenTopSection.advt1.image
                              }
                            ></img>
                          </a>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              recordAdClick(
                                homepagedata.homeScreenTopSection.advt2
                              );
                            }}
                          >
                            {" "}
                            <img
                              style={{
                                height: "100px",
                                width: "250px",
                              }}
                              src={
                                homepagedata.homeScreenTopSection.advt2.image
                              }
                            ></img>
                          </a>
                        </div>
                        <div className="editor-choice-img-side">
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              recordAdClick(
                                homepagedata.homeScreenTopSection.advt1
                              );
                            }}
                          >
                            <img
                              style={{
                                height: "100px",
                                width: "250px",
                              }}
                              src={
                                homepagedata.homeScreenTopSection.advt1.image
                              }
                            ></img>
                          </a>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              recordAdClick(
                                homepagedata.homeScreenTopSection.advt2
                              );
                            }}
                          >
                            {" "}
                            <img
                              style={{
                                height: "100px",
                                width: "250px",
                              }}
                              src={
                                homepagedata.homeScreenTopSection.advt2.image
                              }
                            ></img>
                          </a>
                        </div>
                        <div className="w-3 h-5 tab-ads-cont tab-ads-cont-2"></div>
                      </div>
                    </div> */}
                    <div>
                      <Link key="1" to={`/advertorials/rockwell`}>
                        <img
                          src={homepagedata?.homeScreenTopSection?.advt2?.image}
                          alt="Advert Banner"
                          style={{
                            width: "600px",
                            height: "300px",
                            objectFit: "contain",
                          }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="cover-post">
                  <div className="cover-post-heading">
                    <h3 className="cover-post-heading-text">Post</h3>
                    <a href="/Posts/1" className="viewMoreImg">
                      <img src={viewMore} />
                    </a>
                  </div>
                  {homepagedata &&
                    homepagedata.homeScreenTopSection && ( // Check if postComUtils and featured_post are defined
                      <div className="post-container-flex" style={{}}>
                        <div className="cover-post-items">
                          <Link
                            key={homepagedata.homeScreenPostSection.post1.id}
                            to={`/news/Posts/${homepagedata.homeScreenPostSection.post1.id}/`}
                            className="post-card"
                            style={{ height: "300px", width: "45%" }}
                          >
                            <img
                              src={
                                homepagedata.homeScreenPostSection.post1
                                  .thumbnail_image_url
                              }
                              alt={
                                homepagedata.homeScreenPostSection.post1.title
                              }
                              className="post-card-image"
                            />
                            <div className="img-text">
                              <p className="text">
                                {new Date(
                                  homepagedata.homeScreenPostSection.post1.published_date
                                ).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                            <p className="overlay-text">
                              {homepagedata.homeScreenPostSection.post1.title
                                .length > 100
                                ? `${homepagedata.homeScreenPostSection.post1.title.substring(
                                    0,
                                    100
                                  )}...`
                                : homepagedata.homeScreenPostSection.post1
                                    .title}
                            </p>
                            <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                              Chemical Today
                            </p>
                          </Link>
                          <Link
                            key={homepagedata.homeScreenPostSection.post2.id}
                            to={`/news/Posts/${homepagedata.homeScreenPostSection.post2.id}`}
                            className="post-card"
                            style={{ height: "380px", width: "45%" }}
                          >
                            <img
                              src={
                                homepagedata.homeScreenPostSection.post2
                                  .thumbnail_image_url
                              }
                              alt={
                                homepagedata.homeScreenPostSection.post2.title
                              }
                              className="post-card-image"
                            />
                            <div className="img-text">
                              <p className="text">
                                {new Date(
                                  homepagedata.homeScreenPostSection.post2.published_date
                                ).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                            <p className="overlay-text">
                              {homepagedata.homeScreenPostSection.post2.title
                                .length > 100
                                ? `${homepagedata.homeScreenPostSection.post2.title.substring(
                                    0,
                                    100
                                  )}...`
                                : homepagedata.homeScreenPostSection.post2
                                    .title}
                            </p>
                            <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                              Chemical Today
                            </p>{" "}
                          </Link>
                          <Link
                            key={homepagedata.homeScreenPostSection.post3.id}
                            to={`/news/Posts/${homepagedata.homeScreenPostSection.post3.id}`}
                            className="post-card"
                            style={{ height: "380px", width: "45%" }}
                          >
                            <img
                              src={
                                homepagedata.homeScreenPostSection.post3
                                  .thumbnail_image_url
                              }
                              alt={
                                homepagedata.homeScreenPostSection.post3.title
                              }
                              className="post-card-image"
                            />
                            <div className="img-text">
                              <p className="text">
                                {new Date(
                                  homepagedata.homeScreenPostSection.post3.published_date
                                ).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                            <p className="overlay-text">
                              {homepagedata.homeScreenPostSection.post3.title
                                .length > 100
                                ? `${homepagedata.homeScreenPostSection.post3.title.substring(
                                    0,
                                    100
                                  )}...`
                                : homepagedata.homeScreenPostSection.post3
                                    .title}
                            </p>
                            <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                              Chemical Today
                            </p>{" "}
                          </Link>
                          <Link
                            key={homepagedata.homeScreenPostSection.post4.id}
                            to={`/news/Posts/${homepagedata.homeScreenPostSection.post4.id}`}
                            className="post-card"
                            style={{ height: "380px", width: "45%" }}
                          >
                            <img
                              src={
                                homepagedata.homeScreenPostSection.post4
                                  .thumbnail_image_url
                              }
                              alt={
                                homepagedata.homeScreenPostSection.post4.title
                              }
                              className="post-card-image"
                            />
                            <div className="img-text">
                              <p className="text">
                                {new Date(
                                  homepagedata.homeScreenPostSection.post4.published_date
                                ).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                            <p className="overlay-text">
                              {homepagedata.homeScreenPostSection.post4.title
                                .length > 100
                                ? `${homepagedata.homeScreenPostSection.post4.title.substring(
                                    0,
                                    100
                                  )}...`
                                : homepagedata.homeScreenPostSection.post4
                                    .title}
                            </p>
                            <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                              Chemical Today
                            </p>
                          </Link>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            flexDirection: "column",
                          }}
                        >
                          {/* <video
                            width="400"
                            height="200"
                            style={{ objectFit: "cover" }}
                            autoPlay
                            loop
                            controls
                          >
                            <source
                              src="https://chemical-today.s3.ap-south-1.amazonaws.com/vedio_advt.mp4"
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video> */}
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              recordAdClick(
                                homepagedata.homeScreenPostSection.advt1
                              );
                            }}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <img
                              style={{
                                marginTop: "20px",
                                height: "200px",
                                width: "400px",
                                marginBottom: "20px",
                              }}
                              src={
                                homepagedata.homeScreenPostSection.advt1.image
                              }
                            ></img>
                          </a>

                          {/* -------- */}
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              recordAdClick(
                                homepagedata.homeScreenPostSection.advt2
                              );
                            }}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <img
                              style={{
                                marginTop: "20px",
                                height: "200px",
                                width: "400px",
                                marginBottom: "20px",
                              }}
                              src={
                                homepagedata.homeScreenPostSection.advt2.image
                              }
                            ></img>
                          </a>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              recordAdClick(
                                homepagedata.homeScreenPostSection.advt3
                              );
                            }}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            {" "}
                            <img
                              style={{
                                height: "200px",
                                width: "400px",
                              }}
                              src={
                                homepagedata.homeScreenPostSection.advt3.image
                              }
                            ></img>
                          </a>
                        </div>
                      </div>
                    )}
                </div>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    recordAdClick(
                      homepagedata.homeScreenPostSection.horizontal_banner
                    );
                  }}
                >
                  <img
                    style={{
                      marginBottom: "22px",
                      marginTop: "-35px",
                    }}
                    className="horizantal-ads2"
                    src={
                      homepagedata.homeScreenPostSection.horizontal_banner.image
                    }
                    alt="Advertize"
                  />
                </a>

                <div className="insights" style={{}}>
                  <div className="cover-post-heading">
                    <h3 className="cover-post-heading-text">Insights</h3>
                    <a href="#" className="viewMoreImg">
                      <img src={viewMore} />
                    </a>
                  </div>
                  <div className="insights-container" style={{}}>
                    <div className="insights-items">
                      <div
                        className="insights-itemn"
                        style={{
                          height: "230px",
                          display: "flex",
                          flexDirection: "column",
                          justifytitle: "end",
                        }}
                      >
                        <img
                          src={
                            homepagedata.insightSection.report
                              .thumbnail_image_url
                          }
                          style={{
                            height: "230px",
                          }}
                        ></img>
                      </div>
                      <div className="img-text">
                        <p className="text">Reports</p>
                      </div>
                      {/* <Link to={redirectTo} className='overlay-text'>{post.description}</Link> */}
                      <p className="overlay-text insights-desc" style={{}}>
                        {homepagedata.insightSection.report.title.length > 100
                          ? `${homepagedata.insightSection.report.title.substring(
                              0,
                              100
                            )}...`
                          : homepagedata.insightSection.report.title}
                      </p>
                      <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                        Chemical Today
                      </p>
                      <Link
                        to="/Reports/1"
                        className="insights-btn"
                        style={{
                          textDecoration: "none",
                          fontSize: "14px",
                          fontFamily: "Helvitica",
                          fontWeight: "bold",
                        }}
                      >
                        Read More
                      </Link>
                    </div>

                    <div className="insights-items">
                      <div
                        className="insights-itemn"
                        style={{
                          height: "230px",
                          display: "flex",
                          flexDirection: "column",
                          justifytitle: "end",
                        }}
                      >
                        <img
                          src={
                            homepagedata.insightSection.randd
                              .thumbnail_image_url
                          }
                          style={{
                            height: "250px",
                          }}
                        ></img>
                      </div>
                      <div className="img-text">
                        <p className="text">R & D</p>
                      </div>
                      {/* <Link to={redirectTo} className='overlay-text'>{post.description}</Link> */}
                      <p className="overlay-text insights-desc" style={{}}>
                        {homepagedata.insightSection.randd.title.length > 100
                          ? `${homepagedata.insightSection.randd.title.substring(
                              0,
                              100
                            )}...`
                          : homepagedata.insightSection.randd.title}
                      </p>
                      <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                        Chemical Today
                      </p>
                      <Link
                        to="/R&D/1"
                        className="insights-btn"
                        style={{
                          textDecoration: "none",
                          fontSize: "14px",
                          fontFamily: "Helvitica",
                          fontWeight: "bold",
                        }}
                      >
                        Read More
                      </Link>
                    </div>

                    <div className="insights-items">
                      <div
                        className="insights-itemn"
                        style={{
                          height: "230px",
                          display: "flex",
                          flexDirection: "column",
                          justifytitle: "end",
                        }}
                      >
                        <img
                          src={
                            homepagedata.insightSection.whitepaper
                              .thumbnail_image_url
                          }
                          style={{
                            height: "250px",
                          }}
                        ></img>
                      </div>
                      <div className="img-text">
                        <p className="text">White Papers</p>
                      </div>
                      {/* <Link to={redirectTo} className='overlay-text'>{post.description}</Link> */}
                      <p className="overlay-text insights-desc" style={{}}>
                        {homepagedata.insightSection.whitepaper.title.length >
                        100
                          ? `${homepagedata.insightSection.whitepaper.title.substring(
                              0,
                              100
                            )}...`
                          : homepagedata.insightSection.whitepaper.title}
                      </p>
                      <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                        Chemical Today
                      </p>
                      <Link
                        to="/White Papers/1"
                        className="insights-btn"
                        style={{
                          textDecoration: "none",
                          fontSize: "14px",
                          fontFamily: "Helvitica",
                          fontWeight: "bold",
                        }}
                      >
                        Read More
                      </Link>
                    </div>

                    <div className="insights-items">
                      <div
                        className="insights-itemn"
                        style={{
                          height: "230px",
                          display: "flex",
                          flexDirection: "column",
                          justifytitle: "end",
                        }}
                      >
                        <img
                          src={
                            homepagedata.insightSection.casestudy
                              .thumbnail_image_url
                          }
                          style={{
                            height: "230px",
                          }}
                        ></img>
                      </div>
                      <div className="img-text">
                        <p className="text">Case Study</p>
                      </div>
                      {/* <Link to={redirectTo} className='overlay-text'>{post.description}</Link> */}
                      <p className="overlay-text insights-desc" style={{}}>
                        {homepagedata.insightSection.casestudy.title.length >
                        100
                          ? `${homepagedata.insightSection.casestudy.title.substring(
                              0,
                              100
                            )}...`
                          : homepagedata.insightSection.casestudy.title}
                      </p>
                      <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                        Chemical Today
                      </p>
                      <Link
                        to="/Case Studies/1"
                        className="insights-btn"
                        style={{
                          textDecoration: "none",
                          fontSize: "14px",
                          fontFamily: "Helvitica",
                          fontWeight: "bold",
                        }}
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    recordAdClick(
                      homepagedata.insightSection.horizontal_banner
                    );
                  }}
                >
                  <img
                    style={{
                      marginBottom: "22px",
                    }}
                    className="horizantal-ads2"
                    src={homepagedata.insightSection.horizontal_banner.image}
                    alt="Advertize"
                  />
                </a> */}
                <Slider {...bannerSettings}>
                  {homepagedata.insightSection.horizontal_banner.map(
                    (banner, index) => (
                      <a
                        href="#"
                        key={index}
                        onClick={(e) => {
                          e.preventDefault();
                          recordAdClick(banner);
                        }}
                      >
                        <img
                          src={banner.image}
                          alt="Advertize"
                          style={{
                            width: "100%",
                            display: "block",
                            marginBottom: "22px",
                          }}
                          className="horizantal-ads"
                        />
                      </a>
                    )
                  )}
                </Slider>
                <div className="spotlight">
                  <div className="cover-post-heading">
                    <h3 className="cover-post-heading-text">Spotlight</h3>
                    <a href="/Plant Visit/1" className="viewMoreImg">
                      <img src={viewMore} />
                    </a>
                  </div>
                  <div className="spotlight-body">
                    <div
                      className="spotlight-container"
                      style={{
                        display: "flex",
                      }}
                    >
                      <div
                        className="spotlight-body-post"
                        style={{ width: "47%" }}
                      >
                        <Link
                          key={homepagedata.spotlightSection.management1.id}
                          to={`/news/Plant Visit/${homepagedata.spotlightSection.plant_visit.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <div style={sidePostStyle}>
                            <img
                              src={
                                homepagedata.spotlightSection.plant_visit
                                  .thumbnail_image_url
                              }
                              style={{ width: "530px", height: "350px" }}
                            />
                            <div className="img-text">
                              <p
                                className="text"
                                style={{ marginBottom: "5px" }}
                              >
                                Plant Visit{" "}
                              </p>
                            </div>
                            {/* <Link to={redirectTo} className='overlay-text'>{post.description}</Link> */}
                            <h3 className="cover-item-text">
                              {homepagedata.spotlightSection.plant_visit.title
                                .length > 100
                                ? `${homepagedata.spotlightSection.plant_visit.title.substring(
                                    0,
                                    100
                                  )}...`
                                : homepagedata.spotlightSection.plant_visit
                                    .title}
                            </h3>
                          </div>
                          <p
                            style={{
                              opacity: "0.7",
                              marginTop: "-8px",
                              textDecoration: "none",
                              color: "black",
                              fontFamily: "Helvetica",
                            }}
                          >
                            Chemical Today
                          </p>
                        </Link>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          width: "46%",
                          marginLeft: "25px",
                        }}
                      >
                        <Link
                          key={homepagedata.spotlightSection.management1.id}
                          to={`/news/Management/${homepagedata.spotlightSection.management1.id}`}
                          className="post-card"
                          style={{
                            height: "130px",
                            width: "46%",
                            marginRight: "30px",
                            marginBottom: "5px",
                          }}
                        >
                          <img
                            src={
                              homepagedata.spotlightSection.management1
                                .thumbnail_image_url
                            }
                            alt={
                              homepagedata.spotlightSection.management1.title
                            }
                            className="post-card-image2"
                            style={{
                              height: "120px",
                              width: "220px",
                              display: "block",
                              objectFit: "fill",
                            }}
                          />
                          <div className="img-text">
                            <p className="text">Management</p>
                          </div>
                          <p className="overlay-text">
                            {homepagedata.spotlightSection.management1.title
                              .length > 100
                              ? `${homepagedata.spotlightSection.management1.title.substring(
                                  0,
                                  100
                                )}...`
                              : homepagedata.spotlightSection.management1.title}
                          </p>
                          <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                            Chemical Today
                          </p>{" "}
                        </Link>

                        <Link
                          key={homepagedata.spotlightSection.management2.id}
                          to={`/news/Management/${homepagedata.spotlightSection.management2.id}`}
                          className="post-card"
                          style={{ height: "130px", width: "46%" }}
                        >
                          <img
                            src={
                              homepagedata.spotlightSection.management2
                                .thumbnail_image_url
                            }
                            alt={
                              homepagedata.spotlightSection.management1.title
                            }
                            className="post-card-image2"
                            style={{
                              height: "120px",
                              width: "220px",
                              display: "block",
                              objectFit: "fill",
                            }}
                          />
                          <div className="img-text">
                            <p className="text">Management</p>
                          </div>
                          <p className="overlay-text">
                            {homepagedata.spotlightSection.management2.title
                              .length > 100
                              ? `${homepagedata.spotlightSection.management2.title.substring(
                                  0,
                                  100
                                )}...`
                              : homepagedata.spotlightSection.management2.title}
                          </p>
                          <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                            Chemical Today
                          </p>{" "}
                        </Link>

                        <Link
                          key={homepagedata.spotlightSection.management3.id}
                          to={`/news/Management/${homepagedata.spotlightSection.management3.id}`}
                          className="post-card"
                          style={{
                            height: "130px",
                            width: "46%",
                            marginRight: "30px",
                          }}
                        >
                          <img
                            src={
                              homepagedata.spotlightSection.management3
                                .thumbnail_image_url
                            }
                            alt={
                              homepagedata.spotlightSection.management1.title
                            }
                            className="post-card-image2"
                            style={{
                              height: "120px",
                              width: "220px",
                              display: "block",
                              objectFit: "fill",
                            }}
                          />
                          <div className="img-text">
                            <p className="text">Management</p>
                          </div>
                          <p className="overlay-text">
                            {homepagedata.spotlightSection.management3.title
                              .length > 100
                              ? `${homepagedata.spotlightSection.management3.title.substring(
                                  0,
                                  100
                                )}...`
                              : homepagedata.spotlightSection.management3.title}
                          </p>
                          <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                            Chemical Today
                          </p>{" "}
                        </Link>

                        <Link
                          key={homepagedata.spotlightSection.management4.id}
                          to={`/news/Management/${homepagedata.spotlightSection.management4.id}`}
                          className="post-card"
                          style={{ height: "130px", width: "46%" }}
                        >
                          <img
                            src={
                              homepagedata.spotlightSection.management4
                                .thumbnail_image_url
                            }
                            alt={
                              homepagedata.spotlightSection.management1.title
                            }
                            className="post-card-image2"
                            style={{
                              height: "120px",
                              width: "220px",
                              display: "block",
                              objectFit: "fill",
                            }}
                          />
                          <div className="img-text">
                            <p className="text">Management</p>
                          </div>
                          <p className="overlay-text">
                            {homepagedata.spotlightSection.management4.title
                              .length > 100
                              ? `${homepagedata.spotlightSection.management4.title.substring(
                                  0,
                                  100
                                )}...`
                              : homepagedata.spotlightSection.management4.title}
                          </p>
                          <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                            Chemical Today
                          </p>{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    recordAdClick(
                      homepagedata.spotlightSection.horizontal_banner
                    );
                  }}
                >
                  <img
                    style={{
                      marginBottom: "22px",
                    }}
                    className="horizantal-ads2"
                    src={homepagedata.spotlightSection.horizontal_banner.image}
                    alt="Advertize"
                  />
                </a>

                <div className="cover-post">
                  <div className="cover-post-heading">
                    <h3 className="cover-post-heading-text">Products</h3>
                    <a href="Products/1" className="viewMoreImg">
                      <img src={viewMore} />
                    </a>
                  </div>
                  {homepagedata &&
                    homepagedata.homeScreenTopSection && ( // Check if postComUtils and featured_post are defined
                      <div className="post-container-flex" style={{}}>
                        <div className="cover-post-items">
                          <Link
                            key={homepagedata.productSection.post1.id}
                            to={`/news/Products/${homepagedata.productSection.post1.id}`}
                            className="post-card"
                            style={{ height: "300px", width: "45%" }}
                          >
                            <img
                              src={
                                homepagedata.productSection.post1
                                  .thumbnail_image_url
                              }
                              alt={homepagedata.productSection.post1.title}
                              className="post-card-image"
                            />
                            <div className="img-text">
                              <p className="text">
                                {new Date(
                                  homepagedata.productSection.post1.published_date
                                ).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                            <p className="overlay-text">
                              {homepagedata.productSection.post1.title.length >
                              100
                                ? `${homepagedata.productSection.post1.title.substring(
                                    0,
                                    100
                                  )}...`
                                : homepagedata.productSection.post1.title}
                            </p>
                            <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                              Chemical Today
                            </p>{" "}
                          </Link>
                          <Link
                            key={homepagedata.productSection.post2.id}
                            to={`/news/Products/${homepagedata.productSection.post2.id}`}
                            className="post-card"
                            style={{ height: "380px", width: "45%" }}
                          >
                            <img
                              src={
                                homepagedata.productSection.post2
                                  .thumbnail_image_url
                              }
                              alt={homepagedata.productSection.post2.title}
                              className="post-card-image"
                            />
                            <div className="img-text">
                              <p className="text">
                                {new Date(
                                  homepagedata.productSection.post2.published_date
                                ).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                            <p className="overlay-text">
                              {homepagedata.productSection.post2.title.length >
                              100
                                ? `${homepagedata.productSection.post2.title.substring(
                                    0,
                                    100
                                  )}...`
                                : homepagedata.productSection.post2.title}
                            </p>{" "}
                            <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                              Chemical Today
                            </p>{" "}
                          </Link>
                          <Link
                            key={homepagedata.productSection.post3.id}
                            to={`/news/Products/${homepagedata.productSection.post3.id}`}
                            className="post-card"
                            style={{ height: "380px", width: "45%" }}
                          >
                            <img
                              src={
                                homepagedata.productSection.post3
                                  .thumbnail_image_url
                              }
                              alt={homepagedata.productSection.post3.title}
                              className="post-card-image"
                            />
                            <div className="img-text">
                              <p className="text">
                                {new Date(
                                  homepagedata.productSection.post3.published_date
                                ).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                            <p className="overlay-text">
                              {homepagedata.productSection.post3.title.length >
                              100
                                ? `${homepagedata.productSection.post3.title.substring(
                                    0,
                                    100
                                  )}...`
                                : homepagedata.productSection.post3.title}
                            </p>{" "}
                            <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                              Chemical Today
                            </p>{" "}
                          </Link>
                          <Link
                            key={homepagedata.productSection.post4.id}
                            to={`/news/Products/${homepagedata.productSection.post4.id}`}
                            className="post-card"
                            style={{ height: "380px", width: "45%" }}
                          >
                            <img
                              src={
                                homepagedata.productSection.post4
                                  .thumbnail_image_url
                              }
                              alt={homepagedata.productSection.post4.title}
                              className="post-card-image"
                            />
                            <div className="img-text">
                              <p className="text">
                                {new Date(
                                  homepagedata.productSection.post4.published_date
                                ).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                            <p className="overlay-text">
                              {homepagedata.productSection.post4.title.length >
                              100
                                ? `${homepagedata.productSection.post4.title.substring(
                                    0,
                                    100
                                  )}...`
                                : homepagedata.productSection.post4.title}
                            </p>
                            <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                              Chemical Today
                            </p>{" "}
                          </Link>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            flexDirection: "column",
                          }}
                        >
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              recordAdClick(homepagedata.productSection.advt1);
                            }}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <img
                              style={{
                                height: "200px",
                                width: "400px",
                                marginBottom: "20px",
                              }}
                              src={homepagedata.productSection.advt1.image}
                            ></img>
                          </a>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              recordAdClick(homepagedata.productSection.advt2);
                            }}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            {" "}
                            <img
                              style={{
                                height: "200px",
                                width: "400px",
                                marginBottom: "20px",
                              }}
                              src={homepagedata.productSection.advt2.image}
                            ></img>
                          </a>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              recordAdClick(homepagedata.productSection.advt3);
                            }}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            {" "}
                            <img
                              style={{
                                height: "200px",
                                width: "400px",
                              }}
                              src={homepagedata.productSection.advt3.image}
                            ></img>
                          </a>
                        </div>
                      </div>
                    )}
                </div>

                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    recordAdClick(
                      homepagedata.equipmentSection.horizontal_banner
                    );
                  }}
                >
                  <img
                    style={{
                      marginBottom: "22px",
                      marginTop: "-50px",
                    }}
                    className="horizantal-ads2"
                    src={homepagedata.equipmentSection.horizontal_banner.image}
                    alt="Advertize"
                  />
                </a>

                <div className="equipment">
                  <div className="cover-post-heading">
                    <h3 className="cover-post-heading-text">Equipment</h3>
                    <a href="Equipments/1" className="viewMoreImg">
                      <img src={viewMore} />
                    </a>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "13px",
                    }}
                  >
                    <Link
                      key={homepagedata.equipmentSection.equipment1.id}
                      to={`/news/Equipments/${homepagedata.equipmentSection.equipment1.id}`}
                      className="post-card"
                      style={{ height: "380px", width: "19%" }}
                    >
                      <img
                        src={
                          homepagedata.equipmentSection.equipment1
                            .thumbnail_image_url
                        }
                        alt={homepagedata.equipmentSection.equipment1.title}
                        className="post-card-image2"
                        style={{
                          height: "200px",
                          width: "100%",
                          display: "block",
                          objectFit: "fill",
                        }}
                      />
                      <div className="img-text">
                        <p className="text">
                          {new Date(
                            homepagedata.equipmentSection.equipment1.published_date
                          ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                      <p className="overlay-text">
                        {homepagedata.equipmentSection.equipment1.title.length >
                        100
                          ? `${homepagedata.equipmentSection.equipment1.title.substring(
                              0,
                              100
                            )}...`
                          : homepagedata.equipmentSection.equipment1.title}
                      </p>
                      <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                        Chemical Today
                      </p>
                    </Link>
                    <Link
                      key={homepagedata.equipmentSection.equipment2.id}
                      to={`/news/Equipments/${homepagedata.equipmentSection.equipment2.id}`}
                      className="post-card"
                      style={{ height: "380px", width: "19%" }}
                    >
                      <img
                        src={
                          homepagedata.equipmentSection.equipment2
                            .thumbnail_image_url
                        }
                        alt={homepagedata.equipmentSection.equipment1.title}
                        className="post-card-image"
                      />
                      <div className="img-text">
                        <p className="text">
                          {new Date(
                            homepagedata.equipmentSection.equipment2.published_date
                          ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                      <p className="overlay-text">
                        {homepagedata.equipmentSection.equipment2.title.length >
                        100
                          ? `${homepagedata.equipmentSection.equipment2.title.substring(
                              0,
                              100
                            )}...`
                          : homepagedata.equipmentSection.equipment2.title}
                      </p>
                      <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                        Chemical Today
                      </p>{" "}
                    </Link>
                    <Link
                      key={homepagedata.equipmentSection.equipment1.id}
                      to={`/news/Equipments/${homepagedata.equipmentSection.equipment3.id}`}
                      className="post-card"
                      style={{ height: "380px", width: "19%" }}
                    >
                      <img
                        src={
                          homepagedata.equipmentSection.equipment3
                            .thumbnail_image_url
                        }
                        alt={homepagedata.equipmentSection.equipment1.title}
                        className="post-card-image"
                      />
                      <div className="img-text">
                        <p className="text">
                          {new Date(
                            homepagedata.equipmentSection.equipment3.published_date
                          ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                      <p className="overlay-text">
                        {homepagedata.equipmentSection.equipment3.title.length >
                        100
                          ? `${homepagedata.equipmentSection.equipment3.title.substring(
                              0,
                              100
                            )}...`
                          : homepagedata.equipmentSection.equipment3.title}
                      </p>
                      <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                        Chemical Today
                      </p>{" "}
                    </Link>
                    <Link
                      key={homepagedata.equipmentSection.equipment1.id}
                      to={`/news/Equipments/${homepagedata.equipmentSection.equipment4.id}`}
                      className="post-card"
                      style={{ height: "380px", width: "19%" }}
                    >
                      <img
                        src={
                          homepagedata.equipmentSection.equipment4
                            .thumbnail_image_url
                        }
                        alt={homepagedata.equipmentSection.equipment1.title}
                        className="post-card-image"
                      />
                      <div className="img-text">
                        <p className="text">
                          {new Date(
                            homepagedata.equipmentSection.equipment4.published_date
                          ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                      <p className="overlay-text">
                        {homepagedata.equipmentSection.equipment4.title.length >
                        100
                          ? `${homepagedata.equipmentSection.equipment4.title.substring(
                              0,
                              100
                            )}...`
                          : homepagedata.equipmentSection.equipment4.title}
                      </p>
                      <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                        Chemical Today
                      </p>{" "}
                    </Link>
                    <Link
                      key={homepagedata.equipmentSection.equipment1.id}
                      to={`/news/Equipments/${homepagedata.equipmentSection.equipment5.id}`}
                      className="post-card"
                      style={{ height: "380px", width: "19%" }}
                    >
                      <img
                        src={
                          homepagedata.equipmentSection.equipment5
                            .thumbnail_image_url
                        }
                        alt={homepagedata.equipmentSection.equipment1.title}
                        className="post-card-image"
                      />
                      <div className="img-text">
                        <p className="text">
                          {new Date(
                            homepagedata.equipmentSection.equipment5.published_date
                          ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                      <p className="overlay-text">
                        {homepagedata.equipmentSection.equipment5.title.length >
                        100
                          ? `${homepagedata.equipmentSection.equipment5.title.substring(
                              0,
                              100
                            )}...`
                          : homepagedata.equipmentSection.equipment5.title}
                      </p>
                      <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                        Chemical Today
                      </p>{" "}
                    </Link>
                  </div>
                </div>
                <a
                  href="https://www.youtube.com/@chemicaltodaytv"
                  onClick={() => {
                    recordAdClick(
                      homepagedata.equipmentSection.horizontal_banner
                    );
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    style={{
                      marginBottom: "22px",
                      marginTop: "-50px",
                    }}
                    className="horizantal-ads2"
                    src={tv}
                    alt="Advertize"
                  />
                </a>

                <div className="event">
                  <div className="cover-post-heading">
                    <h3 className="cover-post-heading-text">Event</h3>
                    <a href="#" className="viewMoreImg">
                      <img src={viewMore} />
                    </a>
                  </div>
                  {homepagedata &&
                    homepagedata.homeScreenTopSection && ( // Check if postComUtils and featured_post are defined
                      <div className="post-container-flex">
                        <div className="cover-post-items">
                          <Link
                            key={2}
                            to={`/events`}
                            style={{ height: "280px", width: "45%" }}
                          >
                            <div
                              style={{
                                width: "335px",
                                height: "270px",
                              }}
                            >
                              <img
                                src={event1}
                                style={{ width: "300px", height: "270px" }}
                              ></img>
                            </div>{" "}
                            <div className="img-text">
                              <p className="text">Industrial Events</p>
                            </div>
                          </Link>
                          <Link
                            key={1}
                            to={`/events`}
                            className="post-card"
                            style={{ height: "280px", width: "45%" }}
                          >
                            <div
                              style={{
                                width: "335px",
                                height: "270px",
                              }}
                            >
                              <img
                                src={event3}
                                style={{ width: "300px", height: "270px" }}
                              ></img>
                            </div>{" "}
                            <div className="img-text">
                              <p className="text">Upcoming Webinars</p>
                            </div>
                          </Link>
                          <Link
                            key={1}
                            to={`/events`}
                            className="post-card"
                            style={{ height: "280px", width: "45%" }}
                          >
                            <div
                              style={{
                                width: "100%",
                                height: "270px",
                              }}
                            >
                              <img
                                src={event4}
                                style={{ width: "300px", height: "270px" }}
                              ></img>
                            </div>{" "}
                            <div className="img-text">
                              <p className="text">Past Events</p>
                            </div>
                          </Link>
                          <Link
                            key={1}
                            to={`/events`}
                            className="post-card"
                            style={{ height: "280px", width: "45%" }}
                          >
                            <div
                              style={{
                                width: "100%",
                                height: "270px",
                              }}
                            >
                              <img
                                src={event2}
                                style={{ width: "300px", height: "270px" }}
                              ></img>
                            </div>{" "}
                            <div className="img-text">
                              <p className="text">Conferences</p>
                            </div>
                          </Link>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            flexDirection: "column",
                          }}
                        >
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              recordAdClick(
                                homepagedata.sustainabilitySection.advt1
                              );
                            }}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <img
                              style={{
                                height: "200px",
                                width: "400px",
                                marginBottom: "20px",
                              }}
                              src={
                                homepagedata.sustainabilitySection.advt1.image
                              }
                            ></img>
                          </a>

                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              recordAdClick(
                                homepagedata.sustainabilitySection.advt2
                              );
                            }}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            {" "}
                            <img
                              style={{
                                height: "200px",
                                width: "400px",
                                marginBottom: "20px",
                              }}
                              src={
                                homepagedata.sustainabilitySection.advt2.image
                              }
                            ></img>
                          </a>

                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              recordAdClick(
                                homepagedata.sustainabilitySection.advt3
                              );
                            }}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            {" "}
                            <img
                              style={{
                                height: "200px",
                                width: "400px",
                                marginBottom: "20px",
                              }}
                              src={
                                homepagedata.sustainabilitySection.advt3.image
                              }
                            ></img>
                          </a>
                        </div>
                      </div>
                    )}
                </div>
                <div className="equipment">
                  <div className="cover-post-heading">
                    <h3 className="cover-post-heading-text">Sustainability</h3>
                    <a href="Sustainability/1" className="viewMoreImg">
                      <img src={viewMore} />
                    </a>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "13px",
                    }}
                  >
                    <Link
                      key={homepagedata.sustainabilitySection.news1.id}
                      to={`/news/Sustainability/${homepagedata.sustainabilitySection.news1.id}`}
                      className="post-card"
                      style={{ height: "380px", width: "19%" }}
                    >
                      <img
                        src={
                          homepagedata.sustainabilitySection.news1
                            .thumbnail_image_url
                        }
                        alt={homepagedata.sustainabilitySection.news1.title}
                        className="post-card-image"
                      />
                      <div className="img-text">
                        <p className="text">
                          {new Date(
                            homepagedata.sustainabilitySection.news1.published_date
                          ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                      <p className="overlay-text">
                        {homepagedata.sustainabilitySection.news1.title.length >
                        100
                          ? `${homepagedata.sustainabilitySection.news1.title.substring(
                              0,
                              100
                            )}...`
                          : homepagedata.sustainabilitySection.news1.title}
                      </p>
                      <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                        Chemical Today
                      </p>{" "}
                    </Link>
                    <Link
                      key={homepagedata.sustainabilitySection.news2.id}
                      to={`/news/Sustainability/${homepagedata.sustainabilitySection.news2.id}`}
                      className="post-card"
                      style={{ height: "380px", width: "19%" }}
                    >
                      <img
                        src={
                          homepagedata.sustainabilitySection.news2
                            .thumbnail_image_url
                        }
                        alt={homepagedata.sustainabilitySection.news1.title}
                        className="post-card-image"
                      />
                      <div className="img-text">
                        <p className="text">
                          {new Date(
                            homepagedata.sustainabilitySection.news2.published_date
                          ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                      <p className="overlay-text">
                        {homepagedata.sustainabilitySection.news2.title.length >
                        100
                          ? `${homepagedata.sustainabilitySection.news2.title.substring(
                              0,
                              100
                            )}...`
                          : homepagedata.sustainabilitySection.news2.title}
                      </p>
                      <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                        Chemical Today
                      </p>
                    </Link>
                    <Link
                      key={homepagedata.sustainabilitySection.news1.id}
                      to={`/news/Sustainability/${homepagedata.sustainabilitySection.news3.id}`}
                      className="post-card"
                      style={{ height: "380px", width: "19%" }}
                    >
                      <img
                        src={
                          homepagedata.sustainabilitySection.news3
                            .thumbnail_image_url
                        }
                        alt={homepagedata.sustainabilitySection.news1.title}
                        className="post-card-image"
                      />
                      <div className="img-text">
                        <p className="text">
                          {new Date(
                            homepagedata.sustainabilitySection.news3.published_date
                          ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                      <p className="overlay-text">
                        {homepagedata.sustainabilitySection.news3.title.length >
                        100
                          ? `${homepagedata.sustainabilitySection.news3.title.substring(
                              0,
                              100
                            )}...`
                          : homepagedata.sustainabilitySection.news3.title}
                      </p>
                      <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                        Chemical Today
                      </p>{" "}
                    </Link>
                    <Link
                      key={homepagedata.sustainabilitySection.news1.id}
                      to={`/news/Sustainability/${homepagedata.sustainabilitySection.news4.id}`}
                      className="post-card"
                      style={{ height: "380px", width: "19%" }}
                    >
                      <img
                        src={
                          homepagedata.sustainabilitySection.news4
                            .thumbnail_image_url
                        }
                        alt={homepagedata.sustainabilitySection.news1.title}
                        className="post-card-image"
                      />
                      <div className="img-text">
                        <p className="text">
                          {new Date(
                            homepagedata.sustainabilitySection.news4.published_date
                          ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                      <p className="overlay-text">
                        {homepagedata.sustainabilitySection.news4.title.length >
                        100
                          ? `${homepagedata.sustainabilitySection.news4.title.substring(
                              0,
                              100
                            )}...`
                          : homepagedata.sustainabilitySection.news4.title}
                      </p>
                      <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                        Chemical Today
                      </p>{" "}
                    </Link>
                    <Link
                      key={homepagedata.sustainabilitySection.news1.id}
                      to={`/news/Sustainability/${homepagedata.sustainabilitySection.news5.id}`}
                      className="post-card"
                      style={{ height: "380px", width: "19%" }}
                    >
                      <img
                        src={
                          homepagedata.sustainabilitySection.news5
                            .thumbnail_image_url
                        }
                        alt={homepagedata.sustainabilitySection.news1.title}
                        className="post-card-image"
                      />
                      <div className="img-text">
                        <p className="text">
                          {new Date(
                            homepagedata.sustainabilitySection.news5.published_date
                          ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                      <p className="overlay-text">
                        {homepagedata.sustainabilitySection.news5.title.length >
                        100
                          ? `${homepagedata.sustainabilitySection.news5.title.substring(
                              0,
                              100
                            )}...`
                          : homepagedata.sustainabilitySection.news5.title}
                      </p>
                      <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                        Chemical Today
                      </p>{" "}
                    </Link>
                  </div>
                </div>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    recordAdClick(
                      homepagedata.sustainabilitySection.horizontal_banner
                    );
                  }}
                >
                  <img
                    style={{
                      marginBottom: "22px",
                      marginTop: "-50px",
                    }}
                    className="horizantal-ads2"
                    src={
                      homepagedata.sustainabilitySection.horizontal_banner.image
                    }
                    alt="Advertize"
                  />
                </a>

                <div className="cover-post">
                  <div className="cover-post-heading">
                    <h3 className="cover-post-heading-text">Digitalization</h3>
                    <a href="Digitalization/1" className="viewMoreImg">
                      <img src={viewMore} />
                    </a>
                  </div>
                  {homepagedata &&
                    homepagedata.homeScreenTopSection && ( // Check if postComUtils and featured_post are defined
                      <div className="post-container-flex" style={{}}>
                        <div className="cover-post-items">
                          <Link
                            key={homepagedata.digitalizationSection.news1.id}
                            to={`/news/Digitalization/${homepagedata.digitalizationSection.news1.id}`}
                            className="post-card"
                            style={{ height: "300px", width: "45%" }}
                          >
                            <img
                              src={
                                homepagedata.digitalizationSection.news1
                                  .thumbnail_image_url
                              }
                              alt={
                                homepagedata.digitalizationSection.news1.title
                              }
                              className="post-card-image"
                            />
                            <div className="img-text">
                              <p className="text">
                                {new Date(
                                  homepagedata.digitalizationSection.news1.published_date
                                ).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                            <p className="overlay-text">
                              {homepagedata.digitalizationSection.news1.title
                                .length > 100
                                ? `${homepagedata.digitalizationSection.news1.title.substring(
                                    0,
                                    100
                                  )}...`
                                : homepagedata.digitalizationSection.news1
                                    .title}
                            </p>{" "}
                            <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                              Chemical Today
                            </p>{" "}
                          </Link>
                          <Link
                            key={homepagedata.digitalizationSection.news2.id}
                            to={`/news/Digitalization/${homepagedata.digitalizationSection.news2.id}`}
                            className="post-card"
                            style={{ height: "380px", width: "45%" }}
                          >
                            <img
                              src={
                                homepagedata.digitalizationSection.news2
                                  .thumbnail_image_url
                              }
                              alt={
                                homepagedata.digitalizationSection.news2.title
                              }
                              className="post-card-image"
                            />
                            <div className="img-text">
                              <p className="text">
                                {new Date(
                                  homepagedata.digitalizationSection.news2.published_date
                                ).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                            <p className="overlay-text">
                              {homepagedata.digitalizationSection.news2.title
                                .length > 100
                                ? `${homepagedata.digitalizationSection.news2.title.substring(
                                    0,
                                    100
                                  )}...`
                                : homepagedata.digitalizationSection.news2
                                    .title}
                            </p>{" "}
                            <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                              Chemical Today
                            </p>{" "}
                          </Link>
                          <Link
                            key={homepagedata.digitalizationSection.news3.id}
                            to={`/news/Digitalization/${homepagedata.digitalizationSection.news3.id}`}
                            className="post-card"
                            style={{ height: "380px", width: "45%" }}
                          >
                            <img
                              src={
                                homepagedata.digitalizationSection.news3
                                  .thumbnail_image_url
                              }
                              alt={
                                homepagedata.digitalizationSection.news3.title
                              }
                              className="post-card-image"
                            />
                            <div className="img-text">
                              <p className="text">
                                {new Date(
                                  homepagedata.digitalizationSection.news3.published_date
                                ).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                            <p className="overlay-text">
                              {homepagedata.digitalizationSection.news3.title
                                .length > 100
                                ? `${homepagedata.digitalizationSection.news3.title.substring(
                                    0,
                                    100
                                  )}...`
                                : homepagedata.digitalizationSection.news3
                                    .title}
                            </p>{" "}
                            <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                              Chemical Today
                            </p>{" "}
                          </Link>
                          <Link
                            key={homepagedata.digitalizationSection.news4.id}
                            to={`/news/Digitalization/${homepagedata.digitalizationSection.news4.id}`}
                            className="post-card"
                            style={{ height: "380px", width: "45%" }}
                          >
                            <img
                              src={
                                homepagedata.digitalizationSection.news4
                                  .thumbnail_image_url
                              }
                              alt={
                                homepagedata.digitalizationSection.news4.title
                              }
                              className="post-card-image"
                            />
                            <div className="img-text">
                              <p className="text">
                                {new Date(
                                  homepagedata.digitalizationSection.news4.published_date
                                ).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                            <p className="overlay-text">
                              {homepagedata.digitalizationSection.news4.title
                                .length > 100
                                ? `${homepagedata.digitalizationSection.news4.title.substring(
                                    0,
                                    100
                                  )}...`
                                : homepagedata.digitalizationSection.news4
                                    .title}
                            </p>
                            <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                              Chemical Today
                            </p>{" "}
                          </Link>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            flexDirection: "column",
                          }}
                        >
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              recordAdClick(
                                homepagedata.digitalizationSection.advt1
                              );
                            }}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <img
                              style={{
                                height: "200px",
                                width: "400px",
                                marginBottom: "20px",
                              }}
                              src={
                                homepagedata.digitalizationSection.advt1.image
                              }
                            ></img>
                          </a>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              recordAdClick(
                                homepagedata.digitalizationSection.advt2
                              );
                            }}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            {" "}
                            <img
                              style={{
                                height: "200px",
                                width: "400px",
                                marginBottom: "20px",
                              }}
                              src={
                                homepagedata.digitalizationSection.advt2.image
                              }
                            ></img>
                          </a>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              recordAdClick(
                                homepagedata.digitalizationSection.advt3
                              );
                            }}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            {" "}
                            <img
                              style={{
                                height: "200px",
                                width: "400px",
                              }}
                              src={
                                homepagedata.digitalizationSection.advt3.image
                              }
                            ></img>
                          </a>
                        </div>
                      </div>
                    )}
                </div>
              </div>
            </div>
          )}
      </>
    );
  } else {
    return (
      <>
        {homepagedata &&
          homepagedata.homeScreenTopSection && ( // Check if postComUtils and featured_post are defined
            <div>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  recordAdClick(homepagedata.homeScreenTopSection.advt1);
                }}
              >
                <img
                  style={{
                    width: "80%",
                    display: "block",
                    margin: "0 auto",
                  }}
                  src={homepagedata.homeScreenTopSection.advt1.image}
                  alt="Top Advertisement"
                />
              </a>

              <br></br>
              <Slider {...bannerSettings}>
                {homepagedata.homeScreenTopSection.horizontal_banner.map(
                  (banner, index) => (
                    <a
                      href="#"
                      key={index}
                      onClick={(e) => {
                        e.preventDefault();
                        recordAdClick(banner);
                      }}
                    >
                      <img
                        src={banner.image}
                        alt="Advertize"
                        style={{
                          width: "100%",
                          display: "block",
                          marginBottom: "22px",
                        }}
                        className="horizantal-ads"
                      />
                    </a>
                  )
                )}
              </Slider>
              <div className="main-body">
                <div className="cover-container">
                  <div className="cover-item">
                    <a
                      href={`/news/Posts/${homepagedata.homeScreenTopSection.post.id}`}
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      <div style={{}}>
                        <img
                          src={
                            homepagedata.homeScreenTopSection.post
                              .thumbnail_image_url
                          }
                          style={{}}
                          className="cover-item-img"
                          alt="Cover"
                        />
                        <h3
                          className="cover-item-text"
                          style={{
                            wordWrap: "break-word",
                            overflowWrap: "break-word",
                          }}
                        >
                          {" "}
                          {truncateText(
                            homepagedata.homeScreenTopSection.post.title,
                            135
                          )}
                        </h3>{" "}
                      </div>
                      <p
                        style={{
                          opacity: "0.7",
                          marginTop: "8px",
                          textDecoration: "none",
                          color: "black",
                          fontFamily: "Helvetica",
                        }}
                      >
                        Chemical Today
                      </p>
                    </a>
                    <div className="w-3 h-5 tab-ads-cont"></div>
                  </div>
                  <div className="cover-details">
                    <div className="cover-details-latest">
                      <div className="latest-stores">Latest Stories</div>
                      <div className="latest-text">
                        <div style={{}}>
                          <a
                            href={
                              homepagedata.homeScreenTopSection.latest_updates1
                                .url
                            }
                            target="_blank"
                            style={{
                              textDecoration: "none",
                              color: "black",
                            }}
                          >
                            {homepagedata.homeScreenTopSection.latest_updates1
                              .desc.length > 100
                              ? homepagedata.homeScreenTopSection.latest_updates1.desc.slice(
                                  0,
                                  100
                                ) + "..."
                              : homepagedata.homeScreenTopSection
                                  .latest_updates1.desc}
                          </a>
                        </div>
                        <div style={{}}>
                          <a
                            href={
                              homepagedata.homeScreenTopSection.latest_updates2
                                .url
                            }
                            target="_blank"
                            style={{
                              textDecoration: "none",
                              color: "black",
                            }}
                          >
                            {homepagedata.homeScreenTopSection.latest_updates2
                              .desc.length > 100
                              ? homepagedata.homeScreenTopSection.latest_updates2.desc.slice(
                                  0,
                                  100
                                ) + "..."
                              : homepagedata.homeScreenTopSection
                                  .latest_updates2.desc}
                          </a>
                        </div>
                        <div style={{}}>
                          <a
                            href={
                              homepagedata.homeScreenTopSection.latest_updates3
                                .url
                            }
                            target="_blank"
                            style={{
                              textDecoration: "none",
                              color: "black",
                            }}
                          >
                            {homepagedata.homeScreenTopSection.latest_updates3
                              .desc.length > 100
                              ? homepagedata.homeScreenTopSection.latest_updates3.desc.slice(
                                  0,
                                  100
                                ) + "..."
                              : homepagedata.homeScreenTopSection
                                  .latest_updates3.desc}
                          </a>
                        </div>
                        <div style={{}}>
                          <a
                            href={
                              homepagedata.homeScreenTopSection.latest_updates4
                                .url
                            }
                            target="_blank"
                            style={{
                              textDecoration: "none",
                              color: "black",
                            }}
                          >
                            {homepagedata.homeScreenTopSection.latest_updates4
                              .desc.length > 100
                              ? homepagedata.homeScreenTopSection.latest_updates4.desc.slice(
                                  0,
                                  100
                                ) + "..."
                              : homepagedata.homeScreenTopSection
                                  .latest_updates4.desc}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="editors-choice">
                      <div className="latest-stores">Advertorials</div>
                      <br></br>
                      <div className="editor-choice">
                        {/* <div className="editor-choice-img">
                          <a
                            href="/editorial"
                            target="_blank"
                            style={{
                              textDecoration: "none",
                              color: "black",
                              fontWeight: "600",
                            }}
                            className="editorial-text"
                          >
                            <img
                              src={editorsChoice}
                              style={{}}
                              alt="Editor's Choice"
                            />{" "}
                          </a>
                          <a
                            href="/editorial"
                            target="_blank"
                            style={{
                              textDecoration: "None",
                              marginTop: "10px",
                            }}
                            className="header-util-btn2"
                          >
                            {" "}
                            PDF
                          </a>
                        </div> */}
                        <div className="editor-choice-img-side">
                          {/* <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              recordAdClick(
                                homepagedata.homeScreenTopSection.advt1
                              );
                            }}
                          >
                            <img
                              className="editor-choice-img-side-1"
                              style={{}}
                              src={
                                homepagedata.homeScreenTopSection.advt1.image
                              }
                            ></img>
                          </a> */}
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              recordAdClick(
                                homepagedata.homeScreenTopSection.advt2
                              );
                            }}
                          >
                            {" "}
                            <img
                              className="editor-choice-img-side-1"
                              style={{}}
                              src={
                                homepagedata.homeScreenTopSection.advt2.image
                              }
                            ></img>
                          </a>
                        </div>
                        <div className="w-3 h-5 tab-ads-cont tab-ads-cont-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cover-post">
                  <div className="cover-post-heading">
                    <h3 className="cover-post-heading-text">Post</h3>
                    <a href="/Posts/1" className="viewMoreImg">
                      <img src={viewMore} />
                    </a>
                  </div>
                  {homepagedata &&
                    homepagedata.homeScreenTopSection && ( // Check if postComUtils and featured_post are defined
                      <div className="post-container-flex" style={{}}>
                        <div className="cover-post-items">
                          <Link
                            key={homepagedata.homeScreenPostSection.post1.id}
                            to={`/news/Posts/${homepagedata.homeScreenPostSection.post1.id}/`}
                            className="post-card"
                          >
                            <img
                              src={
                                homepagedata.homeScreenPostSection.post1
                                  .thumbnail_image_url
                              }
                              alt={
                                homepagedata.homeScreenPostSection.post1.title
                              }
                              className="post-card-image"
                            />
                            <div className="img-text">
                              <p className="text">
                                {new Date(
                                  homepagedata.homeScreenPostSection.post1.published_date
                                ).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                            <p className="overlay-text">
                              {homepagedata.homeScreenPostSection.post1.title
                                .length > 100
                                ? `${homepagedata.homeScreenPostSection.post1.title.substring(
                                    0,
                                    100
                                  )}...`
                                : homepagedata.homeScreenPostSection.post1
                                    .title}
                            </p>
                            <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                              Chemical Today
                            </p>
                          </Link>
                          <Link
                            key={homepagedata.homeScreenPostSection.post2.id}
                            to={`/news/Posts/${homepagedata.homeScreenPostSection.post2.id}`}
                            className="post-card"
                          >
                            <img
                              src={
                                homepagedata.homeScreenPostSection.post2
                                  .thumbnail_image_url
                              }
                              alt={
                                homepagedata.homeScreenPostSection.post2.title
                              }
                              className="post-card-image"
                            />
                            <div className="img-text">
                              <p className="text">
                                {new Date(
                                  homepagedata.homeScreenPostSection.post2.published_date
                                ).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                            <p className="overlay-text">
                              {homepagedata.homeScreenPostSection.post2.title
                                .length > 100
                                ? `${homepagedata.homeScreenPostSection.post2.title.substring(
                                    0,
                                    100
                                  )}...`
                                : homepagedata.homeScreenPostSection.post2
                                    .title}
                            </p>
                            <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                              Chemical Today
                            </p>{" "}
                          </Link>
                          <Link
                            key={homepagedata.homeScreenPostSection.post3.id}
                            to={`/news/Posts/${homepagedata.homeScreenPostSection.post3.id}`}
                            className="post-card"
                          >
                            <img
                              src={
                                homepagedata.homeScreenPostSection.post3
                                  .thumbnail_image_url
                              }
                              alt={
                                homepagedata.homeScreenPostSection.post3.title
                              }
                              className="post-card-image"
                            />
                            <div className="img-text">
                              <p className="text">
                                {new Date(
                                  homepagedata.homeScreenPostSection.post3.published_date
                                ).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                            <p className="overlay-text">
                              {homepagedata.homeScreenPostSection.post3.title
                                .length > 100
                                ? `${homepagedata.homeScreenPostSection.post3.title.substring(
                                    0,
                                    100
                                  )}...`
                                : homepagedata.homeScreenPostSection.post3
                                    .title}
                            </p>
                            <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                              Chemical Today
                            </p>{" "}
                          </Link>
                          <Link
                            key={homepagedata.homeScreenPostSection.post4.id}
                            to={`/news/Posts/${homepagedata.homeScreenPostSection.post4.id}`}
                            className="post-card"
                          >
                            <img
                              src={
                                homepagedata.homeScreenPostSection.post4
                                  .thumbnail_image_url
                              }
                              alt={
                                homepagedata.homeScreenPostSection.post4.title
                              }
                              className="post-card-image"
                            />
                            <div className="img-text">
                              <p className="text">
                                {new Date(
                                  homepagedata.homeScreenPostSection.post4.published_date
                                ).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                            <p className="overlay-text">
                              {homepagedata.homeScreenPostSection.post4.title
                                .length > 100
                                ? `${homepagedata.homeScreenPostSection.post4.title.substring(
                                    0,
                                    100
                                  )}...`
                                : homepagedata.homeScreenPostSection.post4
                                    .title}
                            </p>
                            <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                              Chemical Today
                            </p>
                          </Link>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            flexDirection: "column",
                          }}
                        >
                          {/* <video
                            width="400"
                            height="200"
                            style={{ objectFit: "cover" }}
                            autoPlay
                            loop
                            controls
                          >
                            <source
                              src="https://chemical-today.s3.ap-south-1.amazonaws.com/vedio_advt.mp4"
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video> */}
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              recordAdClick(
                                homepagedata.homeScreenPostSection.advt1
                              );
                            }}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <img
                              style={{
                                marginTop: "20px",
                                height: "200px",
                                width: "100%",
                                marginBottom: "20px",
                              }}
                              src={
                                homepagedata.homeScreenPostSection.advt1.image
                              }
                            ></img>
                          </a>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              recordAdClick(
                                homepagedata.homeScreenPostSection.advt2
                              );
                            }}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <img
                              style={{
                                marginTop: "20px",
                                height: "200px",
                                width: "100%",
                                marginBottom: "20px",
                              }}
                              src={
                                homepagedata.homeScreenPostSection.advt2.image
                              }
                            ></img>
                          </a>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              recordAdClick(
                                homepagedata.homeScreenPostSection.advt3
                              );
                            }}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            {" "}
                            <img
                              style={{
                                height: "200px",
                                width: "100%",
                              }}
                              src={
                                homepagedata.homeScreenPostSection.advt3.image
                              }
                            ></img>
                          </a>
                        </div>
                      </div>
                    )}
                </div>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    recordAdClick(
                      homepagedata.homeScreenPostSection.horizontal_banner
                    );
                  }}
                >
                  <img
                    style={{
                      marginBottom: "22px",
                      marginTop: "-35px",
                    }}
                    className="horizantal-ads2"
                    src={
                      homepagedata.homeScreenPostSection.horizontal_banner.image
                    }
                    alt="Advertize"
                  />
                </a>
                <div className="insights" style={{}}>
                  <div className="cover-post-heading">
                    <h3 className="cover-post-heading-text">Insights</h3>
                    <a href="#" className="viewMoreImg">
                      <img src={viewMore} />
                    </a>
                  </div>
                  <div className="insights-container" style={{}}>
                    <div className="insights-items">
                      <div
                        className="insights-itemn"
                        style={{
                          height: "230px",
                          display: "flex",
                          flexDirection: "column",
                          justifytitle: "end",
                        }}
                      >
                        <img
                          src={
                            homepagedata.insightSection.report
                              .thumbnail_image_url
                          }
                          style={{
                            height: "230px",
                          }}
                        ></img>
                      </div>
                      <div className="img-text">
                        <p className="text">Reports</p>
                      </div>
                      {/* <Link to={redirectTo} className='overlay-text'>{post.description}</Link> */}
                      <p className="overlay-text insights-desc" style={{}}>
                        {homepagedata.insightSection.report.title.length > 100
                          ? `${homepagedata.insightSection.report.title.substring(
                              0,
                              100
                            )}...`
                          : homepagedata.insightSection.report.title}
                      </p>
                      <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                        Chemical Today
                      </p>
                      <Link
                        to="/Reports/1"
                        className="insights-btn"
                        style={{
                          textDecoration: "none",
                          fontSize: "14px",
                          fontFamily: "Helvitica",
                          fontWeight: "bold",
                        }}
                      >
                        Read More
                      </Link>
                    </div>

                    <div className="insights-items">
                      <div
                        className="insights-itemn"
                        style={{
                          height: "230px",
                          display: "flex",
                          flexDirection: "column",
                          justifytitle: "end",
                        }}
                      >
                        <img
                          src={
                            homepagedata.insightSection.randd
                              .thumbnail_image_url
                          }
                          style={{
                            height: "250px",
                          }}
                        ></img>
                      </div>
                      <div className="img-text">
                        <p className="text">R & D</p>
                      </div>
                      {/* <Link to={redirectTo} className='overlay-text'>{post.description}</Link> */}
                      <p className="overlay-text insights-desc" style={{}}>
                        {homepagedata.insightSection.randd.title.length > 100
                          ? `${homepagedata.insightSection.randd.title.substring(
                              0,
                              100
                            )}...`
                          : homepagedata.insightSection.randd.title}
                      </p>
                      <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                        Chemical Today
                      </p>
                      <Link
                        to="/R&D/1"
                        className="insights-btn"
                        style={{
                          textDecoration: "none",
                          fontSize: "14px",
                          fontFamily: "Helvitica",
                          fontWeight: "bold",
                        }}
                      >
                        Read More
                      </Link>
                    </div>

                    <div className="insights-items">
                      <div
                        className="insights-itemn"
                        style={{
                          height: "230px",
                          display: "flex",
                          flexDirection: "column",
                          justifytitle: "end",
                        }}
                      >
                        <img
                          src={
                            homepagedata.insightSection.whitepaper
                              .thumbnail_image_url
                          }
                          style={{
                            height: "250px",
                          }}
                        ></img>
                      </div>
                      <div className="img-text">
                        <p className="text">White Papers</p>
                      </div>
                      {/* <Link to={redirectTo} className='overlay-text'>{post.description}</Link> */}
                      <p className="overlay-text insights-desc" style={{}}>
                        {homepagedata.insightSection.whitepaper.title.length >
                        100
                          ? `${homepagedata.insightSection.whitepaper.title.substring(
                              0,
                              100
                            )}...`
                          : homepagedata.insightSection.whitepaper.title}
                      </p>
                      <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                        Chemical Today
                      </p>
                      <Link
                        to="/White Papers/1"
                        className="insights-btn"
                        style={{
                          textDecoration: "none",
                          fontSize: "14px",
                          fontFamily: "Helvitica",
                          fontWeight: "bold",
                        }}
                      >
                        Read More
                      </Link>
                    </div>

                    <div className="insights-items">
                      <div
                        className="insights-itemn"
                        style={{
                          height: "230px",
                          display: "flex",
                          flexDirection: "column",
                          justifytitle: "end",
                        }}
                      >
                        <img
                          src={
                            homepagedata.insightSection.casestudy
                              .thumbnail_image_url
                          }
                          style={{
                            height: "230px",
                          }}
                        ></img>
                      </div>
                      <div className="img-text">
                        <p className="text">Case Study</p>
                      </div>
                      {/* <Link to={redirectTo} className='overlay-text'>{post.description}</Link> */}
                      <p className="overlay-text insights-desc" style={{}}>
                        {homepagedata.insightSection.casestudy.title.length >
                        100
                          ? `${homepagedata.insightSection.casestudy.title.substring(
                              0,
                              100
                            )}...`
                          : homepagedata.insightSection.casestudy.title}
                      </p>
                      <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                        Chemical Today
                      </p>
                      <Link
                        to="/Case Studies/1"
                        className="insights-btn"
                        style={{
                          textDecoration: "none",
                          fontSize: "14px",
                          fontFamily: "Helvitica",
                          fontWeight: "bold",
                        }}
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    recordAdClick(
                      homepagedata.insightSection.horizontal_banner
                    );
                  }}
                >
                  <img
                    style={{
                      marginBottom: "22px",
                      marginTop: "-30px",
                    }}
                    className="horizontal-ads2"
                    src={homepagedata.insightSection.horizontal_banner.image}
                    alt="Advertize"
                  />
                </a>
                <div className="cover-post">
                  <div className="cover-post-heading">
                    <h3 className="cover-post-heading-text">Spotlight</h3>
                    <a href="/Plant Visit/1" className="viewMoreImg">
                      <img src={viewMore} />
                    </a>
                  </div>
                  {homepagedata &&
                    homepagedata.homeScreenTopSection && ( // Check if postComUtils and featured_post are defined
                      <div className="post-container-flex" style={{}}>
                        <div className="cover-post-items">
                          <Link
                            key={homepagedata.homeScreenPostSection.post1.id}
                            to={`/news/Plant Visit/${homepagedata.spotlightSection.plant_visit.id}`}
                            className="post-card"
                          >
                            <img
                              src={
                                homepagedata.spotlightSection.plant_visit
                                  .thumbnail_image_url
                              }
                              alt={
                                homepagedata.homeScreenPostSection.post1.title
                              }
                              className="post-card-image"
                            />
                            <div className="img-text">
                              <p className="text">Plant Visit</p>
                            </div>
                            <h3 className="cover-item-text">
                              {homepagedata.spotlightSection.plant_visit.title
                                .length > 100
                                ? `${homepagedata.spotlightSection.plant_visit.title.substring(
                                    0,
                                    100
                                  )}...`
                                : homepagedata.spotlightSection.plant_visit
                                    .title}
                            </h3>

                            <p
                              style={{
                                opacity: "0.7",
                                textDecoration: "none",
                                color: "black",
                                fontFamily: "Helvetica",
                              }}
                            >
                              Chemical Today
                            </p>
                          </Link>
                          <Link
                            key={homepagedata.homeScreenPostSection.post2.id}
                            to={`/news/Posts/${homepagedata.spotlightSection.management1.id}`}
                            className="post-card"
                          >
                            <img
                              src={
                                homepagedata.spotlightSection.management1
                                  .thumbnail_image_url
                              }
                              alt={
                                homepagedata.homeScreenPostSection.post2.title
                              }
                              className="post-card-image"
                            />
                            <div className="img-text">
                              <p className="text">Management</p>
                            </div>
                            <p className="overlay-text">
                              {homepagedata.spotlightSection.management1.title
                                .length > 100
                                ? `${homepagedata.spotlightSection.management1.title.substring(
                                    0,
                                    100
                                  )}...`
                                : homepagedata.spotlightSection.management1
                                    .title}
                            </p>
                            <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                              Chemical Today
                            </p>{" "}
                          </Link>
                          <Link
                            key={homepagedata.homeScreenPostSection.post2.id}
                            to={`/news/Posts/${homepagedata.spotlightSection.management2.id}`}
                            className="post-card"
                          >
                            <img
                              src={
                                homepagedata.spotlightSection.management2
                                  .thumbnail_image_url
                              }
                              alt={
                                homepagedata.homeScreenPostSection.post2.title
                              }
                              className="post-card-image"
                            />
                            <div className="img-text">
                              <p className="text">Management</p>
                            </div>
                            <p className="overlay-text">
                              {homepagedata.spotlightSection.management2.title
                                .length > 100
                                ? `${homepagedata.spotlightSection.management2.title.substring(
                                    0,
                                    100
                                  )}...`
                                : homepagedata.spotlightSection.management2
                                    .title}
                            </p>
                            <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                              Chemical Today
                            </p>{" "}
                          </Link>
                          <Link
                            key={homepagedata.homeScreenPostSection.post2.id}
                            to={`/news/Posts/${homepagedata.spotlightSection.management3.id}`}
                            className="post-card"
                          >
                            <img
                              src={
                                homepagedata.spotlightSection.management3
                                  .thumbnail_image_url
                              }
                              alt={
                                homepagedata.homeScreenPostSection.post2.title
                              }
                              className="post-card-image"
                            />
                            <div className="img-text">
                              <p className="text">Management</p>
                            </div>
                            <p className="overlay-text">
                              {homepagedata.spotlightSection.management3.title
                                .length > 100
                                ? `${homepagedata.spotlightSection.management3.title.substring(
                                    0,
                                    100
                                  )}...`
                                : homepagedata.spotlightSection.management3
                                    .title}
                            </p>
                            <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                              Chemical Today
                            </p>{" "}
                          </Link>
                          <Link
                            key={homepagedata.homeScreenPostSection.post2.id}
                            to={`/news/Posts/${homepagedata.spotlightSection.management4.id}`}
                            className="post-card"
                          >
                            <img
                              src={
                                homepagedata.spotlightSection.management4
                                  .thumbnail_image_url
                              }
                              alt={
                                homepagedata.homeScreenPostSection.post2.title
                              }
                              className="post-card-image"
                            />
                            <div className="img-text">
                              <p className="text">Management</p>
                            </div>
                            <p className="overlay-text">
                              {homepagedata.spotlightSection.management4.title
                                .length > 100
                                ? `${homepagedata.spotlightSection.management4.title.substring(
                                    0,
                                    100
                                  )}...`
                                : homepagedata.spotlightSection.management4
                                    .title}
                            </p>
                            <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                              Chemical Today
                            </p>{" "}
                          </Link>
                        </div>
                      </div>
                    )}
                </div>
                =
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    recordAdClick(
                      homepagedata.spotlightSection.horizontal_banner
                    );
                  }}
                >
                  <img
                    style={{
                      marginBottom: "22px",
                      marginTop: "-30px",
                    }}
                    className="horizantal-ads2"
                    src={homepagedata.spotlightSection.horizontal_banner.image}
                    alt="Advertize"
                  />
                </a>
                <div className="cover-post">
                  <div className="cover-post-heading">
                    <h3 className="cover-post-heading-text">Products</h3>
                    <a href="Products/1" className="viewMoreImg">
                      <img src={viewMore} />
                    </a>
                  </div>
                  {homepagedata &&
                    homepagedata.homeScreenTopSection && ( // Check if postComUtils and featured_post are defined
                      <div className="post-container-flex" style={{}}>
                        <div className="cover-post-items">
                          <Link
                            key={homepagedata.productSection.post1.id}
                            to={`/news/Products/${homepagedata.productSection.post1.id}`}
                            className="post-card"
                            style={{ height: "300px", width: "45%" }}
                          >
                            <img
                              src={
                                homepagedata.productSection.post1
                                  .thumbnail_image_url
                              }
                              alt={homepagedata.productSection.post1.title}
                              className="post-card-image"
                            />
                            <div className="img-text">
                              <p className="text">
                                {new Date(
                                  homepagedata.productSection.post1.published_date
                                ).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                            <p className="overlay-text">
                              {homepagedata.productSection.post1.title.length >
                              100
                                ? `${homepagedata.productSection.post1.title.substring(
                                    0,
                                    100
                                  )}...`
                                : homepagedata.productSection.post1.title}
                            </p>
                            <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                              Chemical Today
                            </p>{" "}
                          </Link>
                          <Link
                            key={homepagedata.productSection.post2.id}
                            to={`/news/Products/${homepagedata.productSection.post2.id}`}
                            className="post-card"
                            style={{ height: "380px", width: "45%" }}
                          >
                            <img
                              src={
                                homepagedata.productSection.post2
                                  .thumbnail_image_url
                              }
                              alt={homepagedata.productSection.post2.title}
                              className="post-card-image"
                            />
                            <div className="img-text">
                              <p className="text">
                                {new Date(
                                  homepagedata.productSection.post2.published_date
                                ).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                            <p className="overlay-text">
                              {homepagedata.productSection.post2.title.length >
                              100
                                ? `${homepagedata.productSection.post2.title.substring(
                                    0,
                                    100
                                  )}...`
                                : homepagedata.productSection.post2.title}
                            </p>{" "}
                            <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                              Chemical Today
                            </p>{" "}
                          </Link>
                          <Link
                            key={homepagedata.productSection.post3.id}
                            to={`/news/Products/${homepagedata.productSection.post3.id}`}
                            className="post-card"
                            style={{ height: "380px", width: "45%" }}
                          >
                            <img
                              src={
                                homepagedata.productSection.post3
                                  .thumbnail_image_url
                              }
                              alt={homepagedata.productSection.post3.title}
                              className="post-card-image"
                            />
                            <div className="img-text">
                              <p className="text">
                                {new Date(
                                  homepagedata.productSection.post3.published_date
                                ).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                            <p className="overlay-text">
                              {homepagedata.productSection.post3.title.length >
                              100
                                ? `${homepagedata.productSection.post3.title.substring(
                                    0,
                                    100
                                  )}...`
                                : homepagedata.productSection.post3.title}
                            </p>{" "}
                            <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                              Chemical Today
                            </p>{" "}
                          </Link>
                          <Link
                            key={homepagedata.productSection.post4.id}
                            to={`/news/Products/${homepagedata.productSection.post4.id}`}
                            className="post-card"
                            style={{ height: "380px", width: "45%" }}
                          >
                            <img
                              src={
                                homepagedata.productSection.post4
                                  .thumbnail_image_url
                              }
                              alt={homepagedata.productSection.post4.title}
                              className="post-card-image"
                            />
                            <div className="img-text">
                              <p className="text">
                                {new Date(
                                  homepagedata.productSection.post4.published_date
                                ).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                            <p className="overlay-text">
                              {homepagedata.productSection.post4.title.length >
                              100
                                ? `${homepagedata.productSection.post4.title.substring(
                                    0,
                                    100
                                  )}...`
                                : homepagedata.productSection.post4.title}
                            </p>
                            <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                              Chemical Today
                            </p>{" "}
                          </Link>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            flexDirection: "column",
                          }}
                        >
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              recordAdClick(homepagedata.productSection.advt1);
                            }}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <img
                              style={{
                                height: "200px",
                                width: "100%",
                                marginBottom: "20px",
                              }}
                              src={homepagedata.productSection.advt1.image}
                            ></img>
                          </a>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              recordAdClick(homepagedata.productSection.advt2);
                            }}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            {" "}
                            <img
                              style={{
                                height: "200px",
                                width: "100%",
                                marginBottom: "20px",
                              }}
                              src={homepagedata.productSection.advt2.image}
                            ></img>
                          </a>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              recordAdClick(homepagedata.productSection.advt3);
                            }}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            {" "}
                            <img
                              style={{
                                height: "200px",
                                width: "100%",
                              }}
                              src={homepagedata.productSection.advt3.image}
                            ></img>
                          </a>
                        </div>
                      </div>
                    )}
                </div>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    recordAdClick(
                      homepagedata.equipmentSection.horizontal_banner
                    );
                  }}
                >
                  <img
                    style={{
                      marginBottom: "22px",
                      marginTop: "-50px",
                    }}
                    className="horizantal-ads2"
                    src={homepagedata.equipmentSection.horizontal_banner.image}
                    alt="Advertize"
                  />
                </a>
                <div className="equipment">
                  <div className="cover-post-heading">
                    <h3 className="cover-post-heading-text">Equipment</h3>
                    <a href="Equipments/1" className="viewMoreImg">
                      <img src={viewMore} />
                    </a>
                  </div>

                  <div style={{}}>
                    <Link
                      key={homepagedata.equipmentSection.equipment1.id}
                      to={`/news/Equipments/${homepagedata.equipmentSection.equipment1.id}`}
                      className="post-card"
                    >
                      <img
                        src={
                          homepagedata.equipmentSection.equipment1
                            .thumbnail_image_url
                        }
                        alt={homepagedata.equipmentSection.equipment1.title}
                        className="post-card-image2"
                        style={{
                          height: "200px",
                          width: "100%",
                          display: "block",
                          objectFit: "fill",
                        }}
                      />
                      <div className="img-text">
                        <p className="text">
                          {new Date(
                            homepagedata.equipmentSection.equipment1.published_date
                          ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                      <p className="overlay-text">
                        {homepagedata.equipmentSection.equipment1.title.length >
                        100
                          ? `${homepagedata.equipmentSection.equipment1.title.substring(
                              0,
                              100
                            )}...`
                          : homepagedata.equipmentSection.equipment1.title}
                      </p>
                      <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                        Chemical Today
                      </p>
                    </Link>
                    <Link
                      key={homepagedata.equipmentSection.equipment2.id}
                      to={`/news/Equipments/${homepagedata.equipmentSection.equipment2.id}`}
                      className="post-card"
                    >
                      <img
                        src={
                          homepagedata.equipmentSection.equipment2
                            .thumbnail_image_url
                        }
                        alt={homepagedata.equipmentSection.equipment1.title}
                        className="post-card-image"
                      />
                      <div className="img-text">
                        <p className="text">
                          {new Date(
                            homepagedata.equipmentSection.equipment2.published_date
                          ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                      <p className="overlay-text">
                        {homepagedata.equipmentSection.equipment2.title.length >
                        100
                          ? `${homepagedata.equipmentSection.equipment2.title.substring(
                              0,
                              100
                            )}...`
                          : homepagedata.equipmentSection.equipment2.title}
                      </p>
                      <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                        Chemical Today
                      </p>{" "}
                    </Link>
                    <Link
                      key={homepagedata.equipmentSection.equipment1.id}
                      to={`/news/Equipments/${homepagedata.equipmentSection.equipment3.id}`}
                      className="post-card"
                    >
                      <img
                        src={
                          homepagedata.equipmentSection.equipment3
                            .thumbnail_image_url
                        }
                        alt={homepagedata.equipmentSection.equipment1.title}
                        className="post-card-image"
                      />
                      <div className="img-text">
                        <p className="text">
                          {new Date(
                            homepagedata.equipmentSection.equipment3.published_date
                          ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                      <p className="overlay-text">
                        {homepagedata.equipmentSection.equipment3.title.length >
                        100
                          ? `${homepagedata.equipmentSection.equipment3.title.substring(
                              0,
                              100
                            )}...`
                          : homepagedata.equipmentSection.equipment3.title}
                      </p>
                      <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                        Chemical Today
                      </p>{" "}
                    </Link>
                    <Link
                      key={homepagedata.equipmentSection.equipment1.id}
                      to={`/news/Equipments/${homepagedata.equipmentSection.equipment4.id}`}
                      className="post-card"
                    >
                      <img
                        src={
                          homepagedata.equipmentSection.equipment4
                            .thumbnail_image_url
                        }
                        alt={homepagedata.equipmentSection.equipment1.title}
                        className="post-card-image"
                      />
                      <div className="img-text">
                        <p className="text">
                          {new Date(
                            homepagedata.equipmentSection.equipment4.published_date
                          ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                      <p className="overlay-text">
                        {homepagedata.equipmentSection.equipment4.title.length >
                        100
                          ? `${homepagedata.equipmentSection.equipment4.title.substring(
                              0,
                              100
                            )}...`
                          : homepagedata.equipmentSection.equipment4.title}
                      </p>
                      <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                        Chemical Today
                      </p>{" "}
                    </Link>
                    <Link
                      key={homepagedata.equipmentSection.equipment1.id}
                      to={`/news/Equipments/${homepagedata.equipmentSection.equipment5.id}`}
                      className="post-card"
                    >
                      <img
                        src={
                          homepagedata.equipmentSection.equipment5
                            .thumbnail_image_url
                        }
                        alt={homepagedata.equipmentSection.equipment1.title}
                        className="post-card-image"
                      />
                      <div className="img-text">
                        <p className="text">
                          {new Date(
                            homepagedata.equipmentSection.equipment5.published_date
                          ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                      <p className="overlay-text">
                        {homepagedata.equipmentSection.equipment5.title.length >
                        100
                          ? `${homepagedata.equipmentSection.equipment5.title.substring(
                              0,
                              100
                            )}...`
                          : homepagedata.equipmentSection.equipment5.title}
                      </p>
                      <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                        Chemical Today
                      </p>{" "}
                    </Link>
                  </div>
                </div>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    recordAdClick(
                      homepagedata.equipmentSection.horizontal_banner
                    );
                  }}
                >
                  <img
                    style={{
                      marginBottom: "22px",
                      marginTop: "-30px",
                    }}
                    className="horizantal-ads2"
                    src={homepagedata.equipmentSection.horizontal_banner.image}
                    alt="Advertize"
                  />
                </a>
                <div className="event">
                  <div className="cover-post-heading">
                    <h3 className="cover-post-heading-text">Event</h3>
                    <a href="#" className="viewMoreImg">
                      <img src={viewMore} />
                    </a>
                  </div>
                  {homepagedata &&
                    homepagedata.homeScreenTopSection && ( // Check if postComUtils and featured_post are defined
                      <div className="post-container-flex">
                        <div className="cover-post-items">
                          <Link
                            key={2}
                            className="post-card"
                            to={`/events`}
                            style={{ marginBottom: "25px" }}
                          >
                            <div
                              style={{
                                width: "335px",
                                height: "270px",
                              }}
                            >
                              <img
                                src={event1}
                                style={{ width: "300px", height: "270px" }}
                              ></img>
                            </div>{" "}
                            <div className="img-text">
                              <p className="text">Industrial Events</p>
                            </div>
                          </Link>
                          <Link
                            key={1}
                            to={`/events`}
                            className="post-card"
                            style={{ marginBottom: "25px" }}
                          >
                            <div
                              style={{
                                width: "335px",
                                height: "270px",
                              }}
                            >
                              <img
                                src={event3}
                                style={{ width: "300px", height: "270px" }}
                              ></img>
                            </div>{" "}
                            <div className="img-text">
                              <p className="text">Upcoming Webinars</p>
                            </div>
                          </Link>
                          <Link
                            key={1}
                            to={`/events`}
                            className="post-card"
                            style={{ marginBottom: "25px" }}
                          >
                            <div
                              style={{
                                width: "100%",
                                height: "270px",
                              }}
                            >
                              <img
                                src={event4}
                                style={{ width: "300px", height: "270px" }}
                              ></img>
                            </div>{" "}
                            <div className="img-text">
                              <p className="text">Past Events</p>
                            </div>
                          </Link>
                          <Link
                            key={1}
                            to={`/events`}
                            className="post-card"
                            style={{ marginBottom: "25px" }}
                          >
                            <div
                              style={{
                                width: "100%",
                                height: "270px",
                              }}
                            >
                              <img
                                src={event2}
                                style={{ width: "300px", height: "270px" }}
                              ></img>
                            </div>{" "}
                            <div className="img-text">
                              <p className="text">Conferences</p>
                            </div>
                          </Link>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            flexDirection: "column",
                          }}
                        >
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              recordAdClick(
                                homepagedata.sustainabilitySection.advt1
                              );
                            }}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <img
                              style={{
                                height: "200px",
                                width: "100%",
                                marginBottom: "20px",
                              }}
                              src={
                                homepagedata.sustainabilitySection.advt1.image
                              }
                            ></img>
                          </a>

                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              recordAdClick(
                                homepagedata.sustainabilitySection.advt2
                              );
                            }}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            {" "}
                            <img
                              style={{
                                height: "200px",
                                width: "100%",
                                marginBottom: "20px",
                              }}
                              src={
                                homepagedata.sustainabilitySection.advt2.image
                              }
                            ></img>
                          </a>

                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              recordAdClick(
                                homepagedata.sustainabilitySection.advt3
                              );
                            }}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            {" "}
                            <img
                              style={{
                                height: "200px",
                                width: "100%",
                                marginBottom: "20px",
                              }}
                              src={
                                homepagedata.sustainabilitySection.advt3.image
                              }
                            ></img>
                          </a>
                        </div>
                      </div>
                    )}
                </div>
                <div className="equipment">
                  <div className="cover-post-heading">
                    <h3 className="cover-post-heading-text">Sustainability</h3>
                    <a href="Sustainability/1" className="viewMoreImg">
                      <img src={viewMore} />
                    </a>
                  </div>

                  <div style={{}}>
                    <Link
                      key={homepagedata.sustainabilitySection.news1.id}
                      to={`/news/Sustainability/${homepagedata.sustainabilitySection.news1.id}`}
                      className="post-card"
                      style={{ height: "380px" }}
                    >
                      <img
                        src={
                          homepagedata.sustainabilitySection.news1
                            .thumbnail_image_url
                        }
                        alt={homepagedata.sustainabilitySection.news1.title}
                        className="post-card-image"
                      />
                      <div className="img-text">
                        <p className="text">
                          {new Date(
                            homepagedata.sustainabilitySection.news1.published_date
                          ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                      <p className="overlay-text">
                        {homepagedata.sustainabilitySection.news1.title.length >
                        100
                          ? `${homepagedata.sustainabilitySection.news1.title.substring(
                              0,
                              100
                            )}...`
                          : homepagedata.sustainabilitySection.news1.title}
                      </p>
                      <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                        Chemical Today
                      </p>{" "}
                    </Link>
                    <Link
                      key={homepagedata.sustainabilitySection.news2.id}
                      to={`/news/Sustainability/${homepagedata.sustainabilitySection.news2.id}`}
                      className="post-card"
                      style={{ height: "380px" }}
                    >
                      <img
                        src={
                          homepagedata.sustainabilitySection.news2
                            .thumbnail_image_url
                        }
                        alt={homepagedata.sustainabilitySection.news1.title}
                        className="post-card-image"
                      />
                      <div className="img-text">
                        <p className="text">
                          {new Date(
                            homepagedata.sustainabilitySection.news2.published_date
                          ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                      <p className="overlay-text">
                        {homepagedata.sustainabilitySection.news2.title.length >
                        100
                          ? `${homepagedata.sustainabilitySection.news2.title.substring(
                              0,
                              100
                            )}...`
                          : homepagedata.sustainabilitySection.news2.title}
                      </p>
                      <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                        Chemical Today
                      </p>
                    </Link>
                    <Link
                      key={homepagedata.sustainabilitySection.news1.id}
                      to={`/news/Sustainability/${homepagedata.sustainabilitySection.news3.id}`}
                      className="post-card"
                      style={{ height: "380px" }}
                    >
                      <img
                        src={
                          homepagedata.sustainabilitySection.news3
                            .thumbnail_image_url
                        }
                        alt={homepagedata.sustainabilitySection.news1.title}
                        className="post-card-image"
                      />
                      <div className="img-text">
                        <p className="text">
                          {new Date(
                            homepagedata.sustainabilitySection.news3.published_date
                          ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                      <p className="overlay-text">
                        {homepagedata.sustainabilitySection.news3.title.length >
                        100
                          ? `${homepagedata.sustainabilitySection.news3.title.substring(
                              0,
                              100
                            )}...`
                          : homepagedata.sustainabilitySection.news3.title}
                      </p>
                      <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                        Chemical Today
                      </p>{" "}
                    </Link>
                    <Link
                      key={homepagedata.sustainabilitySection.news1.id}
                      to={`/news/Sustainability/${homepagedata.sustainabilitySection.news4.id}`}
                      className="post-card"
                      style={{ height: "380px" }}
                    >
                      <img
                        src={
                          homepagedata.sustainabilitySection.news4
                            .thumbnail_image_url
                        }
                        alt={homepagedata.sustainabilitySection.news1.title}
                        className="post-card-image"
                      />
                      <div className="img-text">
                        <p className="text">
                          {new Date(
                            homepagedata.sustainabilitySection.news4.published_date
                          ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                      <p className="overlay-text">
                        {homepagedata.sustainabilitySection.news4.title.length >
                        100
                          ? `${homepagedata.sustainabilitySection.news4.title.substring(
                              0,
                              100
                            )}...`
                          : homepagedata.sustainabilitySection.news4.title}
                      </p>
                      <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                        Chemical Today
                      </p>{" "}
                    </Link>
                    <Link
                      key={homepagedata.sustainabilitySection.news1.id}
                      to={`/news/Sustainability/${homepagedata.sustainabilitySection.news5.id}`}
                      className="post-card"
                      style={{ height: "380px" }}
                    >
                      <img
                        src={
                          homepagedata.sustainabilitySection.news5
                            .thumbnail_image_url
                        }
                        alt={homepagedata.sustainabilitySection.news1.title}
                        className="post-card-image"
                      />
                      <div className="img-text">
                        <p className="text">
                          {new Date(
                            homepagedata.sustainabilitySection.news5.published_date
                          ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                      <p className="overlay-text">
                        {homepagedata.sustainabilitySection.news5.title.length >
                        100
                          ? `${homepagedata.sustainabilitySection.news5.title.substring(
                              0,
                              100
                            )}...`
                          : homepagedata.sustainabilitySection.news5.title}
                      </p>
                      <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                        Chemical Today
                      </p>{" "}
                    </Link>
                  </div>
                </div>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    recordAdClick(
                      homepagedata.sustainabilitySection.horizontal_banner
                    );
                  }}
                >
                  <img
                    style={{
                      marginBottom: "22px",
                      marginTop: "-80px",
                    }}
                    className="horizantal-ads2"
                    src={
                      homepagedata.sustainabilitySection.horizontal_banner.image
                    }
                    alt="Advertize"
                  />
                </a>
                <div className="cover-post">
                  <div className="cover-post-heading">
                    <h3 className="cover-post-heading-text">Digitalization</h3>
                    <a href="Digitalization/1" className="viewMoreImg">
                      <img src={viewMore} />
                    </a>
                  </div>
                  {homepagedata &&
                    homepagedata.homeScreenTopSection && ( // Check if postComUtils and featured_post are defined
                      <div className="post-container-flex" style={{}}>
                        <div className="cover-post-items">
                          <Link
                            key={homepagedata.digitalizationSection.news1.id}
                            to={`/news/Digitalization/${homepagedata.digitalizationSection.news1.id}`}
                            className="post-card"
                            style={{ height: "300px", width: "45%" }}
                          >
                            <img
                              src={
                                homepagedata.digitalizationSection.news1
                                  .thumbnail_image_url
                              }
                              alt={
                                homepagedata.digitalizationSection.news1.title
                              }
                              className="post-card-image"
                            />
                            <div className="img-text">
                              <p className="text">
                                {new Date(
                                  homepagedata.digitalizationSection.news1.published_date
                                ).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                            <p className="overlay-text">
                              {homepagedata.digitalizationSection.news1.title
                                .length > 100
                                ? `${homepagedata.digitalizationSection.news1.title.substring(
                                    0,
                                    100
                                  )}...`
                                : homepagedata.digitalizationSection.news1
                                    .title}
                            </p>{" "}
                            <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                              Chemical Today
                            </p>{" "}
                          </Link>
                          <Link
                            key={homepagedata.digitalizationSection.news2.id}
                            to={`/news/Digitalization/${homepagedata.digitalizationSection.news2.id}`}
                            className="post-card"
                            style={{ height: "380px", width: "45%" }}
                          >
                            <img
                              src={
                                homepagedata.digitalizationSection.news2
                                  .thumbnail_image_url
                              }
                              alt={
                                homepagedata.digitalizationSection.news2.title
                              }
                              className="post-card-image"
                            />
                            <div className="img-text">
                              <p className="text">
                                {new Date(
                                  homepagedata.digitalizationSection.news2.published_date
                                ).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                            <p className="overlay-text">
                              {homepagedata.digitalizationSection.news2.title
                                .length > 100
                                ? `${homepagedata.digitalizationSection.news2.title.substring(
                                    0,
                                    100
                                  )}...`
                                : homepagedata.digitalizationSection.news2
                                    .title}
                            </p>{" "}
                            <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                              Chemical Today
                            </p>{" "}
                          </Link>
                          <Link
                            key={homepagedata.digitalizationSection.news3.id}
                            to={`/news/Digitalization/${homepagedata.digitalizationSection.news3.id}`}
                            className="post-card"
                            style={{ height: "380px", width: "45%" }}
                          >
                            <img
                              src={
                                homepagedata.digitalizationSection.news3
                                  .thumbnail_image_url
                              }
                              alt={
                                homepagedata.digitalizationSection.news3.title
                              }
                              className="post-card-image"
                            />
                            <div className="img-text">
                              <p className="text">
                                {new Date(
                                  homepagedata.digitalizationSection.news3.published_date
                                ).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                            <p className="overlay-text">
                              {homepagedata.digitalizationSection.news3.title
                                .length > 100
                                ? `${homepagedata.digitalizationSection.news3.title.substring(
                                    0,
                                    100
                                  )}...`
                                : homepagedata.digitalizationSection.news3
                                    .title}
                            </p>{" "}
                            <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                              Chemical Today
                            </p>{" "}
                          </Link>
                          <Link
                            key={homepagedata.digitalizationSection.news4.id}
                            to={`/news/Digitalization/${homepagedata.digitalizationSection.news4.id}`}
                            className="post-card"
                            style={{ height: "380px", width: "45%" }}
                          >
                            <img
                              src={
                                homepagedata.digitalizationSection.news4
                                  .thumbnail_image_url
                              }
                              alt={
                                homepagedata.digitalizationSection.news4.title
                              }
                              className="post-card-image"
                            />
                            <div className="img-text">
                              <p className="text">
                                {new Date(
                                  homepagedata.digitalizationSection.news4.published_date
                                ).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                            <p className="overlay-text">
                              {homepagedata.digitalizationSection.news4.title
                                .length > 100
                                ? `${homepagedata.digitalizationSection.news4.title.substring(
                                    0,
                                    100
                                  )}...`
                                : homepagedata.digitalizationSection.news4
                                    .title}
                            </p>
                            <p style={{ opacity: "0.7", marginTop: "-12px" }}>
                              Chemical Today
                            </p>{" "}
                          </Link>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            flexDirection: "column",
                          }}
                        >
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              recordAdClick(
                                homepagedata.digitalizationSection.advt1
                              );
                            }}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <img
                              style={{
                                height: "200px",
                                width: "100%",
                                marginBottom: "20px",
                              }}
                              src={
                                homepagedata.digitalizationSection.advt1.image
                              }
                            ></img>
                          </a>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              recordAdClick(
                                homepagedata.digitalizationSection.advt2
                              );
                            }}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            {" "}
                            <img
                              style={{
                                height: "200px",
                                width: "100%",
                                marginBottom: "20px",
                              }}
                              src={
                                homepagedata.digitalizationSection.advt2.image
                              }
                            ></img>
                          </a>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              recordAdClick(
                                homepagedata.digitalizationSection.advt3
                              );
                            }}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            {" "}
                            <img
                              style={{
                                height: "200px",
                                width: "100%",
                              }}
                              src={
                                homepagedata.digitalizationSection.advt3.image
                              }
                            ></img>
                          </a>
                        </div>
                      </div>
                    )}
                </div>
              </div>
            </div>
          )}
      </>
    );
  }
};

export default CoverPage;
