import { teamApi } from "@/services";

export const fetchTeamMembers = async () => {
  try {
    const { data } = await teamApi.getTeamMembers();
    return data;
  } catch (error) {
    return error;
  }
};
