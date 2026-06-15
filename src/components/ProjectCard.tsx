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
    <div className="bg-surface border border-border-main rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
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
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center transition-transform duration-500 group-hover:scale-[1.03] bg-gradient-to-br from-bg-alt to-border-main/40">
          <div className="text-4xl mb-2 opacity-80 group-hover:scale-110 transition-transform duration-300">
            {category.toLowerCase().includes("web") ? "💻" : category.toLowerCase().includes("app") ? "📱" : "⚙️"}
          </div>
          <span className="font-heading text-lg font-medium text-text-main/70">{title}</span>
        </div>
      </div>

      {/* Body content */}
      <div className="p-6 flex flex-col flex-grow">
        <h4 className="font-heading text-xl text-text-main font-semibold mb-2 group-hover:text-cta transition-colors duration-300">
          {title}
        </h4>
        <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border-main/50">
          {tech.map((item) => (
            <span
              key={item}
              className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-bg-alt text-text-secondary hover:bg-text-main hover:text-white transition-colors duration-200"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
