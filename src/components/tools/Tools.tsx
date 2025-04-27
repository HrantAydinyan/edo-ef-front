import { ToolsElement } from "./ToolsElement";
import { TOOLS_LIST } from "@/constants/tools";

export const ToolsContainer = () => {
  return (
    <div className="tools_grid">
      {TOOLS_LIST.map((element) => (
        <ToolsElement key={element.id} {...element} />
      ))}
    </div>
  );
};
