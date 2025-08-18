import Advertisement from './Advertisement';
import Post from './randd';
import { BASE_URL } from '../utils/constants';
class RandDCommonUtils {
    constructor(id,horizontal_banner,featured_post, featured_advt1, featured_advt2, featured_advt3, featured_advt4, latest_updates1, latest_updates2, latest_updates3, latest_updates4, insider_advt1, insider_advt2, insider_advt3, insider_advt4) {
        
        this.id  =id;
        this.horizontal_banner = horizontal_banner
        this.featured_post = featured_post;
        this.featured_advt1 = featured_advt1;
        this.featured_advt2 = featured_advt2;
        this.featured_advt3 = featured_advt3;
        this.featured_advt4 = featured_advt4;
        this.latest_updates1 = latest_updates1;
        this.latest_updates2 = latest_updates2;
        this.latest_updates3 = latest_updates3;
        this.latest_updates4 = latest_updates4;
        this.insider_advt1 = insider_advt1;
        this.insider_advt2 = insider_advt2;
        this.insider_advt3 = insider_advt3;
        this.insider_advt4 = insider_advt4;
    }

    static async fetchPostCommonUtils() {
        try {
            const response = await fetch(`${BASE_URL}/randd/post_common_utils`);
            // console.log("sdfdsfs")
            console.log(response)
    
            if (!response.ok) {
                throw new Error('Failed to fetch PostCommonUtils');
            }
            const data = await response.json();
            var fp_posts = data.featured_post.map(post => new Post(post.id ,post.title, post.published_by, post.published_date, post.web_image_url, post.mob_image_url, post.thumbnail_image_url, post.heading_1, post.content, post.visibility, post.related_posts, post.created_at, post.created_by)) 
           var ad = data.featured_advt1
           var f_ad1 = new  Advertisement(ad.id ,ad.advt_type, ad.name, ad.organization_name, ad.contact_number, ad.subscription_start_date, ad.subscription_end_date, ad.image, ad.description, ad.redirect_url);
        ad = data.featured_advt2
        var f_ad2 = new  Advertisement(ad.id ,ad.advt_type, ad.name, ad.organization_name, ad.contact_number, ad.subscription_start_date, ad.subscription_end_date, ad.image, ad.description, ad.redirect_url);
        ad = data.featured_advt3
        var f_ad3 = new  Advertisement(ad.id ,ad.advt_type, ad.name, ad.organization_name, ad.contact_number, ad.subscription_start_date, ad.subscription_end_date, ad.image, ad.description, ad.redirect_url);
        ad = data.featured_advt4
        var f_ad4 = new  Advertisement(ad.id ,ad.advt_type, ad.name, ad.organization_name, ad.contact_number, ad.subscription_start_date, ad.subscription_end_date, ad.image, ad.description, ad.redirect_url);
        ad = data.insider_advt1
        var i_ad1 = new  Advertisement(ad.id ,ad.advt_type, ad.name, ad.organization_name, ad.contact_number, ad.subscription_start_date, ad.subscription_end_date, ad.image, ad.description, ad.redirect_url);
        ad = data.insider_advt2
        var i_ad2 = new  Advertisement(ad.id ,ad.advt_type, ad.name, ad.organization_name, ad.contact_number, ad.subscription_start_date, ad.subscription_end_date, ad.image, ad.description, ad.redirect_url);
        ad = data.insider_advt3
        var i_ad3 = new  Advertisement(ad.id ,ad.advt_type, ad.name, ad.organization_name, ad.contact_number, ad.subscription_start_date, ad.subscription_end_date, ad.image, ad.description, ad.redirect_url);
        ad = data.insider_advt4
        var i_ad4 = new  Advertisement(ad.id ,ad.advt_type, ad.name, ad.organization_name, ad.contact_number, ad.subscription_start_date, ad.subscription_end_date, ad.image, ad.description, ad.redirect_url);
        ad = data.horizontal_banner
        var h_b = new  Advertisement(ad.id ,ad.advt_type, ad.name, ad.organization_name, ad.contact_number, ad.subscription_start_date, ad.subscription_end_date, ad.image, ad.description, ad.redirect_url);
console.log("hb")
console.log(h_b)
        var post_common_utils = new RandDCommonUtils( data.id,h_b,fp_posts,f_ad1,f_ad2,f_ad3,f_ad4,data.latest_updates1,data.latest_updates2,data.latest_updates3,data.latest_updates4,i_ad1,i_ad2,i_ad3,i_ad4)
             console.log(post_common_utils)
             return post_common_utils

        } catch (error) {
            console.error('Error fetching PostCommonUtils:', error);
            throw error;
        }
    }
}

export default RandDCommonUtils;
