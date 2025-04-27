"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { CONTACT_US } from "@/constants/contactUs";
import { EMAIL_REGEX } from "@/constants/global";
import { sendContactUsMessage } from "@/actions";
import { IContactUs } from "@/types";
import { useState } from "react";
import { LoaderClip } from "../spinnerLoader";

export const ContactUsForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IContactUs>();

  const onSubmit: SubmitHandler<IContactUs> = async (data) => {
    setLoading(true);
    await sendContactUsMessage(data).finally(() => setLoading(false));
  };

  return (
    <div className="contact_us_right_side">
      <div className="right_side_title">{CONTACT_US.send_us_message}</div>
      <form onSubmit={handleSubmit(onSubmit)} className="contact_us_form">
        <div className="form_inputs_container">
          <div className="input_field">
            <label htmlFor="name" className="input_label">
              {CONTACT_US.name}
            </label>
            <input
              {...register("name", {
                required: "Required",
                onChange: (e) => {
                  if (e.target.value !== " ") {
                    setValue("name", e.target.value);
                  }
                },
              })}
              id="name"
              className={`input ${errors.name ? "error_input" : ""}`}
            />
          </div>
          <div className="input_field">
            <label htmlFor="email" className="input_label">
              {CONTACT_US.email}
            </label>
            <input
              {...register("email", {
                required: "Required",
                pattern: { value: EMAIL_REGEX, message: "Not Valid Email" },
                onChange: (e) => {
                  if (e.target.value !== " ") {
                    setValue("email", e.target.value);
                  }
                },
              })}
              id="email"
              className={`input ${errors.email ? "error_input" : ""}`}
            />
          </div>
          <div className="input_field">
            <label htmlFor="message" className="input_label">
              {CONTACT_US.message}
            </label>
            <textarea
              {...register("message", {
                required: "Required",
                onChange: (e) => {
                  if (e.target.value !== " ") {
                    setValue("message", e.target.value);
                  }
                },
              })}
              id="message"
              className={`input textarea ${
                errors.message ? "error_input" : ""
              }`}
            />
          </div>
        </div>
        <button className="send_button">
          {loading ? <LoaderClip /> : CONTACT_US.send_message}
        </button>
      </form>
    </div>
  );
};
