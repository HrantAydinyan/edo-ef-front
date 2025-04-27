import { IBlogger } from "./bloggers";
import { IMeta } from "./home";

export interface IEventData {
  createdAt: string;
  updatedAt: string;
  id: number;
  title: string;
  label: string;
  status: string;
  description: string;
  filePath: string;
  filePathType: string;
  blogger: IBlogger;
}

export interface IEvents {
  data: IEventData[];
  meta: IMeta;
}
