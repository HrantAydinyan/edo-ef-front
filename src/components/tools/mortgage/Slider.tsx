"use client";

import { FC, useEffect, useRef, useState } from "react";
import ReactSlider from "react-slider";

interface ISlider {
  taxSubtotal: number;
  total: number;
  onChange: (value: string) => void;
}

const CurrencySlider: FC<ISlider> = ({ taxSubtotal, total, onChange }) => {
  const [value, setValue] = useState(taxSubtotal);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setValue(taxSubtotal);
  }, [taxSubtotal]);

  return (
    <div className="slider-container">
      <div className="tooltip" style={{ left: `${(value / total) * 100}%` }}>
        €{value.toLocaleString()}
      </div>
      <ReactSlider
        className="slider"
        thumbClassName="thumb"
        trackClassName="track"
        min={taxSubtotal}
        max={total}
        value={value}
        onChange={(value) => {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }

          setValue(value);
          timeoutRef.current = setTimeout(() => {
            onChange((value - taxSubtotal).toString());
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

export default CurrencySlider;
