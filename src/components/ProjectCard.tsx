"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  status: string;
  tech: string[];
  imageUrl: string;
}

export default function ProjectCard({
  title,
  description,
  category,
  status,
  tech,
  imageUrl,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tracking for 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  // Determine tag classes based on category
  const getTagStyles = (cat: string) => {
    switch (cat.toLowerCase()) {
      case "web development":
      case "web":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "app development":
      case "app":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "systems migration":
      case "migration":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300";
      default:
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className="bg-surface border border-border-main rounded-2xl overflow-hidden flex flex-col h-full group"
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
      whileHover={{
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.1)",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Image container */}
      <div className="relative overflow-hidden aspect-[16/10] bg-bg-alt">
        <div className="absolute top-4 left-4 z-10">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full tracking-wide shadow-sm ${getTagStyles(category)}`}>
            {category}
          </span>
        </div>
        <div className="absolute top-4 right-4 z-10">
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-text-main/90 text-white rounded-md shadow-sm">
            {status}
          </span>
        </div>
        
        {/* Placeholder image representation with visual styling */}
        <motion.div
          className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-bg-alt to-border-main/40"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="text-4xl mb-2 opacity-80"
            animate={{ scale: isHovered ? 1.2 : 1, rotate: isHovered ? 5 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            {category.toLowerCase().includes("web") ? "💻" : category.toLowerCase().includes("app") ? "📱" : "⚙️"}
          </motion.div>
          <span className="font-heading text-lg font-medium text-text-main/70">{title}</span>
        </motion.div>
      </div>

      {/* Body content */}
      <div className="p-6 flex flex-col flex-grow">
        <h4 className="font-heading text-xl text-text-main font-semibold mb-2 group-hover:text-cta transition-colors duration-300">
          {title}
        </h4>
        <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        {/* Tech Badges with stagger */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border-main/50">
          {tech.map((item, index) => (
            <motion.span
              key={item}
              className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-bg-alt text-text-secondary hover:bg-text-main hover:text-white transition-colors duration-200 cursor-default"
              initial={false}
              animate={isHovered ? { y: 0, opacity: 1 } : {}}
              transition={{
                delay: index * 0.03,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              whileHover={{ scale: 1.08 }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
