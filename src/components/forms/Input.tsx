import { FC } from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

interface IInput {
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  name: string;
  type?: string;
  placeholder: string;
  errors: FieldErrors;
}

export const Input: FC<IInput> = ({
  register,
  name,
  setValue,
  type = "text",
  placeholder,
}) => {
  return (
    <input
      {...register(name, {
        required: true,
        onChange: (e) => {
          if (e.target.value !== " ") {
            setValue(name, e.target.value);
          }
        },
      })}
      name={name}
      type={type}
      id={name}
      placeholder={placeholder}
      className={`input_element`}
    />
  );
};
