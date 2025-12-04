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
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full p-2 relative"
      onClick={toggleTheme}
    >
      {/* Sun Icon */}
      <Moon className="h-5 w-5 rotate-0 scale-100 transition-all text-indigo-900 hover:animate-spinOnce  dark:-rotate-90 dark:scale-0" />

      {/* Moon Icon */}
      {/* Sun Icon */}
      <motion.div
        className="absolute"
        whileHover={{ rotate: 120 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <Sun
          className="h-5 w-5 rotate-90 scale-0 text-amber-400 dark:rotate-0 dark:scale-100"
          fill="currentColor"
        />
      </motion.div>

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
