import React, { useState, useEffect } from "react";
import "../list_news/listnews.css";
import TempAds from "../../assets/home-page-assets/temp-adv.png";
import PostCard from "../../components/post/post_card/post_card.js";
import sideBarAds from "../../assets/home-page-assets/Post-assets/balnk_ads.svg";
import PostCommonUtils from "../../models/PostCommonUtils.js";
import { useRoutes, useParams } from "react-router-dom";
import Post from "../../models/Post.js";
import NewsItem from "../../models/New.js";
import NewsCard from "../../components/post/news_card/NewsCard.js";
import NewsCommonUtils from "../../models/NewsCommonUtils.js";
import { recordAdClick } from "../../utils/constants.js";
const ListCatNews = () => {
  const { newsType, pageNo, cat } = useParams(); // Extract newsType and pageNo from URL parameters

  const [news, setNews] = useState([]);
  const [newsComUtils, setNewsComUtils] = useState(); // Initialize state with null
  const [totalpages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(parseInt(pageNo) || 1); // Initialize with pageNo or the first page

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("fufufuuf");
        const news_list = await NewsItem.fetchNewsByTypeAndPageCat(
          newsType,
          currentPage,
          cat
        ); // Use currentPage for fetching data
        const news_common_utils =
          await NewsCommonUtils.fetchCommonUtilsByNewsType(newsType);
        const total_pages = await NewsItem.fetchTotalPagesCat(newsType, cat);
        console.log("deldel");
        console.log(news_common_utils);
        setNews(news_list);
        setNewsComUtils(news_common_utils);
        setTotalPages(total_pages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [currentPage, totalpages, newsType, cat]); // Added newsType to dependencies
  useEffect(() => {
    window.scrollTo({ top: 100, behavior: "smooth" });
  }, [currentPage]);
  const renderPagination = () => {
    let pagesToShow = [];

    // Calculate the start page to ensure we have up to three pages on the left of the current page
    let startPage = Math.max(1, currentPage - 2);
    for (let i = startPage; i < currentPage; i++) {
      pagesToShow.push(i);
    }

    // Add the current page
    pagesToShow.push(currentPage);

    // Determine if we need to show the gap indicator ("...") and the last two pages
    if (currentPage < totalpages - 3) {
      pagesToShow.push("..."); // Gap indicator
    } else if (currentPage === totalpages - 3) {
      // Special case to avoid "..." when current page is close to end
      pagesToShow.push(currentPage + 1);
    }

    // Ensure the last two pages are always shown, unless they're already included
    if (currentPage < totalpages - 1) {
      if (!pagesToShow.includes(totalpages - 1)) {
        pagesToShow.push(totalpages - 1);
      }
    }
    if (!pagesToShow.includes(totalpages)) {
      pagesToShow.push(totalpages);
    }

    // Render the pagination buttons
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
          {" "}
          <img
            className="news-horizantal-ads"
            src={newsComUtils.horizontalBanner.image}
            alt="Advertize"
          />
        </a>
      )}

      {newsComUtils &&
        newsComUtils.horizontalBanner.image &&
        news &&
        news.length != 0 && (
          <div className="news-body-cont">
            <div className="news-cards">
              <NewsCard posts={news} isActive={true} link_page={newsType} />
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
                  width="400"
                  height="200"
                />
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  recordAdClick(newsComUtils.advt2);
                }}
              >
                {" "}
                <img
                  src={newsComUtils.advt2.image}
                  alt="Side bar ad"
                  width="400"
                  height="200"
                />
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  recordAdClick(newsComUtils.advt3);
                }}
              >
                {" "}
                <img
                  src={newsComUtils.advt3.image}
                  alt="Side bar ad"
                  width="400"
                  height="200"
                />
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  recordAdClick(newsComUtils.advt4);
                }}
              >
                {" "}
                <img
                  src={newsComUtils.advt4.image}
                  alt="Side bar ad"
                  width="400"
                  height="200"
                />
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  recordAdClick(newsComUtils.advt5);
                }}
              >
                {" "}
                <img
                  src={newsComUtils.advt5.image}
                  alt="Side bar ad"
                  width="400"
                  height="200"
                />
              </a>
            </div>
          </div>
        )}

      {news.length === 0 && (
        <div className="news-body-cont222">
          <div className="news-cards222">
            <div className="coming-soon-container">
              <h1>Coming Soon</h1>
              <h2>Stay tuned for updates in this category.</h2>
              {/* Optionally, you can include an image as well */}
              {/* <img src="path_to_coming_soon_image.jpg" alt="Coming Soon" /> */}
            </div>
          </div>
        </div>
      )}

      {news.length > 0 && renderPagination()}
    </>
  );
};

export default ListCatNews;
