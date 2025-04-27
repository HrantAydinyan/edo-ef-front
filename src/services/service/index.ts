import instance from "../baseRequest";

export const servicesApi = {
  getAllServices: async () => await instance.get("/services"),
  getServicesById: async (id: string) => await instance.get(`/services/${id}`),
};
