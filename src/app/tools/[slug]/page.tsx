import { InvestmentCalculator, MortgageCalculator } from "@/components";
import { TOOLS_LIST } from "@/constants/tools";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ToolDetails({ params }: PageProps) {
  const resolvedParams = await params;
  const tool = TOOLS_LIST.find((tool) => tool?.slug === resolvedParams?.slug);

  return (
    <div className="tool_details">
      <div className="tool_details_header">
        <h1 className="tool_details_title">{tool?.title}</h1>
        <p className="tool_details_description">{tool?.description}</p>
      </div>
      {tool?.slug === "mortgage-calculator" ? (
        <MortgageCalculator />
      ) : (
        <InvestmentCalculator />
      )}
    </div>
  );
}
