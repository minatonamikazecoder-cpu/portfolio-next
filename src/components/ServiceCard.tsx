import Link from "next/link";

interface ServiceCardProps {
  id: string;
  icon: string;
  title: string;
  description: string;
  deliverables: string[];
}

export default function ServiceCard({
  id,
  icon,
  title,
  description,
  deliverables,
}: ServiceCardProps) {
  return (
    <div className="bg-surface border border-border-main rounded-2xl p-8 hover:shadow-lg hover:-translate-y-[3px] transition-all duration-300 flex flex-col h-full group">
      <div className="w-12 h-12 bg-bg-alt rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-text-main group-hover:text-white transition-all duration-300">
        {icon}
      </div>

      <h4 className="font-heading text-xl text-text-main font-semibold mb-3">
        {title}
      </h4>

      <p className="text-muted text-sm leading-relaxed mb-6">
        {description}
      </p>

      {deliverables.length > 0 && (
        <ul className="space-y-2 mb-8">
          {deliverables.map((item) => (
            <li key={item} className="text-sm text-text-secondary flex items-start gap-2.5">
              <span className="text-muted flex-shrink-0">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      <Link
        href={`/services#${id}`}
        className="text-sm font-semibold text-text-main inline-flex items-center gap-1.5 hover:gap-2.5 transition-all mt-auto"
      >
        Learn More <span className="transition-transform group-hover:translate-x-1">→</span>
      </Link>
    </div>
  );
}
