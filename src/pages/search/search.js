import React, { useState, useEffect } from "react";
import TempAds from "../../assets/home-page-assets/temp-adv.png";
import PostCard from "../../components/post/post_card/post_card.js";
import sideBarAds from "../../assets/home-page-assets/Post-assets/balnk_ads.svg";
import PostCommonUtils from "../../models/PostCommonUtils.js";
import { useRoutes, useParams } from "react-router-dom";
import Post from "../../models/Post.js";
import NewsItem from "../../models/New.js";
import NewsCard from "../../components/post/news_card/NewsCard.js";
import NewsCommonUtils from "../../models/NewsCommonUtils.js";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loadc, setloadc] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 100, behavior: "smooth" });

    const fetchData = async () => {
      try {
        setloadc(false);
        const news_list = await NewsItem.searchByTitle(searchTerm); // Use currentPage for fetching data

        setNews(news_list);
        setloadc(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchData2 = async () => {
      try {
        setloadc(false);
        const news_list = await NewsItem.fetchNewsByTypeAndPage("Posts", 1); // Use currentPage for fetching data

        setNews(news_list);
        setloadc(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (searchTerm == "") {
      fetchData2();
    } else {
      fetchData();
    }
  }, [searchTerm]); // Added newsType to dependencies

  return (
    <>
      <div
        style={{
          position: "relative",
          width: "300px",
          marginTop: "10px",
          marginLeft: "5%",
        }}
      >
        <FontAwesomeIcon
          icon={faSearch}
          style={{
            position: "absolute",
            left: "10px",
            top: "10px",
            color: "grey",
          }}
        />
        <input
          style={{
            padding: "8px 8px 8px 30px", // Increase left padding to make space for the icon
            width: "100%", // Use 100% to fill the container
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
          type="text"
          placeholder="Search news..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loadc == true && searchTerm === "" ? (
        <h1
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontFamily: "Helvitica",
          }}
        >
          Latest Posts
        </h1>
      ) : (
        <div></div>
      )}
      {news && (
        <div className="news-body-cont">
          <div className="search-news-cards">
            <NewsCard posts={news} isActive={true} widthInPer="31%" />
          </div>
        </div>
      )}
      {loadc == true && news.length == 0 ? (
        <h1
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontFamily: "Helvetica",
          }}
        >
          No results found
        </h1>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default SearchPage;
