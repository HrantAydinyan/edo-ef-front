"use client";

import { ITableData } from "@/types/tools";
import React, { FC } from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  Area,
  AreaChart,
} from "recharts";

interface IInterestVsPrinciple {
  data: ITableData[];
}

export const InterestVsPrincipleChart: FC<IInterestVsPrinciple> = ({
  data,
}) => {
  const formattedData = data.slice(0, -1);

  return (
    <div className="total_purchase">
      <div className="total_purchase_title mortgage_table_title">
        <h3 className="total_purchase_title_text">Interest vs. Principle</h3>
      </div>
      <div className="chart_container">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={formattedData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorInterest" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1E88E5" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#1E88E5" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPrinciple" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#43A047" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#43A047" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis tickFormatter={(value) => `€${value.toLocaleString()}`} />
            <Tooltip formatter={(value) => `€${value.toLocaleString()}`} />
            <Legend />

            <Area
              type="monotone"
              dataKey="interest"
              stroke="#1E88E5"
              fillOpacity={1}
              fill="url(#colorInterest)"
            />
            <Area
              type="monotone"
              dataKey="principle"
              stroke="#43A047"
              fillOpacity={1}
              fill="url(#colorPrinciple)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
