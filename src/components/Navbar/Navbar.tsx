import Link from "next/link.js";
import { NavLink } from "../../types/navbar-types.js";
import { Heart, ShoppingCart } from "lucide-react";
const navLinks: NavLink[] = [
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
    name: "",
    icon: ShoppingCart,
  },
  {
    href: "/wishlist",
    name: "",
    icon: Heart,
  },
];

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 h-20 shadow-xl">
      <h1 className="w-fit text-3xl tracking-[-2px] font-black">
        <Link href="/">SHOP.CO</Link>
      </h1>

      <ul className="flex gap-6">
        {navLinks.map(({ href, name, icon: Icon }, id: number) => (
          <li key={id}>
            <Link
              href={href}
              className="flex items-center gap-2 hover:underline"
            >
              <span>{name}</span>

              {Icon && <Icon className="w-5 h-5" />}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
