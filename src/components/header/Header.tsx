"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { HEADERS, HEADER_MENU } from "@/constants/header";
import { PATHNAMES } from "@/constants/global";
import { MobileNavbar } from "./MobileNavbar";

import menuIcon from "../../../public/menu.svg";

export const Header = () => {
  const pathname = usePathname();

  const [collapseMenu, setCollapseMenu] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleCollapseMenuClose = () => {
    setCollapseMenu(true);
    setTimeout(() => setMenuOpen(false), 990);
  };

  const handleCollapseMenuOpen = () => {
    setCollapseMenu(false);
    setMenuOpen(true);
  };

  return (
    <div className="header">
      <div className="logo_container">
        <Link href={PATHNAMES.HOME}>
          <Image
            src="/mainLogo.svg"
            alt="Logo"
            width={178}
            height={73}
            layout="responsive"
          />
        </Link>
      </div>
      <div className="header_menu">
        <ul className="navigation_list">
          {HEADER_MENU.map((element) => (
            <li
              className={`navigation_element ${
                pathname === element.pathname ? "active_navigation_element" : ""
              }`}
              key={element.id}
            >
              <Link href={element.pathname}>{element.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="header_actions">
        <Link href={PATHNAMES.CALENDAR}>
          <button className="free_consultation_button">
            {HEADERS.free_consultation}
          </button>
        </Link>
        <div className="menu_icon_field">
          <Image
            src={menuIcon}
            alt="menu"
            width={24}
            height={24}
            onClick={handleCollapseMenuOpen}
          />
        </div>
      </div>
      {menuOpen && (
        <MobileNavbar
          handleCollapseMenuClose={handleCollapseMenuClose}
          collapseMenu={collapseMenu}
        />
      )}
    </div>
  );
};
