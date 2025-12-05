"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ProjectCard } from "./ProjectCard";
import { TitleSection } from "./ui/TitleSection";

export const Projects = () => {
  const containerRef = useRef(null);

  const containerInView = useInView(containerRef, { margin: "-100px" });

  const projects = [
    {
      title: "AI SaaS Platform",
      description:
        "A modern SaaS platform with real-time AI-powered content generation.",
      image: "/ai-saas.png",
      tags: ["Next.js", "OpenAI", "TailwindCSS"],
      website: "https://example.com",
      github: "https://github.com/example",
    },
    {
      title: "Social Media Dashboard",
      description:
        "A dashboard for analytics, scheduling, and engagement tracking.",
      image: "/social-media.png",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Productivity Timer",
      description:
        "A clean productivity timer with statistics tracking and dark mode.",
      image: "/stopwatch.png",
      tags: ["React", "TypeScript", "TailwindCSS"],
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
