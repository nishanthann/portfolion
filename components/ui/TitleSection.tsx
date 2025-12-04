"use client";
import { cn } from "@/lib/utils";
import { Quintessential } from "next/font/google";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

const quintessential = Quintessential({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-quintessential",
});

interface TitleSectionProps {
  title: string; // Expecting two words
  description?: string;
  className?: string;
  descriptionClassName?: string;
  badgeText?: string; // Optional badge text
  badgeIcon?: React.ReactNode; // Optional icon inside badge
}

export const TitleSection: React.FC<TitleSectionProps> = ({
  title,
  description,
  className,
  descriptionClassName,
  badgeText,
  badgeIcon,
}) => {
  // split by whitespace, handle extra spaces
  const parts = title?.trim().split(/\s+/) || [];
  const lastWord = parts.length > 0 ? parts[parts.length - 1] : "";
  const head = parts.length > 1 ? parts.slice(0, -1).join(" ") : "";

  return (
    <div
      className={cn(
        "flex flex-col items-center text-center mt-4 mb-10",
        className
      )}
    >
      {/* Optional Badge / Top Label */}
      {badgeText && (
        <div className="mb-4 flex justify-center">
          <Badge className="border-primary/20 bg-primary/5 rounded-full px-4 py-1 text-sm font-medium flex items-center gap-1">
            {badgeIcon}
            {badgeText}
          </Badge>
        </div>
      )}

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="mx-4 mb-6 text-3xl font-light tracking-tight sm:text-5xl md:mb-8 md:text-5xl">
          <span> {head && <span>{head} </span>} </span>
          <span
            className={cn(
              quintessential.className,
              "text-primary drop-shadow-[0_0_10px_rgba(251,191,36,0.7)]"
            )}
          >
            {lastWord}
          </span>
        </h1>

        {/* Optional Description */}
        {description && (
          <p
            className={cn(
              "max-w-xl text-center text-sm text-foreground/70",
              descriptionClassName
            )}
          >
            {description}
          </p>
        )}
      </motion.div>
    </div>
  );
};
