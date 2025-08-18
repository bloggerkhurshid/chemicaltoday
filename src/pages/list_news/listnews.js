import React, { useState, useEffect } from "react";
import "./listnews.css";
import TempAds from "../../assets/home-page-assets/temp-adv.png";
import PostCard from "../../components/post/post_card/post_card.js";
import sideBarAds from "../../assets/home-page-assets/Post-assets/balnk_ads.svg";
import PostCommonUtils from "../../models/PostCommonUtils.js";
import { useRoutes, useParams } from "react-router-dom";
import Post from "../../models/Post.js";
import NewsItem from "../../models/New.js";
import NewsCard from "../../components/post/news_card/NewsCard.js";
import NewsCommonUtils from "../../models/NewsCommonUtils.js";
import { TbToggleLeft } from "react-icons/tb";
import { recordAdClick } from "../../utils/constants.js";

const ListNews = () => {
  const { newsType, pageNo } = useParams(); // Extract newsType and pageNo from URL parameters

  const [news, setNews] = useState([]);
  const [newsComUtils, setNewsComUtils] = useState(); // Initialize state with null
  const [totalpages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(parseInt(pageNo) || 1); // Initialize with pageNo or the first page
  const [screenWidth, setScreenWidth] = useState(window.innerWidth); // Track screen width

  useEffect(() => {
    console.log("yes changed");
    setCurrentPage(1);
  }, [newsType]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const news_list = await NewsItem.fetchNewsByTypeAndPage(
          newsType,
          currentPage
        ); // Use currentPage for fetching data
        const news_common_utils =
          await NewsCommonUtils.fetchCommonUtilsByNewsType(newsType);
        const total_pages = await NewsItem.fetchTotalPages(newsType);
        console.log("deldel");
        console.log(news_list);
        setNews(news_list);
        setNewsComUtils(news_common_utils);
        setTotalPages(total_pages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage, totalpages, newsType]); // Added newsType to dependencies

  useEffect(() => {
    window.scrollTo({ top: 100, behavior: "smooth" });
  }, [currentPage]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderPagination = () => {
    let pagesToShow = [];

    if (screenWidth <= 480) {
      // For small screens, show first, current, and last pages
      if (currentPage > 1) {
        pagesToShow.push(1);
      }
      if (currentPage > 2) {
        pagesToShow.push("...");
      }
      pagesToShow.push(currentPage);
      if (currentPage < totalpages - 1) {
        pagesToShow.push("...");
      }
      if (currentPage < totalpages) {
        pagesToShow.push(totalpages);
      }
    } else {
      if (totalpages < 7) {
        for (let i = 1; i <= totalpages; i++) {
          pagesToShow.push(i);
        }
      } else {
        for (let i = 1; i <= 3; i++) {
          pagesToShow.push(i);
        }
        pagesToShow.push("...");
        if (currentPage > 3 && currentPage < totalpages - 2) {
          pagesToShow.push(currentPage);
          pagesToShow.push("...");
        }
        for (let i = totalpages - 2; i <= totalpages; i++) {
          pagesToShow.push(i);
        }
      }
    }

    return (
      <div className="pagination-container">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
        >
          &laquo;
        </button>
        {pagesToShow.map((number, index) =>
          number === "..." ? (
            <span key={`gap-${index}`}>...</span>
          ) : (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={currentPage === number ? "active" : ""}
            >
              {number}
            </button>
          )
        )}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(totalpages, prev + 1))
          }
          disabled={currentPage === totalpages}
        >
          &raquo;
        </button>
      </div>
    );
  };

  return (
    <>
      {newsComUtils && newsComUtils.horizontalBanner && news && (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            recordAdClick(newsComUtils.horizontalBanner);
          }}
        >
          <img
            className="news-horizantal-ads"
            src={newsComUtils.horizontalBanner.image}
            alt="Advertize"
          />
        </a>
      )}
      {newsComUtils && newsComUtils.horizontalBanner.image && news && (
        <div className="news-body-cont">
          <div className="news-cards">
            <NewsCard
              posts={news}
              isActive={true}
              link_page={newsType}
              widthInPer="48%"
            />
          </div>
          <div className="news-ads-cont">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                recordAdClick(newsComUtils.advt1);
              }}
            >
              <img
                src={newsComUtils.advt1.image}
                alt="Side bar ad"
                width="100%"
              />
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                recordAdClick(newsComUtils.advt2);
              }}
            >
              <img
                src={newsComUtils.advt2.image}
                alt="Side bar ad"
                width="100%"
              />
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                recordAdClick(newsComUtils.advt3);
              }}
            >
              <img
                src={newsComUtils.advt3.image}
                alt="Side bar ad"
                width="100%"
              />
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                recordAdClick(newsComUtils.advt4);
              }}
            >
              <img
                src={newsComUtils.advt4.image}
                alt="Side bar ad"
                width="100%"
              />
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                recordAdClick(newsComUtils.advt5);
              }}
            >
              <img
                src={newsComUtils.advt5.image}
                alt="Side bar ad"
                width="100%"
              />
            </a>
          </div>
        </div>
      )}
      {renderPagination()}
    </>
  );
};

export default ListNews;
