import { motion } from "motion/react";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({
  project,
  index,
  total,
  isHovered,
  onHoverStart,
  onHoverEnd,
}) {
  const baseRotation = index === 0 ? -8 : index === 1 ? -3 : index === 2 ? 3 : 8;
  const baseZ = index === Math.floor(total / 2) ? 24 : 16 + (total - index);

  return (
    <motion.article
      className="relative w-[280px] shrink-0 overflow-hidden rounded-[28px] border border-gray-700 bg-gray-900/50 text-white shadow-[0_20px_45px_rgba(15,23,42,0.18)] sm:w-[300px]"
      initial={false}
      animate={{
        rotate: isHovered ? 0 : baseRotation,
        y: isHovered ? -26 : 0,
        scale: isHovered ? 1.05 : 1,
        zIndex: isHovered ? 60 : baseZ,
        boxShadow: isHovered
          ? "0 35px 80px -24px rgba(15, 23, 42, 0.4)"
          : "0 20px 45px -20px rgba(15, 23, 42, 0.2)",
      }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      style={{ transformOrigin: "bottom center" }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover object-top"
        />
        <span className="absolute right-3 top-3 rounded-full bg-gray-900/90 border border-gray-700 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur">
          {project.badge ?? "Featured"}
        </span>
      </div>

      <div className="flex h-[calc(100%-12rem)] flex-col gap-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">
            {project.location ?? "Remote"}
          </p>
          <span className="rounded-full bg-gray-800/70 px-3 py-1 text-[11px] font-semibold text-white">
            {project.price ?? "Live"}
          </span>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {(project.tags ?? ["React", "UI"])
              .slice(0, 3)
              .map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gray-700 bg-gray-800/50 px-2.5 py-1 text-[11px] font-medium text-gray-300"
                >
                  {tag}
                </span>
              ))}
          </div>
        </div>

        <p className="text-sm leading-6 text-gray-300">
          {project.description}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-gray-700 pt-4">
          <span className="text-sm font-medium text-gray-400">
            {project.status ?? "Case Study"}
          </span>
          <div className="flex items-center gap-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600/70 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-600"
            >
              <FiExternalLink size={14} />
              Live
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800/50 px-3 py-2 text-sm font-medium text-white transition hover:border-gray-600 hover:bg-gray-700/50"
            >
              <FaGithub size={14} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
