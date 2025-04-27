import instance from "../baseRequest";

export const policiesApi = {
  getPrivacyPolicy: async () => await instance.get("/privacy-policy"),
  getImprint: async () => await instance.get("/imprint"),
};
