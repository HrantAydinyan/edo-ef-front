interface ICalculateEAR {
  nominalRate: number;
  compoundingPeriods?: number;
}

interface IMonthlyPayment {
  purchasePrice: number;
  calculatedEAR: number;
  capitalRepayment: number;
}

export const getMonthlyPayment = ({
  purchasePrice,
  calculatedEAR,
  capitalRepayment,
}: IMonthlyPayment) => {
  const P = purchasePrice;
  const r = calculatedEAR / 100;
  const m = capitalRepayment / 100;
  const monthlyLoanAmount = (P * r) / 12;
  const monthlyCapitalRepayment = (P * m) / 12;

  return monthlyLoanAmount + monthlyCapitalRepayment;
};

export const calculateEAR = ({
  nominalRate,
  compoundingPeriods = 12,
}: ICalculateEAR) => {
  const r = nominalRate / 100;
  const m = compoundingPeriods;

  const EAR = Math.pow(1 + r / m, m) - 1;

  return (EAR * 100).toFixed(2);
};
