"use client";

import { cn } from "@/utils/helper";
import { motion, AnimatePresence } from "framer-motion";
import { act, useState } from "react";

const items = [
  {
    id: 1,
    title: "Brand Identity & Strategy",
    description:
      "Naming, visual identity, and brand systems that express purpose, credibility, and care.",
  },
  {
    id: 2,
    title: "Product UX Research & Strategy",
    description:
      "Discover insights, define user journeys, and create research-driven product strategies.",
  },
  {
    id: 3,
    title: "UI Design & Design Systems",
    description:
      "Consistent, scalable design systems that streamline product design and development.",
  },
  {
    id: 4,
    title: "Motion & Interaction Design",
    description:
      "Enhance usability and delight users through motion principles and thoughtful transitions.",
  },
  {
    id: 5,
    title: "Pitch Decks & Investor Materials",
    description:
      "Visually compelling presentations that communicate your vision with clarity and confidence.",
  },
];

export default function DesignAccordion() {
  const [active, setActive] = useState(1);

  const toggle = (id: number) => {
    setActive(active === id ? -1 : id);
  };

  return (
    <section className="max-w-[1100px]  w-full pb-16 px-4 md:px-0">
      <h2 className="text-[clamp(40px,8.5vw,64px)] font-medium max-w-[800px] leading-snug text-[#515151] mb-3">
        Everything Design a Founder Needs,{" "}
        <span className="italic text-(--neutral)">From Idea to Launch.</span>
      </h2>

      <div className="flex flex-col ">
        {items.map((item) => (
          <div
            key={item.id}
            className={`py-6 cursor-pointer transition-colors relative duration-300 ${
              active === item.id ? "bg-white" : "hover:bg-gray-50"
            }`}
            onClick={() => toggle(item.id)}
          >
            <div
              className={cn(
                "h-[7px] w-full bg-linear-to-r absolute top-0 left-0 right-0  to-transparent mb-10",
                active === item.id ? "from-green-300" : "from-[#F3F3F3]"
              )}
            />

            <div className="flex items-start gap-6">
              <span
                className={`text-3xl font-semibold ${
                  active === item.id ? "text-gray-400" : "text-gray-200"
                }`}
              >
                {String(item.id).padStart(2, "0")}
              </span>

              <div className="flex-1">
                <p
                  className={`text-lg font-medium ${
                    active === item.id ? "text-gray-900" : "text-gray-500"
                  }`}
                >
                  {item.title}
                </p>

                <AnimatePresence>
                  {active === item.id && (
                    <motion.p
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-500 text-sm mt-2 leading-relaxed"
                    >
                      {item.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
