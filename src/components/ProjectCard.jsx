import { FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import RouteButton from './RouteButton.jsx';

export default function ProjectCard({ project, index }) {
  return (
    <article className="flex h-full flex-col">
      <Link
        to={`/projects/${project.slug}`}
        className="group block overflow-hidden rounded-xl"
        aria-label={`View ${project.title} project`}
      >
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          className="aspect-video w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
        />
      </Link>
      <div className="flex flex-1 flex-col pt-5">
        <div className="mb-3 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.18em] text-gray-400">
          <span>{String(index + 1).padStart(2, '0')} / {project.location}</span>
          <span>{project.badge ?? 'Selected work'}</span>
        </div>
        <h2 className="text-xl font-semibold md:text-2xl">
          <Link to={`/projects/${project.slug}`} className="transition hover:text-gray-300">
            {project.title}
          </Link>
        </h2>
        <p className="mt-3 flex-1 text-sm leading-6 text-gray-300">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-gray-700 bg-gray-800/70 px-3 py-1 text-xs text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <RouteButton to={`/projects/${project.slug}`} className="px-3 py-2 text-sm">
            View project
          </RouteButton>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm text-gray-300 transition hover:text-white"
          >
            Live site <FiExternalLink aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
