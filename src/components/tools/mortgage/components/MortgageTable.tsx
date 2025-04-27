import { FC } from "react";

import { IMortgageTable } from "@/types/tools";

export const MortgageTable: FC<IMortgageTable> = ({
  data,
  setSelectedTab,
  selectedTab,
}) => {
  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <div className="total_purchase">
      <div className="total_purchase_title mortgage_table_title">
        <h3 className="total_purchase_title_text">Payment plan</h3>
        <div className="table_tabs">
          <button
            className={`tab_button ${
              selectedTab === "yearly" ? "active_tab" : ""
            }`}
            onClick={() => handleTabChange("yearly")}
            type="button"
          >
            Yearly
          </button>
          <button
            className={`tab_button ${
              selectedTab === "monthly" ? "active_tab" : ""
            }`}
            onClick={() => handleTabChange("monthly")}
            type="button"
          >
            Monthly
          </button>
        </div>
      </div>
      <div className="invest_table">
        <table cellPadding="1" cellSpacing="1" className="table" bgcolor="#fff">
          <thead>
            <tr className="header_row">
              <th className="header_element">Year</th>
              <th className="header_element">Payment</th>
              <th className="header_element">Interest</th>
              <th className="header_element">Principle</th>
              <th className="header_element">Remaining debt</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((element, index) => (
              <tr key={index} className="table_column">
                <td className="table_element">{element.year}</td>
                <td className="table_element">€{element.payment}</td>
                <td className="table_element">€{element.interest}</td>
                <td className="table_element">€{element.principle}</td>
                <td className="table_element">
                  €{element.remainingLoanBalance}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
