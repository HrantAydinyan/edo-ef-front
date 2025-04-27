export const EMAIL_REGEX: RegExp =
  /^(?!.*[._+-]{2})([a-zA-Z0-9]+(?:[._+-][a-zA-Z0-9]+)*)@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

export const PATHNAMES = {
  HOME: "/",
  ABOUT: "/about",
  SERVICES: "/services",
  CONTACT: "/contact",
  BLOG: "/blog",
  BLOG_POST: "/blog/[id]",
  CALENDAR: "/calendar",
};

export const GLOBAL = {
  book_appointments: "book appointments",
};

export const NUMBER_REGEX: RegExp = /[^0-9]/g;
export const NUMBER_DOT_REGEX: RegExp = /[^0-9.]/g;
export const ONE_DOT_REGEX: RegExp = /(\..*)\./g;
