"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { useAesthetic } from "@/context/AestheticContext";

const ThemeToggle = ({ className }) => {
  const { theme, setTheme } = useTheme();
  const { aesthetic } = useAesthetic();
  const [mounted, setMounted] = useState(false);

  // Only render icons after mounting on client to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = (e) => {
    const newTheme = theme === "light" ? "dark" : "light";

    // Fallback for older browsers
    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    // Get click position for ripple effect
    const x = e.clientX;
    const y = e.clientY;

    // Calculate radius to cover the entire screen
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // Wrap state change in View Transition
    const transition = document.startViewTransition(() => {
      setTheme(newTheme);
    });

    // Animate ripple when transition is ready
    void transition.ready.then(() => {
      requestAnimationFrame(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 720,
            easing: "cubic-bezier(0.4, 0, 0.2, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      });
    });
  };

  if (!mounted) {
    return (
      <div className="relative flex h-10 w-10 items-center justify-center" />
    );
  }

  return (
    <button
      onClick={handleThemeToggle}
      aria-label="Toggle theme"
      title="Switch Theme"
      className={`theme-toggle relative flex h-10 w-10 ${
        aesthetic === "hallmark" || aesthetic === "broadsheet"
          ? "rounded-none border border-neutral-300 dark:border-neutral-800 bg-white/40 dark:bg-white/5 hover:bg-(--accent-vermilion) hover:text-white transition-colors duration-200"
          : "rounded-sm"
      } items-center justify-center cursor-none clickable ${className || ""}`}
    >
      <Moon className="absolute h-6 w-6 transition-all duration-300 ease-out rotate-90 scale-75 opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100 text-current" />
      <Sun className="absolute h-6 w-6 transition-all duration-300 ease-out rotate-0 scale-100 opacity-100 dark:rotate-90 dark:scale-75 dark:opacity-0 text-current" />
    </button>
  );
};

export default ThemeToggle;
