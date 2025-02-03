export interface MenuItems {
  label: string;
  href: string;
}

export interface ResponsiveMenuProps {
  menuItems: MenuItems[];
  onCloseMenu: () => void;
}

export interface NavbarProps {
  menuItems: MenuItems[];
}
