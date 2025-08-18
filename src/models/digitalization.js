// JavaScript code for digitalizationimport { BASE_URL } from "../utils/constants";
import { BASE_URL } from "../utils/constants";

class Digitalization {
    constructor(id,title, published_by, published_date, web_image_url, mob_image_url, thumbnail_image_url, heading_1, content, visibility, related_posts, created_at, created_by) {
        
        this.id = id;
        this.title = title;
        this.published_by = published_by;
        this.published_date = published_date;
        this.web_image_url = web_image_url;
        this.mob_image_url = mob_image_url;
        this.thumbnail_image_url = thumbnail_image_url;
        this.heading_1 = heading_1;
        this.content = content;
        this.visibility = visibility;
        this.related_posts = related_posts;
        this.created_at = created_at;
        this.created_by = created_by;
    }

    static async fetchPosts(id ) {
        try {
            const response = await fetch(`${BASE_URL}/digitalization/post/${id}`); // Include id in the URL
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            const data = await response.json();
            var post = data
            return new Digitalization(post.id ,post.title, post.published_by, post.published_date, post.web_image_url, post.mob_image_url, post.thumbnail_image_url, post.heading_1, post.content, post.visibility, post.related_posts, post.created_at, post.created_by);
        } catch (error) {
            console.error('Error fetching posts:', error);
            throw error;
        }
    }
    static async fetchallPosts( ) {
        try {
            const response = await fetch(`${BASE_URL}/digitalization/get-all`); // Include id in the URL
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            const data = await response.json();
            return data.map(post =>   new Digitalization(post.id ,post.title, post.published_by, post.published_date, post.web_image_url, post.mob_image_url, post.thumbnail_image_url, post.heading_1, post.content, post.visibility, post.related_posts, post.created_at, post.created_by))
        } catch (error) {
            console.error('Error fetching posts:', error);
            throw error;
        }
    }
    static async fetchallPostsbypage(page ) {
        try {
            const response = await fetch(`${BASE_URL}/digitalization/get-all/${page}`); // Include id in the URL
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            const data = await response.json();
            return data.map(post =>   new Digitalization(post.id ,post.title, post.published_by, post.published_date, post.web_image_url, post.mob_image_url, post.thumbnail_image_url, post.heading_1, post.content, post.visibility, post.related_posts, post.created_at, post.created_by))
        } catch (error) {
            console.error('Error fetching posts:', error);
            throw error;
        }
    }
}

export default Digitalization;
