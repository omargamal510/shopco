export type NavLink = {
  href: string;
  name: string;
  iconName?: string;
};

export interface SmNavProps {
  navLinks: NavLink[];
}
