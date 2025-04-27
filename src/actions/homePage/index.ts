import { homePageApi } from "@/services";

export const fetchHomePage = async () => {
  try {
    const heroSection = await homePageApi.getHeroSection();
    return heroSection.data;
  } catch (error) {
    return error;
  }
};
