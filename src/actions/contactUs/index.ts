import { contactUsApi } from "@/services";
import { IBookAppointments, IContactUs } from "@/types";

export const sendContactUsMessage = async (data: IContactUs) => {
  try {
    const response = await contactUsApi.sendContactUsMessage(data);
    return response;
  } catch (error) {
    return error;
  }
};

export const sendBookAppointmentsMessage = async (data: IBookAppointments) => {
  try {
    const response = await contactUsApi.bookAppointments(data);
    return response;
  } catch (error) {
    return error;
  }
};
