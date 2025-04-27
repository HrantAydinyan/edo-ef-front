import {
  NUMBER_DOT_REGEX,
  NUMBER_REGEX,
  ONE_DOT_REGEX,
} from "@/constants/global";

export const getNumericNumbers = (data: string) => {
  let value = data;

  if (value.length === 1) {
    value = value.replace(NUMBER_REGEX, "");
  } else {
    if (
      value.length === 2 &&
      value.charAt(0) === "0" &&
      value.charAt(1) !== "."
    ) {
      value = `0.${value.charAt(1)}`;
    }

    if (value.charAt(0) === ".") {
      const splitValue = value.split("");
      splitValue[0] = "0.";
      value = splitValue.join("");
    }

    value = value.replace(NUMBER_DOT_REGEX, "").replace(ONE_DOT_REGEX, "$1");
  }

  return value;
};
