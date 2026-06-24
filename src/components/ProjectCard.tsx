"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Database, Code, Palette } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  category: string;
  status: string;
  tech: string[];
  image?: string;
}

export default function ProjectCard({
  slug,
  title,
  description,
  category,
  status,
  tech,
  image,
}: ProjectCardProps) {
  // Determine tag classes based on category
  const getTagStyles = () => {
    return "bg-zinc-50 text-zinc-600 border border-zinc-200/60";
  };

  const getIcon = (cat: string) => {
    const className = "w-4 h-4 text-cta";
    if (cat.toLowerCase().includes("web")) return <Monitor className={className} />;
    if (cat.toLowerCase().includes("app")) return <Smartphone className={className} />;
    if (cat.toLowerCase().includes("design") || cat.toLowerCase().includes("graphic") || cat.toLowerCase().includes("brand")) {
      return <Palette className={className} />;
    }
    if (cat.toLowerCase().includes("system") || cat.toLowerCase().includes("db") || cat.toLowerCase().includes("migration")) {
      return <Database className={className} />;
    }
    return <Code className={className} />;
  };

  return (
    <Link href={`/portfolio/${slug}`} className="block h-full">
      <motion.div
        className="bg-surface border border-border-main rounded-xl overflow-hidden flex flex-col h-full group shadow-sm transition-all duration-300 hover:border-cta/30 cursor-pointer"
        whileHover={{
          y: -6,
          boxShadow: "0 25px 50px -15px rgba(37, 99, 235, 0.08), 0 10px 20px -10px rgba(0,0,0,0.04)",
          transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
        }}
      >
      {/* Image container / visual representation */}
      <div className="relative overflow-hidden aspect-[16/10] bg-bg-alt border-b border-border-main">
        <div className="absolute top-4 left-4 z-10">
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm bg-white ${getTagStyles()}`}>
            {category}
          </span>
        </div>
        <div className="absolute top-4 right-4 z-10">
          <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 bg-text-main text-white rounded">
            {status}
          </span>
        </div>
        
        {/* Visual schematic browser mock */}
        <div className="w-full h-full p-4 flex flex-col bg-[#F1F5F9] relative group-hover:bg-[#E8EDF4] transition-colors duration-300">
          {/* Browser header */}
          <div className="flex items-center gap-1.5 mb-2">
            <span className="w-2 h-2 rounded-full bg-red-400/80" />
            <span className="w-2 h-2 rounded-full bg-amber-400/80" />
            <span className="w-2 h-2 rounded-full bg-green-400/80" />
            <div className="h-3.5 bg-white/70 rounded w-2/5 ml-2 flex items-center px-2">
              <span className="text-[7px] text-muted tracking-tight truncate">mrfreelancer.in/{title.toLowerCase().replace(" ", "-")}</span>
            </div>
          </div>
          
          {/* Browser viewport mockup content */}
          <div className="flex-grow bg-white rounded-md border border-border-main/50 shadow-sm flex flex-col justify-between overflow-hidden relative">
            {image ? (
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <div className="p-3 flex flex-col justify-between h-full">
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded bg-cta/10 flex items-center justify-center flex-shrink-0">
                    {getIcon(category)}
                  </div>
                  <div className="flex-grow space-y-1.5">
                    <div className="h-2.5 bg-text-main/10 rounded w-1/2" />
                    <div className="h-1.5 bg-text-secondary/10 rounded w-5/6" />
                    <div className="h-1.5 bg-text-secondary/10 rounded w-4/5" />
                  </div>
                </div>
                
                {/* Visual Schematic Chart/Blocks */}
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <div className="h-7 rounded bg-bg-alt/50 border border-border-main/30 p-1 flex flex-col justify-between">
                    <div className="h-1 bg-text-secondary/10 rounded w-3/4" />
                    <div className="h-2 bg-cta/25 rounded w-1/2" />
                  </div>
                  <div className="h-7 rounded bg-bg-alt/50 border border-border-main/30 p-1 flex flex-col justify-between">
                    <div className="h-1 bg-text-secondary/10 rounded w-1/2" />
                    <div className="h-2 bg-cta/40 rounded w-2/3" />
                  </div>
                  <div className="h-7 rounded bg-bg-alt/50 border border-border-main/30 p-1 flex flex-col justify-between">
                    <div className="h-1 bg-text-secondary/10 rounded w-5/6" />
                    <div className="h-1.5 bg-cta/15 rounded w-1/3" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Body content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-heading text-lg text-text-main font-bold mb-2 group-hover:text-cta transition-colors duration-300">
          {title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border-main">
          {tech.map((item) => (
            <span
              key={item}
              className="text-[10px] font-semibold px-2 py-0.5 rounded bg-accent-soft/50 text-cta hover:bg-cta hover:text-white transition-colors duration-200 cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
    </Link>
  );
}

