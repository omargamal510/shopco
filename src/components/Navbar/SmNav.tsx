"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { SmNavProps } from "../../types/navbar-types.js";
import Link from "next/link";

function SmNav({ navLinks }: SmNavProps) {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  return (
    <div>
      <button onClick={() => setNavOpen(true)}>
        <Menu className=" cursor-pointer block lg:hidden" />
      </button>

      <div
        className={`${
          navOpen ? "" : "-top-full"
        } h-screen transition-base backdrop-blur-sm ease-linear flex items-center justify-center bg-smNav z-50 fixed text-primary inset-0 `}
      >
        <button
          className="absolute right-5 top-10 p-2 rounded-lg text-primary bg-darkPrimary"
          onClick={() => setNavOpen(false)}
        >
          <X />
        </button>

        <ul className="flex flex-col gap-3 items-center">
          {navLinks.map(({ href, name }, i) => (
            <li
              className="text-2xl hover:bg-darkPrimary p-2 transition-base rounded-lg  font-medium"
              key={i}
            >
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SmNav;
