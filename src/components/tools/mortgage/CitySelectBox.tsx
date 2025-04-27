import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

import arrowDown from "../../../../public/icons/arrowDown.svg";

export interface SelectOption {
  id: number;
  city: string;
  percent: number;
}

interface CustomSelectProps {
  options: SelectOption[];
  value: SelectOption;
  onChange: (option: SelectOption) => void;
  placeholder?: string;
  className?: string;
  formChange: (value: number) => void;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select...",
  className = "",
  formChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`custom_select_container ${className}`} ref={selectRef}>
      <div
        className={`select-header ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="selected-value">
          {value ? value.city : placeholder}
        </span>
        <Image
          src={arrowDown}
          width={12}
          height={12}
          alt="Arrow"
          className={`arrow-icon ${isOpen ? "open" : ""}`}
        />
      </div>

      {isOpen && (
        <div className="select-options">
          {options?.map((option) => (
            <div
              key={option.id}
              className={`select-option ${
                value?.id === option.id ? "selected" : ""
              }`}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
                formChange(option.percent);
              }}
            >
              {option.city}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
