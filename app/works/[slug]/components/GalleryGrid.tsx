"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

interface GalleryImage {
  src: string;
  alt?: string;
  span?: string;
  height?: string;
  aspectRatio?: string;
}

interface GalleryGridProps {
  images?: GalleryImage[];
  columns?: number;
  gap?: number;
  maxWidth?: string;
  defaultHeight?: string;
  mobileHeight?: string;
  animationDuration?: number;
  staggerDelay?: number;
  enableHover?: boolean;
  objectFit?: "cover" | "contain" | "fill";
}

export default function GalleryGrid({
  images: propImages,
  columns = 6,
  gap = 4,
  maxWidth = "1104px",
  defaultHeight = "650px",
  animationDuration = 0.6,
  staggerDelay = 0.1,
  enableHover = true,
  objectFit = "cover",
}: GalleryGridProps = {}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const defaultImages: GalleryImage[] = [
    {
      src: "https://cdn8.openculture.com/wp-content/uploads/2014/04/Van-Gogh-Self-Portrait.jpg",
      span: "col-span-full",
      alt: "Featured artwork",
    },
    {
      src: "https://cdn8.openculture.com/wp-content/uploads/2014/04/Van-Gogh-Self-Portrait.jpg",
      span: "col-span-2 md:col-span-2 lg:col-span-2",
      alt: "Gallery item 1",
    },
    {
      src: "https://cdn8.openculture.com/wp-content/uploads/2014/04/Van-Gogh-Self-Portrait.jpg",
      span: "col-span-2 md:col-span-2 lg:col-span-2",
      alt: "Gallery item 2",
    },
    {
      src: "https://cdn8.openculture.com/wp-content/uploads/2014/04/Van-Gogh-Self-Portrait.jpg",
      span: "col-span-2 md:col-span-4 lg:col-span-2",
      alt: "Gallery item 3",
    },
    {
      src: "https://cdn8.openculture.com/wp-content/uploads/2014/04/Van-Gogh-Self-Portrait.jpg",
      span: "col-span-1 md:col-span-2 lg:col-span-3",
      alt: "Gallery item 4",
    },
    {
      src: "https://cdn8.openculture.com/wp-content/uploads/2014/04/Van-Gogh-Self-Portrait.jpg",
      span: "col-span-1 md:col-span-2 lg:col-span-3",
      alt: "Gallery item 5",
    },
    {
      src: "https://cdn8.openculture.com/wp-content/uploads/2014/04/Van-Gogh-Self-Portrait.jpg",
      span: "col-span-full",
      alt: "Featured artwork 2",
    },
  ];

  const images = propImages || defaultImages;

  const customItemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: animationDuration, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={containerVariants}
      className={`grid mt-10 grid-cols-2 md:grid-cols-4 lg:grid-cols-${columns} gap-2 md:gap-3 lg:gap-${gap} w-full mx-auto px-4 md:px-0`}
      style={{ maxWidth }}
    >
      {images.map((img, i) => (
        <motion.div
          key={i}
          // @ts-expect-error
          variants={customItemVariants}
          className={`${img.span ?? ""} overflow-hidden `}
          onMouseEnter={() => enableHover && setHoveredIndex(i)}
          onMouseLeave={() => enableHover && setHoveredIndex(null)}
        >
          <motion.div
            whileHover={enableHover ? { scale: 1.05 } : {}}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <Image
              src={img.src}
              alt={img.alt || `Gallery image ${i + 1}`}
              width={1200}
              height={1200}
              className={`w-full h-full transition-all duration-300`}
              style={{
                objectFit,
                height: img.height || defaultHeight,
                aspectRatio: img.aspectRatio,
                filter:
                  enableHover && hoveredIndex !== null && hoveredIndex !== i
                    ? "brightness(0.7)"
                    : "brightness(1)",
              }}
            />
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}
