"use client";

import { ProjectCard } from "@/components/projectCard/ProjectCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ProjectsOverview = () => {
  const projects = [
    {
      id: 1,
      image:
        "https://i.guim.co.uk/img/media/03a7df822cc59417396ab5061cd7eab659d6695d/1575_142_2234_1341/master/2234.jpg?width=1200&quality=85&auto=format&fit=max&s=5a19289d30fd15c358070c57bf277a16",
      title: "Telehealth Platform UX Redesign",
      subtitle: "Branding · Product Research · Product Redesign",
      year: 2024,
      featured: true,
    },
    {
      id: 2,
      image:
        "https://cdn8.openculture.com/wp-content/uploads/2014/04/Van-Gogh-Self-Portrait.jpg",
      title: "E-commerce App Redesign",
      subtitle: "UI System · Product Strategy · App Experience",
      year: 2023,
    },
    {
      id: 3,
      image:
        "https://www.shutterstock.com/image-photo/asian-young-talented-woman-artist-600nw-2082476941.jpg",
      title: "Analytics Dashboard Design",
      subtitle: "UX Audit · Data Visualization · SaaS",
      year: 2022,
    },
    {
      id: 4,
      image:
        "https://i.guim.co.uk/img/media/03a7df822cc59417396ab5061cd7eab659d6695d/1575_142_2234_1341/master/2234.jpg?width=1200&quality=85&auto=format&fit=max&s=5a19289d30fd15c358070c57bf277a16",
      title: "Telehealth Platform UX Redesign",
      subtitle: "Branding · Product Research · Product Redesign",
      year: 2024,
      featured: true,
    },
  ];

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

  // in-view trigger
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1100px] pt-[clamp(40px,10vw,76px)] px-4 md:px-0 pb-[clamp(60px,10vw,106px)]"
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
  );
};

export default ProjectsOverview;
