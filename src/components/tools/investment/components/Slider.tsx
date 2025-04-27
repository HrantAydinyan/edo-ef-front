"use client";

import { FC, useRef, useState } from "react";
import ReactSlider from "react-slider";

interface ISlider {
  onChange: (value: string) => void;
}

export const InvestmentTimeSlider: FC<ISlider> = ({ onChange }) => {
  const [value, setValue] = useState(1);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  return (
    <div className="slider-container">
      <div className="tooltip" style={{ left: `${(value / 67) * 100}%` }}>
        {value.toLocaleString()}
      </div>
      <ReactSlider
        className="slider"
        thumbClassName="thumb"
        trackClassName="track"
        min={1}
        max={67}
        value={value}
        onChange={(value) => {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }

          setValue(value);
          timeoutRef.current = setTimeout(() => {
            onChange(value.toString());
          }, 300);
        }}
      />
      <div className="slider-labels">
        <span>min</span>
        <span>max</span>
      </div>
    </div>
  );
};
