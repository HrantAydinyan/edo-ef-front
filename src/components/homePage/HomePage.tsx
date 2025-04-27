"use client";

import Image from "next/image";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { EMAIL_REGEX, GLOBAL } from "@/constants/global";
import { IBookAppointments, IHomePage } from "@/types";

import homeBanner from "../../../public/homeBanner.webp";
import { sendBookAppointmentsMessage } from "@/actions";
import { LoaderClip } from "../spinnerLoader";

export const HomePage: FC<IHomePage> = ({ heroSection }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<IBookAppointments>();

  const onSubmit: SubmitHandler<IBookAppointments> = async (data) => {
    setLoading(true);
    await sendBookAppointmentsMessage(data)
      .then(() => reset())
      .finally(() => setLoading(false));
  };

  return (
    <div className="home_page_container">
      <div className="home_content_section">
        <div className="home_content_header">
          <h1 className="home_title">{heroSection?.title}</h1>
          <p className="home_description">{heroSection?.content}</p>
        </div>
        <form className="email_us_section" onSubmit={handleSubmit(onSubmit)}>
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
            placeholder="Enter your Email"
            className={`email_input ${errors.email ? "error_email_input" : ""}`}
          />
          <button className="book_appointment_btn">
            {loading ? <LoaderClip /> : GLOBAL.book_appointments}
          </button>
        </form>
      </div>
      <div className="home_banner">
        <Image
          src={homeBanner}
          alt="Banner"
          width={540}
          height={540}
          layout="responsive"
        />
      </div>
    </div>
  );
};
