import Link from "next/link";
import { NavLink } from "../../types/navbar-types";
import { Heart, ShoppingCart } from "lucide-react";
import SmNav from "./SmNav";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { cookies } from "next/headers";
import LogOut from "@/ui/LogOut";

// Define navLinks with iconName instead of icon for serializability

const navLinks: NavLink[] = [
  {
    href: "/register",
    name: "Register",
  },

  {
    href: "/login",
    name: "Login",
  },

  {
    href: "/products",
    name: "Products",
  },
  {
    href: "/brands",
    name: "Brands",
  },

  {
    href: "/cart",
    name: "Cart",
    iconName: "ShoppingCart",
  },
  {
    href: "/wishlist",
    name: "Wishlist",
    iconName: "Heart",
  },
];

async function Navbar() {
  const cookiesStore = await cookies();
  const authToken = cookiesStore.get("authToken");

  return (
    <nav className="flex items-center justify-between px-10 h-16 shadow-2xl border-b ">
      <div className="flex items-center justify-between w-full font-bold gap-3">
        <h1 className="w-fit text-3xl tracking-[2px] font-black anton flex gap-2">
          <Link href="/">SHOP.CO</Link>
          <ThemeSwitcher />
        </h1>

        <SmNav navLinks={navLinks} />
      </div>

      <ul className="flex gap-3 items-center md:gap-6">
        {navLinks.map(({ href, name, iconName }, index) => {
          if (href === "/login") return null; // 👈 skip this one
          return (
            <li
              className={`${
                name ? "hidden lg:block" : "block"
              } transition-base hover:bg-darkPrimary hover:text-primary p-1 rounded-lg`}
              key={index}
            >
              <Link href={href} className="flex items-center  gap-2">
                <span>{name}</span>
                {iconName === "ShoppingCart" && (
                  <ShoppingCart className="w-5 h-5" />
                )}
                {iconName === "Heart" && <Heart className="w-5 h-5" />}
              </Link>
            </li>
          );
        })}

        <LogOut />
      </ul>
    </nav>
  );
}

export default Navbar;
