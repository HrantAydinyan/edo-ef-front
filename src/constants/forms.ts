import icon1 from "../../public/forms/icon1.svg";
import icon2 from "../../public/forms/icon2.svg";
import icon3 from "../../public/forms/icon3.svg";
import icon4 from "../../public/forms/icon4.svg";
import icon5 from "../../public/forms/icon5.svg";
import icon6 from "../../public/forms/icon6.svg";

export const FORMS = {
  title: "Real Estate Search Engine",
  description:
    "Our real estate tool is specifically designed to help you easily find and compare real estate investment opportunities in Germany.",
  what_currently_looking_for: "What are you currently looking for?",
  where_looking: "Where are you looking?",
  address_placeholder: "Enter a state, city, town or zip code",
  radius: "Radius",
  refine_your_search: "Refine your search",
  price_form: "Purchase price from",
  price_up: "Purchase price up to",
  living_space: "Living space from",
  living_space_up: "Living space up to",
  plate_area: "Plot area from",
  plate_area_up: "Plot area up to",
  rooms: "Rooms",
  vacant_rented: "Vacant/Rented",
  year_construction: "Year of construction from",
  year_construction_up: "Year of construction up to",
  single_family_house: "Single-family house",
  create_search_request: "Create a search request now",
};

export const FORM_TYPES = [
  {
    id: 1,
    image: icon1,
    name: "Single-family house",
  },
  {
    id: 2,
    image: icon2,
    name: "Single-family house",
  },
  {
    id: 3,
    image: icon3,
    name: "Single-family house",
  },
  {
    id: 4,
    image: icon4,
    name: "Single-family house",
  },
  {
    id: 5,
    image: icon5,
    name: "Single-family house",
  },
  {
    id: 6,
    image: icon6,
    name: "Single-family house",
  },
];

export const LOCATION_FORM = [
  {
    id: "address",
    name: "address",
    placeholder: FORMS.address_placeholder,
  },
  {
    id: "radius",
    name: "radius",
    placeholder: FORMS.radius,
  },
];

export const SEARCH_FORM = [
  {
    id: "price",
    name: "price",
    placeholder: FORMS.price_form,
  },
  {
    id: "price_to",
    name: "price_to",
    placeholder: FORMS.price_up,
  },
  {
    id: "living_space",
    name: "living_space",
    placeholder: FORMS.living_space,
  },
  {
    id: "living_space_up",
    name: "living_space_up",
    placeholder: FORMS.living_space_up,
  },
  {
    id: "plate_area",
    name: "plate_area",
    placeholder: FORMS.plate_area,
  },
  {
    id: "plate_area_up",
    name: "plate_area_up",
    placeholder: FORMS.plate_area_up,
  },
  {
    id: "rooms",
    name: "rooms",
    placeholder: FORMS.rooms,
  },
  {
    id: "vacant_rented",
    name: "vacant_rented",
    placeholder: FORMS.vacant_rented,
  },
  {
    id: "year_construction",
    name: "year_construction",
    placeholder: FORMS.year_construction,
  },
  {
    id: "year_construction",
    name: "year_construction",
    placeholder: FORMS.year_construction_up,
  },
];
