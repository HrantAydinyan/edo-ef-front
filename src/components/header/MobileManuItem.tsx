import { FC } from "react";
import Link from "next/link";

import { IMenuItem } from "@/types/header";

export const MobileMenuItem: FC<IMenuItem> = ({
  name,
  pathname,
  handleCollapseMenuClose,
}) => {
  return (
    <li className="mobile_menu_item">
      <Link href={pathname} onClick={handleCollapseMenuClose}>
        {name}
      </Link>
    </li>
  );
};
