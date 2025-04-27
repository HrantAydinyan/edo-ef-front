import { StaticImageData } from "next/image";

export interface IBlog {
  id: number;
  image: StaticImageData;
  title: string;
  label: string;
  description: string;
  author: string;
  authorRole: string;
  authorImage: StaticImageData;
}
