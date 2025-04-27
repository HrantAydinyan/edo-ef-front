import { toolsApi } from "@/services";

export const fetchTools = async () => {
  try {
    const { data } = await toolsApi.getAllTools();
    return data;
  } catch (error) {
    return error;
  }
};
