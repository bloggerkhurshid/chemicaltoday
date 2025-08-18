import { BASE_URL } from "../utils/constants";

class NewsItem {
    constructor(id, news_type, category, title, published_by, published_date, country, web_image_url, mob_image_url, thumbnail_image_url, image_caption, content, visibility, created_at, created_by) {
        this.id = id;
        this.news_type = news_type;
        this.category = category;
        this.title = title;
        this.published_by = published_by;
        this.published_date = published_date;
        this.country = country || 'India'; // Set default value to 'India' if country is undefined
        this.web_image_url = web_image_url;
        this.mob_image_url = mob_image_url;
        this.thumbnail_image_url = thumbnail_image_url;
        this.image_caption = image_caption;
        this.content = content;
        this.visibility = visibility;
        this.created_at = created_at;
        this.created_by = created_by;
    }

    static async fetchNewsByTypeAndPage(news_type, page) {
        try {
            const response = await fetch(`https://admin.chemicaltoday.in/news/${news_type}/page/${page}`);
            if (!response.ok) {
                throw new Error('Failed to fetch news');
            }
           
            const responseData = await response.json();
            const data = responseData.data
            console.log('country ames')
          
           const news_list = data.map(news => new NewsItem(news.id, news.news_type, news.category, news.title, news.published_by, news.published_date, news.country, news.web_image_url, news.mob_image_url, news.thumbnail_image_url, news.image_caption, news.content, news.visibility, news.created_at, news.created_by));
           console.log("up")
           console.log(news_list[0].country)
           return news_list;
        } catch (error) {
            console.error(`Error fetching news by type and page: ${error}`);
            throw error;
        }
    }

    static async fetchTotalPages(news_type) {
        try {
            const response = await fetch(`https://admin.chemicaltoday.in/news/${news_type}/total_pages`);
            if (!response.ok) {
                throw new Error('Failed to fetch total pages');
            }
            const data = await response.json();
            return data.total_pages; // Assuming the backend returns { total_pages: number }
        } catch (error) {
            console.error(`Error fetching total pages for news type: ${error}`);
            throw error;
        }
    }
    static async fetchById(newsId) {
        try {
            const response = await fetch(`https://admin.chemicaltoday.in/news/${newsId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch news by ID');
            }
            
            const newsData = await response.json();
            console.log("newssdat")
            console.log(newsData)
            return new NewsItem(newsData.id, newsData.news_type, newsData.category, newsData.title, newsData.published_by, newsData.published_date, newsData.country, newsData.web_image_url, newsData.mob_image_url, newsData.thumbnail_image_url, newsData.image_caption, newsData.content, newsData.visibility, newsData.created_at, newsData.created_by);
        } catch (error) {
            console.error(`Error fetching news by ID: ${error}`);
            throw error;
        }
    }



    static async searchByTitle(searchTerm) {
        try {
            const response = await fetch(`https://admin.chemicaltoday.in/news/search?q=${encodeURIComponent(searchTerm)}`);
            if (!response.ok) {
                console.log("res mo ok")
                throw new Error('Failed to search news by title');
            }

            console.log("Ds")
            console.log(response)
            const responseData = await response.json();
            console.log(responseData)

            const data = responseData.data;
            console.log(data)
            // Assuming the response structure is similar to the fetchNewsByTypeAndPage method
            return data.map(news => new NewsItem(news.id, news.news_type, news.category, news.title, news.published_by, news.published_date, news.country, news.web_image_url, news.mob_image_url, news.thumbnail_image_url, news.image_caption, news.content, news.visibility, news.created_at, news.created_by));
        } catch (error) {
            console.error(`Error searching news by title: ${error}`);
            throw error;
        }
    }
    
    static async fetchNewsByTypeAndPageCat(news_type, page,cat) {
        try {
            const response = await fetch(`https://admin.chemicaltoday.in/news/${news_type}/${cat}/page1/${page}`);
            if (!response.ok) {
                throw new Error('Failed to fetch news');
            }
           
            const responseData = await response.json();
            const data = responseData.data
          
            return data.map(news => new NewsItem(news.id, news.news_type, news.category, news.title, news.published_by, news.published_date, news.country, news.web_image_url, news.mob_image_url, news.thumbnail_image_url, news.image_caption, news.content, news.visibility, news.created_at, news.created_by));
        } catch (error) {
            console.error(`Error fetching news by type and page: ${error}`);
            throw error;
        }
    }

    static async fetchTotalPagesCat(news_type,cat) {
        try {
            const response = await fetch(`https://admin.chemicaltoday.in/news/${news_type}/${cat}/total_pages1`);
            if (!response.ok) {
                throw new Error('Failed to fetch total pages');
            }
            const data = await response.json();
            return data.total_pages; // Assuming the backend returns { total_pages: number }
        } catch (error) {
            console.error(`Error fetching total pages for news type: ${error}`);
            throw error;
        }
    }
}

export default NewsItem;
