"use client";
import { easeInOut, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Quintessential } from "next/font/google";
import { cn } from "@/lib/utils";

const quintessential = Quintessential({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-quintessential",
});
function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-linear-to-r to-transparent",
            gradient,
            "border-2 border-white/80 backdrop-blur-[2px] dark:border-white/80",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.4)] dark:shadow-[0_8px_32px_0_rgba(255,255,255,0.5)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.6),transparent_70%)]",
            "dark:after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.7),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}
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
    <div className="bg-background relative flex min-h-screen w-full items-center justify-center overflow-hidden dark:bg-black">
      <div className="from-primary/20 dark:from-primary/30 absolute inset-0 bg-linear-to-br via-transparent to-primary/20 blur-3xl dark:to-primary/30" />
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={500}
          height={80}
          rotate={12}
          gradient="from-indigo-500/70"
          className="top-[15%] left-[-10%] md:top-[20%] md:left-[-5%] dark:hidden"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={80}
          rotate={-15}
          gradient="from-rose-400"
          className="top-[70%] right-[-5%] md:top-[75%] md:right-[0%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-400"
          className="bottom-[5%] left-[5%] md:bottom-[10%] md:left-[10%]"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/70 dark:from-amber-400/90"
          className="top-[10%] right-[15%] md:top-[15%] md:right-[20%]"
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/70 dark:from-cyan-400/90"
          className="top-[5%] left-[20%] md:top-[10%] md:left-[25%]"
        />
      </div>
      <div className="relative z-10 container mx-auto max-w-6xl px-4 md:px-6">
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
              <span className="text-muted-foreground">
                Check out my works in action
              </span>
              <ChevronRight className="text-muted-foreground ml-1 h-4 w-4" />
            </div>
          </motion.div>
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="mx-4 mb-6 text-4xl font-light tracking-tight sm:text-6xl md:mb-8 md:text-6xl">
              <span
                className={cn(
                  "from-foreground to-foreground/80 bg-linear-to-b bg-clip-text text-transparent"
                )}
              >
                {`Hi, I'm `}
                <span
                  className={cn(
                    "p-4 text-amber-500 text-4xl font-light tracking-tight sm:text-4xl md:text-6xl ",
                    "drop-shadow-[0_0_10px_rgba(251,191,36,0.7)]", // Amber glow
                    "hover:drop-shadow-[0_0_20px_rgba(251,191,36,0.9)]", // Hover effect
                    quintessential.className
                  )}
                >
                  Nishanthan!
                </span>
              </span>
              <br />
              <span
                className={cn(
                  "p-4  text-4xl font-light tracking-tight sm:text-4xl md:text-4xl ",
                  "drop-shadow-[0_0_10px_rgba(251,191,36,0.7)]", // Amber glow
                  "hover:drop-shadow-[0_0_20px_rgba(251,191,36,0.9)]", // Hover effect

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
            <p className="text-muted-foreground mx-auto  mb-10 max-w-xl px-4 text-base leading-relaxed sm:text-lg md:text-xl !font-(--font-pacifico)!">
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
              size="lg"
              className="from-primary shadow-primary/10 hover:from-primary/90 rounded-full text-black border-none bg-linear-to-r to-primary shadow-md hover:to-primary/90"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 hover:bg-primary/5 rounded-full shadow-sm"
            >
              View Components
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="from-background to-background/80 pointer-events-none absolute inset-0 bg-linear-to-t via-transparent dark:from-black dark:to-black/80" />
    </div>
  );
}
