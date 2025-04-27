import { FC } from "react";

import { ITeamMembersResponse } from "@/types";
import { TeamMember } from "./TeamMember";

export const TeamMembers: FC<ITeamMembersResponse> = ({ data }) => {
  return (
    <div className="team_members_container">
      {data?.map((member) => (
        <TeamMember key={member.id} {...member} />
      ))}
    </div>
  );
};
