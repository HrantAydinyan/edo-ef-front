import instance from "../baseRequest";

export const toolsApi = {
  getAllTools: async () => await instance.get("/tools"),
  getToolById: async (id: string) => await instance.get(`/tools/${id}`),
};
