"use client";

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
      <h1> {theme === "dark" || "systen" ? "Ok dark" : "Lightyyyy"}</h1>
      The current theme is: {theme}
      <button
        className="border cursor-pointer"
        onClick={() => setTheme("light")}
      >
        Light Mode
      </button>
      <button
        className="border cursor-pointer"
        onClick={() => setTheme("dark")}
      >
        Dark Mode
      </button>
      <button
        className="border cursor-pointer"
        onClick={() => setTheme("system")}
      >
        System .. Mode
      </button>
    </div>
  );
}
