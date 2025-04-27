import { FC } from "react";
import Image from "next/image";

import { ITeamMember } from "@/types";

const imageBase = process.env.NEXT_PUBLIC_IMAGE_URL;

export const TeamMember: FC<ITeamMember> = ({
  fullName,
  position,
  filePath,
}) => {
  return (
    <div className="team_member">
      <Image
        src={`${imageBase}${filePath}`}
        width={153}
        height={153}
        alt="Member"
        crossOrigin="anonymous"
      />
      <div className="member_info">
        <p className="member_name">{fullName}</p>
        <p className="member_role">{position}</p>
      </div>
    </div>
  );
};
