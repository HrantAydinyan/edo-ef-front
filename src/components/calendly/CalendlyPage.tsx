"use client";

import { InlineWidget } from "react-calendly";

export const CalendlyPage = () => {
  return (
    <div className="calendly_page">
      <h1 className="calendly_page_title">
        Please Choose the time from calendar
      </h1>
      <InlineWidget url="https://calendly.com/aydinyantigran3/30min" />
    </div>
  );
};
