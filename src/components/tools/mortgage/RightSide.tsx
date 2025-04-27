import { FieldValues } from "react-hook-form";
import {
  InterestVsPrincipleChart,
  MortgageTable,
  TotalPurchase,
  YourMortgage,
} from "./components";
import { IRightSideMain } from "@/types/tools";

export const RightSide = <T extends FieldValues>({
  watch,
  selectedOption,
  totalYears,
  remainingMonths,
  tableData,
  selectedTab,
  setSelectedTab,
}: IRightSideMain<T>) => {
  const formattedNumber = (num: number) => num.toLocaleString("de-DE");

  return (
    <div className="mortgage_calculator_right_side">
      <div className="mortgage_description">
        <p className="description_text">
          With a mortgage amount of{" "}
          <span className="bold_text">{`€${formattedNumber(
            Number(watch().purchasePrice) - Number(watch().downPayment)
          )}`}</span>
          , an interest rate of{" "}
          <span className="bold_text">{`${watch().interestRate}%`}</span> and a
          repayment of{" "}
          <span className="bold_text">{`${watch().capitalRepayment}%`}</span>{" "}
          per year, your monthly payment will be{" "}
          <span className="bold_text">€1,997</span> and you are mortgage free in{" "}
          <span className="bold_text">27 years and 6 months.</span>
        </p>
      </div>
      <YourMortgage<T>
        watch={watch}
        selectedOption={selectedOption}
        totalYears={totalYears}
        remainingMonths={remainingMonths}
      />
      <TotalPurchase<T> watch={watch} selectedOption={selectedOption} />
      {tableData && tableData.length > 0 && (
        <MortgageTable
          data={tableData}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      )}
      <InterestVsPrincipleChart data={tableData} />
    </div>
  );
};
