"use client";

import { useTheme } from "@/components/theme-provider";

export default function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle color theme"
    >
      <span aria-hidden="true">◐</span>
    </button>
  );
}
