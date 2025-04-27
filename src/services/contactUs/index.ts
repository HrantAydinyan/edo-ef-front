import { IBookAppointments, IContactUs } from "@/types";
import instance from "../baseRequest";

export const contactUsApi = {
  sendContactUsMessage: async (data: IContactUs) =>
    await instance.post("/contact-us", data),
  bookAppointments: async (data: IBookAppointments) =>
    await instance.post("/contact-us/book-appointments", data),
};
