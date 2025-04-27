import { IMeta } from "./home";

export interface IService {
  createdAt: string;
  updatedAt: string;
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  filePath: string;
  filePathType: string;
}

export interface IServicesResponse {
  data: IService[];
  meta: IMeta;
}
