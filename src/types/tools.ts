import { SelectOption } from "@/components/tools/mortgage/CitySelectBox";
import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";
import { FieldValues, UseFormWatch } from "react-hook-form";
export interface ITools {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  icon: StaticImageData;
  slug: string;
}

export interface ITableData {
  payment: number;
  interest: number;
  principle: number;
  remainingLoanBalance: number;
  year: string;
}

export interface IRightSide<T extends FieldValues> {
  watch: UseFormWatch<T>;
  selectedOption: SelectOption;
  totalYears?: number;
  remainingMonths?: number;
}

export interface IMortgageTable {
  data: ITableData[];
  setSelectedTab: Dispatch<SetStateAction<string>>;
  selectedTab: string;
}

export interface IRightSideMain<T extends FieldValues> extends IRightSide<T> {
  tableData: ITableData[];
  selectedTab: string;
  setSelectedTab: Dispatch<SetStateAction<string>>;
}

export interface ICompoundOption {
  id: number;
  name: string;
  value: string;
}
