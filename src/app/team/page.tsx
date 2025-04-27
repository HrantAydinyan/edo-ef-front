import { fetchTeamMembers } from "@/actions";
import { TeamMembers } from "@/components";
import { TEAM } from "@/constants/team";

export default async function Team() {
  const teamMembers = await fetchTeamMembers();

  return (
    <div className="team_container">
      <div className="team_content">
        <div className="team_page_header">
          <h1 className="team_title">{TEAM.title}</h1>
          <p className="team_description">{TEAM.description}</p>
        </div>
        <TeamMembers {...teamMembers} />
      </div>
    </div>
  );
}
