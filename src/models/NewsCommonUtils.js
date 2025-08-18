import Advertisement from './Advertisement'; // Assuming the Advertisement class is defined in Advertisement.js

class NewsCommonUtils {
    constructor(id, newsType, horizontalBanner, advt1, advt2, advt3, advt4, advt5,l1,l2,l3,l4) {
        this.id = id;
        this.newsType = newsType;
        this.horizontalBanner = horizontalBanner ? new Advertisement(horizontalBanner.id, horizontalBanner.advt_type, horizontalBanner.name, horizontalBanner.organization_name, horizontalBanner.contact_number, horizontalBanner.subscription_start_date, horizontalBanner.subscription_end_date, horizontalBanner.image, horizontalBanner.description, horizontalBanner.redirect_url) : null;
        this.advt1 = advt1 ? new Advertisement(advt1.id, advt1.advt_type, advt1.name, advt1.organization_name, advt1.contact_number, advt1.subscription_start_date, advt1.subscription_end_date, advt1.image, advt1.description, advt1.redirect_url) : null;
        this.advt2 = advt2 ? new Advertisement(advt2.id, advt2.advt_type, advt2.name, advt2.organization_name, advt2.contact_number, advt2.subscription_start_date, advt2.subscription_end_date, advt2.image, advt2.description, advt2.redirect_url) : null;
        this.advt3 = advt3 ? new Advertisement(advt3.id, advt3.advt_type, advt3.name, advt3.organization_name, advt3.contact_number, advt3.subscription_start_date, advt3.subscription_end_date, advt3.image, advt3.description, advt3.redirect_url) : null;
        this.advt4 = advt4 ? new Advertisement(advt4.id, advt4.advt_type, advt4.name, advt4.organization_name, advt4.contact_number, advt4.subscription_start_date, advt4.subscription_end_date, advt4.image, advt4.description, advt4.redirect_url) : null;
        this.advt5 = advt5 ? new Advertisement(advt5.id, advt5.advt_type, advt5.name, advt5.organization_name, advt5.contact_number, advt5.subscription_start_date, advt5.subscription_end_date, advt5.image, advt5.description, advt5.redirect_url) : null;
        this.l1 = l1
        this.l2=l2
        this.l3=l3
        this.l4=l4
    }

    serialize() {
        return {
            id: this.id,
            newsType: this.newsType,
            horizontalBanner: this.horizontalBanner,
            advt1: this.advt1 ? this.advt1.serialize() : null,
            advt2: this.advt2 ? this.advt2.serialize() : null,
            advt3: this.advt3 ? this.advt3.serialize() : null,
            advt4: this.advt4 ? this.advt4.serialize() : null,
            advt5: this.advt5 ? this.advt5.serialize() : null
        };
    }

    static async fetchCommonUtilsByNewsType(newsType) {
        try {
            console.log(newsType)
            const response = await fetch(`https://admin.chemicaltoday.in/common_utils/common_utils/${newsType}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch Common Utils for news type ${newsType}`);
            }
            const data = await response.json();
            console.log("posps")
            console.log(data)
            // return true
            return new NewsCommonUtils(data.id, data.news_type, data.horizontal_banner, data.advt1, data.advt2, data.advt3, data.advt4, data.advt5 ,data.latest_updates1,data.latest_updates2,data.latest_updates3,data.latest_updates4);
        } catch (error) {
            console.error(`Error fetching Common Utils for news type ${newsType}:`, error);
            throw error;
        }
    }
}

export default NewsCommonUtils;
