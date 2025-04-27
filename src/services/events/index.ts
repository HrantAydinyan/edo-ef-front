import instance from "../baseRequest";

export const eventsApi = {
  getEvents: async () => await instance.get("/events"),
  getEventById: async (id: string) => await instance.get(`/events/${id}`),
};
