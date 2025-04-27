export interface IMobileNavbar {
  handleCollapseMenuClose: () => void;
  collapseMenu: boolean;
}

export interface IMenuItem {
  id: number;
  name: string;
  pathname: string;
  handleCollapseMenuClose: () => void;
}
