"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/utils/helper";

interface ProjectCardProps {
  image: string;
  title: string;
  subtitle?: string;
  year?: string | number;
  className?: string;
  onClick?: () => void;
  aspects?: "landscape" | "portrait";
}

export const ProjectCard = ({
  image,
  title,
  subtitle,
  year,
  className,
  onClick,
  aspects = "landscape",
}: ProjectCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      transition={{ type: "spring", stiffness: 150 }}
      onClick={onClick}
      className={cn(
        "relative overflow-hidden  bg-white  cursor-pointer transition-all duration-300",
        className
      )}
    >
      <div
        className={cn("relative w-full  overflow-hidden", {
          "aspect-16/10": aspects === "landscape",
          "aspect-4/5": aspects === "portrait",
        })}
      >
        {!isLoaded && (
          <div className="absolute inset-0 animate-pulse bg-neutral-200" />
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
            onLoad={() => setIsLoaded(true)}
            priority
          />
        </motion.div>
      </div>

      {/* Text Section */}
      <div className="flex justify-between items-start py-5">
        <div>
          <h3 className="text-[0.95rem] font-semibold tracking-tight text-neutral-800 uppercase">
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs text-neutral-500 mt-1 tracking-wide uppercase">
              {subtitle}
            </p>
          )}
        </div>
        {year && (
          <span className="text-xs text-neutral-400 font-medium">{year}</span>
        )}
      </div>
    </motion.div>
  );
};
