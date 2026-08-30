import { motion } from "motion/react";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({
  project,
  isHovered,
  onHoverStart,
  onHoverEnd,
}) {
  return (
    <motion.article
      className="relative w-[260px] sm:w-[290px] lg:w-[320px] shrink-0 overflow-hidden rounded-[15px] md:rounded-[20px] border border-gray-700 bg-gray-900/95 text-white backdrop-blur-md"
      initial={false}
      animate={{
        scale: isHovered ? 1.06 : 1,
      }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
    >
      {/* Reduced Image Height */}
      <div className="relative h-32 sm:h-36 lg:h-40 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover object-top"
        />
        <span className="absolute right-2 top-2 rounded-full border border-gray-700 bg-gray-900/90 px-2 py-0.5 text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur">
          {project.badge ?? "Featured"}
        </span>
      </div>

      {/* Reduced Padding & Compact Layout */}
      <div className="flex flex-col gap-1.5 md:gap-2 p-2.5 md:p-3.5">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[8px] md:text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            {project.location ?? "Remote"}
          </p>
          <span className="rounded-full bg-gray-800/70 px-2 py-0.5 text-[8px] md:text-[10px] font-semibold text-white">
            {project.price ?? "Live"}
          </span>
        </div>

        <div>
          <h3 className="text-sm md:text-base font-semibold text-white leading-tight">{project.title}</h3>
          <div className="mt-0.5 md:mt-1 flex flex-wrap gap-1">
            {(project.tags ?? ["React", "UI"])
              .slice(0, 2)
              .map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gray-700 bg-gray-800/50 px-1.5 md:px-2 py-0.5 text-[7px] md:text-[9px] font-medium text-gray-300"
                >
                  {tag}
                </span>
              ))}
          </div>
        </div>

        <p className="line-clamp-2 text-[8px] md:text-xs leading-3 md:leading-4 text-gray-300">
          {project.description.replace(/<br\s*\/?>/gi, " ")}
        </p>

        <div className="mt-1 flex items-center justify-between border-t border-gray-700/80 pt-1.5 md:pt-2.5">
          <span className="text-[8px] md:text-[11px] font-medium text-gray-400">
            {project.status ?? "Case Study"}
          </span>
          <div className="flex items-center gap-1">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 rounded-full bg-white text-black px-1.5 md:px-2 py-0.5 text-[8px] md:text-[11px] font-medium hover:scale-105 transition"
            >
              <FiExternalLink size={9} />
              Live
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 rounded-full border border-gray-700 bg-gray-800/50 px-1.5 md:px-2 py-0.5 text-[8px] md:text-[11px] font-medium text-white transition hover:border-gray-600 hover:bg-gray-700/50"
            >
              <FaGithub size={9} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}