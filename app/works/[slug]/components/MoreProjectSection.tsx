"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { ProjectCard } from "@/components/projectCard/ProjectCard";

interface Project {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  year: number;
  featured?: boolean;
}

interface Props {
  projects: Project[];
}

export default function MoreProjectsSection({ projects }: Props) {
  // in-view trigger
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  // variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  return (
    <section className=" flex gap-4 flex-col items-start pt-[45px] bg-[#FCFCFC] text-gray-800 w-full">
      <h3 className=" px-4 md:px-0 max-w-[1100px] w-full mx-auto text-[#515151] text-[clamp(25px,3vw,30px)] font-medium">
        More Projects
      </h3>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="grid mx-auto grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1100px] px-4 md:px-0 pb-[clamp(60px,10vw,106px)]"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            // @ts-expect-error

            variants={cardVariants}
            className={project.featured ? "md:col-span-2" : ""}
          >
            <ProjectCard
              image={project.image}
              title={project.title}
              subtitle={project.subtitle}
              year={project.year}
              aspects={project.featured ? "landscape" : "portrait"}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
