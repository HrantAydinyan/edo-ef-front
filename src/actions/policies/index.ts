import { policiesApi } from "@/services";

export const getPrivacyPolicy = async () => {
  try {
    const { data } = await policiesApi.getPrivacyPolicy();
    return data;
  } catch (error) {
    return error;
  }
};

export const getImprint = async () => {
  try {
    const { data } = await policiesApi.getImprint();
    return data;
  } catch (error) {
    return error;
  }
};
