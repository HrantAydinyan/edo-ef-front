import { FC } from "react";

import { IServicesResponse } from "@/types";
import { Element } from "./Element";

interface IEventsBlogs {
  title: string;
  description: string;
  data: IServicesResponse;
}

export const ServicesContainer: FC<IEventsBlogs> = ({
  title,
  description,
  data,
}) => {
  return (
    <div className="container">
      <div className="container_header">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </div>
      <div className="elements_grid">
        {data?.data?.map((item) => (
          <Element {...item} key={item?.id} />
        ))}
      </div>
    </div>
  );
};
