"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ProjectCard } from "./ProjectCard";
import { TitleSection } from "./ui/TitleSection";
import {
  AuthJS,
  BetterAuth,
  Express,
  Framer,
  MongoDB,
  NextJs,
  Node,
  React,
  Tailwind,
  TypeScript,
} from "./Icons";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";

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
      title: "Nextus LMS",
      description:
        "Lightweight Learning Management System with admin/user dashboards, Stripe payments, drag-and-drop course builder, file uploads, and server actions. Built for modern education platforms.",
      image: "/lms.webp",
      tags: [
        { icon: <NextJs className="w-4 h-4" /> },
        { icon: <TypeScript className="w-4 h-4" /> },
        { icon: <BetterAuth className="w-4 h-4" /> },
        { icon: <Tailwind className="w-4 h-4" /> },
      ],
      website: "https://lms-nextjs-theta.vercel.app/",
      github: "https://github.com/yourusername/learnflow-lms",
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
    {
      title: "Bridal Beauty Suite",
      description:
        "Comprehensive bridal makeup booking platform featuring artist portfolios, trial scheduling, package customization, and real-time availability management for seamless wedding preparations.",
      image: "/sh.webp",
      tags: [
        { icon: <NextJs className="w-4 h-4" /> },
        { icon: <Tailwind className="w-4 h-4" /> },
        { icon: <Framer className="w-4 h-4" /> },
      ],
      website: "https://shbridalmakeover.com/",
      github: "https://github.com/yourusername/bridal-beauty-suite",
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
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
      <div className="text-center mt-14">
        <Link
          href="/projects"
          className="inline-flex justify-center items-center gap-1 text-lg text-primary hover:text-primary/80 transition-colors group"
        >
          View all projects
          <ChevronsRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};
