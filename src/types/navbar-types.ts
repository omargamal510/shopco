import { LucideIcon } from "lucide-react"; // or use React.ReactNode if needed

export type NavLink = {
  href: string;
  name: string;
  icon?: LucideIcon;
};
