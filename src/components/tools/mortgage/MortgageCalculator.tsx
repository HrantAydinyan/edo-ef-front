"use client";

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { CustomSelect, SelectOption } from "./CitySelectBox";
import { useEffect, useState } from "react";
import { CITIES } from "@/constants/tools";
import { calculateEAR, getMonthlyPayment, getNumericNumbers } from "@/helpers";
import CurrencySlider from "./Slider";
import { RightSide } from "./RightSide";
import { formatDate } from "date-fns";
import { ITableData } from "@/types/tools";

interface IState {
  purchasePrice: string;
  propertyLocation: number;
  estateAgentFees: string;
  capitalRepayment: string;
  interestRate: string;
  downPayment: string;
  notaryFee: number;
}

export const MortgageCalculator = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IState>({
    defaultValues: {
      estateAgentFees: "3.57",
      interestRate: "3.9",
      notaryFee: 2,
      purchasePrice: "400000",
      propertyLocation: 3.5,
      capitalRepayment: "2",
      downPayment: "0",
    },
  });

  const [selectedOption, setSelectedOption] = useState<SelectOption>(CITIES[1]);
  const [tableData, setTableData] = useState<ITableData[]>([]);
  const [tableYearlyData, setTableYearlyData] = useState<ITableData[]>([]);
  const [totalYears, setTotalYears] = useState<number>(0);
  const [remainingMonths, setRemainingMonths] = useState<number>(0);
  const [selectedTab, setSelectedTab] = useState<string>("yearly");

  const onSubmit: SubmitHandler<IState> = (data) => {
    console.log("data", data);
  };

  const estateAgentFees =
    (Number(watch().purchasePrice) * Number(watch().estateAgentFees)) / 100;
  const notaryFee =
    (Number(watch().purchasePrice) * Number(watch().notaryFee)) / 100;
  const purchaseTax =
    (Number(watch().purchasePrice) * Number(watch().propertyLocation)) / 100;

  const taxSubtotal = estateAgentFees + notaryFee + purchaseTax;
  const total = Number(watch().purchasePrice) + taxSubtotal;

  const calculatedEAR = calculateEAR({
    nominalRate: Number(watch().interestRate),
  });

  const firstMonthPayment = getMonthlyPayment({
    purchasePrice: Number(watch().purchasePrice) - Number(watch().downPayment),
    calculatedEAR: Number(calculatedEAR),
    capitalRepayment: Number(watch().capitalRepayment),
  });

  const date = new Date();
  date.setMonth(date.getMonth() + 1);

  function getTableData(loanBalance: number, loanDate: Date) {
    setTableData([]);

    function recursion(loanBalance: number, loanDate: Date) {
      if (loanBalance <= firstMonthPayment) {
        return;
      }
      const loanBalancePercent = (loanBalance * Number(calculatedEAR)) / 100;
      const loanBalanceMonthlyPercentPayment = Number(
        (loanBalancePercent / 12).toFixed(2)
      );

      const monthlyLoanPayment = Number(
        (firstMonthPayment - loanBalanceMonthlyPercentPayment).toFixed(2)
      );

      const remainingLoanBalance = Number(
        (loanBalance - monthlyLoanPayment).toFixed(2)
      );
      const nextDate = new Date(loanDate);
      nextDate.setMonth(nextDate.getMonth() + 1);

      const formattedLoanDate = formatDate(loanDate, "MM/yyyy");

      const object = {
        year: formattedLoanDate,
        payment: firstMonthPayment,
        interest: loanBalanceMonthlyPercentPayment,
        principle: monthlyLoanPayment,
        remainingLoanBalance: remainingLoanBalance,
      };

      setTableData((prev) => [...prev, object]);

      return recursion(remainingLoanBalance, nextDate);
    }

    recursion(loanBalance, loanDate);
  }

  function aggregateYearlyData(monthlyData: ITableData[]) {
    let yearlyData = [];

    for (let i = 0; i < monthlyData.length; i += 12) {
      let yearlyChunk = monthlyData.slice(i, i + 12);

      if (yearlyChunk.length === 0) break;

      let firstYear = yearlyChunk[0].year;
      let lastYear = yearlyChunk[yearlyChunk.length - 1].year;

      let aggregatedObject = {
        year: `${firstYear} - ${lastYear}`,
        payment: yearlyChunk.reduce(
          (sum, obj) => Number((sum + obj.payment).toFixed(2)),
          0
        ),
        interest: yearlyChunk.reduce(
          (sum, obj) => Number((sum + obj.interest).toFixed(2)),
          0
        ),
        principle: yearlyChunk.reduce(
          (sum, obj) => Number((sum + obj.principle).toFixed(2)),
          0
        ),
        remainingLoanBalance:
          yearlyChunk[yearlyChunk.length - 1].remainingLoanBalance,
      };

      yearlyData.push(aggregatedObject);
    }

    return setTableYearlyData(yearlyData);
  }

  useEffect(() => {
    getTableData(
      Number(watch().purchasePrice) - Number(watch().downPayment),
      date
    );
  }, [watch().purchasePrice, watch().downPayment]);

  useEffect(() => {
    if (tableData.length) {
      setTotalYears(Math.floor(tableData.length / 12));
      setRemainingMonths(tableData.length % 12);
      aggregateYearlyData(tableData);
    }
  }, [tableData]);

  return (
    <div className="mortgage_calculator">
      <h2 className="mortgage_calculator_title">
        Fill in the form to calculate your mortgage & repayment
      </h2>
      <div className="mortgage_calculator_field">
        <div className="mortgage_calculator_form_section">
          <h6 className="form_title">Please fill the form</h6>
          <form
            className="mortgage_calculator_form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mortgage_calculator_input">
              <label htmlFor="purchasePrice" className="purchase_price">
                Purchase Price
              </label>
              <input
                {...register("purchasePrice", {
                  required: true,
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Please enter a valid number",
                  },
                  onChange: (e) => {
                    const value = getNumericNumbers(e.target.value);
                    setValue("purchasePrice", value);
                  },
                })}
                type="text"
                id="purchasePrice"
                placeholder="Purchase Price"
                className={`input_element_field`}
              />
              {errors.purchasePrice && (
                <p className="error_message_field">
                  {errors.purchasePrice.message}
                </p>
              )}
            </div>
            <Controller
              name={"propertyLocation"}
              control={control}
              render={({ field: { onChange } }) => (
                <div className="mortgage_calculator_input">
                  <label htmlFor="custom_select" className="purchase_price">
                    Location of property
                  </label>
                  <CustomSelect
                    options={CITIES}
                    value={selectedOption}
                    onChange={setSelectedOption}
                    formChange={onChange}
                    placeholder="Select an option"
                  />
                </div>
              )}
            />
            <div className="mortgage_calculator_input">
              <label htmlFor="estateAgentFees" className="purchase_price">
                Estate Agent Fees
              </label>
              <div className="input-container relative">
                <input
                  {...register("estateAgentFees", {
                    required: true,
                    onChange: (e) => {
                      const value = getNumericNumbers(e.target.value);
                      setValue("estateAgentFees", value);
                    },
                  })}
                  type="text"
                  id="estateAgentFees"
                  placeholder="Estate Agent Fees"
                  className={`input_element_field pr-6`}
                />
                <span className="input_element_suffix">%</span>
              </div>
              {errors.estateAgentFees && (
                <p className="error_message_field">
                  {errors.estateAgentFees.message}
                </p>
              )}
            </div>
            <div className="mortgage_calculator_input">
              <label htmlFor="capitalRepayment" className="purchase_price">
                Capital Repayment
              </label>
              <div className="input-container relative">
                <input
                  {...register("capitalRepayment", {
                    required: true,
                    validate: {
                      minValue: (value) =>
                        Number(value) >= 1.5 || "Minimum value is 1.5%",
                      maxValue: (value) =>
                        Number(value) <= 100 || "Maximum value is 100%",
                    },
                    onChange: (e) => {
                      const value = getNumericNumbers(e.target.value);
                      setValue("capitalRepayment", value);
                    },
                  })}
                  type="text"
                  id="capitalRepayment"
                  placeholder="Capital Repayment"
                  className={`input_element_field pr-6`}
                />
                <span className="input_element_suffix">%</span>
              </div>
              {errors.capitalRepayment && (
                <p className="error_message_field">
                  {errors.capitalRepayment.message}
                </p>
              )}
            </div>
            <div className="mortgage_calculator_input">
              <label htmlFor="estateAgentFees" className="purchase_price">
                Interest Rate
              </label>
              <div className="input-container relative">
                <input
                  {...register("interestRate", {
                    required: true,
                    onChange: (e) => {
                      const value = getNumericNumbers(e.target.value);
                      setValue("interestRate", value);
                    },
                  })}
                  type="text"
                  id="interestRate"
                  placeholder="Interest Rate"
                  className={`input_element_field pr-6`}
                />
                <span className="input_element_suffix">%</span>
              </div>
              {errors.interestRate && (
                <p className="error_message_field">
                  {errors.interestRate.message}
                </p>
              )}
            </div>

            <Controller
              name={"downPayment"}
              control={control}
              render={({ field: { onChange } }) => (
                <div className="mortgage_calculator_input">
                  <label htmlFor="estateAgentFees" className="purchase_price">
                    Your Down Payment
                  </label>
                  <CurrencySlider
                    taxSubtotal={taxSubtotal}
                    total={total}
                    onChange={onChange}
                  />
                </div>
              )}
            />
          </form>
        </div>
        <RightSide<IState>
          watch={watch}
          selectedOption={selectedOption}
          totalYears={totalYears}
          remainingMonths={remainingMonths}
          tableData={selectedTab === "monthly" ? tableData : tableYearlyData}
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab}
        />
      </div>
    </div>
  );
};
