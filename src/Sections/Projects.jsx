import ProjectCard from '../components/ProjectCard.jsx';
import Reveal from '../components/Reveal.jsx';
import { projects } from '../data/projects.js';

export default function Projects() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
      <Reveal>
        <header className="mb-12 max-w-3xl md:mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-gray-400">Selected work</p>
          <h1 className="text-3xl font-bold md:text-5xl">Projects</h1>
          <p className="mt-4 text-base leading-7 text-gray-300 md:text-lg">
            Explore AI workspaces, résumé tools, financial analysis, health applications, and
            interactive experiences I’ve built. Each project highlights a different way I turn
            product needs into useful features.
          </p>
        </header>
      </Reveal>

      <Reveal>
        <ol className="grid grid-cols-1 items-stretch gap-x-10 gap-y-12 sm:grid-cols-2 lg:gap-x-14 lg:gap-y-16">
          {projects.map((project, index) => (
            <li key={project.slug} className="h-full">
              <ProjectCard project={project} index={index} />
            </li>
          ))}
        </ol>
      </Reveal>
    </main>
  );
}
