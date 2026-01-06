"use client";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.div
      whileHover={{ rotate: 40 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="inline-flex"
    >
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full p-2 relative"
        onClick={toggleTheme}
      >
        <span className="sr-only">Toggle theme</span>
        {/* Moon Icon */}
        <Moon className="h-5 w-5 rotate-0 scale-100 transition-all text-indigo-900 dark:-rotate-90 dark:scale-0" />

        {/* Sun Icon */}
        <Sun
          className="h-5 w-5 rotate-90 scale-0 text-amber-400 dark:rotate-0 dark:scale-100 absolute"
          fill="currentColor"
        />
      </Button>
    </motion.div>
  );
}
