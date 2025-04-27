"use client";

import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { getNumericNumbers } from "@/helpers";
import {
  // CustomSelect,
  InvestmentTimeSlider,
} from "./components";
import { COMPOUND_FREQUENCY } from "@/constants/tools";
import { ICompoundOption } from "@/types/tools";

interface IState {
  initialInvestment: string;
  monthlyContribution: string;
  investmentTime: string;
  estimatedRate: string;
  // compoundFrequency: string;
}

interface ITableData {
  oldInitialInvestment: number;
  initialInvestment: number;
  monthlyContribution: number;
  totalMonthPercentage: number;
}

export const InvestmentCalculator = () => {
  // const [selectedOption, setSelectedOption] = useState<ICompoundOption>(
  //   COMPOUND_FREQUENCY[0]
  // );
  const [tableData, setTableData] = useState<ITableData[]>([]);
  const [tableYearlyData, setTableYearlyData] = useState<ITableData[]>([]);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalDeposit, setTotalDeposit] = useState<number>(0);
  const [finalCapital, setFinalCapital] = useState<number>(0);
  const [selectedTab, setSelectedTab] = useState<string>("yearly");

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IState>({
    defaultValues: {
      initialInvestment: "5000",
      monthlyContribution: "150",
      estimatedRate: "8",
      investmentTime: "1",
    },
  });

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

  const onSubmit: SubmitHandler<IState> = (data) => {
    const result = calculateInvestmentTimeline(
      Number(data.initialInvestment),
      Number(data.monthlyContribution),
      Number(data.estimatedRate),
      Number(data.investmentTime)
    );
    setTableData(result);
    aggregateYearlyData(result);

    const investment = result.reduce(
      (acc, item) => {
        acc.totalInterest += item.totalMonthPercentage;
        acc.totalDeposit += item.monthlyContribution;
        return acc;
      },
      {
        totalInterest: 0,
        totalDeposit: 0,
      }
    );

    setTotalInterest(Number(investment.totalInterest.toFixed(2)));
    setTotalDeposit(
      investment.totalDeposit + Number(watch("initialInvestment"))
    );
    setFinalCapital(
      investment.totalInterest +
        investment.totalDeposit +
        Number(watch("initialInvestment"))
    );
  };

  function calculateInvestmentTimeline(
    initialInvestment: number,
    monthlyContribution: number,
    estimatedRate: number,
    investmentTime: number
  ) {
    const array: ITableData[] = [];

    let months = investmentTime * 12;

    function recursion(monthsCount: number, initialInvestment: number) {
      if (monthsCount > months) {
        return;
      }

      const totalMonth = initialInvestment + monthlyContribution;
      const totalMonthPercentage = Number(
        ((totalMonth * estimatedRate) / 100 / 12).toFixed(2)
      );

      const object = {
        oldInitialInvestment: initialInvestment,
        initialInvestment: Number(
          (totalMonth + totalMonthPercentage).toFixed(2)
        ),
        monthlyContribution,
        totalMonthPercentage,
      };
      array.push(object);
      recursion(monthsCount + 1, Number(object.initialInvestment));
    }

    recursion(1, initialInvestment);

    return array;
  }

  function aggregateYearlyData(monthlyData: ITableData[]) {
    let yearlyData = [];

    for (let i = 0; i < monthlyData.length; i += 12) {
      let yearlyChunk = monthlyData.slice(i, i + 12);

      if (yearlyChunk.length === 0) break;

      const totalMonthPercentage = yearlyChunk.reduce(
        (sum, obj) => Number((sum + obj.totalMonthPercentage).toFixed(2)),
        0
      );

      const yearlyContribution = yearlyChunk.reduce(
        (sum, obj) => Number(sum + obj.monthlyContribution),
        0
      );

      let aggregatedObject = {
        oldInitialInvestment: yearlyChunk[0]?.oldInitialInvestment,
        totalMonthPercentage: totalMonthPercentage,
        monthlyContribution: yearlyContribution,
        initialInvestment:
          yearlyChunk[yearlyChunk.length - 1].initialInvestment,
      };

      yearlyData.push(aggregatedObject);
    }

    return setTableYearlyData(yearlyData);
  }

  useEffect(() => {
    if (tableData.length === 0) {
      const result = calculateInvestmentTimeline(
        Number(watch("initialInvestment")),
        Number(watch("monthlyContribution")),
        Number(watch("estimatedRate")),
        Number(watch("investmentTime"))
      );
      setTableData(result);
      aggregateYearlyData(result);

      const investment = result.reduce(
        (acc, item) => {
          acc.totalInterest += item.totalMonthPercentage;
          acc.totalDeposit += item.monthlyContribution;
          return acc;
        },
        {
          totalInterest: 0,
          totalDeposit: 0,
        }
      );

      setTotalInterest(investment.totalInterest);
      setTotalDeposit(
        investment.totalDeposit + Number(watch("initialInvestment"))
      );
      setFinalCapital(
        investment.totalInterest +
          investment.totalDeposit +
          Number(watch("initialInvestment"))
      );
    }
  }, []);

  return (
    <div className="investment_calculator">
      <h2 className="investment_calculator_description">
        Fill in the form to calculate your Compound Interest
      </h2>
      <div className="investment_body">
        <div className="investment_form_section">
          <h6 className="form_title">Please fill the form</h6>
          <form
            className="investment_calculator_form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="investment_calculator_input">
              <label htmlFor="initialInvestment" className="purchase_price">
                Initial Investment
              </label>
              <div className="input-container relative">
                <input
                  {...register("initialInvestment", {
                    required: true,
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "Please enter a valid number",
                    },
                    onChange: (e) => {
                      const value = getNumericNumbers(e.target.value);
                      setValue("initialInvestment", value);
                    },
                  })}
                  type="text"
                  id="initialInvestment"
                  placeholder="Initial Investment"
                  className={`input_element_field`}
                />
                <span className="input_element_suffix">€</span>
              </div>
              {errors.initialInvestment && (
                <p className="error_message_field">
                  {errors.initialInvestment.message}
                </p>
              )}
            </div>
            <div className="investment_calculator_input">
              <label htmlFor="monthlyContribution" className="purchase_price">
                Monthly Contribution
              </label>
              <div className="input-container relative">
                <input
                  {...register("monthlyContribution", {
                    required: true,
                    onChange: (e) => {
                      const value = getNumericNumbers(e.target.value);
                      setValue("monthlyContribution", value);
                    },
                  })}
                  type="text"
                  id="monthlyContribution"
                  placeholder="Monthly Contribution"
                  className={`input_element_field pr-6`}
                />
                <span className="input_element_suffix">€</span>
              </div>
              {errors.monthlyContribution && (
                <p className="error_message_field">
                  {errors.monthlyContribution.message}
                </p>
              )}
            </div>
            <div className="investment_calculator_input">
              <label htmlFor="estimatedRate" className="purchase_price">
                Estimated Rate of Return
              </label>
              <div className="input-container relative">
                <input
                  {...register("estimatedRate", {
                    required: true,
                    validate: {
                      minValue: (value) =>
                        Number(value) >= 0 || "Minimum value is 0%",
                      maxValue: (value) =>
                        Number(value) <= 30 || "Maximum value is 30%",
                    },
                    onChange: (e) => {
                      const value = getNumericNumbers(e.target.value);
                      setValue("estimatedRate", value);
                    },
                  })}
                  type="text"
                  id="estimatedRate"
                  placeholder="Estimated Rate"
                  className={`input_element_field pr-6`}
                />
                <span className="input_element_suffix">%</span>
              </div>
              {errors.estimatedRate && (
                <p className="error_message_field">
                  {errors.estimatedRate.message}
                </p>
              )}
            </div>
            {/* <Controller
              name={"compoundFrequency"}
              control={control}
              render={({ field: { onChange } }) => (
                <div className="investment_calculator_input">
                  <label htmlFor="custom_select" className="purchase_price">
                    Compound Frequency
                  </label>
                  <CustomSelect
                    options={COMPOUND_FREQUENCY}
                    value={selectedOption}
                    onChange={setSelectedOption}
                    formChange={onChange}
                    placeholder="Select an option"
                  />
                </div>
              )}
            /> */}
            <Controller
              name={"investmentTime"}
              control={control}
              render={({ field: { onChange } }) => (
                <div className="investment_calculator_input">
                  <label htmlFor="estimatedRate" className="purchase_price">
                    Investment Time
                  </label>
                  <InvestmentTimeSlider onChange={onChange} />
                </div>
              )}
            />
            <button className="submit_button">Calculate</button>
          </form>
        </div>
        <div className="investment_body_right">
          <div className="investment_table">
            <div className="table_title_field">
              <h4 className="table_title">Result</h4>
            </div>
            <div className="invest_table result_table">
              <table
                cellPadding="1"
                cellSpacing="1"
                className="table"
                bgcolor="#fff"
              >
                <thead>
                  <tr className="header_row">
                    <th className="header_element">Column</th>
                    <th className="header_element">Name</th>
                    <th className="header_element">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table_column">
                    <td className="table_element">1</td>
                    <td className="table_element">
                      The final capital achieved including interest
                    </td>
                    <td className="table_element">
                      €{finalCapital?.toFixed(2)}
                    </td>
                  </tr>
                  <tr className="table_column">
                    <td className="table_element">2</td>
                    <td className="table_element">Total deposits</td>
                    <td className="table_element">
                      €{totalDeposit?.toFixed(2)}
                    </td>
                  </tr>
                  <tr className="table_column">
                    <td className="table_element">3</td>
                    <td className="table_element">Total interest</td>
                    <td className="table_element">
                      €{totalInterest?.toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="investment_table">
            <div className="table_title_field">
              <h4 className="table_title">Credit development</h4>
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
              <table
                cellPadding="1"
                cellSpacing="1"
                className="table"
                bgcolor="#fff"
              >
                <thead>
                  <tr className="header_row">
                    <th className="header_element">Month</th>
                    <th className="header_element">Opening Balance</th>
                    <th className="header_element">Total Contribution</th>
                    <th className="header_element">Interest Earned</th>
                    <th className="header_element">Ending Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {(selectedTab === "yearly" ? tableYearlyData : tableData)?.map(
                    (data, index) => (
                      <tr key={index} className="table_column">
                        <td className="table_element">{index + 1}</td>
                        <td className="table_element">
                          €{data.oldInitialInvestment}
                        </td>
                        <td className="table_element">
                          €{data.monthlyContribution}
                        </td>
                        <td className="table_element">
                          €{data.totalMonthPercentage}
                        </td>
                        <td className="table_element">
                          €{data.initialInvestment}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
