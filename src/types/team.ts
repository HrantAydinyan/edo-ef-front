import { IMeta } from "./home";

export interface ITeamMember {
  id: number;
  createdAt: string;
  updatedAt: string;
  fullName: string;
  position: string;
  filePath: string;
  filePathType: string;
}

export interface ITeamMembersResponse {
  data: ITeamMember[];
  meta: IMeta;
}
