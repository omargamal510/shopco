"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      {theme === "light" && (
        <button className=" cursor-pointer" onClick={() => setTheme("dark")}>
          <Moon />
        </button>
      )}

      {theme === "dark" && (
        <button className=" cursor-pointer" onClick={() => setTheme("light")}>
          <Sun />
        </button>
      )}

      {/* <button
        className="border cursor-pointer"
        onClick={() => setTheme("system")}
      >
        <Computer />
      </button> */}
    </div>
  );
}
