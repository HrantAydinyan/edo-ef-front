"use client";

import { calculateEAR, getMonthlyPayment } from "@/helpers";
import { IRightSide } from "@/types/tools";
import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";

export const YourMortgage = <T extends FieldValues>({
  watch,
  totalYears,
  remainingMonths,
}: IRightSide<T>) => {
  const [calculatedEAR, setCalculatedEAR] = useState<string>("");
  const [monthlyPayment, setMonthlyPayment] = useState<string>("");

  useEffect(() => {
    setCalculatedEAR(
      calculateEAR({ nominalRate: Number(watch().interestRate) })
    );
  }, [watch]);

  useEffect(() => {
    if (calculatedEAR)
      setMonthlyPayment(
        getMonthlyPayment({
          purchasePrice:
            Number(watch().purchasePrice) - Number(watch().downPayment),
          calculatedEAR: Number(calculatedEAR),
          capitalRepayment: Number(watch().capitalRepayment),
        }).toFixed(2)
      );
  }, [watch, calculatedEAR]);

  return (
    <div className="total_purchase">
      <div className="total_purchase_title">
        <h3 className="total_purchase_title_text">Your mortgage</h3>
      </div>
      <div className="total_purchase_details">
        <div className="mortgage_calculator_input">
          <label htmlFor="purchasePrice" className="purchase_price">
            Purchase Price
          </label>
          <input
            value={`€${
              Number(watch().purchasePrice) - Number(watch().downPayment)
            }`}
            type="text"
            id="purchasePrice"
            placeholder="Purchase Price"
            className={`input_element_field`}
            disabled
          />
        </div>
        <div className="mortgage_calculator_input">
          <label htmlFor="purchasePrice" className="purchase_price">
            Monthly repayment
          </label>
          <input
            value={`€${monthlyPayment}`}
            type="text"
            id="purchasePrice"
            className={`input_element_field`}
            disabled
          />
        </div>
        <div className="mortgage_calculator_input">
          <label htmlFor="purchasePrice" className="purchase_price">
            Interest Rate
          </label>
          <input
            value={`${watch().interestRate}%`}
            type="text"
            id="interestRate"
            className={`input_element_field`}
            disabled
          />
        </div>
        <div className="mortgage_calculator_input">
          <label htmlFor="purchasePrice" className="purchase_price">
            Interest Rate
          </label>
          <input
            value={`${calculatedEAR}%`}
            type="text"
            id="effectiveRate"
            className={`input_element_field`}
            disabled
          />
        </div>
        <div className="mortgage_calculator_input">
          <label htmlFor="purchasePrice" className="purchase_price">
            Capital repayment
          </label>
          <input
            value={`${watch().capitalRepayment}%`}
            type="text"
            id="capitalRepayment"
            className={`input_element_field`}
            disabled
          />
        </div>
        <div className="mortgage_calculator_input">
          <label htmlFor="purchasePrice" className="purchase_price">
            Debt-fee in
          </label>
          <input
            value={`${totalYears} years and ${remainingMonths} months`}
            type="text"
            id="capitalRepayment"
            className={`input_element_field`}
            disabled
          />
        </div>
      </div>
    </div>
  );
};
