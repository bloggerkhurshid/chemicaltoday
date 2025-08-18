class Advertisement {
  constructor(
    id,
    advt_type,
    name,
    organization_name,
    contact_number,
    subscription_start_date,
    subscription_end_date,
    image,
    description,
    redirect_url
  ) {
    this.id = id;
    this.advt_type = advt_type;
    this.name = name;
    this.organization_name = organization_name;
    this.contact_number = contact_number;
    this.subscription_start_date = subscription_start_date;
    this.subscription_end_date = subscription_end_date;
    this.image = image;
    this.description = description;
    this.redirect_url = redirect_url;
  }

  serialize() {
    return {
      advt_type: this.advt_type,
      name: this.name,
      organization_name: this.organization_name,
      contact_number: this.contact_number,
      subscription_start_date: this.subscription_start_date,
      subscription_end_date: this.subscription_end_date,
      image: this.image,
      description: this.description,
      redirect_url: this.redirect_url,
    };
  }

  static async fetchAdvertisements() {
    try {
      const response = await fetch("/api/advertisements");
      if (!response.ok) {
        throw new Error("Failed to fetch advertisements");
      }
      const data = await response.json();
      return data.map(
        (ad) =>
          new Advertisement(
            ad.id,
            ad.advt_type,
            ad.name,
            ad.organization_name,
            ad.contact_number,
            ad.subscription_start_date,
            ad.subscription_end_date,
            ad.image,
            ad.description,
            ad.redirect_url
          )
      );
    } catch (error) {
      console.error("Error fetching advertisements:", error);
      throw error;
    }
  }
}

export default Advertisement;
