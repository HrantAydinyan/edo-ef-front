import { fetchTools } from "@/actions";
import { ToolsContainer } from "@/components";
import { TOOLS } from "@/constants/tools";

export default async function Tools() {
  const tools = await fetchTools();

  return (
    <div className="tools_container">
      <div className="container">
        <div className="container_header">
          <h1 className="title">{TOOLS.title}</h1>
        </div>
        <ToolsContainer {...tools} />
      </div>
    </div>
  );
}
