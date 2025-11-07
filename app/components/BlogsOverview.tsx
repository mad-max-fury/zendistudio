"use client";

import React from "react";
import { motion } from "framer-motion";

type Insight = {
  id: number;
  title: string;
  category: string;
  image: string;
};

const insights: Insight[] = [
  {
    id: 1,
    category: "Design Systems",
    title:
      "Designing Trust in Healthcare Apps: Why UX is a Matter of Life and Care.",
    image:
      "https://cdn8.openculture.com/wp-content/uploads/2014/04/Van-Gogh-Self-Portrait.jpg",
  },
  {
    id: 2,
    category: "Design Systems",
    title:
      "Designing Trust in Healthcare Apps: Why UX is a Matter of Life and Care.",
    image:
      "https://cdn8.openculture.com/wp-content/uploads/2014/04/Van-Gogh-Self-Portrait.jpg",
  },
  {
    id: 3,
    category: "Design Systems",
    title:
      "Designing Trust in Healthcare Apps: Why UX is a Matter of Life and Care.",
    image:
      "https://cdn8.openculture.com/wp-content/uploads/2014/04/Van-Gogh-Self-Portrait.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function InsightsFromStudio() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-white text-gray-800">
      <div className="max-w-[1100px] mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          // @ts-expect-error
          variants={headerVariants}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#515151] mb-4">
            Insights from the Studio
          </h2>
          <p className="text-lg max-w-[556px] text-[#6C6C6C] mb-12 mx-auto">
            Design strategies, product insights, and founder stories shaping the
            future of healthcare.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {insights.map((item) => (
            <motion.div
              key={item.id}
              className="flex flex-col items-start text-left group cursor-pointer"
              // @ts-expect-error
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="overflow-hidden relative h-[200px] w-full mb-4 ">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>

              <motion.span
                className="text-xs uppercase font-medium text-gray-500 tracking-wider bg-gray-100 rounded px-2 py-1 mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {item.category}
              </motion.span>

              <h3 className="text-lg font-semibold text-[#515151] leading-snug hover:text-gray-700 transition">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <motion.button
            className="px-8 py-3 rounded-full bg-gray-100 text-gray-700 font-medium transition"
            whileHover={{ scale: 1.05, backgroundColor: "#e5e5e5" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Load More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
