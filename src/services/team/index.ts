import instance from "../baseRequest";

export const teamApi = {
  getTeamMembers: async () => await instance.get("/team"),
};
