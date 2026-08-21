import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ffdb from "../images/ffdb.png";
import pq from "../images/pq.png";

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
    price: "$24k",
    tags: ["React", "Tailwind", "UI"],
  },
  {
    id: 2,
    title: "Philo-quote",
    description:
      "A clean quote platform focused on readability, motion, and elegant storytelling for philosophical content.",
    image: pq,
    liveUrl: "https://philo-quote.vercel.app/",
    githubUrl: "https://github.com/",
    badge: "Web",
    location: "Editorial",
    price: "$12k",
    tags: ["React", "Motion", "Design"],
  },
  {
    id: 3,
    title: "Project 3",
    description: "A flexible concept card showcasing extra portfolio work with a refined presentation and action links.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80",
    liveUrl: "#",
    githubUrl: "#",
    badge: "Case",
    location: "Studio",
    price: "$8k",
    tags: ["Next", "Brand"],
  },
  {
    id: 4,
    title: "Project 4",
    description: "An additional portfolio card ready to replace with your next launch, case study, or product demo.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    liveUrl: "#",
    githubUrl: "#",
    badge: "Launch",
    location: "Product",
    price: "$10k",
    tags: ["React", "API"],
  },
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
            Projects in a deck-like flow
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