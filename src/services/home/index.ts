import instance from "../baseRequest";

export const homePageApi = {
  getHeroSection: async () => await instance.get("/hero-section"),
};
