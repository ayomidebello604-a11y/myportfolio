import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ffdb from "../images/ffdb.png";
import pq from "../images/pq.png";
import Csdb from "../images/csdb.png";

const projects = [
  {
    id: 1,
    title: "FlashFinance AI",
    description:
      "A polished fintech-inspired web experience with responsive sections, layered visuals, and a premium feel built with React and Tailwind CSS.",
    image: ffdb,
    liveUrl: "https://flashfinance.vercel.app/",
    githubUrl: "https://github.com/",
    badge: "AI",
    location: "Fintech",
    tags: ["React", "Tailwind", "Supabase"],
  },
  {
    id: 2,
    title: "Aether AI",
    description: "A flexible concept card showcasing extra portfolio work with a refined presentation and action links.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80",
    liveUrl: "https://aetherai-theta.vercel.app/",
    githubUrl: "https://github.com/aetherai",
    badge: "Case",
    location: "Studio",
    tags: ["Nextjs", "Tailwind", "Supabase"],
  },
  {
    id: 3,
    title: "Philo-quote",
    description:
      "A clean quote platform focused on readability, motion, and elegant storytelling for philosophical content.",
    image: pq,
    liveUrl: "https://philo-quote.vercel.app/",
    githubUrl: "https://github.com/",
    location: "Editorial",
    tags: ["React", "Motion", "Design"],
  },
  {
    id: 4,
    title: "careSync",
    description: "An additional portfolio card ready to replace with your next launch, case study, or product demo.",
    image: Csdb,
    liveUrl: "https://caresync-wine.vercel.app/",
    githubUrl: "https://github.com/",
    location: "HealthTech",
    tags: ["React", "API","Firebase"],
  },
  {
    id: 5,
    title: "Cv Boost",
    description: "A modern CV builder with a clean interface and real-time preview.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80",
    liveUrl: "https://cvboost.vercel.app/",
    githubUrl: "https://github.com/",
    location: "Product",
    tags: ["Nextjs", "Tailwind", "Supabase"],
  }
];

export default function Projects() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="projects" className="relative overflow-hidden bg-black px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
            Selected Work
          </p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">
            Projects 
          </h2>
        </div>

        <div className="flex w-full items-center justify-center overflow-visible py-10">
          <div className="relative flex h-[560px] w-full items-center justify-center">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="relative -ml-6 first:ml-0 md:-ml-10 lg:-ml-12"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <ProjectCard
                  project={project}
                  index={index}
                  total={projects.length}
                  isHovered={hoveredId === project.id}
                  onHoverStart={() => setHoveredId(project.id)}
                  onHoverEnd={() => setHoveredId(null)}  
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}