// constants.js
export const BASE_URL = "http://13.234.122.211";
export const CoverPageHeaderConstants = {
  textInfo: [
    "Pearl Polyurethane, Covestro sign climate-neutral MDI supply deal AkzoNobel to expand water-based texture paints capacity in China ",
  ],
  navElements: [
    "Posts",
    "Sectors",
    "Insights",
    "Spotlight",
    "Product",
    "Events",
    "Equipment",
    "Sustainability",
    "Digitalization",
  ],
  readMoreText: "Optimizing Crop Performance: Agrochemicals and Fertilizers",
  readHere: "Read Here",
  downloadApp: "Advertise With Us",
  magazineSubscribe: "Magazine Subscription",
  chemicalTodayTV: "Chemical Today TV",
};

export const sampleTest =
  "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry.";

export const PostInsiderConstants = [
  {
    postType: "Industries",
    title:
      "We provide a web service on the example domain hosts to provide basic information on the purpose of the domain.",
    publishedCompany: "By Chemical Today",
    publishedDate: "19 December 2023",
    share: "Share",
    PostImgTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    postDesc:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export const PostInsiderConstants_1 = {
  postType: "Industries",
  title:
    "We provide a web service on the example domain hosts to provide basic information on the purpose of the domain.",
  publishedCompany: "By Chemical Today",
  publishedDate: "19 December 2023",
  share: "Share",
  PostImgTitle:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  postDesc:
    "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry.",
};

export const PostPageConstants = {
  title: "Featured Post",
};

export const FooterConstants = {
  subscribeText: "Subscribe to our Newsletter",
  subscribeInfo:
    "Stay updated with the latest chemical industry trends and innovations.",
  subscribe: "Subscribe",
  ourBrand: "Our Brands",
  chemicalToday: "Chemical Today",
  chemicalTodayTV: "Chemical Today TV",
  chemSquare: "Chem Square",
  quickLinks: "Quick Links",
  stocks: "Check your Stocks",
  becomeEliteMember: "Become an Elite Member",
  jobs: "Jobs",
  usefulLinks: "Useful Links",
  blogs: "Blogs",
  articles: "Articles",
  medicalKit: "Medical Kit",
  infoLinks: "Info Links",
  aboutUs: "About Us",
  contactUs: "Contact Us",
  termsAndCond: "Terms And Conditions",
  privacyPolicy: "Privacy Policy",
  copyright: "Copyright © 2024 Chemical Today",
};

// utils.js

const getIpAddress = async () => {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error("Error fetching IP address:", error);
    return null;
  }
};

export const recordAdClick = async (adDetails) => {
  const ipAddress = await getIpAddress();
  if (!ipAddress) {
    console.error("Could not fetch IP address");
    window.open(adDetails.redirect_url, "_blank");

    return;
  }

  try {
    const response = await fetch(
      "https://admin.chemicaltoday.in/news/count-advt-clicks",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          adDetails: adDetails,
          ipAddress: ipAddress,
        }),
      }
    );

    if (response.ok) {
      console.log("Ad click recorded successfully");
    } else {
      console.error("Failed to record ad click");
    }
  } catch (error) {
    console.error("Error recording ad click:", error);
  } finally {
    window.open(adDetails.redirect_url, "_blank");
  }
};
