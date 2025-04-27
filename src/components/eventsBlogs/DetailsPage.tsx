import Image from "next/image";
import { FC } from "react";
import dompurify from "isomorphic-dompurify";
import { formatDate } from "date-fns";

import { IEventData } from "@/types";

const imageBase = process.env.NEXT_PUBLIC_IMAGE_URL;

export const BlogDetails: FC<IEventData> = ({
  blogger,
  createdAt,
  label,
  status,
  filePath,
  description,
}) => {
  const formattedDate = formatDate(new Date(createdAt), "MMMM dd, yyyy");
  const sanitizer = dompurify.sanitize;

  return (
    <div className="blog_details_page">
      <div className="details_label">
        <div className="label_field">{label}</div>
        <div className="label_field">{status}</div>
      </div>
      <div className="blog_details">
        <div className="blog_author">
          <div className="author_image">
            <Image
              src={`${imageBase}${blogger.filePath}`}
              alt={blogger.fullName}
              width={40}
              height={40}
              crossOrigin="anonymous"
              className="author_image"
            />
          </div>
          <div className="author_name">{`By: ${blogger.fullName}`}</div>
        </div>
        <div className="created_date">{formattedDate}</div>
      </div>
      <div className="blog_details_image">
        <Image
          src={`${imageBase}${filePath}`}
          alt={label}
          width={1440}
          height={600}
          crossOrigin="anonymous"
          className="responsive_image"
        />
      </div>
      <div
        className="blog_description_field"
        dangerouslySetInnerHTML={{ __html: sanitizer(description) }}
      ></div>
    </div>
  );
};
