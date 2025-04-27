import mortgageIcon from "../../public/icons/mortgage.svg";
import investmentIcon from "../../public/icons/investment.svg";

export const TOOLS = {
  title: "Tools",
};

export const TOOLS_LIST = [
  {
    id: 1,
    title: "Mortgage Calculator",
    shortDescription: "Calculate your monthly mortgage payment.",
    description:
      "Easily estimate your monthly mortgage payments with our user-friendly Mortgage Calculator. Simply enter your loan amount, interest rate, and loan term to get an instant breakdown of your payments. Adjust the values to compare different scenarios and plan your budget effectively. Whether you're buying a new home or refinancing, our calculator helps you make informed financial decisions. Try it now!",
    icon: mortgageIcon,
    slug: "mortgage-calculator",
  },
  {
    id: 2,
    title: "Investment Calculator",
    shortDescription: "Calculate your investment growth.",
    description:
      "Easily estimate your monthly mortgage payments with our user-friendly Mortgage Calculator. Simply enter your loan amount, interest rate, and loan term to get an instant breakdown of your payments. Adjust the values to compare different scenarios and plan your budget effectively. Whether you're buying a new home or refinancing, our calculator helps you make informed financial decisions. Try it now!",
    icon: investmentIcon,
    slug: "investment-calculator",
  },
];

export const CITIES = [
  { id: 1, city: "Baden-Württemberg", percent: 5.0 },
  { id: 2, city: "Bayern", percent: 3.5 },
  { id: 3, city: "Berlin", percent: 6.0 },
  { id: 4, city: "Brandenburg", percent: 6.5 },
  { id: 5, city: "Bremen", percent: 5.0 },
  { id: 6, city: "Hamburg", percent: 5.5 },
  { id: 7, city: "Hessen", percent: 6.0 },
  { id: 8, city: "Mecklenburg-Vorpommern", percent: 6.0 },
  { id: 9, city: "Niedersachsen", percent: 5.0 },
  { id: 10, city: "Nordrhein-Westfalen", percent: 6.5 },
  { id: 11, city: "Rheinland-Pfalz", percent: 5.0 },
  { id: 12, city: "Saarland", percent: 6.5 },
  { id: 13, city: "Sachsen", percent: 5.5 },
  { id: 14, city: "Sachsen-Anhalt", percent: 5.0 },
  { id: 15, city: "Schleswig-Holstein", percent: 6.5 },
  { id: 16, city: "Thüringen", percent: 5.0 },
];

export const COMPOUND_FREQUENCY = [
  {
    id: 1,
    name: "Monthly",
    value: "12",
  },
  {
    id: 2,
    name: "Yearly",
    value: "1",
  },
];
