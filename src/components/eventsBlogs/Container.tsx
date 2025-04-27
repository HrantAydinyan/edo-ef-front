import { FC } from "react";
import Link from "next/link";

import { IEvents } from "@/types";
import { BlogItem } from "./BlogItem";

interface IEventsBlogs {
  title: string;
  description: string;
  data: IEvents;
  path: string;
}

export const EventsBlogs: FC<IEventsBlogs> = ({
  title,
  description,
  data,
  path,
}) => {
  return (
    <div className="container">
      <div className="container_header">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </div>
      <div className="elements_grid">
        {data?.data?.map((item) => (
          <Link href={`/${path}/${item.id}`} key={item.id}>
            <BlogItem key={item.id} {...item} />
          </Link>
        ))}
      </div>
    </div>
  );
};
