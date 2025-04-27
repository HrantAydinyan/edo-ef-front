import { servicesApi } from "@/services";

export const fetchServices = async () => {
  try {
    const { data } = await servicesApi.getAllServices();
    return data;
  } catch (error) {
    return error;
  }
};
