"use client";
import { easeInOut, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  ArrowRight,
  ChevronRight,
  Github,
  Linkedin,
} from "lucide-react";
import { Quintessential } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const quintessential = Quintessential({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-quintessential",
});

export default function HeroGeometric() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: easeInOut,
      },
    }),
  };
  return (
    <div className=" flex min-h-screen w-full items-center justify-center overflow-hidden ">
      <div className="  container mx-auto max-w-6xl  px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-6 flex justify-center"
          >
            <div
              className="border-border bg-background/80 inline-flex items-center rounded-full border px-3 py-1 text-sm backdrop-blur-sm bg-linear-to-r from-transparent via-primary/10 to-transparent 
                 bg-size-[250%_100%] animate-[shine_6s_linear_infinite]"
            >
              <span className="bg-primary mr-2 rounded-full px-2 py-0.5 text-xs font-semibold text-white">
                New
              </span>
              <span className="text-muted-foreground">Check out my works</span>
              <ChevronRight className="text-muted-foreground ml-1 h-4 w-4" />
            </div>
          </motion.div>
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="mx-4 mb-6 text-4xl font-light tracking-tight sm:text-6xl md:mb-8 md:text-[40px]">
              <span
                className={cn(
                  "from-foreground to-foreground/80 bg-linear-to-b bg-clip-text text-transparent"
                )}
              >
                <span>{`Hi, I'm `}</span>
                <span
                  className={cn(
                    "p-4 dark:text-primary text-black text-4xl font-light tracking-tight sm:text-4xl md:text-[40px]  ",
                    "drop-shadow-[0_0_10px_rgba(251,191,36,0.7)]", // Amber glow

                    quintessential.className
                  )}
                >
                  Nishanthan!
                </span>
              </span>
              <br />
              <span
                className={cn(
                  "p-4  text-2xl font-light tracking-tight sm:text-3xl md:text-2xl ",
                  // "drop-shadow-[0_0_10px_rgba(251,191,36,0.7)]", // Amber glow

                  quintessential.className
                )}
              >
                Fullstack Developer
              </span>
            </h1>
          </motion.div>
          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-muted-foreground mx-auto  mb-10 max-w-xl px-4 text-base leading-relaxed sm:text-lg md:text-l ">
              Hands-on experience in MERN stack, Next.js, and some React Native.
              Specializing in building modern, full-stack applications with
              scalable architecture and responsive UI.
            </p>
          </motion.div>
          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Button
              size="sm"
              className="from-primary group shadow-primary/10 hover:from-primary/90 rounded-full text-black border-none bg-linear-to-r to-primary shadow-md hover:to-primary/90"
            >
              Get Started
              <ArrowRight className=" h-4 w-4 transition-transform duration-300 -translate-x-0.5 group-hover:translate-x-0.5" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-primary/30 hover:bg-primary/5 rounded-full shadow-sm  group"
            >
              <Link
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Download CV
                <ArrowDown
                  size={18}
                  className="transition-transform duration-300 -translate-y-0.5 group-hover:translate-y-0.5"
                />
              </Link>
            </Button>
          </motion.div>
          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className=" mt-6 flex justify-center gap-4 sm:mr-4"
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
