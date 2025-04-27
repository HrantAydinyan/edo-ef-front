import Image from "next/image";
import { FC } from "react";
import Link from "next/link";

import { IService } from "@/types";
import { SERVICE } from "@/constants/service";

import rightIcon from "../../../public/services/chevronRight.svg";

const imageBase = process.env.NEXT_PUBLIC_IMAGE_URL;

export const Element: FC<IService> = ({ title, description, filePath }) => {
  return (
    <div className="service_element">
      <div className="image_field">
        <Image
          src={`${imageBase}${filePath}`}
          width={72}
          height={76.6}
          alt="Service"
          crossOrigin="anonymous"
        />
      </div>
      <div className="service_info_field">
        <div className="service_info">
          <h4 className="element_title">{title}</h4>
          <p className="element_description">{description}</p>
        </div>
        <Link href="#" className="more_link">
          <div className="more_field">
            <p className="more_text">{SERVICE.more}</p>
            <Image src={rightIcon} width={16} height={16} alt="Right" />
          </div>
        </Link>
      </div>
    </div>
  );
};
