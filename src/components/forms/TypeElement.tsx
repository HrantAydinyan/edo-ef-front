"use client";

import Image, { StaticImageData } from "next/image";
import { Dispatch, FC, SetStateAction } from "react";

import vector from "../../../public/forms/vector.svg";

interface ITypeElement {
  name: string;
  image: StaticImageData;
  id: number;
  setCheckedTypeId: Dispatch<SetStateAction<number | null>>;
  checkedTypeId: number | null;
}

export const TypeElement: FC<ITypeElement> = ({
  name,
  image,
  id,
  checkedTypeId,
  setCheckedTypeId,
}) => {
  const handleCheck = () => {
    if (checkedTypeId === id) {
      setCheckedTypeId(null);
    } else {
      setCheckedTypeId(id);
    }
  };

  const isChecked = checkedTypeId === id;
  return (
    <div className="type_element">
      <div className="type_info">
        <Image src={image} width={35} height={35} alt="Type" />
        <p className="type_name">{name}</p>
      </div>
      <label className="checkbox_film" htmlFor={`type_checkbox_${id}`}>
        {isChecked && <Image src={vector} alt="Vector" width={14} height={9} />}
        <input
          type="checkbox"
          checked={checkedTypeId === id}
          onChange={handleCheck}
          className="checkbox_input"
          id={`type_checkbox_${id}`}
        />
      </label>
    </div>
  );
};
