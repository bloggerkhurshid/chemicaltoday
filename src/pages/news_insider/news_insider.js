import React, { useEffect, useState } from "react";
import "./news_insider.css";
import TempAds from "../../assets/home-page-assets/temp-adv.png";
import Insider from "../../components/post/post_insider/post_insider";
import blackImg from "../../assets/home-page-assets/Post-assets/blank_img.svg";
import insider from "../../utils/insider";
import Post from "../../models/Post";
import { useParams } from "react-router-dom";
import PostCommonUtils from "../../models/PostCommonUtils";
import NewsCommonUtils from "../../models/NewsCommonUtils";
import NewsItem from "../../models/New";
const sharePost = "#";
const moreInsiders = insider;
const viewMoreHeading = "Post";

const NewsInsider = () => {
  const { newsType, id } = useParams();

  const [postComUtils, setPostComUtils] = useState([]); // Initialize state with null
  const [newsComUtils, setNewsComUtils] = useState(null); // Initialize state with null
  const [news, setNews] = useState(null);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const news_common_utils =
          await NewsCommonUtils.fetchCommonUtilsByNewsType(newsType);
        const news = await NewsItem.fetchById(id);
        setNewsComUtils(news_common_utils);
        setNews(news);
        console.log(news);

        window.scrollTo(0, 0);
      } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
      }
      window.scrollTo(0, 0);
    };
    fetchData();
  }, [id, newsType]);

  if (!news || !newsComUtils) {
    return <div>Loading...</div>; // You can return any loading indicator here
  }
  return (
    <>
      <div className="news-insider-main">
        {newsComUtils &&
          news && ( // Check if postComUtils and featured_post are defined
            <a
              style={{
                marginBottom: "22px",
              }}
              href={newsComUtils.horizontalBanner.redirect_url}
              target="_blank"
            >
              <img
                className="horizantal-ads"
                src={newsComUtils.horizontalBanner.image}
                alt="Advertize"
              />
            </a>
          )}
        <Insider
          postTitle={news.title}
          postBy={news.published_by}
          postDate={news.published_date}
          sharePost={sharePost}
          postImgUrl={news.web_image_url}
          postImgCap={news.title}
          postDesc={news.content}
          image_caption={news.image_caption}
          country={news.country}
          latest1={newsComUtils.l1}
          latest2={newsComUtils.l2}
          latest3={newsComUtils.l3}
          latest4={newsComUtils.l4}
          ad1={newsComUtils.advt1}
          ad2={newsComUtils.advt2}
          ad3={newsComUtils.advt3}
          ad4={newsComUtils.advt4}
          linkpa
        />
      </div>
    </>
  );
};

export default NewsInsider;
