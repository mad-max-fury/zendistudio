"use client";

import { Button } from "@/components/button/button";
import React, { useRef } from "react";
import { aboutBg } from "../assets/images";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="relative w-full isolate py-[120px] md:py-[181px] max-md:px-6">
      <Bg />

      <div className="w-full max-w-[1100px] mx-auto">
        <div className="max-w-[822px] flex flex-col gap-6">
          <RevealParagraph
            text={
              "At Zendi Studios, we specialize in end-to-end creative and product design for the MedTech industry. We help healthcare startups, medical device companies, and digital health platforms build trusted brands, intuitive products, and visually engaging experiences that comply with regulations and delight users."
            }
            className="text-[clamp(1.25rem,2.5vw,2rem)] text-[#303C49] leading-[160%]"
            as="h2"
          />

          <RevealParagraph
            text={
              "Our team blends UX strategy, branding expertise, and regulatory knowledge to help you build design systems, visuals, and products that scale globally."
            }
            className="text-[clamp(1rem,2vw,1.25rem)] leading-[160%] text-[#617488]"
          />

          <div className="mt-4">
            <Button
              variant={"secondary"}
              className="bg-[#303C49] rounded-4xl px-8 md:px-[58px] cursor-pointer py-4 md:py-5 text-white text-xs md:text-sm font-medium hover:bg-[#515151]"
            >
              SCHEDULE A FREE 30 MINS CALL
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// === background ===
function Bg() {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 max-w-7xl mx-auto">
      <Image
        src={aboutBg}
        alt="about background"
        fill
        className="object-cover"
      />
    </div>
  );
}

// === word reveal component ===
function RevealParagraph({
  text,
  className,
  as,
}: {
  text: string;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });

  const Tag = (as as any) || "p";
  const words = text.split(" ");

  return (
    <Tag className={className} ref={ref}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", marginRight: 6 }}
          initial={{ opacity: 0, y: 10 }}
          animate={
            inView ? { opacity: 1, y: 0, transition: { delay: i * 0.015 } } : {}
          }
        >
          {w}
        </motion.span>
      ))}
    </Tag>
  );
}
