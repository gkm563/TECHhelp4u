"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read saved theme from localStorage, default to 'light'
    const savedTheme = (localStorage.getItem("techhelp4u-theme") as Theme) || "light";
    setThemeState(savedTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    let actualTheme: "light" | "dark" = "light";

    if (theme === "system") {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      actualTheme = systemDark ? "dark" : "light";
    } else {
      actualTheme = theme;
    }

    setResolvedTheme(actualTheme);

    if (actualTheme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
      root.style.colorScheme = "dark";
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
      root.style.colorScheme = "light";
    }

    localStorage.setItem("techhelp4u-theme", theme);
  }, [theme, mounted]);

  // Listen to OS system theme changes if theme is set to 'system'
  useEffect(() => {
    if (!mounted || theme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const root = document.documentElement;
      const actualTheme = mediaQuery.matches ? "dark" : "light";
      setResolvedTheme(actualTheme);

      if (actualTheme === "dark") {
        root.classList.add("dark");
        root.classList.remove("light");
        root.style.colorScheme = "dark";
      } else {
        root.classList.remove("dark");
        root.classList.add("light");
        root.style.colorScheme = "light";
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme, mounted]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "dark" || (prev === "system" && resolvedTheme === "dark") ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
