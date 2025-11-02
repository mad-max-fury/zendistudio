"use client";

import { Button } from "@/components/button/button";
import Image from "next/image";
import React, { useRef } from "react";
import { heroBg, pilBox } from "../assets/images";
import { motion, useInView } from "framer-motion";

// text reveal variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <section
      ref={ref}
      className="relative w-full pt-[140px] md:pt-[180px] overflow-hidden"
    >
      <HeroBg />

      <div className="w-full max-w-[1100px] mx-auto flex flex-col gap-5 justify-center items-center px-4">
        <motion.div
          // @ts-expect-error
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
          className="w-[180px] md:w-[247px] h-[180px] md:h-[247px]"
        >
          <Image src={pilBox} alt="pill icon" className="w-full h-full" />
        </motion.div>

        <motion.h1
          // @ts-expect-error
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="
          font-medium text-center text-[#303C49] leading-[120%]
          text-[clamp(1.75rem,4vw,4rem)]
          max-w-[723px]
        "
        >
          Designing the Future of Digital Healthcare
        </motion.h1>

        <motion.div
          // @ts-expect-error

          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={2}
        >
          <Button
            variant={"secondary"}
            className="
              bg-[#303C49] rounded-4xl cursor-pointer px-8 md:px-[58px] py-4 md:py-5
              text-white text-xs md:text-sm font-medium hover:bg-[#515151]
            "
          >
            SCHEDULE A FREE 30 MINS CALL
          </Button>
        </motion.div>

        <motion.p
          // @ts-expect-error

          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={3}
          className="
          text-center max-w-[750px] leading-[160%] text-[#617488]
          text-[clamp(0.875rem,2vw,1rem)] my-4 md:my-6
        "
        >
          Zendi Studio is a MedTech-focused design agency helping healthcare
          founders, startups and medical innovators craft HIPAA-compliant
          products, trusted brands, and engaging digital experiences through
          UX/UI, branding, motion, presentation, and product design.
        </motion.p>
      </div>
    </section>
  );
}

function HeroBg() {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 w-full h-full">
      <Image
        src={heroBg}
        alt="Medical background illustration"
        fill
        priority
        className="object-cover"
      />
    </div>
  );
}
