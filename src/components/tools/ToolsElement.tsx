import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { ITools } from "@/types/tools";

export const ToolsElement: FC<ITools> = ({
  title,
  shortDescription,
  icon,
  slug,
}) => {
  return (
    <Link href={`/tools/${slug}`}>
      <div className="tool_element">
        <div className="image_field">
          <Image
            src={icon}
            width={80}
            height={80}
            alt="Tool"
            crossOrigin="anonymous"
          />
        </div>
        <div className="tool_info">
          <h4 className="tool_title">{title}</h4>
          <p className="tool_description">{shortDescription}</p>
        </div>
      </div>
    </Link>
  );
};
