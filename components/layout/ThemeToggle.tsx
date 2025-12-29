"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  //todo 这个文件的作用，useTheme的用法
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="border px-2 py-1 rounded"
    >
      {theme === "dark" ? "🌞" : "🌙"}
    </button>
  );
}
