"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const VideoSection = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // update video playback time based on scroll
  React.useEffect(() => {
    const unsub = scrollYProgress.on("change", (p) => {
      const video = videoRef.current;
      if (!video) return;
      if (!duration || isNaN(duration)) return;

      // Clamp progress between 0 and 1
      const clampedProgress = Math.max(0, Math.min(1, p));
      const newTime = clampedProgress * duration;

      // Only update if significantly different to avoid jank
      if (Math.abs(video.currentTime - newTime) > 0.1) {
        video.currentTime = newTime;
      }
    });

    return () => unsub();
  }, [scrollYProgress, duration]);

  // handle video metadata loaded
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  // subtle scale zoom
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 1]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ scale }}
      className="max-w-7xl w-full h-[664px] mx-auto bg-black flex items-center justify-center overflow-hidden"
    >
      <video
        ref={videoRef}
        src="/your-video.mp4"
        muted
        playsInline
        preload="auto"
        onLoadedMetadata={handleLoadedMetadata}
        className="w-full h-full object-cover"
        style={{ pointerEvents: "none" }}
      />
    </motion.section>
  );
};

export default VideoSection;
