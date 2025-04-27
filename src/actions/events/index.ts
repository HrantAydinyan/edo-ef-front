import { eventsApi } from "@/services";

export const fetchEvents = async () => {
  try {
    const events = await eventsApi.getEvents();
    return events?.data;
  } catch (error) {
    return error;
  }
};

export const fetchEventById = async (id: string) => {
  try {
    const event = await eventsApi.getEventById(id);
    return event?.data;
  } catch (error) {
    return error;
  }
};
