import Image from "next/image";
import { FC } from "react";

import { IEventData } from "@/types";

const imageBase = process.env.NEXT_PUBLIC_IMAGE_URL;

export const BlogItem: FC<IEventData> = ({
  filePath,
  title,
  label,
  status,
  blogger,
}) => {
  return (
    <div className="blog_item">
      <div className="blog_info">
        <div className="blog_image_field">
          <Image
            src={`${imageBase}${filePath}`}
            alt="Image"
            width={302}
            height={206}
            className="blog_image"
            crossOrigin="anonymous"
          />
        </div>
        <div className="blog_info_field">
          <div className="blog_info_text">
            <p className="blog_title">{status}</p>
            <p className="blog_label">{label}</p>
          </div>
          <div className="blog_info_description">
            <p className="description_text">{title}</p>
          </div>
        </div>
      </div>
      <div className="author_field">
        <div className="author_line"></div>
        <div className="author_info_container">
          <div className="author_info_content">
            <Image
              src={`${imageBase}${blogger.filePath}`}
              alt="Author"
              width={59}
              height={59}
              className="author_image"
              objectFit="cover"
              crossOrigin="anonymous"
            />
            <div className="author_info">
              <p className="author_name">{blogger?.fullName}</p>
              <p className="author_role">{blogger?.status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
