import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { PATHNAMES } from "@/constants/global";
import closeIcon from "../../../public/close.svg";
import { HEADER_MENU, HEADERS } from "@/constants/header";
import { IMobileNavbar } from "@/types/header";
import { MobileMenuItem } from "./MobileManuItem";

export const MobileNavbar: FC<IMobileNavbar> = ({
  handleCollapseMenuClose,
  collapseMenu,
}) => {
  return (
    <div className={`mobile_navbar_container `}>
      <div className={`mobile_menu ${collapseMenu ? "collapse_menu" : ""}`}>
        <div className="mobile_menu_header">
          <Link href={PATHNAMES.HOME} onClick={handleCollapseMenuClose}>
            <Image
              src="/mainLogo.svg"
              width={140}
              height={57}
              alt="Exapats Finance"
            />
          </Link>
          <Image
            src={closeIcon}
            width={24}
            height={24}
            alt="Close"
            onClick={handleCollapseMenuClose}
          />
        </div>
        <ul className="mobile_menu_list">
          {HEADER_MENU.map((item) => (
            <MobileMenuItem
              key={item.id}
              id={item.id}
              name={item.name}
              pathname={item.pathname}
              handleCollapseMenuClose={handleCollapseMenuClose}
            />
          ))}
        </ul>
        <div className="contact_us_button_field">
          <Link href={PATHNAMES.CALENDAR}>
            <button className="free_consultation_button">
              {HEADERS.free_consultation}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
