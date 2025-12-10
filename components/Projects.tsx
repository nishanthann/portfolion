"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ProjectCard } from "./ProjectCard";
import { TitleSection } from "./ui/TitleSection";
import {
  AuthJS,
  BetterAuth,
  Express,
  MongoDB,
  NextJs,
  Node,
  React,
  Tailwind,
  TypeScript,
} from "./Icons";

export const Projects = () => {
  const containerRef = useRef(null);

  const containerInView = useInView(containerRef, { margin: "-100px" });

  const projects = [
    {
      title: "Invoicer",
      description:
        "Vehicle Booking Lite app enabling users to view, search, book, and manage vehicles through dashboard. CRUD operations (Create, Read, Update, Delete) for efficient booking.",
      image: "/einvoicer.webp",
      tags: [
        { icon: <TypeScript className="w-4 h-4" /> },
        { icon: <NextJs className="w-4 h-4" /> },
        { icon: <AuthJS className="w-4 h-4" /> },

        { icon: <Tailwind className="w-4 h-4" /> },
      ],
      website: "https://e-invoice-rho.vercel.app",
      github: "https://github.com/example",
    },
    {
      title: "Social Media Dashboard",
      description:
        "A dashboard for analytics, scheduling, and engagement tracking.",
      image: "/einvoicer.webp",
      tags: [{ icon: <BetterAuth className="w-4 h-4" /> }],
    },
    {
      title: "Go Rentals",
      description:
        "Vehicle Booking Lite app enabling users to view, search, book, and manage vehicles through dashboard. CRUD operations (Create, Read, Update, Delete) for efficient booking.",
      image: "/gorental.webp",
      tags: [
        { icon: <React className="w-4 h-4" /> },
        { icon: <Node className="w-4 h-4" /> },
        { icon: <Express className="w-4 h-4" /> },
        { icon: <MongoDB className="w-4 h-4" /> },
      ],
      website: "https://go-rental-lyart.vercel.app/",
      github: "https://github.com/nishanthann/go-rental",
    },
  ];

  return (
    <section id="projects" className="w-full py-24 px-6">
      <TitleSection
        title="Crafted With Passion"
        description="Explore my latest creations and experiments."
      />

      <motion.div
        ref={containerRef}
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        initial="hidden"
        animate={containerInView ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.2,
            },
          },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={{
              hidden: {
                opacity: 0,
                scale: 0.8,
                y: 50,
              },
              visible: (i = index) => ({
                opacity: 1,
                scale: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                  delay: i * 0.1,
                },
              }),
            }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
